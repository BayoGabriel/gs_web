import { Link } from 'react-router'
import { PageHero } from '../../components/layout/PageHero'
import { InlineCta } from '../../components/layout/InlineCta'
import { Section, SectionHeading } from '../../components/layout/Section'
import { ArticleCard } from '../../components/ui/ArticleCard'
import { articles, guidesIndex } from '../../content/resources'
import { useDocumentMeta } from '../../hooks/useDocumentMeta'

export default function GuidesPage() {
  useDocumentMeta('Guides', 'Step-by-step walkthroughs for sellers and wholesalers.')
  const guides = articles.filter((a) => a.category === 'Guides')
  return (
    <>
      <PageHero eyebrow="Resources · Guides" title="Guides for **sellers and publishers.**" description="Every walkthrough assumes you start with a catalogue or a fork — nothing else required." />
      <Section>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {guidesIndex.map((item) => (
            <Link key={item.title} to={item.to} className="group stack block p-6">
              <h2 className="text-base font-semibold">{item.title}</h2>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.body}</p>
            </Link>
          ))}
        </div>
      </Section>
      <Section tone="surface">
        <SectionHeading title="Latest guides." description="Placeholder articles — content is planned, not yet published." />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((item) => <ArticleCard key={item.id} {...item} />)}
        </div>
      </Section>
      <InlineCta title="Can't find the guide?" sub="Check the docs or send us a message." />
    </>
  )
}
