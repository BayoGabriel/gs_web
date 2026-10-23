# GitShop Components

Anatomy, variants and states for every core component. All values reference tokens in `design-tokens.md`. All components must work in light and dark themes and meet `accessibility.md`.

**Universal state rules**

| State | Treatment |
|---|---|
| Default | as specified |
| Hover (pointer only) | background moves one step on the surface ramp; no movement |
| Focus-visible | two-ring focus (2px `--bg`, 4px `--text`); never removed |
| Active / pressed | `--primary-active` or `--pressed-surface`; scale 0.98 for 80ms |
| Disabled | `--disabled-surface` bg, `--text-disabled` text, `aria-disabled`, no hover |
| Loading | label stays, spinner replaces leading icon, `aria-busy="true"`, width does not change |
| Error | `--danger` border/text plus an icon plus message text |

---

## 1. The Stack (signature element)

The logo as a UI primitive: a front layer with 1 or 2 layers behind it, offset down-left to up-right like the mark, each separated by a `--stack-gap` (4px) knock-out in the page colour.

```
 anatomy (front layer on top)
   ┌──────┐
 ┌─┤ back │ 
 │ └──┬───┘  layer 2: offset step x2
 └───┤ front│ layer 1: offset step x1
     └──────┘
```

- Back layers are the same shape and radius as the front, filled `--gs-black` (light) or `--gs-white` (dark) at 100%, and clipped by the gap around the front layer (implement with `box-shadow: var(--step) var(--step) 0 var(--stack-gap) var(--bg)` combined with layered pseudo-elements, or a CSS mask).
- Layers count = depth: 1 (source only), 2 (has forks), 3 (popular, 10+ forks). Never more than `--stack-max-layers`.
- Hover/focus on an interactive stack: layers fan out by +4px over `--dur-base`.
- Static decoration only. The stack never contains interactive controls in the back layers.

Variants: `Stack Card` (card with layers), `Stack Tile` (icon tile), `Stack Avatar` (avatar with 2 layers for a team or organisation).

## 2. Button

Anatomy: `[leading icon] Label [trailing icon]`. Height `--control-md` 44 (default), `sm` 32, `lg` 56. Radius per size (8 / 12 / 16). Horizontal padding 16 / 20 / 28. Gap between icon and label 8.

| Variant | Light | Dark | Use |
|---|---|---|---|
| Primary | black bg, white text | white bg, black text | one per view |
| Secondary | white bg, 1px `--border-strong`, text black | same, tokens flip | alternative actions |
| Ghost | transparent, text black, hover `--hover-surface` | same | tertiary, toolbars |
| Danger | white bg, 1px `--danger`, `--danger` text; confirm step uses filled danger | | destructive |
| Link | underlined text, no box | | inline navigation |

- Icon-only buttons are squares (44 x 44, radius 12) and must have `aria-label` and a tooltip.
- Full-width buttons on mobile for primary form actions.
- Label is a verb + object ("Fork repo", "Request payout"). Max 3 words.

## 3. Input, textarea, select

Anatomy (top to bottom): Label (14/20, 600) > optional hint (12/16 muted) > field > helper or error.

- Field: height 44, `--surface-raised` bg, 1px `--border-strong`, radius 12, padding 0 16, text 16 (prevents iOS zoom).
- Focus: border becomes 2px `--text` plus the focus ring. Error: 2px `--danger` border, error icon, message text below. Disabled: `--disabled-surface`.
- Prefix/suffix slots for currency (₦, NGN), units and icons. Currency inputs: `inputmode="decimal"`, tabular numerals, right-aligned amount.
- Textarea: min 3 rows, auto-grow to 8.
- Select: native `<select>` styled to match on mobile; custom listbox on desktop only if search is needed.
- Character counters appear only when a limit exists.

## 4. Checkbox, radio, switch

- Checkbox 20x20, radius 6, 1px `--border-strong`; checked = black fill with white check. Radio 20x20 circle.
- Switch 44x24 pill; on = black fill with white knob, off = `--surface` with `--border-strong` outline. Always paired with a text label and state wording ("Public").
- Hit area extends to 44px via the label.

## 5. Card

| Variant | Anatomy | Rules |
|---|---|---|
| Surface card | radius 24, `--surface-raised`, 1px `--border`, padding 24 | default container, no shadow |
| Stack Card | surface card + Stack layers | repo and fork cards |
| Inverted card | black bg, white text, radius 24 | one per section: wallet balance, CTA |
| Interactive card | whole card is a link; hover adds fan-out; has one real `<a>` | never nest buttons inside a linked card |

## 6. Repo Card (catalogue)

Anatomy: Cover image (1:1 or 4:3, radius 16, `--surface` backdrop) > Title (h4) > Wholesaler name + avatar > meta row (items, avg wholesale price, fork count) > action.

- Stack depth shows fork count: 0 = 1 layer, 1 to 9 = 2 layers, 10+ = 3 layers.
- Primary action on card: "Fork repo" (secondary button on the grid; primary on the repo detail page).
- States: default, forked-by-you (label "Forked", action becomes "Manage fork"), private (lock icon + "Invite only"), archived.

## 7. Product row / product card

Fields: image, name, SKU (mono), wholesale price, your markup (editable on forks), selling price, stock status.

- **Price block**: three lines in a fixed order, each right-aligned and tabular: `Wholesale  ₦40,000` / `Your markup  + ₦12,000` / `Selling price  ₦52,000` (last line 600 weight).
- **Markup editor**: segmented control `Amount | Percent`, number input, live selling price preview. Validates min and max set by the wholesaler.
- Stock: text status ("In stock", "Low stock: 4 left", "Out of stock") with icon; never colour alone.

## 8. Badge, tag, status chip

Height 24, radius 12 (full), padding 0 10, 12/16 600. Styles: Neutral (`--surface` + text), Outline (1px `--border-strong`), Inverted (black fill). Status chips always include an icon and text:

| Status | Icon | Style |
|---|---|---|
| Pending | clock | Outline |
| Processing | loader | Outline |
| Completed | check | Inverted |
| Failed / Refunded | x / undo | Outline with `--danger` text and border |

## 9. Avatar

Sizes 24 / 32 / 40 / 56 / 96. Users = circle; organisations (wholesalers, resellers) = rounded square (26.5% radius) to echo the logo. Fallback: initials on `--surface`.

## 10. Navigation

- **Top bar** (desktop): height 64, logo (horizontal, left), primary nav (max 5), actions (wallet, notifications, account) right. Border-bottom 1px `--border`. Sticky, `--z-nav`.
- **Sidebar** (app, >=1024): width 256 (collapsed 72), items height 44, active item = black fill white text, radius 12.
- **Bottom tab bar** (mobile app): 4 to 5 items, height 64 + safe-area, icon + label, active = black icon and bold label with a 4px top bar.
- **Breadcrumbs:** show on repo/fork depth >2, `Repo > Product`.
- **Tabs:** underline tabs (2px black underline), height 44, keyboard arrow navigation.

## 11. Table / data list

- Header 12/16 600 `--text-muted`, row height 56 (compact 44), divider 1px `--border`, no zebra.
- Numeric columns right-aligned and tabular. Sticky first column on horizontal scroll.
- < 768px: convert to stacked cards (see `responsive.md`).
- Row actions: kebab menu with labelled items; primary row action = clicking the row.

## 12. Wallet card

Inverted card, radius 24, padding 24 to 32. Content: label "Wallet balance" (muted-on-black), `amount-xl`, available vs pending split, actions `Request payout` (white button on black) and `Add funds` (outlined white). Never shows colour-coded change; shows "+ ₦120,000 today" with a plus sign.

## 13. Transaction row

`[icon tile 40] Title + counterparty / Reference (mono) + time | Status chip | Amount (right, tabular)`. Types: Collection (+), Markup earned (+), Payout (−), Refund (−), Fee (−). Tap opens a detail sheet with the full breakdown.

## 14. Order timeline

Vertical steps: Placed > Paid > Sent to wholesaler > Shipped > Delivered. Completed = filled black dot + check; current = ring; upcoming = grey ring. Each step has a timestamp and who acts (reseller, wholesaler, system).

## 15. Modal, sheet, popover, tooltip

- **Modal** (desktop): width 480 / 640, radius 24, `--surface-raised`, scrim `rgba(0,0,0,.5)`. Focus trap, Esc closes, returns focus to trigger.
- **Bottom sheet** (mobile): full width, top radius 24, drag handle 32 x 4, max height 90dvh.
- **Popover/menu:** radius 12, 1px border, `--shadow-overlay` (light only), item height 40.
- **Tooltip:** black bg white text 12/16, radius 8, delay 400ms, never the only source of a label.

## 16. Toast / inline alert

- Toast: bottom-center (mobile) or bottom-right (desktop), radius 12, black bg white text, max 1 action, auto-dismiss 6s (errors persist). `role="status"` or `role="alert"` for errors.
- Inline alert: surface bg, 1px border, leading icon, title + body + optional action; error variant uses `--danger` icon and left rule 4px.

## 17. Empty state, skeleton, progress

- Empty: stack illustration (3 rounded squares), h3 title, one sentence, one primary action.
- Skeleton: `--surface` blocks with the same radius as the final content; shimmer 1.4s (disabled under reduced motion).
- Progress: linear 4px black bar on `--border`; steppers show "Step 2 of 4".

## 18. Logo component

Provide a single `<Logo variant="horizontal|stacked|mark" tone="auto|black|white" />` that inlines the SVG with `currentColor`, exposes `aria-label="GitShop"` (or `aria-hidden` next to visible text), and enforces min sizes from `design-principles.md`.

## 19. Marketing components (round 2)

| Component | Purpose |
|---|---|
| `Photo` | Renders any image slot from `src/content/images.ts`: aspect-ratio reservation, grayscale for `editorial`, `loading="lazy"` (LCP slot gets `fetchpriority="high"`), `decoding="async"`, `rounded-xl`. |
| `PhotoStack` | Two or three `Photo` slots layered with the knock-out gap — the logo idea in photographic form. |
| `BentoGrid` / `BentoTile` | Feature grids mixing 1x1, 2x1 and 2x2 tiles; each tile can hold a mockup or image. |
| `StickyStory` | Pinned left column + stepping right column for "How it works"; falls back to a vertical list on mobile and under reduced motion. |
| `ProductTour` | Tabs (Repo management / Forking / Storefront / Wallet) containing real component mockups in `DeviceFrame`s. |
| `DeviceFrame` | Thin-bordered rounded browser/phone frame, no blur shadows. |
| `Marquee` | Category chips; pauses on hover and focus, static under reduced motion. |
| `StatNumber` | Big numeral with count-up on first view (respects reduced motion). |
| `ComparisonTable` | Old way / GitShop rows. |
| `TestimonialCard`, `ArticleCard`, `UseCaseCard` | Image-led cards; placeholder content carries `data-placeholder`. |
| `FeatureChip` | Small labelled chip for storefront features. |
| `SoonBadge` | Outline badge marking proposed, unconfirmed features — required on every not-yet-confirmed claim. |
| `NewsletterForm` | Footer signup field; honest unconfigured state. |
| `StoreMockup`, `OrderTrackingMockup` | Buyer-facing mockups under `src/features/storefront/` — covered by `check-buyer-surfaces` (no supply-chain wording). |
| `RepoMockup` | Seller/wholesaler-side repo detail mockup (tabs: Products, Pricing rules, Forks, Activity). |
| `AnnouncementBar` | Dismissible slim bar above the header; remembers dismissal. |
| `MegaMenuItem` | Header mega-menu panel with icon tiles and one-line descriptions; ARIA disclosure pattern, full keyboard support. |
| `PageHero`, `DetailSection`, `InlineCta`, `PageFaq` | Shared inner-page sections keeping pages consistent and under 100 lines. |
