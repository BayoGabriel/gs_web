import { EARLY_ACCESS_HREF, navItems } from '../../features/landing/content/navigation'
import { Button } from '../ui/Button'
import { Icon } from '../ui/Icon'

type MobileNavigationProps = {
  isOpen: boolean
  onClose: () => void
}

export function MobileNavigation({ isOpen, onClose }: MobileNavigationProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-40 lg:hidden">
      <div
        className="absolute inset-0 bg-ink/30"
        onClick={onClose}
        aria-hidden="true"
      />
      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        className="absolute inset-x-0 top-0 border-b border-border bg-paper px-5 pt-20 pb-6 shadow-lg"
      >
        <ul className="flex flex-col gap-1">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={onClose}
                className="flex items-center justify-between rounded-xl px-3 py-3.5 text-base font-semibold text-ink hover:bg-pale focus-visible:outline-2 focus-visible:outline-forest"
              >
                {item.label}
                <Icon name="arrow-right" className="h-4 w-4 text-muted" />
              </a>
            </li>
          ))}
        </ul>
        <Button
          href={EARLY_ACCESS_HREF}
          onClick={onClose}
          className="mt-4 w-full"
        >
          Get early access
        </Button>
      </nav>
    </div>
  )
}
