import { Link } from 'react-router-dom'
import { portfolioItems } from '@/content/portfolio'
import Reveal from '@/components/Reveal'

export default function PortfolioPreview() {
  const preview = portfolioItems.slice(0, 3)

  return (
    <section className="bg-paper py-24 lg:py-32">
      <div className="container-editorial">
        <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-ink-900/60">Portfolio</p>
            <h2 className="mt-5 max-w-lg font-display text-3xl leading-tight text-ink-900 sm:text-4xl">
              A glimpse of our published work.
            </h2>
          </div>

          <Link
            to="/portfolio"
            className="link-underline shrink-0 font-mono text-xs uppercase tracking-widest2 text-ink-900"
          >
            View full portfolio &rarr;
          </Link>
        </Reveal>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {preview.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.08}>
              <Link to="/portfolio" className="group block">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-slate-100">
                  <img
                    src={item.cover}
                    alt={`${item.title} book cover`}
                    className="h-full w-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.03]"
                  />
                </div>

                <h3 className="mt-5 font-display text-lg text-ink-900">
                  {item.title}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  {item.format}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}