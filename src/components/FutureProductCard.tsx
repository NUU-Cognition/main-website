import React from 'react'
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"

interface FutureProductCardProps {
  title: string
  subtitle: string
  description: string
  status?: 'coming-soon' | 'in-development' | 'early-access'
  link?: string
  className?: string
}

export function FutureProductCard({
  title,
  subtitle,
  description,
  status = 'coming-soon',
  link,
  className
}: FutureProductCardProps) {
  const statusLabels = {
    'coming-soon': 'Coming Soon',
    'in-development': 'In Development',
    'early-access': 'Early Access'
  }

  return (
    <div className={cn(
      "relative bg-white border border-black/10 rounded-[4px] p-6 md:p-8",
      "transition-all duration-200 ease-out",
      "hover:border-black/20",
      "group",
      className
    )}>
      <div className="flex flex-col h-full">
        <div className="mb-4">
          <span className="inline-block text-xs font-medium text-foreground/30 uppercase tracking-wider mb-2">
            {statusLabels[status]}
          </span>
          <h3 className="text-2xl font-semibold text-foreground mb-1">
            {title}
          </h3>
          <p className="text-sm font-medium text-foreground/50">
            {subtitle}
          </p>
        </div>
        
        <p className="text-sm text-foreground/70 mb-6 leading-relaxed flex-grow">
          {description}
        </p>
        
        {link && (
          <a 
            href={link}
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground/50 hover:text-foreground group-hover:gap-3 transition-all duration-200"
          >
            Get notified
            <ArrowRight className="w-3 h-3" />
          </a>
        )}
      </div>
    </div>
  )
}