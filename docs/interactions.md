# GitShop Interactions

How things move, respond and validate. Motion is functional: it explains hierarchy and change, and it echoes the logo's layered squares.

---

## 1. Principles

1. **Layers move, nothing bounces.** Motion is linear-feeling with decelerating easing; no springs, no overshoot, no parallax.
2. **Every action gets feedback in under 100ms** (visual state change). Anything longer than 400ms shows progress.
3. **Money is never optimistic.** Show a pending state until the server confirms.
4. **Motion is optional.** All motion is removed or reduced under `prefers-reduced-motion`; information is never conveyed by motion alone.
5. **Predictable.** The same component always animates the same way.

## 2. Motion tokens in use

| Interaction | Property | Duration | Easing |
|---|---|---|---|
| Hover / focus colour change | background, border, color | 120ms (`--dur-fast`) | standard |
| Press | transform scale(.98) | 80ms (`--dur-instant`) | standard |
| Stack fan-out | layer translate +4px | 200ms (`--dur-base`) | decelerate |
| Dropdown / popover | opacity 0 to 1, translateY 4 to 0 | 200ms | decelerate (exit: 120ms accelerate) |
| Tabs underline | transform / width | 200ms | standard |
| Modal | scrim fade + dialog translateY 16 to 0 + opacity | 320ms (`--dur-slow`) | decelerate (exit 200ms) |
| Bottom sheet | translateY 100% to 0 | 320ms | decelerate |
| Toast | translateY 8 to 0 + opacity | 200ms | decelerate |
| Page transition | opacity only | 200ms | standard |
| Scroll reveal (marketing only) | translateY 16 to 0 + opacity, stagger 60ms | 480ms | decelerate |

Animate only `opacity` and `transform`. Do not animate layout properties (width, height, top, left) except accordion height (use `grid-template-rows`).

## 3. Signature animations

- **Stack assemble** (hero, empty states, loading splash): three squares slide into place from the lower-right, 120ms stagger, 480ms total; gaps are visible throughout. Plays once.
- **Fork action:** on "Fork repo", the source card duplicates one step behind itself (new layer appears, 200ms), then the page transitions to the fork. Reduced motion: layer appears instantly.
- **Sale confirmation:** the amount splits into wholesale and markup chips (two squares separate by 12px), shown once on the order detail.

## 4. States and feedback

| Pattern | Behaviour |
|---|---|
| Buttons | Loading state replaces the leading icon with a spinner, disables repeat clicks, keeps width |
| Toggle | Immediate with rollback and an error toast if the request fails (non-money only) |
| Copy to clipboard | Button label changes to "Copied" for 2s, `aria-live="polite"` |
| Save | Auto-save drafts with "Saved just now" caption; explicit Save for settings |
| Undo | Non-destructive removals (delete product from draft) show a toast with "Undo" for 8s |
| Long operations (import) | Progress with count ("120 of 400 products"), cancel allowed, notifications when done |
| Optimistic UI | Allowed for likes, favourites, reordering, draft edits. **Not allowed** for payments, payouts, refunds, price publishing |

## 5. Forms and validation

1. **Validate on blur** for formatting (email, amount), **on submit** for everything. Do not show an error while the user is still typing the first time; after the first error, re-validate on change so it clears immediately.
2. **Error message pattern:** `[icon] What is wrong. How to fix it.` ("Amount is higher than your balance. Enter $1,200.00 or less.")
3. **Error summary:** on submit with multiple errors, focus a summary at the top (`role="alert"`) listing links to each field. Focus first invalid field.
4. **Inline help** appears before errors, never replaced by them (error shows below the hint).
5. **Required fields:** mark optional ones with "(optional)" instead of asterisks.
6. **Autofill and input hints:** correct `autocomplete`, `inputmode`, `type`. Mask phone and account numbers only on display, not while typing.
7. **Money inputs:** accept pasted values with separators, normalise on blur, never round silently; show the exact amount that will be used.
8. **Prevent double submit** and make payment requests idempotent (client sends an idempotency key).
9. **Confirm destructive actions** by naming the object; require typing the name only for irreversible, high-impact deletions (delete repo with forks).

## 6. Feedback hierarchy

| Severity | Component | Persistence |
|---|---|---|
| Info / confirmation | Toast | 6s |
| Needs attention, non-blocking | Inline alert | until resolved |
| Error on a field | Inline field error | until fixed |
| Blocking failure | Modal or full-page result | until user acts |
| Money result | Full-screen result with reference | until user leaves |

## 7. Loading and perceived performance

- Skeletons after 150ms of waiting (avoid flash for fast responses). Spinners only inside buttons.
- Keep previous content visible while refreshing; dim to 60% opacity and `aria-busy`.
- Prefetch on intent (hover/focus on cards) for repo and product detail.
- Images: reserve aspect ratio, blur-free placeholder using `--surface`, lazy-load below the fold.

## 8. Gestures and touch

- Swipe: horizontal swipe on a transaction row reveals one action only (e.g. "Receipt"). Never the only path to an action.
- Pull-to-refresh on lists in the app.
- Bottom sheets: drag handle plus a visible close button.
- Long-press is never required.
- Touch targets >= 44px with 8px spacing between targets.

## 9. Keyboard interactions

| Component | Keys |
|---|---|
| Menu / listbox | Arrow keys move, Enter or Space select, Esc close, Home/End first/last, type-ahead |
| Tabs | Left/Right (horizontal), Home/End, activate on focus |
| Modal | Tab cycles inside, Esc closes, focus returns to trigger |
| Table row actions | Enter on row opens, `Shift+F10` or the kebab opens the menu |
| Global | `/` focuses search, `g` then `w` goes to Wallet (power users; documented in a shortcuts dialog `?`) |

## 10. Notifications

In-app notification centre (bell) groups: Orders, Wallet, Repos and forks. Each item has an actionable title and timestamp. Push and email only for: new order (wholesaler), payout status, security events, fork approval requests. Allow per-channel opt-out; money and security events cannot be disabled in-app.
