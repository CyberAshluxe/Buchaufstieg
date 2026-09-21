import type { Metadata } from 'next'
import Link from 'next/link'
import { Play } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { TRAILER_ITEMS } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Trailers - Buchaufstieg',
  description: 'Every film below was made for a real author by our production team. Click to watch on Google Drive.',
}

const trailerPlaceholderStyles: Record<string, string> = {
  Campaign: 'from-emerald-900 via-green-800 to-emerald-950',
  'Dark Fiction': 'from-purple-950 via-purple-900 to-slate-950',
  'Legacy Reel': 'from-lime-950 via-yellow-900 to-stone-950',
  History: 'from-amber-950 via-orange-900 to-stone-950',
  Fantasy: 'from-cyan-950 via-cyan-900 to-slate-950',
  Memoir: 'from-fuchsia-950 via-pink-950 to-purple-950',
  Thriller: 'from-red-950 via-rose-900 to-slate-950',
  Drama: 'from-blue-950 via-indigo-900 to-slate-950',
  'Author Reel': 'from-violet-950 via-purple-900 to-slate-950',
  'Sci-Fi': 'from-sky-950 via-blue-900 to-slate-950',
}

export default function TrailersPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="border-b border-border/60 bg-card/30">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <div className="flex flex-col items-center text-center">
              <p className="mb-3 text-xs uppercase tracking-[0.25em] text-primary">🎬 Cinematic Work</p>
              <h1 className="max-w-3xl font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
                Trailers That Stop the Scroll
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                Every film below was made for a real author by our production team. Click to watch on Google Drive.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-20">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {TRAILER_ITEMS.map((item) => (
              <a
                key={`${item.title}-${item.subtitle}`}
                href={item.url}
                target="_blank"
                rel="noreferrer"
                type="button"
                className="group overflow-hidden rounded-2xl border border-border/60 bg-card text-left transition-all hover:border-primary/50 hover:bg-card/80"
              >
                <div className={`relative flex aspect-video items-center justify-center overflow-hidden bg-gradient-to-br ${trailerPlaceholderStyles[item.category] ?? 'from-slate-950 via-indigo-950 to-purple-950'}`}>
                  <span className="absolute right-4 top-4 rounded-full bg-black/65 px-3 py-1 text-xs font-semibold text-white">
                    {item.category}
                  </span>
                  <span className="flex size-20 items-center justify-center rounded-full border-2 border-white/55 bg-white/10 text-white transition-transform group-hover:scale-105">
                    <Play className="ml-1 size-8 fill-current" />
                  </span>
                </div>
                <div className="p-5">
                  <p className="font-serif text-xl leading-tight text-foreground">{item.title}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{item.subtitle}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="border-t border-border/60 bg-card/30">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <div className="flex flex-col gap-8 rounded-2xl border border-border/60 bg-background p-8 md:flex-row md:items-center md:justify-between">
              <p className="text-xl text-foreground">Want a cinematic trailer like these for your book?</p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Start Your Trailer →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
