import type { ReactNode } from 'react'

export function KitBlock({
  id,
  title,
  children,
}: {
  id: string
  title: string
  children: ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-border py-10 first:border-t-0 first:pt-0">
      <h2 className="h4 mb-6">{title}</h2>
      <div className="space-y-6">{children}</div>
    </section>
  )
}

export function KitRow({ children }: { children: ReactNode }) {
  return <div className="flex flex-wrap items-center gap-4">{children}</div>
}
