import { imageSlots } from '../../content/images'
import { cn } from '../../lib/cn'

type PhotoProps = {
  slot: keyof typeof imageSlots | string
  className?: string
  /** Only for the LCP image: eager load + high priority. */
  priority?: boolean
  decorative?: boolean
  sizes?: string
}

/** Manifest-driven image: reserved space, lazy by default, theme treatment. */
export function Photo({ slot, className, priority, decorative, sizes }: PhotoProps) {
  const meta = imageSlots[slot]
  if (!meta) return null
  const [w, h] = meta.aspect.split('/').map(Number)
  const callerRadius = className?.includes('rounded')
  const callerSize = className ? /\b[hw]-/.test(className) : false

  return (
    <img
      src={meta.src}
      alt={decorative ? '' : meta.alt}
      width={w * 400}
      height={h * 400}
      sizes={sizes}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={priority ? 'high' : 'auto'}
      className={cn(
        'block object-cover',
        !callerSize && 'h-auto w-full',
        !callerRadius && 'rounded-xl',
        meta.treatment !== 'product' && 'photo-edit grayscale-[1] contrast-[1.05]',
        className,
      )}
      style={callerSize ? undefined : { aspectRatio: `${w}/${h}` }}
    />
  )
}
