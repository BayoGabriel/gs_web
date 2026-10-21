import { cn } from '../../../../lib/cn'

type SellerForkCardProps = {
  name: string
  path: string
  price: string
  role?: string
  accent?: 'clay' | 'ochre' | 'forest'
  note?: string
  className?: string
}

const accentStyles = {
  clay: 'bg-clay-deep text-surface',
  ochre: 'bg-ochre text-ink',
  forest: 'bg-forest text-surface',
}

export function SellerForkCard({
  name,
  path,
  price,
  role = 'Seller',
  accent = 'clay',
  note,
  className,
}: SellerForkCardProps) {
  return (
    <article
      className={cn(
        'rounded-2xl border border-border bg-surface p-4 shadow-sm',
        className,
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <p className="truncate font-mono text-[11px] font-medium text-muted">
          {path}
        </p>
        <span
          className={cn(
            'shrink-0 rounded-md px-2 py-0.5 font-mono text-[10px] font-medium tracking-wide uppercase',
            accentStyles[accent],
          )}
        >
          {role}
        </span>
      </header>
      <p className="mt-3 text-sm font-bold text-ink">{name}</p>
      <p className="mt-1 flex items-baseline justify-between text-sm">
        <span className="text-muted">Your price</span>
        <span className="font-mono font-medium text-forest">{price}</span>
      </p>
      {note ? (
        <p className="mt-3 rounded-lg bg-pale px-2.5 py-1.5 font-mono text-[10px] text-forest">
          {note}
        </p>
      ) : null}
    </article>
  )
}
