import { MapPin } from 'lucide-react'
import type { PortfolioItem } from '@/lib/site-data'
const KIND_LABEL: Record<PortfolioItem['kind'], string> = {
  poster: 'Author Poster',
  mockup: 'Book Mockup',
  goodreads: 'Goodreads Placement',
}

export function PortfolioCard({ item }: { item: PortfolioItem }) {
  return (
    <figure className="group overflow-hidden rounded-xl border border-border/60 bg-card transition-colors hover:border-primary/50">
      <div className="relative overflow-hidden bg-background">
        <img src={item.image} alt={`${item.title} campaign by ${item.author}`} className="block h-auto w-full" />

        <div className="absolute left-4 top-4 rounded-full border border-primary/40 bg-black/30 px-2.5 py-1 text-[10px] uppercase tracking-widest text-primary">
          {KIND_LABEL[item.kind]}
        </div>

        {item.tag && (
          <div className="absolute right-4 top-4 rounded-full bg-primary px-2.5 py-1 text-[10px] font-semibold text-primary-foreground">
            {item.tag.replace('Goodreads · ', '')}
          </div>
        )}

      </div>

      <figcaption className="p-4">
        <p className="font-serif text-base leading-snug">{item.title}</p>
        <p className="font-serif text-base">
          <span className="text-primary">✦ </span>
          {item.author}
        </p>
        <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
          <MapPin size={12} className="text-primary" />
          {item.market}
        </p>
        {item.tag && (
          <p className="mt-2 text-xs font-medium text-primary">{item.tag}</p>
        )}
      </figcaption>
    </figure>
  )
}
