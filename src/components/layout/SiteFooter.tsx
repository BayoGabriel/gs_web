import { EARLY_ACCESS_HREF, navItems } from '../../features/landing/content/navigation'
import { Wordmark } from '../ui/Logo'

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-paper">
      <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Wordmark />
            <p className="mt-4 text-sm leading-relaxed text-muted">
              A product-distribution platform where suppliers publish catalogues
              and sellers fork them into their own selling operations.
            </p>
          </div>
          <nav aria-label="Footer navigation">
            <ul className="flex flex-col gap-3 sm:flex-row sm:gap-8">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm font-semibold text-ink/80 hover:text-forest focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-forest"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={EARLY_ACCESS_HREF}
                  className="text-sm font-semibold text-forest hover:text-forest-deep focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-forest"
                >
                  Get early access
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <p className="mt-10 border-t border-border pt-6 font-mono text-xs text-muted">
          © {year} GitShop. Product examples and prices shown are illustrative.
        </p>
      </div>
    </footer>
  )
}
