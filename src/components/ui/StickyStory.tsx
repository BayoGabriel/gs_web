import { useEffect, useRef, useState } from 'react'
import { cn } from '../../lib/cn'
import { StepArt } from './StepArt'
import { Tooltip } from './Tooltip'

export type StoryStep = {
  index: string
  title: string
  body: string
  image: string
}

const stageLabels = ['Repo', 'Forks', 'Storefronts', 'Payments']

/** Sticky-scroll story: left column pins while the right steps through. */
export function StickyStory({ steps }: { steps: StoryStep[] }) {
  const [active, setActive] = useState(0)
  const [flipped, setFlipped] = useState<Record<number, boolean>>({})
  const listRef = useRef<HTMLOListElement>(null)

  useEffect(() => {
    const items = listRef.current?.querySelectorAll('[data-step]')
    if (!items?.length) return
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting)
            setActive(Number((e.target as HTMLElement).dataset.step))
        }),
      { rootMargin: '-45% 0px -45% 0px' },
    )
    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="grid gap-12 lg:grid-cols-2">
      <div className="lg:sticky lg:top-28 lg:self-start">
        <div className="relative hidden h-80 max-w-sm lg:block">
          {stageLabels.map((label, i) => {
            const step = steps[i]
            const isFlipped = Boolean(flipped[i])
            return (
              <Tooltip key={label} content={`Step ${i + 1} — flip for detail`}>
                <button
                  type="button"
                  data-flipped={isFlipped || undefined}
                  onClick={() =>
                    setFlipped((f) => ({ ...f, [i]: !f[i] }))
                  }
                  aria-label={`${label}: ${step?.title ?? ''}. Activate to flip the card.`}
                  className={cn(
                    'flip-card absolute h-32 w-52 text-left transition-[transform,opacity] duration-slow ease-standard',
                    'hover:z-20 focus-visible:z-20 data-[flipped]:z-20',
                    i <= active ? 'opacity-100' : 'translate-y-4 opacity-0',
                  )}
                  style={{
                    left: `calc(var(--stack-step-lg) * ${i} * 1.6)`,
                    top: `calc(var(--stack-step-lg) * ${i} * 1.6)`,
                  }}
                >
                  <span className="flip-inner block">
                    <span
                      className="flip-face rounded-xl border border-border bg-raised p-4"
                      style={{ boxShadow: '0 0 0 var(--stack-gap) var(--surface)' }}
                    >
                      <span className="caption block text-subtle">{label}</span>
                      <span className="mt-1 block font-mono text-xs text-muted">
                        {i === 0
                          ? '1 published'
                          : i === 1
                            ? `${active > 0 ? '3' : '0'} forks`
                            : i === 2
                              ? 'stores live'
                              : 'auto-split'}
                      </span>
                    </span>
                    <span className="flip-face flip-back rounded-xl border border-primary bg-primary p-4 text-on-primary">
                      <span className="caption block opacity-70">
                        Step {step?.index} — {label}
                      </span>
                      <span className="mt-1 line-clamp-3 block text-xs font-semibold leading-snug">
                        {step?.body}
                      </span>
                    </span>
                  </span>
                </button>
              </Tooltip>
            )
          })}
        </div>
      </div>
      <ol ref={listRef} className="space-y-16 lg:space-y-40 lg:py-24">
        {steps.map((step, i) => (
          <li key={step.index} data-step={i} className="max-w-md">
            <StepArt step={i + 1} />
            <p className="mt-6 font-mono text-sm text-subtle">{step.index}</p>
            <h3 className="h3 mt-2">{step.title}</h3>
            <p className="measure mt-3 leading-relaxed text-muted">{step.body}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}
