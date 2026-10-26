import { useInView } from '../../hooks/useInView'
import { cn } from '../../lib/cn'

type WaveTextProps = {
  text: string
  className?: string
  /** Delay between each character's pulse in ms. */
  stagger?: number
}

/**
 * A gentle scale pulse that travels through the text letter by letter —
 * the iOS "spell the word" feel. Static under reduced motion.
 */
export function WaveText({ text, className, stagger = 55 }: WaveTextProps) {
  const { ref, inView } = useInView<HTMLSpanElement>(0.6)
  const words = text.split(' ')
  const starts: number[] = []
  words.reduce((acc, word, i) => {
    starts[i] = acc
    return acc + word.length + 1
  }, 0)
  return (
    <span ref={ref} className={cn('wave-root', inView && 'wave-in', className)} aria-label={text}>
      {words.map((word, wi) => {
        const start = starts[wi]
        return (
          <span key={wi} aria-hidden="true" style={{ display: 'inline' }}>
            <span className="wave-word">
              {[...word].map((ch, i) => (
                <span
                  key={`${ch}-${i}`}
                  className="wave-char"
                  style={{ '--wave-d': `${(start + i) * stagger}ms` } as React.CSSProperties}
                >
                  {ch}
                </span>
              ))}
            </span>
            {wi < words.length - 1 ? ' ' : null}
          </span>
        )
      })}
    </span>
  )
}
