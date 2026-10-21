import { EARLY_ACCESS_HREF, navItems } from '../../features/landing/content/navigation'
import { useMobileNavigation } from '../../features/landing/hooks/useMobileNavigation'
import { Button } from '../ui/Button'
import { Icon } from '../ui/Icon'
import { Wordmark } from '../ui/Logo'
import { MobileNavigation } from './MobileNavigation'

export function SiteHeader() {
  const { isOpen, close, toggle } = useMobileNavigation()

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-paper/90 backdrop-blur-sm">
      <div className="relative z-50 mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          className="rounded-lg focus-visible:outline-2 focus-visible:outline-forest"
          aria-label="GitShop home"
        >
          <Wordmark />
        </a>

        <nav aria-label="Primary navigation" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-[15px] font-semibold text-ink/80 transition-colors hover:text-forest focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-forest"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Button href={EARLY_ACCESS_HREF} className="hidden h-11 px-5 sm:inline-flex">
            Get early access
          </Button>
          <button
            type="button"
            onClick={toggle}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface text-ink hover:border-forest focus-visible:outline-2 focus-visible:outline-forest lg:hidden"
          >
            <Icon name={isOpen ? 'close' : 'menu'} className="h-5 w-5" />
          </button>
        </div>
      </div>
      <MobileNavigation isOpen={isOpen} onClose={close} />
    </header>
  )
}
