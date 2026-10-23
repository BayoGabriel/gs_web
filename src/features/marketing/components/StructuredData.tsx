import { homeFaq } from '../../../content/faq'

const organization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'GitShop',
  url: 'https://gitshop.app',
  description:
    'The distribution layer for commerce. Wholesalers publish repos; sellers fork them into storefronts; GitShop handles orders, payments and payouts.',
}

const faqPage = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: homeFaq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
}

/** Organization + FAQPage JSON-LD for the home page. */
export function StructuredData() {
  return (
    <>
      <script type="application/ld+json">{JSON.stringify(organization)}</script>
      <script type="application/ld+json">{JSON.stringify(faqPage)}</script>
    </>
  )
}
