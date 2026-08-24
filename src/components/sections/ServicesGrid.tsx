import { Link } from 'react-router-dom'
import { services } from '@/content/services'
import Reveal from '@/components/Reveal'

export default function ServicesGrid() {
  return (
    <section className="bg-ink-950 py-24 text-white lg:py-32">
      <div className="container-editorial">
        <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">What We Do</p>
            <h2 className="mt-5 max-w-lg font-display text-3xl leading-tight sm:text-4xl">
              Full-service publishing, from first edit to final distribution.
            </h2>
          </div>
          <Link to="/services" className="link-underline shrink-0 font-mono text-xs uppercase tracking-widest2 text-brass-light">
            View all services &rarr;
          </Link>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden border border-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 3) * 0.06} className="h-full">
              <Link
                to="/services"
                className="group flex h-full flex-col justify-between border border-white/10 bg-ink-950 p-8 transition-colors duration-300 ease-editorial hover:bg-ink-900"
              >
                <div>
                  <span className="font-mono text-xs text-brass">{service.number}</span>
                  <h3 className="mt-4 font-display text-xl text-white">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">{service.summary}</p>
                </div>
                <span className="mt-8 inline-block font-mono text-[11px] uppercase tracking-widest2 text-slate-500 transition-colors duration-300 ease-editorial group-hover:text-brass-light">
                  Learn more &rarr;
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
