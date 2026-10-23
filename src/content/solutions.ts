export const sellersPage = {
  headlineBold: 'Sell more.',
  headlineLight: 'Stock nothing.',
  sub: 'Open a store from catalogues you pick, set your prices and let GitShop handle the rest.',
  startSteps: [
    { id: 'pick', title: 'Pick catalogues', body: 'Browse public repos and fork the ones you want to sell.' },
    { id: 'price', title: 'Set your prices', body: 'Add your margin product by product or all at once.' },
    { id: 'share', title: 'Share your link', body: 'Your store is live. Post the link anywhere.' },
  ],
  faq: [
    { id: 'stock', q: 'Do I need to buy stock?', a: 'No. The supplier ships every order. You never hold inventory.' },
    { id: 'earn', q: 'How much do I earn?', a: 'The margin you set. You see your earnings on every product before it goes live.' },
    { id: 'many', q: 'Can I sell more than one catalogue?', a: 'Yes — fork as many repos as you like and sell them all from one store.' },
  ],
}

export const wholesalersPage = {
  headlineBold: 'Reach more customers',
  headlineLight: 'without managing more sellers.',
  sub: 'Publish your catalogue once. Let sellers do the selling. Receive paid, ready-to-ship orders.',
  points: [
    { id: 'once', title: 'Publish once', body: 'Your repo is the catalogue every store sells from.', soon: false },
    { id: 'control', title: 'Stay in control', body: 'Your products, stock and pricing rules stay yours.', soon: false },
    { id: 'reach', title: 'Reach through many stores', body: 'Every fork is another storefront carrying your products.', soon: false },
    { id: 'orders', title: 'Orders that arrive ready', body: 'Paid, complete orders — no forwarded messages, no chasing payment.', soon: false },
    { id: 'paid', title: 'Get paid automatically', body: 'Your share lands in your wallet when the customer pays.', soon: false },
    { id: 'insights', title: 'Insights', body: 'See which products get forked and which sell.', soon: true },
  ],
}

export const useCasesPage = {
  headlineBold: 'Whoever',
  headlineLight: 'you sell to, there\u2019s a way in.',
  sub: 'Sellers with an audience, shops with shelves, creators with communities, dropshippers with systems, brands with products.',
  cases: [
    {
      id: 'social', title: 'Social sellers', image: 'usecase-social',
      body: 'Turn your followers into customers with a store link you can post anywhere.',
      benefits: ['Fork catalogues your followers will want', 'One link for every post and profile', 'Earnings land in your wallet'],
    },
    {
      id: 'shop', title: 'Shop owners', image: 'usecase-shop',
      body: 'Widen your range without buying more inventory.',
      benefits: ['Add products without buying stock', 'Sell online alongside the counter', 'No extra fulfilment work'],
    },
    {
      id: 'creator', title: 'Creators and communities', image: 'usecase-creator',
      body: 'Offer products your audience wants, under your own name.',
      benefits: ['Your name on the store', 'Curate from several catalogues', 'Paid automatically on each sale'],
    },
    {
      id: 'dropship', title: 'Dropshippers', image: 'usecase-dropship',
      body: 'Run many catalogues from a single account.',
      benefits: ['Fork as many repos as you like', 'Prices and margins under your control', 'Orders route to suppliers themselves'],
    },
    {
      id: 'brand', title: 'Brands and manufacturers', image: 'usecase-brand',
      body: 'Put your products in front of more shoppers through more storefronts.',
      benefits: ['Publish once, sell through many stores', 'Keep pricing rules intact', 'Receive paid, ready-to-ship orders'],
    },
  ],
}
