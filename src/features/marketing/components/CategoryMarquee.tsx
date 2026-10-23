import { Marquee } from '../../../components/ui/Marquee'
import { categories } from '../../../content/home'

export function CategoryMarquee() {
  return (
    <section aria-label="Product categories" className="border-b border-border bg-bg py-10">
      <div className="mx-auto w-full max-w-[var(--container)] px-4 sm:px-6 lg:px-8">
        <p className="overline text-center text-subtle">Built for people who move products</p>
      </div>
      <Marquee className="mt-6">
        {categories.map((category) => (
          <span
            key={category.label}
            className="rounded-full border border-border-strong px-5 py-2 text-sm font-semibold"
          >
            {category.label}
          </span>
        ))}
      </Marquee>
    </section>
  )
}
