import { supplierBenefits } from '../content/landingContent'
import { AudienceSection } from './AudienceSection'
import { SupplierCatalogueVisual } from './visual/SupplierCatalogueVisual'

export function SupplierSection() {
  return (
    <AudienceSection
      id="for-suppliers"
      eyebrow="For suppliers"
      title="Your catalogue can reach beyond your direct sales."
      description="Give retailers and dropshippers a clearer way to discover your products and build their own selling operations around your catalogue."
      benefits={supplierBenefits}
      cta="I'm a supplier — get early access"
      role="supplier"
      visual={<SupplierCatalogueVisual />}
    />
  )
}
