import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '../../lib/cn'

type Variant = 'primary' | 'secondary' | 'light' | 'text'

const styles: Record<Variant, string> = {
  primary:
    'h-12 px-6 bg-forest text-surface hover:bg-forest-deep active:bg-forest-deep shadow-sm',
  light:
    'h-12 px-6 bg-surface text-forest hover:bg-paper active:bg-paper shadow-sm',
  secondary:
    'h-12 px-6 bg-transparent text-ink border border-ink/25 hover:border-forest hover:text-forest active:border-forest',
  text: 'bg-transparent text-forest underline-offset-4 hover:underline',
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-xl text-[15px] font-semibold ' +
  'transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 ' +
  'focus-visible:outline-forest disabled:opacity-50 disabled:pointer-events-none cursor-pointer'

type CommonProps = { variant?: Variant; children: ReactNode; className?: string }

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }
type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { variant = 'primary', children, className, ...rest } = props
  const classes = cn(base, styles[variant], className)

  if ('href' in props && props.href !== undefined) {
    return (
      <a className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    )
  }
  return (
    <button
      type="button"
      className={classes}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  )
}
