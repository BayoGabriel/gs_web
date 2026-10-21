import type { ReactNode } from 'react'
import { Button } from '../../../components/ui/Button'
import { Container } from '../../../components/ui/Container'
import { Icon } from '../../../components/ui/Icon'
import { SectionHeading } from '../../../components/ui/SectionHeading'
import { cn } from '../../../lib/cn'
import type { Benefit } from '../state/landing.types'
import type { WaitlistRole } from '../../waitlist/types/waitlist.types'
import { EARLY_ACCESS_HREF } from '../content/navigation'
import { announceWaitlistIntent } from '../../waitlist/services/waitlistIntent'

type AudienceSectionProps = {
  id: string
  eyebrow: string
  title: string
  description: string
  benefits: Benefit[]
  cta: string
  role: WaitlistRole
  visual: ReactNode
  visualFirst?: boolean
}

export function AudienceSection({
  id,
  eyebrow,
  title,
  description,
  benefits,
  cta,
  role,
  visual,
  visualFirst,
}: AudienceSectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="py-16 sm:py-24">
      <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className={cn(visualFirst && 'lg:order-2')}>
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            description={description}
            className="max-w-xl"
          />
          <ul className="mt-8 space-y-5">
            {benefits.map((benefit) => (
              <li key={benefit.id} className="flex gap-3.5">
                <Icon
                  name="check"
                  className="mt-0.5 h-5 w-5 shrink-0 text-forest"
                />
                <div>
                  <h3 className="text-[15px] font-bold text-ink">
                    {benefit.title}
                  </h3>
                  <p className="mt-1 text-[15px] leading-relaxed text-muted">
                    {benefit.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <Button
            href={EARLY_ACCESS_HREF}
            onClick={() => announceWaitlistIntent(role)}
            className="mt-9"
          >
            {cta}
          </Button>
        </div>
        <div className={cn(visualFirst && 'lg:order-1')}>{visual}</div>
      </Container>
    </section>
  )
}
