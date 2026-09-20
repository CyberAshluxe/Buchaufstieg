'use client'

import { useState, type FormEvent } from 'react'
import { Check } from 'lucide-react'
import { SERVICES } from '@/lib/site-data'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-primary/30 bg-primary/5 p-10 text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Check size={26} />
        </span>
        <h3 className="mt-5 font-serif text-2xl">Your Brief Is In.</h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
          Thank you — we&apos;ve received your details. For the fastest response, message us on
          WhatsApp and we&apos;ll begin mapping out your campaign right away.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-xl border border-border/60 bg-card p-7">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Your Name" name="name" required />
        <Field label="Email" name="email" type="email" required />
        <Field label="Book Title" name="book" />
        <div>
          <label htmlFor="language" className="mb-2 block text-sm">
            Language Market
          </label>
          <select
            id="language"
            name="language"
            className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground"
          >
            {['French', 'German', 'English', 'Spanish', 'Dutch', 'Other'].map((l) => (
              <option key={l}>{l}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="service" className="mb-2 block text-sm">
          Service You&apos;re Interested In
        </label>
        <select
          id="service"
          name="service"
          className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground"
        >
          <option>Not sure yet — help me decide</option>
          {SERVICES.map((s) => (
            <option key={s.title}>{s.title}</option>
          ))}
        </select>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="mb-2 block text-sm">
          Tell Us About Your Book
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground"
          placeholder="Genre, current status, goals, and what you're hoping to achieve..."
        />
      </div>

      <button
        type="submit"
        className="mt-6 w-full rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
      >
        Send My Brief
      </button>
    </form>
  )
}

function Field({
  label,
  name,
  type = 'text',
  required,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm">
        {label}
        {required && <span className="text-primary"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground"
      />
    </div>
  )
}
