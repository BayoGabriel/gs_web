import '@fontsource-variable/sora'
import '@fontsource-variable/inter'
import '@fontsource/jetbrains-mono/latin-400.css'
import '@fontsource/jetbrains-mono/latin-500.css'
import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { matchRoutes, RouterProvider, type RouteObject } from 'react-router'
import './index.css'
import { createRouter } from './app/router'
import { routes } from './app/routes'

const root = document.getElementById('root')!

/**
 * The prerendered markup holds the fully rendered page. A router that is still
 * resolving `lazy` route modules renders nothing on its first pass ("No
 * HydrateFallback"), which breaks hydration and leaves the static copy in the
 * DOM next to a second client-rendered one. Resolve the lazy module(s) for the
 * current location before creating the router so the first render matches the
 * server markup.
 */
async function resolveCurrentRoutes() {
  const matches = matchRoutes(routes, window.location.pathname) ?? []
  await Promise.all(
    matches.map(async ({ route }) => {
      if (typeof route.lazy === 'function') {
        Object.assign(route, await (route.lazy as () => Promise<RouteObject>)())
        delete route.lazy
      }
    }),
  )
}

async function start() {
  const app = (router: ReturnType<typeof createRouter>) => (
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  )
  // Prerendered pages ship real markup inside #root — hydrate it; anything else
  // (dev server, where #root only holds the splash) mounts fresh.
  if (root.dataset.prerendered) {
    await resolveCurrentRoutes()
    hydrateRoot(root, app(createRouter()))
  } else {
    createRoot(root).render(app(createRouter()))
  }
}

void start()
