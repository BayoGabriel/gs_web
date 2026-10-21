import { SiteFooter } from '../components/layout/SiteFooter'
import { SiteHeader } from '../components/layout/SiteHeader'
import { EarlyAccessSection } from '../features/landing/components/EarlyAccessSection'
import { FaqSection } from '../features/landing/components/FaqSection'
import { FinalCtaSection } from '../features/landing/components/FinalCtaSection'
import { HeroSection } from '../features/landing/components/HeroSection'
import { HowItWorksSection } from '../features/landing/components/HowItWorksSection'
import { IndependenceSection } from '../features/landing/components/IndependenceSection'
import { NetworkSection } from '../features/landing/components/NetworkSection'
import { ProblemSection } from '../features/landing/components/ProblemSection'
import { SellerSection } from '../features/landing/components/SellerSection'
import { SupplierSection } from '../features/landing/components/SupplierSection'

export default function App() {
  return (
    <div id="top" className="min-h-svh bg-paper font-sans text-ink">
      <a
        href="#main"
        className="sr-only focus-visible:not-sr-only focus-visible:absolute focus-visible:z-[60] focus-visible:m-2 focus-visible:rounded-lg focus-visible:bg-forest focus-visible:px-4 focus-visible:py-2 focus-visible:font-semibold focus-visible:text-surface"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <HeroSection />
        <ProblemSection />
        <HowItWorksSection />
        <SupplierSection />
        <SellerSection />
        <NetworkSection />
        <IndependenceSection />
        <FaqSection />
        <EarlyAccessSection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
    </div>
  )
}
