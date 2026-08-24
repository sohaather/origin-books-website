import type { ReactNode } from 'react'
import Reveal from '@/components/Reveal'

interface PageHeaderProps {
  eyebrow: string
  title: string
  description?: ReactNode
}

export default function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-ink-950 pb-20 pt-36 text-white lg:pb-28 lg:pt-44">
      <div className="grain absolute inset-0" />
      <div className="container-editorial relative">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-6 max-w-2xl font-display text-4xl leading-tight sm:text-5xl">{title}</h1>
          {description ? <p className="mt-6 max-w-xl text-slate-300">{description}</p> : null}
        </Reveal>
      </div>
    </section>
  )
}
