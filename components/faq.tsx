'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { FAQS } from '@/lib/site-data'
import { cn } from '@/lib/utils'

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="mx-auto max-w-3xl px-5 py-24">
      <SectionHeading eyebrow="Questions, Answered" title="Frequently Asked Questions" />
      <div className="mt-12 space-y-3">
        {FAQS.map((faq, i) => {
          const isOpen = open === i
          return (
            <div
              key={faq.q}
              className="overflow-hidden rounded-xl border border-border/60 bg-card"
            >
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={isOpen}
              >
                <span className="font-serif text-lg">{faq.q}</span>
                {isOpen ? (
                  <Minus size={18} className="shrink-0 text-primary" />
                ) : (
                  <Plus size={18} className="shrink-0 text-primary" />
                )}
              </button>
              <div
                className={cn(
                  'grid transition-all duration-300',
                  isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
                )}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
