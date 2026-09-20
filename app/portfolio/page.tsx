import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { SectionHeading } from '@/components/section-heading'
import { PortfolioGallery } from '@/components/portfolio-gallery'
import { CTA } from '@/components/sections/cta'
import { Goodreads } from '@/components/sections/goodreads'

export const metadata: Metadata = {
  title: 'Portfolio — Real Campaigns, Real Authors | BuchBoost',
  description:
    'Explore real BuchBoost campaigns: cinematic book mockups, author posters, and verified Goodreads placements for authors across French, German, and English markets.',
}

export default function PortfolioPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="border-b border-border/60 bg-card/30">
          <div className="mx-auto max-w-6xl px-5 py-20 text-center">
            <SectionHeading
              eyebrow="The Portfolio"
              title="Real Campaigns. Real Authors. Real Results."
              subtitle="Every image below is an actual campaign asset we created for a real author — cinematic book mockups, author posters, and verified Goodreads group placements across international markets."
            />
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-20">
          <PortfolioGallery />
        </section>

        <Goodreads />
        <CTA />
      </main>
      <SiteFooter />
    </>
  )
}
