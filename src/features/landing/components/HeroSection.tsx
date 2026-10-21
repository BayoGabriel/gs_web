import { Button } from '../../../components/ui/Button'
import { Container } from '../../../components/ui/Container'
import { Icon } from '../../../components/ui/Icon'
import { EARLY_ACCESS_HREF } from '../content/navigation'
import { CatalogueForkVisual } from './CatalogueForkVisual'

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="border-b border-border"
    >
      <Container className="grid gap-10 py-14 sm:py-20 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-14 lg:py-24">
        <div className="max-w-xl">
          <p className="font-mono text-xs font-medium tracking-[0.14em] text-clay-deep uppercase">
            A new way to distribute products
          </p>
          <h1
            id="hero-heading"
            className="mt-4 text-4xl font-extrabold tracking-tight text-balance sm:text-5xl lg:text-[3.4rem] lg:leading-[1.05]"
          >
            Your products. More sellers.{' '}
            <span className="text-forest">One connected network.</span>
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            GitShop helps wholesalers publish product catalogues that
            retailers and dropshippers can fork, price, and sell through
            their own channels — without rebuilding every catalogue from
            scratch.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href={EARLY_ACCESS_HREF}>Get early access</Button>
            <Button href="#how-it-works" variant="secondary">
              See how it works
              <Icon name="arrow-right" className="h-4 w-4" />
            </Button>
          </div>
          <p className="mt-6 font-mono text-xs tracking-wide text-muted">
            Built for suppliers, retailers and dropshippers
          </p>
        </div>

        <div className="relative rounded-3xl border border-border bg-surface p-5 shadow-sm sm:p-7">
          <div
            aria-hidden="true"
            className="weave pointer-events-none absolute inset-0 rounded-3xl opacity-50"
          />
          <CatalogueForkVisual />
        </div>
      </Container>
    </section>
  )
}
