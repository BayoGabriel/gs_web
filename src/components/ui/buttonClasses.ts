import { cn } from '../../lib/cn'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger' | 'link'
export type ButtonSize = 'sm' | 'md' | 'lg' | 'icon'

export const buttonVariantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-primary text-on-primary hover:bg-primary-hover active:bg-primary-active disabled:bg-disabled-surface disabled:text-disabled',
  secondary:
    'bg-bg text-text border border-border-strong hover:bg-hover-surface active:bg-pressed-surface disabled:text-disabled disabled:border-border',
  ghost:
    'bg-transparent text-text hover:bg-hover-surface active:bg-pressed-surface disabled:text-disabled',
  danger:
    'bg-bg text-danger border border-danger hover:bg-hover-surface disabled:text-disabled disabled:border-border',
  link: 'bg-transparent text-text underline underline-offset-4 hover:text-muted h-auto px-0',
}

export const buttonSizeStyles: Record<ButtonSize, string> = {
  sm: 'h-[var(--control-sm)] px-4 rounded-sm text-sm gap-2',
  md: 'h-[var(--control-md)] px-5 rounded-md text-base gap-2',
  lg: 'h-[var(--control-lg)] px-7 rounded-lg text-base gap-2',
  icon: 'h-[var(--control-md)] w-[var(--control-md)] rounded-md',
}

const base =
  'inline-flex shrink-0 items-center justify-center font-sans font-semibold transition-colors duration-fast ease-standard ' +
  'active:scale-[.98] motion-reduce:active:scale-100 disabled:pointer-events-none cursor-pointer'

/** Class list for restyling other elements (e.g. router Links) as buttons. */
export function buttonClasses({
  variant = 'primary',
  size = 'md',
  className,
}: { variant?: ButtonVariant; size?: ButtonSize; className?: string } = {}) {
  return cn(base, buttonVariantStyles[variant], buttonSizeStyles[size], className)
}
