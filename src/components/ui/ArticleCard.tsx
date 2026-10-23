import { Badge } from './Badge'
import { Photo } from './Photo'

type ArticleCardProps = {
  title: string
  category: string
  image: string
  placeholder?: boolean
}

export function ArticleCard({ title, category, image, placeholder }: ArticleCardProps) {
  return (
    <article
      className="group"
      data-placeholder={placeholder || undefined}
    >
      <Photo slot={image} className="w-full" />
      <div className="mt-4 flex items-center gap-2">
        <Badge variant="outline">{category}</Badge>
        {placeholder ? <span className="caption text-subtle">Placeholder</span> : null}
      </div>
      <h3 className="h4 mt-3 group-hover:text-muted">{title}</h3>
    </article>
  )
}
