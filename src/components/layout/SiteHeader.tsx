import { lazy, Suspense } from 'react'
import { Link, NavLink } from 'react-router'
import { navEntries, primaryCta, signInCta } from '../../content/nav'
import { Logo } from '../brand/Logo'
import { buttonClasses } from '../ui/buttonClasses'
import { ThemeToggle } from '../ui/ThemeToggle'
import { MegaMenuItem } from './MegaMenuItem'

// Split Radix dialog/accordion code out of the initial bundle — only fetched
// on viewports where the hamburger is used.
const MobileMenu = lazy(() =>
  import('./MobileMenu').then((m) => ({ default: m.MobileMenu })),
)

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-[var(--z-nav)] border-b border-border bg-bg">
      <div className="mx-auto flex h-16 w-full max-w-[var(--container)] items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" aria-label="GitShop home" className="rounded-sm text-text">
          <Logo variant="horizontal" decorative className="h-7 w-auto sm:h-8" />
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navEntries.map((entry) =>
              entry.type === 'menu' ? (
                <MegaMenuItem key={entry.label} label={entry.label} items={entry.items} />
              ) : (
                <li key={entry.to}>
                  <NavLink
                    to={entry.to}
                    className={({ isActive }) =>
                      'flex h-10 items-center rounded-md px-3 text-sm font-semibold transition-colors duration-fast hover:bg-hover-surface ' +
                      (isActive ? 'text-text' : 'text-muted')
                    }
                  >
                    {entry.label}
                  </NavLink>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle className="hidden xl:inline-flex" />
          <a
            href={signInCta.to}
            className={buttonClasses({
              variant: 'ghost',
              size: 'sm',
              className: 'hidden lg:inline-flex',
            })}
          >
            {signInCta.label}
          </a>
          <a
            href={primaryCta.to}
            className={buttonClasses({ size: 'sm', className: 'hidden sm:inline-flex' })}
          >
            {primaryCta.label}
          </a>
          <Suspense
            fallback={
              <span className="block h-[var(--control-md)] w-[var(--control-md)] lg:hidden" aria-hidden="true" />
            }
          >
            <MobileMenu />
          </Suspense>
        </div>
      </div>
    </header>
  )
}
