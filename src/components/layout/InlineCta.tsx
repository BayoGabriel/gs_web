import { primaryCta, secondaryCta } from '../../content/nav'
import { buttonClasses } from '../ui/buttonClasses'
import { Section } from './Section'

const onDark = 'border-on-primary bg-on-primary text-primary hover:bg-on-primary/90'

/** Closing inverted band used on inner pages. */
export function InlineCta({
  title = 'Make distribution easy.',
  sub = 'Open a store in minutes, or publish your catalogue and let others sell it.',
}: {
  title?: string
  sub?: string
}) {
  return (
    <Section tone="inverted">
      <h2 className="display-lg max-w-[18ch]">{title}</h2>
      <p className="body-lg measure mt-5 text-on-primary/75">{sub}</p>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <a href={primaryCta.to} className={buttonClasses({ variant: 'secondary', size: 'lg', className: onDark })}>
          {primaryCta.label}
        </a>
        <a
          href={secondaryCta.to}
          className={buttonClasses({
            variant: 'secondary',
            size: 'lg',
            className: 'border-on-primary/60 bg-transparent text-on-primary hover:bg-on-primary/10',
          })}
        >
          {secondaryCta.label}
        </a>
      </div>
    </Section>
  )
}
