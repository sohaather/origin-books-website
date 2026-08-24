import { useEffect, useState } from 'react'
import { Link, NavLink as RouterNavLink, useLocation } from 'react-router-dom'
import { primaryNav } from '@/content/navigation'
import { business } from '@/content/business'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ease-editorial ${
        scrolled || menuOpen ? 'bg-ink-950/95 backdrop-blur-sm shadow-[0_1px_0_0_rgba(255,255,255,0.08)]' : 'bg-transparent'
      }`}
    >
      <nav className="container-editorial flex h-20 items-center justify-between" aria-label="Primary">
        <Link
          to="/"
          className="font-display text-lg tracking-wide text-white"
          aria-label={`${business.businessName} — Home`}
        >
          Origin <span className="text-brass">Books</span>
        </Link>

        <ul className="hidden items-center gap-10 md:flex">
          {primaryNav.map((item) => (
            <li key={item.path}>
              <RouterNavLink
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `font-mono text-[11px] uppercase tracking-widest2 transition-colors duration-300 ease-editorial link-underline pb-1 ${
                    isActive ? 'text-brass' : 'text-slate-200 hover:text-white'
                  }`
                }
              >
                {item.label}
              </RouterNavLink>
            </li>
          ))}
        </ul>

        <Link to="/contact" className="hidden md:inline-flex btn-primary text-xs">
          Publish Your Book
        </Link>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`block h-px w-6 bg-white transition-transform duration-300 ease-editorial ${
              menuOpen ? 'translate-y-[3.5px] rotate-45' : ''
            }`}
          />
          <span
            className={`block h-px w-6 bg-white transition-opacity duration-300 ease-editorial ${
              menuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`block h-px w-6 bg-white transition-transform duration-300 ease-editorial ${
              menuOpen ? '-translate-y-[3.5px] -rotate-45' : ''
            }`}
          />
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`fixed inset-0 top-20 z-40 bg-ink-950 transition-opacity duration-300 ease-editorial md:hidden ${
          menuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <ul className="container-editorial flex flex-col gap-2 pt-10">
          {primaryNav.map((item, index) => (
            <li
              key={item.path}
              className={`border-b border-white/10 transition-all duration-500 ease-editorial ${
                menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
              }`}
              style={{ transitionDelay: menuOpen ? `${index * 60}ms` : '0ms' }}
            >
              <RouterNavLink
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `block py-5 font-display text-3xl ${isActive ? 'text-brass' : 'text-white'}`
                }
              >
                {item.label}
              </RouterNavLink>
            </li>
          ))}
          <li className="pt-8">
            <Link to="/contact" className="btn-primary w-full">
              Publish Your Book
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
