import { homeFaq } from '../../../content/faq'

const organization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'GitShop',
  url: 'https://gitshop.co',
  logo: 'https://gitshop.co/og-image-light.png',
  description:
    'The distribution layer for commerce. Wholesalers publish repos; sellers fork them into storefronts; GitShop handles orders, payments and payouts.',
}

const website = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'GitShop',
  url: 'https://gitshop.co',
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
      <script type="application/ld+json">{JSON.stringify(website)}</script>
      <script type="application/ld+json">{JSON.stringify(faqPage)}</script>
    </>
  )
}
