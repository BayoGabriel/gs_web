import { ChevronDown, CircleAlert } from 'lucide-react'
import { useId, type SelectHTMLAttributes } from 'react'
import { cn } from '../../lib/cn'

type SelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'id'> & {
  label: string
  hint?: string
  error?: string
  optional?: boolean
  options: { value: string; label: string }[]
}

const fieldClass =
  'h-[var(--control-md)] w-full appearance-none rounded-md border border-border-strong bg-raised pr-10 pl-4 text-base text-text ' +
  'focus:border-2 focus:border-text disabled:bg-disabled-surface disabled:text-disabled ' +
  'aria-invalid:border-2 aria-invalid:border-danger'

/** Native select styled to the system — accessible and iOS-safe. */
export function Select({
  label,
  hint,
  error,
  optional,
  options,
  className,
  ...rest
}: SelectProps) {
  const id = useId()
  const hintId = `${id}-hint`
  const errorId = `${id}-error`

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
        <select
          id={id}
          aria-invalid={error ? true : undefined}
          aria-describedby={
            [hint ? hintId : null, error ? errorId : null]
              .filter(Boolean)
              .join(' ') || undefined
          }
          className={cn(fieldClass)}
          {...rest}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown
          className="pointer-events-none absolute top-1/2 right-3 h-5 w-5 -translate-y-1/2 text-muted"
          aria-hidden="true"
        />
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
