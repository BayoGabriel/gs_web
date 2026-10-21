import { Button } from '../../../components/ui/Button'
import { useWaitlistForm } from '../hooks/useWaitlistForm'
import type { WaitlistRole } from '../types/waitlist.types'
import { WaitlistField } from './WaitlistField'

const roles: { value: WaitlistRole; label: string }[] = [
  { value: 'supplier', label: 'Supplier / wholesaler' },
  { value: 'seller', label: 'Retailer / dropshipper' },
  { value: 'other', label: 'Other' },
]

const statusMessages: Record<string, string> = {
  success: "You're on the early-access list. We'll be in touch.",
  unconfigured:
    'Early-access registration is not connected yet. This form is ready for integration — please check back soon.',
  error: 'Something went wrong while submitting. Please try again.',
  submitting: 'Submitting…',
}

export function WaitlistForm() {
  const { values, errors, status, update, handleSubmit } = useWaitlistForm()
  const isSubmitting = status === 'submitting'

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <WaitlistField
          id="wl-name"
          name="name"
          label="Full name"
          value={values.name}
          error={errors.name}
          required
          autoComplete="name"
          onChange={update}
        />
        <WaitlistField
          id="wl-email"
          name="email"
          label="Email address"
          type="email"
          value={values.email}
          error={errors.email}
          required
          autoComplete="email"
          onChange={update}
        />
      </div>

      <fieldset>
        <legend className="mb-1.5 text-sm font-semibold text-ink">
          I am a… <span className="text-clay-deep">*</span>
        </legend>
        <div className="flex flex-wrap gap-2">
          {roles.map((role) => (
            <label
              key={role.value}
              className="flex cursor-pointer items-center gap-2 rounded-xl border border-border bg-surface px-4 py-2.5 text-sm font-medium text-ink has-checked:border-forest has-checked:bg-pale has-checked:text-forest"
            >
              <input
                type="radio"
                name="role"
                value={role.value}
                checked={values.role === role.value}
                onChange={update}
                className="accent-forest"
              />
              {role.label}
            </label>
          ))}
        </div>
        {errors.role ? (
          <p className="mt-1.5 text-sm text-clay-deep">{errors.role}</p>
        ) : null}
      </fieldset>

      <WaitlistField
        id="wl-business"
        name="business"
        label="Business name (optional)"
        value={values.business}
        autoComplete="organization"
        onChange={update}
      />

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting…' : 'Get early access'}
        </Button>
        <p role="status" aria-live="polite" className="text-sm text-muted">
          {statusMessages[status] ?? ''}
        </p>
      </div>
    </form>
  )
}
