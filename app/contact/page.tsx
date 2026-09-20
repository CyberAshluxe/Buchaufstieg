import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { SectionHeading } from '@/components/section-heading'
import { ContactForm } from '@/components/contact-form'
import { MessageCircle, Mail, Music2 } from 'lucide-react'
import { CONTACT } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Contact — Book Your Free Strategy Call | BuchBoost',
  description:
    'Tell us about your book and book a free strategy call. Reach BuchBoost via WhatsApp, email, or TikTok — a fully online agency serving authors worldwide.',
}

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="border-b border-border/60 bg-card/30">
          <div className="mx-auto max-w-6xl px-5 py-20 text-center">
            <SectionHeading
              eyebrow="Let's Talk About Your Book"
              title="Book Your Free Strategy Call"
              subtitle="Tell us about your book and your goals. We take only a handful of clients each month — if we can tell you're truly ready, we'll even build your first Author Reel completely free."
            />
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr]">
            <div>
              <h2 className="font-serif text-2xl">Get In Touch</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                We&apos;re a fully online agency — no physical office, serving authors across the
                globe. The fastest way to reach us is WhatsApp.
              </p>

              <ul className="mt-8 space-y-4">
                <ContactRow
                  icon={<MessageCircle size={18} />}
                  label="WhatsApp (fastest response)"
                  value={CONTACT.whatsapp}
                />
                <ContactRow
                  icon={<Mail size={18} />}
                  label="Technical / Secure"
                  value={CONTACT.email}
                />
                <ContactRow
                  icon={<Mail size={18} />}
                  label="General Enquiries"
                  value={CONTACT.general}
                />
                <ContactRow
                  icon={<Music2 size={18} />}
                  label="TikTok"
                  value={CONTACT.tiktok}
                />
              </ul>

              <div className="mt-8 rounded-xl border border-primary/20 bg-primary/5 p-6">
                <p className="font-serif text-lg">🎁 Your First Author Reel — Free</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Message us and tell us about your book. If we can tell you genuinely believe in
                  it and you&apos;re ready to show up for it, we&apos;ll build your first cinematic
                  Author Reel at no cost.
                </p>
              </div>
            </div>

            <ContactForm />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}

function ContactRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: string
}) {
  return (
    <li className="flex items-center gap-4 rounded-xl border border-border/60 bg-card p-4">
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
        {icon}
      </span>
      <div>
        <p className="text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
        <p className="font-medium">{value}</p>
      </div>
    </li>
  )
}
