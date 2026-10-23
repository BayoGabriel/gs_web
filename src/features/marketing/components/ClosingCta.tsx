import { Link } from 'react-router'
import { Section } from '../../../components/layout/Section'
import { buttonClasses } from '../../../components/ui/buttonClasses'
import { closingCta } from '../../../content/home'
import { primaryCta, secondaryCta } from '../../../content/nav'

const onDark =
  'border-on-primary bg-on-primary text-primary hover:bg-on-primary/90'

export function ClosingCta() {
  return (
    <Section tone="inverted">
      <div className="max-w-3xl">
        <h2 className="display-lg">
          <strong>{closingCta.headlineBold}</strong>{' '}
          <span className="light">{closingCta.headlineLight}</span>
        </h2>
        <p className="body-lg measure mt-6 text-on-primary/75">{closingCta.sub}</p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link to={primaryCta.to} className={buttonClasses({ variant: 'secondary', size: 'lg', className: onDark })}>
            {primaryCta.label}
          </Link>
          <Link
            to={secondaryCta.to}
            className={buttonClasses({
              variant: 'secondary',
              size: 'lg',
              className: 'border-on-primary/60 bg-transparent text-on-primary hover:bg-on-primary/10',
            })}
          >
            {secondaryCta.label}
          </Link>
        </div>
      </div>
    </Section>
  )
}
