import { Check } from 'lucide-react'
import { InlineCta } from '../components/layout/InlineCta'
import { PageHero } from '../components/layout/PageHero'
import { Section } from '../components/layout/Section'
import { Photo } from '../components/ui/Photo'
import { useCasesPage } from '../content/solutions'
import { useDocumentMeta } from '../hooks/useDocumentMeta'

export default function UseCasesPage() {
  useDocumentMeta('Use cases', 'Social sellers, shop owners, creators, dropshippers, brands and manufacturers — one way in for each.')
  return (
    <>
      <PageHero
        eyebrow="Use cases"
        title={<><strong>{useCasesPage.headlineBold}</strong> <span className="light">{useCasesPage.headlineLight}</span></>}
        description={useCasesPage.sub}
      />
      {useCasesPage.cases.map((item, index) => (
        <Section key={item.id} tone={index % 2 ? 'surface' : 'page'}>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Photo slot={item.image} className={index % 2 ? 'order-last mx-auto max-w-md' : 'mx-auto max-w-md'} />
            <div>
              <h2 className="h2">{item.title}</h2>
              <p className="body-lg measure mt-4 text-muted">{item.body}</p>
              <ul className="mt-6 space-y-3">
                {item.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>
      ))}
      <InlineCta />
    </>
  )
}
