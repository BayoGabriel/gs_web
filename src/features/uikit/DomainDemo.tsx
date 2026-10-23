import { MarkupEditor } from '../../components/patterns/MarkupEditor'
import { OrderTimeline } from '../../components/patterns/OrderTimeline'
import { RepoCard } from '../../components/patterns/RepoCard'
import { TransactionRow } from '../../components/patterns/TransactionRow'
import { WalletCard } from '../../components/patterns/WalletCard'
import { Card } from '../../components/ui/Card'
import { EmptyState } from '../../components/ui/EmptyState'
import { Table } from '../../components/ui/Table'
import { formatMoney } from '../../lib/format'
import { KitBlock } from './KitBlock'

export function DomainDemo() {
  return (
    <>
      <KitBlock id="cards" title="Cards and stacks">
        <div className="grid max-w-3xl gap-8 sm:grid-cols-2">
          <RepoCard
            repo={{ id: 'k1', title: 'Sneakers 2026', wholesaler: 'Swift Footwear', items: 24, avgWholesale: 4000, forkCount: 12 }}
          />
          <Card variant="inverted">
            <p className="text-sm">Inverted card — used for emphasis blocks and closing CTAs.</p>
          </Card>
        </div>
      </KitBlock>
      <KitBlock id="money" title="Wallet, transactions, timeline">
        <div className="grid max-w-4xl gap-8 lg:grid-cols-2">
          <div>
            <WalletCard balance={48250} pending={12000} todayDelta={1200} />
            <ul className="mt-4 rounded-xl border border-border bg-raised px-4">
              <TransactionRow tx={{ id: 't1', type: 'markup', title: 'Markup earned', counterparty: 'amara.gitshop.app', reference: 'TXN-8f41', timestamp: '14:32', status: 'completed', amount: 1200 }} />
              <TransactionRow tx={{ id: 't2', type: 'payout', title: 'Payout', counterparty: 'Bank ••••4821', reference: 'PO-1139', timestamp: 'Yesterday', status: 'pending', amount: -15000 }} />
            </ul>
          </div>
          <Card>
            <OrderTimeline
              steps={[
                { id: 's1', label: 'Placed', actor: 'Customer', timestamp: 'Mar 12', state: 'completed' },
                { id: 's2', label: 'Shipped', actor: 'Wholesaler', timestamp: 'Mar 13', state: 'completed' },
                { id: 's3', label: 'Delivered', actor: 'Carrier', state: 'upcoming' },
              ]}
            />
          </Card>
        </div>
      </KitBlock>
      <KitBlock id="markup" title="Markup editor">
        <Card className="max-w-xl">
          <MarkupEditor wholesale={4000} minMarkup={500} maxMarkup={20000} />
        </Card>
      </KitBlock>
      <KitBlock id="table" title="Table and empty state">
        <Table
          caption="Example repo inventory"
          columns={[
            { key: 'sku', header: 'SKU' },
            { key: 'name', header: 'Product' },
            { key: 'price', header: 'Wholesale', numeric: true },
          ]}
          rows={[
            { key: '1', cells: { sku: 'SNK-041', name: 'Low-top trainer', price: formatMoney(4000) } },
            { key: '2', cells: { sku: 'SNK-042', name: 'Court runner', price: formatMoney(5500) } },
          ]}
        />
        <EmptyState
          title="No forks yet"
          description="When a reseller forks this repo, it appears here."
        />
      </KitBlock>
    </>
  )
}
