import { Link } from 'react-router'
import { PageHero } from '../components/layout/PageHero'
import { InlineCta } from '../components/layout/InlineCta'
import { Section, SectionHeading } from '../components/layout/Section'
import { productHub } from '../content/product'
import { ProductTour } from '../features/marketing/components/ProductTour'
import { useDocumentMeta } from '../hooks/useDocumentMeta'

export default function ProductPage() {
  useDocumentMeta('Product', 'Repos, forks, storefronts, wallets and routed orders — the five pieces of GitShop.')
  return (
    <>
      <PageHero
        eyebrow="Product"
        title={
          <>
            <strong>{productHub.headlineBold},</strong>{' '}
            <span className="light">{productHub.headlineLight}</span>
          </>
        }
        description={productHub.sub}
      />
      <Section>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {productHub.entries.map((entry) => (
            <Link key={entry.to} to={entry.to} className="group block">
              <div className="stack h-full p-6 transition-transform duration-base ease-standard group-hover:-translate-y-1 motion-reduce:group-hover:translate-y-0">
                <h3 className="h4">{entry.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{entry.description}</p>
                <p className="caption mt-4 font-semibold">Explore →</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>
      <Section tone="surface">
        <SectionHeading
          title="Take the tour."
          description="The product in three surfaces — built from the same components the app uses."
        />
        <div className="mt-12">
          <ProductTour />
        </div>
      </Section>
      <Section>
        <SectionHeading
          title="Six words, plain meanings."
          description="The vocabulary every page on this site uses."
        />
        <dl className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ['Repo', 'A wholesaler\u2019s managed product catalogue — products, prices, stock and rules.'],
            ['Fork', 'A seller\u2019s copy of a repo, with their own prices and storefront.'],
            ['Storefront', 'The public store a seller shares. Customers buy there.'],
            ['Wallet', 'Your balance on GitShop. Collections come in; payouts go out to a bank.'],
            ['Collection', 'A customer payment received by GitShop for an order.'],
            ['Payout', 'Money moved from your wallet to your bank account.'],
          ].map(([term, def]) => (
            <div key={term}>
              <dt className="h4">{term}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted">{def}</dd>
            </div>
          ))}
        </dl>
      </Section>
      <InlineCta />
    </>
  )
}
