import { Link } from 'react-router-dom'
import Seo from '@/components/Seo'
import PageHeader from '@/components/PageHeader'
import Reveal from '@/components/Reveal'

const pillars = [
  {
    title: 'Editing & Proofreading',
    description: 'Structural, line, and copy editing that respects your voice while sharpening the work.',
  },
  {
    title: 'Design & Formatting',
    description: 'Cover design, interior formatting, and typesetting for print and digital editions.',
  },
  {
    title: 'Publishing & Distribution',
    description: 'Preparing and guiding submission to platforms including Amazon KDP and IngramSpark.',
  },
  {
    title: 'Marketing & Branding',
    description: 'Launch planning and author branding that carries across your books and platforms.',
  },
]

export default function About() {
  return (
    <>
      <Seo
        title="About"
        description="Origin Books Publishing is a professional publishing services company helping authors worldwide with editing, design, formatting, publishing, distribution, and marketing."
        path="/about"
      />
      <PageHeader
        eyebrow="About Origin Books Publishing"
        title="A publishing services company built for authors, wherever they are."
      />

      <section className="bg-paper py-24 lg:py-28">
        <div className="container-editorial grid gap-12 md:grid-cols-[1fr_1fr] md:gap-16">
          <Reveal>
            <p className="eyebrow text-ink-900/60">Our Focus</p>
            <h2 className="mt-5 font-display text-3xl leading-tight text-ink-900 sm:text-4xl">
              Publishing support, without the guesswork.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="leading-relaxed text-slate-600">
              Origin Books Publishing is a professional publishing services company. We work with authors
              on editing, proofreading, design, formatting, publishing, distribution, and marketing —
              helping turn a finished manuscript into a properly published book.
            </p>
            <p className="mt-5 leading-relaxed text-slate-600">
              We work with authors around the world, and our process is built to run smoothly regardless
              of where you're based or what stage your manuscript is at.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink-950 py-24 text-white lg:py-28">
        <div className="container-editorial">
          <Reveal>
            <p className="eyebrow">What We Handle</p>
            <h2 className="mt-5 max-w-lg font-display text-3xl leading-tight sm:text-4xl">
              One team, across the entire publishing journey.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-10 sm:grid-cols-2">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 0.08} className="border-t border-white/10 pt-6">
                <h3 className="font-display text-lg text-brass-light">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{pillar.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-24 text-center lg:py-28">
        <div className="container-editorial">
          <Reveal>
            <h2 className="mx-auto max-w-xl font-display text-3xl leading-tight text-ink-900 sm:text-4xl">
              Ready to talk about your manuscript?
            </h2>
            <Link to="/contact" className="btn-secondary mt-8 inline-flex">
              Get in Touch
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
