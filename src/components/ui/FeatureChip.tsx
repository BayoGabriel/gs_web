import { cn } from '../../lib/cn'
import { SoonBadge } from './SoonBadge'

/** Feature label chip, optionally flagged as coming soon. */
export function FeatureChip({ label, soon, inverted }: { label: string; soon?: boolean; inverted?: boolean }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold',
        inverted ? 'border-on-primary/40 text-on-primary' : 'border-border-strong text-text',
      )}
    >
      {label}
      {soon ? <SoonBadge /> : null}
    </span>
  )
}
