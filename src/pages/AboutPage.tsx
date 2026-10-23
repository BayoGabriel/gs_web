import { DetailSection } from '../components/layout/DetailSection'
import { InlineCta } from '../components/layout/InlineCta'
import { PageHero } from '../components/layout/PageHero'
import { Section, SectionHeading } from '../components/layout/Section'
import { Photo } from '../components/ui/Photo'
import { about } from '../content/about'
import { useDocumentMeta } from '../hooks/useDocumentMeta'

export default function AboutPage() {
  useDocumentMeta('About', 'GitShop is the distribution layer for commerce — one catalogue, many storefronts, everyone paid.')
  return (
    <>
      <PageHero
        eyebrow="About"
        title={<><span className="light">{about.headlineLight}</span> <strong>{about.headlineBold}</strong></>}
        description={about.sub}
      />
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Why we exist" title="A catalogue should be forked, not forwarded." />
            <p className="body-lg measure mt-4 text-muted" data-placeholder>{about.story}</p>
          </div>
          <Photo slot="about-wide" className="w-full" />
        </div>
      </Section>
      <Section tone="surface">
        <SectionHeading title="What we believe." />
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {about.beliefs.map((belief) => (
            <div key={belief.id} className="border-t-2 border-text pt-5">
              <h3 className="text-base font-semibold">{belief.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{belief.body}</p>
            </div>
          ))}
        </div>
      </Section>
      <DetailSection
        id="in-one-picture"
        eyebrow="In one picture"
        title="One repo becomes every store."
        body="A wholesaler publishes a repo. Sellers fork it into branded storefronts. Customers shop under each seller's name. GitShop moves the order and the money between all of them."
      />
      <Section>
        <SectionHeading title="The team." description="Placeholder portraits — replace with the real team." />
        <ul className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {(['portrait-01', 'portrait-02', 'portrait-03', 'portrait-04'] as const).map((slot, i) => (
            <li key={slot} data-placeholder>
              <Photo slot={slot} />
              <p className="mt-3 text-sm font-semibold">Team member {i + 1}</p>
              <p className="caption text-subtle">Role</p>
            </li>
          ))}
        </ul>
      </Section>
      <InlineCta title="Come build with us." sub="Questions, ideas or partnerships — talk to a person." />
    </>
  )
}
