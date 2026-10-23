import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../../hooks/useTheme'
import { cn } from '../../lib/cn'
import { Tooltip } from './Tooltip'

const options = [
  { value: 'light' as const, Icon: Sun, label: 'Light theme' },
  { value: 'dark' as const, Icon: Moon, label: 'Dark theme' },
]

/**
 * Segmented light/dark pill with a sliding thumb. The site defaults to the
 * system theme; choosing a side stores an explicit preference.
 */
export function ThemeToggle({ className }: { className?: string }) {
  const { resolved, setMode } = useTheme()
  const dark = resolved === 'dark'

  return (
    <div
      role="radiogroup"
      aria-label="Theme"
      className={cn(
        'relative inline-flex rounded-full border border-border bg-surface p-1',
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'absolute inset-y-1 left-1 w-9 rounded-full border border-border-strong bg-raised',
          'transition-transform duration-base ease-decelerate',
          dark && 'translate-x-9',
        )}
      />
      {options.map(({ value, Icon, label }) => {
        const active = (value === 'dark') === dark
        return (
          <Tooltip key={value} content={label}>
            <button
              type="button"
              role="radio"
              aria-checked={active}
              aria-label={label}
              onClick={() => setMode(value)}
              className={cn(
                'relative z-10 flex h-8 w-9 items-center justify-center rounded-full',
                'transition-colors duration-fast',
                active ? 'text-text' : 'text-subtle hover:text-muted',
              )}
            >
              <Icon className="h-4 w-4" aria-hidden="true" />
            </button>
          </Tooltip>
        )
      })}
    </div>
  )
}
