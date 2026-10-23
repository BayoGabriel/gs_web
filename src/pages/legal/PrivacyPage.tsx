import { PageHero } from '../../components/layout/PageHero'
import { Section } from '../../components/layout/Section'
import { useDocumentMeta } from '../../hooks/useDocumentMeta'

const sections = [
  { id: 'collect', title: 'What we collect', body: 'Account details (name, email, phone, country), the catalogues you publish or fork, orders, and payment records needed to move money. This site itself does not set tracking cookies or third-party analytics.' },
  { id: 'use', title: 'How we use it', body: 'To run the service: routing orders to wholesalers, splitting payments between wholesale amounts and reseller markups, processing collections and payouts, and preventing fraud.' },
  { id: 'share', title: 'Who sees it', body: 'Wholesalers see the orders they must fulfil. Customers see who made and who resold each product. We do not sell personal data.' },
  { id: 'rights', title: 'Your choices', body: 'You can request a copy, correction or deletion of your account data by contacting us. Deleting an account may be limited where money records must be kept by law.' },
]

export default function PrivacyPage() {
  useDocumentMeta('Privacy policy', 'How GitShop collects, uses and protects personal data.')
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy policy"
        description="Draft pending legal review. Written to be read: short sections, plain language."
      />
      <Section>
        <div className="max-w-2xl space-y-10">
          {sections.map((s) => (
            <div key={s.id}>
              <h2 className="h3">{s.title}</h2>
              <p className="measure mt-3 leading-relaxed text-muted">{s.body}</p>
            </div>
          ))}
          <p className="caption text-subtle">
            Questions: <a className="underline" href="mailto:hello@gitshop.co">hello@gitshop.co</a>
          </p>
        </div>
      </Section>
    </>
  )
}
