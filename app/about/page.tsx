import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { SectionHeading } from '@/components/section-heading'
import { CTA } from '@/components/sections/cta'

export const metadata: Metadata = {
  title: 'About - Buchaufstieg',
  description:
    'Learn about Buchaufstieg, the international online book marketing agency helping authors grow visibility, reach, and sales.',
}

const points = [
  'We help authors become visible where readers already are: Amazon, Goodreads, social platforms, and international communities.',
  'We combine strategy, storytelling, and creative execution to turn books into stronger commercial products.',
  'We keep our client list intentionally small so every campaign gets the attention it deserves.',
  'We work as an extension of the author brand, helping you build recognition, trust, and momentum that lasts beyond launch week.',
]

const differentiators = [
  {
    title: 'Author-first strategy',
    body: 'We build campaigns around the book’s actual audience, positioning, and long-term commercial potential - not generic marketing templates.',
  },
  {
    title: 'International market thinking',
    body: 'We understand how readers behave across language markets and platform ecosystems, helping authors expand beyond their local audience.',
  },
  {
    title: 'Creative with commercial intent',
    body: 'Every visual, message, and placement is designed to do two things at once: stop the scroll and create conversion.',
  },
  {
    title: 'Hands-on partnership',
    body: 'You are not lost in a large agency pipeline. We work closely with each author, ensuring the campaign reflects the story, the voice, and the vision behind the book.',
  },
]

const audience = [
  'Debut authors who need clarity and visibility',
  'Genre fiction writers ready to scale discovery',
  'Non-fiction authors building authority and trust',
  'International authors expanding into new language markets',
  'Writers with a strong manuscript but weak visibility',
]

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="border-b border-border/60 bg-card/30">
          <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
            <SectionHeading
              eyebrow="About Buchaufstieg"
              title="We help books find the readers who are already looking for them."
              subtitle="Buchaufstieg is a boutique, fully online book marketing agency for authors who want more visibility, stronger positioning, and real momentum in the market."
            />

            <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="rounded-2xl border border-border/60 bg-background p-8">
                <p className="text-sm uppercase tracking-[0.2em] text-primary">Our mission</p>
                <h3 className="mt-4 font-serif text-3xl text-foreground">
                  We turn attention into a more discoverable, sellable author brand.
                </h3>

                <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
                  {points.map((point) => (
                    <div key={point} className="flex gap-3">
                      <span className="mt-1 text-primary">✦</span>
                      <p>{point}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8">
                <p className="text-sm uppercase tracking-[0.2em] text-primary">Why authors choose us</p>
                <ul className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
                  <li>• Boutique strategy rather than mass-market marketing</li>
                  <li>• Focus on discoverability, conversion, and reader retention</li>
                  <li>• International reach with a personal, hands-on experience</li>
                  <li>• Creative campaign direction tailored to each author&apos;s book</li>
                </ul>

                <Link
                  href="/contact"
                  className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Book a Strategy Call
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-20">
          <SectionHeading
            eyebrow="How we work"
            title="Clear strategy, creative execution, measurable momentum."
            subtitle="Every campaign is built around reader behaviour, genre fit, and the best way to position your book in front of the people most likely to buy it."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Positioning',
                body: 'We identify the strongest audience, market angle, and message behind your book so it stands out clearly.',
              },
              {
                title: 'Creative',
                body: 'We build the visuals, messaging, and campaign assets that make a book feel premium and memorable.',
              },
              {
                title: 'Growth',
                body: 'We optimise reach and performance so the campaign creates not just views, but real engagement and sales.',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-border/60 bg-card p-7">
                <span className="text-primary">✦</span>
                <h3 className="mt-4 font-serif text-xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-border/60 bg-card/30">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <SectionHeading
              eyebrow="Why Buchaufstieg"
              title="The difference between a book that exists and a book that grows."
              subtitle="A lot of marketing agencies chase attention. We chase the right attention: readers who are already in the market for your story and are ready to trust it."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {differentiators.map((item) => (
                <div key={item.title} className="rounded-2xl border border-border/60 bg-background p-7">
                  <h3 className="font-serif text-2xl">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-20">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <SectionHeading
                eyebrow="Who we serve"
                title="Built for authors with real potential and real ambition."
                subtitle="Whether you are launching a debut title, growing a series, or expanding into a new market, we help you translate reader interest into long-term momentum."
                align="left"
              />
            </div>

            <div className="rounded-2xl border border-border/60 bg-card p-8">
              <ul className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                {audience.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 text-primary">✦</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <SiteFooter />
    </>
  )
}
