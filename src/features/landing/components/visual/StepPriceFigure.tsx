/** Miniature seller pricing labels for step 03. */
export function StepPriceFigure() {
  return (
    <div
      aria-hidden="true"
      className="flex flex-col gap-2 rounded-xl border border-border bg-paper p-3"
    >
      <div className="flex items-center justify-between rounded-lg border border-border bg-surface px-3 py-2">
        <span className="font-mono text-[10px] text-muted">seller-a</span>
        <span className="font-mono text-xs font-medium text-forest">
          ₦27,000
        </span>
      </div>
      <div className="flex items-center justify-between rounded-lg border border-border bg-surface px-3 py-2">
        <span className="font-mono text-[10px] text-muted">seller-b</span>
        <span className="font-mono text-xs font-medium text-forest">
          ₦29,000
        </span>
      </div>
    </div>
  )
}
