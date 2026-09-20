import { SectionHeading } from '@/components/section-heading'
import { PARTNERSHIP_ITEMS } from '@/lib/site-data'

export function Partnerships() {
  return (
    <section className="border-t border-border/60 bg-card/30">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <SectionHeading
          eyebrow="Partnerships"
          title="Built for Authors Who Want More Than a One-Off Campaign"
          subtitle="The strongest campaigns happen when your strategy, your positioning, and your audience all line up. We build around that reality."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PARTNERSHIP_ITEMS.map((item) => (
            <div key={item.title} className="rounded-xl border border-border/60 bg-card p-6">
              <span className="text-primary">✦</span>
              <h3 className="mt-4 font-serif text-xl">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
