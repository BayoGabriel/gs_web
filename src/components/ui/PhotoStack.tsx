import { cn } from '../../lib/cn'
import { Photo } from './Photo'

type PhotoStackProps = {
  slots: string[]
  className?: string
  /** First image is the LCP candidate. */
  priority?: boolean
}

/** Two or three photos layered with the knock-out gap — the logo in photographic form. */
export function PhotoStack({ slots, className, priority }: PhotoStackProps) {
  const count = Math.min(3, slots.length)
  return (
    <div
      className={cn('relative', className)}
      role="group"
      aria-label="Photo stack"
    >
      {slots.slice(0, count).map((slot, index) => (
        <div
          key={slot}
          className={cn('ps-layer', index === 0 ? 'relative' : 'absolute')}
          style={
            {
              '--ps-i': index,
              left: `calc(var(--stack-step-lg) * ${index} * 2)`,
              top: `calc(var(--stack-step-lg) * ${index} * 2)`,
              width: `calc(100% - var(--stack-step-lg) * ${index} * 2)`,
              boxShadow: '0 0 0 var(--stack-gap) var(--bg)',
              borderRadius: 'var(--radius-xl)',
            } as React.CSSProperties
          }
        >
          <Photo slot={slot} priority={priority && index === 0} />
        </div>
      ))}
    </div>
  )
}
