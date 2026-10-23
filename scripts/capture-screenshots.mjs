// Captures every page at 360/768/1280 in light and dark into docs/screenshots/.
// Requires the dev server (default http://localhost:5199, override BASE_URL).
import { mkdir } from 'node:fs/promises'
import { chromium } from 'playwright'

const BASE = process.env.BASE_URL ?? 'http://localhost:5199'
const OUT = new URL('../docs/screenshots/', import.meta.url)

const routes = [
  '/', '/product', '/product/repo-management', '/product/forking',
  '/product/storefronts', '/product/wallet', '/product/order-routing',
  '/sellers', '/wholesalers', '/use-cases', '/pricing', '/security',
  '/blog', '/guides', '/docs', '/help', '/about', '/contact',
  '/signin', '/signup', '/privacy', '/terms', '/accessibility', '/ui-kit', '/404-preview',
]
const widths = [360, 768, 1280]
const themes = ['light', 'dark']

const name = (r) => (r === '/' ? 'home' : r.replaceAll('/', '-').replace(/^-/, ''))
const browser = await chromium.launch()

for (const theme of themes) {
  for (const width of widths) {
    const context = await browser.newContext({
      viewport: { width, height: 900 },
      colorScheme: theme,
      deviceScaleFactor: 1,
    })
    for (const route of routes) {
      const page = await context.newPage()
      await page.goto(`${BASE}${route}`, { waitUntil: 'networkidle' })
      await page.waitForTimeout(400)
      const dir = `${OUT.pathname.replace(/^\/([A-Za-z]:)/, '$1')}${theme}-${width}/`
      await mkdir(dir, { recursive: true })
      await page.screenshot({ path: `${dir}${name(route)}.png`, fullPage: true })
      await page.close()
      console.log(`${theme} ${width}px ${route}`)
    }
    await context.close()
  }
}
await browser.close()
console.log('Screenshots saved to docs/screenshots/')
