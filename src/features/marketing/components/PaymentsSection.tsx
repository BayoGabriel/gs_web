import { Check } from 'lucide-react'
import { Section, SectionHeading } from '../../../components/layout/Section'
import { TransactionRow, type Transaction } from '../../../components/patterns/TransactionRow'
import { WalletCard } from '../../../components/patterns/WalletCard'
import { payments } from '../../../content/home'

const exampleTx: Transaction[] = [
  { id: 't1', type: 'markup', title: 'Earnings', counterparty: 'Order #2417', reference: 'TXN-8f41', timestamp: 'Today', status: 'completed', amount: 1500000 },
  { id: 't2', type: 'payout', title: 'Payout', counterparty: 'Bank account', reference: 'PO-1139', timestamp: 'Yesterday', status: 'pending', amount: -18500000 },
]

export function PaymentsSection() {
  return (
    <Section tone="surface">
      <div className="grid items-start gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading
            display
            eyebrow={payments.eyebrow}
            title={
              <>
                <strong>{payments.headlineBold}</strong>{' '}
                <span className="light">{payments.headlineLight}</span>
              </>
            }
            description={payments.body}
          />
          <ul className="mt-8 space-y-3">
            {payments.bullets.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm">
                <Check className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <WalletCard balance={48250000} pending={12000000} todayDelta={1200000} />
          <ul className="mt-6 rounded-xl border border-border bg-raised px-4" aria-label="Example transactions">
            {exampleTx.map((tx) => (
              <TransactionRow key={tx.id} tx={tx} />
            ))}
          </ul>
          <p className="caption mt-3 text-subtle">Example data</p>
        </div>
      </div>
    </Section>
  )
}
