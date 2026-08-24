import { useState } from 'react'
import { faqItems } from '@/content/faq'
import Reveal from '@/components/Reveal'

function FaqRow({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  const id = question.replace(/\s+/g, '-').toLowerCase()

  return (
    <div className="border-b border-ink-900/15 py-6">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={`faq-${id}`}
        className="flex w-full items-center justify-between gap-6 text-left"
      >
        <span className="font-display text-lg text-ink-900 sm:text-xl">{question}</span>
        <span
          className={`shrink-0 font-mono text-xl text-brass transition-transform duration-300 ease-editorial ${
            open ? 'rotate-45' : ''
          }`}
          aria-hidden="true"
        >
          +
        </span>
      </button>
      <div
        id={`faq-${id}`}
        className={`grid transition-all duration-300 ease-editorial ${
          open ? 'mt-4 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <p className="overflow-hidden text-sm leading-relaxed text-slate-500">{answer}</p>
      </div>
    </div>
  )
}

export default function FaqSection() {
  return (
    <section className="bg-paper py-24 lg:py-32">
      <div className="container-editorial grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
        <Reveal>
          <p className="eyebrow text-ink-900/60">Frequently Asked</p>
          <h2 className="mt-5 font-display text-3xl leading-tight text-ink-900 sm:text-4xl">
            Questions authors ask before publishing.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div>
            {faqItems.map((item) => (
              <FaqRow key={item.question} question={item.question} answer={item.answer} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
