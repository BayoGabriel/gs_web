export const hero = {
  headlineBold: 'Distribution',
  headlineLight: 'made easy.',
  sub: 'Publish a catalogue once. Let anyone sell it from their own store. GitShop runs the orders, the payments and the payouts.',
  microcopy: 'No stock to hold. No spreadsheets to chase.',
  floatingCards: [
    { id: 'payment', label: 'Payment received' },
    { id: 'catalogue', label: 'Catalogue updated: 148 products' },
    { id: 'payout', label: 'Payout sent' },
  ],
}

export const categories: { label: string; image?: string }[] = [
  { label: 'Fashion', image: 'category-fashion' },
  { label: 'Beauty', image: 'category-beauty' },
  { label: 'Electronics', image: 'category-electronics' },
  { label: 'Home', image: 'category-home' },
  { label: 'Food and drink', image: 'category-food' },
  { label: 'Accessories', image: 'category-accessories' },
  { label: 'Sports' },
  { label: 'Kids' },
  { label: 'Stationery' },
]

export const oldWay = {
  eyebrow: 'The old way',
  headlineBold: 'Distribution',
  headlineLight: 'still runs on spreadsheets and chat threads.',
  body: "Price lists go out of date. Orders get lost between messages. Payments are chased by hand. Selling more shouldn't mean managing more.",
  cards: [
    { id: 'scattered', text: 'Catalogues scattered across PDFs and chats' },
    { id: 'stale', text: "Prices that are wrong by the time they're sent" },
    { id: 'manual', text: 'Orders and payments tracked by hand' },
  ],
  turnLine: 'One catalogue. One flow. Everyone paid.',
}

export const repoSpotlight = {
  eyebrow: 'Repo management',
  headlineBold: 'One repo.',
  headlineLight: 'Your whole catalogue, always current.',
  sub: 'A repo is where your products, prices and rules live. Change something once and every store selling it stays up to date. No resending price lists. No stale stock.',
  link: { label: 'Explore repo management', to: '/product/repo-management' },
  tiles: [
    { id: 'import', title: 'Import in minutes', body: 'Bring products in from a spreadsheet, or upload photos and fill in the details. Add variants, SKUs and categories as you go.', soon: false },
    { id: 'truth', title: 'One source of truth', body: 'Every product, image and price lives in a single place your whole network sells from.', soon: false },
    { id: 'track', title: 'Changes you can track', body: 'See what changed, when and by whom. Review updates before you publish them.', soon: true },
    { id: 'rules', title: 'Rules that protect your pricing', body: 'Set the lowest price a product can sell for and the margin sellers can add.', soon: true },
    { id: 'decide', title: 'You decide who sells', body: 'Open to everyone, invite-only, or approve each seller yourself.', soon: true },
    { id: 'sync', title: 'Every store stays in sync', body: 'Stock, prices and new products flow to every storefront selling your repo.', soon: true },
    { id: 'selling', title: "See what's selling", body: 'Track forks and sales across your catalogue.', soon: true },
  ],
}

export const howItWorks = {
  eyebrow: 'How it works',
  headlineBold: 'From warehouse to customer',
  headlineLight: 'in four steps.',
  steps: [
    { id: 'publish', index: '01', title: 'Publish a repo', body: "A wholesaler or brand uploads products and sets the rules. It's one catalogue, public or private.", image: 'step-1' },
    { id: 'fork', index: '02', title: 'Sellers fork it', body: 'Forking gives a seller their own copy for their own store, with their own prices. Fork as many repos as you like.', image: 'step-2' },
    { id: 'live', index: '03', title: 'The store goes live', body: 'Share your store link. Customers browse, pay and track their orders, all under your name.', image: 'step-3' },
    { id: 'fulfil', index: '04', title: 'Orders fulfil themselves', body: 'GitShop collects the payment, sends the order to the supplier and pays everyone automatically.', image: 'step-4' },
  ],
}

export const forSellers = {
  eyebrow: 'For sellers',
  headlineBold: 'Open a store',
  headlineLight: 'without owning a single item.',
  body: 'Pick the catalogues you want to sell, set your prices and share your link. No stock. No packing. No chasing payments.',
  bullets: [
    'Fork any public catalogue, or several',
    'Set your prices product by product or all at once',
    'Your store, your name, your link',
    'Your earnings land in your wallet on every sale',
  ],
  image: 'seller-section',
}

export const forWholesalers = {
  eyebrow: 'For wholesalers and brands',
  headlineBold: 'Reach more customers',
  headlineLight: 'through every store that sells you.',
  body: 'Publish your catalogue once and let sellers do the selling. You receive complete, paid orders without managing each seller one by one.',
  bullets: [
    'Publish once, sell through many stores',
    'Stay in control of your products, stock and pricing rules',
    'Receive paid orders that are ready to ship',
    'Get paid automatically on every order',
  ],
  image: 'wholesaler-section',
}

export const storefront = {
  eyebrow: 'Storefronts',
  headlineLight: 'A store that\u2019s',
  headlineBold: 'entirely yours.',
  body: 'Every forked repo becomes a shareable storefront with your name, your logo and your prices. Customers shop, pay and track orders without ever leaving it.',
  chips: [
    { label: 'Your name and logo' },
    { label: 'Your own link' },
    { label: 'Share by link or QR', soon: true },
    { label: 'Works on any phone' },
    { label: 'Secure checkout' },
    { label: 'Order tracking' },
  ],
}

export const payments = {
  eyebrow: 'Payments',
  headlineBold: 'Money moves',
  headlineLight: 'with the order.',
  body: "Every sale is split automatically. Your earnings go to your wallet, the supplier's share goes to theirs, and you withdraw to your bank whenever you're ready.",
  bullets: [
    'Wallets built in for everyone',
    'Payments collected in the app',
    'Automatic split on every order',
    'Payouts to your bank account',
    'A clear record of every transaction',
  ],
}

export const useCases = [
  { id: 'social', title: 'Social sellers', body: 'Turn your followers into customers with a store link you can post anywhere.', image: 'usecase-social' },
  { id: 'shop', title: 'Shop owners', body: 'Widen your range without buying more inventory.', image: 'usecase-shop' },
  { id: 'creator', title: 'Creators and communities', body: 'Offer products your audience wants, under your own name.', image: 'usecase-creator' },
  { id: 'dropship', title: 'Dropshippers', body: 'Run many catalogues from a single account.', image: 'usecase-dropship' },
  { id: 'brand', title: 'Brands and manufacturers', body: 'Put your products in front of more shoppers through more storefronts.', image: 'usecase-brand' },
]

export const calculator = {
  eyebrow: 'Do the maths',
  headlineLight: 'See what',
  headlineBold: 'one sale',
  headlineTail: 'looks like.',
  body: "Enter the supplier price and the margin you want. We'll show what your customer pays and what you earn.",
  note: 'Illustrative example. Final fees are shown before you commit and at checkout.',
}

export const comparison = {
  headlineLight: 'The old way, or',
  headlineBold: 'GitShop.',
  rows: [
    { id: 'catalogue', label: 'Catalogue', old: 'PDFs and chat threads', gitshop: 'One repo, always current' },
    { id: 'pricing', label: 'Pricing', old: 'Re-sent by hand', gitshop: 'Set once, applied everywhere' },
    { id: 'orders', label: 'Orders', old: 'Forwarded manually', gitshop: 'Routed automatically' },
    { id: 'payments', label: 'Payments', old: 'Chased and reconciled', gitshop: 'Collected and split automatically' },
    { id: 'growth', label: 'Growth', old: 'More sellers means more admin', gitshop: 'More sellers means more reach' },
  ],
}

export const trust = {
  headlineLight: 'Built to be',
  headlineBold: 'trusted.',
  tiles: [
    { id: 'checkout', title: 'Secure checkout' },
    { id: 'record', title: 'A clear record of every transaction' },
    { id: 'review', title: 'Review before every payout' },
    { id: 'support', title: 'Support when you need it' },
  ],
  link: { label: 'How we protect your money and data', to: '/security' },
}

export const closingCta = {
  headlineBold: 'Ready',
  headlineLight: 'to make distribution easy?',
  sub: 'Open a store in minutes, or publish your catalogue and let others sell it.',
}
