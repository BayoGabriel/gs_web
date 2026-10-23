import { ChevronDown } from 'lucide-react'
import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { cn } from '../../lib/cn'
import type { NavLeaf } from '../../content/nav'

/** One nav disclosure: button + panel of icon tiles. Keyboard and Esc safe. */
export function MegaMenuItem({ label, items }: { label: string; items: NavLeaf[] }) {
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLLIElement>(null)

  return (
    <li
      ref={rootRef}
      className="relative"
      onPointerEnter={() => setOpen(true)}
      onPointerLeave={() => setOpen(false)}
      onBlur={(e) => {
        if (!rootRef.current?.contains(e.relatedTarget as Node)) setOpen(false)
      }}
      onKeyDown={(e) => {
        if (e.key === 'Escape') {
          setOpen(false)
          rootRef.current?.querySelector('button')?.focus()
        }
      }}
    >
      <button
        type="button"
        aria-expanded={open}
        className={cn(
          'flex h-10 items-center gap-1 rounded-md px-3 text-sm font-semibold transition-colors duration-fast hover:bg-hover-surface',
          open ? 'text-text' : 'text-muted',
        )}
        onClick={() => setOpen((v) => !v)}
        onFocus={() => setOpen(true)}
      >
        {label}
        <ChevronDown
          className={cn('h-4 w-4 transition-transform duration-fast', open && 'rotate-180')}
          aria-hidden="true"
        />
      </button>
      <div
        className={cn(
          'absolute top-full left-1/2 z-[var(--z-nav)] w-[26rem] -translate-x-1/2 pt-2',
          open ? 'block' : 'hidden',
        )}
      >
        <ul className="grid gap-1 rounded-xl border border-border bg-raised p-2 shadow-[var(--shadow-overlay)]">
          {items.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className="block rounded-md px-3 py-2.5 hover:bg-hover-surface"
                onClick={() => setOpen(false)}
              >
                <p className="text-sm font-semibold text-text">{item.label}</p>
                <p className="caption mt-0.5 text-muted">{item.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  )
}
