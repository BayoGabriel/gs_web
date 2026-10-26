import { prerender } from 'react-dom/static'
import {
  createStaticHandler,
  createStaticRouter,
  StaticRouterProvider,
  type RouteObject,
} from 'react-router'
import { routes } from './app/routes'
export { ssrMeta } from './hooks/useDocumentMeta'

const SITE_URL = 'https://gitshop.co'

/**
 * `handler.query` does not resolve `lazy` route modules in a way
 * `StaticRouterProvider` can render synchronously, so resolve them up front and
 * hand the handler eagerly-loaded elements instead.
 */
async function resolveLazy(list: RouteObject[]): Promise<RouteObject[]> {
  return Promise.all(
    list.map(async (route) => {
      const resolved = { ...route }
      if (typeof resolved.lazy === 'function') {
        const mod = await (resolved.lazy as () => Promise<RouteObject>)()
        delete resolved.lazy
        Object.assign(resolved, mod)
      }
      if (resolved.children) resolved.children = await resolveLazy(resolved.children)
      return resolved
    }),
  )
}

let resolved: { routes: RouteObject[]; handler: ReturnType<typeof createStaticHandler> } | null =
  null
async function getResolved() {
  if (!resolved) {
    const list = await resolveLazy(routes)
    resolved = { routes: list, handler: createStaticHandler(list) }
  }
  return resolved
}

/**
 * Renders a route to a full HTML string. Waits out every Suspense boundary
 * (e.g. the lazy mobile menu) before emitting markup.
 */
export async function render(path: string): Promise<{ html: string; status: number }> {
  const { routes: resolvedRoutes, handler } = await getResolved()
  const context = await handler.query(new Request(`${SITE_URL}${path}`))
  if (context instanceof Response) {
    return { html: '', status: context.status }
  }
  const router = createStaticRouter(resolvedRoutes, context)
  const { prelude } = await prerender(
    <StaticRouterProvider router={router} context={context} hydrate={false} />,
    { bootstrapScripts: [] },
  )
  const html = await new Response(prelude).text()
  return { html, status: context.statusCode ?? 200 }
}

/** Every concrete page path in the route table (catch-all excluded). */
export const paths = (routes[0].children ?? [])
  .map((r) => (r.index ? '/' : `/${r.path}`))
  .filter((p) => !p.includes('*'))
