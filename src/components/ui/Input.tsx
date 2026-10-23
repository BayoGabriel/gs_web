import { CircleAlert } from 'lucide-react'
import { useId, type InputHTMLAttributes, type ReactNode } from 'react'
import { cn } from '../../lib/cn'

type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'id'> & {
  label: string
  hint?: string
  error?: string
  optional?: boolean
  prefix?: ReactNode
  suffix?: ReactNode
}

const fieldClass =
  'h-[var(--control-md)] w-full rounded-md border border-border-strong bg-raised px-4 text-base text-text ' +
  'placeholder:text-subtle focus:border-2 focus:border-text disabled:bg-disabled-surface disabled:text-disabled ' +
  'aria-invalid:border-2 aria-invalid:border-danger'

export function Input({
  label,
  hint,
  error,
  optional,
  prefix,
  suffix,
  className,
  ...rest
}: InputProps) {
  const id = useId()
  const hintId = `${id}-hint`
  const errorId = `${id}-error`
  const describedBy = [hint ? hintId : null, error ? errorId : null]
    .filter(Boolean)
    .join(' ') || undefined

  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-text">
        {label}
        {optional ? (
          <span className="font-normal text-subtle"> (optional)</span>
        ) : null}
      </label>
      {hint ? (
        <p id={hintId} className="caption mb-1.5 text-muted">
          {hint}
        </p>
      ) : null}
      <div className="relative">
        {prefix ? (
          <span className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-muted">
            {prefix}
          </span>
        ) : null}
        <input
          id={id}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
          className={cn(fieldClass, prefix ? 'pl-9' : null, suffix ? 'pr-9' : null)}
          {...rest}
        />
        {suffix ? (
          <span className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-muted">
            {suffix}
          </span>
        ) : null}
      </div>
      {error ? (
        <p id={errorId} className="mt-1.5 flex items-center gap-1.5 text-sm text-danger">
          <CircleAlert className="h-4 w-4 shrink-0" aria-hidden="true" />
          {error}
        </p>
      ) : null}
    </div>
  )
}
