type WaitlistFieldProps = {
  id: string
  label: string
  name: string
  type?: string
  value: string
  error?: string
  required?: boolean
  autoComplete?: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const inputClass =
  'h-12 w-full rounded-xl border border-border bg-surface px-4 text-[15px] text-ink ' +
  'placeholder:text-muted/70 focus:border-forest focus:outline-2 focus:outline-forest/30 ' +
  'aria-invalid:border-clay'

export function WaitlistField({
  id,
  label,
  name,
  type = 'text',
  value,
  error,
  required,
  autoComplete,
  onChange,
}: WaitlistFieldProps) {
  const errorId = `${id}-error`
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-sm font-semibold text-ink"
      >
        {label}
        {required ? <span className="text-clay-deep"> *</span> : null}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        required={required}
        autoComplete={autoComplete}
        onChange={onChange}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={inputClass}
      />
      {error ? (
        <p id={errorId} className="mt-1.5 text-sm text-clay-deep">
          {error}
        </p>
      ) : null}
    </div>
  )
}
