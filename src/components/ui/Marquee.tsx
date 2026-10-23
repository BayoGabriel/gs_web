import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

/** Infinite-scrolling strip. Pauses on hover/focus; static under reduced motion. */
export function Marquee({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn('marquee group overflow-hidden', className)}
      tabIndex={0}
      aria-label="Category list"
    >
      <div className="marquee-track flex w-max gap-3 group-hover:[animation-play-state:paused] group-focus-visible:[animation-play-state:paused]">
        {children}
        {children}
      </div>
    </div>
  )
}
