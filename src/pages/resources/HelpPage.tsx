import { PageHero } from '../../components/layout/PageHero'
import { InlineCta } from '../../components/layout/InlineCta'
import { PageFaq } from '../../components/layout/PageFaq'
import { Section } from '../../components/layout/Section'
import { Input } from '../../components/ui/Input'
import { Link } from 'react-router'
import { helpTopics } from '../../content/resources'
import { homeFaq } from '../../content/faq'
import { useDocumentMeta } from '../../hooks/useDocumentMeta'

export default function HelpPage() {
  useDocumentMeta('Help', 'Answers and next steps when something needs a hand.')
  return (
    <>
      <PageHero eyebrow="Resources · Help" title="We’re here **when it matters.**" description="Search the answers below, or reach a human through contact.">
        <Input label="Search" type="search" placeholder="Search help" className="mt-8 max-w-md" />
      </PageHero>
      <Section>
        <div className="grid gap-5 sm:grid-cols-2">
          {helpTopics.map((topic) => (
            <Link key={topic.title} to={topic.to} className="group stack block p-6">
              <h2 className="text-base font-semibold">{topic.title}</h2>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{topic.body}</p>
            </Link>
          ))}
        </div>
      </Section>
      <PageFaq items={homeFaq.slice(0, 6).map((f) => ({ id: f.id, q: f.question, a: f.answer }))} />
      <InlineCta title="Still stuck?" sub="Tell us what happened and what you expected — we read everything." />
    </>
  )
}
