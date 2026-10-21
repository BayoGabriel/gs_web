import type { ReactNode } from 'react'
import { cn } from '../../../../lib/cn'

type TreeListProps = {
  items: { id: string; node: ReactNode }[]
  className?: string
}

/** Git-style vertical rail with node dots — used for stacked fork layouts. */
export function TreeList({ items, className }: TreeListProps) {
  return (
    <ol
      className={cn(
        'relative ml-3 space-y-4 border-l-2 border-forest/40 pl-6',
        className,
      )}
    >
      {items.map((item) => (
        <li key={item.id} className="relative">
          <span
            aria-hidden="true"
            className="absolute top-7 -left-[31px] h-3 w-3 rounded-full border-2 border-paper bg-forest"
          />
          <span
            aria-hidden="true"
            className="absolute top-[34px] -left-6 h-0.5 w-6 bg-forest/40"
          />
          {item.node}
        </li>
      ))}
    </ol>
  )
}
