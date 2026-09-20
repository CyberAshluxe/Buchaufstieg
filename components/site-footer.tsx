import Link from 'next/link'
import { NAV_LINKS, CONTACT } from '@/lib/site-data'

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Link href="/" className="flex items-center gap-2 font-serif text-xl">
              <span className="text-primary">✦</span>
              <span className="font-semibold">BuchBoost</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              A fully online, international book marketing and publishing agency — transforming
              authors into bestsellers across every major platform.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-lg">Explore</h3>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg">Get In Touch</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>WhatsApp (fastest): {CONTACT.whatsapp}</li>
              <li>Technical: {CONTACT.email}</li>
              <li>General: {CONTACT.general}</li>
              <li>TikTok: {CONTACT.tiktok}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border/60 pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} BuchBoost — Global Online Book Marketing &amp; Publishing
          Agency. Entirely online, serving authors worldwide.
        </div>
      </div>
    </footer>
  )
}
