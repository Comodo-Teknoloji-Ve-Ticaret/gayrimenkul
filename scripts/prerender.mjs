// Her rotayı statik HTML olarak üretir (SEO için): dist/<yol>/index.html
// Ayrıca 404.html, sitemap.xml ve robots.txt yazar.
import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'
import { SITE_URL } from '../site.config.js'

const root = path.resolve(import.meta.dirname, '..')
const dist = path.join(root, 'dist')
const ssrDir = path.join(root, 'dist-ssr')

const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')
const { render, routes, notFoundRoute } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href)

const page = (route) => {
  const { html, head } = render(route)
  return template.replace('<!--app-head-->', head).replace('<!--app-html-->', html)
}

for (const route of routes) {
  const out = path.join(dist, route.path, 'index.html')
  fs.mkdirSync(path.dirname(out), { recursive: true })
  fs.writeFileSync(out, page(route))
  console.log('  ✓', route.path)
}
fs.writeFileSync(path.join(dist, '404.html'), page(notFoundRoute))
console.log('  ✓ 404.html')

const today = new Date().toISOString().slice(0, 10)
const abs = (p) => SITE_URL + p
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map((r) => {
    const priority = r.path === '/' ? '1.0' : r.path.split('/').length <= 3 ? '0.9' : '0.7'
    return `  <url><loc>${abs(r.path)}</loc><lastmod>${today}</lastmod><priority>${priority}</priority></url>`
  })
  .join('\n')}
</urlset>
`
fs.writeFileSync(path.join(dist, 'sitemap.xml'), sitemap)

fs.writeFileSync(
  path.join(dist, 'robots.txt'),
  `# Arama motorları ve yapay zekâ asistanları için tüm içerik açıktır.
User-agent: *
Allow: /

Sitemap: ${abs('/sitemap.xml')}
`,
)

// llms.txt içindeki {{SITE_URL}} yer tutucusunu gerçek adresle değiştir
const llms = path.join(dist, 'llms.txt')
if (fs.existsSync(llms)) fs.writeFileSync(llms, fs.readFileSync(llms, 'utf8').replaceAll('{{SITE_URL}}', SITE_URL))

fs.rmSync(ssrDir, { recursive: true, force: true })
console.log(`\n${routes.length} sayfa + 404 + sitemap.xml + robots.txt üretildi.`)
