import { DeviceFrame } from '../../components/ui/DeviceFrame'
import { FeatureChip } from '../../components/ui/FeatureChip'
import { Marquee } from '../../components/ui/Marquee'
import { NewsletterForm } from '../../components/ui/NewsletterForm'
import { Photo } from '../../components/ui/Photo'
import { PhotoStack } from '../../components/ui/PhotoStack'
import { SoonBadge } from '../../components/ui/SoonBadge'
import { StatNumber } from '../../components/ui/StatNumber'
import { RepoMockup } from '../marketing/components/RepoMockup'
import { OrderTrackingMockup } from '../storefront/OrderTrackingMockup'
import { StoreMockup } from '../storefront/StoreMockup'
import { KitBlock } from './KitBlock'

export function MarketingDemo() {
  return (
    <>
      <KitBlock id="photos" title="Photo and photo stack">
        <div className="grid max-w-4xl gap-8 sm:grid-cols-2">
          <PhotoStack slots={['hero-photo-1', 'hero-photo-2', 'hero-photo-3']} />
          <Photo slot="about-wide" />
        </div>
      </KitBlock>
      <KitBlock id="chips" title="Chips, badges, stats, marquee">
        <div className="flex flex-wrap items-center gap-3">
          <FeatureChip label="Your name and logo" />
          <FeatureChip label="Share by QR" soon />
          <SoonBadge />
        </div>
        <div className="grid max-w-md grid-cols-2 gap-6">
          <StatNumber value={148} label="Example stat" />
          <StatNumber value={96} label="Reduced-motion safe" />
        </div>
        <Marquee>
          {['Fashion', 'Beauty', 'Electronics', 'Home', 'Food', 'Accessories'].map((item) => (
            <FeatureChip key={item} label={item} />
          ))}
        </Marquee>
      </KitBlock>
      <KitBlock id="mockups" title="Mockups in device frames">
        <div className="grid items-start gap-8 lg:grid-cols-2">
          <DeviceFrame url="amara.gitshop.co"><StoreMockup /></DeviceFrame>
          <DeviceFrame kind="phone" className="mx-auto w-full max-w-xs"><OrderTrackingMockup /></DeviceFrame>
        </div>
        <DeviceFrame url="app.gitshop.co/repos"><RepoMockup /></DeviceFrame>
      </KitBlock>
      <KitBlock id="newsletter" title="Newsletter form">
        <NewsletterForm />
      </KitBlock>
    </>
  )
}
