import { Badge } from '../../../components/ui/Badge'
import { Photo } from '../../../components/ui/Photo'

const products = [
  { id: 'SNK-041', image: 'product-01', name: 'Low-top trainer', price: '₦42,500', forks: 12 },
  { id: 'SNK-042', image: 'product-02', name: 'Court runner', price: '₦58,000', forks: 8 },
  { id: 'SNK-043', image: 'product-03', name: 'Slip-on canvas', price: '₦35,000', forks: 4 },
]

const tabLabels = ['Products', 'Pricing rules', 'Forks', 'Activity']

/** Seller-side repo detail screen (static mockup). */
export function RepoMockup() {
  return (
    <div className="text-sm">
      <div className="flex items-center justify-between border-b border-border px-5 py-4">
        <div>
          <p className="font-display text-base font-semibold">Sneakers 2026</p>
          <p className="font-mono text-[11px] text-subtle">swift-footwear/sneakers-2026 · Public</p>
        </div>
        <Badge variant="outline">148 products</Badge>
      </div>
      <div className="flex gap-1 border-b border-border px-5 pt-2" aria-hidden="true">
        {tabLabels.map((tab, i) => (
          <span
            key={tab}
            className={
              'px-3 py-2 text-xs font-semibold ' +
              (i === 0 ? 'border-b-2 border-text text-text' : 'text-muted')
            }
          >
            {tab}
          </span>
        ))}
      </div>
      <ul className="divide-y divide-border">
        {products.map((p) => (
          <li key={p.id} className="flex items-center gap-3 px-5 py-3">
            <Photo slot={p.image} className="h-10 w-10 rounded-md" />
            <div className="min-w-0 flex-1">
              <p className="truncate font-semibold">{p.name}</p>
              <p className="font-mono text-[11px] text-subtle">{p.id}</p>
            </div>
            <p className="font-mono text-xs tabular-nums">{p.price}</p>
            <Badge variant="neutral">{p.forks} forks</Badge>
          </li>
        ))}
      </ul>
    </div>
  )
}
