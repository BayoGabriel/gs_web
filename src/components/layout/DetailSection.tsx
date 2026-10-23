import type { ReactNode } from 'react'
import { Photo } from '../ui/Photo'
import { SoonBadge } from '../ui/SoonBadge'
import { StepArt } from '../ui/StepArt'
import { Section } from './Section'

type DetailSectionProps = {
  id?: string
  eyebrow?: string
  title: string
  body: string
  soon?: boolean
  image?: string
  media?: ReactNode
  imageFirst?: boolean
  tone?: 'page' | 'surface'
}

/** Alternating text/media section used by the product pages. */
export function DetailSection({
  id,
  eyebrow,
  title,
  body,
  soon,
  image,
  media,
  imageFirst,
  tone = 'page',
}: DetailSectionProps) {
  const text = (
    <div>
      {eyebrow ? <p className="overline text-muted">{eyebrow}</p> : null}
      <div className="mt-3 flex items-center gap-3">
        <h2 className="h2">{title}</h2>
        {soon ? <SoonBadge /> : null}
      </div>
      <p className="body-lg measure mt-5 text-muted">{body}</p>
    </div>
  )
  const stepMatch = image?.match(/^step-(\d)$/)
  const visual = image ? (
    <div className="stack stack-alive mx-auto max-w-md">
      {stepMatch ? <StepArt step={Number(stepMatch[1])} /> : <Photo slot={image} />}
    </div>
  ) : (
    media
  )
  return (
    <Section id={id} tone={tone}>
      <div className="grid items-center gap-10 lg:grid-cols-2">
        {imageFirst ? visual : text}
        {imageFirst ? text : visual}
      </div>
    </Section>
  )
}
