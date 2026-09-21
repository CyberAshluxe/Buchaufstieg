import { SectionHeading } from '@/components/section-heading'
import { PILLARS } from '@/lib/site-data'

export function Philosophy() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeading
        eyebrow="A Question Worth Sitting With"
        title="We Don't Just Market Books - We Build Author Empires"
        subtitle="Be honest with me - not for my sake, for yours. If your book disappeared tomorrow and no one ever read it, would anything actually change? And if the answer hurts… what does that tell you?"
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PILLARS.map((p) => (
          <div
            key={p.title}
            className="rounded-xl border border-border/60 bg-card p-7 transition-colors hover:border-primary/50"
          >
            <span className="text-primary">✦</span>
            <h3 className="mt-4 font-serif text-xl">{p.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
