import { useEffect, useState } from 'react'

export function useMobileNavigation() {
  const [isOpen, setIsOpen] = useState(false)

  const close = () => setIsOpen(false)
  const toggle = () => setIsOpen((current) => !current)

  useEffect(() => {
    if (!isOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close()
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return { isOpen, close, toggle }
}
