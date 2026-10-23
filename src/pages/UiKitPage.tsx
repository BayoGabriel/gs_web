import { PageHero } from '../components/layout/PageHero'
import { Section } from '../components/layout/Section'
import { DomainDemo } from '../features/uikit/DomainDemo'
import { MarketingDemo } from '../features/uikit/MarketingDemo'
import { OverlaysDemo } from '../features/uikit/OverlaysDemo'
import { PrimitivesDemo } from '../features/uikit/PrimitivesDemo'
import { useDocumentMeta } from '../hooks/useDocumentMeta'

export default function UiKitPage() {
  useDocumentMeta('UI kit', 'The GitShop design system in code: every component and state, in light and dark.')
  return (
    <>
      <PageHero
        eyebrow="UI kit"
        title="The system, working."
        description="Every component on this site, in one place. Toggle the theme in the header to see light and dark states."
      />
      <Section>
        <PrimitivesDemo />
        <OverlaysDemo />
        <DomainDemo />
        <MarketingDemo />
      </Section>
    </>
  )
}
