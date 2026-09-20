import { SectionHeading } from '@/components/section-heading'
import { TESTIMONIALS } from '@/lib/site-data'

export function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeading
        eyebrow="Author Voices"
        title="Words From Authors We've Transformed"
      />
      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <blockquote
            key={t.name}
            className="flex flex-col rounded-xl border border-border/60 bg-card p-7"
          >
            <span className="font-serif text-4xl leading-none text-primary" aria-hidden>
              &ldquo;
            </span>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground/90">{t.quote}</p>
            <footer className="mt-5 border-t border-border/60 pt-4">
              <p className="font-serif text-base">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.book}</p>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  )
}
