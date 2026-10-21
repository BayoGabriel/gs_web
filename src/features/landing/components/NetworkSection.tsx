import { Container } from '../../../components/ui/Container'
import { NetworkDiagram } from './visual/NetworkDiagram'

export function NetworkSection() {
  return (
    <section
      aria-labelledby="network-heading"
      className="bg-forest-deep py-16 text-surface sm:py-24"
    >
      <Container>
        <div className="max-w-2xl">
          <p className="font-mono text-xs font-medium tracking-[0.14em] text-ochre uppercase">
            The connected network
          </p>
          <h2
            id="network-heading"
            className="mt-3 text-3xl font-extrabold tracking-tight text-balance sm:text-4xl"
          >
            One source. Many ways to sell.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-surface/75 sm:text-lg">
            Suppliers provide the product foundation. Sellers choose what
            fits their business and build their own pricing and selling
            approach around it.
          </p>
        </div>
        <div className="relative mt-12 rounded-3xl bg-paper p-5 text-ink sm:p-8">
          <div
            aria-hidden="true"
            className="weave pointer-events-none absolute inset-0 rounded-3xl opacity-40"
          />
          <div className="relative">
            <NetworkDiagram />
          </div>
        </div>
      </Container>
    </section>
  )
}
