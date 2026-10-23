# Placeholder inventory

Everything that must be replaced or confirmed before launch. Flagged content
renders with a `data-placeholder` attribute and is counted by
`npm run check:placeholders` (fails under `STRICT_PLACEHOLDERS=1`).

## Images (46 generated placeholders, `public/images/*.webp`)

Replace by overwriting the file at the same name — see `imagery.md`.
None are real photography yet.

- Hero stack: `hero-photo-1`, `hero-photo-2`, `hero-photo-3`
- Story steps: `step-1`, `step-2`, `step-3`, `step-4`
- People: `hero-seller`, `seller-section`, `wholesaler-section`
- Mockup products (colour): `storefront-1`, `storefront-2`, `product-01` – `product-12`
- Use cases: `usecase-social`, `usecase-shop`, `usecase-creator`, `usecase-dropship`, `usecase-brand`
- Category tiles: `category-fashion`, `category-beauty`, `category-electronics`, `category-home`, `category-food`, `category-accessories`
- Portraits: `portrait-01` – `portrait-04`
- Wide + articles: `about-wide`, `blog-01` – `blog-06`

| File | Source | Author | Licence |
|---|---|---|---|
| _none yet — all generated placeholders_ | | | |

## Statistics

- `proofStats` in `src/content/placeholders.ts` — all four values are `0`
  until real numbers exist (Repos published / Stores live / Orders routed /
  Paid out).

## Testimonials

- `testimonials` in `src/content/placeholders.ts` — two generic placeholder
  quotes ("Seller, placeholder" / "Wholesaler, placeholder"). No real-sounding
  company names are used.

## Team

- `teamPlaceholders` + About-page "Team member 1–4" cards — replace with real
  names, roles and portraits.

## Copy / links

- Announcement bar text (`placeholders.ts > announcement`) — "GitShop is
  opening to wholesalers and sellers. Join the first wave." Confirm or replace.
- Footer social icons — generic icons, no real profile URLs.
- About page story — clearly marked placeholder; replace with the founder's own.
- All six blog articles — planned titles only, no published posts.
- Newsletter form — no backend configured; shows its honest unconfigured state.

## Fees and prices

- `exampleFeeBps = 500` (5%) in `placeholders.ts` — **illustrative only**,
  used in the calculators. Real fee schedule is an open question for the
  founder; no fee is presented as final anywhere.
- MarkupCalculator and worked examples — labelled "Illustrative example".

## Legal

- Privacy policy and Terms are drafts — legal review required before launch.
- Customer-facing disclosure requirements (seller identity, returns address,
  etc.) vary by country — flagged for legal review.

## Soon-badged features (proposed, unconfirmed)

Invite-only/private repos and fork approval · minimum price and margin rules ·
version history / changelog / update diffs · bulk CSV import · sync-update
notices on forks · analytics · team roles · API and webhooks · QR codes ·
multi-currency · two-factor authentication · refund/cancellation tools.
