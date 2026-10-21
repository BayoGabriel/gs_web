import type { SubmitResult, WaitlistValues } from '../types/waitlist.types'

/**
 * Early-access submission endpoint.
 *
 * Integration point: set `VITE_WAITLIST_API_URL` to an HTTPS endpoint that
 * accepts `POST { name, email, role, business }` and returns a 2xx status.
 * Until it is configured, submissions honestly report `unconfigured` so the
 * UI never claims a registration that did not happen. Never put secrets in
 * VITE_* variables — they ship to the client.
 */
const endpoint = import.meta.env.VITE_WAITLIST_API_URL as string | undefined

export async function submitWaitlistEntry(
  values: WaitlistValues,
): Promise<SubmitResult> {
  if (!endpoint) return { ok: false, reason: 'unconfigured' }

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    })
    return response.ok ? { ok: true } : { ok: false, reason: 'server' }
  } catch {
    return { ok: false, reason: 'server' }
  }
}
