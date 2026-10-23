import { useInView } from '../../hooks/useInView'
import { cn } from '../../lib/cn'

type WordRevealProps = {
  /** Plain text — words rise in one at a time. */
  text: string
  className?: string
  /** Stagger between words in ms. */
  stagger?: number
  /** Initial delay before the first word. */
  delay?: number
  /** Wipe a thin line under the text after the words land. */
  underline?: boolean
}

/** Per-word clip reveal on scroll into view. Static under reduced motion. */
export function WordReveal({ text, className, stagger = 90, delay = 0, underline }: WordRevealProps) {
  const { ref, inView } = useInView<HTMLSpanElement>(0.6)
  const words = text.split(' ')
  return (
    <span
      ref={ref}
      className={cn('wr-root', inView && 'wr-in', underline && 'wr-underline', className)}
      style={{ '--wr-line-delay': `${delay + words.length * stagger + 240}ms` } as React.CSSProperties}
    >
      {words.map((word, i) => {
        const dotted = word.endsWith('.')
        return (
          <span key={`${word}-${i}`}>
            <span className="wr-clip">
              <span
                className="wr-word"
                style={{ '--wr-delay': `${delay + i * stagger}ms` } as React.CSSProperties}
              >
                {dotted ? word.slice(0, -1) : word}
                {dotted ? (
                  <span className="wr-dot" aria-hidden="true">
                    .
                  </span>
                ) : null}
              </span>
            </span>
            {i < words.length - 1 ? ' ' : null}
          </span>
        )
      })}
    </span>
  )
}
