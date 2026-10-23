import { Photo } from '../../components/ui/Photo'

const products = [
  { id: 'p1', image: 'storefront-1', name: 'Everyday tote', price: '$52.00' },
  { id: 'p2', image: 'storefront-2', name: 'Court sneakers', price: '$68.00' },
  { id: 'p3', image: 'product-05', name: 'Glow serum', price: '$24.00' },
  { id: 'p4', image: 'product-08', name: 'Ceramic mug', price: '$18.00' },
]

/** Buyer-facing storefront mockup — store branding only, nothing behind it. */
export function StoreMockup() {
  return (
    <div className="text-sm">
      <div className="flex items-center gap-2.5 border-b border-border px-4 py-3">
        <span aria-hidden="true" className="flex h-7 w-7 items-center justify-center rounded-md bg-primary font-display text-xs font-bold text-on-primary">
          A
        </span>
        <div>
          <p className="font-semibold leading-tight">Amara Market</p>
          <p className="font-mono text-[10px] leading-tight text-subtle">amara.gitshop.app</p>
        </div>
      </div>
      <ul className="grid grid-cols-2 gap-3 p-4">
        {products.map((p) => (
          <li key={p.id}>
            <Photo slot={p.image} className="rounded-md" />
            <p className="mt-2 truncate text-xs font-semibold">{p.name}</p>
            <p className="font-mono text-xs tabular-nums text-muted">{p.price}</p>
          </li>
        ))}
      </ul>
      <div className="px-4 pb-4">
        <p className="rounded-md bg-primary py-2.5 text-center text-sm font-semibold text-on-primary">
          Checkout
        </p>
      </div>
    </div>
  )
}
