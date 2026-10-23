import { DetailSection } from '../../components/layout/DetailSection'
import { InlineCta } from '../../components/layout/InlineCta'
import { PageFaq } from '../../components/layout/PageFaq'
import { PageHero } from '../../components/layout/PageHero'
import { OrderTimeline } from '../../components/patterns/OrderTimeline'
import { DeviceFrame } from '../../components/ui/DeviceFrame'
import { orderRouting } from '../../content/product'
import { OrderTrackingMockup } from '../../features/storefront/OrderTrackingMockup'
import { useDocumentMeta } from '../../hooks/useDocumentMeta'

const [journey, supplierView, , customerView, status, refunds] = orderRouting.sections

export default function OrderRoutingPage() {
  useDocumentMeta('Order routing', 'The customer pays. The supplier gets a paid, complete order. You do nothing.')
  return (
    <>
      <PageHero
        eyebrow="Product · Order routing"
        title={<><strong>{orderRouting.headlineBold}</strong> <span className="light">{orderRouting.headlineLight}</span></>}
        description={orderRouting.sub}
      />
      <DetailSection {...journey} media={
        <div className="stack max-w-md p-6">
          <OrderTimeline
            steps={[
              { id: 'a', label: 'Placed', actor: 'Customer', timestamp: 'Mar 12', state: 'completed' },
              { id: 'b', label: 'Paid', actor: 'GitShop', timestamp: 'Mar 12', state: 'completed' },
              { id: 'c', label: 'Sent to supplier', actor: 'System', timestamp: 'Mar 12', state: 'completed' },
              { id: 'd', label: 'Shipped', actor: 'Supplier', timestamp: 'Mar 13', state: 'current' },
              { id: 'e', label: 'Delivered', actor: 'Carrier', state: 'upcoming' },
            ]}
          />
        </div>
      } />
      <DetailSection {...supplierView} tone="surface" imageFirst image="wholesaler-section" />
      {/* <DetailSection {...sellerView} image="seller-section" /> */}
      <DetailSection {...customerView} tone="surface" imageFirst media={
        <DeviceFrame kind="phone" className="mx-auto w-full max-w-xs"><OrderTrackingMockup /></DeviceFrame>
      } />
      <DetailSection {...status} />
      <DetailSection {...refunds} tone="surface" image="step-1" />
      <PageFaq items={[
        { id: 'seller-do', q: 'What does the seller do after a sale?', a: 'Nothing. The order arrives at the supplier paid and complete; the seller\u2019s earnings land in their wallet.' },
        { id: 'address', q: 'How does the supplier get the address?', a: 'It arrives on the order itself, ready to fulfil.' },
        { id: 'tracking', q: 'Can customers track their order?', a: 'Yes — on the seller\u2019s storefront, under the seller\u2019s name.' },
      ]} />
      <InlineCta />
    </>
  )
}
