import { Link } from 'react-router-dom'
import { footerNav, legalNav } from '@/content/navigation'
import { business } from '@/content/business'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-ink-950 text-slate-200">
      <div className="container-editorial grid gap-12 py-20 md:grid-cols-[1.4fr_1fr_1fr] md:gap-10 lg:py-24">
        <div>
          <p className="font-display text-2xl text-white">
            Origin <span className="text-brass">Books</span>
          </p>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
            {business.businessName} is a full-service publishing partner for authors worldwide — editing, design,
            formatting, distribution, and marketing under one roof.
          </p>
          <a
            href={`tel:${business.phone}`}
            className="link-underline mt-6 inline-block font-mono text-sm text-slate-200"
          >
            {business.phoneDisplay}
          </a>
        </div>

        <div>
          <p className="eyebrow">Explore</p>
          <ul className="mt-5 space-y-3">
            {footerNav.map((item) => (
              <li key={item.path}>
                <Link to={item.path} className="link-underline text-sm text-slate-300 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow">Legal</p>
          <ul className="mt-5 space-y-3">
            {legalNav.map((item) => (
              <li key={item.path}>
                <Link to={item.path} className="link-underline text-sm text-slate-300 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="eyebrow mt-8">Start a Project</p>
          <Link to="/contact" className="link-underline mt-4 inline-block text-sm text-brass-light">
            Get in touch &rarr;
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-editorial flex flex-col gap-2 py-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {year} {business.businessName}. All rights reserved.
          </p>
          <p className="font-mono uppercase tracking-widest2">Publishing services for authors worldwide</p>
        </div>
      </div>
    </footer>
  )
}
