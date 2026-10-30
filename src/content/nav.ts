export type NavLeaf = { label: string; to: string; description: string }
export type NavEntry =
  | { type: 'link'; label: string; to: string }
  | { type: 'menu'; label: string; items: NavLeaf[] }

export const tagline = 'Distribution, made easy.'

export const primaryCta = { label: 'Start selling', to: 'https://app.gitshop.co/sign-up?role=seller' }
export const secondaryCta = { label: 'Publish a catalogue', to: 'https://app.gitshop.co/sign-up?role=wholesaler' }
export const signInCta = { label: 'Sign in', to: 'https://app.gitshop.co/sign-in' }

export const navEntries: NavEntry[] = [
  {
    type: 'menu',
    label: 'Product',
    items: [
      { label: 'Repo management', to: '/product/repo-management', description: 'Your whole catalogue in one place, always current.' },
      { label: 'Forking and pricing', to: '/product/forking', description: 'Sellers fork a repo and set their own prices.' },
      { label: 'Storefronts', to: '/product/storefronts', description: 'Every fork becomes a store customers can buy from.' },
      { label: 'Wallet and payments', to: '/product/wallet', description: 'Collections, automatic splits and payouts.' },
      { label: 'Order routing', to: '/product/order-routing', description: 'Paid orders go straight to the supplier.' },
    ],
  },
  {
    type: 'menu',
    label: 'Solutions',
    items: [
      { label: 'For sellers', to: '/sellers', description: 'Open a store without holding stock.' },
      { label: 'For wholesalers and brands', to: '/wholesalers', description: 'Sell through every store that stocks you.' },
      { label: 'Use cases', to: '/use-cases', description: 'Social sellers, shops, creators, dropshippers, brands.' },
    ],
  },
  { type: 'link', label: 'Pricing', to: '/pricing' },
  {
    type: 'menu',
    label: 'Resources',
    items: [
      { label: 'Blog', to: '/blog', description: 'Guides and product updates.' },
      { label: 'Guides', to: '/guides', description: 'Step-by-step walkthroughs.' },
      { label: 'Docs', to: '/docs', description: 'Concepts and reference.' },
      { label: 'Help', to: '/help', description: 'Find answers or reach the team.' },
    ],
  },
  { type: 'link', label: 'About', to: '/about' },
]

export const footerGroups = [
  {
    title: 'Product',
    links: [
      { label: 'Repo management', to: '/product/repo-management' },
      { label: 'Forking and pricing', to: '/product/forking' },
      { label: 'Storefronts', to: '/product/storefronts' },
      { label: 'Wallet and payments', to: '/product/wallet' },
      { label: 'Order routing', to: '/product/order-routing' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'For sellers', to: '/sellers' },
      { label: 'For wholesalers', to: '/wholesalers' },
      { label: 'Use cases', to: '/use-cases' },
      { label: 'Pricing', to: '/pricing' },
      { label: 'Security', to: '/security' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', to: '/blog' },
      { label: 'Guides', to: '/guides' },
      { label: 'Docs', to: '/docs' },
      { label: 'Help', to: '/help' },
      { label: 'UI kit', to: '/ui-kit' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Contact', to: '/contact' },
      { label: 'Sign in', to: signInCta.to },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy', to: '/privacy' },
      { label: 'Terms', to: '/terms' },
      { label: 'Accessibility', to: '/accessibility' },
    ],
  },
]
