import Seo from '@/components/Seo'
import PageHeader from '@/components/PageHeader'
import Reveal from '@/components/Reveal'

export default function TermsAndConditions() {
  return (
    <>
      <Seo
        title="Terms & Conditions"
        description="Terms & Conditions for Origin Books Publishing."
        path="/terms-and-conditions"
      />
      <PageHeader eyebrow="Legal" title="Terms & Conditions" />

      <section className="bg-paper py-24 lg:py-28">
        <div className="container-editorial max-w-3xl">
          <Reveal>
            <div className="border border-dashed border-ink-900/20 bg-white/50 p-10 text-center">
              <p className="font-display text-xl text-ink-900">Content pending</p>
              <p className="mt-3 text-slate-500">
                This page is structured and ready. Final Terms & Conditions content will be added here
                once supplied.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
