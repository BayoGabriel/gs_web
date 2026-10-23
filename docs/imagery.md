# Imagery

## Art direction

- **Editorial / lifestyle photography is black-and-white.** `Photo` applies
  `filter: grayscale(1) contrast(1.05)` in CSS for `editorial` and `portrait`
  treatments, so any colour photo dropped in stays on-brand.
- **Product photos inside mockups stay in colour** (`product` treatment) on
  flat `--surface` (#F4F4F4) backgrounds, square crops.
- Rounded corners come from the radius scale (`rounded-xl` for photos).
- Signature treatment: **photo stacks** — two or three layered photos with the
  knock-out gap, echoing the logo (`PhotoStack`).
- No text over photos. Use a flat panel if text must sit near an image.
- Subjects: people packing and shipping parcels, market stalls and small
  shops, warehouse shelves, hands holding a phone with a storefront, product
  flat-lays, delivery doorstep moments, a creator or social seller at work, a
  wholesaler checking stock.

## How it works

Every image is a typed **slot** in `src/content/images.ts`:

```ts
{ id, src, alt, aspect, treatment, brief }
```

- `src` is `/images/<slot-id>.webp` under `public/`.
- Render through `<Photo slot="…" />` — never a raw `<img>` on pages.
- `Photo` sets `aspect-ratio` (no layout shift), `loading="lazy"`,
  `decoding="async"`, and the grayscale treatment. The hero/LCP image gets
  `fetchpriority="high"` instead of lazy loading.

## Replacing an image

Overwrite `public/images/<slot-id>.webp` with the real photo at the same
filename. No component changes needed. Keep to WebP/AVIF, max 1920 px,
~120 KB where possible.

## Slot table

| Slot | Aspect | Treatment | Brief |
|---|---|---|---|
| `hero-photo-1/2/3` | 4/5 | product | Bag, sneakers, skincare — the hero photo stack |
| `hero-seller` | 4/5 | editorial | Seller packing or posting from a phone |
| `step-1`–`step-4` | 4/3 | editorial | Publishing, forking, sharing the link, shipping a parcel |
| `seller-section` | 4/5 | editorial | Seller with phone and boxes |
| `wholesaler-section` | 4/5 | editorial | Warehouse shelves or stock check |
| `storefront-1/2` | 1/1 | product | Product shots inside storefront mockups |
| `product-01`–`product-12` | 1/1 | product | Product shots on light grey for repo/fork/cart mockups |
| `usecase-social/-shop/-creator/-dropship/-brand` | 4/5 | editorial | One per use case |
| `category-fashion/-beauty/-electronics/-home/-food/-accessories` | 1/1 | editorial | Category tiles |
| `portrait-01`–`portrait-04` | 1/1 | portrait | Testimonial and team portraits |
| `about-wide` | 16/9 | editorial | Team or workspace |
| `blog-01`–`blog-06` | 16/9 | editorial | Article covers |
| `og-image` | 1200×630 | — | Existing generated OG PNG (`scripts/generate-og.mjs`) |

## Current state

All 46 slots are generated placeholders (see `placeholder-inventory.md`):
tonal gradients with fine grain, the stacked-square watermark, and a label
naming the slot and brief. Regenerate with `npm run images:placeholders`.
When real photography is sourced, use Unsplash or Pexels licence only,
compress to WebP, and record source URL, author and licence in
`placeholder-inventory.md`. Never hotlink.
