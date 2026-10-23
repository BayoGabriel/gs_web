import { Section } from '../../../components/layout/Section'
import { StickyStory } from '../../../components/ui/StickyStory'
import { howItWorks } from '../../../content/home'

export function HowItWorks() {
  return (
    <Section tone="surface" id="how-it-works">
      <p className="overline text-muted">{howItWorks.eyebrow}</p>
      <h2 className="display-lg mt-4 max-w-[16ch]">
        <strong>{howItWorks.headlineBold}</strong>{' '}
        <span className="light">{howItWorks.headlineLight}</span>
      </h2>
      <div className="mt-16">
        <StickyStory steps={howItWorks.steps} />
      </div>
    </Section>
  )
}
