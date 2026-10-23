import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'
import type { ReactNode } from 'react'

type AccordionItem = { id: string; title: ReactNode; content: ReactNode }

type AccordionProps = {
  items: AccordionItem[]
  ariaLabel?: string
}

export function Accordion({ items, ariaLabel }: AccordionProps) {
  return (
    <AccordionPrimitive.Root type="single" collapsible aria-label={ariaLabel}>
      {items.map((item) => (
        <AccordionPrimitive.Item
          key={item.id}
          value={item.id}
          className="border-b border-border first:border-t"
        >
          <AccordionPrimitive.Header className="flex">
            <AccordionPrimitive.Trigger className="group flex flex-1 items-center justify-between gap-4 py-5 text-left text-base font-semibold text-text hover:text-muted">
              {item.title}
              <ChevronDown
                className="h-5 w-5 shrink-0 text-muted transition-transform duration-base ease-standard group-data-[state=open]:rotate-180"
                aria-hidden="true"
              />
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionPrimitive.Content className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-base ease-standard data-[state=open]:grid-rows-[1fr]">
            <div className="overflow-hidden">
              <div className="measure pb-5 text-muted">{item.content}</div>
            </div>
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  )
}
