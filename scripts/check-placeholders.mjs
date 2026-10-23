// Counts data-placeholder flags in src/. Fails when STRICT_PLACEHOLDERS=1,
// so launch builds can reject shipping flagged placeholder content.
import { readdir, readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { join, relative } from 'node:path'

const ROOT = fileURLToPath(new URL('..', import.meta.url))

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name)
    if (entry.isDirectory()) yield* walk(path)
    else if (/\.(tsx?|jsx?)$/.test(entry.name)) yield path
  }
}

let count = 0
for await (const file of walk(join(ROOT, 'src'))) {
  const source = await readFile(file, 'utf8')
  const hits = source.match(/data-placeholder/g) ?? []
  if (hits.length) {
    count += hits.length
    console.log(`${relative(ROOT, file)} — ${hits.length} flag(s)`)
  }
}

console.log(`\n${count} placeholder flag(s) found.`)
if (process.env.STRICT_PLACEHOLDERS === '1' && count) {
  console.error('STRICT_PLACEHOLDERS=1 — replace all placeholders before launch.')
  process.exit(1)
}
