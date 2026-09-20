import { cn } from '@/lib/utils'

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  className,
  align = 'center',
}: {
  eyebrow?: string
  title: string
  subtitle?: string
  className?: string
  align?: 'center' | 'left'
}) {
  return (
    <div
      className={cn(
        'max-w-3xl',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className,
      )}
    >
      {eyebrow && (
        <p className="mb-3 text-xs uppercase tracking-[0.25em] text-primary">{eyebrow}</p>
      )}
      <h2 className="text-balance font-serif text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
          {subtitle}
        </p>
      )}
    </div>
  )
}
