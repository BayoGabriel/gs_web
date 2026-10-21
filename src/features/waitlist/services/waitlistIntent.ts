import type { WaitlistRole } from '../types/waitlist.types'

/**
 * Lets audience-specific CTAs ("I'm a supplier / I'm a seller") pre-select
 * the matching role in the early-access form without a router or global
 * store. The form listens for this event while mounted.
 */
const INTENT_EVENT = 'gitshop:waitlist-intent'

export function announceWaitlistIntent(role: WaitlistRole) {
  window.dispatchEvent(new CustomEvent<WaitlistRole>(INTENT_EVENT, { detail: role }))
}

export function subscribeToWaitlistIntent(
  listener: (role: WaitlistRole) => void,
): () => void {
  const handler = (event: Event) => {
    listener((event as CustomEvent<WaitlistRole>).detail)
  }
  window.addEventListener(INTENT_EVENT, handler)
  return () => window.removeEventListener(INTENT_EVENT, handler)
}
