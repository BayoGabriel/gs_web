import { PageHero } from '../components/layout/PageHero'
import { InlineCta } from '../components/layout/InlineCta'
import { Section, SectionHeading } from '../components/layout/Section'
import { Card } from '../components/ui/Card'
import { Photo } from '../components/ui/Photo'
import { SoonBadge } from '../components/ui/SoonBadge'
import { security } from '../content/pricing'
import { useDocumentMeta } from '../hooks/useDocumentMeta'

export default function SecurityPage() {
  useDocumentMeta('Security and trust', 'How GitShop handles payments, wallets and accounts — honest states, no invented badges.')
  return (
    <>
      <PageHero
        eyebrow="Security"
        title={<><span className="light">{security.headlineLight}</span> <strong>{security.headlineBold}</strong></>}
        description={security.sub}
      />
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <SectionHeading
            title="Built to be trusted."
            description="Every payment has an order and a reference. Every balance shows pending until it is real. Every payout is reviewed before it leaves."
          />
          <Photo slot="wholesaler-section" className="mx-auto max-w-md" />
        </div>
      </Section>
      <Section tone="surface">
        <SectionHeading title="What we can show you." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {security.sections.map((item) => (
            <Card key={item.id} variant="surface" className="border-border-strong/40">
              <div className="flex items-center gap-2">
                <h3 className="text-base font-semibold">{item.title}</h3>
                {item.soon ? <SoonBadge /> : null}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
            </Card>
          ))}
        </div>
      </Section>
      <Section>
        <div className="max-w-2xl">
          <h2 className="h2">What we will not claim yet.</h2>
          <p className="body-lg measure mt-4 text-muted">
            Certifications, audits and processing partners will be listed here
            only once they exist. Until then, this page describes product
            behaviour — not marketing promises.
          </p>
        </div>
      </Section>
      <InlineCta title="Questions about a specific control?" sub="Write to us — we answer plainly." />
    </>
  )
}
