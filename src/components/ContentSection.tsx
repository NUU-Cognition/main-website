import * as React from "react"
import { cn } from "@/lib/utils"

interface ContentSectionProps {
  children: React.ReactNode
  className?: string
  wide?: boolean
}

export function ContentSection({
  children,
  className,
  wide = false
}: ContentSectionProps) {
  return (
    <section className={cn("py-20", className)}>
      <div className={cn(
        "mx-auto px-6",
        wide ? "max-w-7xl" : "max-w-6xl"
      )}>
        {children}
      </div>
    </section>
  )
}