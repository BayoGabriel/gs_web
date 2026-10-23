import { Check, GitFork, Wallet } from 'lucide-react'
import { Link } from 'react-router'
import { PhotoStack } from '../../../components/ui/PhotoStack'
import { buttonClasses } from '../../../components/ui/buttonClasses'
import { hero } from '../../../content/home'
import { primaryCta, secondaryCta } from '../../../content/nav'

const floatIcons = [Wallet, GitFork, Check]

export function HeroSection() {
  return (
    <section className="border-b border-border bg-bg">
      <div className="mx-auto grid w-full max-w-[var(--container)] items-center gap-12 px-4 py-16 sm:px-6 lg:min-h-[90svh] lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-0">
        <div>
          <h1 className="display-xl max-w-[11ch]">
            <strong>{hero.headlineBold}</strong>{' '}
            <span className="light">{hero.headlineLight}</span>
          </h1>
          <p className="body-lg measure mt-6 text-muted">{hero.sub}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link to={primaryCta.to} className={buttonClasses({ size: 'lg' })}>
              {primaryCta.label}
            </Link>
            <Link to={secondaryCta.to} className={buttonClasses({ variant: 'secondary', size: 'lg' })}>
              {secondaryCta.label}
            </Link>
          </div>
          <p className="caption mt-6 text-subtle">{hero.microcopy}</p>
        </div>
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <PhotoStack
            slots={['hero-photo-1', 'hero-photo-2', 'hero-photo-3']}
            priority
          />
          <ul aria-hidden="true" className="pointer-events-none absolute inset-0">
            {hero.floatingCards.map((card, i) => {
              const Icon = floatIcons[i]
              const pos = [
                'top-4 -left-2 sm:-left-8',
                'right-0 top-1/3 sm:-right-4',
                '-bottom-2 left-8',
              ][i]
              return (
                <li
                  key={card.id}
                  className={`float-in float-in-${i + 1} absolute ${pos} flex items-center gap-2 rounded-lg border border-border bg-raised px-3.5 py-2.5 text-xs font-semibold shadow-[var(--shadow-overlay)]`}
                >
                  <Icon className="h-4 w-4 text-muted" />
                  {card.label}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
