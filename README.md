# GitShop marketing site

Public brand website for GitShop — "GitHub for wholesale commerce". Built with
Vite, React 19, TypeScript (strict), Tailwind v4, React Router v7 and Radix UI.

## Setup

```bash
npm install
npm run dev      # dev server
npm run build    # type-check + production build
npm run lint     # eslint
npm run preview  # serve the production build
npm run check:buyer-surfaces  # fails on supply-chain wording in customer-facing components
npm run check:placeholders    # counts data-placeholder flags (STRICT_PLACEHOLDERS=1 fails)
npm run images:placeholders   # regenerate all image placeholders in public/images/
node scripts/preview-serve.mjs # gzip-capable static server for dist/ (PORT env, default 5399)
node scripts/axe-check.mjs     # axe on every route (needs dev/preview server on :5199, BASE_URL override)
node scripts/capture-screenshots.mjs # docs/screenshots/ at 360/768/1280, light+dark
```

Optional environment (see `.env.example`):

| Variable | Purpose |
| --- | --- |
| `VITE_API_BASE_URL` | Backend origin for sign in / sign up (`POST /api/v1/login`, `POST /api/v1/create-account`). Forms degrade honestly when unset. |
| `VITE_CONTACT_API_URL` | Contact form endpoint (`POST {name,email,topic,message}`). |
| `VITE_SITE_URL` | Canonical origin for canonical/OG URLs (default `https://gitshop.app`). |

## Design system

- `src/styles/tokens.css` — the source of truth: black/white/neutral-grey
  palette (red for errors only), radii, stack steps, controls, motion, z-index.
  Dark theme values live under `[data-theme='dark']`.
- `src/styles/theme.css` — maps semantic tokens to Tailwind utilities
  (`bg-raised`, `text-muted`, `border-border-strong`, `rounded-md`,
  `duration-fast`, …). Do not write hex colours, pixel radii or millisecond
  durations in components — use the token utilities.
- `src/styles/typography.css` — `.display-xl/.display-lg`, `.h1–.h4`,
  `.body-lg/.body-sm`, `.caption`, `.overline`, `.amount`, `.measure`.
- `src/styles/stack.css` — `.stack` layered-depth primitive (replaces card
  shadows), fan-on-hover, `stack-assemble` hero animation (reduced-motion safe).

Type: Sora (display), Inter (body), JetBrains Mono (data) — self-hosted via
Fontsource, loaded in `src/main.tsx`.

### Theme

`data-theme` on `<html>` is `light` | `dark`, resolved from a `light` | `dark` |
`system` preference stored in `localStorage` (`gitshop-theme`). The inline
script in `index.html` prevents flash; `src/lib/theme.ts` +
`src/hooks/useTheme.ts` + `ThemeToggle` drive it.

## Structure

- `src/components/ui/` — primitives (Button, Input, Select, Checkbox, Switch,
  Badge, Avatar, Card, Tabs, Accordion, Modal, Toast, Table, EmptyState, …).
- `src/components/patterns/` — domain components (RepoCard, WalletCard,
  TransactionRow, OrderTimeline, MarkupEditor).
- `src/components/layout/` — SiteHeader, MobileMenu, SiteFooter, Section,
  PageHero, RootLayout.
- `src/pages/` — one file per route (lazy-loaded in `src/app/router.tsx`).
- `src/features/` — `marketing` (sections + mockups), `storefront`
  (buyer-facing mockups, covered by `check:buyer-surfaces`), `auth`,
  `contact`, `uikit` (demo sections for `/ui-kit`).
- `src/content/` — all marketing copy and the image manifest (`images.ts`).
- `public/images/<slot>.webp` — replace any photo by overwriting the file at
  the same name; see `docs/imagery.md` and `docs/placeholder-inventory.md`.
- `src/lib/` — `cn`, `format` (integer-minor-unit money), `theme`.
- `/ui-kit` route — the component catalogue ("Storybook equivalent") showing
  every component and state; toggle the header theme to check light/dark.

Rules of thumb:

- Keep component files under ~100 lines; extract content into typed modules
  (see `src/features/marketing/content.ts`).
- Money is always integer minor units + ISO currency (`lib/format.ts`); never
  floats, never optimistic success — pending until confirmed.
- One `h1` per page; use `Section`/`SectionHeading`/`PageHero` for structure.

## Brand assets

Official SVGs/PNGs live in `src/assets/` (never edit them; `Logo.tsx` inlines
the official geometry with `currentColor`). `public/` mirrors the files needed
at the site root: favicons, `site.webmanifest`, `og-image-light.png` (regenerate
with `node scripts/generate-og.mjs`), `robots.txt`, `sitemap.xml`.

## Testing

```bash
npm run lint && npm run build
```

Manual checks: `/ui-kit` for component states, theme toggle for light/dark,
320–1536px widths, keyboard navigation, `prefers-reduced-motion`.
