import Reveal from '@/components/Reveal'

const reasons = [
  {
    title: 'Editorial-first approach',
    description: 'Every book starts with the manuscript, not the marketing plan. Editing and craft come first.',
  },
  {
    title: 'End-to-end support',
    description: 'One partner for editing, design, formatting, publishing, and marketing — no handoffs between vendors.',
  },
  {
    title: 'Built for authors worldwide',
    description: 'Our process is designed to work smoothly no matter where in the world you are writing from.',
  },
  {
    title: 'You keep your rights',
    description: 'We provide publishing services on your behalf. You retain full ownership of your work.',
  },
]

export default function WhyAuthorsChooseUs() {
  return (
    <section className="bg-ink-950 py-24 text-white lg:py-32">
      <div className="container-editorial grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
        <Reveal>
          <p className="eyebrow">Why Authors Choose Origin Books</p>
          <h2 className="mt-5 font-display text-3xl leading-tight sm:text-4xl">
            Care that shows up in the finished book.
          </h2>
        </Reveal>

        <div className="grid gap-10 sm:grid-cols-2">
          {reasons.map((reason, i) => (
            <Reveal key={reason.title} delay={i * 0.08}>
              <h3 className="font-display text-lg text-brass-light">{reason.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{reason.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
