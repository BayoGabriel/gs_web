import * as DialogPrimitive from '@radix-ui/react-dialog'
import { ChevronDown, Menu, X } from 'lucide-react'
import { Link } from 'react-router'
import { navEntries, primaryCta } from '../../content/nav'
import { cn } from '../../lib/cn'
import { Logo } from '../brand/Logo'
import { buttonClasses } from '../ui/buttonClasses'
import { ThemeToggle } from '../ui/ThemeToggle'
import { Tooltip } from '../ui/Tooltip'

/** Full-screen mobile nav with accordion groups (Radix dialog). */
export function MobileMenu() {
  return (
    <DialogPrimitive.Root>
      <Tooltip content="Menu">
        <DialogPrimitive.Trigger
          aria-label="Open menu"
          className="flex h-[var(--control-md)] w-[var(--control-md)] items-center justify-center rounded-md hover:bg-hover-surface lg:hidden"
        >
          <Menu className="h-5 w-5" aria-hidden="true" />
        </DialogPrimitive.Trigger>
      </Tooltip>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Content
          aria-label="Menu"
          className="fixed inset-0 z-[var(--z-modal)] flex flex-col overflow-y-auto bg-bg p-5 outline-none"
        >
          <div className="flex items-center justify-between">
            <Logo variant="horizontal" decorative className="h-7 w-auto" />
            <Tooltip content="Close">
              <DialogPrimitive.Close
                aria-label="Close menu"
                className="flex h-[var(--control-md)] w-[var(--control-md)] items-center justify-center rounded-md hover:bg-hover-surface"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </DialogPrimitive.Close>
            </Tooltip>
          </div>
          <nav aria-label="Mobile" className="mt-6 flex-1">
            <ul className="flex flex-col">
              {navEntries.map((entry) =>
                entry.type === 'link' ? (
                  <li key={entry.to}>
                    <DialogPrimitive.Close asChild>
                      <Link to={entry.to} className="block rounded-md px-3 py-3.5 text-xl font-semibold hover:bg-hover-surface">
                        {entry.label}
                      </Link>
                    </DialogPrimitive.Close>
                  </li>
                ) : (
                  <li key={entry.label}>
                    <details className="group">
                      <summary className="flex cursor-pointer list-none items-center justify-between rounded-md px-3 py-3.5 text-xl font-semibold hover:bg-hover-surface [&::-webkit-details-marker]:hidden">
                        {entry.label}
                        <ChevronDown className="h-5 w-5 transition-transform duration-fast group-open:rotate-180" aria-hidden="true" />
                      </summary>
                      <ul className={cn('mb-2 ml-3 border-l border-border')}>
                        {entry.items.map((item) => (
                          <li key={item.to}>
                            <DialogPrimitive.Close asChild>
                              <Link to={item.to} className="block rounded-md px-3 py-2.5 text-base text-muted hover:text-text">
                                {item.label}
                              </Link>
                            </DialogPrimitive.Close>
                          </li>
                        ))}
                      </ul>
                    </details>
                  </li>
                ),
              )}
            </ul>
          </nav>
          <div className="flex flex-col gap-3 pt-4">
            <DialogPrimitive.Close asChild>
              <Link to="/signin" className={buttonClasses({ variant: 'secondary', className: 'w-full' })}>
                Sign in
              </Link>
            </DialogPrimitive.Close>
            <DialogPrimitive.Close asChild>
              <a href={primaryCta.to} className={buttonClasses({ className: 'w-full' })}>
                {primaryCta.label}
              </a>
            </DialogPrimitive.Close>
            <ThemeToggle className="self-start" />
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}
