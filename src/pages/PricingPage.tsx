import { Check } from 'lucide-react'
import { DetailSection } from '../components/layout/DetailSection'
import { InlineCta } from '../components/layout/InlineCta'
import { PageFaq } from '../components/layout/PageFaq'
import { PageHero } from '../components/layout/PageHero'
import { Section, SectionHeading } from '../components/layout/Section'
import { pricing } from '../content/pricing'
import { MarkupCalculator } from '../features/marketing/components/MarkupCalculator'
import { useDocumentMeta } from '../hooks/useDocumentMeta'

export default function PricingPage() {
  useDocumentMeta('Pricing', 'Simple, transparent pricing — the full breakdown before you publish and before you pay.')
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title={
          <>
            <span className="light">{pricing.headlineLight}</span>{' '}
            <strong>{pricing.headlineBold}</strong>{' '}
            <span className="light">{pricing.headlineTail}</span>
          </>
        }
        description={pricing.sub}
      />
      <Section>
        <SectionHeading title="How fees work." />
        <ul className="mt-10 grid gap-5 sm:grid-cols-3">
          {pricing.howFeesWork.map((item) => (
            <li key={item.id} className="rounded-xl border border-border bg-raised p-6" data-placeholder={item.placeholder || undefined}>
              <h3 className="text-base font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
            </li>
          ))}
        </ul>
      </Section>
      <Section tone="surface">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <SectionHeading
            eyebrow="Worked example"
            title="One sale, fully split."
            description="Seller-side maths. Illustrative numbers only — final fees are shown before you commit."
          />
          <MarkupCalculator />
        </div>
      </Section>
      <Section>
        <SectionHeading title="Who pays what." />
        <ul className="mt-10 grid gap-5 sm:grid-cols-3">
          {pricing.whoPays.map((row) => (
            <li key={row.party} className="border-l-2 border-text pl-5">
              <h3 className="text-base font-semibold">{row.party}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{row.pays}</p>
            </li>
          ))}
        </ul>
      </Section>
      <Section tone="surface">
        <SectionHeading title="Included on every plan." />
        <ul className="mt-10 grid gap-3 sm:grid-cols-2">
          {pricing.included.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm">
              <Check className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </Section>
      <DetailSection id="scale" title="Fees that scale with sales" body="No shelf fees and no per-seat pricing — the cost is tied to orders that actually happen." image="wholesaler-section" />
      <PageFaq items={pricing.faq} />
      <InlineCta title="Know the numbers before you sell." sub="Every split is shown before anything is published or paid." />
    </>
  )
}
