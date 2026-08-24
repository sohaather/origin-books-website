import { testimonials } from '@/content/testimonials'
import Reveal from '@/components/Reveal'

export default function TestimonialsSection() {
  return (
    <section className="bg-ink-950 py-24 text-white lg:py-32">
      <div className="container-editorial">
        <Reveal>
          <p className="eyebrow">Author Testimonials</p>
          <h2 className="mt-5 max-w-xl font-display text-3xl leading-tight sm:text-4xl">
            What authors say once their book is in hand.
          </h2>
        </Reveal>

        {testimonials.length === 0 ? (
          <Reveal delay={0.1} className="mt-14 max-w-lg border-l-2 border-brass/50 pl-6">
            <p className="text-slate-400">
              Author testimonials will appear here once available. We only publish real, author-supplied
              feedback.
            </p>
          </Reveal>
        ) : (
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.author} delay={i * 0.08} className="border-l-2 border-brass/50 pl-6">
                <p className="font-display text-lg leading-snug text-slate-100">&ldquo;{t.quote}&rdquo;</p>
                <p className="mt-4 font-mono text-xs uppercase tracking-widest2 text-brass-light">
                  {t.author}
                  {t.book ? ` — ${t.book}` : ''}
                </p>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
