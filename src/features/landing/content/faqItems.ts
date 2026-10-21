export type FaqItemData = {
  id: string
  question: string
  answer: string
}

export const faqItems: FaqItemData[] = [
  {
    id: 'what-is-gitshop',
    question: 'What is GitShop?',
    answer:
      'GitShop is a product-distribution platform designed to help suppliers publish product catalogues that retailers and dropshippers can fork, customise with their own pricing, and use as a starting point for selling.',
  },
  {
    id: 'what-is-fork',
    question: 'What does “fork a catalogue” mean?',
    answer:
      "It means creating your own working copy of a supplier's catalogue so you can select relevant products and adapt the pricing for your business.",
  },
  {
    id: 'who-is-it-for',
    question: 'Who is GitShop for?',
    answer:
      'GitShop is designed for wholesalers and suppliers who want to distribute their product catalogues, as well as retailers, resellers and dropshippers looking for products to sell.',
  },
  {
    id: 'own-prices',
    question: 'Can sellers set their own prices?',
    answer:
      "The intended workflow allows sellers to set their own selling prices. Suppliers' terms and any applicable platform rules will determine the conditions under which products can be offered.",
  },
  {
    id: 'multiple-suppliers',
    question: 'Can a seller work with multiple suppliers?',
    answer:
      'The GitShop model is designed to support sellers who build their product selection from catalogues provided by different suppliers.',
  },
  {
    id: 'payments-shipping',
    question: 'Does GitShop handle payments, shipping or fulfilment?',
    answer:
      "This page describes GitShop's catalogue-distribution model. Payment processing, shipping and fulfilment capabilities will be communicated as they are confirmed as part of the product.",
  },
  {
    id: 'available-now',
    question: 'Is GitShop available now?',
    answer:
      'GitShop is being developed. Join the early-access list to express your interest and receive updates as more information becomes available.',
  },
  {
    id: 'get-involved',
    question: 'How can I get involved?',
    answer:
      "Register your interest through the early-access form and indicate whether you're a supplier or a seller.",
  },
]
