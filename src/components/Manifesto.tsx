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
          <p className="text-sm text-purple-400 mb-6 tracking-wide uppercase">About NUU</p>
          <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-8">
            Manifesto
          </h1>
          <p className="text-xl text-foreground/60">
            Our guiding principles are set in stone.
          </p>
        </div>

        <div className="space-y-12">
          <div>
            <h2 className="text-lg font-medium mb-4">Human-First</h2>
            <p className="text-foreground/80 leading-relaxed">
              We believe that everyone should have the tools to think clearly and organize ideas effectively. That's why our tools are designed to augment human intelligence, not replace it.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium mb-4">Durable</h2>
            <p className="text-foreground/80 leading-relaxed">
              We believe that your data should be future-proof and easily accessible, no matter where you are. That's why we use simple, open formats that prevent lock-in and ensure that your data can be preserved for generations to come.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium mb-4">Private</h2>
            <p className="text-foreground/80 leading-relaxed">
              We believe that your thoughts and ideas belong to you and deserve complete privacy. That's why your data is stored locally on your device, inaccessible to us. When you use our services, your data is protected with end-to-end encryption for maximum security.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium mb-4">Adaptable</h2>
            <p className="text-foreground/80 leading-relaxed">
              We believe that tools should adapt to your way of thinking, not the other way around. Our systems are built to be flexible and extensible, allowing you to customize them to fit your unique workflow and cognitive style.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}