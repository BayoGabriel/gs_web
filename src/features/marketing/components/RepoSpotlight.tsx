import { Link } from 'react-router'
import { Section, SectionHeading } from '../../../components/layout/Section'
import { BentoGrid, BentoTile } from '../../../components/ui/BentoGrid'
import { repoSpotlight } from '../../../content/home'
import { RepoShowcase } from './RepoShowcase'

/** Flagship home section: repo management, hero-scale bento + interactive demo. */
export function RepoSpotlight() {
  const [lead, ...rest] = repoSpotlight.tiles
  return (
    <Section>
      <SectionHeading
        display
        eyebrow={repoSpotlight.eyebrow}
        title={
          <>
            <strong>{repoSpotlight.headlineBold}</strong>{' '}
            <span className="light">{repoSpotlight.headlineLight}</span>
          </>
        }
        description={repoSpotlight.sub}
      />
      <BentoGrid className="mt-14">
        <BentoTile title={lead.title} body={lead.body} soon={lead.soon} span={2} />
        <div className="stack stack-alive sm:col-span-2 lg:row-span-3">
          <RepoShowcase />
        </div>
        {rest.map((tile) => (
          <BentoTile key={tile.id} title={tile.title} body={tile.body} soon={tile.soon} />
        ))}
      </BentoGrid>
      <Link
        to={repoSpotlight.link.to}
        className="mt-10 inline-flex items-center gap-2 font-semibold underline underline-offset-4 hover:text-muted"
      >
        {repoSpotlight.link.label} →
      </Link>
    </Section>
  )
}
