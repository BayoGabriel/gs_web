type ContactPayload = {
  name: string
  email: string
  topic: string
  message: string
}

type ContactResult =
  | { ok: true }
  | { ok: false; reason: 'unconfigured' | 'server'; message?: string }

const CONTACT_URL = import.meta.env.VITE_CONTACT_API_URL as string | undefined

/** POSTs a contact message when an endpoint is configured; never fakes success. */
export async function sendContactMessage(
  payload: ContactPayload,
): Promise<ContactResult> {
  if (!CONTACT_URL) return { ok: false, reason: 'unconfigured' }
  try {
    const response = await fetch(CONTACT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    if (!response.ok) {
      const message = await response
        .json()
        .then((body) => body?.message as string | undefined)
        .catch(() => undefined)
      return { ok: false, reason: 'server', message }
    }
    return { ok: true }
  } catch {
    return { ok: false, reason: 'server', message: 'Network error. Please try again.' }
  }
}
