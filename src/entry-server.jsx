import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App.jsx'
import { notFoundRoute, renderHead, routes } from './routes.jsx'

export { routes, notFoundRoute }

export function render(route) {
  const html = renderToString(
    <StrictMode>
      <App route={route} />
    </StrictMode>,
  )
  return { html, head: renderHead(route) }
}
