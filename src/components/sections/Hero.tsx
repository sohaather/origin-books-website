import { Link } from 'react-router-dom'
import Hero3DBook from '@/components/three/Hero3DBook'
import StaticBookFallback from '@/components/three/StaticBookFallback'
import ErrorBoundary from '@/components/ErrorBoundary'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink-950 pt-20">
      <div className="grain absolute inset-0" />
      <div
        className="pointer-events-none absolute -top-40 right-0 h-[520px] w-[520px] rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(circle, #B08D57 0%, transparent 70%)' }}
      />

      <div className="container-editorial relative grid min-h-[calc(100svh-5rem)] items-center gap-10 py-16 md:grid-cols-2 md:gap-6 md:py-20">
        <div className="order-2 md:order-1">
          <p className="eyebrow">Origin Books Publishing</p>
          <h1 className="mt-6 max-w-xl font-display text-4xl leading-[1.08] text-white sm:text-5xl lg:text-6xl">
            Your book deserves a publisher who treats it like{' '}
            <span className="text-brass">literature</span>, not a project.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-slate-300">
            Origin Books Publishing guides authors worldwide from finished manuscript to published
            book — editing, design, formatting, and distribution, handled with editorial care.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link to="/contact" className="btn-primary">
              Publish Your Book
            </Link>
            <Link to="/services" className="btn-secondary-dark">
              Explore Our Services
            </Link>
          </div>
        </div>

        <div className="order-1 h-[340px] sm:h-[420px] md:order-2 md:h-[560px]">
          <ErrorBoundary fallback={<StaticBookFallback />}>
            <Hero3DBook />
          </ErrorBoundary>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <div className="container-editorial rule" />
      </div>
    </section>
  )
}
