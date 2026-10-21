/** Miniature source-to-fork branch for step 02. */
export function StepForkFigure() {
  return (
    <div
      aria-hidden="true"
      className="flex items-center gap-2 rounded-xl border border-border bg-paper p-3"
    >
      <span className="shrink-0 rounded-md bg-forest px-2 py-1.5 font-mono text-[10px] font-medium text-surface">
        source
      </span>
      <svg
        viewBox="0 0 48 32"
        className="h-8 w-12 shrink-0 text-forest"
        aria-hidden="true"
      >
        <path
          d="M0 16 C 18 16, 18 7, 48 7 M0 16 C 18 16, 18 25, 48 25"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
      </svg>
      <div className="flex min-w-0 flex-col gap-2">
        <span className="truncate rounded-md bg-clay-deep px-2 py-1.5 font-mono text-[10px] font-medium text-surface">
          seller-a
        </span>
        <span className="truncate rounded-md bg-ochre px-2 py-1.5 font-mono text-[10px] font-medium text-ink">
          seller-b
        </span>
      </div>
    </div>
  )
}
