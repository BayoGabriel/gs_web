import { Accordion } from '../../components/ui/Accordion'
import { Button } from '../../components/ui/Button'
import { Modal } from '../../components/ui/Modal'
import { Tabs } from '../../components/ui/Tabs'
import { useToast } from '../../components/ui/toast-context'
import { KitBlock, KitRow } from './KitBlock'

export function OverlaysDemo() {
  const toast = useToast()
  return (
    <>
      <KitBlock id="tabs" title="Tabs">
        <Tabs
          ariaLabel="Example tabs"
          items={[
            { value: 'repos', label: 'Repos', content: <p className="text-sm text-muted">Your published catalogues.</p> },
            { value: 'forks', label: 'Forks', content: <p className="text-sm text-muted">Catalogues you resell.</p> },
            { value: 'wallet', label: 'Wallet', content: <p className="text-sm text-muted">Collections and payouts.</p> },
          ]}
        />
      </KitBlock>
      <KitBlock id="accordion" title="Accordion">
        <Accordion
          ariaLabel="Example accordion"
          items={[
            { id: 'a1', title: 'What is a repo?', content: 'A wholesaler\u2019s product catalogue.' },
            { id: 'a2', title: 'What is a fork?', content: 'A reseller\u2019s copy with their own prices.' },
          ]}
        />
      </KitBlock>
      <KitBlock id="modal" title="Modal and sheet">
        <KitRow>
          <Modal
            title="Payout review"
            description="Confirm the amount and destination."
            trigger={<Button variant="secondary">Open modal</Button>}
          >
            <p className="text-sm text-muted">₦185,000 to Bank account ••••4821</p>
          </Modal>
          <Modal
            sheet
            title="Share storefront"
            trigger={<Button variant="secondary">Open sheet</Button>}
          >
            <p className="text-sm text-muted">yourname.gitshop.co</p>
          </Modal>
        </KitRow>
      </KitBlock>
      <KitBlock id="toast" title="Toast">
        <KitRow>
          <Button variant="secondary" onClick={() => toast('Saved to your repo.')}>
            Default toast
          </Button>
          <Button
            variant="secondary"
            onClick={() => toast('Payout failed — money stayed in your wallet.', { variant: 'error' })}
          >
            Error toast
          </Button>
        </KitRow>
      </KitBlock>
    </>
  )
}
