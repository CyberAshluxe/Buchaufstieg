import { SectionHeading } from '@/components/section-heading'
import { PROCESS_STEPS } from '@/lib/site-data'

export function Process() {
  return (
    <section className="border-t border-border/60 bg-card/30">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <SectionHeading
          eyebrow="From Manuscript to Movement"
          title="Four Deliberate Steps. Infinite Reach."
          subtitle="Every author's journey with us follows a proven framework that transforms books into cultural moments."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((step) => (
            <div key={step.num} className="rounded-xl border border-border/60 bg-card p-7">
              <span className="font-serif text-5xl font-semibold text-primary/40">{step.num}</span>
              <h3 className="mt-4 font-serif text-xl">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
