import { useState, type FormEvent } from 'react'
import { Link } from 'react-router'
import { Section } from '../components/layout/Section'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'
import { Photo } from '../components/ui/Photo'
import { authConfigured, signIn } from '../features/auth/authService'
import { useDocumentMeta } from '../hooks/useDocumentMeta'

type Status = 'idle' | 'submitting' | 'error' | 'done'

export default function SignInPage() {
  useDocumentMeta('Sign in', 'Sign in to your GitShop account.')
  const [status, setStatus] = useState<Status>('idle')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({})

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const email = String(data.get('email') ?? '').trim()
    const password = String(data.get('password') ?? '')
    const next: typeof errors = {}
    if (!/^\S+@\S+\.\S+$/.test(email)) next.email = 'Enter a valid email address.'
    if (!password) next.password = 'Enter your password.'
    setErrors(next)
    if (Object.keys(next).length) return
    setStatus('submitting')
    setMessage('')
    const result = await signIn({ email, password })
    if (result.ok) {
      setStatus('done')
      setMessage('Signed in. Dashboard is coming soon.')
    } else {
      setStatus('error')
      setMessage(
        result.reason === 'unconfigured'
          ? 'Sign-in is not connected to the API yet. Set VITE_API_BASE_URL.'
          : (result.message ?? 'Sign-in failed. Check your details and try again.'),
      )
    }
  }

  const form = (
    <div className="mx-auto w-full max-w-md">
      <h1 className="h1">Sign in</h1>
      <p className="mt-3 text-sm text-muted">
        New to GitShop?{' '}
        <Link to="/signup" className="font-semibold underline underline-offset-4">
          Create an account
        </Link>
      </p>
      {!authConfigured && (
        <p className="mt-5 rounded-md border border-border bg-raised p-3 text-sm text-muted">
          The app API is not configured for this build (VITE_API_BASE_URL), so
          this form cannot complete yet.
        </p>
      )}
      <form onSubmit={onSubmit} noValidate className="mt-8 space-y-6">
        <Input label="Email" name="email" type="email" required autoComplete="email" inputMode="email" error={errors.email} />
        <Input label="Password" name="password" type="password" required autoComplete="current-password" error={errors.password} />
        <Button type="submit" size="lg" className="w-full" loading={status === 'submitting'}>
          Sign in
        </Button>
        <p aria-live="polite" className="text-sm">
          {status === 'error' && <span className="text-danger">{message}</span>}
          {status === 'done' && <span className="font-medium">{message}</span>}
        </p>
      </form>
    </div>
  )

  return (
    <Section>
      <div className="grid items-center gap-12 lg:grid-cols-2">
        {form}
        <Photo slot="usecase-shop" className="mx-auto hidden w-full max-w-md lg:block" />
      </div>
    </Section>
  )
}
