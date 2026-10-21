import { Container } from '../../../components/ui/Container'
import { SectionHeading } from '../../../components/ui/SectionHeading'
import { cn } from '../../../lib/cn'
import { comparisonColumns } from '../content/landingContent'

const columnStyles = [
  'border-border bg-surface',
  'border-forest/40 bg-pale/50',
]

export function IndependenceSection() {
  return (
    <section
      aria-labelledby="independence-heading"
      className="py-16 sm:py-24"
    >
      <Container>
        <SectionHeading
          title="Shared product foundations. Independent selling decisions."
          description="A supplier's catalogue gives sellers a starting point. Each seller can choose relevant products and set their own selling prices, helping them shape an offer that fits their business."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:gap-8">
          {comparisonColumns.map((column, index) => (
            <div
              key={column.id}
              className={cn(
                'rounded-2xl border p-6 sm:p-7',
                columnStyles[index],
              )}
            >
              <p className="font-mono text-[11px] tracking-[0.14em] text-muted uppercase">
                {column.caption}
              </p>
              <h3 className="mt-1.5 text-lg font-bold text-ink">
                {column.label}
              </h3>
              <ul className="mt-5 divide-y divide-border/70 border-t border-border">
                {column.rows.map((row) => (
                  <li
                    key={row}
                    className="py-3 text-[15px] leading-relaxed text-ink/85"
                  >
                    {row}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-6 font-mono text-[11px] tracking-wide text-muted">
          A conceptual view of the intended workflow
        </p>
      </Container>
    </section>
  )
}
