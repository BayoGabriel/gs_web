import { Resvg } from '@resvg/resvg-js'
import { readFileSync, writeFileSync } from 'node:fs'

// Regenerates public/og-image-light.png from the supplied brand SVG (1200x630).
const svg = readFileSync('src/assets/svg/social/og-image-light.svg')
const png = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } })
  .render()
  .asPng()
writeFileSync('public/og-image-light.png', png)
console.log('Wrote public/og-image-light.png')
