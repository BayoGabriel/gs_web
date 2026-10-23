import { DetailSection } from '../../components/layout/DetailSection'
import { InlineCta } from '../../components/layout/InlineCta'
import { PageFaq } from '../../components/layout/PageFaq'
import { PageHero } from '../../components/layout/PageHero'
import { Card } from '../../components/ui/Card'
import { RepoCard } from '../../components/patterns/RepoCard'
import { MarkupEditor } from '../../components/patterns/MarkupEditor'
import { forking } from '../../content/product'
import { useDocumentMeta } from '../../hooks/useDocumentMeta'

const [browse, oneStep, prices, several, updates] = forking.sections

export default function ForkingPage() {
  useDocumentMeta('Forking and pricing', 'Choose a repo, set your prices and start selling in minutes.')
  return (
    <>
      <PageHero
        eyebrow="Product · Forking and pricing"
        title={<><strong>{forking.headlineBold}</strong> <span className="light">{forking.headlineLight}</span></>}
        description={forking.sub}
      />
      <DetailSection {...browse} tone="surface" media={
        <div className="grid max-w-md gap-4 sm:grid-cols-2">
          <RepoCard repo={{ id: 'a', title: 'Sneakers 2026', wholesaler: 'Swift Footwear', items: 24, avgWholesale: 4000, forkCount: 12 }} />
          <RepoCard repo={{ id: 'b', title: 'Denim staples', wholesaler: 'Kano Textiles', items: 18, avgWholesale: 2600, forkCount: 4 }} />
        </div>
      } />
      <DetailSection {...oneStep} imageFirst image="step-2" />
      <DetailSection {...prices} tone="surface" media={
        <Card className="max-w-md"><MarkupEditor wholesale={4000} minMarkup={500} maxMarkup={20000} /></Card>
      } />
      <DetailSection {...several} imageFirst image="usecase-dropship" />
      <DetailSection {...updates} tone="surface" image="step-4" />
      <PageFaq items={[
        { id: 'how', q: 'How do I fork a repo?', a: 'Browse public repos, open one, and fork it. Your copy lands in your store.' },
        { id: 'price', q: 'How do I set prices?', a: 'Add your margin per product or apply one rule to the whole fork.' },
        { id: 'limit', q: 'Is there a limit?', a: 'Fork as many repos as you like and sell them all from one store.' },
      ]} />
      <InlineCta title="Fork your first repo." sub="Pick a catalogue, set your prices, share your link." />
    </>
  )
}
