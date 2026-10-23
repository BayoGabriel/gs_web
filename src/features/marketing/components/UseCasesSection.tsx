import { Section, SectionHeading } from '../../../components/layout/Section'
import { UseCaseCard } from '../../../components/ui/UseCaseCard'
import { useCases } from '../../../content/home'

export function UseCasesSection() {
  return (
    <Section>
      <SectionHeading
        display
        eyebrow="Who sells on GitShop"
        title={
          <>
            Built for anyone who can{' '}
            <strong>sell,</strong>{' '}
            <span className="light">with or without stock.</span>
          </>
        }
      />
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {useCases.map((item) => (
          <UseCaseCard
            key={item.id}
            title={item.title}
            body={item.body}
            image={item.image}
            to="/use-cases"
          />
        ))}
      </div>
    </Section>
  )
}
