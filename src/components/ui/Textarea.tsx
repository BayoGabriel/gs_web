import { CircleAlert } from 'lucide-react'
import { useId, type TextareaHTMLAttributes } from 'react'

type TextareaProps = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'id'> & {
  label: string
  hint?: string
  error?: string
  optional?: boolean
}

export function Textarea({
  label,
  hint,
  error,
  optional,
  className,
  ...rest
}: TextareaProps) {
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
      <textarea
        id={id}
        aria-invalid={error ? true : undefined}
        aria-describedby={
          [hint ? hintId : null, error ? errorId : null].filter(Boolean).join(' ') ||
          undefined
        }
        className="min-h-32 w-full rounded-md border border-border-strong bg-raised px-4 py-3 text-base text-text placeholder:text-subtle focus:border-2 focus:border-text disabled:bg-disabled-surface disabled:text-disabled aria-invalid:border-2 aria-invalid:border-danger"
        {...rest}
      />
      {error ? (
        <p id={errorId} className="mt-1.5 flex items-center gap-1.5 text-sm text-danger">
          <CircleAlert className="h-4 w-4 shrink-0" aria-hidden="true" />
          {error}
        </p>
      ) : null}
    </div>
  )
}
