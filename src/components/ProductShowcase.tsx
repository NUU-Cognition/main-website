import React from 'react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Layers, Brain, Sparkles } from "lucide-react"

interface ProductShowcaseProps {
  title: string
  subtitle: string
  description: string
  features?: string[]
  link?: string
  buttonText?: string
  className?: string
}

export function ProductShowcase({
  title,
  subtitle,
  description,
  features = [],
  link,
  buttonText,
  className
}: ProductShowcaseProps) {
  return (
    <div className={cn(
      "relative bg-white border border-black/10 rounded-lg overflow-hidden",
      "transition-all duration-200 hover:border-black/20",
      className
    )}>
      <div className="flex flex-col lg:flex-row">
        {/* Left side */}
        <div className="flex-1 p-16 lg:p-20">
          <p className="text-sm font-medium text-foreground/50 mb-3">{subtitle}</p>
          
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">
            {title}
          </h2>
          
          <p className="text-lg text-foreground/70 mb-10 max-w-xl leading-relaxed">
            {description}
          </p>
          
          {link && (
            <Button asChild>
              <a href={link}>
                {buttonText || `Try ${title} Now`}
              </a>
            </Button>
          )}
        </div>
        
        {/* Right side */}
        <div className="lg:w-[40%] bg-soft-gray p-16 lg:p-20">
          <h3 className="text-sm font-medium text-foreground/40 uppercase tracking-wider">
            Key&nbsp;Features
          </h3>
          
          {features.length > 0 && (
            <ul className="mt-8 space-y-4">
              {features.map((feature, i) => {
                const icons = [Layers, Brain, Zap, Sparkles]
                const Icon = icons[i % icons.length]
                
                return (
                  <li key={i} className="flex items-center gap-4 group">
                    <span className="flex-shrink-0 w-10 h-10 rounded-lg bg-white border border-black/10 flex items-center justify-center group-hover:border-black/20 transition">
                      <Icon className="w-5 h-5 text-foreground/50" />
                    </span>
                    
                    <p className="text-sm text-foreground/70 leading-relaxed flex-1">
                      {feature}
                    </p>
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}