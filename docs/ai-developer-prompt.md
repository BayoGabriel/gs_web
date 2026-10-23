# Prompt for the AI Developer: rebuild the GitShop website

Copy everything below the line into your AI developer tool, and attach the whole `gitshop-brand-kit` folder (or make sure it is in the repository).

---

## Role

You are a senior product designer-engineer. Rebuild the GitShop website so it is a beautiful, fast, accessible brand website that follows the GitShop design system exactly.

## About GitShop

GitShop is "GitHub for wholesale commerce". A **wholesaler** creates a **repo** (a product catalogue) and makes it public or invite-only. **Resellers and dropshippers fork** that repo and add a **markup** to every item. A reseller can fork many repos. The reseller shares their forked storefront with customers. When a customer buys, GitShop collects the payment, pays the markup to the reseller's **wallet**, and sends the order directly to the wholesaler to fulfil. The reseller does nothing else. GitShop includes a fintech layer: wallets, collections, payouts.

Core ideas the site must communicate: repo management, forking, selling, payments, and "everyone gets paid automatically".

## Source of truth (read these first, in order)

1. `docs/design-principles.md` (philosophy, hierarchy, UX rules, logo usage)
2. `docs/design-tokens.md` and `tokens.css` (all values; do not invent new ones)
3. `docs/typography.md`
4. `docs/components.md`
5. `docs/patterns.md` (includes the marketing site section order)
6. `docs/interactions.md`
7. `docs/responsive.md`
8. `docs/accessibility.md`
9. `docs/implementation.md` (architecture, code samples)
10. `assets/` (logo, icons, favicons, social images; use them as provided; never redraw the logo)

If anything conflicts, the order above wins.

## Step 0: audit the existing site

Inspect the current website and its codebase. Produce a short audit: current pages, routes, components, tech stack, content that must be preserved (copy, legal pages, forms, integrations, analytics), and SEO URLs to keep. Keep all existing URLs working (redirect if they change). Keep existing functionality (sign in, sign up, API calls, tracking); restyle and restructure, do not remove features. State your assumptions in a list and proceed. Ask a question only if you are blocked.

## Brand rules (non-negotiable)

- **Only black, white and the neutral grey ramp** from `tokens.css`. Red only for errors. **No green, no blue, no gradients, no brand accent colour.**
- Separation and depth come from **stacked rounded squares** (the logo idea): offset layers with a knock-out gap. No blur shadows on cards.
- Radius from the token scale (about 26.5% of element size). Rounded squares everywhere.
- Type: Sora (display), Inter (body), JetBrains Mono (data). Headlines may use **one** bold + light weight switch.
- Use the supplied logo files. Respect clear space and minimum sizes.
- Vocabulary: Repo, Fork, Markup, Storefront, Wallet, Collection, Payout, with plain-language helper text.
- Tone: calm, direct, specific. No hype, no exclamation marks, sentence case.

## What to build

### Pages
Home, Product (how it works), For wholesalers, For resellers, Pricing (and fees, transparent), Security and trust, Docs landing (or link out), About, Contact, Sign in / Sign up (keep existing flows, restyle), 404, legal pages (restyle), plus a sitemap and robots file.

### Home page (follow `patterns.md` section 2)
1. Header: horizontal logo, nav, Sign in, primary "Get started". Sticky, border-bottom, mobile full-screen menu.
2. Hero (`display-xl`): headline with one weight switch, e.g. **"Fork a catalogue. Sell it."** Sub: "Wholesalers publish repos. Resellers fork them, add a markup and sell. GitShop handles payments and sends orders straight to the supplier." CTAs: "Get started" (primary), "See how it works" (secondary). Visual: an animated **Stack** of repo cards that assembles on load (see `interactions.md` section 3) with static fallback under reduced motion.
3. Proof strip (placeholders for metrics/logos; mark clearly as placeholders).
4. How it works: 01 Create a repo, 02 Resellers fork it, 03 Customers buy from the fork, 04 Everyone gets paid. One stacked-square illustration per step.
5. For wholesalers / For resellers: two large cards (one white, one black inverted).
6. **Money flow + live markup calculator**: inputs wholesale price and markup (amount or percent); outputs a clear split (wholesale amount, reseller markup, platform fee placeholder, customer pays). Use integer minor units, accessible live results, and clear "example" labelling.
7. Wallet and payments: wallet card mockup, collections and payouts.
8. Trust and security.
9. FAQ accordion (6 to 8 questions: What is a repo? What is a fork? Who ships orders? When do I get paid? What are the fees? Can I fork several repos? Can I make a repo private? How do payouts work?).
10. Closing CTA (inverted band, one button).
11. Footer: stacked logo, links, legal, theme toggle, accessibility statement link.

### Components
Implement the components in `components.md` as a reusable library (at least: Logo, Button, Input, Select, Checkbox, Switch, Badge, Avatar, Card, StackCard, RepoCard, Tabs, Accordion, Modal/Sheet, Toast, Table, EmptyState, WalletCard, TransactionRow, OrderTimeline, MarkupEditor). Add a Storybook (or equivalent) showing every state in light and dark.

### Theme
Light, dark and system (default), with a header toggle and no flash on load.

### Brand assets in the site
Wire up favicons, apple touch icon, manifest, theme-color, and Open Graph/Twitter images from `assets/` using `assets/web/head-snippet.html`. Export the OG SVG to a 1200 x 630 PNG.

## Engineering requirements

- Follow `implementation.md`: tokens first, Tailwind (or the existing CSS approach) mapped to tokens, Radix/React Aria primitives, TypeScript strict. Keep the existing framework unless it blocks accessibility or performance; say so if you change it.
- No hex colours, raw pixel values or durations in components; lint for it.
- Semantic HTML, landmarks, one `h1` per page, skip link, visible focus ring (two-ring spec).
- Responsive from 320px to 1536px+ per `responsive.md`.
- SEO: unique titles/descriptions, canonical URLs, Open Graph, structured data (Organization, FAQPage), sitemap.
- Performance budgets in `responsive.md` section 7 (LCP <= 2.5s on mid-range mobile, JS <= 170KB gz on marketing pages). Self-host fonts, lazy-load images, animate only transform/opacity.
- Analytics and consent: preserve what exists; no new trackers.

## Acceptance criteria

- [ ] Every colour in the CSS resolves to a token; palette is black/white/grey (+ red errors only).
- [ ] Header, hero, sections, footer match `patterns.md`; the hero Stack animation works and respects reduced motion.
- [ ] Logo files used unmodified, correct variant per context, min sizes respected.
- [ ] Lighthouse (mobile): Performance >= 90, Accessibility >= 95, Best practices >= 95, SEO >= 95.
- [ ] axe: zero serious/critical issues; full keyboard navigation; works at 200% zoom and 320px width.
- [ ] Light and dark themes both pass contrast checks listed in `design-tokens.md`.
- [ ] All existing URLs and features preserved.
- [ ] Storybook (or equivalent) documents all components and states.
- [ ] README explains setup, tokens, theming, how to add components, and how to run tests.

## Deliverables and working method

1. The audit and your assumptions (brief).
2. A step plan, then implementation in small, reviewable commits: tokens and base > primitives/components > home page > other pages > assets/SEO > tests/docs.
3. Screenshots at 360, 768, 1280 in light and dark for every page.
4. A final report: what changed, what was preserved, any deviations from the design system and why, and open questions.

Do not add colours, fonts, shadows, gradients or components that are not defined in the design system. If something is missing, propose it in the final report instead of inventing it.
