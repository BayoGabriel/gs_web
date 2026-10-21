import { Container } from '../../../components/ui/Container'
import { SectionHeading } from '../../../components/ui/SectionHeading'
import { problems } from '../content/landingContent'

export function ProblemSection() {
  return (
    <section aria-labelledby="problem-heading" className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          title="Good products shouldn't need to be listed from scratch every time."
          description="Product information gets shared across chats, spreadsheets and separate listings. Suppliers repeat the same work, while sellers spend time collecting details and recreating catalogues before they can focus on selling."
        />
        <ol className="mt-12 border-b border-border">
          {problems.map((problem, index) => (
            <li
              key={problem.id}
              className="grid gap-2 border-t border-border py-7 sm:grid-cols-[4rem_minmax(0,18rem)_1fr] sm:gap-8 sm:py-8"
            >
              <span className="font-mono text-sm font-medium text-clay-deep">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="text-lg font-bold text-ink">{problem.title}</h3>
              <p className="max-w-xl leading-relaxed text-muted">
                {problem.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
