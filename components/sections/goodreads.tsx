import { SectionHeading } from '@/components/section-heading'

const STATS = [
  { value: '150M', label: 'Active Readers on Goodreads' },
  { value: '1.7M+', label: 'Combined Group Views — Our Campaigns' },
  { value: '72%', label: 'Of Readers Act on Goodreads Recommendations' },
  { value: '48h', label: 'Average Time to First Visible Results' },
]

export function Goodreads() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeading
        eyebrow="The Most Underestimated Tool in Book Marketing"
        title="Why Goodreads Groups Are the Most Powerful Sales Engine Your Book Isn't Using"
        align="left"
      />
      <div className="mt-8 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
          <p>
            Goodreads has 150 million registered readers — and buried inside it are thousands of
            highly active discussion groups, each filled with passionate readers who are actively
            looking for their next book. These are not passive scrollers. These are people who
            finish 30, 50, 80 books a year. They write reviews. They recommend to friends. They move
            the needle on Amazon rankings just by talking.
          </p>
          <p>
            When your book appears inside a relevant discussion group — with a compelling
            description, the right genre match, and a professional presentation — those readers
            don't just see it. They engage with it. They add it to their shelves. They post
            comments. They share. And every single one of those actions triggers Goodreads'
            algorithm to push your book further to even more readers.
          </p>
          <p>
            This is not advertising. It is organic discovery — the most trusted form of book
            marketing that exists. A reader who finds your book in a discussion group they love
            feels like they discovered it themselves. And that feeling is what turns a reader into a
            buyer, and a buyer into a loyal fan who tells everyone they know.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-border/60 bg-card p-6 text-center"
            >
              <span className="block font-serif text-3xl font-semibold text-primary">
                {s.value}
              </span>
              <span className="mt-2 block text-xs leading-snug text-muted-foreground">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
