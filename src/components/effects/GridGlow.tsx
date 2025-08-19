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
      {/* Base grid pattern */}
      <svg className="absolute inset-0 h-full w-full">
        <defs>
          <pattern
            id="grid-base"
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
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-base)" />
      </svg> */}

      {/* Enhanced grid under spotlight */}
      <svg
        className="absolute inset-0 h-full w-full"
        style={{
          mask: `radial-gradient(circle 350px at ${mousePos.x}px ${mousePos.y}px, 
            rgba(255,255,255,1) 0%, 
            rgba(255,255,255,0.8) 30%, 
            rgba(255,255,255,0.3) 60%, 
            transparent 100%)`,
          WebkitMask: `radial-gradient(circle 350px at ${mousePos.x}px ${mousePos.y}px, 
            rgba(255,255,255,1) 0%, 
            rgba(255,255,255,0.8) 30%, 
            rgba(255,255,255,0.3) 60%, 
            transparent 100%)`
        }}
      >
        <defs>
          <pattern
            id="grid-highlight"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-foreground/30"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-highlight)" />
      </svg>

      {/* Multi-layer glow effect */}
      {/* <div
        className="absolute pointer-events-none mix-blend-screen"
        style={{
          left: mousePos.x - 400,
          top: mousePos.y - 400,
          width: 800,
          height: 800,
          background: `radial-gradient(circle at center, 
            rgba(253,224,71,0.15) 0%, 
            rgba(251,191,36,0.1) 15%, 
            rgba(251,191,36,0.05) 30%, 
            transparent 50%)`,
          filter: 'blur(40px)',
        }}
      />

      <div
        className="absolute pointer-events-none mix-blend-screen"
        style={{
          left: mousePos.x - 200,
          top: mousePos.y - 200,
          width: 400,
          height: 400,
          background: `radial-gradient(circle at center, 
            rgba(254,240,138,0.3) 0%, 
            rgba(253,224,71,0.2) 20%, 
            rgba(251,191,36,0.1) 40%, 
            transparent 60%)`,
          filter: 'blur(20px)',
        }}
      />

      <div
        className="absolute pointer-events-none"
        style={{
          left: mousePos.x - 150,
          top: mousePos.y - 150,
          width: 300,
          height: 300,
          background: `radial-gradient(circle at center, 
            rgba(254,249,195,0.08) 0%, 
            rgba(254,240,138,0.06) 30%, 
            transparent 70%)`,
          filter: 'blur(1px)',
        }}
      /> */}
    </div>
  )
}