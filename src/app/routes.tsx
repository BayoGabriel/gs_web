import { Navigate, type RouteObject } from 'react-router'
import { RootLayout } from '../components/layout/RootLayout'

// Page modules default-export their component; map it to the route `Component`.
const page = (loader: () => Promise<{ default: React.ComponentType }>) => async () => ({
  Component: (await loader()).default,
})

// Shared route table — the browser router and the static prerenderer both
// consume this. Keep it free of browser-only router factories so it can be
// imported in Node.
export const routes: RouteObject[] = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, lazy: page(() => import('../pages/HomePage')) },
      { path: 'product', lazy: page(() => import('../pages/ProductPage')) },
      { path: 'product/repo-management', lazy: page(() => import('../pages/product/RepoManagementPage')) },
      { path: 'product/forking', lazy: page(() => import('../pages/product/ForkingPage')) },
      { path: 'product/storefronts', lazy: page(() => import('../pages/product/StorefrontsPage')) },
      { path: 'product/wallet', lazy: page(() => import('../pages/product/WalletPage')) },
      { path: 'product/order-routing', lazy: page(() => import('../pages/product/OrderRoutingPage')) },
      { path: 'sellers', lazy: page(() => import('../pages/SellersPage')) },
      { path: 'resellers', element: <Navigate to="/sellers" replace /> },
      { path: 'wholesalers', lazy: page(() => import('../pages/WholesalersPage')) },
      { path: 'use-cases', lazy: page(() => import('../pages/UseCasesPage')) },
      { path: 'pricing', lazy: page(() => import('../pages/PricingPage')) },
      { path: 'security', lazy: page(() => import('../pages/SecurityPage')) },
      { path: 'blog', lazy: page(() => import('../pages/BlogPage')) },
      { path: 'guides', lazy: page(() => import('../pages/resources/GuidesPage')) },
      { path: 'docs', lazy: page(() => import('../pages/DocsPage')) },
      { path: 'help', lazy: page(() => import('../pages/resources/HelpPage')) },
      { path: 'about', lazy: page(() => import('../pages/AboutPage')) },
      { path: 'contact', lazy: page(() => import('../pages/ContactPage')) },
      { path: 'signin', lazy: page(() => import('../pages/SignInPage')) },
      { path: 'signup', lazy: page(() => import('../pages/SignUpPage')) },
      { path: 'privacy', lazy: page(() => import('../pages/legal/PrivacyPage')) },
      { path: 'terms', lazy: page(() => import('../pages/legal/TermsPage')) },
      { path: 'accessibility', lazy: page(() => import('../pages/legal/AccessibilityPage')) },
      { path: 'ui-kit', lazy: page(() => import('../pages/UiKitPage')) },
      { path: '*', lazy: page(() => import('../pages/NotFoundPage')) },
    ],
  },
]
