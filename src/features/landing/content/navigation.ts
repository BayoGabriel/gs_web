import type { NavItem } from '../state/landing.types'

export const EARLY_ACCESS_HREF = '#early-access' as const

export const navItems: NavItem[] = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'For suppliers', href: '#for-suppliers' },
  { label: 'For sellers', href: '#for-sellers' },
  { label: 'FAQ', href: '#faq' },
]
