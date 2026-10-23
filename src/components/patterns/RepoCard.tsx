import { GitFork, Lock } from 'lucide-react'
import type { ReactNode } from 'react'
import { formatMoney } from '../../lib/format'
import { Avatar } from '../ui/Avatar'
import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'
import { Card } from '../ui/Card'

export type RepoCardData = {
  id: string
  title: string
  wholesaler: string
  items: number
  avgWholesale: number
  forkCount: number
  currency?: string
  state?: 'default' | 'forked' | 'private' | 'archived'
}

type RepoCardProps = {
  repo: RepoCardData
  action?: ReactNode
  className?: string
}

function depth(forks: number): 1 | 2 | 3 {
  return forks >= 10 ? 3 : forks >= 1 ? 2 : 1
}

export function RepoCard({ repo, action, className }: RepoCardProps) {
  const currency = repo.currency ?? 'USD'
  const isPrivate = repo.state === 'private'

  return (
    <Card stack={depth(repo.forkCount)} fan className={className}>
      <div
        aria-hidden="true"
        className="aspect-[4/3] rounded-lg bg-surface"
      />
      <div className="mt-4 flex items-start justify-between gap-3">
        <h4 className="h4">{repo.title}</h4>
        {isPrivate ? (
          <Badge variant="outline" icon={<Lock className="h-3 w-3" aria-hidden="true" />}>
            Invite only
          </Badge>
        ) : repo.state === 'forked' ? (
          <Badge status="completed">Forked</Badge>
        ) : null}
      </div>
      <p className="mt-1 flex items-center gap-2 text-sm text-muted">
        <Avatar name={repo.wholesaler} kind="org" size={24} />
        {repo.wholesaler}
      </p>
      <p className="caption mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-subtle">
        <span>{repo.items} items</span>
        <span aria-hidden="true">·</span>
        <span>avg {formatMoney(repo.avgWholesale, currency)}</span>
        <span aria-hidden="true">·</span>
        <span className="inline-flex items-center gap-1">
          <GitFork className="h-3.5 w-3.5" aria-hidden="true" />
          {repo.forkCount} {repo.forkCount === 1 ? 'fork' : 'forks'}
        </span>
      </p>
      <div className="mt-4">
        {action ??
          (repo.state === 'forked' ? (
            <Button variant="secondary" size="sm">Manage fork</Button>
          ) : (
            <Button variant="secondary" size="sm">Fork repo</Button>
          ))}
      </div>
    </Card>
  )
}
