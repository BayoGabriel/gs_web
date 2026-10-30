import { useEffect, useRef, useState } from 'react'

/** Counts up once when it scrolls into view. Static under reduced motion. */
export function StatNumber({ value, label }: { value: number; label: string }) {
  const ref = useRef<HTMLParagraphElement>(null)
  // Server and client must render the same value on the first pass — starting
  // at `value` keeps hydration clean; the count-up runs once in view.
  const [shown, setShown] = useState(value)

  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        const start = performance.now()
        const tick = (now: number) => {
          const p = Math.min(1, (now - start) / 900)
          setShown(Math.round(value * (1 - (1 - p) ** 3)))
          if (p < 1) requestAnimationFrame(tick)
        }
        setShown(0)
        requestAnimationFrame(tick)
      },
      { threshold: 0.4 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [value])

  return (
    <div>
      <p ref={ref} className="font-display text-5xl font-bold tabular-nums sm:text-6xl">
        {shown.toLocaleString()}
      </p>
      <p className="caption mt-2 text-muted">{label}</p>
    </div>
  )
}
