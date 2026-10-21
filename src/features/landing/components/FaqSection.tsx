import { Container } from '../../../components/ui/Container'
import { SectionHeading } from '../../../components/ui/SectionHeading'
import { faqItems } from '../content/faqItems'
import { useFaq } from '../hooks/useFaq'
import { FaqItem } from './FaqItem'

export function FaqSection() {
  const { isOpen, toggle } = useFaq()

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="border-y border-border bg-surface py-16 sm:py-24"
    >
      <Container className="grid gap-10 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-16">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions, answered plainly."
          description="Honest answers about what GitShop is designed to do — and what it is not."
        />
        <div>
          {faqItems.map((item) => (
            <FaqItem
              key={item.id}
              item={item}
              open={isOpen(item.id)}
              onToggle={() => toggle(item.id)}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
