import { SectionHeading } from '@/components/section-heading'
import { DELIVERABLES } from '@/lib/site-data'

export function Deliverables() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeading
        eyebrow="Every Campaign Includes These Deliverables"
        title="Concrete, Cinematic, Professional Assets"
        subtitle="Not promises. Not vague 'exposure.' Assets that elevate your book to the standard of major publishers."
      />
      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {DELIVERABLES.map((d) => (
          <div
            key={d.title}
            className="flex flex-col rounded-xl border border-border/60 bg-card p-7 transition-colors hover:border-primary/50"
          >
            <h3 className="font-serif text-xl">{d.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{d.body}</p>
            <p className="mt-5 text-xs uppercase tracking-wider text-primary">{d.tags}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
