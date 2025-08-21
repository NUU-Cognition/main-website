"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Github, Linkedin, Twitter, Globe, ArrowUpRight } from "lucide-react"

interface Links {
  github?: string
  linkedin?: string
  twitter?: string
  website?: string
}

interface MinimalTeamCardProps {
  name: string
  role: string
  bio?: string
  links?: Links
  className?: string
}

export function MinimalTeamCard({
  name,
  role,
  bio,
  links,
  className
}: MinimalTeamCardProps) {
  const [isHovered, setIsHovered] = React.useState(false)
  
  return (
    <div
      className={cn(
        "group relative",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient border effect on hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-20 blur transition duration-500" />
      
      <div className="relative bg-white border border-black/5 rounded-lg p-8 h-full transition-all duration-300 group-hover:border-black/10 group-hover:shadow-xl">
        {/* Minimalist avatar - just the first letter */}
        <div className="mb-6">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
            <span className="text-2xl font-light text-foreground/70">
              {name[0]}
            </span>
          </div>
        </div>

        {/* Name and role */}
        <div className="mb-4">
          <h3 className="text-xl font-medium mb-1">{name}</h3>
          <p className="text-sm text-foreground/50">{role}</p>
        </div>

        {/* Bio - only show on hover */}
        {bio && (
          <p className={cn(
            "text-sm text-foreground/60 leading-relaxed transition-all duration-300",
            isHovered ? "opacity-100" : "opacity-0"
          )}>
            {bio}
          </p>
        )}

        {/* Links - minimal and elegant */}
        {links && Object.keys(links).length > 0 && (
          <div className="mt-6 flex gap-3">
            {links.twitter && (
              <a
                href={links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/30 hover:text-foreground/60 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            )}
            {links.github && (
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/30 hover:text-foreground/60 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {links.linkedin && (
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/30 hover:text-foreground/60 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            )}
            {links.website && (
              <a
                href={links.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/30 hover:text-foreground/60 transition-colors"
                aria-label="Website"
              >
                <Globe className="w-4 h-4" />
              </a>
            )}
          </div>
        )}

        {/* Arrow indicator on hover */}
        <div className={cn(
          "absolute top-8 right-8 text-foreground/20 transition-all duration-300",
          isHovered ? "opacity-100 translate-x-0 translate-y-0" : "opacity-0 -translate-x-2 translate-y-2"
        )}>
          <ArrowUpRight className="w-5 h-5" />
        </div>
      </div>
    </div>
  )
}