/** Buyer-facing order tracking — store-branded statuses only. */
const steps = [
  { id: 'placed', label: 'Order placed', time: 'Today, 14:02', done: true },
  { id: 'confirmed', label: 'Confirmed', time: 'Today, 14:05', done: true },
  { id: 'shipped', label: 'Shipped', time: 'Expected tomorrow', done: false },
  { id: 'delivered', label: 'Delivered', time: 'Estimated Friday', done: false },
]

export function OrderTrackingMockup() {
  return (
    <div className="p-5 text-sm">
      <p className="font-semibold">Order #2417</p>
      <p className="caption mt-0.5 text-subtle">Amara Market</p>
      <ol className="mt-5 space-y-4">
        {steps.map((step) => (
          <li key={step.id} className="flex items-start gap-3">
            <span
              aria-hidden="true"
              className={
                'mt-1 block h-3 w-3 rounded-full border-2 ' +
                (step.done ? 'border-primary bg-primary' : 'border-border-strong bg-bg')
              }
            />
            <div>
              <p className={step.done ? 'font-semibold' : 'text-muted'}>{step.label}</p>
              <p className="caption text-subtle">{step.time}</p>
            </div>
          </li>
        ))}
      </ol>
      <p className="caption mt-5 border-t border-border pt-3 text-muted">
        Questions? hello@amara.example · Free returns within 14 days
      </p>
    </div>
  )
}
