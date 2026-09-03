import { useState, type FormEvent, type ChangeEvent } from 'react'
import Seo from '@/components/Seo'
import PageHeader from '@/components/PageHeader'
import Reveal from '@/components/Reveal'
import { business } from '@/content/business'
import { services } from '@/content/services'

interface FormState {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

const initialState: FormState = {
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialState)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})

  const handleChange =
    (field: keyof FormState) =>
    (
      e: ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }))
    }

  const validate = (): boolean => {
    const nextErrors: Partial<Record<keyof FormState, string>> = {}

    if (!form.name.trim()) {
      nextErrors.name = 'Please enter your name.'
    }

    if (!form.email.trim()) {
      nextErrors.email = 'Please enter your email.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = 'Please enter a valid email address.'
    }

    if (!form.message.trim()) {
      nextErrors.message = 'Tell us a little about your project.'
    }

    setErrors(nextErrors)

    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    if (!validate()) return

    // Frontend-only for this stage — no backend, database, or CRM connection yet.
    // This is where a future submission handler (email/CRM/API) will be wired in.
    setSubmitted(true)
    setForm(initialState)
  }

  return (
    <>
      <Seo
        title="Contact"
        description="Get in touch with Origin Books Publishing to discuss editing, design, formatting, and publishing your book."
        path="/contact"
      />

      <PageHeader
        eyebrow="Contact"
        title="Tell us about your book."
        description="Share a few details and we'll follow up to talk through the right path for your manuscript."
      />

      <section className="bg-paper py-24 lg:py-28">
        <div className="container-editorial grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow text-ink-900/60">Get in Touch</p>

            <h2 className="mt-5 font-display text-3xl leading-tight text-ink-900">
              {business.businessName}
            </h2>

            <div className="mt-8 space-y-6">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-widest2 text-slate-400">
                  Phone
                </p>

                <div className="mt-2 space-y-2">
                  <a
                    href={`tel:${business.phone}`}
                    className="link-underline block text-lg text-ink-900"
                  >
                    🇬🇧 {business.phoneDisplay}
                  </a>

                  <a
                    href="tel:+14255540642"
                    className="link-underline block text-lg text-ink-900"
                  >
                    🇺🇸 +1 425 554 0642
                  </a>
                </div>
              </div>

              <div>
                <p className="font-mono text-[11px] uppercase tracking-widest2 text-slate-400">
                  Availability
                </p>

                <p className="mt-1 text-slate-600">
                  Working with authors worldwide.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            {submitted ? (
              <div className="border border-brass/40 bg-white p-10 text-center">
                <p className="font-display text-2xl text-ink-900">
                  Thank you.
                </p>

                <p className="mt-3 text-slate-600">
                  Your message has been received. We'll follow up with you
                  shortly.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="btn-secondary mt-8 inline-flex"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="font-mono text-[11px] uppercase tracking-widest2 text-slate-500"
                    >
                      Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange('name')}
                      aria-invalid={!!errors.name}
                      aria-describedby={
                        errors.name ? 'name-error' : undefined
                      }
                      className="mt-2 w-full border border-ink-900/20 bg-white px-4 py-3 text-ink-900 outline-none transition-colors duration-300 ease-editorial focus:border-brass"
                    />

                    {errors.name && (
                      <p
                        id="name-error"
                        className="mt-1 text-xs text-red-700"
                      >
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="font-mono text-[11px] uppercase tracking-widest2 text-slate-500"
                    >
                      Email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange('email')}
                      aria-invalid={!!errors.email}
                      aria-describedby={
                        errors.email ? 'email-error' : undefined
                      }
                      className="mt-2 w-full border border-ink-900/20 bg-white px-4 py-3 text-ink-900 outline-none transition-colors duration-300 ease-editorial focus:border-brass"
                    />

                    {errors.email && (
                      <p
                        id="email-error"
                        className="mt-1 text-xs text-red-700"
                      >
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="phone"
                      className="font-mono text-[11px] uppercase tracking-widest2 text-slate-500"
                    >
                      Phone{' '}
                      <span className="normal-case text-slate-400">
                        (optional)
                      </span>
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange('phone')}
                      className="mt-2 w-full border border-ink-900/20 bg-white px-4 py-3 text-ink-900 outline-none transition-colors duration-300 ease-editorial focus:border-brass"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="font-mono text-[11px] uppercase tracking-widest2 text-slate-500"
                    >
                      Service
                    </label>

                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={handleChange('service')}
                      className="mt-2 w-full border border-ink-900/20 bg-white px-4 py-3 text-ink-900 outline-none transition-colors duration-300 ease-editorial focus:border-brass"
                    >
                      <option value="">Select a service</option>

                      {services.map((service) => (
                        <option key={service.slug} value={service.title}>
                          {service.title}
                        </option>
                      ))}

                      <option value="Not sure yet">Not sure yet</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="font-mono text-[11px] uppercase tracking-widest2 text-slate-500"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange('message')}
                    aria-invalid={!!errors.message}
                    aria-describedby={
                      errors.message ? 'message-error' : undefined
                    }
                    className="mt-2 w-full border border-ink-900/20 bg-white px-4 py-3 text-ink-900 outline-none transition-colors duration-300 ease-editorial focus:border-brass"
                  />

                  {errors.message && (
                    <p
                      id="message-error"
                      className="mt-1 text-xs text-red-700"
                    >
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full sm:w-auto"
                >
                  Send Message
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  )
}