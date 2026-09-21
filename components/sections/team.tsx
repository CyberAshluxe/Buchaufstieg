import { SectionHeading } from '@/components/section-heading'
import { TEAM_LEADS, AWARDS } from '@/lib/site-data'

export function Team() {
  return (
    <section className="border-t border-border/60 bg-card/30">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <SectionHeading
          eyebrow="The Agency Built for Authors"
          title="Meet the Buchaufstieg Team"
          subtitle="A boutique agency built on two pillars - strategic precision and genuine love for literature. Every campaign carries our personal signature."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {TEAM_LEADS.map((member) => (
            <div key={member.name} className="rounded-xl border border-border/60 bg-card p-8">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-primary/40 bg-primary/10 font-serif text-xl text-primary">
                  {member.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>
                <div>
                  <h3 className="font-serif text-xl">{member.name}</h3>
                  <p className="text-sm text-primary">{member.role}</p>
                </div>
              </div>
              <p className="mt-3 text-xs uppercase tracking-wider text-muted-foreground">
                {member.focus}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{member.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-primary/20 bg-primary/5 p-8">
          <h3 className="font-serif text-2xl">Awards Our Authors Have Won</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Real recognition, earned by real authors we've worked alongside.
          </p>
          <ul className="mt-6 space-y-3">
            {AWARDS.map((award) => (
              <li key={award} className="text-sm leading-relaxed">
                {award}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
