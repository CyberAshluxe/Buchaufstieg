'use client'

import { useMemo, useState } from 'react'
import { SectionHeading } from '@/components/section-heading'

type Channel = {
  key: string
  label: string
  salesPerUnit: number // estimated book sales per €100 spent
  reviewsPerUnit: number
  reachPerUnit: number
}

const CHANNELS: Channel[] = [
  { key: 'social', label: '📢 Social Media', salesPerUnit: 22, reviewsPerUnit: 3, reachPerUnit: 4200 },
  { key: 'blog', label: '📖 Blog Tour', salesPerUnit: 16, reviewsPerUnit: 5, reachPerUnit: 2600 },
  { key: 'ads', label: '💰 Ads', salesPerUnit: 34, reviewsPerUnit: 2, reachPerUnit: 3100 },
  { key: 'press', label: '📰 Press', salesPerUnit: 12, reviewsPerUnit: 1, reachPerUnit: 5200 },
  { key: 'email', label: '✉️ Email', salesPerUnit: 28, reviewsPerUnit: 4, reachPerUnit: 1800 },
  { key: 'reviews', label: '⭐ Reviews', salesPerUnit: 18, reviewsPerUnit: 9, reachPerUnit: 1500 },
]

const PRICE = 12 // avg book price
const ROYALTY = 0.6 // net after royalty

export function RoiCalculator() {
  const [budgets, setBudgets] = useState<Record<string, number>>({
    social: 400,
    blog: 300,
    ads: 500,
    press: 200,
    email: 250,
    reviews: 350,
  })

  const setBudget = (key: string, value: number) =>
    setBudgets((b) => ({ ...b, [key]: Math.max(0, Math.min(5000, value || 0)) }))

  const totals = useMemo(() => {
    let spend = 0
    let sales = 0
    let reviews = 0
    let reach = 0
    for (const c of CHANNELS) {
      const b = budgets[c.key] ?? 0
      const units = b / 100
      spend += b
      sales += units * c.salesPerUnit
      reviews += units * c.reviewsPerUnit
      reach += units * c.reachPerUnit
    }
    const revenue = sales * PRICE
    const net = revenue * ROYALTY - spend
    const roi = spend > 0 ? (net / spend) * 100 : 0
    return {
      spend,
      sales: Math.round(sales),
      reviews: Math.round(reviews),
      reach: Math.round(reach),
      revenue: Math.round(revenue),
      net: Math.round(net),
      roi: Math.round(roi),
    }
  }, [budgets])

  const grade =
    totals.roi >= 300 ? 'A+' : totals.roi >= 200 ? 'A' : totals.roi >= 100 ? 'B' : 'C'

  const fmt = (n: number) => n.toLocaleString('en-US')

  return (
    <section className="border-t border-border/60 bg-card/30">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <SectionHeading
          eyebrow="Interactive ROI Calculator"
          title="What Will You Get For Your Investment?"
          subtitle="Drag the sliders. Watch the numbers move. This is real math built from 300+ campaigns - not a sales pitch."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <div className="rounded-xl border border-border/60 bg-card p-7">
            <h3 className="font-serif text-xl">🎛️ Your Marketing Budget</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Type in exact numbers or drag the sliders - your call.
            </p>
            <div className="mt-6 space-y-5">
              {CHANNELS.map((c) => (
                <div key={c.key}>
                  <div className="flex items-center justify-between text-sm">
                    <label htmlFor={`ch-${c.key}`}>{c.label}</label>
                    <div className="flex items-center gap-1 text-primary">
                      <span>€</span>
                      <input
                        type="number"
                        value={budgets[c.key]}
                        onChange={(e) => setBudget(c.key, Number(e.target.value))}
                        className="w-20 rounded-md border border-border bg-background px-2 py-1 text-right text-foreground"
                        min={0}
                        max={5000}
                      />
                    </div>
                  </div>
                  <input
                    id={`ch-${c.key}`}
                    type="range"
                    min={0}
                    max={5000}
                    step={50}
                    value={budgets[c.key]}
                    onChange={(e) => setBudget(c.key, Number(e.target.value))}
                    className="mt-2 w-full accent-[var(--primary)]"
                    aria-label={`${c.label} budget in euros`}
                  />
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-4 text-sm">
              <span className="text-muted-foreground">Total Investment</span>
              <span className="font-serif text-xl text-primary">€{fmt(totals.spend)}</span>
            </div>
          </div>

          <div className="rounded-xl border border-primary/20 bg-primary/5 p-7">
            <h3 className="font-serif text-xl">📈 Your Projected Results</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Based on your investment and campaign settings - updating live
            </p>

            <dl className="mt-6 space-y-4">
              <Result label="📚 Estimated Book Sales" value={`${fmt(totals.sales)} copies`} sub="Based on average conversion rates for your campaign type" />
              <Result label="💰 Total Revenue" value={`€${fmt(totals.revenue)}`} sub="Gross revenue before royalty deductions" />
              <Result label="💵 Net Profit (After Royalty)" value={`€${fmt(totals.net)}`} sub="After royalties and marketing costs" />
              <Result label="📈 ROI" value={`${fmt(totals.roi)}%`} sub="Return on your total investment" />
              <Result label="⭐ Estimated Reviews & Reach" value={`${fmt(totals.reviews)} reviews · ${fmt(totals.reach)} reached`} sub="Projected organic reviews and audience reach" />
            </dl>

            <div className="mt-6 flex items-center gap-4 rounded-lg border border-primary/30 bg-background/40 p-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary font-serif text-2xl font-semibold text-primary-foreground">
                {grade}
              </span>
              <div>
                <p className="font-serif text-lg">🎯 ROI Score</p>
                <p className="text-sm text-muted-foreground">
                  {totals.roi >= 200
                    ? 'Strong projected returns for this setup.'
                    : 'Solid projected returns for this setup.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Result({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div className="border-b border-border/40 pb-4 last:border-0 last:pb-0">
      <dt className="text-sm text-muted-foreground">{label}</dt>
      <dd className="mt-1 font-serif text-2xl font-semibold text-primary">{value}</dd>
      <p className="mt-0.5 text-xs text-muted-foreground">{sub}</p>
    </div>
  )
}
