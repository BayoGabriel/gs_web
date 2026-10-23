import { Section, SectionHeading } from '../../../components/layout/Section'
import { Accordion } from '../../../components/ui/Accordion'
import { homeFaq } from '../../../content/faq'

export function FaqSection() {
  return (
    <Section tone="surface" id="faq">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,22rem)_1fr]">
        <SectionHeading
          display
          eyebrow="FAQ"
          title={
            <>
              <strong>Straight</strong>{' '}
              <span className="light">answers.</span>
            </>
          }
          description="How repos, storefronts and payouts actually work."
        />
        <Accordion
          ariaLabel="Frequently asked questions"
          items={homeFaq.map((item) => ({
            id: item.id,
            title: item.question,
            content: item.answer,
          }))}
        />
      </div>
    </Section>
  )
}
