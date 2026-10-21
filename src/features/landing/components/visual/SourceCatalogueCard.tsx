import { ProductFigure } from './ProductFigure'

export function SourceCatalogueCard() {
  return (
    <article className="rounded-2xl border border-border bg-surface p-4 shadow-sm">
      <header className="flex items-center justify-between gap-2">
        <p className="font-mono text-[11px] font-medium text-muted">
          swift-footwear/sneakers
        </p>
        <span className="rounded-md bg-forest px-2 py-0.5 font-mono text-[10px] font-medium tracking-wide text-surface uppercase">
          Supplier
        </span>
      </header>
      <div className="mt-3 flex items-center gap-3 rounded-xl border border-border bg-paper p-3">
        <ProductFigure className="h-12 w-12" />
        <div className="min-w-0">
          <p className="truncate text-sm font-bold text-ink">
            Minimal leather sneaker
          </p>
          <p className="text-xs text-muted">3 colours · UK 6–11</p>
        </div>
      </div>
      <p className="mt-3 flex items-baseline justify-between text-sm">
        <span className="text-muted">Wholesale</span>
        <span className="font-mono font-medium text-ink">₦20,000</span>
      </p>
    </article>
  )
}
