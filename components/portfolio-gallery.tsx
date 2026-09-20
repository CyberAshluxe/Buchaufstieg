'use client'

import { useMemo, useState } from 'react'
import { PORTFOLIO_ITEMS, type PortfolioItem } from '@/lib/site-data'
import { PortfolioCard } from '@/components/portfolio-card'
import { cn } from '@/lib/utils'

type Filter = 'all' | PortfolioItem['kind'] | string

const KIND_FILTERS: { value: Filter; label: string }[] = [
  { value: 'all', label: 'All Campaigns' },
  { value: 'poster', label: 'Author Posters' },
  { value: 'mockup', label: 'Book Mockups' },
  { value: 'goodreads', label: 'Goodreads Placements' },
]

export function PortfolioGallery({ limit }: { limit?: number }) {
  const [kind, setKind] = useState<Filter>('all')
  const [market, setMarket] = useState<Filter>('all')

  const markets = useMemo(
    () => Array.from(new Set(PORTFOLIO_ITEMS.map((i) => i.market))),
    [],
  )

  const filtered = useMemo(() => {
    let items = PORTFOLIO_ITEMS
    if (kind !== 'all') items = items.filter((i) => i.kind === kind)
    if (market !== 'all') items = items.filter((i) => i.market === market)
    return limit ? items.slice(0, limit) : items
  }, [kind, market, limit])

  return (
    <div>
      <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
        {KIND_FILTERS.map((f) => (
          <button
            key={f.value}
            onClick={() => setKind(f.value)}
            className={cn(
              'rounded-full border px-4 py-1.5 text-sm transition-colors',
              kind === f.value
                ? 'border-primary bg-primary text-primary-foreground'
                : 'border-border text-muted-foreground hover:border-primary/50 hover:text-foreground',
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
        <button
          onClick={() => setMarket('all')}
          className={cn(
            'rounded-full px-3 py-1 text-xs transition-colors',
            market === 'all' ? 'text-primary' : 'text-muted-foreground hover:text-foreground',
          )}
        >
          All Markets
        </button>]]]]]]]]]
        {markets.map((m) => (
          <button
            key={m}
            onClick={() => setMarket(m)}
            className={cn(
              'rounded-full px-3 py-1 text-xs transition-colors',
              market === m ? 'text-primary' : 'text-muted-foreground hover:text-foreground',
            )}
          >
            {m}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-center text-muted-foreground">No campaigns match this filter.</p>
      ) : (
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {filtered.map((item, i) => (
            <PortfolioCard key={`${item.title}-${i}`} item={item} />
          ))}
        </div>
      )}
    </div>
  )
}
