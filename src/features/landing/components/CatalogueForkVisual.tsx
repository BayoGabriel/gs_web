import { SellerForkCard } from './visual/SellerForkCard'
import { SourceCatalogueCard } from './visual/SourceCatalogueCard'
import { ForkConnector } from './visual/ForkConnector'
import { TreeList } from './visual/TreeList'

const sellers = [
  {
    id: 'adaeze',
    name: 'Adaeze Retail',
    path: 'adaeze-retail/swift-footwear',
    price: '₦27,000',
    accent: 'clay' as const,
  },
  {
    id: 'kwame',
    name: 'Kwame Stores',
    path: 'kwame-stores/swift-footwear',
    price: '₦29,000',
    accent: 'ochre' as const,
  },
]

/**
 * Signature visual: one source catalogue branching into independent
 * seller catalogues with their own prices. Illustrative example data.
 */
export function CatalogueForkVisual() {
  return (
    <div className="relative">
      <p className="sr-only">
        Diagram: the Swift Footwear supplier catalogue at a wholesale price of
        twenty thousand naira branches into two independent seller catalogues
        priced at twenty-seven and twenty-nine thousand naira.
      </p>

      {/* Desktop: source on the left, branches on the right */}
      <div className="hidden grid-cols-[minmax(0,240px)_72px_minmax(0,1fr)] grid-rows-2 items-stretch gap-y-8 sm:grid">
        <div className="row-span-2 flex items-center">
          <SourceCatalogueCard />
        </div>
        <ForkConnector direction="up" />
        <SellerForkCard {...sellers[0]} />
        <ForkConnector direction="down" delay />
        <SellerForkCard {...sellers[1]} />
      </div>

      {/* Mobile: git-style tree rail */}
      <div className="sm:hidden">
        <SourceCatalogueCard />
        <TreeList
          className="mt-4"
          items={sellers.map((s) => ({
            id: s.id,
            node: <SellerForkCard {...s} />,
          }))}
        />
      </div>

      <p className="mt-4 font-mono text-[11px] tracking-wide text-muted">
        Illustrative example — not live product data
      </p>
    </div>
  )
}
