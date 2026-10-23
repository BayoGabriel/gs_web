import * as SwitchPrimitive from '@radix-ui/react-switch'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../../hooks/useTheme'

/**
 * Light/dark switch. The site defaults to the system theme; the switch
 * flips it to an explicit choice (there is no visible "system" option).
 */
export function ThemeToggle({ className }: { className?: string }) {
  const { resolved, setMode } = useTheme()
  const dark = resolved === 'dark'

  return (
    <div
      className={
        'flex h-[var(--control-md)] items-center gap-2 text-muted ' + (className ?? '')
      }
    >
      <Sun className="h-4 w-4" aria-hidden="true" />
      <SwitchPrimitive.Root
        checked={dark}
        onCheckedChange={(checked) => setMode(checked ? 'dark' : 'light')}
        aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
        className="relative h-6 w-11 shrink-0 rounded-full border border-border-strong bg-surface transition-colors duration-fast data-[state=checked]:border-primary data-[state=checked]:bg-primary"
      >
        <SwitchPrimitive.Thumb className="block h-4 w-4 translate-x-1 rounded-full bg-text transition-transform duration-base data-[state=checked]:translate-x-6 data-[state=checked]:bg-on-primary" />
      </SwitchPrimitive.Root>
      <Moon className="h-4 w-4" aria-hidden="true" />
    </div>
  )
}
