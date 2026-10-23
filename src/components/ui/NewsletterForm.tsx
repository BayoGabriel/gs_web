import { useState, type FormEvent } from 'react'
import { buttonClasses } from './buttonClasses'

/** Footer newsletter field — honest when no endpoint is configured. */
export function NewsletterForm({ className }: { className?: string }) {
  const [state, setState] = useState<'idle' | 'done' | 'invalid'>('idle')

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const email = String(new FormData(event.currentTarget).get('email') ?? '')
    setState(/^\S+@\S+\.\S+$/.test(email.trim()) ? 'done' : 'invalid')
  }

  return (
    <form onSubmit={onSubmit} noValidate className={className}>
      <label htmlFor="newsletter-email" className="caption block text-subtle">
        Updates, occasionally
      </label>
      <div className="mt-2 flex gap-2">
        <input
          id="newsletter-email"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="you@example.com"
          className="h-[var(--control-md)] min-w-0 flex-1 rounded-sm border border-border-strong bg-raised px-3.5 text-sm text-text placeholder:text-subtle focus:border-2 focus:border-text"
        />
        <button type="submit" className={buttonClasses({ size: 'md', className: 'shrink-0' })}>
          Subscribe
        </button>
      </div>
      <p aria-live="polite" className="caption mt-2 text-subtle">
        {state === 'done' ? 'Noted. This list is not wired up yet — nothing was sent.' : ''}
        {state === 'invalid' ? <span className="text-danger">Enter a valid email address.</span> : ''}
      </p>
    </form>
  )
}
