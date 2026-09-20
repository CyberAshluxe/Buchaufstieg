import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { CTA } from '@/components/sections/cta'

export const metadata: Metadata = {
  title: 'Publishing — BuchBoost',
  description:
    'BuchBoost is now a publisher — offering full-service publishing, distribution, branding, and author-career support for authors worldwide.',
}

const publishingServices = [
  {
    icon: '🧭',
    title: 'Self-Publishing Guidance',
    subtitle: 'Every Stage, Expertly Guided',
    items: [
      'Platform selection guidance',
      'Publishing roadmap & strategy',
      'Pricing & royalty optimization',
      'Metadata & keyword optimization',
      'Upload & publishing assistance',
      'Publishing review & quality checks',
    ],
  },
  {
    icon: '©️',
    title: 'ISBN & Copyright',
    subtitle: 'Registration & Publishing Essentials',
    items: [
      'ISBN acquisition & registration',
      'Copyright application guidance',
      'Barcode generation',
      'Publisher imprint guidance',
      'Legal documentation assistance',
      'Copyright page setup',
    ],
  },
  {
    icon: '🌍',
    title: 'Distribution Setup',
    subtitle: 'Get Onto Every Major Retailer',
    items: [
      'Amazon KDP setup',
      'IngramSpark distribution',
      'Apple Books placement',
      'Google Play Books setup',
      'Kobo Writing Life setup',
      'Barnes & Noble Press setup',
      'Expanded global distribution',
      'Print-on-demand configuration',
    ],
  },
  {
    icon: '📄',
    title: 'eBook & Print Formatting',
    subtitle: 'Professional Formatting, Every Format',
    items: [
      'Kindle (KPF/MOBI) formatting',
      'EPUB formatting',
      'Paperback formatting',
      'Hardcover formatting',
      'Interior layout design',
      'Print-ready PDF creation',
    ],
  },
  {
    icon: '⚙️',
    title: 'Publishing Account Setup',
    subtitle: 'Complete Setup & Optimization',
    items: [
      'Amazon KDP account setup',
      'IngramSpark account setup',
      'Kobo Writing Life setup',
      'Draft2Digital setup',
      'Apple Books account guidance',
      'Publishing profile optimization',
    ],
  },
  {
    icon: '📦',
    title: 'Publishing Packages',
    subtitle: 'Complete Solutions, Tailored to You',
    items: [
      'Editing, formatting & cover design',
      'ISBN & distribution setup',
      'eBook & paperback publishing',
      'Hardcover publishing options',
      'Marketing preparation',
      'Launch-ready publishing package',
    ],
  },
  {
    icon: '🪪',
    title: 'Author Brand Setup',
    subtitle: 'A Professional Presence Before Launch',
    items: [
      'Amazon Author Central setup',
      'Goodreads Author profile setup',
      'Author website guidance',
      'Professional author biography',
      'Social media branding',
      'Media kit preparation',
    ],
  },
  {
    icon: '🖨️',
    title: 'Print & Production Services',
    subtitle: 'Professional-Quality Printing',
    items: [
      'Paperback production setup',
      'Hardcover production setup',
      'Print quality review',
      'Paper & trim size guidance',
      'Spine & bleed verification',
      'Final publishing checklist',
    ],
  },
]

const authorCareerServices = [
  {
    icon: '🎨',
    title: 'Author Branding',
    subtitle: 'A Brand Readers Remember',
    items: [
      'Professional logo & brand identity',
      'Author bio & tagline development',
      'Visual identity & color palette',
      'Brand style guide creation',
      'Brand positioning strategy',
      'Personal brand messaging',
    ],
  },
  {
    icon: '🌐',
    title: 'Author Website',
    subtitle: 'Showcase, Grow, Sell',
    items: [
      'Custom website design & development',
      'Mobile-responsive & SEO-optimized',
      'Book showcase & purchase links',
      'Newsletter signup integration',
      'Contact & media inquiry forms',
      'Blog & news section',
      'Event calendar integration',
      'Analytics & performance setup',
    ],
  },
  {
    icon: '📱',
    title: 'Social Media Setup',
    subtitle: 'A Presence That Attracts Readers',
    items: [
      'Profile creation & optimization',
      'Consistent branding across platforms',
      '30-day content calendar',
      'Profile graphics & banners',
      'Link optimization',
      'Follower growth strategies',
      'Audience engagement plan',
      'Platform best practices',
    ],
  },
  {
    icon: '🎤',
    title: 'Speaking & Events',
    subtitle: 'Connect With Readers Live',
    items: [
      'Speaker profile development',
      'Presentation coaching',
      'Event outreach & booking',
      'Media & speaker press kit',
      'Virtual event support',
      'Book signing preparation',
      'Literary festival outreach',
      'Interview preparation',
    ],
  },
  {
    icon: '🗞️',
    title: 'Media Kit & Press Materials',
    subtitle: 'Present Yourself Professionally',
    items: [
      'Professional author media kit',
      'Author one-sheet',
      'High-quality press materials',
      'Interview question sheet',
      'Book fact sheet',
      'Downloadable press assets',
    ],
  },
  {
    icon: '🤝',
    title: 'Reader Community Growth',
    subtitle: 'An Audience For Every Book',
    items: [
      'Reader engagement strategy',
      'Newsletter audience growth',
      'Reader magnet development',
      'Community-building campaigns',
      'Fan group setup & management',
      'Long-term audience retention',
    ],
  },
]

export default function PublishingPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="border-b border-border/60 bg-card/30">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <div className="flex flex-col items-center text-center">
              <p className="mb-3 text-xs uppercase tracking-[0.25em] text-primary">📢 Big News</p>
              <h1 className="max-w-3xl font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
                BuchBoost Is Now a Publisher
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                We&apos;re no longer just marketing your book — we can publish it, distribute it worldwide, and build the career around it. From your first ISBN to your tenth award submission, we&apos;re with you.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-20">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.25em] text-primary">Publishing</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight">
              Full-Service Publishing
            </h2>
            <p className="mt-4 mx-auto max-w-3xl text-base text-muted-foreground">
              Everything an indie author needs to go from manuscript to worldwide release.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {publishingServices.map((service) => (
              <article key={service.title} className="rounded-2xl border border-border/60 bg-card p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-xl">
                    {service.icon}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl leading-tight">{service.title}</h3>
                    <p className="text-xs uppercase tracking-[0.14em] text-primary">{service.subtitle}</p>
                  </div>
                </div>
                <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 text-primary">◆</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-border/60 bg-card/30">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <div className="text-center">
              <p className="text-xs uppercase tracking-[0.25em] text-primary">Author Career</p>
              <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight">
                Build a Lasting Career
              </h2>
              <p className="mt-4 mx-auto max-w-3xl text-base text-muted-foreground">
                Publishing a book is one milestone. We help you build the whole career around it.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {authorCareerServices.map((service) => (
                <article key={service.title} className="rounded-2xl border border-border/60 bg-card p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-xl">
                      {service.icon}
                    </span>
                    <div>
                      <h3 className="font-serif text-xl leading-tight">{service.title}</h3>
                      <p className="text-xs uppercase tracking-[0.14em] text-primary">{service.subtitle}</p>
                    </div>
                  </div>
                  <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 text-primary">◆</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <SiteFooter />
    </>
  )
}
