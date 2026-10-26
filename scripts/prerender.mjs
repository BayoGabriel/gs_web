/**
 * Static prerender: renders every route with the SSR bundle in dist-ssg/ and
 * writes a full index.html per route into dist/. Crawlers that never execute
 * JS get real content; browsers hydrate the same markup via hydrateRoot.
 */
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')

const { render, paths, ssrMeta } = await import(
  pathToFileURL(join(root, 'dist-ssg', 'entry-ssg.js')).href
)

const template = await readFile(join(dist, 'index.html'), 'utf8')

const esc = (s) =>
  s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

/** Rebuild the route's <head> meta from what useDocumentMeta recorded during render. */
function applyMeta(html, meta) {
  let out = html
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(meta.title)}</title>`)
    .replace(
      /<meta\s+name="description"[\s\S]*?\/>/,
      `<meta name="description" content="${esc(meta.description)}" />`,
    )
    .replace(
      /<link\s+rel="canonical"[\s\S]*?\/>/,
      `<link rel="canonical" href="${esc(meta.url)}" />`,
    )
    .replace(
      /<meta\s+property="og:url"[\s\S]*?\/>/,
      `<meta property="og:url" content="${esc(meta.url)}" />`,
    )
  const extra =
    `<meta property="og:title" content="${esc(meta.title)}" />\n    ` +
    `<meta property="og:description" content="${esc(meta.description)}" />\n    ` +
    `<meta name="twitter:title" content="${esc(meta.title)}" />\n    ` +
    `<meta name="twitter:description" content="${esc(meta.description)}" />`
  return out.replace('</head>', `    ${extra}\n  </head>`)
}

for (const path of paths) {
  if (path === '/resellers') {
    // Static redirect — crawlers and no-JS browsers land on /sellers.
    const html = `<!doctype html><html lang="en"><head><meta charset="UTF-8" /><meta http-equiv="refresh" content="0; url=/sellers" /><link rel="canonical" href="https://gitshop.co/sellers" /><title>Redirecting — GitShop</title></head><body><p>Redirecting to <a href="/sellers">/sellers</a>.</p></body></html>`
    await mkdir(join(dist, 'resellers'), { recursive: true })
    await writeFile(join(dist, 'resellers', 'index.html'), html)
    console.log('prerendered /resellers (redirect)')
    continue
  }

  const { html: appHtml, status } = await render(path)
  let out = template.replace(
    /<div id="root">[\s\S]*<\/div>(\s*)<\/body>/,
    `<div id="root" data-prerendered="1">${appHtml}</div>$1</body>`,
  )
  if (ssrMeta.title) out = applyMeta(out, ssrMeta)
  const file = path === '/' ? join(dist, 'index.html') : join(dist, path, 'index.html')
  await mkdir(dirname(file), { recursive: true })
  await writeFile(file, out)
  console.log(`prerendered ${path} (${status}, ${(appHtml.length / 1024).toFixed(1)} KB)`)
}
