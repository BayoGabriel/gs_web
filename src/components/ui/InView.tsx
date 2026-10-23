import type { ReactNode } from 'react'
import { useInView } from '../../hooks/useInView'
import { cn } from '../../lib/cn'

/** Fades + rises children once when scrolled into view. Static under reduced motion. */
export function InView({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const { ref, inView } = useInView<HTMLDivElement>(0.15)
  return (
    <div
      ref={ref}
      className={cn('iv', inView && 'iv-in', className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
