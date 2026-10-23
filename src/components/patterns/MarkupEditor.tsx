import { useMemo, useState } from 'react'
import { formatMoney, parseMoneyInput } from '../../lib/format'
import { cn } from '../../lib/cn'
import { Input } from '../ui/Input'

type MarkupEditorProps = {
  /** Wholesale price in integer minor units. */
  wholesale: number
  currency?: string
  minMarkup?: number
  maxMarkup?: number
  className?: string
}

function computeSplit(wholesale: number, type: 'amount' | 'percent', value: number) {
  const markup =
    type === 'percent' ? Math.round((wholesale * value) / 10000) : value
  return { markup, selling: wholesale + markup }
}

/** Segmented amount/percent markup editor with a live selling-price preview. */
export function MarkupEditor({
  wholesale,
  currency = 'NGN',
  minMarkup = 0,
  maxMarkup,
  className,
}: MarkupEditorProps) {
  const [type, setType] = useState<'amount' | 'percent'>('amount')
  const [raw, setRaw] = useState('10.00')

  const parsed = useMemo(() => parseMoneyInput(raw) ?? 0, [raw])
  const { markup, selling } = computeSplit(wholesale, type, parsed)
  const outOfRange =
    markup < minMarkup || (maxMarkup !== undefined && markup > maxMarkup)
  const error = outOfRange
    ? `Markup must be between ${formatMoney(minMarkup, currency)}${maxMarkup !== undefined ? ` and ${formatMoney(maxMarkup, currency)}` : ' or more'}.`
    : undefined

  return (
    <div className={className}>
      <div
        role="group"
        aria-label="Markup type"
        className="inline-flex rounded-md border border-border-strong p-1"
      >
        {(['amount', 'percent'] as const).map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => setType(option)}
            aria-pressed={type === option}
            className={cn(
              'h-[var(--control-sm)] rounded-sm px-4 text-sm font-semibold capitalize transition-colors duration-fast',
              type === option
                ? 'bg-primary text-on-primary'
                : 'text-muted hover:text-text',
            )}
          >
            {option}
          </button>
        ))}
      </div>
      <Input
        label={type === 'amount' ? 'Markup amount' : 'Markup percent'}
        value={raw}
        onChange={(event) => setRaw(event.target.value)}
        inputMode="decimal"
        prefix={type === 'amount' ? '₦' : undefined}
        suffix={type === 'percent' ? '%' : undefined}
        error={error}
        className="mt-4 max-w-64"
      />
      <dl className="mt-5 space-y-1.5 rounded-md bg-surface p-4 text-sm">
        <div className="flex justify-between">
          <dt className="text-muted">Wholesale</dt>
          <dd className="tabular-nums">{formatMoney(wholesale, currency)}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-muted">Your markup</dt>
          <dd className="tabular-nums">+ {formatMoney(markup, currency)}</dd>
        </div>
        <div className="flex justify-between border-t border-border pt-1.5 font-semibold">
          <dt>Selling price</dt>
          <dd className="tabular-nums">{formatMoney(selling, currency)}</dd>
        </div>
      </dl>
    </div>
  )
}
