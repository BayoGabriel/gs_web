# GitShop Implementation Guide

How to turn the design system into code. Examples use **React + TypeScript + Tailwind CSS + Radix UI**, but the architecture (tokens > primitives > components > patterns > pages) is framework-agnostic. If the site uses another stack, keep the token file and the component contract.

---

## 1. Principles

1. **Tokens are the only source of values.** No hex codes, pixel radii or durations in component code. They come from `tokens.css`.
2. **Build once, compose everywhere.** Pages are assembled from patterns, patterns from components, components from primitives.
3. **Accessible primitives.** Use Radix UI (or React Aria) for Dialog, Popover, Tabs, Select, Switch, Tooltip, Accordion, Toast. Style them; do not rebuild behaviour.
4. **Server-first rendering** for marketing pages (fast LCP); client components only where interaction needs them.
5. **Light and dark from day one** via semantic tokens.

## 2. Project structure

```
src/
  styles/
    tokens.css            <- copied from the brand kit, imported first
    base.css              <- reset, body, focus ring, reduced motion
  assets/brand/           <- svg/png from assets/
  components/
    primitives/           <- Box, Stack, Text, Icon, VisuallyHidden
    ui/                   <- Button, Input, Select, Checkbox, Switch, Badge, Avatar, Card, StackCard, Modal, Sheet, Toast, Tabs, Table...
    brand/                <- Logo, StackIllustration
    patterns/             <- PageHeader, RepoCard, ProductRow, MarkupEditor, WalletCard, TransactionRow, OrderTimeline, EmptyState
  features/               <- repos, forks, orders, wallet (domain logic + patterns)
  app/ or pages/          <- routes
  lib/                    <- format (money, date), a11y helpers, analytics
```

## 3. Token integration

1. Copy `tokens.css` to `src/styles/tokens.css` and import it before everything else.
2. Fonts: install self-hosted fonts (`@fontsource-variable/sora`, `@fontsource-variable/inter`, `@fontsource/jetbrains-mono`) and import only the weights used.
3. Map tokens into Tailwind so utilities use semantic names:

```js
// tailwind.config.js (v3)
module.exports = {
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    colors: {
      transparent: 'transparent', current: 'currentColor',
      bg: 'var(--bg)', surface: 'var(--surface)', raised: 'var(--surface-raised)',
      border: 'var(--border)', 'border-strong': 'var(--border-strong)',
      text: 'var(--text)', muted: 'var(--text-muted)', subtle: 'var(--text-subtle)',
      primary: 'var(--primary)', 'on-primary': 'var(--on-primary)', danger: 'var(--danger)',
    },
    borderRadius: { xs:'var(--radius-xs)', sm:'var(--radius-sm)', md:'var(--radius-md)', lg:'var(--radius-lg)', xl:'var(--radius-xl)', full:'var(--radius-full)' },
    spacing: { 0:'0', 1:'var(--space-1)', 2:'var(--space-2)', 3:'var(--space-3)', 4:'var(--space-4)', 5:'var(--space-5)', 6:'var(--space-6)', 8:'var(--space-8)', 10:'var(--space-10)', 12:'var(--space-12)', 16:'var(--space-16)', 20:'var(--space-20)', 24:'var(--space-24)', 32:'var(--space-32)' },
    screens: { xs:'480px', sm:'640px', md:'768px', lg:'1024px', xl:'1280px', '2xl':'1536px' },
    fontFamily: { display:'var(--font-display)', sans:'var(--font-body)', mono:'var(--font-mono)' },
    extend: { transitionDuration: { fast:'var(--dur-fast)', base:'var(--dur-base)', slow:'var(--dur-slow)' }, transitionTimingFunction: { standard:'var(--ease-standard)', decelerate:'var(--ease-decelerate)' } },
  },
};
```
(Tailwind v4: declare the same names with `@theme { --color-bg: var(--bg); ... }`.)

4. Lint: add Stylelint/ESLint rules that **forbid hex and `rgb()` colours and arbitrary px values** outside `tokens.css` (e.g. `color-no-hex`, Tailwind `no-arbitrary-value` plugin).
5. Theme switching: `data-theme="light|dark"` on `<html>`; default follows the system. Prevent flash with an inline script in `<head>` that sets the attribute from `localStorage` before paint.

## 4. Base CSS

```css
*,*::before,*::after { box-sizing: border-box; }
html { scroll-padding-top: 80px; text-size-adjust: 100%; }
body { margin: 0; background: var(--bg); color: var(--text); font: 400 var(--text-base)/1.5 var(--font-body); -webkit-font-smoothing: antialiased; }
:focus-visible { outline: none; box-shadow: 0 0 0 2px var(--focus-inner), 0 0 0 4px var(--focus-outer); }
img, svg, video { max-width: 100%; display: block; }
@media (forced-colors: active) { :focus-visible { outline: 2px solid CanvasText; } }
```

## 5. Core component contracts

### Button (class-variance-authority)

```tsx
const button = cva(
  'inline-flex items-center justify-center gap-2 font-sans font-semibold transition-colors duration-fast ease-standard ' +
  'focus-visible:shadow-[0_0_0_2px_var(--focus-inner),0_0_0_4px_var(--focus-outer)] disabled:cursor-not-allowed active:scale-[.98] motion-reduce:active:scale-100',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-on-primary hover:bg-[var(--primary-hover)] active:bg-[var(--primary-active)] disabled:bg-[var(--disabled-surface)] disabled:text-[var(--text-disabled)]',
        secondary: 'bg-bg text-text border border-border-strong hover:bg-[var(--hover-surface)]',
        ghost: 'bg-transparent text-text hover:bg-[var(--hover-surface)]',
        danger: 'bg-bg text-danger border border-danger hover:bg-[var(--hover-surface)]',
      },
      size: { sm: 'h-[var(--control-sm)] px-4 rounded-sm text-sm', md: 'h-[var(--control-md)] px-5 rounded-md text-base', lg: 'h-[var(--control-lg)] px-7 rounded-lg text-base' },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  }
);
```
Props: `variant`, `size`, `loading`, `leadingIcon`, `trailingIcon`, `asChild`. `loading` sets `aria-busy`, disables clicks, keeps width.

### StackCard (the signature element)

```css
.stack { --step: var(--stack-step-md); position: relative; isolation: isolate; margin: calc(var(--step) * 2) 0 0 calc(var(--step) * 2);
  border-radius: var(--radius-xl); background: var(--surface-raised); border: 1px solid var(--border);
  box-shadow: 0 0 0 var(--stack-gap) var(--bg); transition: transform var(--dur-base) var(--ease-decelerate); }
.stack::before, .stack::after { content: ""; position: absolute; inset: 0; border-radius: inherit; background: var(--inverse-bg); z-index: -1; pointer-events: none;
  transition: transform var(--dur-base) var(--ease-decelerate); }
.stack::before { transform: translate(calc(var(--step) * -1), calc(var(--step) * -1)); box-shadow: 0 0 0 var(--stack-gap) var(--bg); }
.stack::after  { transform: translate(calc(var(--step) * -2), calc(var(--step) * -2)); z-index: -2; }
.stack[data-depth="1"]::before, .stack[data-depth="1"]::after { display: none; }
.stack[data-depth="2"]::after { display: none; }
@media (hover:hover) { .stack:hover::before { transform: translate(calc(var(--step) * -1 - 4px), calc(var(--step) * -1 - 4px)); }
  .stack:hover::after { transform: translate(calc(var(--step) * -2 - 8px), calc(var(--step) * -2 - 8px)); } }
```
`data-depth` = 1, 2 or 3 (see fork-count rule in `components.md`). Give the parent enough padding/margin so layers are not clipped by `overflow: hidden`.

### Logo

```tsx
export function Logo({ variant = 'horizontal', title = 'GitShop' }: { variant?: 'horizontal'|'stacked'|'mark'; title?: string }) {
  // Inline the SVG from assets/svg/logo/*; replace fills with currentColor so it follows text colour.
  // Use useId() for mask ids so several logos on one page do not collide.
}
```
Rules: `currentColor` only; accessible name via `title`/`aria-label`; links to `/` carry `aria-label="GitShop home"`.

### MarkupEditor (core feature)

State: `wholesale` (read-only), `markupType` ('amount'|'percent'), `markupValue`. Derived: `sellingPrice`, `earnings`. Rules: validate against `minMarkup`/`maxMarkup` from the repo; compute with integer minor units (cents) to avoid float errors; show the live breakdown; submit sends minor units plus an idempotency key.

## 6. Money and data handling

- Store and compute money as integer minor units + ISO currency. Format with `Intl.NumberFormat(locale, { style:'currency', currency })`.
- Never do money arithmetic with floats on the client; the server is the authority, the client previews.
- Every mutation that moves money sends an `Idempotency-Key` header and shows a pending state.
- Dates use `Intl.DateTimeFormat` with the user's locale and time zone; show relative times with absolute on hover/focus.

## 7. Assets

| Need | File |
|---|---|
| Header logo (light / dark) | `assets/svg/logo/gitshop-horizontal-black.svg` / `-white.svg` (or inline component) |
| Footer logo | `assets/svg/logo/gitshop-stacked-*.svg` |
| Favicons | copy `assets/svg/icons/favicon.svg`, `assets/web/favicon.ico`, `assets/png/favicon-32.png` to the site root |
| Apple touch | `assets/png/apple-touch-icon-180.png` |
| PWA icons | `assets/png/icon-192.png`, `icon-512.png`, `maskable-192.png`, `maskable-512.png` + `assets/web/site.webmanifest` |
| Head tags | `assets/web/head-snippet.html` |
| Social image | export `assets/svg/social/og-image-light.svg` to a 1200 x 630 PNG (social crawlers need PNG/JPG) |
| Store icon | `assets/png/app-store-1024.png` |

## 8. Performance

- Self-hosted, subsetted variable fonts; preload Sora 700 and Inter 400 only.
- Inline critical CSS for marketing pages; split routes; lazy-load below-the-fold sections.
- Icons tree-shaken (import individual icons).
- Animate with `transform` and `opacity` only; no layout thrash.
- Budgets are in `responsive.md` section 7; fail CI if exceeded (Lighthouse CI).

## 9. Quality gates

| Gate | Tooling |
|---|---|
| Types and lint | TypeScript strict, ESLint, Stylelint (no raw colours) |
| Unit and a11y | Vitest + Testing Library + `jest-axe` |
| Component catalogue | Storybook: every component, every state, light and dark, with a11y addon |
| Visual regression | Playwright or Chromatic at 360 / 768 / 1280, light and dark |
| E2E | Playwright for fork, markup, checkout, payout flows |
| Performance | Lighthouse CI against budgets |

## 10. Pull request checklist

- [ ] Uses tokens only; no raw hex/px
- [ ] Works in light and dark, 360 to 1536px, 200% zoom
- [ ] All states implemented (default, hover, focus, active, disabled, loading, error, empty)
- [ ] Keyboard and screen reader checked (see `accessibility.md`)
- [ ] Reduced motion respected
- [ ] Money logic uses minor units and idempotency
- [ ] Storybook story + tests added
- [ ] Screenshots attached

## 11. Governance

Tokens and components are versioned (semver). Changing a token value requires updating `docs/design-tokens.md` and re-running the contrast check. New colours are **not** accepted without a brand review; the brand is black, white and the neutral ramp.
