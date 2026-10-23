import { Loader2 } from 'lucide-react'
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { buttonClasses, type ButtonSize, type ButtonVariant } from './buttonClasses'

type Common = {
  variant?: ButtonVariant
  size?: ButtonSize
  loading?: boolean
  leadingIcon?: ReactNode
  trailingIcon?: ReactNode
  className?: string
  children?: ReactNode
}

type AsLink = Common & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }
type AsButton = Common & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }

export function Button(props: AsLink | AsButton) {
  const {
    variant = 'primary',
    size = 'md',
    loading,
    leadingIcon,
    trailingIcon,
    className,
    children,
    ...rest
  } = props
  const classes = buttonClasses({ variant, size, className })
  const content = (
    <>
      {loading ? (
        <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
      ) : (
        leadingIcon
      )}
      {children}
      {trailingIcon}
    </>
  )
  if ('href' in props && props.href !== undefined) {
    return (
      <a className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {content}
      </a>
    )
  }
  return (
    <button
      type="button"
      className={classes}
      disabled={props.disabled || loading}
      aria-busy={loading || undefined}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  )
}
