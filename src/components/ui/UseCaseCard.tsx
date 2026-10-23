import { Link } from 'react-router'
import { Photo } from './Photo'

type UseCaseCardProps = {
  title: string
  body: string
  image: string
  to?: string
}

export function UseCaseCard({ title, body, image, to }: UseCaseCardProps) {
  const inner = (
    <>
      <Photo slot={image} />
      <div className="p-5">
        <h3 className="text-base font-semibold">{title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted">{body}</p>
      </div>
    </>
  )
  const cls =
    'block overflow-hidden rounded-xl border border-border bg-raised transition-transform duration-base ease-standard hover:-translate-y-1 motion-reduce:hover:translate-y-0'
  return to ? (
    <Link to={to} className={cls}>{inner}</Link>
  ) : (
    <div className={cls}>{inner}</div>
  )
}
