import { X } from 'lucide-react'
import { useState } from 'react'
import { announcement } from '../../content/placeholders'

const KEY = 'gitshop-announcement-dismissed'

/** Slim dismissible bar above the header; remembers the choice. */
export function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(() => {
    try {
      return localStorage.getItem(KEY) === '1'
    } catch {
      return false
    }
  })

  if (dismissed) return null

  return (
    <div
      className="flex items-center justify-center gap-4 bg-primary px-4 py-2 text-center text-xs font-semibold text-on-primary"
      data-placeholder={announcement.placeholder || undefined}
    >
      <p>{announcement.text}</p>
      <button
        type="button"
        aria-label="Dismiss announcement"
        onClick={() => {
          setDismissed(true)
          try {
            localStorage.setItem(KEY, '1')
          } catch {
            /* storage unavailable */
          }
        }}
        className="rounded-sm p-1 text-on-primary/80 hover:text-on-primary"
      >
        <X className="h-3.5 w-3.5" aria-hidden="true" />
      </button>
    </div>
  )
}
