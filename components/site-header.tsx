'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { NAV_LINKS } from '@/lib/site-data'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<number | null>(null)
  const [showAnnouncement, setShowAnnouncement] = useState(true)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      {showAnnouncement && (
        <div className="border-b border-border/60 bg-card/70">
          <div className="mx-auto flex max-w-6xl items-center justify-center gap-3 px-5 py-2 text-center text-xs text-muted-foreground">
          <span className="text-primary">✦</span>
          <span>
            Ready to grow your book&apos;s reach? Book a free 20-minute strategy call - no pressure,
            just a plan.
          </span>
          <Link href="/contact" className="font-medium text-primary underline-offset-4 hover:underline">
            Book a Free Call
          </Link>
          <button
            type="button"
            onClick={() => setShowAnnouncement(false)}
            aria-label="Dismiss strategy call announcement"
            className="ml-1 rounded-full p-1 text-muted-foreground transition-colors hover:bg-background hover:text-foreground"
          >
            <X size={14} />
          </button>
          </div>
        </div>
      )}

      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="/" className="flex items-center gap-2 font-serif text-xl tracking-tight">
          <span className="text-primary">✦</span>
          <span className="font-semibold">Buchaufstieg</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {NAV_LINKS.map((link, index) => {
            const isActive = pathname === link.href
            const hasChildren = 'children' in link && !!link.children?.length

            if (hasChildren) {
              return (
                <div key={link.label} className="relative">
                  <button
                    type="button"
                    onClick={() => setOpenDropdown((prev) => (prev === index ? null : index))}
                    className={cn(
                      'flex items-center gap-1 text-sm tracking-wide text-muted-foreground transition-colors hover:text-primary',
                      isActive && 'text-primary',
                    )}
                  >
                    {link.label}
                    <ChevronDown size={14} className={cn(openDropdown === index && 'rotate-180')} />
                  </button>

                  {openDropdown === index && (
                    <div className="absolute left-0 top-full mt-3 w-52 rounded-xl border border-border/60 bg-background p-2 shadow-lg">
                      {link.children!.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={() => setOpenDropdown(null)}
                          className={cn(
                            'block rounded-lg px-3 py-2 text-sm text-muted-foreground transition hover:bg-card hover:text-primary',
                            pathname === item.href && 'text-primary',
                          )}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-sm tracking-wide text-muted-foreground transition-colors hover:text-primary',
                  pathname === link.href && 'text-primary',
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Book a Call
          </Link>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-5 py-3" aria-label="Mobile">
            {NAV_LINKS.map((link, index) => {
              const hasChildren = 'children' in link && !!link.children?.length

              if (hasChildren) {
                return (
                  <div key={link.label} className="py-2">
                    <div className="flex items-center justify-between py-2 text-sm font-medium text-foreground">
                      <span>{link.label}</span>
                    </div>
                    <div className="ml-3 space-y-2 border-l border-border/60 pl-3">
                      {link.children!.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className={cn(
                            'block text-sm text-muted-foreground transition-colors hover:text-primary',
                            pathname === item.href && 'text-primary',
                          )}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'py-3 text-sm text-muted-foreground transition-colors hover:text-primary',
                    pathname === link.href && 'text-primary',
                  )}
                >
                  {link.label}
                </Link>
              )
            })}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-primary px-5 py-2.5 text-center text-sm font-medium text-primary-foreground"
            >
              Book a Call
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
