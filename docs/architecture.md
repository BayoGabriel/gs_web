# GitShop Landing Page --- Architecture

**Status:** Proposed implementation baseline\
**Scope:** Public marketing landing page only\
**Stack assumption:** Vite + React + TypeScript + Tailwind CSS\
**Primary goal:** Communicate GitShop's repository-based commerce model
clearly, create trust, and convert visitors into early-access sign-ups
or supplier/reseller enquiries.

## 1. Architecture principles

1.  **Small components:** Every React component must remain under 100
    lines. Aim for 30--70 lines. If a component approaches 80 lines,
    extract a subcomponent or move logic into a hook/helper.
2.  **Separate state from JSX:** State, event handlers, derived values,
    and browser interactions belong in hooks or feature state modules,
    not inline in presentation components.
3.  **Keep the landing page simple:** No global state library is needed
    for the current scope. Use local state for isolated interactions and
    a small shared hook/context only if multiple components genuinely
    need the same state.
4.  **Content is data:** Repeated navigation items, features, steps,
    FAQs, and footer links should be stored in typed content/config
    files, not duplicated in JSX.
5.  **Reusable before abstract:** Extract components when there is a
    real repeated pattern or clear design-system role. Avoid premature
    generic component frameworks.
6.  **Accessible by default:** Semantic HTML, keyboard-operable
    controls, visible focus, reduced-motion support, meaningful image
    alt text, and adequate contrast.
7.  **No fake functionality:** Every CTA must navigate to a real
    destination, submit a real form, or clearly indicate that early
    access is being collected. Do not display invented customer logos,
    testimonials, statistics, or integrations.
8.  **Responsive first:** Design for mobile, tablet, and desktop. Never
    rely on hover to reveal essential information.

## 2. Suggested project structure

Adapt names to the existing repository rather than replacing working
configuration without need.

``` text
src/
├── app/
│   ├── App.tsx
│   ├── main.tsx
│   └── routes.tsx                 # Only if a router is actually needed
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Container.tsx
│   │   ├── Icon.tsx               # Optional typed icon wrapper
│   │   ├── Logo.tsx
│   │   ├── SectionHeading.tsx
│   │   └── VisuallyHidden.tsx     # Only if needed
│   └── layout/
│       ├── SiteHeader.tsx
│       ├── MobileNavigation.tsx
│       ├── SiteFooter.tsx
│       └── Section.tsx
├── features/
│   ├── landing/
│   │   ├── components/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── NetworkPreview.tsx
│   │   │   ├── ProblemSection.tsx
│   │   │   ├── HowItWorksSection.tsx
│   │   │   ├── BenefitsSection.tsx
│   │   │   ├── UseCasesSection.tsx
│   │   │   ├── FaqSection.tsx
│   │   │   └── FinalCtaSection.tsx
│   │   ├── content/
│   │   │   ├── navigation.ts
│   │   │   ├── landing-content.ts
│   │   │   └── faq-content.ts
│   │   ├── hooks/
│   │   │   ├── useMobileNavigation.ts
│   │   │   ├── useFaq.ts
│   │   │   └── useWaitlistForm.ts
│   │   ├── state/
│   │   │   └── landing-ui.ts       # Only for state truly shared by landing sections
│   │   └── utils/
│   │       └── validation.ts
│   └── waitlist/                   # If the form becomes a meaningful feature
│       ├── components/
│       │   └── WaitlistForm.tsx
│       ├── hooks/
│       │   └── useWaitlistForm.ts
│       ├── services/
│       │   └── waitlist-service.ts
│       └── types.ts
├── assets/
│   ├── images/
│   ├── illustrations/
│   └── icons/
├── styles/
│   ├── index.css
│   └── tokens.css                  # CSS variables if useful with Tailwind
├── lib/
│   ├── cn.ts                       # Class merge helper only if installed/needed
│   └── analytics.ts                # Only after analytics is selected
├── types/
│   └── common.ts
└── vite-env.d.ts

public/
├── favicon.svg
├── robots.txt
└── og/
    └── gitshop-social.png

docs/
├── architecture.md
└── design.md
```

### Structure rules

-   `app/` wires the application together; it should not contain
    page-specific business logic.
-   `features/landing/components/` contains sections specific to this
    landing page.
-   `components/ui/` contains genuinely reusable primitives, not
    complete page sections.
-   `content/` contains copy and display data. Keep content out of
    complex JSX where practical.
-   `hooks/` contains React state, event handlers, effects, and
    interaction logic.
-   `services/` contains network requests or third-party integrations;
    do not put fetch calls directly inside presentation components.
-   `utils/` contains pure functions with no React dependencies.
-   `assets/` holds local visual assets. Use inline SVG components or a
    consistent icon library for interface icons; do not use emoji as UI
    icons.

## 3. Page composition

`App.tsx` should remain a thin composition layer:

``` tsx
export default function App() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <ProblemSection />
        <HowItWorksSection />
        <BenefitsSection />
        <UseCasesSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
```

The exact section order can be adjusted after design review. Do not add
a router just for a single page. If privacy, terms, or waitlist
confirmation pages are added, choose the lightest routing approach that
meets the actual need.

## 4. State management rules

### Default: local state

Use local state for state owned by one component or one feature:

-   Mobile navigation open/closed → `useMobileNavigation`.
-   FAQ expanded item → `useFaq`.
-   Waitlist input, validation, loading, success, and error →
    `useWaitlistForm`.

The component receives a small, explicit view model and renders it. It
should not own the full implementation of validation, submission, or
side effects.

Example:

``` tsx
// hooks/useMobileNavigation.ts
import { useState } from "react";

export function useMobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const toggle = () => setIsOpen((current) => !current);

  return { isOpen, open, close, toggle };
}
```

``` tsx
// components/layout/MobileNavigation.tsx
type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export function MobileNavigation({ isOpen, onClose }: Props) {
  if (!isOpen) return null;

  return (
    <nav aria-label="Mobile navigation">
      {/* Render links from navigation.ts. Close after navigation. */}
      <button type="button" onClick={onClose} aria-label="Close menu">
        Close
      </button>
    </nav>
  );
}
```

### Shared state

Only create shared state when two or more separate consumers need the
same live value and lifting the state to their nearest common owner is
awkward.

For this landing page: - Prefer `SiteHeader` owning the mobile-menu
state and passing props to `MobileNavigation`. - Keep FAQ state inside
the FAQ feature. - Keep waitlist form state inside the form hook. - Do
not add Redux, Zustand, or a global store for these interactions. - If a
later feature genuinely needs shared state, introduce a small
Context/provider or a state library based on its complexity.

**Important:** Reusable state logic is not the same as global state. A
custom hook can be reused without making its state globally shared; each
invocation normally has its own independent state.

### State and JSX separation

-   No network requests, schema validation, analytics calls, or
    complicated event logic inside JSX.
-   Avoid nested ternaries and long inline callbacks.
-   Derive display values in the hook or before the `return`.
-   Keep `useEffect` for synchronization with external systems, not for
    values that can be derived during render.
-   Never duplicate the same state in a component and a hook.
-   Type all stateful form results and event payloads.

## 5. Component size and responsibility

**Hard limit: fewer than 100 lines per component file, including imports
and types.**

Recommended targets: - UI primitive: 15--50 lines. - Small hook: 15--60
lines. - Landing section: 30--75 lines. - Content module: data only; no
JSX. - Page composition: ideally below 40 lines.

When a component grows too large: 1. Extract repeated markup into a
named child component. 2. Move state and interaction logic into a custom
hook. 3. Move copy and repeated lists into content modules. 4. Move pure
calculations into utilities. 5. Do not split code into meaningless
one-line components merely to satisfy the limit.

Keep one primary component per file. A file may export a small related
type, but avoid putting multiple substantial components into one file.

## 6. Styling and design tokens

Use Tailwind utilities for layout and component styling. Centralize the
brand palette and recurring design tokens through CSS variables and/or
the project's existing Tailwind configuration. Do not scatter arbitrary
hex values throughout JSX.

Suggested token names: - `--color-ink` - `--color-paper` -
`--color-surface` - `--color-forest` - `--color-forest-hover` -
`--color-clay` - `--color-muted` - `--color-border` - `--radius-card` -
`--shadow-soft`

The exact values and visual rules are defined in `design.md`. Confirm
whether the project uses Tailwind v3 or v4 before editing configuration;
do not assume the configuration format.

## 7. Content architecture

Keep content in typed modules. Example:

``` ts
// features/landing/content/landing-content.ts
export const valueProps = [
  {
    id: "source",
    title: "One source catalogue",
    description: "Suppliers maintain the products, stock and wholesale terms they publish.",
  },
  {
    id: "fork",
    title: "Every seller builds their own",
    description: "Sellers create a connected catalogue with their own pricing and storefront.",
  },
  {
    id: "sync",
    title: "Changes stay connected",
    description: "Eligible supplier updates can flow downstream without erasing seller decisions.",
  },
] as const;
```

Treat this as starter copy, not proof of implemented product
capabilities. Phrase future features as planned or proposed until they
exist.

Avoid inventing: - Customer logos, testimonials, or endorsements. -
Adoption statistics or revenue figures. - Existing integrations or
partnerships. - Guarantees about delivery, stock, or automatic
synchronization that the product does not yet provide.

## 8. Form and integration boundaries

If the landing page includes an early-access form: - Validate fields in
a hook or schema module. - Put the HTTP call in `waitlist-service.ts`. -
Read the service URL from a Vite environment variable such as
`VITE_WAITLIST_API_URL`. - Never put secrets in `VITE_*` variables; Vite
exposes them to the client. - Include loading, success,
validation-error, and server-error states. - Prevent duplicate
submissions and use accessible status announcements. - If no backend
exists, use a clearly configured external form service or provide a
non-deceptive contact route. Do not simulate a successful submission.

## 9. Accessibility, performance, and SEO

-   Use one descriptive `h1`; keep heading levels logical.
-   Use semantic `header`, `nav`, `main`, `section`, and `footer`.
-   Give buttons and links distinct, descriptive accessible names.
-   Make mobile navigation and FAQ interactions keyboard accessible.
-   Respect `prefers-reduced-motion`.
-   Avoid large animation libraries unless the interaction warrants the
    dependency.
-   Optimize images, use responsive formats, and lazy-load
    below-the-fold media.
-   Add a page title, meta description, canonical URL when known, Open
    Graph metadata, favicon, and social preview image.
-   Avoid layout shifts; reserve image dimensions.
-   Verify mobile layout, keyboard navigation, contrast, and production
    build before release.

## 10. Testing and definition of done

At minimum verify: - `npm run build` succeeds with no TypeScript
errors. - Every internal navigation link reaches the correct section or
page. - Mobile menu opens, closes, and closes after link selection. -
FAQ works with keyboard and screen readers. - Forms validate, disable
duplicate submission, and show success/error states honestly. - Layout
works at narrow mobile, tablet, laptop, and wide desktop widths. -
Reduced-motion preference is respected. - No console errors, dead links,
fake social proof, or exposed secrets. - All component files remain
under 100 lines.

Add automated tests for meaningful interactive behavior. Use the test
runner already present in the project; do not install a new framework
without checking existing dependencies first.

## 11. Implementation sequence

1.  Inspect the existing Vite, React, TypeScript, and Tailwind setup.
2.  Read `design.md` and agree on the page's section order and copy.
3.  Establish tokens, typography, container, buttons, and header/footer
    primitives.
4.  Build the page section by section using typed content modules.
5.  Add isolated hooks for mobile navigation, FAQ, and form behavior.
6.  Add real integrations only when their destination is available.
7.  Check component line counts, accessibility, responsive behavior,
    SEO, and production build.

## 12. Non-goals

This repository currently contains a marketing landing page, not the
GitShop commerce product itself. Do not implement authentication,
supplier dashboards, repository management, fork synchronization,
payments, inventory, or a full e-commerce backend as part of this
landing-page task.
