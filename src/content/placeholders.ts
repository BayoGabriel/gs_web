/**
 * Everything here MUST be replaced or confirmed before launch.
 * These values render with a data-placeholder attribute and are counted by
 * scripts/check-placeholders.mjs.
 */

export const announcement = {
  text: 'GitShop is opening to wholesalers and sellers. Join the first wave.',
  placeholder: true,
}

export const proofStats = [
  { id: 'repos', label: 'Repos published', value: 0 },
  { id: 'stores', label: 'Stores live', value: 0 },
  { id: 'orders', label: 'Orders routed', value: 0 },
  { id: 'paid', label: 'Paid out', value: 0 },
]

export const testimonials = [
  {
    id: 'seller-story',
    portrait: 'portrait-01',
    quote: 'Placeholder story from a seller who runs a storefront without holding stock.',
    name: 'Seller, placeholder',
    role: 'Storefront owner',
    placeholder: true,
  },
  {
    id: 'wholesaler-story',
    portrait: 'portrait-02',
    quote: 'Placeholder story from a wholesaler whose catalogue is sold through many stores.',
    name: 'Wholesaler, placeholder',
    role: 'Catalogue publisher',
    placeholder: true,
  },
]

export const teamPlaceholders = [
  { name: 'Team member', role: 'Placeholder', portrait: 'portrait-01' },
  { name: 'Team member', role: 'Placeholder', portrait: 'portrait-02' },
  { name: 'Team member', role: 'Placeholder', portrait: 'portrait-03' },
  { name: 'Team member', role: 'Placeholder', portrait: 'portrait-04' },
]

/** Illustrative fee for calculators — never presented as the real rate. */
export const exampleFeeBps = 500
