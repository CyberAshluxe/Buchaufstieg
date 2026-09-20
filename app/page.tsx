import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Hero } from '@/components/sections/hero'
import { Philosophy } from '@/components/sections/philosophy'
import { ServicesGrid } from '@/components/sections/services-grid'
import { PortfolioPreview } from '@/components/sections/portfolio-preview'
import { Goodreads } from '@/components/sections/goodreads'
import { RoiCalculator } from '@/components/roi-calculator'
import { Deliverables } from '@/components/sections/deliverables'
import { Process } from '@/components/sections/process'
import { Testimonials } from '@/components/sections/testimonials'
import { AuthorReviewCarousel } from '@/components/sections/author-review-carousel'
import { Team } from '@/components/sections/team'
import { Partnerships } from '@/components/sections/partnerships'
import { CTA } from '@/components/sections/cta'

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Philosophy />
        <PortfolioPreview />
        <Deliverables />
        <Goodreads />
        <Partnerships />
        <ServicesGrid count={6} />
        <RoiCalculator />
        <Process />
        <Testimonials />
        <AuthorReviewCarousel />
        <Team />
        <CTA />
      </main>
      <SiteFooter />
    </>
  )
}
