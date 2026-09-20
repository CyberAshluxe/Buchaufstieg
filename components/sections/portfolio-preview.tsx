import Link from 'next/link'
import { SectionHeading } from '@/components/section-heading'
import { PortfolioCard } from '@/components/portfolio-card'
import { PORTFOLIO_ITEMS } from '@/lib/site-data'

export function PortfolioPreview() {
  const preview = PORTFOLIO_ITEMS.slice(0, 8)
  return (
    <section className="border-t border-border/60 bg-card/30">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <SectionHeading
          eyebrow="Campaigns That Changed Careers"
          title="This Is What Your Book Could Look Like"
          subtitle="Every image is a real campaign asset we created for a real author — mockups, author posters, and verified Goodreads placements."
        />
        <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {preview.map((item, i) => (
            <PortfolioCard key={`${item.title}-${i}`} item={item} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/portfolio"
            className="rounded-full bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            View the Full Portfolio
          </Link>
        </div>
      </div>
    </section>
  )
}
