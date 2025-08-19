import * as React from "react"
import { cn } from "@/lib/utils"

interface MinimalPageHeaderProps {
  title: string
  subtitle?: string
  className?: string
}

export function MinimalPageHeader({
  title,
  subtitle,
  className
}: MinimalPageHeaderProps) {
  return (
    <div className={cn("pt-32 pb-20", className)}>
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 text-xl text-foreground/60 max-w-2xl">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  )
}