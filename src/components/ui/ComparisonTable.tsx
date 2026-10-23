type Row = { id: string; label: string; old: string; gitshop: string }

export function ComparisonTable({ rows, caption }: { rows: Row[]; caption: string }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
        <caption className="sr-only">{caption}</caption>
        <thead>
          <tr className="border-b-2 border-text">
            <th scope="col" className="py-4 pr-6 caption text-subtle">{'\u00A0'}</th>
            <th scope="col" className="py-4 pr-6 caption text-subtle">The old way</th>
            <th scope="col" className="py-4 caption text-text">GitShop</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id} className="border-b border-border">
              <th scope="row" className="py-5 pr-6 font-semibold text-text">{row.label}</th>
              <td className="py-5 pr-6 text-muted">{row.old}</td>
              <td className="py-5 font-semibold text-text">{row.gitshop}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
