import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

type SectionProps = {
  id?: string
  tone?: 'page' | 'surface' | 'inverted'
  children: ReactNode
  className?: string
}

const tones = {
  page: 'bg-bg text-text',
  surface: 'bg-surface text-text',
  inverted: 'bg-primary text-on-primary',
}

export function Section({ id, tone = 'page', children, className }: SectionProps) {
  return (
    <section
      id={id}
      className={cn('cv-auto py-14 sm:py-20 lg:py-24', tones[tone], className)}
    >
      <div className="mx-auto w-full max-w-[var(--container)] px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  )
}

type SectionHeadingProps = {
  eyebrow?: string
  title: ReactNode
  description?: string
  align?: 'left' | 'center'
  /** Oversized display scale for flagship sections. */
  display?: boolean
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  display,
}: SectionHeadingProps) {
  return (
    <div className={cn(display ? 'max-w-3xl' : 'max-w-2xl', align === 'center' && 'mx-auto text-center')}>
      {eyebrow ? <p className="overline text-muted">{eyebrow}</p> : null}
      <h2 className={cn('mt-3 text-balance', display ? 'display-lg' : 'h2')}>{title}</h2>
      {description ? (
        <p className="body-lg measure mt-4 text-muted">{description}</p>
      ) : null}
    </div>
  )
}
