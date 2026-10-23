// Minimal gzip-capable static server for dist/ (vite preview is uncompressed).
import { createServer } from 'node:http'
import { readFile } from 'node:fs/promises'
import { extname, join, normalize } from 'node:path'
import { gzip } from 'node:zlib'
import { promisify } from 'node:util'
import { fileURLToPath } from 'node:url'

const ROOT = fileURLToPath(new URL('../dist', import.meta.url))
const PORT = Number(process.env.PORT ?? 5399)
const gz = promisify(gzip)
const MIME = {
  '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css',
  '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png',
  '.webp': 'image/webp', '.ico': 'image/x-icon', '.woff2': 'font/woff2',
  '.woff': 'font/woff', '.xml': 'application/xml', '.webmanifest': 'application/manifest+json',
}
const COMPRESSIBLE = new Set(['.html', '.js', '.css', '.json', '.svg', '.xml', '.webmanifest'])

createServer(async (req, res) => {
  try {
    let path = normalize(decodeURIComponent(new URL(req.url, 'http://x').pathname))
    let file = join(ROOT, path)
    if (path.endsWith('/') || !extname(path)) {
      try {
        await readFile(join(file, 'index.html'))
        file = join(file, 'index.html')
      } catch {
        file = join(ROOT, 'index.html') // SPA fallback
      }
    }
    const body = await readFile(file)
    const type = MIME[extname(file)] ?? 'application/octet-stream'
    const acceptsGzip = /\bgzip\b/.test(req.headers['accept-encoding'] ?? '')
    if (acceptsGzip && COMPRESSIBLE.has(extname(file))) {
      res.writeHead(200, { 'Content-Type': type, 'Content-Encoding': 'gzip' })
      res.end(await gz(body))
    } else {
      res.writeHead(200, { 'Content-Type': type })
      res.end(body)
    }
  } catch {
    res.writeHead(404); res.end('not found')
  }
}).listen(PORT, () => console.log(`serving dist on http://localhost:${PORT}`))
