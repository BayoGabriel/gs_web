import { Section, SectionHeading } from '../../../components/layout/Section'
import { StatNumber } from '../../../components/ui/StatNumber'
import { TestimonialCard } from '../../../components/ui/TestimonialCard'
import { proofStats, testimonials } from '../../../content/placeholders'

export function ProofSection() {
  return (
    <Section>
      <div data-placeholder>
        <SectionHeading
          display
          title={
            <>
              <strong>Distribution,</strong>{' '}
              <span className="light">by the numbers.</span>
            </>
          }
        />
        <div className="mt-14 grid grid-cols-2 gap-8 lg:grid-cols-4">
          {proofStats.map((stat) => (
            <StatNumber key={stat.id} value={stat.value} label={stat.label} />
          ))}
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {testimonials.map((t) => (
            <TestimonialCard
              key={t.id}
              quote={t.quote}
              name={t.name}
              role={t.role}
              portrait={t.portrait}
              placeholder={t.placeholder}
            />
          ))}
        </div>
        <p className="caption mt-6 text-subtle">
          Placeholder metrics and stories — published once verified.
        </p>
      </div>
    </Section>
  )
}
