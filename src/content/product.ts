/** Copy for the Product hub and the five product subpages. */

export const productHub = {
  headlineBold: 'Product',
  headlineLight: 'the distribution layer.',
  sub: 'Repos, forks, storefronts, wallets and routed orders — the five pieces that turn one catalogue into many stores.',
  entries: [
    { title: 'Repo management', to: '/product/repo-management', description: 'Your whole catalogue in one place. Update it once and every storefront follows.' },
    { title: 'Forking and pricing', to: '/product/forking', description: 'Sellers fork a repo and set their own prices, product by product or all at once.' },
    { title: 'Storefronts', to: '/product/storefronts', description: 'Every fork becomes a shareable store under the seller\u2019s name.' },
    { title: 'Wallet and payments', to: '/product/wallet', description: 'Collections, automatic splits and payouts built into every sale.' },
    { title: 'Order routing', to: '/product/order-routing', description: 'The customer pays. The supplier gets a paid, complete order.' },
  ],
}

export const repoManagement = {
  headlineBold: 'Run your catalogue',
  headlineLight: 'like a repository.',
  sub: 'Every product, price and rule in one place. Update it once and every storefront follows.',
  sections: [
    { id: 'import', title: 'Import and organise', body: 'Bring products in from a spreadsheet, or upload photos and fill in the details. Add variants, SKUs and categories as you go.', soon: false, image: 'step-1' },
    { id: 'rules', title: 'Pricing rules', body: 'Set the lowest price a product can sell for and the margin sellers can add.', soon: true },
    { id: 'access', title: 'Visibility and access', body: 'Public today. Invite-only repos and per-seller approval are on the way.', soon: true },
    { id: 'inventory', title: 'Inventory and availability', body: 'Stock counts live in the repo, so what stores can sell matches what you can ship.', soon: false },
    { id: 'changes', title: 'Changes you can track', body: 'See what changed, when and by whom. Review updates before you publish them.', soon: true },
    { id: 'sync', title: 'Sync to every fork', body: 'Stock, prices and new products flow to every storefront selling your repo.', soon: true },
    { id: 'insights', title: 'Insights', body: 'Track forks, sales and your best-performing products across the catalogue.', soon: true },
    { id: 'teams', title: 'Teams and roles', body: 'Give teammates the right level of access to the repo.', soon: true },
    { id: 'api', title: 'API and webhooks', body: 'Connect your own tools to the catalogue and to order events.', soon: true },
  ],
  faq: [
    { id: 'what', q: 'What is a repo?', a: 'A repo is a managed product catalogue: products, prices, stock and the rules for selling them.' },
    { id: 'private', q: 'Can a repo be private?', a: 'Public repos are available today. Invite-only repos are coming soon.' },
    { id: 'update', q: 'What happens when I update a product?', a: 'Update it once in the repo. Storefront sync is coming soon — until then, sellers see the change on their next import.' },
  ],
}

export const forking = {
  headlineBold: 'Fork a catalogue.',
  headlineLight: 'Make it yours.',
  sub: 'Choose a repo, set your prices and start selling in minutes. Fork as many as you like.',
  sections: [
    { id: 'browse', title: 'Browse repos', body: 'Filter by category and see what each catalogue offers before you fork it.' },
    { id: 'one-step', title: 'Fork in one step', body: 'One action gives you your own copy for your own store.' },
    { id: 'prices', title: 'Set your prices', body: 'Add your margin product by product or apply one rule to everything. You always see what the customer pays and what you earn.' },
    { id: 'several', title: 'Manage several forks', body: 'Fork as many repos as you like. They all sell through the same store.' },
    { id: 'updates', title: 'Stay up to date', body: 'Get notified when a repo you forked changes.', soon: true },
  ],
}

export const storefronts = {
  headlineBold: 'Your store.',
  headlineLight: 'Your name. Your link.',
  sub: 'Every fork becomes a storefront customers love to use. Share it anywhere.',
  sections: [
    { id: 'customise', title: 'Make it yours', body: 'Your name, your logo and your own link — like yourname on GitShop.' },
    { id: 'experience', title: 'A checkout customers finish', body: 'Customers browse, pay and track orders on a store built for phones.' },
    { id: 'share', title: 'Share anywhere', body: 'Post your link anywhere people follow you. QR codes are coming soon.', soon: true },
    { id: 'policies', title: 'Your details, your policies', body: 'Add your business details, support contact and returns policy. Your store is the customer\u2019s point of contact.' },
  ],
}

export const walletPayments = {
  headlineBold: 'Get paid',
  headlineLight: 'on every order, automatically.',
  sub: 'Wallets, collections and payouts built into every sale.',
  sections: [
    { id: 'collections', title: 'Collections', body: 'Every customer payment lands as a collection with the order and reference attached.' },
    { id: 'split', title: 'Automatic split', body: 'The supplier\u2019s share goes to their wallet, your earnings go to yours — the moment the customer pays.' },
    { id: 'wallet', title: 'Wallet', body: 'See your balance, pending amounts and every transaction in one place.' },
    { id: 'payouts', title: 'Payouts', body: 'Withdraw to your bank whenever you\u2019re ready. You always review the amount and destination first.' },
    { id: 'history', title: 'Transaction history', body: 'A clear record of every collection, split and payout.' },
    { id: 'safeguards', title: 'Safeguards', body: 'Money shows as pending until it is confirmed. A failed payout keeps your balance — and says so.' },
  ],
}

export const orderRouting = {
  headlineBold: 'Every order',
  headlineLight: 'goes to the right place.',
  sub: 'The customer pays. The supplier gets a paid, complete order. You do nothing.',
  sections: [
    { id: 'journey', title: 'The journey', body: 'Placed, paid, sent to the supplier, shipped, delivered — one timeline everyone can see.' },
    { id: 'supplier-view', title: 'What the supplier sees', body: 'A paid order with the items, address and notes — ready to fulfil.' },
    { id: 'seller-view', title: 'What the seller sees', body: 'The order, its status and your earnings. No action needed.' },
    { id: 'customer-view', title: 'What the customer sees', body: 'Your store, their order and its status — nothing else.' },
    { id: 'status', title: 'Status updates', body: 'Every change on the order is visible to everyone who needs it.' },
    { id: 'refunds', title: 'Cancellations and refunds', body: 'Tools for cancelling and refunding orders are coming soon.', soon: true },
  ],
}
