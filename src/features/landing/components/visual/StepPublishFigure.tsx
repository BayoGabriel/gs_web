import { ProductFigure } from './ProductFigure'

/** Miniature supplier catalogue rows for step 01. */
export function StepPublishFigure() {
  return (
    <div
      aria-hidden="true"
      className="rounded-xl border border-border bg-paper p-3"
    >
      <div className="flex items-center gap-2.5 rounded-lg border border-border bg-surface p-2.5">
        <ProductFigure className="h-9 w-9" />
        <div className="min-w-0 flex-1">
          <p className="truncate text-xs font-bold text-ink">
            Minimal leather sneaker
          </p>
          <p className="font-mono text-[10px] text-muted">3 colours</p>
        </div>
        <span className="font-mono text-[11px] font-medium text-ink">
          ₦20,000
        </span>
      </div>
      <div className="mt-2 flex items-center gap-2.5 rounded-lg border border-dashed border-border p-2.5">
        <span className="h-9 w-9 rounded-lg bg-pale" />
        <div className="flex-1 space-y-1.5">
          <span className="block h-2 w-2/3 rounded bg-border" />
          <span className="block h-2 w-1/3 rounded bg-border" />
        </div>
        <span className="font-mono text-[11px] text-muted">₦—</span>
      </div>
    </div>
  )
}
