/**
 * Generates tasteful image placeholders at the exact final filenames.
 * Tonal grey gradient + grain + stacked-square watermark + pixel label
 * with the slot id. Founder replaces each by overwriting
 * public/images/<slot-id>.webp (same name).
 *
 *   node scripts/generate-placeholders.mjs
 */
import { mkdirSync, readFileSync } from 'node:fs'
import sharp from 'sharp'

const SRC = 'src/content/images.ts'
const OUT = 'public/images'
mkdirSync(OUT, { recursive: true })

// Parse slots from the manifest: slot('id', 'w/h', 'treatment', ...)
const src = readFileSync(SRC, 'utf8')
const slots = [...src.matchAll(/slot\('([^']+)',\s*'(\d+)\/(\d+)',\s*'([^']+)'/g)].map(
  (m) => ({ id: m[1], w: +m[2], h: +m[3], treatment: m[4] }),
)
for (let i = 1; i <= 12; i += 1)
  slots.push({ id: `product-${String(i).padStart(2, '0')}`, w: 1, h: 1, treatment: 'product' })

const sizes = { '4/5': [800, 1000], '4/3': [1200, 900], '1/1': [800, 800], '16/9': [1280, 720] }

// 3x5 (M/N/W: 5/4 wide) pixel font — deterministic, no font dependency.
const FONT = {
  A:['010','101','111','101','101'], B:['110','101','110','101','110'],
  C:['011','100','100','100','011'], D:['110','101','101','101','110'],
  E:['111','100','110','100','111'], F:['111','100','110','100','100'],
  G:['011','100','101','101','011'], H:['101','101','111','101','101'],
  I:['111','010','010','010','111'], J:['011','001','001','101','010'],
  K:['101','101','110','101','101'], L:['100','100','100','100','111'],
  M:['10001','11011','10101','10001','10001'],
  N:['1001','1101','1011','1001','1001'],
  O:['010','101','101','101','010'], P:['110','101','110','100','100'],
  Q:['010','101','101','110','011'], R:['110','101','110','101','101'],
  S:['011','100','010','001','110'], T:['111','010','010','010','010'],
  U:['101','101','101','101','111'], V:['101','101','101','101','010'],
  W:['10001','10001','10101','11011','10001'],
  X:['101','101','010','101','101'], Y:['101','101','010','010','010'],
  Z:['111','001','010','100','111'],
  '0':['111','101','101','101','111'], '1':['010','110','010','010','111'],
  '2':['110','001','010','100','111'], '3':['110','001','010','001','110'],
  '4':['001','101','111','001','001'], '5':['111','100','110','001','110'],
  '6':['011','100','110','101','010'], '7':['111','001','010','010','010'],
  '8':['010','101','010','101','010'], '9':['010','101','011','001','110'],
  '-':['000','000','111','000','000'], ' ':['000','000','000','000','000'],
}

function rnd(seed) {
  let s = seed >>> 0 || 1
  return () => (s = (s * 1664525 + 1013904223) >>> 0) / 4294967296
}

function fill(buf, width, height, x, y, shade) {
  if (x < 0 || y < 0 || x >= width || y >= height) return
  const i = (y * width + x) * 3
  buf[i] = buf[i + 1] = buf[i + 2] = shade
}

function drawText(buf, W, H, x, y, text, scale, shade) {
  let cx = x
  for (const ch of text.toUpperCase()) {
    const glyph = FONT[ch] ?? FONT[' ']
    glyph.forEach((row, gy) => {
      ;[...row].forEach((bit, gx) => {
        if (bit !== '1') return
        for (let dy = 0; dy < scale; dy += 1)
          for (let dx = 0; dx < scale; dx += 1)
            fill(buf, W, H, cx + gx * scale + dx, y + gy * scale + dy, shade)
      })
    })
    cx += (glyph[0].length + 1) * scale
  }
}

function insideRoundedRect(px, py, x, y, w, h, r) {
  if (px < x || px >= x + w || py < y || py >= y + h) return false
  const cx = px < x + r ? x + r : px >= x + w - r ? x + w - r - 1 : px
  const cy = py < y + r ? y + r : py >= y + h - r ? y + h - r - 1 : py
  return (px - cx) ** 2 + (py - cy) ** 2 <= r * r + r * 2
}

function basePixels(width, height, seed, product) {
  const buf = Buffer.alloc(width * height * 3)
  const rand = rnd(seed)
  const [lo, hi] = product ? [240, 226] : [205, 155]
  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const t = (x / width + y / height) / 2
      const g = Math.round(hi + (lo - hi) * t + (rand() - 0.5) * 14)
      const i = (y * width + x) * 3
      buf[i] = buf[i + 1] = buf[i + 2] = Math.max(0, Math.min(255, g))
    }
  }
  return buf
}

function strokeSquare(buf, width, height, x, y, size, r, t, shade) {
  for (let py = y - 4; py < y + size + 4; py += 1) {
    for (let px = x - 4; px < x + size + 4; px += 1) {
      if (px < 0 || py < 0 || px >= width || py >= height) continue
      const inOuter = insideRoundedRect(px, py, x, y, size, size, r)
      const inInner = insideRoundedRect(px, py, x + t, y + t, size - t * 2, size - t * 2, Math.max(1, r - t))
      if (inOuter && !inInner) {
        const i = (py * width + px) * 3
        buf[i] = buf[i + 1] = buf[i + 2] = Math.round(buf[i] * 0.35 + shade * 0.65)
      }
    }
  }
}

for (const s of slots) {
  const [W, H] = sizes[`${s.w}/${s.h}`] ?? [800, 800]
  const product = s.treatment === 'product'
  const seed = [...s.id].reduce((a, c) => a + c.charCodeAt(0), 0)
  const px = basePixels(W, H, seed, product)

  const size = Math.round(Math.min(W, H) * 0.16)
  const step = Math.round(size * 0.28)
  const bx = W - size - step * 2 - Math.round(W * 0.05)
  const by = H - size - step * 2 - Math.round(H * 0.08)
  const shade = product ? 150 : 45
  strokeSquare(px, W, H, bx, by, size, Math.round(size * 0.26), 3, shade)
  strokeSquare(px, W, H, bx + step, by + step, size, Math.round(size * 0.26), 3, shade)
  strokeSquare(px, W, H, bx + step * 2, by + step * 2, size, Math.round(size * 0.26), 3, shade)

  const scale = Math.max(3, Math.round(W / 220))
  const textShade = product ? 90 : 245
  drawText(px, W, H, Math.round(W * 0.05), H - Math.round(H * 0.07), s.id, scale, textShade)

  await sharp(px, { raw: { width: W, height: H, channels: 3 } })
    .webp({ quality: 72 })
    .toFile(`${OUT}/${s.id}.webp`)
}

console.log(`Generated ${slots.length} placeholders in ${OUT}`)
