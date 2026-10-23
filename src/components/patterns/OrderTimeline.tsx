import { Check } from 'lucide-react'
import { cn } from '../../lib/cn'

export type OrderStep = {
  id: string
  label: string
  actor: string
  timestamp?: string
  state: 'completed' | 'current' | 'upcoming'
}

export function OrderTimeline({ steps }: { steps: OrderStep[] }) {
  return (
    <ol>
      {steps.map((step, index) => (
        <li
          key={step.id}
          className="flex gap-4 pb-6 last:pb-0"
          aria-current={step.state === 'current' ? 'step' : undefined}
        >
          <span
            aria-hidden="true"
            className="relative flex w-5 shrink-0 justify-center self-stretch"
          >
            {index < steps.length - 1 ? (
              <span className="absolute inset-y-0 w-0.5 bg-border" />
            ) : null}
            <span
              className={cn(
                'z-10 mt-1 flex h-5 w-5 items-center justify-center rounded-full border-2',
                step.state === 'completed' && 'border-primary bg-primary text-on-primary',
                step.state === 'current' && 'border-text bg-bg',
                step.state === 'upcoming' && 'border-border bg-bg',
              )}
            >
              {step.state === 'completed' ? (
                <Check className="h-3 w-3" strokeWidth={3} />
              ) : null}
            </span>
          </span>
          <div>
            <p
              className={cn(
                'text-sm font-semibold',
                step.state === 'upcoming' ? 'text-subtle' : 'text-text',
              )}
            >
              {step.label}
            </p>
            <p className="caption mt-0.5 text-subtle">
              {step.actor}
              {step.timestamp ? ` · ${step.timestamp}` : ''}
            </p>
          </div>
        </li>
      ))}
    </ol>
  )
}
