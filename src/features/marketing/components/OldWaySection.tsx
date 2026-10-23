import { Section } from '../../../components/layout/Section'
import { WordReveal } from '../../../components/ui/WordReveal'
import { oldWay } from '../../../content/home'

export function OldWaySection() {
  return (
    <Section tone="surface">
      <p className="overline text-muted">{oldWay.eyebrow}</p>
      <h2 className="display-lg mt-4 max-w-[18ch]">
        <strong>{oldWay.headlineBold}</strong>{' '}
        <span className="light">{oldWay.headlineLight}</span>
      </h2>
      <p className="body-lg measure mt-6 text-muted">{oldWay.body}</p>
      <ul className="mt-12 grid gap-5 sm:grid-cols-3">
        {oldWay.cards.map((card) => (
          <li
            key={card.id}
            className="rounded-xl border border-border-strong/50 bg-raised p-6 text-sm font-semibold leading-relaxed"
          >
            {card.text}
          </li>
        ))}
      </ul>
      <p className="mt-14 font-display text-3xl font-bold tracking-tight sm:text-4xl">
        <WordReveal text={oldWay.turnLine} stagger={140} underline />
      </p>
    </Section>
  )
}
