import * as SwitchPrimitive from '@radix-ui/react-switch'
import { useId } from 'react'
import { cn } from '../../lib/cn'

type SwitchProps = {
  label: string
  stateLabel?: string
  checked?: boolean
  defaultChecked?: boolean
  onCheckedChange?: (checked: boolean) => void
  disabled?: boolean
  className?: string
}

export function Switch({
  label,
  stateLabel,
  checked,
  defaultChecked,
  onCheckedChange,
  disabled,
  className,
}: SwitchProps) {
  const id = useId()

  return (
    <div className={cn('flex min-h-[var(--control-md)] items-center gap-3', className)}>
      <SwitchPrimitive.Root
        id={id}
        checked={checked}
        defaultChecked={defaultChecked}
        onCheckedChange={onCheckedChange}
        disabled={disabled}
        className="relative h-6 w-11 shrink-0 rounded-full border border-border-strong bg-surface transition-colors duration-fast data-[state=checked]:border-primary data-[state=checked]:bg-primary disabled:opacity-50"
      >
        <SwitchPrimitive.Thumb className="block h-4 w-4 translate-x-1 rounded-full bg-text transition-transform duration-base data-[state=checked]:translate-x-6 data-[state=checked]:bg-on-primary" />
      </SwitchPrimitive.Root>
      <label htmlFor={id} className="cursor-pointer text-sm font-semibold text-text">
        {label}
        {stateLabel ? (
          <span className="ml-1.5 font-normal text-muted">{stateLabel}</span>
        ) : null}
      </label>
    </div>
  )
}
