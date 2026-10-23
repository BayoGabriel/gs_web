import { Link } from 'react-router'
import { PageHero } from '../components/layout/PageHero'
import { Section, SectionHeading } from '../components/layout/Section'
import { Input } from '../components/ui/Input'
import { SoonBadge } from '../components/ui/SoonBadge'
import { guidesIndex } from '../content/resources'
import { useDocumentMeta } from '../hooks/useDocumentMeta'

const extra = [
  { title: 'UI kit', body: 'The design system in code: every component, state and theme.', to: '/ui-kit' },
  { title: 'Concepts', body: 'Repo, fork, storefront, wallet, collection, payout — plain definitions.', to: '/product' },
]

export default function DocsPage() {
  useDocumentMeta('Docs', 'GitShop documentation: repos, forking, storefronts, wallets and payouts.')
  return (
    <>
      <PageHero
        eyebrow="Resources · Docs"
        title="Learn the system."
        description="Guides for wholesaler repos, seller storefronts and the money layer. API documentation will publish here when it is ready."
      >
        <Input label="Search" type="search" placeholder="Search docs" className="mt-8 max-w-md" />
      </PageHero>
      <Section>
        <SectionHeading title="Start reading." />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[...guidesIndex, ...extra].map((doc) => (
            <Link key={doc.title} to={doc.to} className="group stack block p-6">
              <h3 className="text-base font-semibold">{doc.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{doc.body}</p>
            </Link>
          ))}
        </div>
        <div className="mt-8 flex items-start gap-3 rounded-xl border border-dashed border-border-strong bg-surface p-5">
          <SoonBadge />
          <p className="text-sm text-muted">
            <span className="font-semibold text-text">API reference:</span>{' '}
            integrations, webhook events and payout statuses will publish here once confirmed.
          </p>
        </div>
      </Section>
      <Section tone="surface">
        <div className="max-w-2xl">
          <h2 className="h2">Something missing?</h2>
          <p className="body-lg measure mt-4 text-muted">
            Docs grow with confirmed features. If a workflow isn't documented
            yet, <Link to="/contact" className="font-semibold underline underline-offset-4">ask us directly</Link>.
          </p>
        </div>
      </Section>
    </>
  )
}
