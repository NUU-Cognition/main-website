import React from 'react'
import { cn } from "@/lib/utils"

interface PrincipleCardProps {
  title: string
  description: string
  icon?: React.ReactNode
  className?: string
}

export function PrincipleCard({
  title,
  description,
  icon,
  className
}: PrincipleCardProps) {
  return (
    <div className={cn(
      "group",
      className
    )}>
      <div className="flex items-start gap-4">
        {icon && (
          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-soft-gray flex items-center justify-center">
            {icon}
          </div>
        )}
        <div>
          <h3 className="text-lg font-medium text-foreground mb-2">
            {title}
          </h3>
          <p className="text-sm text-foreground/60 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}