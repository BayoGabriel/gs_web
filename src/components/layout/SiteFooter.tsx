import { AtSign, Globe, Hash, Share2 } from 'lucide-react'
import { Link } from 'react-router'
import { footerGroups, tagline } from '../../content/nav'
import { Logo } from '../brand/Logo'
import { NewsletterForm } from '../ui/NewsletterForm'
import { ThemeToggle } from '../ui/ThemeToggle'

const socials = [
  { id: 'x', label: 'X (Twitter) — placeholder', Icon: AtSign },
  { id: 'instagram', label: 'Instagram — placeholder', Icon: Share2 },
  { id: 'linkedin', label: 'LinkedIn — placeholder', Icon: Globe },
  { id: 'github', label: 'GitHub — placeholder', Icon: Hash },
]

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto w-full max-w-[var(--container)] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,18rem)_1fr]">
          <div>
            <Link to="/" aria-label="GitShop home" className="inline-block rounded-sm text-text">
              <Logo variant="stacked" decorative className="w-24" />
            </Link>
            <p className="mt-5 font-display text-lg font-semibold">{tagline}</p>
            <p className="measure mt-2 text-sm text-muted">
              Publish a catalogue once. Let anyone sell it from their own store.
            </p>
            <div className="mt-5 flex gap-1" data-placeholder>
              {socials.map(({ id, label, Icon }) => (
                <a
                  key={id}
                  href="#social-placeholder"
                  aria-label={`${label} (placeholder link)`}
                  onClick={(e) => e.preventDefault()}
                  className="flex h-[var(--control-sm)] w-[var(--control-sm)] items-center justify-center rounded-sm text-muted hover:bg-hover-surface hover:text-text"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
            <ThemeToggle className="mt-5" />
          </div>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {footerGroups.map((group) => (
              <nav key={group.title} aria-label={`${group.title} links`}>
                <h2 className="caption text-subtle">{group.title}</h2>
                <ul className="mt-3 space-y-2.5">
                  {group.links.map((link) => (
                    <li key={link.to}>
                      <Link to={link.to} className="text-sm font-semibold text-text hover:text-muted">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>
        <div className="mt-14 border-t border-border pt-8">
          <NewsletterForm className="w-full sm:max-w-md" />
        </div>
        <p className="mt-10 pt-6 text-sm text-subtle">
          © {year} GitShop
        </p>
      </div>
    </footer>
  )
}
