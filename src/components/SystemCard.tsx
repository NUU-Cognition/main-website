import React from 'react'
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"

interface SystemCardProps {
  title: string
  subtitle: string
  description: string
  features?: string[]
  link?: string
  className?: string
}

export function SystemCard({
  title,
  subtitle,
  description,
  features = [],
  link,
  className
}: SystemCardProps) {
  const content = (
    <>
      <div className="flex-1">
        <p className="text-xs font-medium text-foreground/40 uppercase tracking-wider mb-3">
          {subtitle}
        </p>
        <h3 className="text-2xl md:text-3xl font-medium text-foreground mb-4">
          {title}
        </h3>
        <p className="text-base text-foreground/70 mb-6 leading-relaxed">
          {description}
        </p>
        
        {features.length > 0 && (
          <ul className="space-y-2 mb-8">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-block w-1 h-1 bg-foreground/40 rounded-full mt-2 mr-3 flex-shrink-0" />
                <span className="text-sm text-foreground/60">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
      
      {link && (
        <div className="mt-auto">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground group-hover:gap-3 transition-all duration-200">
            Learn more
            <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      )}
    </>
  )

  if (link) {
    return (
      <a
        href={link}
        className={cn(
          "relative bg-white border border-black/10 rounded-[4px] p-8 md:p-10",
          "transition-all duration-200 ease-out",
          "hover:border-black/20 hover:shadow-lg",
          "flex flex-col h-full",
          "group cursor-pointer",
          className
        )}
      >
        {content}
      </a>
    )
  }

  return (
    <div className={cn(
      "relative bg-white border border-black/10 rounded-[4px] p-8 md:p-10",
      "transition-all duration-200 ease-out",
      "hover:border-black/20",
      "flex flex-col h-full",
      className
    )}>
      {content}
    </div>
  )
}