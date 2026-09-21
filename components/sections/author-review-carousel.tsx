'use client'

import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { AUTHOR_REVIEWS } from '@/lib/site-data'

export function AuthorReviewCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: number) => {
    carouselRef.current?.scrollBy({ left: direction * carouselRef.current.clientWidth, behavior: 'smooth' })
  }

  return (
    <section className="border-y border-border/60 bg-card/30 px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-[0.25em] text-primary">In Their Own Words</p>
        <h2 className="mt-3 max-w-3xl font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
          Faces Behind the Reviews
        </h2>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground">
          We don&apos;t expose our authors without permission - these are the few who agreed to let us share their photo alongside their words.
        </p>

        <div ref={carouselRef} className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {AUTHOR_REVIEWS.map((review) => (
            <article key={review.name} className="flex min-w-full snap-center flex-col overflow-hidden rounded-2xl border border-border/60 bg-card md:flex-row">
              <div className="flex items-center justify-center bg-background p-5 md:w-2/5 md:p-8">
                <img src={review.image} alt={`${review.name} - author`} className="max-h-80 w-full rounded-xl object-contain" />
              </div>
              <div className="flex flex-1 flex-col justify-center p-7 sm:p-10">
                <span className="font-serif text-5xl leading-none text-primary" aria-hidden>&ldquo;</span>
                <p className="mt-3 text-lg leading-relaxed text-foreground/90">{review.quote}</p>
                <footer className="mt-7 border-t border-border/60 pt-5">
                  <p className="font-serif text-xl text-primary">{review.name}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{review.book}</p>
                </footer>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-center gap-3">
          <button type="button" onClick={() => scroll(-1)} aria-label="Previous author review" className="rounded-full border border-border p-3 text-primary transition-colors hover:bg-primary/10">
            <ChevronLeft className="size-5" />
          </button>
          <span className="text-sm text-muted-foreground">{AUTHOR_REVIEWS.length} author stories</span>
          <button type="button" onClick={() => scroll(1)} aria-label="Next author review" className="rounded-full border border-border p-3 text-primary transition-colors hover:bg-primary/10">
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>
    </section>
  )
}