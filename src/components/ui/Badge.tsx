import { Check, Clock, Loader2, Undo2, X } from 'lucide-react'
import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

type BadgeVariant = 'neutral' | 'outline' | 'inverted' | 'danger'
export type StatusKind = 'pending' | 'processing' | 'completed' | 'failed' | 'refunded'

const variantStyles: Record<BadgeVariant, string> = {
  neutral: 'bg-surface text-text',
  outline: 'border border-border-strong text-text',
  inverted: 'bg-primary text-on-primary',
  danger: 'border border-danger text-danger',
}

const statusConfig: Record<StatusKind, { icon: typeof Clock; variant: BadgeVariant }> = {
  pending: { icon: Clock, variant: 'outline' },
  processing: { icon: Loader2, variant: 'outline' },
  completed: { icon: Check, variant: 'inverted' },
  failed: { icon: X, variant: 'danger' },
  refunded: { icon: Undo2, variant: 'danger' },
}

const base =
  'inline-flex h-6 items-center gap-1.5 rounded-full px-2.5 text-xs leading-4 font-semibold whitespace-nowrap'

export function Badge({
  variant = 'neutral',
  status,
  icon,
  children,
  className,
}: {
  variant?: BadgeVariant
  status?: StatusKind
  icon?: ReactNode
  children: ReactNode
  className?: string
}) {
  const config = status ? statusConfig[status] : null
  const StatusIcon = config?.icon
  return (
    <span className={cn(base, variantStyles[config?.variant ?? variant], className)}>
      {StatusIcon ? (
        <StatusIcon className="h-3 w-3" aria-hidden="true" />
      ) : (
        icon
      )}
      {children}
    </span>
  )
}
