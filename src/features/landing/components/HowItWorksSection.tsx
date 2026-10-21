import { Container } from '../../../components/ui/Container'
import { SectionHeading } from '../../../components/ui/SectionHeading'
import { howItWorksSteps } from '../content/landingContent'
import { StepForkFigure } from './visual/StepForkFigure'
import { StepPriceFigure } from './visual/StepPriceFigure'
import { StepPublishFigure } from './visual/StepPublishFigure'

const figures: Record<string, () => React.JSX.Element> = {
  publish: StepPublishFigure,
  fork: StepForkFigure,
  sell: StepPriceFigure,
}

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="border-y border-border bg-surface py-16 sm:py-24"
    >
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="From supplier catalogue to your own selling operation."
          description="One structured catalogue can become the starting point for multiple independent sellers."
        />
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
          Think of a fork as your own copy of a supplier's catalogue that you
          can adapt for your business.
        </p>
        <ol className="mt-12 grid gap-5 lg:grid-cols-3 lg:gap-8">
          {howItWorksSteps.map((step) => {
            const Figure = figures[step.id]
            return (
              <li
                key={step.id}
                className="flex flex-col rounded-2xl border border-border bg-paper p-5"
              >
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-sm font-medium text-clay-deep">
                    {step.index}
                  </span>
                </div>
                <h3 className="mt-2 text-xl font-bold text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 flex-1 text-[15px] leading-relaxed text-muted">
                  {step.description}
                </p>
                <div className="mt-5">{Figure ? <Figure /> : null}</div>
              </li>
            )
          })}
        </ol>
      </Container>
    </section>
  )
}
