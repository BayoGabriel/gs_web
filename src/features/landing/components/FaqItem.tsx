import { Icon } from '../../../components/ui/Icon'
import { cn } from '../../../lib/cn'
import type { FaqItemData } from '../content/faqItems'

type FaqItemProps = {
  item: FaqItemData
  open: boolean
  onToggle: () => void
}

export function FaqItem({ item, open, onToggle }: FaqItemProps) {
  const answerId = `faq-answer-${item.id}`

  return (
    <div className="border-t border-border last:border-b">
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={answerId}
          className="flex w-full items-center justify-between gap-4 py-5 text-left text-base font-bold text-ink hover:text-forest focus-visible:rounded-md focus-visible:outline-2 focus-visible:outline-forest"
        >
          {item.question}
          <Icon
            name="chevron"
            className={cn(
              'h-5 w-5 shrink-0 text-muted motion-safe:transition-transform motion-safe:duration-200',
              open && 'rotate-180',
            )}
          />
        </button>
      </h3>
      <div
        id={answerId}
        className={cn(
          'grid motion-safe:transition-[grid-template-rows] motion-safe:duration-300 motion-safe:ease-out',
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
        )}
      >
        <div className="overflow-hidden">
          <p className="max-w-2xl pb-5 leading-relaxed text-muted">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  )
}
