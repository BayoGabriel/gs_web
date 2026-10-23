import { Link } from 'react-router'
import { Section } from '../components/layout/Section'
import { buttonClasses } from '../components/ui/buttonClasses'
import { useDocumentMeta } from '../hooks/useDocumentMeta'

export default function NotFoundPage() {
  useDocumentMeta('Page not found', 'The page you are looking for does not exist.')
  return (
    <Section>
      <div className="py-12">
        <p className="font-mono text-sm text-subtle">404</p>
        <h1 className="display-lg mt-4">
          This page was <span className="light">never forked.</span>
        </h1>
        <p className="body-lg measure mt-5 text-muted">
          The link may be old, or the page moved. Head back and keep going.
        </p>
        <Link to="/" className={buttonClasses({ size: 'lg', className: 'mt-9' })}>
          Back to home
        </Link>
      </div>
    </Section>
  )
}
