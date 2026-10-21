import { sellerBenefits } from '../content/landingContent'
import { AudienceSection } from './AudienceSection'
import { SellerCatalogueVisual } from './visual/SellerCatalogueVisual'

export function SellerSection() {
  return (
    <AudienceSection
      id="for-sellers"
      eyebrow="For retailers & dropshippers"
      title="Find products to sell. Make them your own."
      description="Start with a supplier's catalogue, select the products that fit your business, and set the prices you want to offer your customers."
      benefits={sellerBenefits}
      cta="I'm a seller — get early access"
      role="seller"
      visual={<SellerCatalogueVisual />}
      visualFirst
    />
  )
}
