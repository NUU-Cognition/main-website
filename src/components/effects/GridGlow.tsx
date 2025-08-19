"use client"

import * as React from "react"

export function GridGlow() {
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 })
  const [globalMousePos, setGlobalMousePos] = React.useState({ x: 0, y: 0 })
  const containerRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const updateMousePosition = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setMousePos({ 
          x: globalMousePos.x - rect.left, 
          y: globalMousePos.y - rect.top 
        })
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      setGlobalMousePos({ x: e.clientX, y: e.clientY })
      updateMousePosition()
    }

    const handleScroll = () => {
      updateMousePosition()
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [globalMousePos])

  return (
    <div ref={containerRef} aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Grid pattern */}
      <svg className="absolute inset-0 h-full w-full">
        <defs>
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-foreground/10"
            />
          </pattern>
          <radialGradient id="glow">
            <stop offset="0%" stopColor="rgb(253 224 71 / 0.5)" />
            <stop offset="30%" stopColor="rgb(251 191 36 / 0.3)" />
            <stop offset="60%" stopColor="rgb(251 191 36 / 0.1)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      
      {/* Circular spotlight that follows mouse */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: mousePos.x - 250,
          top: mousePos.y - 250,
          width: 500,
          height: 500,
          background: `radial-gradient(circle at center, 
            rgba(253,224,71,0.2) 0%, 
            rgba(251,191,36,0.15) 20%, 
            rgba(251,191,36,0.08) 40%, 
            rgba(251,191,36,0.03) 60%,
            transparent 70%)`,
          filter: 'blur(2px)',
        }}
      />
    </div>
  )
}