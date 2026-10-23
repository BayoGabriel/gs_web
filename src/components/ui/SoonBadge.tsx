import { Badge } from './Badge'
import { Tooltip } from './Tooltip'

/** Marks a proposed, not-yet-confirmed feature. */
export function SoonBadge() {
  return (
    <Tooltip content="Proposed feature — not confirmed yet">
      <span tabIndex={0} className="inline-flex cursor-help">
        <Badge variant="outline">Soon</Badge>
      </span>
    </Tooltip>
  )
}
