import { createContext, useContext, type ReactNode } from 'react'

export type ToastOptions = { variant?: 'default' | 'error'; action?: ReactNode }
export type ToastItem = { id: number; message: string } & ToastOptions
export type PushToast = (message: string, options?: ToastOptions) => void

export const ToastContext = createContext<PushToast>(() => {})

export const useToast = () => useContext(ToastContext)
