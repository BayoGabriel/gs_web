export type WaitlistRole = 'supplier' | 'seller' | 'other'

export type WaitlistValues = {
  name: string
  email: string
  role: WaitlistRole | ''
  business: string
}

export type WaitlistErrors = Partial<Record<keyof WaitlistValues, string>>

export type SubmitStatus =
  | 'idle'
  | 'submitting'
  | 'success'
  | 'error'
  | 'unconfigured'

export type SubmitResult =
  | { ok: true }
  | { ok: false; reason: 'unconfigured' | 'server' }
