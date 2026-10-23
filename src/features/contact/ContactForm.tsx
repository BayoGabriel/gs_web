import { useState, type FormEvent } from 'react'
import { Button } from '../../components/ui/Button'
import { Input } from '../../components/ui/Input'
import { Select } from '../../components/ui/Select'
import { Textarea } from '../../components/ui/Textarea'
import { sendContactMessage } from './contactService'

type Errors = Partial<Record<'name' | 'email' | 'message', string>>
type Status = 'idle' | 'submitting' | 'success' | 'unconfigured' | 'error'

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [serverMessage, setServerMessage] = useState('')
  const [errors, setErrors] = useState<Errors>({})

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()
    const next: Errors = {}
    if (!name) next.name = 'Enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(email)) next.email = 'Enter a valid email address.'
    if (message.length < 10) next.message = 'Write at least a sentence so we can help.'
    setErrors(next)
    if (Object.keys(next).length) return
    setStatus('submitting')
    const result = await sendContactMessage({
      name,
      email,
      topic: String(data.get('topic') ?? 'general'),
      message,
    })
    if (result.ok) setStatus('success')
    else {
      setStatus(result.reason === 'unconfigured' ? 'unconfigured' : 'error')
      setServerMessage(result.message ?? '')
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-6">
      <Input label="Name" name="name" required autoComplete="name" error={errors.name} />
      <Input label="Email" name="email" type="email" required autoComplete="email" error={errors.email} />
      <Select
        label="Topic"
        name="topic"
        options={[
          { value: 'general', label: 'General question' },
          { value: 'wholesale', label: 'Selling wholesale' },
          { value: 'reselling', label: 'Reselling' },
          { value: 'partnership', label: 'Partnership' },
        ]}
      />
      <Textarea
        label="Message"
        name="message"
        required
        error={errors.message}
        hint="Tell us what you are trying to do."
      />
      <Button type="submit" size="lg" loading={status === 'submitting'}>
        Send message
      </Button>
      <div aria-live="polite" className="space-y-3">
        {status === 'success' && (
          <p className="text-sm font-medium">Message sent. We reply within two working days.</p>
        )}
        {status === 'unconfigured' && (
          <p className="text-sm text-muted">
            Contact email is not connected yet. Write to{' '}
            <a className="underline" href="mailto:hello@gitshop.app">hello@gitshop.app</a>{' '}
            instead.
          </p>
        )}
        {status === 'error' && (
          <p className="text-sm text-danger">
            {serverMessage || 'Something went wrong. Please try again.'}
          </p>
        )}
      </div>
    </form>
  )
}
