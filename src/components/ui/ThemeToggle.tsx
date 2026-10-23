import { Monitor, Moon, Sun } from 'lucide-react'
import { useTheme } from '../../hooks/useTheme'
import type { ThemeMode } from '../../lib/theme'

const order: ThemeMode[] = ['system', 'light', 'dark']
const icons = { system: Monitor, light: Sun, dark: Moon }
const labels = { system: 'System', light: 'Light', dark: 'Dark' }

/** Cycles system → light → dark. Persists the choice. */
export function ThemeToggle({ className }: { className?: string }) {
  const { mode, setMode } = useTheme()
  const next = order[(order.indexOf(mode) + 1) % order.length]
  const Icon = icons[mode]

  return (
    <button
      type="button"
      onClick={() => setMode(next)}
      aria-label={`Theme: ${labels[mode]}. Activate to switch to ${labels[next]}.`}
      className={
        'inline-flex h-[var(--control-md)] items-center gap-2 rounded-md px-3 text-sm ' +
        'font-semibold text-text hover:bg-hover-surface active:bg-pressed-surface ' +
        'transition-colors duration-fast ' + (className ?? '')
      }
    >
      <Icon className="h-4 w-4" aria-hidden="true" />
      <span>{labels[mode]}</span>
    </button>
  )
}
