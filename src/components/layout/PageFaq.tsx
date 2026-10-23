import { Accordion } from '../ui/Accordion'
import { Section, SectionHeading } from './Section'

export function PageFaq({ items }: { items: { id: string; q: string; a: string }[] }) {
  return (
    <Section tone="surface">
      <SectionHeading eyebrow="FAQ" title="Questions, answered." />
      <div className="mt-10 max-w-3xl">
        <Accordion
          ariaLabel="Page questions"
          items={items.map((item) => ({ id: item.id, title: item.q, content: item.a }))}
        />
      </div>
    </Section>
  )
}
