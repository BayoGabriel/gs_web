import { DetailSection } from '../components/layout/DetailSection'
import { InlineCta } from '../components/layout/InlineCta'
import { PageFaq } from '../components/layout/PageFaq'
import { PageHero } from '../components/layout/PageHero'
import { Section, SectionHeading } from '../components/layout/Section'
import { Photo } from '../components/ui/Photo'
import { UseCaseCard } from '../components/ui/UseCaseCard'
import { sellersPage } from '../content/solutions'
import { categories, useCases } from '../content/home'
import { useDocumentMeta } from '../hooks/useDocumentMeta'

const getPaid = {
  id: 'paid', title: 'Get paid on every sale',
  body: 'Your earnings land in your wallet the moment a customer pays. Withdraw to your bank whenever you\u2019re ready.',
}

export default function SellersPage() {
  useDocumentMeta('For sellers', 'Open a store from catalogues you pick, set your prices and let GitShop handle the rest.')
  return (
    <>
      <PageHero
        eyebrow="For sellers"
        title={<><strong>{sellersPage.headlineBold}</strong> <span className="light">{sellersPage.headlineLight}</span></>}
        description={sellersPage.sub}
      />
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Photo slot="hero-seller" className="mx-auto max-w-md" />
          <ol className="space-y-8">
            {sellersPage.startSteps.map((step, i) => (
              <li key={step.id} className="flex gap-4">
                <span aria-hidden="true" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary font-mono text-sm font-semibold text-on-primary">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-base font-semibold">{step.title}</h3>
                  <p className="measure mt-1.5 text-sm leading-relaxed text-muted">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Section>
      <Section tone="surface">
        <SectionHeading title="Choose what to sell." description="Browse public catalogues across every category and fork the ones your customers want." />
        <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {categories.filter((c) => c.image).map((category) => (
            <li key={category.label}>
              <Photo slot={category.image!} className="w-full" />
              <p className="mt-2.5 text-sm font-semibold">{category.label}</p>
            </li>
          ))}
        </ul>
      </Section>
      <DetailSection {...getPaid} image="seller-section" />
      <Section tone="surface">
        <SectionHeading title="Who sells on GitShop." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.slice(0, 3).map((item) => (
            <UseCaseCard key={item.id} title={item.title} body={item.body} image={item.image} to="/use-cases" />
          ))}
        </div>
      </Section>
      <PageFaq items={sellersPage.faq} />
      <InlineCta title="Open your store." sub="Pick a catalogue, set your prices, share your link — in minutes." />
    </>
  )
}
