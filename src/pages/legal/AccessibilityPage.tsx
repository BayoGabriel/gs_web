import { PageHero } from '../../components/layout/PageHero'
import { Section } from '../../components/layout/Section'
import { useDocumentMeta } from '../../hooks/useDocumentMeta'

export default function AccessibilityPage() {
  useDocumentMeta('Accessibility', 'GitShop accessibility statement: WCAG 2.2 AA target, keyboard support, reduced motion and contrast commitments.')
  return (
    <>
      <PageHero
        eyebrow="Accessibility"
        title="Built to be used by everyone."
        description="Our target is WCAG 2.2 AA. This statement describes what the site does and how to report a problem."
      />
      <Section>
        <div className="max-w-2xl space-y-8 text-sm leading-relaxed text-muted">
          <p>
            <strong className="text-text">Keyboard:</strong> every interactive
            element is reachable by keyboard, with a visible two-ring focus
            indicator and a skip link to the main content.
          </p>
          <p>
            <strong className="text-text">Motion:</strong> animations are limited
            to subtle transforms and are disabled entirely when your system
            requests reduced motion.
          </p>
          <p>
            <strong className="text-text">Contrast:</strong> text meets at least
            4.5:1 contrast in both light and dark themes; nothing is
            communicated by colour alone.
          </p>
          <p>
            <strong className="text-text">Zoom and reflow:</strong> the layout
            supports 200% zoom and reflows to 320px wide without horizontal
            scrolling.
          </p>
          <p>
            Found a barrier? Email{' '}
            <a className="underline" href="mailto:hello@gitshop.co">
              hello@gitshop.co
            </a>{' '}
            with "Accessibility" in the subject and we will fix it.
          </p>
        </div>
      </Section>
    </>
  )
}
