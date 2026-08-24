import { Link } from 'react-router-dom'
import Seo from '@/components/Seo'

export default function NotFound() {
  return (
    <>
      <Seo title="Page Not Found" description="The page you're looking for doesn't exist." path="/404" />
      <section className="flex min-h-[80vh] items-center justify-center bg-paper">
        <div className="container-editorial text-center">
          <p className="eyebrow justify-center text-ink-900/60">404</p>
          <h1 className="mt-5 font-display text-4xl text-ink-900 sm:text-5xl">This page doesn't exist.</h1>
          <p className="mt-4 text-slate-500">The page you're looking for may have been moved or removed.</p>
          <Link to="/" className="btn-secondary mt-8 inline-flex">
            Back to Home
          </Link>
        </div>
      </section>
    </>
  )
}
