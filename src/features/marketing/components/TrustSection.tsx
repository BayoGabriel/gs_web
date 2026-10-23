import { Link } from 'react-router'
import { Section, SectionHeading } from '../../../components/layout/Section'
import { trust } from '../../../content/home'

export function TrustSection() {
  return (
    <Section>
      <SectionHeading
        display
        title={
          <>
            <span className="light">{trust.headlineLight}</span>{' '}
            <strong>{trust.headlineBold}</strong>
          </>
        }
      />
      <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {trust.tiles.map((tile) => (
          <li
            key={tile.id}
            className="rounded-xl border border-border bg-raised p-6 text-sm font-semibold leading-relaxed"
          >
            {tile.title}
          </li>
        ))}
      </ul>
      <Link
        to={trust.link.to}
        className="mt-8 inline-flex items-center gap-2 font-semibold underline underline-offset-4 hover:text-muted"
      >
        {trust.link.label} →
      </Link>
    </Section>
  )
}
