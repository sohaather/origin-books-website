import Reveal from '@/components/Reveal'

export default function Introduction() {
  return (
    <section className="bg-paper py-24 lg:py-32">
      <div className="container-editorial">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <Reveal>
            <div className="flex items-start gap-4">
              <span className="mt-1 h-8 w-1 rounded-full bg-brass" />
              <div>
                <p className="eyebrow text-ink-900/60">Who We Are</p>
                <h2 className="mt-5 max-w-md font-display text-4xl leading-[1.08] text-ink-900 sm:text-5xl">
                  A publishing partner built for authors, not algorithms.
                </h2>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="max-w-2xl">
              <p className="text-xl leading-relaxed text-ink-900/90 sm:text-2xl">
                Origin Books Publishing exists to give independent authors the same level of care
                that traditional publishing houses reserve for their biggest titles.
              </p>

              <p className="mt-7 leading-relaxed text-slate-600">
                We work across editing, design, formatting, and distribution — helping you move
                from finished manuscript to a book you're proud to put your name on, wherever in
                the world you're writing from.
              </p>

              <div className="my-9 h-px w-full bg-slate-200" />

              <p className="leading-relaxed text-slate-500">
                Every project moves through the same disciplined process: understand the manuscript,
                edit it with care, design and format it properly, then prepare it for the platforms
                that will carry it to readers.
              </p>

              <div className="mt-10 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-ink-900/50">
                <span className="h-2 w-2 rounded-full bg-brass" />
                Publishing worldwide
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}