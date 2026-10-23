import { useEffect, useRef, useState } from 'react'
import { cn } from '../../lib/cn'
import { Photo } from './Photo'

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
        <div
          aria-hidden="true"
          className="relative hidden h-72 max-w-sm lg:block"
        >
          {stageLabels.map((label, i) => (
            <div
              key={label}
              className={cn(
                'absolute w-52 rounded-xl border border-border bg-raised p-4 transition-all duration-slow ease-standard',
                i <= active ? 'opacity-100' : 'translate-y-4 opacity-0',
              )}
              style={{
                left: `calc(var(--stack-step-lg) * ${i} * 1.6)`,
                top: `calc(var(--stack-step-lg) * ${i} * 1.6)`,
                boxShadow: '0 0 0 var(--stack-gap) var(--surface)',
              }}
            >
              <p className="caption text-subtle">{label}</p>
              <p className="mt-1 font-mono text-xs text-muted">
                {i === 0 ? '1 published' : i === 1 ? `${active > 0 ? '3' : '0'} forks` : i === 2 ? 'stores live' : 'auto-split'}
              </p>
            </div>
          ))}
        </div>
      </div>
      <ol ref={listRef} className="space-y-16 lg:space-y-40 lg:py-24">
        {steps.map((step, i) => (
          <li key={step.index} data-step={i} className="max-w-md">
            <Photo slot={step.image} />
            <p className="mt-6 font-mono text-sm text-subtle">{step.index}</p>
            <h3 className="h3 mt-2">{step.title}</h3>
            <p className="measure mt-3 leading-relaxed text-muted">{step.body}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}
