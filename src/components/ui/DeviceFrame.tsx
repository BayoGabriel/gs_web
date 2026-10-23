import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

/** Thin-bordered rounded-square device frame — no blur shadows. */
export function DeviceFrame({
  kind = 'browser',
  url,
  children,
  className,
}: {
  kind?: 'browser' | 'phone'
  url?: string
  children: ReactNode
  className?: string
}) {
  if (kind === 'phone') {
    return (
      <div className={cn('overflow-hidden rounded-xl border-2 border-text bg-raised', className)}>
        <div className="flex h-7 items-center justify-center border-b border-border">
          <span aria-hidden="true" className="h-1.5 w-14 rounded-full bg-border-strong" />
        </div>
        <div className="bg-bg">{children}</div>
      </div>
    )
  }
  return (
    <div className={cn('overflow-hidden rounded-xl border-2 border-text bg-raised', className)}>
      <div className="flex h-9 items-center gap-2 border-b border-border px-3">
        <span aria-hidden="true" className="flex gap-1.5">
          <i className="block h-2.5 w-2.5 rounded-full bg-border-strong not-italic" />
          <i className="block h-2.5 w-2.5 rounded-full bg-border-strong not-italic" />
          <i className="block h-2.5 w-2.5 rounded-full bg-border-strong not-italic" />
        </span>
        {url ? (
          <span className="ml-2 truncate rounded-sm bg-surface px-3 py-1 font-mono text-xs text-muted">
            {url}
          </span>
        ) : null}
      </div>
      <div className="bg-bg">{children}</div>
    </div>
  )
}
