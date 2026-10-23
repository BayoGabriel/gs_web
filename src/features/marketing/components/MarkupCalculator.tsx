import { useMemo, useState } from 'react'
import { Input } from '../../../components/ui/Input'
import { exampleFeeBps } from '../../../content/placeholders'
import { formatMoney, parseMoneyInput } from '../../../lib/format'
import { cn } from '../../../lib/cn'

const CURRENCY = 'NGN'

/** Seller-side split: supplier price + your margin → customer pays. Integer minor units. */
export function MarkupCalculator() {
  const [wholesaleRaw, setWholesaleRaw] = useState('45000')
  const [markupType, setMarkupType] = useState<'amount' | 'percent'>('amount')
  const [markupRaw, setMarkupRaw] = useState('12000')

  const split = useMemo(() => {
    const supplier = parseMoneyInput(wholesaleRaw) ?? 0
    const value = parseMoneyInput(markupRaw) ?? 0
    const margin =
      markupType === 'percent' ? Math.round((supplier * value) / 10000) : value
    const total = supplier + margin
    const fee = Math.round((total * exampleFeeBps) / 10000)
    return { supplier, margin, fee, total, earned: margin - fee }
  }, [wholesaleRaw, markupType, markupRaw])

  const rows = [
    { label: 'Supplier receives', value: formatMoney(split.supplier, CURRENCY) },
    { label: 'Your margin', value: `+ ${formatMoney(split.margin, CURRENCY)}` },
    { label: 'Platform fee (illustrative)', value: `− ${formatMoney(split.fee, CURRENCY)}` },
    { label: 'You earn', value: formatMoney(split.earned, CURRENCY) },
    { label: 'Customer pays', value: formatMoney(split.total, CURRENCY), strong: true },
  ]

  return (
    <div className="rounded-xl border border-border bg-raised p-6 sm:p-8">
      <p className="overline text-muted">Example sale</p>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <Input
          label="Supplier price"
          value={wholesaleRaw}
          onChange={(e) => setWholesaleRaw(e.target.value)}
          inputMode="decimal"
          prefix="₦"
        />
        <div>
          <div
            role="group"
            aria-label="Margin type"
            className="inline-flex rounded-md border border-border-strong p-1"
          >
            {(['amount', 'percent'] as const).map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setMarkupType(option)}
                aria-pressed={markupType === option}
                className={cn(
                  'h-[var(--control-sm)] rounded-sm px-4 text-sm font-semibold transition-colors duration-fast',
                  markupType === option ? 'bg-primary text-on-primary' : 'text-muted hover:text-text',
                )}
              >
                {option === 'amount' ? 'Amount' : 'Percent'}
              </button>
            ))}
          </div>
          <Input
            label="Your margin"
            value={markupRaw}
            onChange={(e) => setMarkupRaw(e.target.value)}
            inputMode="decimal"
            prefix={markupType === 'amount' ? '₦' : undefined}
            suffix={markupType === 'percent' ? '%' : undefined}
            className="mt-4"
          />
        </div>
      </div>
      <dl className="mt-6 space-y-2 border-t border-border pt-5" aria-live="polite">
        {rows.map((row) => (
          <div key={row.label} className="flex justify-between text-sm">
            <dt className={row.strong ? 'font-semibold text-text' : 'text-muted'}>
              {row.label}
            </dt>
            <dd className={cn('tabular-nums', row.strong && 'amount text-base')}>
              {row.value}
            </dd>
          </div>
        ))}
      </dl>
      <p className="caption mt-4 text-subtle" data-placeholder>
        Illustrative example. Final fees are shown before you commit and at checkout.
      </p>
    </div>
  )
}
