import { Section, SectionHeading } from '../../../components/layout/Section'
import { DeviceFrame } from '../../../components/ui/DeviceFrame'
import { FeatureChip } from '../../../components/ui/FeatureChip'
import { storefront } from '../../../content/home'
import { OrderTrackingMockup } from '../../storefront/OrderTrackingMockup'
import { StoreMockup } from '../../storefront/StoreMockup'

export function StorefrontsSection() {
  return (
    <Section>
      <SectionHeading
        display
        eyebrow={storefront.eyebrow}
        title={
          <>
            <span className="light">{storefront.headlineLight}</span>{' '}
            <strong>{storefront.headlineBold}</strong>
          </>
        }
        description={storefront.body}
      />
      <div className="mt-14 grid items-start gap-8 lg:grid-cols-[3fr_2fr]">
        <DeviceFrame url="amara.gitshop.co">
          <StoreMockup />
        </DeviceFrame>
        <DeviceFrame kind="phone" className="mx-auto w-full max-w-xs">
          <OrderTrackingMockup />
        </DeviceFrame>
      </div>
      <ul className="mt-12 flex flex-wrap gap-3">
        {storefront.chips.map((chip) => (
          <li key={chip.label}>
            <FeatureChip label={chip.label} soon={chip.soon} />
          </li>
        ))}
      </ul>
    </Section>
  )
}
