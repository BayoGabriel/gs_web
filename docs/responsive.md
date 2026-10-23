# GitShop Responsive Rules

Mobile-first. Design at **360px wide**, verify down to 320px. Use `min-width` media queries and container queries; never device-specific hacks.

---

## 1. Breakpoints

| Name | Min width | Columns | Gutter | Page margin | Navigation | Notes |
|---|---|---|---|---|---|---|
| base | 0 | 4 | 16 | 16 | bottom tabs (app), menu button (site) | single column |
| xs | 480 | 4 | 16 | 16 | same | larger phones: 2-up product grids |
| sm | 640 | 8 | 24 | 24 | same | 2-up cards, side-by-side forms where useful |
| md | 768 | 8 | 24 | 32 | top bar full nav (site), icon rail (app) | tables return, modals replace sheets |
| lg | 1024 | 12 | 32 | 32 | sidebar 256 (app) | 3-up grids |
| xl | 1280 | 12 | 32 | auto (container 1200) | same | 4-up repo grids |
| 2xl | 1536 | 12 | 32 | auto (container 1440 app) | same | cap widths, never stretch content |

Use tokens `--bp-*` and `--gutter-*`. Components should respond to their container (`@container`) when reused in different layouts (cards, wallet card, product rows).

## 2. Component adaptation

| Component | < 768px | >= 768px |
|---|---|---|
| Top navigation (site) | logo + menu button opens full-screen menu (focus trapped) | horizontal nav |
| App navigation | bottom tab bar (Home, Repos, Orders, Wallet, More) | sidebar (>=1024) or icon rail (768 to 1023) |
| Table | stacked cards: primary field as title, 2 to 3 key fields, status chip, chevron | full table |
| Filters | "Filters" button opens bottom sheet with Apply / Clear | inline toolbar or side panel |
| Modal | bottom sheet (top radius 24, max 90dvh) | centred modal 480/640 |
| Forms | single column, inputs full width, sticky bottom action bar with safe-area padding | max width 480 (640 for wide forms), actions right-aligned |
| Tabs | horizontally scrollable, active tab scrolled into view, no wrap | full row |
| Repo / product grid | 1 col (base), 2 col (xs/sm) | 3 col (lg), 4 col (xl) |
| Product detail | gallery then info, sticky "Fork" or "Add to cart" bar | two columns, info sticky |
| Wallet card | full width, actions stacked 2-up | card + side panel of quick actions |
| Dashboard stats | 2 x 2 grid or horizontal snap scroller | 4 across |
| Breadcrumbs | collapse to "< Parent" back link | full path |
| Hero | stacked: headline, copy, buttons (full width), visual below | split 7/5 columns |

## 3. Logo responsiveness

| Context | Logo |
|---|---|
| Site header < 480px | horizontal lockup, 112px wide |
| Site header >= 480px | horizontal lockup, 128 to 144px wide |
| App compact top bar / icon rail | mark only, 32px |
| Footer | stacked lockup, 96 to 120px wide |
| Favicon / tabs | favicon.svg (tile); `favicon-small.svg` below 24px |
| Share cards | `social/` assets |

Never scale below the minimum sizes in `design-principles.md`.

## 4. Typography and spacing

- Headings use the mobile step-down values in `typography.md`; `display-*` use `clamp()`.
- Section padding: 56 to 80px on mobile, 80 to 128px on desktop.
- Line length: keep body at 65 characters max on all sizes; do not let text span the full container on large screens.
- Respect user text size and 200% zoom. Layout must reflow without horizontal scroll at 320 CSS px (WCAG 1.4.10).

## 5. Touch and input

- Touch targets: 44 x 44px minimum, 8px between neighbours.
- Hover-only styles live in `@media (hover: hover) and (pointer: fine)`.
- Use `dvh/svh` instead of `vh` for full-height layouts; add `env(safe-area-inset-*)` padding to fixed bars.
- Set `viewport-fit=cover` and never disable zoom.
- Inputs use font-size 16px minimum to prevent iOS auto-zoom; set `inputmode` and `autocomplete`.
- Orientation: support landscape; do not lock.

## 6. Images and media

- Always set `width`/`height` or `aspect-ratio` to avoid layout shift.
- `srcset` + `sizes`; formats AVIF with WebP fallback; max 200KB for above-the-fold hero imagery.
- Product images: 1:1 on `--surface`, radius from the card, `loading="lazy"` below the fold, `fetchpriority="high"` for the LCP image only.
- Video is optional, muted, no autoplay on data-saver or reduced motion.

## 7. Performance budgets (mobile, mid-range device, 4G)

| Metric | Budget |
|---|---|
| LCP | <= 2.5s |
| INP | <= 200ms |
| CLS | <= 0.1 |
| Marketing page JS (gzip) | <= 170KB |
| Marketing page total transfer | <= 1MB (images lazy) |
| Fonts | <= 3 WOFF2 files preloaded, <= 90KB total preloaded |

Honour `prefers-reduced-data` / Save-Data: skip hero animation, serve smaller images.

## 8. Test matrix

Widths: 320, 360, 390, 430, 768, 1024, 1280, 1536. Also: 200% zoom, landscape phone, one low-end Android browser, iOS Safari, desktop Chrome/Firefox/Safari, light and dark themes. Every PR includes screenshots at 360, 768 and 1280.
