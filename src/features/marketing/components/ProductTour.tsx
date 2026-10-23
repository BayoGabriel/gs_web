import { DeviceFrame } from '../../../components/ui/DeviceFrame'
import { Tabs } from '../../../components/ui/Tabs'
import { WalletCard } from '../../../components/patterns/WalletCard'
import { StoreMockup } from '../../storefront/StoreMockup'
import { RepoMockup } from './RepoMockup'

/** Tabbed product tour with real component mockups inside device frames. */
export function ProductTour() {
  return (
    <Tabs
      ariaLabel="Product tour"
      items={[
        {
          value: 'repo',
          label: 'Repo management',
          content: (
            <DeviceFrame url="app.gitshop.com/repos/sneakers-2026">
              <RepoMockup />
            </DeviceFrame>
          ),
        },
        {
          value: 'storefront',
          label: 'Storefront',
          content: (
            <DeviceFrame kind="phone" className="mx-auto max-w-sm">
              <StoreMockup />
            </DeviceFrame>
          ),
        },
        {
          value: 'wallet',
          label: 'Wallet',
          content: (
            <div className="max-w-md">
              <WalletCard balance={48250000} pending={12000000} todayDelta={1200000} />
            </div>
          ),
        },
      ]}
    />
  )
}
