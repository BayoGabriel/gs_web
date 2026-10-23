import { useEffect, useState } from 'react'
import { Badge } from '../../../components/ui/Badge'
import { Photo } from '../../../components/ui/Photo'
import { cn } from '../../../lib/cn'

const products = [
  { id: 'SNK-041', image: 'product-01', name: 'Low-top trainer', price: '₦42,500', forks: 12 },
  { id: 'SNK-042', image: 'product-02', name: 'Court runner', price: '₦58,000', forks: 8 },
  { id: 'SNK-043', image: 'product-03', name: 'Slip-on canvas', price: '₦35,000', forks: 4 },
]

const scenes = [
  { id: 'edit', label: 'Edit' },
  { id: 'rules', label: 'Rules' },
  { id: 'sync', label: 'Sync' },
] as const

/** Auto-cycling mini demo: edit a price → set rules → sync to every fork. */
export function RepoShowcase() {
  const [scene, setScene] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const t = setInterval(() => setScene((s) => (s + 1) % scenes.length), 3200)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-raised text-sm">
      {/* repo header */}
      <div className="flex items-center justify-between border-b border-border px-5 py-4">
        <div className="min-w-0">
          <p className="truncate font-display text-base font-semibold">Sneakers 2026</p>
          <p className="font-mono text-[11px] text-subtle">swift-footwear/sneakers-2026</p>
        </div>
        <Badge variant="outline">Public</Badge>
      </div>

      {/* scene rail — the "how it works" steps */}
      <div className="grid grid-cols-3 border-b border-border" role="tablist" aria-label="Demo scenes">
        {scenes.map((s, i) => (
          <button
            key={s.id}
            role="tab"
            aria-selected={scene === i}
            onClick={() => setScene(i)}
            className={cn(
              'relative px-4 py-2.5 text-xs font-semibold transition-colors duration-fast',
              scene === i ? 'text-text' : 'text-subtle hover:text-muted',
            )}
          >
            <span className="mr-1.5 font-mono text-[10px] text-subtle">0{i + 1}</span>
            {s.label}
            <span
              aria-hidden="true"
              className={cn(
                'absolute inset-x-3 bottom-0 h-0.5 origin-left bg-text transition-transform duration-slow ease-standard',
                scene === i ? 'scale-x-100' : 'scale-x-0',
              )}
            />
          </button>
        ))}
      </div>

      {/* scenes */}
      <div className="relative flex flex-1 flex-col justify-center">
        {/* 1 — edit a product price */}
        <ul
          aria-hidden={scene !== 0}
          className={cn(
            'divide-y divide-border transition-opacity duration-slow',
            scene === 0 ? 'opacity-100' : 'pointer-events-none absolute inset-0 opacity-0',
          )}
        >
          {products.map((p) => (
            <li key={p.id} className="flex items-center gap-3 px-5 py-3">
              <Photo slot={p.image} className="h-10 w-10 rounded-md" />
              <div className="min-w-0 flex-1">
                <p className="truncate font-semibold">{p.name}</p>
                <p className="font-mono text-[11px] text-subtle">{p.id}</p>
              </div>
              <p className="font-mono text-xs tabular-nums">
                {p.id === 'SNK-042' ? <PriceTick active={scene === 0} /> : p.price}
              </p>
              <Badge variant="neutral">{p.forks} forks</Badge>
            </li>
          ))}
        </ul>

        {/* 2 — rules */}
        <div
          aria-hidden={scene !== 1}
          className={cn(
            'px-5 py-5 transition-opacity duration-slow',
            scene === 1 ? 'opacity-100' : 'pointer-events-none absolute inset-0 opacity-0',
          )}
        >
          <dl className="space-y-3">
            <div className="rs-line flex items-center justify-between rounded-md border border-border bg-surface px-4 py-3">
              <dt className="text-muted">Minimum sell price</dt>
              <dd className="font-mono text-xs tabular-nums">₦55,000</dd>
            </div>
            <div className="rs-line flex items-center justify-between rounded-md border border-border bg-surface px-4 py-3" style={{ animationDelay: '140ms' }}>
              <dt className="text-muted">Maximum margin</dt>
              <dd className="font-mono text-xs tabular-nums">40%</dd>
            </div>
            <div className="rs-line flex items-center justify-between rounded-md border border-border bg-surface px-4 py-3" style={{ animationDelay: '280ms' }}>
              <dt className="text-muted">Applies to</dt>
              <dd className="font-mono text-xs tabular-nums">8 forks</dd>
            </div>
          </dl>
          <p className="caption mt-4 text-subtle">Sellers can price above the floor — never below it.</p>
        </div>

        {/* 3 — sync changelog */}
        <ul
          aria-hidden={scene !== 2}
          className={cn(
            'divide-y divide-border transition-opacity duration-slow',
            scene === 2 ? 'opacity-100' : 'pointer-events-none absolute inset-0 opacity-0',
          )}
        >
          {[
            { text: 'SNK-042 price ₦58,000 → ₦55,000', when: 'just now' },
            { text: 'Synced to 8 storefronts', when: 'just now' },
            { text: '3 products added to “Denim staples”', when: 'Yesterday' },
          ].map((row, i) => (
            <li
              key={row.text}
              className={cn('flex items-center gap-3 px-5 py-3.5', scene === 2 && 'rs-line')}
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <span className="block h-1.5 w-1.5 shrink-0 rounded-full bg-text" aria-hidden="true" />
              <p className="min-w-0 flex-1 truncate font-mono text-xs">{row.text}</p>
              <p className="caption shrink-0 text-subtle">{row.when}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

/** Price ticks between the old and new value while the edit scene is showing. */
function PriceTick({ active }: { active: boolean }) {
  const [edited, setEdited] = useState(false)
  useEffect(() => {
    if (!active || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const t = setInterval(() => setEdited((e) => !e), 1600)
    return () => clearInterval(t)
  }, [active])
  return (
    <span className="relative inline-block">
      <span
        className={cn(
          'inline-block transition-[opacity,transform] duration-base',
          edited ? '-translate-y-2 opacity-0' : 'translate-y-0 opacity-100',
        )}
      >
        ₦58,000
      </span>
      <span
        aria-hidden="true"
        className={cn(
          'absolute inset-x-0 top-0 inline-block font-semibold transition-[opacity,transform] duration-base',
          edited ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0',
        )}
      >
        ₦55,000
      </span>
    </span>
  )
}
