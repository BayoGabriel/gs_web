# GitShop Accessibility Requirements

Target: **WCAG 2.2 Level AA** for every screen, in light and dark themes. Accessibility is part of the definition of done, not a later pass. Tokens in `design-tokens.md` already satisfy the contrast rules; do not alter them.

---

## 1. Contrast and colour

| Content | Minimum | Tokens that satisfy it |
|---|---|---|
| Body text, small text (< 24px or < 19px bold) | 4.5:1 | text, text-muted, text-subtle on bg/surface |
| Large text (>= 24px or >= 19px bold) | 3:1 | all text tokens |
| UI boundaries (inputs, checkbox, switch outline), icons that carry meaning, focus ring | 3:1 | `--border-strong`, `--text` |
| Disabled controls | exempt, still readable | `--text-disabled` |

- Never use `--border` (#E3E3E3, 1.28:1) as the only boundary of a control.
- Information is never conveyed by colour alone. Money direction uses +/- signs and labels. Status uses icon + text. Errors use icon + message + border.
- Do not place text over photos. Place a flat panel.
- Support `forced-colors: active`: keep borders on controls (`border: 1px solid` becomes system colour), use `currentColor` for icons and the logo, do not rely on background colour to show selection.
- Support `prefers-color-scheme` and a manual theme toggle. Remember choice.

## 2. Focus

- Focus ring spec: `box-shadow: 0 0 0 2px var(--focus-inner), 0 0 0 4px var(--focus-outer)`. Never `outline: none` without replacing it.
- Use `:focus-visible`. Keep a visible ring on inputs even for mouse users.
- Sticky headers/footers must not hide focused elements: set `scroll-padding-top: 80px; scroll-padding-bottom: 96px` (WCAG 2.4.11).
- Focus order follows visual order. No positive `tabindex`.
- Modals and sheets: move focus in on open, trap focus, `Esc` closes, return focus to trigger.
- After route changes in SPAs: move focus to the page `h1` and announce the title.
- Provide a **Skip to main content** link as the first focusable element.

## 3. Keyboard

- Everything doable by pointer is doable by keyboard. No keyboard traps.
- Standard key maps are in `interactions.md` section 9.
- Single-character shortcuts must be remappable or disabled (2.1.4) and are not active while typing in fields.
- Drag and drop (reordering products, uploads) must have a non-drag alternative: Move up / Move down buttons, file picker (2.5.7).
- Target size: 44 x 44px for primary targets; the WCAG 2.2 floor is 24 x 24px with spacing (2.5.8).

## 4. Semantics and structure

- One `<h1>` per page; headings in order, no skipped levels for styling.
- Landmarks: `header`, `nav` (labelled), `main`, `aside`, `footer`. Label repeated landmarks with `aria-label`.
- Use native elements first: `<button>` for actions, `<a>` for navigation, `<input type=...>`, `<select>`, `<dialog>` where supported.
- Data tables use `<table>`, `<th scope>`, `<caption>` (can be visually hidden). Card layouts of tabular data on mobile keep a list structure (`<ul>`) with labelled fields.
- Language: `<html lang>`, and `lang` on foreign-language fragments.
- Page `<title>` is unique: "Page - Section - GitShop".

## 5. Forms

- Every control has a visible `<label>` bound by `for`/`id`. Placeholder is never the label.
- Hints and errors linked with `aria-describedby`; invalid fields have `aria-invalid="true"`.
- Required indicated with the `required` attribute and the text "(optional)" for optional ones.
- Use `autocomplete` tokens (`name`, `email`, `tel`, `street-address`, `one-time-code`, `current-password`, `new-password`) (1.3.5).
- Error summary receives focus on failed submit with links to fields (3.3.1, 3.3.3).
- Do not require re-entering information already given in the same flow (3.3.7).
- **Authentication (3.3.8):** allow paste and password managers; offer passkeys or email/SMS codes; no puzzle or transcription tests; OTP inputs accept paste and use `autocomplete="one-time-code"`.
- Confirmation before irreversible financial actions with a review step (3.3.4).

## 6. Dynamic content and announcements

| Event | Technique |
|---|---|
| Toast / success message | `role="status"` (polite) |
| Error that blocks | `role="alert"` (assertive) |
| Loading content | `aria-busy="true"` on the region, announce completion via live region |
| Search results count | polite live region ("24 repos found") |
| Balance update | polite announcement, not on every tick |

Amounts are written for screen readers: "minus ₦20,000" not "dash 20"; dates in a readable format; icons are `aria-hidden="true"` when text is adjacent, otherwise labelled.

## 5b. Component ARIA map

| Component | Pattern |
|---|---|
| Modal | `<dialog>` or `role="dialog"` + `aria-modal="true"` + `aria-labelledby` |
| Tabs | `role="tablist/tab/tabpanel"`, `aria-selected`, roving tabindex |
| Menu / dropdown | button with `aria-haspopup="menu"` + `aria-expanded`; `role="menu"/"menuitem"` |
| Combobox (search) | WAI-ARIA 1.2 combobox with `aria-activedescendant` |
| Switch | `role="switch"` + `aria-checked` (native checkbox preferred) |
| Accordion | button `aria-expanded` controlling a region |
| Stepper / timeline | ordered list `<ol>`, current step `aria-current="step"` |
| Stack Card / decorative layers | layers are CSS; no extra DOM or ARIA |
| Avatar | `alt` with name, or `alt=""` if the name is adjacent |
| Logo | link: `aria-label="GitShop home"`; standalone image: `role="img"` + `aria-label="GitShop"`; decorative repeat: `aria-hidden` |

## 6b. Images and media

- Informative images: concise `alt`. Product images: product name + distinguishing detail. Decorative: `alt=""`.
- Video: captions and transcript; no autoplay with sound; provide pause for any moving content over 5 seconds.
- No content flashes more than 3 times per second.

## 7. Motion and time

- Honour `prefers-reduced-motion` (tokens already reduce durations to 0ms). Replace scroll reveals and the stack-assemble animation with a static state.
- Session timeout: warn at least 2 minutes before and let the user extend. Payment pages never lose entered data on timeout.
- No auto-advancing carousels. If a carousel exists, it has previous/next buttons and no auto-play.

## 8. Reflow and zoom

- Content reflows at 320 CSS px without horizontal scroll (except data tables inside a scrollable, labelled region).
- Layout survives 200% text size and text spacing overrides (line height 1.5, letter spacing 0.12em, word spacing 0.16em, paragraph spacing 2em).
- Do not disable pinch zoom.

## 9. Testing and definition of done

Automated: `axe-core` in CI (Storybook a11y addon, `jest-axe` on components, `@axe-core/playwright` on pages) with zero serious/critical violations. Lighthouse accessibility >= 95.

Manual, per feature:
- [ ] Keyboard-only walkthrough, visible focus everywhere, logical order
- [ ] Screen reader pass: VoiceOver (iOS/macOS), TalkBack (Android), NVDA (Windows)
- [ ] 200% zoom and 320px reflow
- [ ] Dark mode and forced-colors check
- [ ] Reduced motion check
- [ ] Error, empty, loading states reviewed with a screen reader
- [ ] Contrast checked for any new colour pair (none should be needed)

Publish an accessibility statement and a feedback contact in the footer.
