import * as React from "react"
import { cn } from "@/lib/utils"
import { Github, Linkedin, Twitter } from "lucide-react"

interface Links {
  github?: string
  linkedin?: string
  twitter?: string
  website?: string
}

interface TeamMemberCardProps {
  name: string
  role: string
  bio: string
  initials?: string
  links?: Links
  className?: string
}

export function TeamMemberCard({
  name,
  role,
  bio,
  initials,
  links,
  className
}: TeamMemberCardProps) {
  return (
    <div
      className={cn(
        "bg-white border border-black/10 rounded-[4px] p-6 md:p-8 h-full flex flex-col",
        "transition-all duration-200 hover:border-black/20",
        className
      )}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-14 h-14 rounded-full bg-secondary flex items-center justify-center">
          <span className="text-sm font-semibold text-foreground/70 select-none">
            {initials ?? name.split(' ').map(n => n[0]).slice(0,2).join('').toUpperCase()}
          </span>
        </div>
        <div>
          <h3 className="text-lg font-medium">{name}</h3>
          <p className="text-sm text-foreground/60">{role}</p>
        </div>
      </div>

      <p className="mt-4 text-sm text-foreground/70 leading-relaxed flex-1">
        {bio}
      </p>

      {(links?.github || links?.linkedin || links?.twitter || links?.website) && (
        <div className="mt-4 flex gap-3">
          {links?.github && (
            <a href={links.github} target="_blank" rel="noopener noreferrer" aria-label={`${name} on GitHub`} className="text-foreground/60 hover:text-foreground transition-colors">
              <Github className="w-4 h-4" />
            </a>
          )}
          {links?.linkedin && (
            <a href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${name} on LinkedIn`} className="text-foreground/60 hover:text-foreground transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
          )}
          {links?.twitter && (
            <a href={links.twitter} target="_blank" rel="noopener noreferrer" aria-label={`${name} on X`} className="text-foreground/60 hover:text-foreground transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
          )}
          {links?.website && (
            <a href={links.website} target="_blank" rel="noopener noreferrer" className="text-xs text-foreground/60 hover:text-foreground underline underline-offset-4">Website</a>
          )}
        </div>
      )}
    </div>
  )
}