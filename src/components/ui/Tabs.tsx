import * as TabsPrimitive from '@radix-ui/react-tabs'
import type { ReactNode } from 'react'

type TabItem = { value: string; label: ReactNode; content: ReactNode }

type TabsProps = {
  items: TabItem[]
  defaultValue?: string
  ariaLabel: string
  className?: string
}

/** Underline tabs, 2px indicator, arrow-key navigation via Radix. */
export function Tabs({ items, defaultValue, ariaLabel, className }: TabsProps) {
  return (
    <TabsPrimitive.Root
      defaultValue={defaultValue ?? items[0]?.value}
      className={className}
    >
      <TabsPrimitive.List
        aria-label={ariaLabel}
        className="flex gap-1 overflow-x-auto border-b border-border"
      >
        {items.map((item) => (
          <TabsPrimitive.Trigger
            key={item.value}
            value={item.value}
            className="relative h-[var(--control-md)] shrink-0 px-4 text-sm font-semibold text-muted transition-colors duration-fast hover:text-text data-[state=active]:text-text data-[state=active]:after:absolute data-[state=active]:after:inset-x-0 data-[state=active]:after:bottom-[-1px] data-[state=active]:after:h-0.5 data-[state=active]:after:bg-primary"
          >
            {item.label}
          </TabsPrimitive.Trigger>
        ))}
      </TabsPrimitive.List>
      {items.map((item) => (
        <TabsPrimitive.Content
          key={item.value}
          value={item.value}
          className="pt-6 outline-none"
        >
          {item.content}
        </TabsPrimitive.Content>
      ))}
    </TabsPrimitive.Root>
  )
}
