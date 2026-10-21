import { Button } from '../../../components/ui/Button'
import { Container } from '../../../components/ui/Container'
import { EARLY_ACCESS_HREF } from '../content/navigation'

export function FinalCtaSection() {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="bg-forest-deep py-20 text-surface sm:py-28"
    >
      <Container className="relative">
        <div
          aria-hidden="true"
          className="weave-dark pointer-events-none absolute inset-0"
        />
        <div className="relative max-w-2xl">
          <h2
            id="final-cta-heading"
            className="text-3xl font-extrabold tracking-tight text-balance sm:text-5xl"
          >
            Bring your catalogue into a more connected way of selling.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-surface/75 sm:text-lg">
            Whether you're supplying products or building a product range to
            sell, GitShop is designed to help connect the two sides of
            product distribution.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href={EARLY_ACCESS_HREF} variant="light">
              Get early access
            </Button>
            <Button
              href="#how-it-works"
              variant="secondary"
              className="border-surface/40 text-surface hover:border-surface hover:text-surface"
            >
              Explore how it works
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
