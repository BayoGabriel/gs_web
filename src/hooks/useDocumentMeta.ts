import { useEffect } from 'react'
import { useLocation } from 'react-router'

const SITE_URL = (
  (import.meta.env.VITE_SITE_URL as string | undefined) ?? 'https://gitshop.co'
).replace(/\/$/, '')

function upsertMeta(selector: string, attrs: Record<string, string>) {
  let el = document.querySelector<HTMLMetaElement>(selector)
  if (!el) {
    el = document.createElement('meta')
    document.head.appendChild(el)
  }
  Object.entries(attrs).forEach(([key, value]) => el!.setAttribute(key, value))
}

/** Last meta written during server rendering; read by scripts/prerender.mjs. */
export const ssrMeta = { title: '', description: '', url: '' }

function recordSsrMeta(title: string, description: string, url: string) {
  ssrMeta.title = title
  ssrMeta.description = description
  ssrMeta.url = url
}

/** Sets title, description, canonical and OG/Twitter tags per page. */
export function useDocumentMeta(title: string, description: string) {
  const { pathname } = useLocation()
  const fullTitle = `${title} — GitShop`
  const url = `${SITE_URL}${pathname}`

  if (typeof document === 'undefined') recordSsrMeta(fullTitle, description, url)

  useEffect(() => {
    document.title = fullTitle
    upsertMeta('meta[name="description"]', { name: 'description', content: description })
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: fullTitle })
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: description })
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: url })
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: fullTitle })
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: description })
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = url
  }, [fullTitle, description, url])
}
