import * as DialogPrimitive from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'
import { Tooltip } from './Tooltip'

type ModalProps = {
  trigger: ReactNode
  title: string
  description?: string
  children: ReactNode
  /** sheet renders as a bottom sheet; default centred modal. */
  sheet?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

export function Modal({
  trigger,
  title,
  description,
  children,
  sheet,
  open,
  onOpenChange,
}: ModalProps) {
  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Trigger asChild>{trigger}</DialogPrimitive.Trigger>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-[var(--z-overlay)] bg-scrim" />
        <DialogPrimitive.Content
          className={cn(
            'fixed z-[var(--z-modal)] bg-raised p-6 outline-none',
            sheet
              ? 'inset-x-0 bottom-0 max-h-[90dvh] overflow-y-auto rounded-t-xl'
              : 'top-1/2 left-1/2 w-[min(calc(100vw-2rem),30rem)] -translate-x-1/2 -translate-y-1/2 rounded-xl border border-border shadow-[var(--shadow-overlay)]',
          )}
        >
          {sheet ? (
            <span
              aria-hidden="true"
              className="mx-auto mb-4 block h-1 w-8 rounded-full bg-border-strong"
            />
          ) : null}
          <div className="flex items-start justify-between gap-4">
            <DialogPrimitive.Title className="h4">{title}</DialogPrimitive.Title>
            <Tooltip content="Close">
              <DialogPrimitive.Close
                aria-label="Close"
                className="flex h-[var(--control-md)] w-[var(--control-md)] shrink-0 items-center justify-center rounded-md hover:bg-hover-surface"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </DialogPrimitive.Close>
            </Tooltip>
          </div>
          {description ? (
            <DialogPrimitive.Description className="mt-2 text-muted">
              {description}
            </DialogPrimitive.Description>
          ) : null}
          <div className="mt-5">{children}</div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}
