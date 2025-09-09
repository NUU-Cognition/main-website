import * as React from "react"
import { cn } from "@/lib/utils"

interface ManifestoProps {
  className?: string
}

export function Manifesto({ className }: ManifestoProps) {
  return (
    <div className={cn("min-h-screen bg-background flex items-center justify-center px-6", className)}>
      <div className="max-w-2xl w-full">
        <div className="text-center mb-12">
          {/* <p className="text-sm text-purple-400 mb-6 tracking-wide uppercase">About NUU</p> */}
          {/* <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-8">
            About
          </h1> */}
          {/* <p className="text-xl text-foreground/60">
            Our guiding principles are set in stone.
          </p> */}
        </div>

        <div className="space-y-12">
          <div>
            <h2 className="text-lg font-medium mb-4">Vision</h2>
            <p className="text-foreground/80 leading-relaxed">
            Human progress is a story about technology. The tools we&apos;ve built to solve problems and overcome limitations. For centuries, these tools have focused on helping us master the physical world. Now, it&apos;s time for our tools to master the mind. 
            <br />
            <br />
            Thinking tools are not new. We&apos;ve invented concepts like mathematics, tools like calculators, and methods like systems thinking. But now Large Language Models create a new opportunity. They give software general intelligence, and with it, the ability for software to meet our minds where they are. For the first time in history, technology can think alongside us, unlocking a new category of software built directly for cognition itself.
            <br />
            <br />
            At NUU Cognition, we&apos;re building this next generation of software. Software to augment our mind and give way to new, more effective ways of thought. Our vision is to equip individuals and organizations everywhere with these tools, empowering them to solve humanity&apos;s greatest challenges.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}