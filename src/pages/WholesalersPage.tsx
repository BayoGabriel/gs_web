import { Link } from 'react-router'
import { InlineCta } from '../components/layout/InlineCta'
import { PageFaq } from '../components/layout/PageFaq'
import { PageHero } from '../components/layout/PageHero'
import { Section, SectionHeading } from '../components/layout/Section'
import { Photo } from '../components/ui/Photo'
import { SoonBadge } from '../components/ui/SoonBadge'
import { buttonClasses } from '../components/ui/buttonClasses'
import { wholesalersPage } from '../content/solutions'
import { secondaryCta } from '../content/nav'
import { useDocumentMeta } from '../hooks/useDocumentMeta'

export default function WholesalersPage() {
  useDocumentMeta('For wholesalers and brands', 'Publish your catalogue once. Let sellers do the selling. Receive paid, ready-to-ship orders.')
  return (
    <>
      <PageHero
        eyebrow="For wholesalers and brands"
        title={<><strong>{wholesalersPage.headlineBold}</strong> <span className="light">{wholesalersPage.headlineLight}</span></>}
        description={wholesalersPage.sub}
      >
        <Link to={secondaryCta.to} className={buttonClasses({ size: 'lg' })}>{secondaryCta.label}</Link>
      </PageHero>
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="grid gap-6 sm:grid-cols-2">
            {wholesalersPage.points.map((point) => (
              <div key={point.id}>
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-semibold">{point.title}</h3>
                  {point.soon ? <SoonBadge /> : null}
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{point.body}</p>
              </div>
            ))}
          </div>
          <Photo slot="wholesaler-section" className="mx-auto max-w-md" />
        </div>
      </Section>
      <Section tone="surface">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Photo slot="step-1" className="mx-auto max-w-md" />
          <SectionHeading
            eyebrow="Repo management"
            title="One catalogue. Every store stays current."
            description="Your repo is the single source sellers fork from. See the flagship page for pricing rules, access controls and change tracking."
          />
        </div>
        <Link to="/product/repo-management" className="mt-8 inline-flex font-semibold underline underline-offset-4 hover:text-muted">
          Explore repo management →
        </Link>
      </Section>
      <PageFaq items={[
        { id: 'what', q: 'What is a repo?', a: 'Your managed catalogue: products, prices, stock and the rules for selling them.' },
        { id: 'who', q: 'Who sells my products?', a: 'Sellers who fork your repo — public today, invite-only and approval controls coming soon.' },
        { id: 'ship', q: 'Who ships?', a: 'You do. Orders arrive paid and complete, ready to fulfil.' },
        { id: 'paid', q: 'When do I get paid?', a: 'Your share lands in your wallet when the customer pays. Payout to your bank when you choose.' },
      ]} />
      <InlineCta title="Publish once. Sell everywhere." sub="Your catalogue deserves more reach than a price list in a chat." />
    </>
  )
}
