# Content and messaging

All marketing copy lives in typed modules under `src/content/` so it can be
edited without touching components:

| Module | Covers |
|---|---|
| `nav.ts` | Header mega-menu groups, mobile nav, footer columns, tagline, CTAs, announcement |
| `home.ts` | Every home-page section (hero, old way, repo spotlight, how-it-works, split features, storefronts, payments, use cases, comparison, trust, closing CTA) |
| `product.ts` | Product hub + repo-management, forking, storefronts, wallet/payments, order-routing pages |
| `solutions.ts` | Sellers, wholesalers, use-cases pages |
| `pricing.ts` | Pricing page + security page copy |
| `about.ts` | About page (story, beliefs) |
| `resources.ts` | Blog categories + placeholder articles, guides index, help topics |
| `faq.ts` | The 10-question home FAQ (reused on Help) |
| `images.ts` | The image slot manifest (see `imagery.md`) |
| `placeholders.ts` | Everything that must be replaced or confirmed before launch |

## Voice

Plain, confident, a little warm. Short sentences. Outcomes first: time saved,
reach gained, getting paid. Sentence case. No exclamation marks. Avoid
"seamless", "revolutionary", "leverage", "empower", "unlock". One idea per
headline, one bold→light weight switch per headline.

## The framing

- GitShop is **the distribution layer for commerce**.
- A wholesaler or brand publishes a **repo** — a managed product catalogue.
- A **seller** forks a repo to get a storefront, sets their own prices, and sells.
- GitShop handles checkout, wallets, the automatic split, payouts, and routes
  each paid order to the supplier to fulfil.
- **The seller does nothing after the sale.**
- Goal line: "Distribution, made easy. One catalogue becomes many storefronts,
  and many storefronts reach many customers."

## Vocabulary rules

- Marketing says **sellers** — never "resellers" or "retailers".
- Seller-side UI may say "markup"; marketing prefers **your price** and
  **your margin**.
- "Supplier" and "wholesaler" are used only when addressing the supply side.
- End customers are never a marketing audience. Never pitch "buy direct and
  save" or compare retail vs wholesale prices.
- Customer-facing surfaces never mention the supply chain — see
  `design-principles.md` §6 and `npm run check:buyer-surfaces`.

## Feature claims

Only the founder-confirmed list is claimed plainly. Everything else carries a
`SoonBadge` (see `placeholder-inventory.md` for the full list of Soon items).
