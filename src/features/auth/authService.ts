const API_BASE = import.meta.env.VITE_API_BASE_URL as string | undefined

export type SignInPayload = { email: string; password: string }
export type SignUpPayload = {
  country_iso: string
  first_name: string
  last_name: string
  email: string
  password: string
  phone_number: string
}

export type AuthResult =
  | { ok: true; data: unknown }
  | { ok: false; reason: 'unconfigured' | 'invalid' | 'server'; message?: string }

async function post(path: string, body: unknown): Promise<AuthResult> {
  if (!API_BASE) return { ok: false, reason: 'unconfigured' }
  try {
    const response = await fetch(`${API_BASE}${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
    const data = await response.json().catch(() => null)
    if (!response.ok) {
      const message = (data as { message?: string } | null)?.message
      return {
        ok: false,
        reason: response.status === 401 || response.status === 422 ? 'invalid' : 'server',
        message: message ?? `Request failed (${response.status})`,
      }
    }
    return { ok: true, data }
  } catch {
    return { ok: false, reason: 'server', message: 'Could not reach the server.' }
  }
}

/** POST /api/v1/login { email, password } — real backend contract. */
export const signIn = (payload: SignInPayload) => post('/api/v1/login', payload)

/** POST /api/v1/create-account — real backend contract. */
export const signUp = (payload: SignUpPayload) => post('/api/v1/create-account', payload)

export const authConfigured = Boolean(API_BASE)
