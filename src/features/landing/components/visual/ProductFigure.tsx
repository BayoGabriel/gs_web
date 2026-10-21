import { cn } from '../../../../lib/cn'

type ProductFigureProps = {
  className?: string
}

/** Minimal sneaker illustration used for the Swift Footwear example. */
export function ProductFigure({ className }: ProductFigureProps) {
  return (
    <span
      className={cn(
        'flex shrink-0 items-center justify-center rounded-lg bg-pale',
        className,
      )}
      aria-hidden="true"
    >
      <svg viewBox="0 0 48 48" className="h-3/4 w-3/4" focusable="false">
        <path
          d="M10 31v-8.5q0-2.8 2.6-3.3l6-1.4q2.2-.5 3.7 1.1l4.2 4.5q1.6 1.7 4 2l5.4.8q3 .5 3.1 3.6V31Z"
          className="fill-surface stroke-forest"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <rect
          x="8"
          y="31"
          width="33"
          height="4.5"
          rx="2.25"
          className="fill-forest"
        />
        <path
          d="M22 20.5l2.6 2.6M25 18.8l2.6 2.6"
          className="stroke-clay"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    </span>
  )
}
