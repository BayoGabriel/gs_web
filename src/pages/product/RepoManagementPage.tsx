import { DetailSection } from '../../components/layout/DetailSection'
import { InlineCta } from '../../components/layout/InlineCta'
import { PageFaq } from '../../components/layout/PageFaq'
import { PageHero } from '../../components/layout/PageHero'
import { DeviceFrame } from '../../components/ui/DeviceFrame'
import { repoManagement } from '../../content/product'
import { RepoMockup } from '../../features/marketing/components/RepoMockup'
import { useDocumentMeta } from '../../hooks/useDocumentMeta'

const [importSec, rulesSec, accessSec, inventorySec, changesSec, syncSec, insightsSec, teamsSec, apiSec] =
  repoManagement.sections

export default function RepoManagementPage() {
  useDocumentMeta('Repo management', 'Every product, price and rule in one place. Update it once and every storefront follows.')
  return (
    <>
      <PageHero
        eyebrow="Product · Repo management"
        title={
          <>
            <strong>{repoManagement.headlineBold}</strong>{' '}
            <span className="light">{repoManagement.headlineLight}</span>
          </>
        }
        description={repoManagement.sub}
      />
      <section className="bg-bg py-14 sm:py-20">
        <div className="mx-auto w-full max-w-[var(--container)] px-4 sm:px-6 lg:px-8">
          <DeviceFrame url="app.gitshop.com/repos/sneakers-2026" className="mx-auto max-w-3xl">
            <RepoMockup />
          </DeviceFrame>
          <p className="caption mt-4 text-center text-subtle">The repo detail screen — example data</p>
        </div>
      </section>
      <DetailSection {...importSec} tone="surface" />
      <DetailSection {...rulesSec} imageFirst media={<div className="stack max-w-md p-6"><p className="font-mono text-sm">min price ₦55,000 · max margin 40%</p><p className="caption mt-2 text-subtle">Example pricing rule</p></div>} />
      <DetailSection {...accessSec} tone="surface" image="wholesaler-section" />
      <DetailSection {...inventorySec} imageFirst media={<div className="stack max-w-md p-6"><p className="font-mono text-sm">SNK-041 · 36 in stock</p><p className="font-mono text-sm">SNK-042 · 12 in stock</p><p className="caption mt-2 text-subtle">Example inventory</p></div>} />
      <DetailSection {...changesSec} tone="surface" media={<ChangelogMockup />} />
      <DetailSection {...syncSec} imageFirst image="step-3" />
      <section className="bg-bg py-14 sm:py-20">
        <div className="mx-auto grid w-full max-w-[var(--container)] gap-5 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
          {[insightsSec, teamsSec, apiSec].map((s) => (
            <div key={s.id} className="rounded-xl border border-border bg-raised p-6">
              <div className="flex items-center gap-2">
                <h3 className="text-base font-semibold">{s.title}</h3>
                <span className="rounded-full border border-border-strong px-2.5 py-0.5 text-xs font-semibold">Soon</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
            </div>
          ))}
        </div>
      </section>
      <PageFaq items={repoManagement.faq} />
      <InlineCta title="One repo. Every storefront." sub="Publish your catalogue once and let sellers carry it further." />
    </>
  )
}

function ChangelogMockup() {
  const rows = [
    { id: 'c1', text: 'SNK-042 price ₦58,000 → ₦55,000', when: '2h ago' },
    { id: 'c2', text: '3 products added to “Denim staples”', when: 'Yesterday' },
    { id: 'c3', text: 'SNK-041 stock 36 → 41', when: '2 days ago' },
  ]
  return (
    <div className="stack max-w-md p-6">
      <ul className="space-y-3">
        {rows.map((row) => (
          <li key={row.id} className="flex items-baseline justify-between gap-4 text-sm">
            <span className="font-mono">{row.text}</span>
            <span className="caption shrink-0 text-subtle">{row.when}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
