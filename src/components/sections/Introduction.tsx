import Reveal from '@/components/Reveal'

export default function Introduction() {
  return (
    <section className="bg-paper py-24 lg:py-32">
      <div className="container-editorial grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
        <Reveal>
          <p className="eyebrow text-ink-900/60">Who We Are</p>
          <h2 className="mt-5 font-display text-3xl leading-tight text-ink-900 sm:text-4xl">
            A publishing partner built for authors, not algorithms.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-lg leading-relaxed text-slate-700">
            Origin Books Publishing exists to give independent authors the same level of care that
            traditional publishing houses reserve for their biggest titles. We work across editing,
            design, formatting, and distribution — helping you move from finished manuscript to a
            book you're proud to put your name on, wherever in the world you're writing from.
          </p>
          <p className="mt-6 leading-relaxed text-slate-500">
            Every project moves through the same disciplined process: understand the manuscript,
            edit it with care, design and format it properly, then prepare it for the platforms
            that will carry it to readers.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
