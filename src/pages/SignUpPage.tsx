import { Link, useSearchParams } from 'react-router'
import { Section } from '../components/layout/Section'
import { Photo } from '../components/ui/Photo'
import { authConfigured } from '../features/auth/authService'
import { SignUpForm } from '../features/auth/SignUpForm'
import { cn } from '../lib/cn'
import { useDocumentMeta } from '../hooks/useDocumentMeta'

const roles = [
  { id: 'seller', label: 'I want to sell', body: 'Fork catalogues and open your own store.' },
  { id: 'wholesaler', label: 'I want to publish', body: 'Put your catalogue in front of sellers.' },
] as const

export default function SignUpPage() {
  useDocumentMeta('Create account', 'Create a GitShop account to publish repos or fork catalogues and start selling.')
  const [params] = useSearchParams()
  const role = params.get('role') === 'wholesaler' ? 'wholesaler' : 'seller'

  return (
    <Section>
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="mx-auto w-full max-w-md">
          <h1 className="h1">Create your account</h1>
          <p className="mt-3 text-sm text-muted">
            Already have one?{' '}
            <Link to="/signin" className="font-semibold underline underline-offset-4">Sign in</Link>
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3" role="group" aria-label="What brings you here">
            {roles.map((item) => (
              <Link
                key={item.id}
                to={`/signup?role=${item.id}`}
                aria-current={role === item.id ? 'true' : undefined}
                className={cn(
                  'rounded-lg border p-4 transition-colors duration-[var(--duration-fast)]',
                  role === item.id ? 'border-primary bg-primary text-on-primary' : 'border-border-strong hover:bg-surface',
                )}
              >
                <span className="block text-sm font-semibold">{item.label}</span>
                <span className={cn('mt-1 block text-xs', role === item.id ? 'text-on-primary/80' : 'text-muted')}>
                  {item.body}
                </span>
              </Link>
            ))}
          </div>
          {!authConfigured && (
            <p className="mt-5 rounded-md border border-border bg-raised p-3 text-sm text-muted">
              The app API is not configured for this build (VITE_API_BASE_URL), so
              this form cannot complete yet.
            </p>
          )}
          <SignUpForm role={role} />
        </div>
        <Photo slot={role === 'wholesaler' ? 'wholesaler-section' : 'seller-section'} className="mx-auto hidden w-full max-w-md lg:block" />
      </div>
    </Section>
  )
}
