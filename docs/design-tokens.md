# GitShop Design Tokens

Source of truth: `../tokens.css`. Every value below is in that file. All 38 semantic text/boundary pairs (light and dark) were re-checked by script against `tokens.css` with zero failures. Contrast ratios were computed with the WCAG 2.x relative-luminance formula and logo geometry was measured from the SVG artwork source. Do not introduce values that are not listed here.

---

## 1. Logo geometry (measured from the artwork)

The mark is drawn on a 64-unit grid. Three squares, each 34 units, offset by 10 units.

| Measurement | Value | Ratio | Used for |
|---|---|---|---|
| Square edge | 34 | 1.000 | reference |
| Corner radius | 9 | **0.265** of edge | `--radius-ratio` |
| Layer offset (step) | 10 | **0.294** of edge | `--stack-step-*` |
| Knock-out gap (per side) | 3.5 | **0.103** of edge | `--stack-gap` |
| Mark overall extent | 54 | 1.588 of edge | clear-space maths |
| Wordmark cap height | 100 | 1.000 | clear space = 1 cap height |
| Wordmark x-height | 72 | 0.72 of cap | type proportions |
| Wordmark descender | 36 | 0.36 of cap | |
| Bold stroke ("Git") | 17 | 0.170 of cap | `--weight-bold` |
| Light stroke ("Shop") | 8.5 | 0.085 of cap | `--weight-light` |
| Wordmark width | 480 | 4.8 x cap | |
| Horizontal lockup: mark height | 150 | 1.5 x cap | |
| Horizontal lockup: gap | 44 | 0.44 x cap | |
| Stacked lockup: mark width / wordmark width | 173 / 480 | 0.36 | |
| Stacked lockup: gap | 56 | 0.56 x cap | |

## 2. Colour

### Primitives
| Token | Hex | Token | Hex |
|---|---|---|---|
| `--gs-black` | #000000 | `--gs-gray-550` | #6B6B6B |
| `--gs-white` | #FFFFFF | `--gs-gray-600` | #666666 |
| `--gs-gray-50` | #F4F4F4 | `--gs-gray-700` | #595959 |
| `--gs-gray-100` | #EAEAEA | `--gs-gray-800` | #333333 |
| `--gs-gray-200` | #E3E3E3 | `--gs-gray-850` | #2B2B2B |
| `--gs-gray-300` | #CFCFCF | `--gs-gray-900` | #1A1A1A |
| `--gs-gray-400` | #A6A6A6 | `--gs-gray-950` | #0F0F0F |
| `--gs-gray-500` | #8A8A8A | `--gs-red-600` / `--gs-red-400` | #B3261E / #FF6B60 |

Red is the **only** non-grey colour and is used only for errors and destructive actions. There is no green, ever. Success is shown with a black check icon and the word "Completed".

### Semantic tokens
| Token | Light | Dark | Purpose |
|---|---|---|---|
| `--bg` | #FFFFFF | #000000 | page |
| `--surface` | #F4F4F4 | #0F0F0F | sections, input wells, product image backdrop |
| `--surface-raised` | #FFFFFF | #1A1A1A | cards, menus, modals |
| `--border` | #E3E3E3 | #2B2B2B | decorative dividers, card edges |
| `--border-strong` | #8A8A8A | #6B6B6B | **input and control boundaries** |
| `--text` | #000000 | #FFFFFF | body, headings |
| `--text-muted` | #595959 | #A6A6A6 | secondary text |
| `--text-subtle` | #666666 | #8A8A8A | captions, metadata |
| `--text-disabled` | #A6A6A6 | #6B6B6B | disabled only |
| `--primary` / `--on-primary` | #000 / #FFF | #FFF / #000 | primary buttons, inverted blocks |
| `--primary-hover` | #333333 | #E3E3E3 | |
| `--primary-active` | #1A1A1A | #CFCFCF | |
| `--danger` / `--on-danger` | #B3261E / #FFF | #FF6B60 / #000 | errors, destructive |
| `--hover-surface` / `--pressed-surface` | #F4F4F4 / #EAEAEA | #1A1A1A / #2B2B2B | row and ghost-button states |

### Verified contrast (WCAG 2.2)
| Pair | Ratio | Requirement | Result |
|---|---|---|---|
| text #000 on bg #FFF | 21.00 | 4.5 | Pass |
| text-muted #595959 on #FFF | 7.00 | 4.5 | Pass |
| text-muted #595959 on surface #F4F4F4 | 6.37 | 4.5 | Pass |
| text-subtle #666666 on #FFF | 5.74 | 4.5 | Pass |
| text-subtle #666666 on #F4F4F4 | 5.22 | 4.5 | Pass |
| border-strong #8A8A8A on #FFF | 3.45 | 3.0 (non-text) | Pass |
| border-strong #8A8A8A on #F4F4F4 | 3.14 | 3.0 (non-text) | Pass |
| danger #B3261E on #FFF | 6.54 | 4.5 | Pass |
| danger #B3261E on #F4F4F4 | 5.94 | 4.5 | Pass |
| on-primary #FFF on #333333 (hover) | 12.63 | 4.5 | Pass |
| Dark: text #FFF on #000 | 21.00 | 4.5 | Pass |
| Dark: text-muted #A6A6A6 on #000 | 8.63 | 4.5 | Pass |
| Dark: text-muted #A6A6A6 on #0F0F0F | 7.87 | 4.5 | Pass |
| Dark: text-subtle #8A8A8A on #000 | 6.08 | 4.5 | Pass |
| Dark: text-subtle #8A8A8A on #1A1A1A (raised) | 5.04 | 4.5 | Pass |
| Dark: border-strong #6B6B6B on #000 | 3.94 | 3.0 | Pass |
| Dark: border-strong #6B6B6B on #0F0F0F | 3.60 | 3.0 | Pass |
| Dark: border-strong #6B6B6B on #1A1A1A (raised) | 3.27 | 3.0 | Pass |
| Dark: danger #FF6B60 on #000 | 7.52 | 4.5 | Pass |
| Dark: danger #FF6B60 on #0F0F0F | 6.87 | 4.5 | Pass |

**Known non-pass (by design):** `--border` #E3E3E3 on white is 1.28:1. It is decorative only. Any boundary needed to identify a control uses `--border-strong`. `--text-subtle` must not be used on #EAEAEA or darker backgrounds. `--text-disabled` (#A6A6A6, 2.52:1 on white) is exempt as disabled text.

## 3. Spacing (4px grid)

`--space-1` 4 | `-2` 8 | `-3` 12 | `-4` 16 | `-5` 20 | `-6` 24 | `-8` 32 | `-10` 40 | `-12` 48 | `-16` 64 | `-20` 80 | `-24` 96 | `-32` 128

Usage: inside components 4-16, between components 16-32, between sections 64-128 (desktop), 48-80 (mobile).

## 4. Radius

Rule from the logo: **radius = 26.5% of the shortest edge**, snapped to the 4px scale for squares up to 96px; larger surfaces cap at 24px.

| Token | Value | Element size it fits | Ideal (26.5%) | Deviation |
|---|---|---|---|---|
| `--radius-xs` | 4px | chips, tags (16px tall) | 4.2 | -6% |
| `--radius-sm` | 8px | 32px controls | 8.5 | -6% |
| `--radius-md` | 12px | 44px controls, 48px icon tiles | 11.7 / 12.7 | +3% / -6% |
| `--radius-lg` | 16px | 56px buttons, 64px tiles | 14.8 / 17.0 | +8% / -6% |
| `--radius-xl` | 24px | 96px+ cards, modals, images | 25.4 | -6% |
| `--radius-full` | 9999px | switches, avatars, status dots | n/a | |

Nested radius: inner radius = outer radius minus padding (min 4px).

## 5. Stack (layered depth)

Replaces elevation. See `components.md` > Stack Card.

| Token | Value | Use |
|---|---|---|
| `--stack-step-sm` | 8px | tiles, avatars, small cards (up to ~32px) |
| `--stack-step-md` | 12px | list cards, product cards (~40px to 48px logic, default) |
| `--stack-step-lg` | 16px | hero and feature cards |
| `--stack-gap` | 4px | knock-out gap between layers (the page colour) |
| `--stack-max-layers` | 3 | like the mark: source plus up to 2 layers behind |

## 6. Sizing and layout

| Token | Value |
|---|---|
| `--control-sm` / `-md` / `-lg` | 32 / 44 / 56px |
| Minimum touch target | 44 x 44px (hard floor 24px per WCAG 2.2 SC 2.5.8) |
| `--container` / `--container-wide` | 1200 / 1440px |
| Gutters | 16px mobile, 24px tablet, 32px desktop |
| Grid | 4 columns (<768), 8 (768-1023), 12 (>=1024) |
| Breakpoints | xs 480, sm 640, md 768, lg 1024, xl 1280, 2xl 1536 |
| Icon sizes | 16, 20, 24, 32px |

## 7. Motion

| Token | Value | Use |
|---|---|---|
| `--dur-instant` | 80ms | press feedback |
| `--dur-fast` | 120ms | hover, focus, colour changes |
| `--dur-base` | 200ms | stack fan-out, menus, tabs |
| `--dur-slow` | 320ms | modals, sheets, page transitions |
| `--dur-slower` | 480ms | hero and scroll reveals only |
| `--ease-standard` | cubic-bezier(.2,0,0,1) | default |
| `--ease-decelerate` | cubic-bezier(0,0,0,1) | entering |
| `--ease-accelerate` | cubic-bezier(.3,0,1,1) | leaving |

All durations become 0ms under `prefers-reduced-motion`.

## 8. Elevation and layering

- Cards: no shadow. Use border (`--border`) or the Stack.
- Popovers, menus: `--shadow-overlay` (light mode) plus 1px `--border`. Dark mode: border only.
- Z-index: base 0, sticky 100, nav 200, overlay 300, modal 400, toast 500.

## 9. Focus ring

Two-ring focus so it is visible on any background: `box-shadow: 0 0 0 2px var(--focus-inner), 0 0 0 4px var(--focus-outer);` Ring colours are `--bg` inside and `--text` outside (21:1 against each other).
