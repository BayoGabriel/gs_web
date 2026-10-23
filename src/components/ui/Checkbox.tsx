import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { Check } from 'lucide-react'
import { useId } from 'react'
import { cn } from '../../lib/cn'

type CheckboxProps = {
  label: string
  hint?: string
  checked?: boolean
  defaultChecked?: boolean
  onCheckedChange?: (checked: boolean) => void
  disabled?: boolean
  className?: string
}

export function Checkbox({
  label,
  hint,
  checked,
  defaultChecked,
  onCheckedChange,
  disabled,
  className,
}: CheckboxProps) {
  const id = useId()

  return (
    <div className={cn('flex min-h-[var(--control-md)] items-start gap-3', className)}>
      <CheckboxPrimitive.Root
        id={id}
        checked={checked}
        defaultChecked={defaultChecked}
        onCheckedChange={(value) => onCheckedChange?.(value === true)}
        disabled={disabled}
        className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-xs border border-border-strong bg-raised transition-colors duration-fast data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-on-primary disabled:border-border disabled:bg-disabled-surface disabled:text-disabled"
      >
        <CheckboxPrimitive.Indicator>
          <Check className="h-3.5 w-3.5" aria-hidden="true" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      <label htmlFor={id} className="cursor-pointer text-sm text-text">
        <span className="font-semibold">{label}</span>
        {hint ? <span className="mt-0.5 block text-muted">{hint}</span> : null}
      </label>
    </div>
  )
}
