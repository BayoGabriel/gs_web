import { PageHero } from '../components/layout/PageHero'
import { Section, SectionHeading } from '../components/layout/Section'
import { Photo } from '../components/ui/Photo'
import { ContactForm } from '../features/contact/ContactForm'
import { useDocumentMeta } from '../hooks/useDocumentMeta'

export default function ContactPage() {
  useDocumentMeta('Contact', 'Contact the GitShop team about publishing, selling or partnerships.')
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to a person."
        description="Questions about publishing a catalogue, selling, pricing or partnerships — write and we reply."
      />
      <Section>
        <div className="grid items-start gap-12 lg:grid-cols-[2fr_3fr]">
          <div>
            <Photo slot="about-wide" className="w-full" />
            <div className="mt-8" />
            <SectionHeading
              title="What to expect."
              description="A human reads every message. If you are writing about money, include the order or transaction reference so we can find it quickly."
            />
          </div>
          <ContactForm />
        </div>
      </Section>
    </>
  )
}
