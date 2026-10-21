type LogoProps = {
  className?: string
}

/** GitShop wordmark: a branch node splitting toward a second node. */
export function Logo({ className }: LogoProps) {
  return (
    <span className={className} aria-hidden="true">
      <svg viewBox="0 0 32 32" className="h-8 w-8" focusable="false">
        <rect width="32" height="32" rx="7" className="fill-forest" />
        <path
          d="M10 21v-3.5c0-2 1.6-3.5 3.5-3.5H18"
          fill="none"
          stroke="#F7F4EC"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          d="M10 25v-4"
          fill="none"
          stroke="#F7F4EC"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <circle cx="10" cy="25" r="2.4" className="fill-ochre" />
        <circle cx="10" cy="11" r="2.4" fill="#F7F4EC" />
        <circle cx="21" cy="14" r="2.4" className="fill-clay" />
      </svg>
      <span className="sr-only">GitShop</span>
    </span>
  )
}

export function Wordmark() {
  return (
    <span className="inline-flex items-center gap-2.5">
      <Logo />
      <span className="text-lg font-extrabold tracking-tight text-ink">
        GitShop
      </span>
    </span>
  )
}
