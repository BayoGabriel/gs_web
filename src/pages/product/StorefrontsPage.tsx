import { DetailSection } from '../../components/layout/DetailSection'
import { InlineCta } from '../../components/layout/InlineCta'
import { PageFaq } from '../../components/layout/PageFaq'
import { PageHero } from '../../components/layout/PageHero'
import { DeviceFrame } from '../../components/ui/DeviceFrame'
import { storefronts } from '../../content/product'
import { OrderTrackingMockup } from '../../features/storefront/OrderTrackingMockup'
import { StoreMockup } from '../../features/storefront/StoreMockup'
import { useDocumentMeta } from '../../hooks/useDocumentMeta'

const [customise, experience, share, policies] = storefronts.sections

export default function StorefrontsPage() {
  useDocumentMeta('Storefronts', 'Every fork becomes a storefront under your name, your logo and your link.')
  return (
    <>
      <PageHero
        eyebrow="Product · Storefronts"
        title={<><strong>{storefronts.headlineBold}</strong> <span className="light">{storefronts.headlineLight}</span></>}
        description={storefronts.sub}
      />
      <section className="bg-bg pb-14 sm:pb-20">
        <div className="mx-auto grid w-full max-w-[var(--container)] items-start gap-8 px-4 sm:px-6 lg:grid-cols-[3fr_2fr] lg:px-8">
          <DeviceFrame url="amara.gitshop.app"><StoreMockup /></DeviceFrame>
          <DeviceFrame kind="phone" className="mx-auto w-full max-w-xs"><OrderTrackingMockup /></DeviceFrame>
        </div>
      </section>
      <DetailSection {...customise} tone="surface" image="storefront-1" />
      <DetailSection {...experience} imageFirst image="step-3" />
      <DetailSection {...share} tone="surface" image="usecase-social" />
      <DetailSection {...policies} imageFirst media={
        <div className="stack max-w-md p-6">
          <p className="font-semibold">Store settings</p>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            <li>Business name · Amara Market</li>
            <li>Support contact · hello@amara.example</li>
            <li>Returns policy · Free returns within 14 days</li>
          </ul>
        </div>
      } />
      <PageFaq items={[
        { id: 'link', q: 'What does my store link look like?', a: 'A short link on GitShop, like yourname.gitshop.app. Share it anywhere.' },
        { id: 'brand', q: 'Is it really my brand?', a: 'Yes. Customers shop and check out under your name, logo and policies.' },
        { id: 'custom', q: 'Can I use my own domain?', a: 'Custom domains are not available yet. Your GitShop link works everywhere today.' },
      ]} />
      <InlineCta title="Your store is waiting." sub="Fork a catalogue and your storefront is ready to share." />
    </>
  )
}
