# Image replacement briefs

Every image on the site is a **slot**. To replace a placeholder, drop a file
at `public/images/<slot-id>.webp` with **exactly the same filename** — nothing
in the code needs to change.

- Format: **WebP** (or AVIF renamed `.webp` is fine too — browsers sniff it,
  but real WebP is safer). Max ~1920 px on the long edge, aim under ~150 KB.
- Match the listed aspect ratio. `Photo` reserves the space; wrong aspect
  will be centre-cropped (`object-fit: cover`).
- Editorial/portrait images are **rendered black-and-white automatically**
  (`grayscale + contrast`). Supply colour originals; the CSS handles the
  treatment.
- Product images (`product` treatment) **stay in colour** — they represent
  real catalogue/store content. Shoot on flat light-grey or white.
- No text baked into photos, no heavy filters, real people/products over
  renders.
- **App screenshots**: the mobile app in `../gitshopapp` is a valid source for
  any slot marked *(screenshot ok)*. Export the screen at device resolution,
  crop to the slot's aspect, convert to WebP.

## Hero stack — the three layered product photos (`4/5`, colour)

These stack like the logo — shoot them as a loose family (same light, same
background) so the layers feel related.

| File | Appears | Brief |
|---|---|---|
| `public/images/hero-photo-1.webp` | Home hero (front layer) — this is the LCP image | A structured leather or canvas bag, three-quarter angle, sitting on a light-grey seamless background. Soft daylight from upper left, gentle contact shadow, product fills ~70% of frame, breathing room on all sides. Colour, crisp, catalogue quality. |
| `public/images/hero-photo-2.webp` | Home hero (middle layer), ui-kit | A pair of clean sneakers, one shoe slightly forward, on the same grey seamless. Same light direction and feel as the bag shot. Colour. |
| `public/images/hero-photo-3.webp` | Home hero (back layer), ui-kit | A skincare bottle or small boxed product, upright, same set/lighting. Colour. |

## People / editorial (`4/5` or `4/3`, auto-grayscale)

| File | Appears | Brief |
|---|---|---|
| `public/images/hero-seller.webp` | Sellers page "Start in minutes" | A seller — market trader, thrift reseller or creator — holding a phone in one hand with a small stack of packed parcels at their feet or on a counter. Environmental portrait, waist up, natural window light, slight smile or focused expression. Behind them: shelves or boxes, softly out of focus. Feels like mid-task, not posed for a camera. |
| `public/images/step-1.webp` | Home "How it works" step 1; Order routing | Over-the-shoulder or side shot of someone at a laptop or phone entering products — screen visible but not readable, notebooks or product samples on the desk. Signals "publishing a catalogue". Warm workshop or home-office light. |
| `public/images/step-2.webp` | Home step 2; Forking page | Close-up of hands holding a phone mid-scroll — browsing a grid of products. Thumb on screen, phone angled toward camera, shallow depth of field. Signals "forking a catalogue". |
| `public/images/step-3.webp` | Home step 3; Repo management sync; Storefronts | Someone holding a phone outward or tapping "share" — could be two people looking at one phone. The mood: "posting the store link". Casual, social. |
| `public/images/step-4.webp` | Home step 4; Forking; Wallet collections | A parcel being handed over a doorstep, a courier bag being zipped, or a box dropped at a door. Tight crop on hands + package. Signals "orders fulfil themselves". |
| `public/images/seller-section.webp` | Home "For sellers"; Order routing; signup `?role=seller` | A seller in a small shop or bedroom studio surrounded by a few parcels, phone in hand, mid-work. Vertical composition, subject lower two-thirds. Confident, independent energy. |
| `public/images/wholesaler-section.webp` | Home "For wholesalers"; Repo management; Order routing; Security; Pricing; signup `?role=wholesaler` | Warehouse or stockroom: tall shelves of boxes, or a person with a clipboard/tablet checking inventory. Depth — shelves receding. Industrial but clean. |

## Use-case portraits (`4/5`, auto-grayscale)

| File | Appears | Brief |
|---|---|---|
| `public/images/usecase-social.webp` | Home use cases; Use cases page; Storefronts share | A social seller filming or photographing products with a phone on a small tripod, ring-light optional. Energetic, creator-at-home setup. |
| `public/images/usecase-shop.webp` | Home; Use cases; Wallet history; Sign in side image | A shop owner behind a counter — till, card reader or small shelves of goods visible. Eye-level, mid-gesture or mid-conversation. |
| `public/images/usecase-creator.webp` | Home; Use cases | A creator at a desk — camera, microphone, laptop with an editing timeline, or recording to their community. Studio-lite vibe. |
| `public/images/usecase-dropship.webp` | Home; Use cases; Forking "manage several forks" | Someone working a laptop with multiple tabs/windows — spreadsheet and storefront side by side if visible. Signals running many catalogues at once. |
| `public/images/usecase-brand.webp` | Home; Use cases | A brand founder or manufacturer among finished goods — racks of clothing, stacked product boxes, or a small workshop. Owner-next-to-product framing. |

## Category tiles (`1/1`, auto-grayscale) — Sellers page grid

| File | Brief |
|---|---|
| `public/images/category-fashion.webp` | Folded garments or a clothing rack, close crop, texture-forward. |
| `public/images/category-beauty.webp` | Skincare/cosmetics flat-lay, bottles and jars on light surface. |
| `public/images/category-electronics.webp` | Small electronics — earbuds case, charger, phone — arranged flat-lay. |
| `public/images/category-home.webp` | Homeware still life — ceramic mug, folded linen, a small plant pot. |
| `public/images/category-food.webp` | Packaged food/drink — jars, packets or a market produce crate, appetising. |
| `public/images/category-accessories.webp` | Accessories flat-lay — watch, sunglasses, wallet, small leather goods. |

## Product shots inside mockups (`1/1`, colour, `product` treatment)

These appear inside the repo/catalogue and storefront mockups — they play the
role of a real catalogue. Shoot or source a consistent set: same flat
light-grey background (#F4F4F4 works), soft front light, product centred with
~15% padding, square.

| Files | Brief |
|---|---|
| `storefront-1.webp`, `storefront-2.webp` | The two hero products in the storefront mockup — a bag and sneakers (match the hero family). *(screenshot ok if the app storefront shows real product images)* |
| `product-01.webp` – `product-12.webp` | A spread of catalogue items — sneakers, bag, skincare bottle, mug, headphones, watch, t-shirt, candle, backpack, sunglasses, notebook, water bottle (or whatever reads as a real wholesale catalogue). Consistent background + light across all twelve. **Live now:** `01`, `02`, `03` in the repo mockup, `05` + `08` in the storefront mockup, `01`/`02`/`03`/`05`/`08` on product pages. `04`, `06`, `07`, `09`–`12` are spares already generated — fill them when a mockup needs more variety. |

## Portraits (`1/1`, auto-grayscale)

| File | Appears | Brief |
|---|---|---|
| `portrait-01.webp` | Home proof testimonial (seller) | Head-and-shoulders portrait of a seller — natural light, plain-ish background, relaxed expression. |
| `portrait-02.webp` | Home proof testimonial (wholesaler) | Head-and-shoulders portrait of a wholesaler/brand operator — warehouse or workshop background softly blurred. |
| `portrait-03.webp`, `portrait-04.webp` | About page team | Two team member portraits — same framing/lighting as each other. Replace with real team when available. |

## Wide and article covers

| File | Appears | Brief |
|---|---|---|
| `about-wide.webp` | About "Why we exist"; Contact side image (`16/9`) | The team or workspace — a wide candid: people at desks, product boxes around, laptops open. Not stocky-handshake; documentary feel. |
| `blog-01.webp` – `blog-06.webp` | Blog + Guides cards (`16/9`) | Article covers, loosely matched to titles: `01` launching a store (phone + empty shelf), `02` pricing (price tags / calculator close-up), `03` preparing a catalogue (spreadsheet + products), `04` several catalogues (laptop multi-window), `05` after a customer pays (parcel + phone notification), `06` wholesaler's guide (warehouse aisle). |

## Optional: real app screenshots from `../gitshopapp`

The repo/storefront/order mockups on the site are coded components (DOM, not
SVG images). If you'd rather show the **real app**, screenshot these Expo
screens at device resolution and drop them in `public/images/`:

| App screen (route in `gitshopapp/app/`) | Suggested slot | Best spot on the site | Notes |
|---|---|---|---|
| `(tabs)/Home.tsx` — seller home | `app-home.webp` | Home hero front layer or `hero-seller` slot | Portrait `4/5` crop |
| `(tabs)/Repos.tsx` — repo list | `app-repos.webp` | Repo management page | Portrait |
| `repo/[id]/index.tsx` — repo detail | `app-repo.webp` | Repo management bento (replaces `RepoMockup` inside `DeviceFrame`) | Shows the core product idea |
| `repo/[id]/fork.tsx` — fork flow | `app-fork.webp` | Forking page | The "fork a catalogue" moment |
| `repo/create/*` — catalogue creation | `app-create.webp` | Repo management or Wholesalers | Publishing flow |
| `(tabs)/Wallet.tsx` or `wallet/index.tsx` | `app-wallet.webp` | Wallet page | Balances/payouts |
| `product/[productId].tsx` — product page | `app-product.webp` | Storefronts page phone frame | **Customer-facing only** — must not show supplier/wholesale info |
| `dashboard/index.tsx` | `app-dashboard.webp` | Sellers or Pricing page | Overview stats |

To add a new slot: add an entry in `src/content/images.ts`
(`'app-repo': slot('app-repo', '4/5', 'product', 'App screenshot: repo detail')`),
drop `public/images/app-repo.webp`, then use `<Photo slot="app-repo" />`.

## What stays as icons / coded UI (not images)

These are **UI chrome**, not illustration placeholders — keep them:

- `RepoMockup`, `StoreMockup`, `OrderTrackingMockup` — live DOM mockups of the
  product (deliberately not SVGs or screenshots; they render real markup).
- Icon chips in bento tiles, feature lists, mega-menu tiles and badges
  (Lucide glyphs) — standard UI iconography, not imagery.
- Logo, favicons, watermark on placeholders, social-link glyphs.

## Sections with no imagery today (optional additions)

- **Product hub** (`/product`) — currently text/tiles only. Optional
  `product-hub.webp` (`16/9`, colour or grayscale): the app dashboard or a
  catalogue photo, to make the hub less bare.
- **Docs / Help** — reference pages; intentionally image-free. A `16/9`
  header image (`docs-header.webp`) is possible but not needed.
- **Pricing** — has `wholesaler-section` already; a second image is optional.

## Already-final assets (don't replace)

`public/og-image-light.png`, `public/favicon.svg`, `public/favicon-16.png`,
`public/favicon-32.png`, `public/favicon-48.png`, `public/favicon.ico`,
`public/apple-touch-icon-180.png`, `public/icon-192.png`, `public/icon-512.png`,
`public/maskable-192.png`, `public/maskable-512.png`.
