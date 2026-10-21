import { Container } from '../../../components/ui/Container'
import { SectionHeading } from '../../../components/ui/SectionHeading'
import { WaitlistForm } from '../../waitlist/components/WaitlistForm'

export function EarlyAccessSection() {
  return (
    <section
      id="early-access"
      aria-labelledby="early-access-heading"
      className="py-16 sm:py-24"
    >
      <Container className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Early access"
            title="Register your interest."
            description="Tell us whether you're supplying products or building a product range to sell, and we'll share updates as GitShop develops."
          />
          <p className="mt-6 max-w-md font-mono text-xs leading-relaxed tracking-wide text-muted">
            No spam, no launch promises — just progress updates and a chance
            to shape the product.
          </p>
        </div>
        <div className="rounded-3xl border border-border bg-surface p-6 shadow-sm sm:p-8">
          <WaitlistForm />
        </div>
      </Container>
    </section>
  )
}
