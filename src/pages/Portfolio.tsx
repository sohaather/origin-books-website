import { useMemo, useState } from 'react'
import Seo from '@/components/Seo'
import PageHeader from '@/components/PageHeader'
import Reveal from '@/components/Reveal'
import { portfolioItems } from '@/content/portfolio'

export default function Portfolio() {
  const categories = useMemo(
    () => ['All', ...Array.from(new Set(portfolioItems.map((item) => item.category)))],
    []
  )
  const [active, setActive] = useState('All')

  const filtered =
    active === 'All' ? portfolioItems : portfolioItems.filter((item) => item.category === active)

  return (
    <>
      <Seo
        title="Portfolio"
        description="A look at the range of book projects Origin Books Publishing works on — from fiction and memoir to non-fiction and poetry."
        path="/portfolio"
      />
      <PageHeader
        eyebrow="Portfolio"
        title="A range of books, one editorial standard."
        description="This section is structured to showcase real projects as they're completed. The entries below are placeholders reserved for that content."
      />

      <section className="bg-paper py-20 lg:py-24">
        <div className="container-editorial">
          <div className="flex flex-wrap gap-3" role="tablist" aria-label="Filter portfolio by category">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={active === category}
                onClick={() => setActive(category)}
                className={`border px-5 py-2 font-mono text-[11px] uppercase tracking-widest2 transition-colors duration-300 ease-editorial ${
                  active === category
                    ? 'border-brass bg-brass text-ink-950'
                    : 'border-ink-900/15 text-slate-500 hover:border-brass hover:text-brass-dark'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item, i) => (
              <Reveal key={item.id} delay={(i % 3) * 0.06}>
                <article className="group">
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-ink-900">
                    <div
                      className="absolute inset-0 opacity-90 transition-transform duration-700 ease-editorial group-hover:scale-105"
                      style={{ background: 'linear-gradient(155deg, #16223A 0%, #0B1220 65%, #080D18 100%)' }}
                    />
                    <div className="absolute inset-x-6 bottom-8 h-px bg-brass/60" />
                    <span className="absolute left-6 top-6 font-mono text-[11px] uppercase tracking-widest2 text-brass-light">
                      {item.category}
                    </span>
                    <span className="absolute right-6 top-6 rounded-none border border-white/20 px-2 py-1 font-mono text-[10px] uppercase tracking-widest2 text-white/70">
                      Placeholder
                    </span>
                  </div>
                  <h2 className="mt-5 font-display text-lg text-ink-900">{item.title}</h2>
                  <p className="mt-1 text-sm text-slate-500">{item.format}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
