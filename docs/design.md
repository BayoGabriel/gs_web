# GitShop Landing Page --- Design Direction

**Product:** GitShop\
**Page type:** Public marketing landing page\
**Design objective:** Make a new category understandable in seconds:
suppliers publish product repositories, sellers fork them, add their own
pricing, and build new distribution channels.

## 1. Creative direction

### The concept: Modern African commerce infrastructure

GitShop should feel like a confident, contemporary African technology
company building serious infrastructure for commerce. The visual
language should combine:

-   **Editorial clarity:** Large, precise typography and strong copy
    hierarchy.
-   **Warm materiality:** Paper-like backgrounds, earthy clay accents,
    rich forest green, and restrained texture.
-   **Technical precision:** Fine rules, repository paths,
    connected-node diagrams, version labels, and product data.
-   **Commercial reality:** Product cards, wholesale/retail pricing,
    stock states, and supplier-to-seller relationships.
-   **Human warmth:** Subtle visual cues from African craft, textiles,
    architecture, and trade, used abstractly rather than as decoration.

The result should be premium and distinctive, not a generic purple SaaS
template and not a stereotype of African design.

### What "African-ish" means here

Use a restrained palette inspired by forest canopies, laterite/clay
earth, warm paper, and dark ink. A very subtle geometric pattern may
reference woven structures, market grids, or interlocking trade routes.
Keep it abstract, original, and low contrast.

Do not use flags, maps of Africa, safari imagery, generic tribal
patterns, or stock photos of smiling people in traditional clothing as
shortcuts for cultural identity. The product is commerce infrastructure;
the cultural influence should enrich the design rather than distract
from the message.

## 2. Design inspiration research

### Mobbin

Reference: https://mobbin.com/

Use Mobbin to study real products and web experiences for: - Clear
navigation and page hierarchy. - How strong products explain their value
proposition quickly. - Trust-building patterns, CTA placement, and
responsive navigation. - UI details and interaction conventions that
users already understand.

Mobbin presents a library of real app and website interfaces, screens,
and flows. Use it as a reference for patterns and clarity, not as a
template to copy. [Source: Mobbin](https://mobbin.com/)

Suggested research tasks: 1. Browse web/SaaS landing pages and
commerce-related products. 2. Save examples of strong hero hierarchy,
restrained navigation, feature storytelling, and FAQ design. 3. Note the
problem each reference solves rather than copying its exact layout. 4.
Translate useful patterns into GitShop's own palette, product diagram,
and voice.

### Bencho

Reference: https://bencho.dev/

Use Bencho for carefully chosen interaction inspiration, especially: -
**Network graph / hub diagram:** A visual metaphor for suppliers and
downstream sellers. - **Tree view / folder:** A visual metaphor for
repositories and forks. - **Line/sidebar and hover states:** Small,
precise interface feedback. - **Card swap or restrained card motion:**
Optional for illustrating a catalogue fork. - **Text reveal or subtle
button feedback:** Only if it reinforces hierarchy.

Bencho is a library of interactive React components and
micro-interactions. Treat it as a source of interaction ideas, not a
reason to animate every element. [Source: Bencho](https://bencho.dev/)

### Adaptation rule

Borrow principles, not recognizable compositions. GitShop's signature
should be the **connected commerce repository diagram**, warm editorial
styling, and a clear supplier-to-seller story.

## 3. Brand personality

The page should feel: - **Confident**, not loud. - **Inventive**, not
gimmicky. - **Grounded**, not overly corporate. - **Technical**, but
understandable to a non-technical wholesaler. - **Pan-African in
ambition**, without suggesting the product only serves Africa. -
**Commercially credible**, with no unverified claims.

Avoid phrases such as "revolutionary," "game-changing," "the future of
everything," or "seamless ecosystem." Use concrete verbs: publish, fork,
price, sync, sell, distribute.

## 4. Visual system

### Color palette

Use the palette as a starting point and tune it in browser after
building real sections.

  Token         Value       Usage
  ------------- ----------- -----------------------------------------------
  Ink           `#17221D`   Primary text, dark surfaces
  Forest        `#174C3C`   Primary brand color and key actions
  Forest deep   `#10382D`   Hover/pressed states and dark hero details
  Paper         `#F7F4EC`   Main warm background
  White         `#FFFDF8`   Cards and clean content surfaces
  Clay          `#C96F4A`   Small emphasis, tags, selected visual details
  Ochre         `#D5A84B`   Sparse highlight, diagram nodes
  Muted         `#66736B`   Secondary text
  Border        `#DDDCD1`   Dividers and card outlines
  Pale green    `#E4EBE2`   Soft surfaces and diagram background

Rules: - Paper and white should occupy most of the page. - Forest is the
main accent; clay and ochre are supporting colors. - Avoid using all
accent colors equally. - Use clay for a small highlight, not every
button. - Ensure text contrast meets WCAG AA where applicable. - Avoid
gradients unless extremely subtle and purposeful.

### Typography

Recommended direction: - **Display/headings:** A distinctive, modern
grotesk or humanist sans with confident shapes. Consider `Manrope`,
`DM Sans`, or `Plus Jakarta Sans`; choose one, not all. - **Body/UI:**
Use the same family for cohesion, or pair the display font with `Inter`
if needed. - **Technical labels:** Use a restrained monospace such as
`IBM Plex Mono` for repository paths, version labels, SKU details, and
diagram annotations only.

Typography rules: - Hero headline: responsive, compact line-height, max
width around 12--14 characters per line where appropriate. - Body copy:
readable 16--18px desktop, at least 16px on mobile for primary copy. -
Small labels: generally 12--14px; do not use tiny text to force
information into the layout. - Keep long-form copy to a comfortable
reading width. - Avoid excessive all-caps headings.

### Shape and layout

-   Use a centered content container around 1120--1240px maximum width.
-   Desktop gutters around 32--48px; mobile gutters around 20--24px.
-   Major section spacing: approximately 88--120px desktop, 56--76px
    mobile.
-   Cards: 12--20px corner radius, thin border, subtle shadow only when
    necessary.
-   Buttons: comfortable height around 48--52px; restrained radius
    (10--14px), not every element in a pill.
-   Use fine rules and generous whitespace to give the page an editorial
    feel.
-   Avoid stacking a grid of identical rounded cards in every section.

## 5. Landing page story and section order

The page must explain the product in a logical sequence. Do not make
visitors infer what "fork your commerce" means.

### 1. Header

**Brand:** GitShop wordmark. Use a simple original mark inspired by a
branching path or linked boxes; do not copy GitHub's Octocat or
trademark styling.

**Navigation:** - How it works - For suppliers - For sellers - FAQ

**Primary CTA:** `Get early access`

On mobile, use a simple menu with an accessible toggle. Keep the header
light and compact; it may become slightly more opaque or gain a subtle
border on scroll only if implemented without unnecessary complexity.

### 2. Hero

Eyebrow: `A new way to distribute products`

Headline: **Your products. More sellers. One connected network.**

Supporting copy:
`GitShop helps wholesalers publish product catalogues that retailers and dropshippers can fork, price, and sell through their own channels — without rebuilding every catalogue from scratch.`

Primary CTA: `Get early access`

Secondary CTA: `See how it works`

Small supporting line: `Built for the businesses behind every sale.`

Hero layout: - Desktop: text on the left, distinctive product/network
illustration on the right. - Mobile: headline and CTA first, then a
simplified diagram. - Keep the copy area visually dominant. - Do not use
generic laptop mockups, fake dashboards full of unreadable numbers, or
unrelated stock photography.

### 3. Hero visual: the connected catalogue

This should be GitShop's signature visual, not a decorative abstract
blob.

Show: 1. One source repository card labeled `swift-footwear / sneakers`.
2. A source product row with a sample wholesale price. 3. Two branching
connections leading to two independent seller cards. 4. Seller A and
Seller B with distinct retail prices. 5. A small `Source updated` or
`Sync available` label, but do not imply a live feature exists unless it
does.

Illustrative labels: - Source catalogue --- `Wholesale · ₦20,000` -
Seller A --- `Your price · ₦27,000` - Seller B ---
`Your price · ₦29,000`

These figures are illustrative examples, not real prices or performance
claims. Mark them as an example in the UI if needed.

Visual treatment: - Warm paper panel. - Thin forest-green connector
lines. - Product thumbnail or simple shoe/product illustration. - Small
clay or ochre node accents. - Monospace repository paths and version
tags. - Minimal, purposeful animation: a line draw or subtle node
highlight, with reduced-motion support.

### 4. Problem section

Heading: **Good products shouldn't need to be listed from scratch every
time.**

Copy:
`Suppliers repeat the same catalogue work. Sellers copy product details by hand. Prices and stock drift out of date. GitShop is designed to connect the source catalogue to the businesses that sell from it.`

Use three compact problem statements: - Rebuilding catalogues - Chasing
stock and price updates - Growing distribution one relationship at a
time

Avoid exaggerated pain claims or unsupported statistics.

### 5. How it works

Heading: **From one catalogue to many selling channels.**

Three steps:

**01 --- Publish**
`A wholesaler creates a product repository with product details, wholesale terms, and availability.`

**02 --- Fork**
`A retailer or dropshipper creates a connected catalogue and sets their own pricing and storefront preferences.`

**03 --- Sell**
`The seller shares their catalogue and manages customer orders while the supplier relationship remains traceable.`

Use a connected horizontal flow on desktop and a vertical sequence on
mobile. Pair each step with a real visual state, not just three generic
icons.

Important: If upstream synchronization, checkout, or fulfillment is not
implemented yet, frame it as a product capability being built or planned
rather than a currently available guarantee.

### 6. Value propositions

Heading: **Built for both sides of the sale.**

Supplier panel: **Reach more sellers without rebuilding your
catalogue.** - Publish products once. - Define reseller access and
commercial terms. - Keep product information organized at its source. -
Build a wider distribution network.

Seller panel: **Build your business on products ready to sell.** - Start
from existing supplier catalogues. - Apply your own markups and product
presentation. - Bring products from multiple suppliers together. - Build
your own customer-facing channel.

Use a balanced two-column composition, with distinct but related
treatments. Do not make one side look like an afterthought.

### 7. A connected network section

Heading: **One supplier can power many independent businesses.**

Copy:
`GitShop's model connects source catalogues to the sellers who build on them. Each seller can shape their own offer while retaining a clear relationship to the original supplier.`

Show a larger, clean branching network diagram. This section should
reinforce the category-defining idea rather than repeat a generic
feature grid.

### 8. Trust and control section

Heading: **Independent businesses. Clear relationships.**

Explain the principles: - Suppliers control their source catalogue and
access rules. - Sellers control their own storefront and pricing
choices. - Source relationships remain identifiable. - Commercial terms
and product availability need to be clear.

Do not claim comprehensive security, guaranteed stock, or automatic
synchronization unless those features have been built and verified.

### 9. FAQ

Suggested questions: - What is GitShop? - What does it mean to fork a
product repository? - Do sellers need to hold inventory? - Can a seller
use products from multiple suppliers? - Can suppliers control who
resells their products? - Does GitShop handle payments and delivery? -
Is GitShop available now?

Answer the final two questions honestly based on actual launch status.
Do not imply product availability or functionality that does not exist.

### 10. Final CTA

Heading: **Build your business on a better way to distribute products.**

Copy:
`We're shaping a more connected way for suppliers and sellers to work together. Join the early-access list to follow GitShop's launch.`

CTA: `Get early access`

The form should request only essential information. Consider a simple
role selection: `Supplier / wholesaler` or `Retailer / dropshipper`.
Show a real success state only after successful submission.

### 11. Footer

Include: - GitShop wordmark and one-line description. - How it works,
For suppliers, For sellers. - Contact or early access. - Privacy and
terms only when valid pages exist. - Copyright year generated
dynamically if the codebase supports it.

Do not add social links to inactive or nonexistent accounts.

## 6. Copywriting rules

### Voice

Plainspoken, precise, optimistic, and commercially grounded.

Use words that make sense to a wholesaler who has never used Git: -
Catalogue instead of repository when first explaining the concept. -
Fork as the named product action, immediately explained as "create your
own connected version." - Supplier, seller, products, pricing, stock,
storefront, orders.

Introduce "repository" as GitShop's underlying model after the value is
clear.

### Message hierarchy

1.  **What it is:** Connected product catalogues for suppliers and
    sellers.
2.  **How it works:** Publish → Fork → Sell.
3.  **Why it matters:** Less duplicate catalogue work; more distribution
    opportunities.
4.  **Why it is different:** Source catalogues and seller versions
    remain connected.
5.  **What to do:** Join early access.

### Copy rules

-   Avoid technical jargon in the hero.
-   Keep headings short and concrete.
-   Each section should make one main point.
-   Use active voice.
-   Do not claim "zero inventory," "instant store," "guaranteed profit,"
    or "automatic fulfillment" unless supported by the actual product.
-   Do not invent testimonials, logos, customer counts, revenue
    statistics, or partner names.
-   Make the call to action consistent throughout the page.

## 7. Interaction and motion

Motion should explain the product model.

Good candidates: - A subtle branch line drawing from the source
repository to two seller cards. - Small hover emphasis on the source and
fork cards. - A gentle card transition showing a seller's markup. -
Button hover/focus feedback. - FAQ expand/collapse with restrained
motion.

Avoid: - Constantly moving backgrounds. - Scroll-jacking. -
Cursor-following effects that impair usability. - Heavy 3D scenes or
canvas animations. - Animation on every heading and card. - Motion that
is required to understand the diagram.

Honor `prefers-reduced-motion`. Ensure the diagram remains
understandable when all animation is disabled.

## 8. Imagery and graphics

Prefer a custom product illustration over generic stock imagery.

Suggested assets: - Simple original product thumbnails (shoes, apparel,
bags, household products). - Repository and fork diagrams. - Abstract
interlocking lines or grid patterns. - Carefully cropped photography of
real small-business commerce only if it contributes to the message and
is appropriately licensed.

Keep visual assets consistent in lighting, crop, background, and color
treatment. Do not mix random stock photography with flat vector
illustrations and glossy 3D icons.

## 9. Responsive behavior

### Mobile

-   One-column layout.
-   Hero headline, copy, and CTA visible early.
-   Diagram stacks vertically and remains legible.
-   Navigation collapses into an accessible menu.
-   Two-column benefits become stacked panels.
-   Buttons and form controls have touch-friendly targets.
-   No horizontal overflow from diagrams or decorative patterns.

### Tablet

-   Keep the hero illustration legible; avoid shrinking a desktop
    diagram into a tiny unreadable panel.
-   Allow feature grids to use two columns where space permits.

### Desktop

-   Use a controlled max-width and strong left/right alignment.
-   Let the hero diagram occupy enough space to be understood at a
    glance.
-   Alternate section compositions to avoid a repetitive card-grid page.
-   Maintain comfortable line lengths and whitespace.

## 10. Quality bar and acceptance criteria

The design is ready for implementation review when: - A first-time
visitor can explain GitShop after reading the hero and how-it-works
sections. - The hero explains both the supplier and seller value. - The
source-to-fork relationship is visually obvious. - The African influence
feels intentional, contemporary, and restrained. - The design is
distinct from generic SaaS templates. - Every CTA has a defined
destination and behavior. - No fake social proof or unsupported product
claims appear. - All major sections work at mobile, tablet, and desktop
sizes. - Focus, contrast, reduced motion, and keyboard behavior are
accounted for. - Interactions are subtle and reinforce understanding
rather than compete with content.

## 11. References

-   Mobbin --- real app and website UI patterns: https://mobbin.com/
-   Bencho --- React interaction and micro-interaction inspiration:
    https://bencho.dev/
-   GitShop architecture conventions and component boundaries: see
    `architecture.md`.

Use these references for research and selective inspiration. Do not
reproduce another brand's page or distinctive illustration. GitShop's
own repository-to-fork visual and warm editorial identity should be the
recognizable signature.
