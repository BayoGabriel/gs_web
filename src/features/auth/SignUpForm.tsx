import { useState, type FormEvent } from 'react'
import { Link } from 'react-router'
import { Button } from '../../components/ui/Button'
import { Input } from '../../components/ui/Input'
import { Select } from '../../components/ui/Select'
import { signUp } from './authService'

type Status = 'idle' | 'submitting' | 'error' | 'done'
type Errors = Partial<Record<'first' | 'last' | 'email' | 'password' | 'phone', string>>

const EMAIL_RE = /^\S+@\S+\.\S+$/

export function SignUpForm({ role }: { role?: 'seller' | 'wholesaler' }) {
  const [status, setStatus] = useState<Status>('idle')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState<Errors>({})

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const fields = {
      first: String(data.get('first_name') ?? '').trim(),
      last: String(data.get('last_name') ?? '').trim(),
      email: String(data.get('email') ?? '').trim(),
      password: String(data.get('password') ?? ''),
      phone: String(data.get('phone_number') ?? '').trim(),
    }
    const next: Errors = {}
    if (!fields.first) next.first = 'Enter your first name.'
    if (!fields.last) next.last = 'Enter your last name.'
    if (!EMAIL_RE.test(fields.email)) next.email = 'Enter a valid email address.'
    if (fields.password.length < 8) next.password = 'Use at least 8 characters.'
    if (!fields.phone) next.phone = 'Enter your phone number.'
    setErrors(next)
    if (Object.keys(next).length) return
    setStatus('submitting')
    setMessage('')
    const result = await signUp({
      country_iso: String(data.get('country_iso') ?? 'NG'),
      first_name: fields.first,
      last_name: fields.last,
      email: fields.email,
      password: fields.password,
      phone_number: fields.phone,
    })
    if (result.ok) {
      setStatus('done')
      setMessage('Account created. Check your email to activate it.')
    } else {
      setStatus('error')
      setMessage(
        result.reason === 'unconfigured'
          ? 'Account creation is not connected to the API yet. Set VITE_API_BASE_URL.'
          : (result.message ?? 'Could not create the account. Try again.'),
      )
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate className="mt-8 space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <Input label="First name" name="first_name" required autoComplete="given-name" error={errors.first} />
        <Input label="Last name" name="last_name" required autoComplete="family-name" error={errors.last} />
      </div>
      <Select label="Country" name="country_iso" options={[{ value: 'NG', label: 'Nigeria' }]} />
      <Input label="Email" name="email" type="email" required autoComplete="email" inputMode="email" error={errors.email} />
      <Input label="Phone number" name="phone_number" type="tel" required autoComplete="tel" inputMode="tel" error={errors.phone} />
      <Input
        label="Password"
        name="password"
        type="password"
        required
        autoComplete="new-password"
        hint="At least 8 characters."
        error={errors.password}
      />
      <Button type="submit" size="lg" className="w-full" loading={status === 'submitting'}>
        Create account
      </Button>
      <p aria-live="polite" className="text-sm">
        {status === 'error' && <span className="text-danger">{message}</span>}
        {status === 'done' && <span className="font-medium">{message}</span>}
      </p>
      <input type="hidden" name="role" value={role ?? 'seller'} />
      <p className="caption text-subtle">
        By creating an account you agree to the{' '}
        <Link to="/terms" className="underline">Terms</Link> and{' '}
        <Link to="/privacy" className="underline">Privacy policy</Link>.
      </p>
    </form>
  )
}
