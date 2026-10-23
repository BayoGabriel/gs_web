import { Section, SectionHeading } from '../../../components/layout/Section'
import { ComparisonTable } from '../../../components/ui/ComparisonTable'
import { comparison } from '../../../content/home'

export function ComparisonSection() {
  return (
    <Section tone="surface">
      <SectionHeading
        display
        title={
          <>
            <span className="light">{comparison.headlineLight}</span>{' '}
            <strong>{comparison.headlineBold}</strong>
          </>
        }
      />
      <div className="mt-12 max-w-3xl">
        <ComparisonTable rows={comparison.rows} caption="The old way versus GitShop" />
      </div>
    </Section>
  )
}
