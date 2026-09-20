import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { SectionHeading } from '@/components/section-heading'
import { TESTIMONIALS, AWARDS } from '@/lib/site-data'
import { CTA } from '@/components/sections/cta'
import { AuthorReviewCarousel } from '@/components/sections/author-review-carousel'

export const metadata: Metadata = {
  title: 'Results — BuchBoost',
  description:
    'Real author results, verified sales data, Goodreads evidence, and campaign outcomes from BuchBoost book marketing campaigns.',
}

const resultStats = [
  { value: '340%', label: 'Average Sales Increase' },
  { value: '5K+', label: 'Reader Reviews Earned' },
  { value: 'Top 50', label: 'Amazon Rankings' },
  { value: '98%', label: 'Client Satisfaction' },
]

const awardImages = [
  { src: '/award 1.png', label: AWARDS[0] },
  { src: '/award 2.jpg', label: AWARDS[1] },
  { src: '/award 3.jpg', label: AWARDS[2] },
]

const goodreadsResults = [
  {
    marker: '🔥',
    views: '1,000,000 Views',
    group: 'Bestsellers Fiction › Exclusive Books',
    book: 'In Our Strange Gardens',
    author: 'Michel Quint',
    image: '/In Our Strange Gardens.png',
    body: 'Placed in the single most-viewed Goodreads fiction group. One placement. One million eyes on this book.',
  },
  {
    marker: '⚡',
    views: '528,206 Views',
    group: 'The Last Light Circle › Wartime Literature',
    book: 'In Our Strange Gardens',
    author: 'Michel Quint — 2nd Placement',
    image: '/528,206 views.png',
    body: 'A second targeted group placement for the same title — amplifying reach across wartime literature readers.',
  },
  {
    marker: '✦',
    views: '117,652 Views',
    group: 'Groupe International de Science-Fiction',
    book: "L'île du Kamas",
    author: 'Nicolas Antoniucci',
    image: "/L'île du Kamas.png",
    body: 'Placed in the largest French-language sci-fi group on Goodreads. Hundreds of new reader adds within days.',
  },
  {
    marker: '✦',
    views: '52,715 Views',
    group: 'Kommunikation & Beziehungen › Bewusst DENKEN',
    book: 'Bewusst DENKEN',
    author: 'Bernhard Fink',
    image: '/Bewusst DENKEN.png',
    body: 'Austrian self-help title placed in the German-language psychology group — 52K views, hundreds of shelf adds.',
  },
  {
    marker: '✦',
    views: '46,788 Views',
    group: 'Psychologisches Drama › Aus Den Augen',
    book: 'Aus den Augen',
    author: 'Christoph Braendle',
    image: '/Aus den Augen.png',
    body: 'Placed in the German psychological drama community — a precision match that drove engaged, committed readers.',
  },
  {
    marker: '✦',
    views: '14,325 Views',
    group: 'The Green Hour Readers',
    book: 'The Caddie Who Knew Ben Hogan',
    author: 'John Coyne',
    image: '/The Caddie Who Knew Ben Hogan.png',
    body: 'English-language placement in a curated literary fiction group — proof our reach extends across international markets.',
  },
]

export default function ResultsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="border-b border-border/60 bg-card/30">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <div className="flex flex-col items-center text-center">
              <p className="mb-3 text-xs uppercase tracking-[0.25em] text-primary">Author Voices</p>
              <h1 className="max-w-3xl font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
                Words From Authors We&apos;ve Transformed
              </h1>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {resultStats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-border/60 bg-card p-6 text-center">
                  <div className="font-serif text-4xl text-primary">{stat.value}</div>
                  <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-20">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {TESTIMONIALS.map((testimonial) => (
              <blockquote key={testimonial.name} className="rounded-2xl border border-border/60 bg-card p-7">
                <span className="font-serif text-4xl leading-none text-primary" aria-hidden>
                  “
                </span>
                <p className="mt-2 text-sm leading-relaxed text-foreground/90">{testimonial.quote}</p>
                <footer className="mt-5 border-t border-border/60 pt-4">
                  <p className="font-serif text-base">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.book}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        <AuthorReviewCarousel />

        <section className="border-t border-border/60 bg-card/30">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <SectionHeading
              eyebrow="We&apos;re Proud Of Them"
              title="Awards Our Authors Have Won"
              subtitle="Real recognition, earned by real authors we&apos;ve worked alongside. Every award is a milestone we celebrate with them."
            />

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {awardImages.map((award) => (
                <div key={award.label} className="overflow-hidden rounded-2xl border border-border/60 bg-card">
                  <img
                    src={award.src}
                    alt={award.label}
                    className="h-auto w-full object-contain"
                  />
                  <div className="px-5 py-4 text-sm leading-relaxed text-foreground/90">
                    {award.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-20">
          <div className="space-y-10">
            <div>
              <SectionHeading
                eyebrow="Verified Proof"
                title="Live Sales Dashboard Screenshots"
                subtitle="Real sales increase screenshots sent directly to us by our buyers. Account names are hidden at their request — but the numbers speak for themselves. This is what real, verifiable results look like."
                align="left"
              />
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {[
                { src: '/screenshot%201.png', label: 'Author-Submitted — Amazon KDP Dashboard — $42,215 Estimated Royalties (This Month)' },
                { src: '/screenshot%202.jpg', label: 'Author-Submitted — Amazon KDP Dashboard — $820,564.50 Royalties Earned' },
                { src: '/screenshot%203.png', label: 'Author-Submitted — Amazon KDP Dashboard — £5,773.75 Estimated Royalties (August)' },
                { src: '/screenshot%204.png', label: 'Author-Submitted — Online Store Dashboard — $30,971.74 Daily Sales, 814 Orders' },
                { src: '/screenshot%205.png', label: 'Campaign Summary — Monthly Book Marketing Sales Report Compiled From Buyer Data' },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-border/60 bg-card p-4">
                  <img
                    src={item.src}
                    alt={item.label}
                    className="h-auto w-full rounded-xl border border-border/60 bg-background object-contain"
                  />
                  <p className="mt-3 text-sm text-muted-foreground">✦ {item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-border/60 bg-card/30">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <SectionHeading
              eyebrow="Verified Proof"
              title="Real Goodreads Evidence"
              align="left"
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-border/60 bg-card p-5">
                <img
                  src="/Goodreads%20screenshot%201.jpg"
                  alt="Bernhard Fink Goodreads screenshot showing 52,715 views"
                  className="h-auto w-full rounded-xl border border-border/60 bg-background object-contain"
                />
                <p className="mt-3 text-sm text-muted-foreground">✦ Bernhard Fink — 52,715 Goodreads Views</p>
              </div>
              <div className="rounded-2xl border border-border/60 bg-card p-5">
                <img
                  src="/Goodreads%20screenshot%202.jpg"
                  alt="Live Goodreads discussion screenshot showing 394 views"
                  className="h-auto w-full rounded-xl border border-border/60 bg-background object-contain"
                />
                <p className="mt-3 text-sm text-muted-foreground">✦ Live Goodreads Discussion — 394 Views</p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-border/60 bg-card/30">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <SectionHeading
              eyebrow="The Most Underestimated Tool in Book Marketing"
              title="Goodreads Discussion Groups"
              subtitle="Why Goodreads Groups Are the Most Powerful Sales Engine Your Book Isn&apos;t Using"
            />

            <div className="mx-auto mt-12 max-w-4xl space-y-6 text-base leading-relaxed text-foreground/90">
              <p>Goodreads has 150 million registered readers — and buried inside it are thousands of highly active discussion groups, each filled with passionate readers who are actively looking for their next book. These are not passive scrollers. These are people who finish 30, 50, 80 books a year. They write reviews. They recommend to friends. They move the needle on Amazon rankings just by talking.</p>
              <p>When your book appears inside a relevant discussion group — with a compelling description, the right genre match, and a professional presentation — those readers don&apos;t just see it. They engage with it. They add it to their shelves. They post comments. They share. And every single one of those actions triggers Goodreads&apos; algorithm to push your book further to even more readers.</p>
              <p>This is not advertising. It is not a paid promotion that readers scroll past. It is organic discovery — the most trusted form of book marketing that exists. A reader who finds your book in a discussion group they love feels like they discovered it themselves. And that feeling is what turns a reader into a buyer, and a buyer into a loyal fan who tells everyone they know.</p>
              <p>Most authors never touch Goodreads groups because they don&apos;t know how to access them, which ones to target, or how to present their book without getting ignored or removed. We do. We&apos;ve placed hundreds of books into the exact right groups — and the numbers speak for themselves.</p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { value: '150M', label: 'Active Readers on Goodreads' },
                { value: '1.7M+', label: 'Combined Group Views — Our Campaigns' },
                { value: '72%', label: 'Of Readers Act on Goodreads Recommendations' },
                { value: '48h', label: 'Average Time to First Visible Results' },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-border/60 bg-card p-6 text-center">
                  <div className="font-serif text-4xl text-primary">{stat.value}</div>
                  <div className="mt-2 text-sm leading-relaxed text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-20">
              <SectionHeading
                eyebrow="Live Campaign Results"
                title="Real Placements. Real Numbers."
                subtitle="These are actual screenshots from live Goodreads discussion group placements we ran for our authors. Every view count is real. Every group is active. Every placement was strategically chosen."
                align="left"
              />

              <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {goodreadsResults.map((result) => (
                  <article key={`${result.book}-${result.views}`} className="overflow-hidden rounded-2xl border border-border/60 bg-card">
                    <div className="border-b border-border/60 bg-background p-4">
                      <img src={result.image} alt={`${result.group} Goodreads discussion proof`} className="h-auto w-full object-contain" />
                    </div>
                    <div className="p-6">
                      <p className="text-sm font-semibold text-primary">{result.marker} {result.views}</p>
                      <p className="mt-3 text-xs uppercase tracking-[0.12em] text-muted-foreground">{result.group}</p>
                      <h3 className="mt-4 font-serif text-xl">{result.book}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{result.author}</p>
                      <p className="mt-4 text-sm leading-relaxed text-foreground/85">{result.body}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-16 rounded-2xl border border-primary/30 bg-primary/5 p-8 text-center">
              <h3 className="font-serif text-3xl">Your book deserves to be in these groups.</h3>
              <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">Every week you wait is another week your ideal readers spend their time on someone else&apos;s book. Let us place yours in front of the exact communities that are waiting for it.</p>
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <SiteFooter />
    </>
  )
}
