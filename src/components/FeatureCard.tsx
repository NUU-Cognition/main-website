import * as React from "react"
import { cn } from "@/lib/utils"

interface FeatureCardProps {
  title: string
  description: string
  icon?: React.ReactNode
  className?: string
  variant?: "default" | "outline" | "ghost"
}

export function FeatureCard({
  title,
  description,
  icon,
  className,
  variant = "default"
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "group relative p-8 rounded-lg transition-all duration-300",
        variant === "default" && "bg-white border border-black/5 hover:border-black/10 hover:shadow-lg",
        variant === "outline" && "border border-black/10 hover:border-black/20",
        variant === "ghost" && "hover:bg-black/5",
        className
      )}
    >
      {icon && (
        <div className="mb-4 text-foreground/40 group-hover:text-foreground/60 transition-colors">
          {icon}
        </div>
      )}
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-sm text-foreground/60 leading-relaxed">
        {description}
      </p>
    </div>
  )
}