import '@fontsource-variable/sora'
import '@fontsource-variable/inter'
import '@fontsource/jetbrains-mono/latin-400.css'
import '@fontsource/jetbrains-mono/latin-500.css'
import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import './index.css'
import { router } from './app/router'

const root = document.getElementById('root')!
const app = (
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)

// Prerendered pages ship real markup inside #root — hydrate it; anything else
// (dev server, where #root only holds the splash) mounts fresh.
if (root.dataset.prerendered) hydrateRoot(root, app)
else createRoot(root).render(app)
