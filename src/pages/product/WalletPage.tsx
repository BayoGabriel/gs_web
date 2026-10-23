import { DetailSection } from '../../components/layout/DetailSection'
import { InlineCta } from '../../components/layout/InlineCta'
import { PageFaq } from '../../components/layout/PageFaq'
import { PageHero } from '../../components/layout/PageHero'
import { Section, SectionHeading } from '../../components/layout/Section'
import { TransactionRow, type Transaction } from '../../components/patterns/TransactionRow'
import { WalletCard } from '../../components/patterns/WalletCard'
import { walletPayments } from '../../content/product'
import { useDocumentMeta } from '../../hooks/useDocumentMeta'

const [collections, split, wallet, payouts, history, safeguards] = walletPayments.sections

const exampleTx: Transaction[] = [
  { id: 't1', type: 'collection', title: 'Collection', counterparty: 'Order #2417', reference: 'COL-8812', timestamp: 'Today', status: 'completed', amount: 5200 },
  { id: 't2', type: 'fee', title: 'Platform fee', counterparty: 'Order #2417', reference: 'FEE-8812', timestamp: 'Today', status: 'completed', amount: -260 },
  { id: 't3', type: 'payout', title: 'Payout', counterparty: 'Bank account', reference: 'PO-1139', timestamp: 'Yesterday', status: 'pending', amount: -15000 },
]

export default function WalletPage() {
  useDocumentMeta('Wallet and payments', 'Collections, automatic splits and payouts built into every sale.')
  return (
    <>
      <PageHero
        eyebrow="Product · Wallet and payments"
        title={<><strong>{walletPayments.headlineBold}</strong> <span className="light">{walletPayments.headlineLight}</span></>}
        description={walletPayments.sub}
      />
      <Section>
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <SectionHeading eyebrow={wallet.title} title="Your balance, in the open." description={wallet.body} />
          <div>
            <WalletCard balance={48250} pending={12000} todayDelta={1200} />
            <ul className="mt-6 rounded-xl border border-border bg-raised px-4" aria-label="Example transactions">
              {exampleTx.map((tx) => <TransactionRow key={tx.id} tx={tx} />)}
            </ul>
            <p className="caption mt-3 text-subtle">Example data</p>
          </div>
        </div>
      </Section>
      <DetailSection {...collections} tone="surface" image="step-4" />
      <DetailSection {...split} imageFirst media={
        <ol className="stack max-w-md space-y-4 p-6" aria-label="Payment split example">
          <li className="flex justify-between text-sm"><span>Customer pays</span><span className="font-mono tabular-nums">$52.00</span></li>
          <li className="flex justify-between text-sm"><span>Seller earns</span><span className="font-mono tabular-nums">+$12.00</span></li>
          <li className="flex justify-between text-sm"><span>Supplier receives</span><span className="font-mono tabular-nums">$40.00</span></li>
        </ol>
      } />
      <DetailSection {...payouts} tone="surface" media={
        <div className="stack max-w-md p-6">
          <p className="font-semibold">Payout review</p>
          <dl className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between"><dt className="text-muted">Amount</dt><dd className="font-mono tabular-nums">$150.00</dd></div>
            <div className="flex justify-between"><dt className="text-muted">Destination</dt><dd className="font-mono">Bank ••••4821</dd></div>
            <div className="flex justify-between"><dt className="text-muted">Status</dt><dd>Pending confirmation</dd></div>
          </dl>
        </div>
      } />
      <DetailSection {...history} imageFirst image="usecase-shop" />
      <DetailSection {...safeguards} tone="surface" />
      <PageFaq items={[
        { id: 'when', q: 'When does money reach my wallet?', a: 'The moment the customer pays. Collections land as pending, then confirm.' },
        { id: 'payout', q: 'How do payouts work?', a: 'Choose a bank account, review the amount and destination, confirm. Payouts stay pending until complete.' },
        { id: 'fail', q: 'What if a payout fails?', a: 'The money stays in your wallet and the payout is marked failed — never silently.' },
      ]} />
      <InlineCta title="Every order pays itself out." sub="Wallets and splits are built into every sale on GitShop." />
    </>
  )
}
