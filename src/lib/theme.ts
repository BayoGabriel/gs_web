export type ThemeMode = 'light' | 'dark' | 'system'
export type ResolvedTheme = 'light' | 'dark'

const STORAGE_KEY = 'gitshop-theme'

const darkQuery = () => window.matchMedia('(prefers-color-scheme: dark)')

export function getThemeMode(): ThemeMode {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored === 'light' || stored === 'dark' ? stored : 'system'
  } catch {
    return 'system'
  }
}

export function resolveTheme(mode: ThemeMode): ResolvedTheme {
  if (mode === 'system')
    return typeof window !== 'undefined' && darkQuery().matches ? 'dark' : 'light'
  return mode
}

let themeAnimTimer: number | undefined

export function applyTheme(mode: ThemeMode) {
  const root = document.documentElement
  root.classList.add('gs-theme-anim')
  root.dataset.theme = resolveTheme(mode)
  clearTimeout(themeAnimTimer)
  themeAnimTimer = window.setTimeout(() => root.classList.remove('gs-theme-anim'), 450)
}

export function setThemeMode(mode: ThemeMode) {
  try {
    if (mode === 'system') localStorage.removeItem(STORAGE_KEY)
    else localStorage.setItem(STORAGE_KEY, mode)
  } catch {
    /* storage unavailable — theme still applies for this session */
  }
  applyTheme(mode)
}

/** Subscribe to OS theme changes; used while mode is 'system'. */
export function onSystemThemeChange(listener: () => void): () => void {
  const query = darkQuery()
  query.addEventListener('change', listener)
  return () => query.removeEventListener('change', listener)
}
