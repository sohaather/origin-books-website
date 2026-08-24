import { useEffect } from 'react'
import { siteUrl } from '@/content/business'

interface SeoProps {
  title: string
  description: string
  path?: string
}

function setMetaTag(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

/**
 * Lightweight, dependency-free SEO helper.
 * Updates the document title, meta description, canonical link, and Open Graph tags per page.
 */
export default function Seo({ title, description, path = '' }: SeoProps) {
  useEffect(() => {
    const fullTitle = title.includes('Origin Books Publishing') ? title : `${title} | Origin Books Publishing`
    document.title = fullTitle

    setMetaTag('name', 'description', description)
    setMetaTag('property', 'og:title', fullTitle)
    setMetaTag('property', 'og:description', description)

    if (siteUrl) {
      const canonicalHref = `${siteUrl}${path}`
      let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
      if (!link) {
        link = document.createElement('link')
        link.setAttribute('rel', 'canonical')
        document.head.appendChild(link)
      }
      link.setAttribute('href', canonicalHref)
      setMetaTag('property', 'og:url', canonicalHref)
    }
  }, [title, description, path])

  return null
}
