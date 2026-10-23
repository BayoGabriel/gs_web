import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

type CardVariant = 'surface' | 'inverted' | 'outline'
type StackDepth = 1 | 2 | 3

type CardProps = {
  variant?: CardVariant
  /** Adds Stack layers behind the card. depth 2 = has forks, 3 = popular. */
  stack?: StackDepth
  /** Interactive cards fan the stack out on hover. */
  fan?: boolean
  className?: string
  children: ReactNode
}

const variantStyles: Record<CardVariant, string> = {
  surface: 'bg-raised border border-border',
  inverted: 'bg-primary text-on-primary border-0',
  outline: 'bg-transparent border border-border-strong',
}

export function Card({
  variant = 'surface',
  stack,
  fan,
  className,
  children,
}: CardProps) {
  if (stack) {
    return (
      <div
        className={cn('stack p-6', className)}
        data-depth={stack}
        data-variant={variant}
        data-fan={fan || undefined}
      >
        {children}
      </div>
    )
  }
  return (
    <div
      className={cn('rounded-xl p-6', variantStyles[variant], className)}
    >
      {children}
    </div>
  )
}
