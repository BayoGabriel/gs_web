import { Check } from 'lucide-react'
import { Link } from 'react-router'
import { Section } from '../../../components/layout/Section'
import { Photo } from '../../../components/ui/Photo'
import { buttonClasses } from '../../../components/ui/buttonClasses'
import { forSellers, forWholesalers } from '../../../content/home'
import { primaryCta, secondaryCta } from '../../../content/nav'

type AudienceBlock = {
  data: typeof forSellers
  cta: typeof primaryCta
  inverted?: boolean
  imageFirst?: boolean
}

function Audience({ data, cta, inverted, imageFirst }: AudienceBlock) {
  const text = (
    <div>
      <p className={inverted ? 'overline text-on-primary/70' : 'overline text-muted'}>
        {data.eyebrow}
      </p>
      <h2 className="display-lg mt-4 max-w-[15ch]">
        <strong>{data.headlineBold}</strong>{' '}
        <span className="light">{data.headlineLight}</span>
      </h2>
      <p className={inverted ? 'body-lg measure mt-6 text-on-primary/75' : 'body-lg measure mt-6 text-muted'}>
        {data.body}
      </p>
      <ul className="mt-8 space-y-3">
        {data.bullets.map((point) => (
          <li key={point} className="flex items-start gap-3 text-sm">
            <Check className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            {point}
          </li>
        ))}
      </ul>
      <Link
        to={cta.to}
        className={buttonClasses({
          variant: inverted ? 'secondary' : 'primary',
          size: 'lg',
          className: 'mt-9 ' + (inverted ? 'border-on-primary bg-on-primary text-primary hover:bg-on-primary/90' : ''),
        })}
      >
        {cta.label}
      </Link>
    </div>
  )
  const image = <Photo slot={data.image} className="mx-auto max-w-sm" />
  return (
    <Section tone={inverted ? 'inverted' : 'surface'}>
      <div className="grid items-center gap-12 lg:grid-cols-2">
        {imageFirst ? image : text}
        {imageFirst ? text : image}
      </div>
    </Section>
  )
}

export function SplitFeature() {
  return (
    <>
      <Audience data={forSellers} cta={primaryCta} inverted />
      <Audience data={forWholesalers} cta={secondaryCta} imageFirst />
    </>
  )
}
