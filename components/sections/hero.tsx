import Link from 'next/link'
import { HERO_STATS, LANGUAGES, MARQUEE_ITEMS } from '@/lib/site-data'

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center opacity-40"
        style={{ backgroundImage: 'url(/images/hero-books.png)' }}
        aria-hidden
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-background/70 via-background/80 to-background"
        aria-hidden
      />

      <div className="mx-auto max-w-5xl px-5 pb-16 pt-24 text-center sm:pt-32">
        <p className="mb-6 text-xs uppercase tracking-[0.3em] text-primary">
          ✦ Fully Online · International Book Marketing Agency ✦
        </p>
        <h1 className="text-balance font-serif text-4xl font-semibold leading-[1.05] sm:text-6xl md:text-7xl">
          Your Book Deserves to Shine
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          A fully online, international book marketing and publishing agency - transforming authors
          into bestsellers across Amazon, Goodreads, and every major platform. Entirely online - no
          physical office, serving authors worldwide.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
          {LANGUAGES.map((l) => (
            <span key={l.label} className="flex items-center gap-1.5">
              <span aria-hidden>{l.flag}</span> {l.label}
            </span>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Book Your Free Strategy Call
          </Link>
          <Link
            href="/portfolio"
            className="rounded-full border border-border px-7 py-3 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
          >
            View the Portfolio
          </Link>
        </div>

        <dl className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-6 sm:grid-cols-4">
          {HERO_STATS.map((s) => (
            <div key={s.label} className="text-center">
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="block font-serif text-3xl font-semibold text-primary sm:text-4xl">
                  {s.value}
                </span>
                <span className="mt-1 block text-xs uppercase tracking-wider text-muted-foreground">
                  {s.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="relative overflow-hidden border-y border-border/60 bg-card/40 py-4">
        <div className="flex w-max animate-marquee gap-8 whitespace-nowrap">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} className="flex items-center gap-8 text-sm text-muted-foreground">
              <span className="text-primary">✦</span> {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
