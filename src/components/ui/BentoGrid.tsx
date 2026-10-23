import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'
import { SoonBadge } from './SoonBadge'

export function BentoGrid({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn('grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4', className)}>
      {children}
    </div>
  )
}

type BentoTileProps = {
  title: string
  body?: string
  soon?: boolean
  /** 1 or 2 columns on large screens. */
  span?: 1 | 2
  className?: string
  children?: ReactNode
}

export function BentoTile({ title, body, soon, span = 1, className, children }: BentoTileProps) {
  return (
    <div
      className={cn(
        'flex flex-col rounded-xl border border-border bg-raised p-6',
        span === 2 && 'lg:col-span-2',
        className,
      )}
    >
      <div className="flex items-center gap-2">
        <h3 className="text-base font-semibold">{title}</h3>
        {soon ? <SoonBadge /> : null}
      </div>
      {body ? <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p> : null}
      {children ? <div className="mt-auto pt-5">{children}</div> : null}
    </div>
  )
}
