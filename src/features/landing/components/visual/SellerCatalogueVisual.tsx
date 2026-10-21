import { ProductFigure } from './ProductFigure'

/** Illustrative seller-side catalogue built from a supplier source. */
export function SellerCatalogueVisual() {
  return (
    <div className="rounded-3xl border border-border bg-surface p-5 shadow-sm">
      <header className="flex items-center justify-between gap-2 border-b border-border pb-4">
        <div>
          <p className="font-mono text-[11px] font-medium text-muted">
            amara-market/swift-footwear
          </p>
          <p className="mt-1 text-sm font-bold text-ink">
            Amara Market selection
          </p>
        </div>
        <span className="rounded-md bg-clay-deep px-2.5 py-1 font-mono text-[10px] font-medium tracking-wide text-surface uppercase">
          Seller catalogue
        </span>
      </header>
      <div className="mt-4 flex items-center gap-3 rounded-xl border border-border bg-paper p-3">
        <ProductFigure className="h-11 w-11" />
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-bold text-ink">
            Minimal leather sneaker
          </p>
          <p className="font-mono text-[11px] text-muted">
            from swift-footwear/sneakers
          </p>
        </div>
        <div className="shrink-0 text-right">
          <p className="text-[10px] tracking-wide text-muted uppercase">
            Your price
          </p>
          <p className="font-mono text-[13px] font-medium text-forest">
            ₦27,000
          </p>
        </div>
      </div>
      <div className="mt-2.5 flex items-center gap-3 rounded-xl border border-dashed border-border p-3">
        <span className="h-11 w-11 shrink-0 rounded-lg bg-pale" aria-hidden="true" />
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-bold text-ink">Denim jacket</p>
          <p className="font-mono text-[11px] text-muted">
            from kano-textiles/denim
          </p>
        </div>
        <div className="shrink-0 text-right">
          <p className="text-[10px] tracking-wide text-muted uppercase">
            Your price
          </p>
          <p className="font-mono text-[13px] font-medium text-forest">
            ₦31,000
          </p>
        </div>
      </div>
      <p className="mt-4 border-t border-border pt-3 font-mono text-[11px] text-muted">
        Forked from two suppliers · Illustrative example
      </p>
    </div>
  )
}
