# GitShop Design Principles

The logo is the design system in miniature: **three rounded squares, stacked, separated by thin knock-out gaps.** A repo (the wholesaler's catalogue) becomes a fork (a reseller's version) becomes a storefront (what buyers see). Every screen should feel like that stack: layered, clean, monochrome, and obviously connected to its source.

Read `design-tokens.md` for the exact values and `implementation.md` for how to build them.

---

## 1. The brand idea: "Layers, not boxes"

| Logo feature | Design consequence |
|---|---|
| Rounded squares | Every container, control, avatar and icon tile is a rounded square. Radius is proportional to size (about 26.5% of the edge). |
| Offset layers | Depth is shown by offset layers, not blurry shadows. A fork looks like a layer behind its source. |
| Knock-out gap between layers | Separation comes from a gap in the page colour, not outlines or drop shadows. |
| Black and white only | The brand has no accent colour. Hierarchy comes from contrast, weight, scale and inversion. |
| Bold **Git** + light Shop | One weight switch per headline is our typographic signature. |

## 2. Ten principles

1. **Monochrome conviction.** Black, white and a neutral grey ramp. No green, no brand accent. Never add colour to feel "fintech".
2. **Layer, don't shadow.** Use stacked offsets (see `components.md` > Stack Card). The only permitted blur shadow is the overlay shadow on floating menus and modals in light mode.
3. **Knock-out separation.** Where two layers meet, leave a gap of `--stack-gap` (4px) in the page colour. Do not draw a border around the front layer.
4. **Rounded squares everywhere.** Use the radius scale in `design-tokens.md`. No sharp 0px corners, no pill shapes except tags, switches and avatars.
5. **Bold + light, one switch.** Headlines may switch weight once: `**Fork** a catalogue. Sell it.` Never more than one switch per line.
6. **Show the chain — seller-side only.** On seller and wholesaler dashboards, every product, price and order shows who made it and who resold it. Provenance is our trust signal. **It never reaches customer surfaces:** storefronts, product pages, carts, checkout, order confirmation, tracking, receipts, emails and any marketing mockup of those surfaces show only the store name and logo, product, one price, delivery estimate, order status, and the store's support contact and returns policy. Never show "wholesale", "supplier", "fulfilled by", "ships from [supplier]", "markup", "margin", "fork", "repo", or "cheaper at source" to a customer. Enforced by `npm run check:buyer-surfaces`.
7. **Money is plain.** Amounts are large, aligned and complete (fees and markup visible). No colour coding for money in/out. Use `+` / `−`, labels and icons.
8. **Git-native vocabulary, plain-language help.** Use Repo, Fork, Markup, Publish. Explain each on first use (see section 5).
9. **Quiet confidence.** Generous space, few elements per view, one primary action per section. No hype words, no exclamation marks.
10. **Accessible by default.** WCAG 2.2 AA is the floor (see `accessibility.md`). Contrast is already built into the tokens, so do not "lighten" greys.

## 3. Hierarchy

Emphasis has three levels. Use the fewest that make the page clear.

| Level | How it is expressed | Example |
|---|---|---|
| 1. Primary | Black fill, white text (inverted block), or `display` type | Primary button, hero headline, wallet balance |
| 2. Secondary | Black text on white, 1px `--border-strong` outline | Secondary button, section heading |
| 3. Tertiary | `--text-muted` on white/surface, no container | Helper text, timestamps, metadata |

Rules:
- **One primary action per view or card.** If two things compete, demote one.
- **Inversion is the loudest tool.** A page may have up to three black (inverted) sections, never adjacent.
- Order of attention: size, then weight, then inversion, then position. Do not rely on colour.
- Group by proximity (`--space-4` inside a group, `--space-8` or more between groups).

## 4. UX rules

**Money and trust**
- Show the **full breakdown before commitment**: wholesale price, reseller markup, platform fee, total.
- Payouts, refunds and price changes need a **review step** with the exact amount and destination.
- Never use optimistic UI for anything that moves money. Show a pending state until confirmed.
- Always show currency code or symbol next to every amount. Use tabular numerals (`font-variant-numeric: tabular-nums`).
- Every transaction row has: counterparty, reference/ID, timestamp, status (text, not just icon), amount.

**Forms and flows**
- Max 5 fields visible per step. Prefer progressive disclosure.
- Labels sit above inputs and are always visible. Placeholders are examples only.
- Validate on blur, summarise on submit (see `interactions.md`).
- Destructive or irreversible actions: name the object and the consequence in the button ("Delete 'Leather Sneakers' repo").

**Content and tone**
- Voice: direct, calm, specific. "Your payout of $1,500.00 is on its way." not "Awesome! Money incoming!"
- Sentence case everywhere except the wordmark and acronyms.
- Empty states say what the area is for and give one action.
- Errors say what happened and what to do next. Never blame the user.

## 5. Vocabulary

| Term | Meaning shown to users | Helper text |
|---|---|---|
| Repo | A wholesaler's product catalogue | "A repo is your catalogue. Resellers can fork it." |
| Fork | A reseller's copy of a repo with their own prices | "Fork this repo to sell these products with your markup." |
| Markup | The amount a reseller adds to the wholesale price | "You keep the markup on every sale." |
| Storefront | The public page of a fork | "Share this link with your customers." |
| Wallet | Balance held on GitShop | "Collect payments and pay out to your bank." |
| Collection | Money received from a sale | |
| Payout | Money sent from the wallet to a bank | |

## 6. Logo usage

Files live in `assets/svg/logo`, `assets/svg/mark`, `assets/svg/icons`.

| Rule | Value (measured from the artwork) |
|---|---|
| Clear space | At least the wordmark **cap height** on all sides (the height of the "G") |
| Mark to wordmark, horizontal lockup | Mark height = 1.5 x cap height; gap = 0.44 x cap height |
| Mark to wordmark, stacked lockup | Mark width = 0.36 x wordmark width; gap = 0.56 x cap height |
| Minimum size, horizontal lockup | 96 px wide (print: 25 mm) |
| Minimum size, stacked lockup | 72 px wide (print: 20 mm) |
| Minimum size, mark | 24 px (use `favicon-small.svg` below 24 px) |
| Colours | Black on white, white on black, or `currentColor`. Nothing else. |

Do not: add colour or gradients, outline the mark, add shadows, rotate, stretch, re-space the letters, put the logo on busy photos, or rebuild the wordmark in a font.

Light surface: use the black logo. Dark surface: use the white logo. On photos: place the logo on a flat black or white panel.

## 7. Imagery and iconography

- **Editorial photography:** monochrome — `filter: grayscale(1) contrast(1.05)` applied in CSS so any colour photo dropped in stays on-brand. Rounded with `rounded-xl`. Signature treatment: photo stacks (two or three layered photos with the knock-out gap, echoing the logo). No text over photos; use a flat panel.
- **Product photography:** on flat `--surface` (#F4F4F4) or white, soft front light, square (1:1) crops, rounded with the card radius. Product images inside mockups stay in colour — they represent seller and wholesaler content.
- All images render through `<Photo slot="…">` and the manifest in `src/content/images.ts`. Replace by overwriting `public/images/<slot-id>.webp` — see `docs/imagery.md`.
- **Illustration:** built from stacked rounded squares in black, white and grey. No gradients, no 3D, no people clip-art.
- **Icons:** 24px grid, 1.75px stroke, round caps and joins, rounded square containers. Use one icon set (Lucide recommended). Icons never carry meaning alone; pair with a label.
- **Charts:** black, white and grey patterns with direct labels. Distinguish series by line style and shape, not colour.

## 8. Decision checklist (use in design review)

- [ ] Does it look like it belongs next to the logo (rounded squares, layers, monochrome)?
- [ ] Is there exactly one primary action?
- [ ] Is every amount complete, with currency, and is the chain of who-sold-what visible?
- [ ] Is separation made with gaps and offsets instead of shadows and borders?
- [ ] Are all text/background pairs from the verified token list?
- [ ] Does it work at 360px wide, with keyboard only, and in dark mode?
