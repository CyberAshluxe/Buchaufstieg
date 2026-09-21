import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { SectionHeading } from '@/components/section-heading'
import { PROCESS_STEPS } from '@/lib/site-data'
import { CTA } from '@/components/sections/cta'

export const metadata: Metadata = {
  title: 'How It Works - Buchaufstieg',
  description:
    'A four-step process from manuscript to movement with cinematic assets, SEO dashboards, and strategic author growth campaigns.',
}

const deliverables = [
  {
    icon: '🎨',
    title: 'Cinematic Book Mockups',
    body: 'Your book cover transformed into breathtaking 3D visual scenes - floating in space, resting on ancient stone, glowing in an enchanted forest. Used across Amazon, Goodreads, and social media. Your book looks like it belongs on a bestseller shelf.',
    tags: 'Amazon A+ Content · Social Posts · Goodreads Banners',
  },
  {
    icon: '🎭',
    title: 'Author Poster - You Are the Story',
    body: 'We believe: without the author, there is no story. Author posters place you at the centre - your face, your presence, your name - surrounded by the world of your book. These cinematic posters build personal brand recognition that readers remember long after the last page.',
    tags: 'Social Campaigns · Press Kits · Amazon Author Page',
  },
  {
    icon: '📚',
    title: 'Goodreads Group Placements',
    body: 'Strategic placement inside the most active reader communities on Goodreads - matched precisely to your genre and language market. Readers engage, add to shelves, and share. This is where organic discovery lives.',
    tags: '150M+ Reader Community · Algorithm Boosting · Reviews',
  },
  {
    icon: '🎬',
    title: 'Cinematic Book Trailers',
    body: '60-second visual narratives that capture the soul of your book. Original music. Atmospheric visuals. Trailers that stop people mid-scroll and make them want to read your book immediately. Available in multiple languages.',
    tags: 'BookTok · YouTube · Instagram Reels · Author Website',
  },
  {
    icon: '🔍',
    title: 'Amazon SEO & Metadata',
    body: "Your book's discoverability on Amazon is determined entirely by its metadata. We rewrite all of it using data-driven research. The difference between invisible and visible is often just the right seven words.",
    tags: 'Amazon Search Rankings · Kindle Discovery · Bestsellers',
  },
  {
    icon: '🌍',
    title: 'Multi-Language Campaigns',
    body: 'Your story has no borders. We run campaigns in French, German, English, Spanish, and Dutch - targeting reader communities across 12+ countries worldwide.',
    tags: '5 Language Markets · 12+ Countries · Cross-Cultural',
  },
]

export default function HowItWorksPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="border-b border-border/60 bg-card/30">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <SectionHeading
              eyebrow="The Process"
              title="From Manuscript to Movement"
              subtitle="Four deliberate steps. Infinite reach. Every author's journey with us follows a proven framework that transforms books into cultural moments."
            />

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {PROCESS_STEPS.map((step) => (
                <div key={step.num} className="rounded-2xl border border-border/60 bg-card p-7">
                  <span className="font-serif text-5xl font-semibold text-primary/40">{step.num}</span>
                  <h3 className="mt-4 font-serif text-xl">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-20">
          <SectionHeading
            eyebrow="What You Actually Receive"
            title="Every Campaign Includes These Deliverables"
            subtitle="Not promises. Not vague exposure. Concrete, cinematic, professional assets that elevate your book to the standard of major publishers."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {deliverables.map((item) => (
              <article key={item.title} className="rounded-2xl border border-border/60 bg-card p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-xl">
                    {item.icon}
                  </span>
                  <h3 className="font-serif text-xl">{item.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                <div className="mt-4 text-xs uppercase tracking-[0.16em] text-primary">{item.tags}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-border/60 bg-card/30">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <SectionHeading
              eyebrow="This Is What Sets Us Apart"
              title="Every Campaign Comes With Its Own Live SEO Dashboard"
              subtitle="Most authors never see the actual data behind their book’s discoverability - they just hope it’s working. We don’t do hope. Every active campaign is tracked on a real, live dashboard: the exact keywords readers are searching, how much traffic each one drives, where your readers are actually discovering you, and how your visibility is trending week over week. This is the difference between a marketing agency that tells you it’s working, and one that shows you."
            />

            <div className="mt-10 rounded-2xl border border-border/60 bg-background p-5">
              <div className="flex min-h-[260px] items-center justify-center rounded-xl border border-dashed border-border/70 bg-card text-sm text-muted-foreground">
                Live SEO Dashboard Preview
              </div>
            </div>

            <p className="mt-5 text-sm text-muted-foreground">
              ✦ A real, live Book Visibility Dashboard from an active campaign - keyword rankings, search volume, referral traffic, and reader discovery sources, updated continuously. This is standard on every campaign we run.
            </p>

            <div className="mt-12">
              <h3 className="font-serif text-2xl">Plus a Monthly Book Health Checkup</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Beyond keywords, we track the overall health of your book&apos;s online presence - traffic trends, bounce rate, top referral sources, and a single clear score so you always know exactly where you stand. No guesswork, no vague “it&apos;s going well.” Just the numbers.
              </p>
            </div>

            <div className="mt-8 rounded-2xl border border-border/60 bg-background p-5">
              <div className="flex min-h-[220px] items-center justify-center rounded-xl border border-dashed border-border/70 bg-card text-sm text-muted-foreground">
                Book Health Checkup Preview
              </div>
            </div>

            <p className="mt-5 text-sm text-muted-foreground">
              ✦ A real Book Health Checkup from an active campaign - an at-a-glance health score, traffic trends, top sources, and key takeaways, delivered every month.
            </p>

            <div className="mt-12 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                I Want This For My Book →
              </Link>
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <SiteFooter />
    </>
  )
}
