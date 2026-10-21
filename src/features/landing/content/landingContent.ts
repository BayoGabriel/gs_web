import type {
  Benefit,
  ComparisonColumn,
  HowItWorksStep,
  Problem,
} from '../state/landing.types'

export const problems: Problem[] = [
  {
    id: 'repetition',
    title: 'Catalogue repetition',
    description:
      'Product information is repeatedly copied into separate listings, documents and conversations.',
  },
  {
    id: 'distribution',
    title: 'Disconnected distribution',
    description:
      'Suppliers organise and share product information across many individual selling relationships.',
  },
  {
    id: 'setup',
    title: 'Slow seller setup',
    description:
      'Retailers and dropshippers spend time preparing product listings before they can start promoting them.',
  },
]

export const howItWorksSteps: HowItWorksStep[] = [
  {
    id: 'publish',
    index: '01',
    title: 'Publish',
    description:
      'Suppliers organise their products into a catalogue that sellers can discover and use as a starting point.',
  },
  {
    id: 'fork',
    index: '02',
    title: 'Fork',
    description:
      'Retailers and dropshippers fork a catalogue to create their own working selection of products.',
  },
  {
    id: 'sell',
    index: '03',
    title: 'Price and sell',
    description:
      'Each seller sets their own selling prices and builds their own approach to reaching customers.',
  },
]

export const supplierBenefits: Benefit[] = [
  {
    id: 'organise',
    title: 'Organise once, distribute more clearly',
    description:
      'Present product information in a structured catalogue instead of preparing separate lists for every potential seller.',
  },
  {
    id: 'reach',
    title: 'Reach more potential sellers',
    description:
      'Give retailers and dropshippers a clearer starting point for discovering and selecting your products.',
  },
  {
    id: 'clarity',
    title: 'Keep your products easier to understand',
    description:
      'Present product details, variants, images and wholesale pricing in a more consistent format.',
  },
]

export const sellerBenefits: Benefit[] = [
  {
    id: 'start',
    title: 'Start with existing product information',
    description:
      'Use a supplier catalogue as a starting point instead of manually recreating every product listing.',
  },
  {
    id: 'price',
    title: 'Set your own prices',
    description:
      "Apply your own selling prices to the products you choose, subject to the supplier's applicable terms.",
  },
  {
    id: 'mix',
    title: 'Build across suppliers',
    description:
      'Fork relevant catalogues from multiple suppliers to develop a product mix that fits your business.',
  },
]

export const comparisonColumns: ComparisonColumn[] = [
  {
    id: 'supplier',
    label: 'Supplier catalogue',
    caption: 'The source',
    rows: [
      'Source product information',
      'Wholesale pricing',
      'Product variants and images',
      'Catalogue identity',
    ],
  },
  {
    id: 'seller',
    label: 'Seller catalogue',
    caption: 'Your working version',
    rows: [
      'Selected products',
      'Seller-specific pricing',
      'Your own commercial approach',
      'A separate catalogue based on the source',
    ],
  },
]
