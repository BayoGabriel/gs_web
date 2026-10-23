# GitShop Typography

The wordmark pairs a **bold** "Git" with a **light** "Shop" in a geometric sans. The interface keeps that DNA: a geometric display face for headings, a neutral humanist sans for reading, and a mono face for the git-flavoured data (SKUs, IDs, hashes, prices in tables).

## 1. Font families

| Role | Family | Why | Fallback stack |
|---|---|---|---|
| Display + headings | **Sora** (OFL, variable 100-800) | Geometric forms match the wordmark | `system-ui, -apple-system, "Segoe UI", Roboto, sans-serif` |
| Body + UI | **Inter** (OFL, variable) | Highly legible at small sizes, supports tabular numerals | same |
| Data / code | **JetBrains Mono** (OFL) | SKUs, order IDs, commit-like references | `ui-monospace, SFMono-Regular, Menlo, Consolas, monospace` |

Rules:
- **Self-host** WOFF2 subsets (Latin plus Latin Extended). Use `font-display: swap`. Preload the Sora 700 and Inter 400 files only.
- Load at most: Sora 300, 700; Inter 400, 500, 600; JetBrains Mono 400. Variable fonts are preferred.
- The wordmark itself is an SVG. Never retype "GitShop" in a font to imitate the logo. In running text write "GitShop" in the body font.

## 2. Type scale

Base 16px, line heights on the 4px grid. Sizes in `rem`.

| Token | Size / line | Weight | Tracking | Family | Use |
|---|---|---|---|---|---|
| `display-xl` | clamp(44px, 26px + 5.2vw, 96px) / 1.0 | 700 + 300 | -0.045em | Sora | landing hero only |
| `display-lg` | clamp(36px, 24px + 3.6vw, 72px) / 1.05 | 700 + 300 | -0.04em | Sora | section statements |
| `h1` | 48 / 52 (36 / 40 mobile) | 700 | -0.03em | Sora | page title |
| `h2` | 36 / 40 (30 / 36 mobile) | 700 | -0.025em | Sora | section title |
| `h3` | 24 / 32 | 600 | -0.02em | Sora | card and panel title |
| `h4` | 20 / 28 | 600 | -0.01em | Sora | subsection |
| `body-lg` | 18 / 28 | 400 | 0 | Inter | intro, lead paragraphs |
| `body` | 16 / 24 | 400 | 0 | Inter | default |
| `body-sm` | 14 / 20 | 400 | 0 | Inter | dense UI, table cells |
| `caption` | 12 / 16 | 500 | 0.01em | Inter | metadata, helper text |
| `overline` | 12 / 16 | 600 | 0.12em, uppercase | Inter | eyebrow labels (max 3 words) |
| `button` | 16 / 24 (14 / 20 small) | 600 | 0 | Inter | all buttons |
| `amount-xl` | 48 / 52 | 700 | -0.03em, tabular | Sora | wallet balance |
| `amount` | 20 / 28 | 600 | tabular | Inter | prices |
| `mono` | 14 / 20 | 400 | 0 | JetBrains Mono | IDs, SKUs |

Minimum body text is 14px. Never go under 12px, and only for captions.

## 3. Weight rules

- **The signature switch:** headlines may combine **700** and **300** once: `**Fork** a catalogue. Sell it.` The bold part is the action, the light part is the context. Never use the switch in body text, buttons or tables.
- Headings: 700 (h1, h2), 600 (h3, h4). Body 400. Labels and buttons 500 to 600. Do not use 800/900.
- Emphasis in running text: 600, not italics. Italics only for titles of works.

## 4. Line height and measure

| Context | Line height | Max line length |
|---|---|---|
| Display | 1.0 to 1.05 | 12 words |
| Headings | 1.1 to 1.33 | 20 words |
| Body | 1.5 (24/16) | **65 characters (about 36em)** |
| Dense UI / tables | 1.43 (20/14) | not applicable |
| Captions | 1.33 | 50 characters |

## 5. Numbers and money

- Use `font-variant-numeric: tabular-nums` for every amount, quantity, date and ID column.
- Format with the locale (`Intl.NumberFormat`). Currency symbol or code always adjacent to the number, never in a separate column cell without a header.
- Right-align amounts in tables. Negative amounts use a true minus sign (U+2212) and the word "debit" or "payout" in the row label. Do not use red for them.
- Large balances: `amount-xl`, with the decimal part in `--text-muted` at the same size.

## 6. Text colour on surfaces

| Surface | Allowed text tokens |
|---|---|
| `--bg`, `--surface-raised` | text, text-muted, text-subtle |
| `--surface` (#F4F4F4) | text, text-muted, text-subtle (5.22:1) |
| `--primary` (black blocks) | on-primary only |
| Photos | never place text directly; use a flat black or white panel |

## 7. Responsive type

- Headings step down at `< 768px` as shown in the scale; display sizes use `clamp()`.
- Do not scale body text with viewport units. Respect user font size: all sizes in `rem`.
- Layouts must survive 200% text zoom and `text-spacing` overrides (WCAG 1.4.12) without clipping.

## 8. CSS reference

```css
h1 { font: 700 var(--text-5xl)/1.083 var(--font-display); letter-spacing: -0.03em; }
.display-xl { font: 700 var(--display-xl)/1 var(--font-display); letter-spacing: -0.045em; }
.display-xl .light { font-weight: 300; }
.amount { font: 600 var(--text-xl)/1.4 var(--font-body); font-variant-numeric: tabular-nums; }
body { font: 400 var(--text-base)/1.5 var(--font-body); }
```
