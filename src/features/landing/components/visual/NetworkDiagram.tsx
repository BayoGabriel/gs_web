import { SellerForkCard } from './SellerForkCard'
import { SourceCatalogueCard } from './SourceCatalogueCard'
import { TreeList } from './TreeList'

const sellers = [
  {
    id: 'adaeze',
    name: 'Adaeze Retail',
    path: 'adaeze-retail/swift-footwear',
    price: '₦27,000',
    role: 'Retailer',
    accent: 'clay' as const,
  },
  {
    id: 'kwame',
    name: 'Kwame Stores',
    path: 'kwame-stores/swift-footwear',
    price: '₦29,000',
    role: 'Dropshipper',
    accent: 'ochre' as const,
    note: '+ also forks kano-textiles/denim',
  },
  {
    id: 'tunde',
    name: 'Tunde & Co.',
    path: 'tunde-co/swift-footwear',
    price: '₦24,500',
    role: 'Reseller',
    accent: 'forest' as const,
  },
]

/** Editorial network diagram: one source powering many independent sellers. */
export function NetworkDiagram() {
  return (
    <div>
      <p className="sr-only">
        Diagram: the Swift Footwear source catalogue branches into three
        independent seller catalogues — a retailer at ₦27,000, a dropshipper
        at ₦29,000 who also forks a second supplier catalogue, and a reseller
        at ₦24,500.
      </p>
      <div className="mb-3 hidden grid-cols-[minmax(0,240px)_96px_minmax(0,1fr)] gap-x-0 font-mono text-[10px] tracking-[0.14em] text-muted uppercase sm:grid">
        <span>Source catalogue</span>
        <span />
        <span>Seller forks</span>
      </div>
      <div className="hidden auto-rows-fr grid-cols-[minmax(0,240px)_96px_minmax(0,1fr)] items-stretch gap-y-6 sm:grid">
        <div className="row-span-3 flex items-center">
          <SourceCatalogueCard />
        </div>
        <svg
          viewBox="0 0 96 300"
          preserveAspectRatio="none"
          className="row-span-3 h-full w-full text-forest"
          aria-hidden="true"
        >
          <path d="M0 150 C 48 150, 48 50, 96 50" className="branch-path" style={{ ['--branch-length' as string]: 200 }} fill="none" stroke="currentColor" strokeWidth="2" vectorEffect="non-scaling-stroke" />
          <path d="M0 150 L 96 150" className="branch-path" style={{ ['--branch-length' as string]: 200 }} fill="none" stroke="currentColor" strokeWidth="2" vectorEffect="non-scaling-stroke" />
          <path d="M0 150 C 48 150, 48 250, 96 250" className="branch-path branch-path-delay" style={{ ['--branch-length' as string]: 200 }} fill="none" stroke="currentColor" strokeWidth="2" vectorEffect="non-scaling-stroke" />
        </svg>
        <SellerForkCard {...sellers[0]} />
        <SellerForkCard {...sellers[1]} />
        <SellerForkCard {...sellers[2]} />
      </div>
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
