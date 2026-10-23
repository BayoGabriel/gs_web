// Runs axe-core on every route; exits 1 on serious or critical violations.
import { readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { chromium } from 'playwright'

const BASE = process.env.BASE_URL ?? 'http://localhost:5199'
const AXE = fileURLToPath(new URL('../node_modules/axe-core/axe.min.js', import.meta.url))
const routes = [
  '/', '/product', '/product/repo-management', '/product/forking',
  '/product/storefronts', '/product/wallet', '/product/order-routing',
  '/sellers', '/wholesalers', '/use-cases', '/pricing', '/security',
  '/blog', '/guides', '/docs', '/help', '/about', '/contact',
  '/signin', '/signup', '/privacy', '/terms', '/accessibility', '/ui-kit',
]
const source = await readFile(AXE, 'utf8')
const browser = await chromium.launch()
const page = await browser.newPage()
let failures = 0

for (const route of routes) {
  await page.goto(`${BASE}${route}`, { waitUntil: 'networkidle' })
  await page.addScriptTag({ content: source })
  const results = await page.evaluate(() => window.axe.run(document, { resultTypes: ['violations'] }))
  const bad = results.violations.filter((v) => ['serious', 'critical'].includes(v.impact))
  const minor = results.violations.length - bad.length
  console.log(`${route}: ${bad.length} serious/critical, ${minor} minor/moderate`)
  bad.forEach((v) => {
    failures++
    console.error(`  ${v.impact} ${v.id}: ${v.help} (${v.nodes.length} node(s))`)
    v.nodes.slice(0, 3).forEach((n) => console.error(`    ${n.target.join(' ')}`))
  })
}
await browser.close()
process.exit(failures ? 1 : 0)
