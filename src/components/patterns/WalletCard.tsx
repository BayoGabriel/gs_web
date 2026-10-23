import { formatMoney } from '../../lib/format'
import { Button } from '../ui/Button'
import { Card } from '../ui/Card'

type WalletCardProps = {
  balance: number
  pending: number
  todayDelta?: number
  currency?: string
  className?: string
}

/** Inverted wallet card — the one black card per section. */
export function WalletCard({
  balance,
  pending,
  todayDelta,
  currency = 'NGN',
  className,
}: WalletCardProps) {
  const whole = Math.trunc(balance / 100)
  const cents = Math.abs(balance % 100)
  const symbol = formatMoney(0, currency).replace(/[\d.,\s]/g, '')

  return (
    <Card variant="inverted" className={className}>
      <p className="caption text-on-primary/70">Wallet balance</p>
      <p className="amount-xl mt-2">
        {symbol}
        {whole.toLocaleString()}
        <span className="text-on-primary/60">.{String(cents).padStart(2, '0')}</span>
      </p>
      <p className="mt-2 text-sm text-on-primary/70">
        {formatMoney(pending, currency)} pending
        {todayDelta ? ` · + ${formatMoney(todayDelta, currency)} today` : ''}
      </p>
      <div className="mt-6 grid gap-2 sm:grid-cols-2">
        <Button
          variant="secondary"
          className="border-on-primary bg-on-primary text-primary hover:bg-on-primary/90"
        >
          Request payout
        </Button>
        <Button
          variant="secondary"
          className="border-on-primary/60 bg-transparent text-on-primary hover:bg-on-primary/10"
        >
          Add funds
        </Button>
      </div>
    </Card>
  )
}
