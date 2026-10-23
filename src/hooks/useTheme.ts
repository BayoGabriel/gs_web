import { useEffect, useState } from 'react'
import {
  applyTheme,
  getThemeMode,
  onSystemThemeChange,
  resolveTheme,
  setThemeMode,
  type ResolvedTheme,
  type ThemeMode,
} from '../lib/theme'

export function useTheme(): {
  mode: ThemeMode
  resolved: ResolvedTheme
  setMode: (mode: ThemeMode) => void
} {
  const [mode, setModeState] = useState<ThemeMode>(getThemeMode)

  useEffect(() => {
    if (mode !== 'system') return
    return onSystemThemeChange(() => applyTheme('system'))
  }, [mode])

  const setMode = (next: ThemeMode) => {
    setThemeMode(next)
    setModeState(next)
  }

  return { mode, resolved: resolveTheme(mode), setMode }
}
