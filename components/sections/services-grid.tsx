import { SectionHeading } from '@/components/section-heading'
import { ServiceCard } from '@/components/service-card'
import { SERVICES } from '@/lib/site-data'

export function ServicesGrid({ count }: { count?: number }) {
  const services = count ? SERVICES.slice(0, count) : SERVICES
  return (
    <section className="border-t border-border/60 bg-card/30">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <SectionHeading
          eyebrow="15 Pillars of Book Domination"
          title="Every Service Is a Precision Instrument"
          subtitle="Built to move your book from obscurity to bestseller status."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.title} service={s} />
          ))}
        </div>
      </div>
    </section>
  )
}
