import type { ReactNode } from 'react'

type PageHeroProps = {
  eyebrow?: string
  title: ReactNode
  description?: string
  children?: ReactNode
}

export function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="border-b border-border bg-bg py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[var(--container)] px-4 sm:px-6 lg:px-8">
        {eyebrow ? <p className="overline text-muted">{eyebrow}</p> : null}
        <h1 className="display-lg mt-3 max-w-[14ch]">{title}</h1>
        {description ? (
          <p className="body-lg measure mt-5 text-muted">{description}</p>
        ) : null}
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  )
}
