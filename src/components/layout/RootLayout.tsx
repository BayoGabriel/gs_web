import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router'
import { ToastProvider } from '../ui/Toast'
import { AnnouncementBar } from './AnnouncementBar'
import { SiteFooter } from './SiteFooter'
import { SiteHeader } from './SiteHeader'

function ScrollAndFocusManager() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
    document.querySelector('h1')?.setAttribute('tabindex', '-1')
    document.querySelector('h1')?.focus({ preventScroll: true, focusVisible: false })
  }, [pathname])
  return null
}

export function RootLayout() {
  return (
    <ToastProvider>
      <a
        href="#main"
        className="sr-only focus-visible:not-sr-only focus-visible:absolute focus-visible:z-[var(--z-toast)] focus-visible:m-2 focus-visible:rounded-md focus-visible:bg-primary focus-visible:px-4 focus-visible:py-2 focus-visible:font-semibold focus-visible:text-on-primary"
      >
        Skip to main content
      </a>
      <ScrollAndFocusManager />
      <AnnouncementBar />
      <SiteHeader />
      <main id="main">
        <Outlet />
      </main>
      <SiteFooter />
    </ToastProvider>
  )
}
