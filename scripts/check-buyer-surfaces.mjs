// Fails if any buyer-facing component (src/**/storefront/**) contains
// supply-chain wording that must never reach a customer surface.
import { readdir, readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { join, relative } from 'node:path'

const ROOT = fileURLToPath(new URL('..', import.meta.url))
const SCAN_DIR = join(ROOT, 'src', 'features', 'storefront')
const TERMS = ['wholesale', 'supplier', 'fulfilled by', 'markup', 'margin', 'fork', 'repo']
const PATTERN = new RegExp(`\\b(${TERMS.join('|').replace(/ /g, '\\s')})\\b`, 'i')

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name)
    if (entry.isDirectory()) yield* walk(path)
    else if (/\.(tsx?|jsx?)$/.test(entry.name)) yield path
  }
}

let failures = 0
try {
  for await (const file of walk(SCAN_DIR)) {
    const rel = relative(ROOT, file)
    const lines = (await readFile(file, 'utf8')).split('\n')
    lines.forEach((line, i) => {
      const match = line.match(PATTERN)
      if (match) {
        failures++
        console.error(`${rel}:${i + 1} — forbidden term "${match[1]}": ${line.trim()}`)
      }
    })
  }
} catch (error) {
  if (error.code === 'ENOENT') {
    console.log('No storefront components found — nothing to check.')
  } else {
    throw error
  }
}

if (failures) {
  console.error(`\n${failures} supply-chain term(s) found on buyer-facing surfaces.`)
  process.exit(1)
}
console.log('Buyer-surface check passed.')
