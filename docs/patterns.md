# GitShop Patterns

Page layouts and reusable workflows. Build from `components.md`, space with `design-tokens.md`, adapt with `responsive.md`.

---

## 1. Layout primitives

| Primitive | Spec |
|---|---|
| Page container | max 1200 (marketing) / 1440 (app), centred, gutter 16 / 24 / 32 |
| Section | vertical padding 80 to 128 desktop, 56 to 80 mobile; `--bg` and `--surface` alternate |
| Grid | 12 col desktop, 8 tablet, 4 mobile; gap 24 (16 mobile) |
| Content width | text blocks 640 max, forms 480 max |
| App shell | sidebar 256 + main (max 1200) + optional right panel 360 |
| Stack of cards | repo grid: 4 / 3 / 2 / 1 columns at xl / lg / md / default |

Rhythm: sections alternate white and `#F4F4F4`; up to three black sections per page, never adjacent.

## 2. Marketing site (the brand website)

Section order for the home page:

1. **Announcement bar** (dismissible, remembers choice) + **header**: horizontal logo, mega-menu (Product, Solutions, Resources), Pricing, About; "Sign in", primary "Start selling".
2. **Hero** (`display-xl`, min 90svh): headline with one weight switch, sub, Start selling / Publish a catalogue, photo stack of three product photos with floating UI cards that appear in sequence.
3. **Category strip**: marquee of category chips, pausable, static under reduced motion.
4. **The old way** (surface): three problem cards and a large turn line.
5. **Repo management spotlight** (hero-scale bento): the biggest section on the page, with the Repo detail mockup (tabs: Products, Pricing rules, Forks, Activity).
6. **How it works** (sticky-scroll, 4 steps): Publish a repo > Sellers fork it > The store goes live > Orders fulfil themselves.
7. **For sellers** (black inverted section, photo).
8. **For wholesalers and brands** (surface, photo).
9. **Storefronts** (browser + phone mockups — buyer view only, no supply-chain wording).
10. **Payments** (wallet mockup + transaction rows).
11. **Use cases** (five image cards).
12. **Do the maths** (markup calculator, seller-side labels).
13. **Proof** (placeholder stats + two testimonial cards, all flagged).
14. **Comparison** (Old way / GitShop table).
15. **Trust** (four tiles, no certification claims).
16. **FAQ** (accordion, 10 questions).
17. **Closing CTA** (inverted band) + **Footer** (5 columns, newsletter field, social placeholders, stacked logo, "Distribution, made easy.").

Rules: one idea per section, one CTA per section, 6 sections visible without repeating a layout twice in a row.

Page list: Home, Product hub, Repo management (flagship), Forking, Storefronts, Wallet and payments, Order routing, Sellers, Wholesalers, Use cases (`/resellers` redirects to `/sellers`), Pricing, Security, Blog, Guides, Docs, Help, About, Contact, Sign in, Sign up (`?role=seller|wholesaler`), Privacy, Terms, Accessibility, `/ui-kit`, 404.

## 3. App shell

Sidebar (Home, Repos, Forks, Orders, Wallet, Settings) + top bar (search, notifications, account). Role switcher in the account menu: **Wholesaler** and **Reseller** (users can be both). Content area uses page header: h1, supporting line, actions on the right (max 2).

## 4. Key screens

| Screen | Layout |
|---|---|
| **Dashboard** | page header, 4 stat cards (Sales, Markup earned, Orders to fulfil, Wallet), activity list, "Next steps" card |
| **Repos (wholesaler)** | toolbar (search, filter, "New repo"), grid of Stack Cards, empty state |
| **Repo detail** | header (title, visibility, fork count, actions), tabs: Products, Pricing rules, Forks, Activity, Settings |
| **Browse repos (reseller)** | search + filters (category, min margin, ships-to), grid of Repo Cards with "Fork repo" |
| **Fork detail** | source repo link (provenance), product table with markup editor, bulk markup bar, storefront link and QR |
| **Storefront (buyer)** | clean product grid, product page, cart, checkout — store-branded only: store name and logo, product, one price, delivery estimate, order status, store support contact, returns policy. No supply-chain wording ever (see `design-principles.md` §6) |
| **Orders** | table with status chips; detail with order timeline and money breakdown |
| **Wallet** | wallet card, tabs: Transactions, Payouts, Collections, Bank accounts |
| **Settings** | left sub-nav on desktop, single column on mobile; forms max 480 |

## 5. Workflow: create a repo (wholesaler)

1. **Name and describe** (name, category, cover image, visibility: Public / Invite only).
2. **Add products** (manual form, CSV import, or bulk image upload). Each product: name, SKU, wholesale price, stock, images, shipping.
3. **Set rules** (minimum markup, maximum markup, allowed regions, fork approval: Auto / Manual).
4. **Review and publish.** Summary list + "Publish repo". Success: share link and "What happens next".

Stepper shows "Step n of 4", saves a draft after every step, and every step can be revisited.

## 6. Workflow: fork and price (reseller)

1. **Browse** repos, open detail, read rules. Button: **Fork repo**.
2. **Fork confirmation** modal: shows what you get, what the wholesaler controls (stock, base price), what you control (markup, storefront). Confirm.
3. **Set markup**: global default (amount or percent), per-product overrides, live preview of selling price and your earnings per sale. Validation against min/max.
4. **Publish storefront**: name, slug (`gitshop.co/your-name`), logo. Preview. "Publish".
5. **Share**: copy link, QR code, share sheet.

Forks stay in sync with the source: new products and price changes from the wholesaler show a "Sync available" banner with a changelog (the git-style diff view: added, changed, removed rows).

## 7. Workflow: buy (customer)

Cart > Delivery details > Payment > Confirmation. At every step show: items, delivery estimate, total with fees, seller name and fulfilled-by name. Guest checkout allowed. Confirmation page: order number (mono), timeline, support contact.

Money behind the scenes (shown in the Orders detail to the parties): customer pays total > GitShop collects > reseller wallet receives markup > wholesaler wallet receives wholesale amount > wholesaler receives the order to fulfil.

## 8. Workflow: payout (wallet)

1. Amount (shows available balance, fee, you receive).
2. Destination (saved bank accounts, add new with verification).
3. **Review** (amount, fee, destination, arrival estimate).
4. Confirm with PIN or biometric/2FA.
5. Result: Pending state with reference (mono) > Completed.
Failures keep the money in the wallet and say so in the first sentence.

## 9. Workflow: fulfil an order (wholesaler)

New order notification > Order detail (items, address, reseller reference, packing slip button) > Mark as shipped (carrier, tracking) > Delivered. Resellers and buyers see the same timeline automatically; the reseller never has to act.

## 10. Reusable state patterns

- **Empty:** illustration + what it is + one action.
- **Loading:** skeletons matching final layout; never full-page spinners.
- **Error:** inline message, retry button, support link; preserve entered data.
- **Success:** inline confirmation or toast; for money, a full-screen result with reference.
- **Permission denied:** state the role required and how to switch role.
- **Offline / slow network:** banner "You're offline. Changes will sync", queue non-money actions only.
- **First-run onboarding:** 3-step checklist card on the dashboard (Verify account, Create or fork a repo, Set up wallet); dismissible once complete.
