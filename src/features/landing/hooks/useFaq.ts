import { useState } from 'react'

/** Single-open accordion state for the FAQ section. */
export function useFaq() {
  const [openId, setOpenId] = useState<string | null>(null)

  const isOpen = (id: string) => openId === id
  const toggle = (id: string) =>
    setOpenId((current) => (current === id ? null : id))

  return { isOpen, toggle }
}
