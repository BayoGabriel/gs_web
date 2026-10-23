export const articleCategories = ['All', 'Guides', 'Product updates', 'Stories'] as const

export const articles = [
  { id: 'a1', title: 'How to launch a store with no stock', category: 'Guides', image: 'blog-01', placeholder: true },
  { id: 'a2', title: 'Pricing your products: a seller\u2019s guide', category: 'Guides', image: 'blog-02', placeholder: true },
  { id: 'a3', title: 'How to prepare a catalogue for sellers', category: 'Guides', image: 'blog-03', placeholder: true },
  { id: 'a4', title: 'Running several catalogues from one account', category: 'Product updates', image: 'blog-04', placeholder: true },
  { id: 'a5', title: 'What happens after a customer pays', category: 'Product updates', image: 'blog-05', placeholder: true },
  { id: 'a6', title: 'A wholesaler\u2019s guide to selling through sellers', category: 'Stories', image: 'blog-06', placeholder: true },
]

export const guidesIndex = [
  { title: 'Start selling', body: 'Fork a catalogue, set prices, publish your store.', to: '/sellers' },
  { title: 'Publish a catalogue', body: 'Import products and set the rules for sellers.', to: '/wholesalers' },
  { title: 'Set your prices', body: 'Margins, limits and what the customer pays.', to: '/product/forking' },
  { title: 'Wallets and payouts', body: 'How collections, splits and withdrawals work.', to: '/product/wallet' },
  { title: 'Storefront settings', body: 'Name, link, support details and returns policy.', to: '/product/storefronts' },
  { title: 'Order statuses', body: 'What each step on the timeline means.', to: '/product/order-routing' },
]

export const helpTopics = [
  { title: 'Getting started', body: 'Accounts, roles and your first store or repo.', to: '/guides' },
  { title: 'Selling', body: 'Forking, pricing and sharing your store.', to: '/guides' },
  { title: 'Publishing', body: 'Repos, products and rules.', to: '/guides' },
  { title: 'Money', body: 'Wallets, collections, payouts and fees.', to: '/guides' },
]
