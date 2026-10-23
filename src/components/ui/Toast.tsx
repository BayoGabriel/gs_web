import * as ToastPrimitive from '@radix-ui/react-toast'
import { useCallback, useState, type ReactNode } from 'react'
import { cn } from '../../lib/cn'
import {
  ToastContext,
  type PushToast,
  type ToastItem,
  type ToastOptions,
} from './toast-context'

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([])

  const push = useCallback<PushToast>((message, options?: ToastOptions) => {
    setToasts((current) => [...current, { id: Date.now(), message, ...options }])
  }, [])

  const dismiss = (id: number) =>
    setToasts((current) => current.filter((t) => t.id !== id))

  return (
    <ToastContext.Provider value={push}>
      <ToastPrimitive.Provider swipeDirection="right">
        {children}
        {toasts.map((toast) => (
          <ToastPrimitive.Root
            key={toast.id}
            duration={toast.variant === 'error' ? Infinity : 6000}
            onOpenChange={(open) => !open && dismiss(toast.id)}
            className={cn(
              'flex items-center gap-3 rounded-md px-4 py-3 text-sm font-semibold shadow-[var(--shadow-overlay)]',
              toast.variant === 'error'
                ? 'bg-danger text-on-danger'
                : 'bg-primary text-on-primary',
            )}
          >
            <ToastPrimitive.Description asChild>
              <span role={toast.variant === 'error' ? 'alert' : 'status'}>
                {toast.message}
              </span>
            </ToastPrimitive.Description>
            {toast.action}
            <ToastPrimitive.Close
              aria-label="Dismiss"
              className="ml-2 shrink-0 rounded-xs px-1 text-on-primary/80 hover:text-on-primary"
            >
              ×
            </ToastPrimitive.Close>
          </ToastPrimitive.Root>
        ))}
        <ToastPrimitive.Viewport className="fixed right-4 bottom-4 z-[var(--z-toast)] flex w-[min(24rem,calc(100vw-2rem))] flex-col gap-2 outline-none" />
      </ToastPrimitive.Provider>
    </ToastContext.Provider>
  )
}
