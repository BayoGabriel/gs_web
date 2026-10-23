import { ArrowDownToLine, ArrowUpFromLine, GitFork, Undo2 } from 'lucide-react'
import { formatMoney } from '../../lib/format'
import { Badge, type StatusKind } from '../ui/Badge'

export type TransactionType = 'collection' | 'markup' | 'payout' | 'refund' | 'fee'

export type Transaction = {
  id: string
  type: TransactionType
  title: string
  counterparty: string
  reference: string
  timestamp: string
  status: StatusKind
  /** Signed minor units: + in, − out. */
  amount: number
  currency?: string
}

const typeIcons: Record<TransactionType, typeof GitFork> = {
  collection: ArrowDownToLine,
  markup: GitFork,
  payout: ArrowUpFromLine,
  refund: Undo2,
  fee: ArrowUpFromLine,
}

const statusLabel: Record<StatusKind, string> = {
  pending: 'Pending',
  processing: 'Processing',
  completed: 'Completed',
  failed: 'Failed',
  refunded: 'Refunded',
}

export function TransactionRow({ tx }: { tx: Transaction }) {
  const Icon = typeIcons[tx.type]
  const currency = tx.currency ?? 'USD'
  const sign = tx.amount < 0 ? '−' : '+'

  return (
    <li className="flex items-center gap-4 py-4">
      <span
        aria-hidden="true"
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-surface"
      >
        <Icon className="h-5 w-5" />
      </span>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-text">
          {tx.title} · {tx.counterparty}
        </p>
        <p className="caption mt-0.5 text-subtle">
          <span className="font-mono">{tx.reference}</span> · {tx.timestamp}
        </p>
      </div>
      <Badge status={tx.status}>{statusLabel[tx.status]}</Badge>
      <p className="amount w-28 text-right text-base">
        {sign} {formatMoney(Math.abs(tx.amount), currency)}
      </p>
    </li>
  )
}
