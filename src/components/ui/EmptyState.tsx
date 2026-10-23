import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

type EmptyStateProps = {
  title: string
  description: string
  action?: ReactNode
  className?: string
}

/** Empty state: three stacked rounded squares + one action. */
export function EmptyState({ title, description, action, className }: EmptyStateProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-center rounded-xl border border-border bg-raised px-6 py-16 text-center',
        className,
      )}
    >
      <svg viewBox="0 0 64 64" className="h-16 w-16" aria-hidden="true">
        <rect x="5" y="5" width="34" height="34" rx="9" fill="var(--border-strong)" />
        <rect x="15" y="15" width="34" height="34" rx="9" fill="var(--bg)" />
        <rect
          x="15"
          y="15"
          width="34"
          height="34"
          rx="9"
          fill="none"
          stroke="var(--border-strong)"
          strokeWidth="1.5"
        />
        <rect x="25" y="25" width="34" height="34" rx="9" fill="var(--surface)" />
        <rect
          x="25"
          y="25"
          width="34"
          height="34"
          rx="9"
          fill="none"
          stroke="var(--border-strong)"
          strokeWidth="1.5"
        />
      </svg>
      <h3 className="h3 mt-6">{title}</h3>
      <p className="measure mt-2 text-muted">{description}</p>
      {action ? <div className="mt-6">{action}</div> : null}
    </div>
  )
}
