import React from 'react'
import Image from 'next/image'
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"

interface ProductShowcaseProps {
  title: string
  subtitle: string
  description: string
  features?: string[]
  image?: string
  link?: string
  className?: string
}

export function ProductShowcase({
  title,
  subtitle,
  description,
  features = [],
  image,
  link,
  className
}: ProductShowcaseProps) {
  return (
    <div className={cn(
      "relative overflow-hidden bg-white border border-black/10 rounded-[4px]",
      "transition-all duration-200 ease-out",
      "hover:border-black/20",
      className
    )}>
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px]">
        <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
          <div className="max-w-xl">
            <p className="text-sm font-medium text-foreground/50 mb-2">
              {subtitle}
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
              {title}
            </h2>
            <p className="text-base text-foreground/70 mb-6 leading-relaxed">
              {description}
            </p>
            
            {features.length > 0 && (
              <ul className="space-y-2 mb-8">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-1 h-1 bg-foreground rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-sm text-foreground/70">{feature}</span>
                  </li>
                ))}
              </ul>
            )}
            
            {link && (
              <a 
                href={link}
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:gap-3 transition-all duration-200"
              >
                Learn more about {title}
                <ArrowRight className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
        
        <div className="relative bg-soft-gray flex items-center justify-center p-8 md:p-12 lg:p-16">
          {image ? (
            <div className="relative w-full h-full min-h-[300px]">
              <Image 
                src={image} 
                alt={title}
                fill
                className="object-contain"
              />
            </div>
          ) : (
            <div className="w-full h-full min-h-[300px] bg-white/50 rounded-[4px] border border-black/5" />
          )}
        </div>
      </div>
    </div>
  )
}