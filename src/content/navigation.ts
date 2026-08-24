export interface NavLink {
  label: string
  path: string
}

export const primaryNav: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Blogs', path: '/blogs' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

export const footerNav: NavLink[] = [
  { label: 'Services', path: '/services' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Blogs', path: '/blogs' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

export const legalNav: NavLink[] = [
  { label: 'Privacy Policy', path: '/privacy-policy' },
  { label: 'Terms & Conditions', path: '/terms-and-conditions' },
]
