import Link from 'next/link'
import { MARQUEE_ITEMS } from '@/lib/site-data'

export function CTA() {
  const highlights = MARQUEE_ITEMS.slice(0, 4)
  return (
    <section className="mx-auto max-w-6xl px-5 py-24">
      <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-card to-background p-10 text-center sm:p-16">
        <p className="text-xs uppercase tracking-[0.3em] text-primary">Let's Launch Your Book</p>
        <h2 className="mx-auto mt-4 max-w-2xl text-balance font-serif text-3xl font-semibold sm:text-5xl">
          What Would Your Book Look Like In Our Hands?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-pretty text-muted-foreground">
          Every campaign you see started with one conversation. Book your free strategy call and
          we'll show you exactly what we'd create for your book.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="rounded-full bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Book Your Free Strategy Call
          </Link>
          <Link
            href="/portfolio"
            className="rounded-full border border-border px-8 py-3 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
          >
            Explore the Portfolio
          </Link>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
          {highlights.map((h) => (
            <span key={h} className="flex items-center gap-2">
              <span className="text-primary">✦</span> {h}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
