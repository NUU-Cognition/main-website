import * as React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"


interface Cta {
  href: string
  label: string
  variant?: "default" | "outline" | "ghost" | "link" | "secondary" | "destructive"
}

interface PageHeaderProps {
  eyebrow?: string
  title: string
  lead?: React.ReactNode
  badge?: string
  primaryCta?: Cta
  secondaryCta?: Cta
  center?: boolean
  showHalo?: boolean
}

export function PageHeader({
  eyebrow,
  title,
  lead,
  badge,
  primaryCta,
  secondaryCta,
  center = true,
}: PageHeaderProps) {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className={cn("w-full", center ? "max-w-3xl mx-auto text-center" : "max-w-3xl")}>
          <div className={cn("flex items-center gap-3", center ? "justify-center" : "justify-start")}>
            {eyebrow && (
              <p className="text-xs font-medium uppercase tracking-wider text-foreground/40">
                {eyebrow}
              </p>
            )}
            {badge && (
              <span className="inline-flex text-xs bg-secondary px-2 py-1 rounded-full text-foreground/60">
                {badge}
              </span>
            )}
          </div>

          <h1 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight">
            {title}
          </h1>

          {lead && (
            <div className="mt-6 text-lg text-foreground/70 leading-relaxed max-w-2xl mx-auto">
              {typeof lead === "string" ? <p>{lead}</p> : lead}
            </div>
          )}

          {(primaryCta || secondaryCta) && (
            <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center">
              {primaryCta && (
                <Button asChild variant={primaryCta.variant ?? "default"}>
                  <a href={primaryCta.href}>{primaryCta.label}</a>
                </Button>
              )}
              {secondaryCta && (
                <Button asChild variant={secondaryCta.variant ?? "outline"}>
                  <a href={secondaryCta.href}>{secondaryCta.label}</a>
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}