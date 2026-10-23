import { Photo } from './Photo'

type TestimonialCardProps = {
  quote: string
  name: string
  role: string
  portrait: string
  placeholder?: boolean
}

export function TestimonialCard({ quote, name, role, portrait, placeholder }: TestimonialCardProps) {
  return (
    <figure
      className="rounded-xl border border-border bg-raised p-6"
      data-placeholder={placeholder || undefined}
    >
      <blockquote className="text-base leading-relaxed text-text">
        “{quote}”
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3">
        <Photo slot={portrait} className="h-10 w-10 rounded-full" />
        <div>
          <p className="text-sm font-semibold">{name}</p>
          <p className="caption text-subtle">{role}</p>
        </div>
        {placeholder ? (
          <span className="ml-auto caption text-subtle">Placeholder</span>
        ) : null}
      </figcaption>
    </figure>
  )
}
