import { Section, SectionHeading } from '../../../components/layout/Section'
import { calculator } from '../../../content/home'
import { MarkupCalculator } from './MarkupCalculator'

export function CalculatorSection() {
  return (
    <Section tone="surface">
      <div className="grid items-start gap-12 lg:grid-cols-2">
        <SectionHeading
          display
          eyebrow={calculator.eyebrow}
          title={
            <>
              <span className="light">{calculator.headlineLight}</span>{' '}
              <strong>{calculator.headlineBold}</strong>{' '}
              <span className="light">{calculator.headlineTail}</span>
            </>
          }
          description={calculator.body}
        />
        <MarkupCalculator />
      </div>
    </Section>
  )
}
