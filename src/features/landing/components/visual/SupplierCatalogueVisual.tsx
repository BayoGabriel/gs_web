import { ProductFigure } from './ProductFigure'

const rows = [
  { id: 'sneaker', name: 'Minimal leather sneaker', meta: '3 colours · UK 6–11', price: '₦20,000' },
  { id: 'lowtop', name: 'Canvas low-top', meta: '2 colours · UK 5–12', price: '₦14,500' },
  { id: 'runner', name: 'Suede runner', meta: '4 colours · UK 6–11', price: '₦22,000' },
]

/** Illustrative catalogue-management preview for the suppliers section. */
export function SupplierCatalogueVisual() {
  return (
    <div className="rounded-3xl border border-border bg-surface p-5 shadow-sm">
      <header className="flex items-center justify-between gap-2 border-b border-border pb-4">
        <div>
          <p className="font-mono text-[11px] font-medium text-muted">
            swift-footwear/sneakers
          </p>
          <p className="mt-1 text-sm font-bold text-ink">
            Swift Footwear catalogue
          </p>
        </div>
        <span className="rounded-md bg-pale px-2.5 py-1 font-mono text-[10px] font-medium tracking-wide text-forest uppercase">
          Catalogue preview
        </span>
      </header>
      <ul className="divide-y divide-border">
        {rows.map((row) => (
          <li key={row.id} className="flex items-center gap-3 py-3.5">
            <ProductFigure className="h-11 w-11" />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-bold text-ink">{row.name}</p>
              <p className="truncate text-xs text-muted">{row.meta}</p>
            </div>
            <span className="shrink-0 font-mono text-[13px] font-medium text-ink">
              {row.price}
            </span>
          </li>
        ))}
      </ul>
      <p className="border-t border-border pt-3 font-mono text-[11px] text-muted">
        Wholesale pricing · Illustrative example
      </p>
    </div>
  )
}
