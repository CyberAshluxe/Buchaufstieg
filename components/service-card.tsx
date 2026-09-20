import { Check } from 'lucide-react'
import type { Service } from '@/lib/site-data'

export function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="flex flex-col rounded-xl border border-border/60 bg-card p-7 transition-colors hover:border-primary/50">
      <h3 className="font-serif text-xl">{service.title}</h3>
      <p className="mt-1 text-xs uppercase tracking-wider text-primary">{service.tagline}</p>

      <div className="mt-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          What's Included
        </p>
        <ul className="mt-3 space-y-2">
          {service.included.map((line) => (
            <li key={line} className="flex gap-2 text-sm leading-relaxed">
              <Check size={16} className="mt-0.5 shrink-0 text-primary" />
              <span>{line}</span>
            </li>
          ))}
        </ul>
      </div>

      {service.forWho && (
        <div className="mt-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Who It's For
          </p>
          <ul className="mt-3 space-y-2">
            {service.forWho.map((line) => (
              <li key={line} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                <span className="text-primary">·</span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {service.note && (
        <p className="mt-6 rounded-lg border border-primary/20 bg-primary/5 p-3 text-sm leading-relaxed text-foreground">
          {service.note}
        </p>
      )}
    </div>
  )
}
