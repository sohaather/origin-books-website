import { Link } from 'react-router-dom'
import Seo from '@/components/Seo'
import PageHeader from '@/components/PageHeader'
import Reveal from '@/components/Reveal'
import { services } from '@/content/services'

export default function Services() {
  return (
    <>
      <Seo
        title="Publishing Services"
        description="Editing, proofreading, book formatting, typesetting, cover design, eBook and print publishing, Amazon KDP, IngramSpark, ISBN registration, book marketing, and author branding."
        path="/services"
      />
      <PageHeader
        eyebrow="Services"
        title="Every step of publishing, handled with editorial care."
        description="From your first edit to your book appearing on retail shelves, Origin Books Publishing manages each stage of the process so you can stay focused on writing."
      />

      <section className="bg-paper py-24 lg:py-28">
        <div className="container-editorial grid gap-px overflow-hidden border border-ink-900/10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 3) * 0.06}>
              <div className="flex h-full flex-col justify-between border border-ink-900/10 bg-paper p-8">
                <div>
                  <span className="font-mono text-xs text-brass-dark">{service.number}</span>
                  <h2 className="mt-4 font-display text-xl text-ink-900">{service.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-500">{service.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-ink-950 py-24 text-white lg:py-28">
        <div className="container-editorial text-center">
          <Reveal>
            <h2 className="font-display text-3xl leading-tight sm:text-4xl">
              Not sure which services your book needs?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-slate-300">
              Tell us about your manuscript and we'll recommend a path suited to your goals and timeline.
            </p>
            <Link to="/contact" className="btn-primary mt-8 inline-flex">
              Publish Your Book
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
