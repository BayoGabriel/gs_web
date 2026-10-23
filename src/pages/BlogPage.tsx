import { useMemo, useState } from 'react'
import { PageHero } from '../components/layout/PageHero'
import { InlineCta } from '../components/layout/InlineCta'
import { Section } from '../components/layout/Section'
import { ArticleCard } from '../components/ui/ArticleCard'
import { Input } from '../components/ui/Input'
import { articleCategories, articles } from '../content/resources'
import { cn } from '../lib/cn'
import { useDocumentMeta } from '../hooks/useDocumentMeta'

export default function BlogPage() {
  useDocumentMeta('Blog', 'Guides, product updates and stories from the distribution layer.')
  const [category, setCategory] = useState('All')
  const [query, setQuery] = useState('')
  const filtered = useMemo(
    () => articles.filter(
      (a) => (category === 'All' || a.category === category)
        && a.title.toLowerCase().includes(query.trim().toLowerCase()),
    ),
    [category, query],
  )
  return (
    <>
      <PageHero eyebrow="Blog" title="Notes on <strong>distribution.</strong>" description="Guides for sellers and wholesalers, product updates and the occasional story." />
      <Section>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
            {articleCategories.map((item) => (
              <button
                key={item}
                type="button"
                aria-pressed={category === item}
                className={cn(
                  'cursor-pointer rounded-full border px-4 py-2 text-sm font-semibold transition-colors duration-[var(--duration-fast)]',
                  category === item
                    ? 'border-primary bg-primary text-on-primary'
                    : 'border-border-strong hover:bg-surface',
                )}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>
          <Input
            label="Search"
            type="search"
            placeholder="Search articles"
            className="w-full sm:w-64"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <p className="caption mt-8 text-subtle">Placeholder articles — titles are planned content, not published posts.</p>
        {filtered.length === 0 ? (
          <p className="mt-12 text-sm text-muted">No articles match that filter.</p>
        ) : (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item) => <ArticleCard key={item.id} {...item} />)}
          </div>
        )}
      </Section>
      <InlineCta title="Prefer to start selling?" sub="Read about it later — forking a catalogue takes minutes." />
    </>
  )
}
