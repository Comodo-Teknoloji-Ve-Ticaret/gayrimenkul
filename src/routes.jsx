import Home, { HOME_FAQS } from './pages/Home.jsx'
import { ArticlePage, ContactPage, DistrictPage, GuideIndex, NotFound, ServicePage } from './pages/Pages.jsx'
import { AGENT, UPDATED, absUrl } from './data/site.js'
import { SERVICES } from './data/services.js'
import { DISTRICTS } from './data/districts.js'
import { ARTICLES } from './data/articles.js'

/* ───────────── Yapılandırılmış veri (Schema.org) ───────────── */

const ORG_ID = absUrl('/') + '#organization'
const PERSON_ID = absUrl('/') + '#person'
const SITE_ID = absUrl('/') + '#website'

const AREA_SERVED = ['Aydın', 'Efeler', 'Kuşadası', 'Didim', 'Nazilli', 'Söke', 'İncirliova', 'Germencik', 'Çine', 'Köşk', 'Davutlar', 'Güzelçamlı', 'Altınkum', 'Akbük'].map(
  (name, i) => ({ '@type': i === 0 ? 'City' : 'Place', name }),
)

const baseGraph = () => [
  {
    '@type': 'RealEstateAgent',
    '@id': ORG_ID,
    name: 'Ozan Arslan – Pasha Gayrimenkul Aydın',
    alternateName: AGENT.altNames,
    url: absUrl('/'),
    image: absUrl('/' + AGENT.photo),
    logo: absUrl('/favicon.svg'),
    description:
      "Aydın Efeler merkezli; Aydın ve ilçelerinde kiralık ev, satılık ev, öğrenci apartı, arsa, tarla ve zeytinlik alım-satım-kiralama ile ücretsiz ekspertiz hizmeti veren gayrimenkul danışmanı.",
    telephone: AGENT.phoneE164,
    email: AGENT.email,
    priceRange: '₺₺',
    address: {
      '@type': 'PostalAddress',
      streetAddress: AGENT.street,
      addressLocality: AGENT.district,
      addressRegion: AGENT.city,
      postalCode: AGENT.postalCode,
      addressCountry: 'TR',
    },
    geo: { '@type': 'GeoCoordinates', latitude: AGENT.lat, longitude: AGENT.lng },
    hasMap: AGENT.mapsUrl,
    areaServed: AREA_SERVED,
    employee: { '@id': PERSON_ID },
    parentOrganization: { '@type': 'Organization', name: 'Pasha Gayrimenkul' },
    sameAs: [AGENT.linkedin],
    knowsLanguage: ['tr'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Aydın gayrimenkul hizmetleri',
      itemListElement: [
        ...SERVICES.map((s) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: s.h1, url: absUrl(`/${s.slug}/`) } })),
        { '@type': 'Offer', price: '0', priceCurrency: 'TRY', itemOffered: { '@type': 'Service', name: 'Ücretsiz gayrimenkul ekspertizi (değer tespiti)' } },
      ],
    },
  },
  {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: AGENT.name,
    alternateName: AGENT.altNames[0],
    jobTitle: AGENT.title,
    image: absUrl('/' + AGENT.photo),
    telephone: AGENT.phoneE164,
    email: AGENT.email,
    worksFor: { '@id': ORG_ID },
    workLocation: { '@type': 'Place', name: 'Efeler, Aydın' },
    sameAs: [AGENT.linkedin],
    knowsAbout: [
      'Aydın kiralık ev',
      'Aydın satılık ev',
      'Aydın öğrenci apartı',
      'Efeler konut piyasası',
      'Kuşadası ve Didim yazlık yatırımları',
      'Arsa, tarla ve zeytinlik alım-satımı',
      'Tapu ve imar süreçleri',
    ],
  },
  {
    '@type': 'WebSite',
    '@id': SITE_ID,
    url: absUrl('/'),
    name: 'Ozan Arslan Gayrimenkul – Aydın',
    inLanguage: 'tr-TR',
    publisher: { '@id': ORG_ID },
  },
]

const faqLd = (faqs) =>
  faqs?.length
    ? {
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      }
    : null

const crumbLd = (items) => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: absUrl(it.path) })),
})

const pageLd = (path, title, description, extra = {}) => ({
  '@type': 'WebPage',
  '@id': absUrl(path) + '#webpage',
  url: absUrl(path),
  name: title,
  description,
  inLanguage: 'tr-TR',
  isPartOf: { '@id': SITE_ID },
  about: { '@id': ORG_ID },
  dateModified: UPDATED,
  ...extra,
})

/* ───────────── Rotalar ───────────── */

export const routes = [
  {
    path: '/',
    title: "Aydın Kiralık Ev, Satılık Ev ve Öğrenci Apart | Ozan Arslan – Pasha Gayrimenkul",
    description:
      "Aydın'da kiralık ev, satılık daire, ADÜ öğrencileri için öğrenci apartı, arsa ve zeytinlik. Efeler, Kuşadası, Didim, Nazilli ve Söke'de güvenilir emlak danışmanı Ozan Arslan. Ücretsiz ekspertiz: 0534 649 73 41",
    element: () => <Home />,
    ld: (r) => [pageLd(r.path, r.title, r.description), faqLd(HOME_FAQS)],
  },
  ...SERVICES.map((s) => ({
    path: `/${s.slug}/`,
    title: s.seoTitle,
    description: s.description,
    element: () => <ServicePage service={s} />,
    ld: (r) => [
      pageLd(r.path, r.title, r.description),
      {
        '@type': 'Service',
        name: s.h1,
        description: s.answer,
        provider: { '@id': ORG_ID },
        areaServed: AREA_SERVED,
        url: absUrl(r.path),
      },
      crumbLd([{ name: 'Ana sayfa', path: '/' }, { name: s.short, path: r.path }]),
      faqLd(s.faqs),
    ],
  })),
  ...DISTRICTS.map((d) => ({
    path: `/bolgeler/${d.slug}/`,
    title: d.seoTitle,
    description: d.description,
    element: () => <DistrictPage district={d} />,
    ld: (r) => [
      pageLd(r.path, r.title, r.description, { spatialCoverage: { '@type': 'Place', name: `${d.name}, Aydın` } }),
      crumbLd([{ name: 'Ana sayfa', path: '/' }, { name: d.name, path: r.path }]),
      faqLd(d.faqs),
    ],
  })),
  {
    path: '/rehber/',
    title: 'Aydın Gayrimenkul Rehberi: Kiralama, Satın Alma, Öğrenci Evi | Ozan Arslan',
    description:
      "Aydın'da öğrenci evi kiralama, ev alırken tapu süreci, evini kiraya verenler için sözleşme rehberi ve Efeler–Kuşadası–Didim yatırım karşılaştırması.",
    element: () => <GuideIndex />,
    ld: (r) => [
      pageLd(r.path, r.title, r.description, { '@type': 'CollectionPage' }),
      crumbLd([{ name: 'Ana sayfa', path: '/' }, { name: 'Rehber', path: r.path }]),
    ],
  },
  ...ARTICLES.map((a) => ({
    path: `/rehber/${a.slug}/`,
    title: `${a.title} | Ozan Arslan`,
    description: a.description,
    ogType: 'article',
    element: () => <ArticlePage article={a} />,
    ld: (r) => [
      {
        '@type': 'Article',
        '@id': absUrl(r.path) + '#article',
        headline: a.title,
        description: a.description,
        abstract: a.summary,
        datePublished: a.date,
        dateModified: a.date,
        inLanguage: 'tr-TR',
        author: { '@id': PERSON_ID },
        publisher: { '@id': ORG_ID },
        image: absUrl('/' + AGENT.photo),
        mainEntityOfPage: absUrl(r.path),
      },
      crumbLd([{ name: 'Ana sayfa', path: '/' }, { name: 'Rehber', path: '/rehber/' }, { name: a.title, path: r.path }]),
      faqLd(a.faqs),
    ],
  })),
  {
    path: '/iletisim/',
    title: 'İletişim ve Ücretsiz Ekspertiz | Ozan Arslan – Pasha Gayrimenkul Efeler, Aydın',
    description:
      'Ozan Arslan ile iletişim: 0534 649 73 41 · Yedieylül Mah. Çine Cd. No:1/A Efeler/Aydın. Mülkünüz için ücretsiz ve bağlayıcı olmayan ekspertiz talep edin.',
    element: () => <ContactPage />,
    ld: (r) => [
      pageLd(r.path, r.title, r.description, { '@type': 'ContactPage' }),
      crumbLd([{ name: 'Ana sayfa', path: '/' }, { name: 'İletişim', path: r.path }]),
    ],
  },
]

export const notFoundRoute = {
  path: '/404/',
  title: 'Sayfa bulunamadı | Ozan Arslan Gayrimenkul',
  description: 'Aradığınız sayfa bulunamadı.',
  noindex: true,
  element: () => <NotFound />,
  ld: () => [],
}

export function matchRoute(path) {
  let p = path || '/'
  if (!p.endsWith('/')) p += '/'
  return routes.find((r) => r.path === p) || notFoundRoute
}

/** <head> içine yazılacak HTML (yalnızca build sırasında kullanılır) */
export function renderHead(route) {
  const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')
  const url = absUrl(route.path)
  const img = absUrl('/' + AGENT.photo)
  const graph = [...baseGraph(), ...route.ld(route)].filter(Boolean)
  const json = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c')
  return [
    `<title>${esc(route.title)}</title>`,
    `<meta name="description" content="${esc(route.description)}" />`,
    route.noindex
      ? `<meta name="robots" content="noindex, follow" />`
      : `<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />`,
    route.noindex ? '' : `<link rel="canonical" href="${url}" />`,
    `<meta name="author" content="Ozan Arslan" />`,
    `<meta name="geo.region" content="TR-09" />`,
    `<meta name="geo.placename" content="Efeler, Aydın" />`,
    `<meta name="geo.position" content="${AGENT.lat};${AGENT.lng}" />`,
    `<meta name="ICBM" content="${AGENT.lat}, ${AGENT.lng}" />`,
    `<meta property="og:locale" content="tr_TR" />`,
    `<meta property="og:type" content="${route.ogType || 'website'}" />`,
    `<meta property="og:site_name" content="Ozan Arslan – Pasha Gayrimenkul" />`,
    `<meta property="og:title" content="${esc(route.title)}" />`,
    `<meta property="og:description" content="${esc(route.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${img}" />`,
    `<meta property="og:image:alt" content="Ozan Arslan – Aydın gayrimenkul danışmanı" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(route.title)}" />`,
    `<meta name="twitter:description" content="${esc(route.description)}" />`,
    `<meta name="twitter:image" content="${img}" />`,
    `<script type="application/ld+json">${json}</script>`,
  ]
    .filter(Boolean)
    .join('\n    ')
}
