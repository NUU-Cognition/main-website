import React from 'react'
import { cn } from "@/lib/utils"
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
      "relative bg-white border border-black/10 rounded-[4px] overflow-hidden",
      "transition-all duration-200 hover:border-black/20",
      className
    )}>
      <div className="flex flex-col lg:flex-row">
        {/* Left side */}
        <div className="flex-1 p-12 lg:p-16">
          <p className="text-sm font-medium text-foreground/50 mb-3">{subtitle}</p>
          
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">
            {title}
          </h2>
          
          <p className="text-lg text-foreground/70 mb-10 max-w-xl leading-relaxed">
            {description}
          </p>
          
          {link && (
            <a 
              href={link}
              className="inline-flex items-center gap-3 px-8 py-3 bg-foreground text-background rounded-full text-sm font-medium hover:bg-foreground/90 transition"
            >
              {buttonText || `Try ${title} Now`}
              <ArrowRight className="w-4 h-4" />
            </a>
          )}
        </div>
        
        {/* Right side */}
        <div className="lg:w-[40%] bg-soft-gray p-12 lg:p-16">
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