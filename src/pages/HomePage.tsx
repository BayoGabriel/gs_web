import { CalculatorSection } from '../features/marketing/components/CalculatorSection'
import { CategoryMarquee } from '../features/marketing/components/CategoryMarquee'
import { ClosingCta } from '../features/marketing/components/ClosingCta'
import { ComparisonSection } from '../features/marketing/components/ComparisonSection'
import { FaqSection } from '../features/marketing/components/FaqSection'
import { HeroSection } from '../features/marketing/components/HeroSection'
import { HowItWorks } from '../features/marketing/components/HowItWorks'
import { OldWaySection } from '../features/marketing/components/OldWaySection'
import { PaymentsSection } from '../features/marketing/components/PaymentsSection'
import { ProofSection } from '../features/marketing/components/ProofSection'
import { RepoSpotlight } from '../features/marketing/components/RepoSpotlight'
import { SplitFeature } from '../features/marketing/components/SplitFeature'
import { StorefrontsSection } from '../features/marketing/components/StorefrontsSection'
import { StructuredData } from '../features/marketing/components/StructuredData'
import { TrustSection } from '../features/marketing/components/TrustSection'
import { UseCasesSection } from '../features/marketing/components/UseCasesSection'
import { useDocumentMeta } from '../hooks/useDocumentMeta'

export default function HomePage() {
  useDocumentMeta(
    'GitShop — Distribution, made easy',
    'Publish a catalogue once. Let anyone sell it from their own store. GitShop runs the orders, the payments and the payouts.',
  )
  return (
    <>
      <StructuredData />
      <HeroSection />
      <CategoryMarquee />
      <OldWaySection />
      <RepoSpotlight />
      <HowItWorks />
      <SplitFeature />
      <StorefrontsSection />
      <PaymentsSection />
      <UseCasesSection />
      <CalculatorSection />
      <ProofSection />
      <ComparisonSection />
      <TrustSection />
      <FaqSection />
      <ClosingCta />
    </>
  )
}
