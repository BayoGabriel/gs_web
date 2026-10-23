import { cn } from '../../lib/cn'

type AvatarSize = 24 | 32 | 40 | 56 | 96

type AvatarProps = {
  name: string
  /** Organisations use a rounded square (26.5%); users a circle. */
  kind?: 'user' | 'org'
  size?: AvatarSize
  src?: string
  className?: string
}

const sizeClass: Record<AvatarSize, string> = {
  24: 'h-6 w-6 text-[0.6rem]',
  32: 'h-8 w-8 text-xs',
  40: 'h-10 w-10 text-sm',
  56: 'h-14 w-14 text-base',
  96: 'h-24 w-24 text-2xl',
}

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join('')
}

export function Avatar({ name, kind = 'user', size = 32, src, className }: AvatarProps) {
  const shape = kind === 'org' ? 'rounded-md' : 'rounded-full'
  if (src) {
    return (
      <img
        src={src}
        alt=""
        width={size}
        height={size}
        className={cn('shrink-0 object-cover', shape, sizeClass[size], className)}
      />
    )
  }
  return (
    <span
      role="img"
      aria-label={name}
      className={cn(
        'flex shrink-0 items-center justify-center bg-surface font-semibold text-text',
        shape,
        sizeClass[size],
        className,
      )}
    >
      {initials(name)}
    </span>
  )
}
