import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { SectionHeading } from '@/components/section-heading'
import { ServiceCard } from '@/components/service-card'
import { RoiCalculator } from '@/components/roi-calculator'
import { Process } from '@/components/sections/process'
import { CTA } from '@/components/sections/cta'
import { SERVICES } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Services - 15 Pillars of Book Domination | Buchaufstieg',
  description:
    'Book promotion, social media marketing, SEO for authors, paid advertising, branding, blog tours, podcast promotion, and more - every service engineered to turn authors into bestsellers.',
}

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="border-b border-border/60 bg-card/30">
          <div className="mx-auto max-w-6xl px-5 py-20 text-center">
            <SectionHeading
              eyebrow="15 Pillars of Book Domination"
              title="Every Service Is a Precision Instrument"
              subtitle="From cinematic promotion to paid advertising, every service is built to move your book from obscurity to bestseller status - across every major platform and language market."
            />
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-20">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <ServiceCard key={s.title} service={s} />
            ))}
          </div>
        </section>

        <RoiCalculator />
        <Process />
        <CTA />
      </main>
      <SiteFooter />
    </>
  )
}
