import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

type Column = { key: string; header: ReactNode; numeric?: boolean }
type TableProps = {
  caption: string
  columns: Column[]
  rows: { key: string; cells: Record<string, ReactNode> }[]
  className?: string
}

/** Data table: muted header, 56px rows, right-aligned tabular numerics. */
export function Table({ caption, columns, rows, className }: TableProps) {
  return (
    <div className={cn('overflow-x-auto', className)} role="region" aria-label={caption}>
      <table className="w-full border-collapse text-sm">
        <caption className="sr-only">{caption}</caption>
        <thead>
          <tr className="border-b border-border">
            {columns.map((col) => (
              <th
                key={col.key}
                scope="col"
                className={cn(
                  'caption py-3 font-semibold text-muted',
                  col.numeric ? 'text-right' : 'text-left',
                )}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.key} className="h-14 border-b border-border last:border-0">
              {columns.map((col) => (
                <td
                  key={col.key}
                  className={cn(
                    'pr-4 last:pr-0',
                    col.numeric && 'text-right tabular-nums',
                  )}
                >
                  {row.cells[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
