import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { matchRoute } from './routes.jsx'

const base = import.meta.env.BASE_URL
let path = location.pathname
if (path.startsWith(base)) path = '/' + path.slice(base.length)
else if (path + '/' === base) path = '/'

const route = matchRoute(path)
const container = document.getElementById('root')
const app = (
  <StrictMode>
    <App route={route} />
  </StrictMode>
)

// Build çıktısında sayfa önceden HTML olarak üretildiği için "hydrate" edilir;
// geliştirme modunda (npm run dev) ise sıfırdan çizilir.
if (container.firstElementChild) {
  hydrateRoot(container, app)
} else {
  if (route.title) document.title = route.title
  createRoot(container).render(app)
}
