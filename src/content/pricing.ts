export const pricing = {
  headlineLight: 'Simple,',
  headlineBold: 'transparent',
  headlineTail: 'pricing.',
  sub: 'The fee schedule is still being finalised. What will not change: the full breakdown is always shown before you publish and before you pay.',
  howFeesWork: [
    { id: 'publish', title: 'Publishing is free', body: 'Creating a repo or forking one costs nothing.' },
    { id: 'sale', title: 'Fees apply per sale', body: 'A platform fee plus payment processing is taken from each customer payment. Exact rates publish before launch.', placeholder: true },
    { id: 'payout', title: 'Payouts may carry a fee', body: 'If a payout has a fee, you see the amount and destination before you confirm.', placeholder: true },
  ],
  whoPays: [
    { party: 'Customer', pays: 'The store price on checkout — one number, no surprises.' },
    { party: 'Seller', pays: 'The platform share comes out of the sale before your earnings land.' },
    { party: 'Supplier', pays: 'Their share of the sale goes to their wallet, minus any agreed fees.' },
  ],
  included: [
    'Unlimited public repos and forks',
    'Storefront, checkout and order tracking',
    'Wallets, collections and payouts',
    'Automatic payment split on every order',
  ],
  faq: [
    { id: 'when', q: 'When will exact fees be published?', a: 'Before launch. Until then, all fee numbers shown are illustrative examples.' },
    { id: 'hide', q: 'Are fees hidden at checkout?', a: 'No. The customer sees the total; sellers see the split before they publish a price.' },
  ],
}

export const security = {
  headlineLight: 'Your money and data,',
  headlineBold: 'protected.',
  sub: 'How GitShop handles payments, wallets and accounts.',
  sections: [
    { id: 'payments', title: 'Payments', body: 'Payments are collected in the app at checkout and every collection is recorded against an order and a reference.' },
    { id: 'wallet', title: 'Wallet safeguards', body: 'Balances show pending until confirmed. Failed payouts keep money in the wallet and say so. No optimistic balances.' },
    { id: 'account', title: 'Account security', body: 'Two-factor authentication is coming soon.', soon: true },
    { id: 'data', title: 'Data and privacy', body: 'We collect only what the service needs to run. See the privacy policy for the details.' },
    { id: 'report', title: 'Reporting a problem', body: 'Found a security issue? Contact us and we will investigate.' },
  ],
}
