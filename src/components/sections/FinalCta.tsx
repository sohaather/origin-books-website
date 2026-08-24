import { Link } from 'react-router-dom'
import Reveal from '@/components/Reveal'

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-28 text-white lg:py-36">
      <div className="grain absolute inset-0" />
      <div
        className="pointer-events-none absolute -bottom-32 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(circle, #B08D57 0%, transparent 70%)' }}
      />
      <div className="container-editorial relative text-center">
        <Reveal>
          <p className="eyebrow justify-center">Ready When You Are</p>
          <h2 className="mx-auto mt-6 max-w-2xl font-display text-4xl leading-tight sm:text-5xl">
            Your manuscript is ready for a publisher who takes it seriously.
          </h2>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/contact" className="btn-primary">
              Publish Your Book
            </Link>
            <Link to="/services" className="btn-secondary-dark">
              Explore Our Services
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
