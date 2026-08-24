import { processSteps } from '@/content/process'
import Reveal from '@/components/Reveal'

export default function ProcessSection() {
  return (
    <section className="bg-paper py-24 lg:py-32">
      <div className="container-editorial">
        <Reveal>
          <p className="eyebrow text-ink-900/60">Publishing Process</p>
          <h2 className="mt-5 max-w-xl font-display text-3xl leading-tight text-ink-900 sm:text-4xl">
            A clear, considered path from manuscript to market.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-0 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, i) => (
            <Reveal key={step.step} delay={(i % 3) * 0.08}>
              <div className="border-t border-ink-900/15 py-8 pr-6">
                <span className="font-mono text-xs text-brass">{step.step}</span>
                <h3 className="mt-3 font-display text-xl text-ink-900">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
