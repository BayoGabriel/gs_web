import { useEffect, useState, type ChangeEvent, type FormEvent } from 'react'
import { submitWaitlistEntry } from '../services/waitlistService'
import { subscribeToWaitlistIntent } from '../services/waitlistIntent'
import type {
  SubmitStatus,
  WaitlistErrors,
  WaitlistValues,
} from '../types/waitlist.types'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const initialValues: WaitlistValues = {
  name: '',
  email: '',
  role: '',
  business: '',
}

function validate(values: WaitlistValues): WaitlistErrors {
  const errors: WaitlistErrors = {}
  if (!values.name.trim()) errors.name = 'Enter your full name.'
  if (!values.email.trim()) errors.email = 'Enter your email address.'
  else if (!EMAIL_PATTERN.test(values.email.trim()))
    errors.email = 'Enter a valid email address.'
  if (!values.role) errors.role = 'Choose the option that fits you best.'
  return errors
}

export function useWaitlistForm() {
  const [values, setValues] = useState<WaitlistValues>(initialValues)
  const [errors, setErrors] = useState<WaitlistErrors>({})
  const [status, setStatus] = useState<SubmitStatus>('idle')

  useEffect(
    () =>
      subscribeToWaitlistIntent((role) =>
        setValues((current) => ({ ...current, role })),
      ),
    [],
  )

  const update = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: undefined }))
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setStatus('submitting')
    const result = await submitWaitlistEntry(values)
    setStatus(
      result.ok ? 'success' : result.reason === 'server' ? 'error' : result.reason,
    )
  }

  return { values, errors, status, update, handleSubmit }
}
