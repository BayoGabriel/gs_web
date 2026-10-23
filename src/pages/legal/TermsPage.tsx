import { PageHero } from '../../components/layout/PageHero'
import { Section } from '../../components/layout/Section'
import { useDocumentMeta } from '../../hooks/useDocumentMeta'

const sections = [
  { id: 'service', title: 'The service', body: 'GitShop lets wholesalers publish product catalogues ("repos"), lets resellers fork them with a markup into storefronts, collects customer payments, and distributes the wholesale amount and markup to the right wallets.' },
  { id: 'roles', title: 'Your responsibilities', body: 'Wholesalers are responsible for fulfilling orders they receive and for the accuracy of their catalogues. Resellers are responsible for the markups they set and the claims they make on their storefronts.' },
  { id: 'money', title: 'Wallets, collections and payouts', body: 'Balances are held on GitShop until you request a payout. Payouts show the amount, fee and destination before you confirm, and remain pending until the transfer completes.' },
  { id: 'limits', title: 'Fair use', body: 'No counterfeit goods, no pricing that misleads customers, and no use that breaks payment or trade rules in the markets we serve. We can suspend accounts that violate this.' },
]

export default function TermsPage() {
  useDocumentMeta('Terms of service', 'The rules for using GitShop: repos, forks, storefronts, wallets and payouts.')
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of service"
        description="Draft pending legal review. These terms describe how the service is designed to work."
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
