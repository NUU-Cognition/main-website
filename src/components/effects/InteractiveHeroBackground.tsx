"use client"

import React, { useEffect, useRef } from "react"

interface InteractiveHeroBackgroundProps {
  className?: string
}

// Minimal black line trails background driven by a simple flow field.
export function InteractiveHeroBackground({ className }: InteractiveHeroBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const animationRef = useRef<number | null>(null)
  const timeRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return
    const canvasEl = canvas as HTMLCanvasElement
    const ctx2 = ctx as CanvasRenderingContext2D

    const DPR = Math.min(window.devicePixelRatio || 1, 2)

    const particles: { x: number; y: number; vx: number; vy: number; life: number }[] = []
    const MAX_PARTICLES = 260

    function resize() {
      const { innerWidth, innerHeight } = window
      canvasEl.width = Math.floor(innerWidth * DPR)
      canvasEl.height = Math.floor(innerHeight * DPR)
      canvasEl.style.width = `${innerWidth}px`
      canvasEl.style.height = `${innerHeight}px`
      ctx2.setTransform(1, 0, 0, 1, 0, 0)
      ctx2.scale(DPR, DPR)
    }

    function seededRandom(seed: number) {
      const s = Math.sin(seed) * 10000
      return s - Math.floor(s)
    }

    function smoothNoise2D(x: number, y: number) {
      // Tile-friendly noise from sines; cheap and smooth.
      return (
        Math.sin(x * 1.3) * 0.5 +
        Math.sin(y * 1.7 + x * 0.15) * 0.5 +
        Math.sin(x * 0.07 + y * 0.11) * 0.5
      )
    }

    function flowDirection(x: number, y: number, t: number) {
      const n = smoothNoise2D(x * 0.002 + t * 0.02, y * 0.002 - t * 0.018)
      const angle = n * Math.PI * 2
      return { dx: Math.cos(angle), dy: Math.sin(angle) }
    }

    function spawnParticle(width: number, height: number, i: number) {
      const edge = i % 4
      let x = 0
      let y = 0
      const margin = 40
      switch (edge) {
        case 0:
          x = seededRandom(i + timeRef.current) * width
          y = -margin
          break
        case 1:
          x = width + margin
          y = seededRandom(i - timeRef.current) * height
          break
        case 2:
          x = seededRandom(i * 13.37) * width
          y = height + margin
          break
        default:
          x = -margin
          y = seededRandom(i * 7.11) * height
      }
      const speed = 0.35 + seededRandom(i * 3.1) * 0.85
      const { dx, dy } = flowDirection(x, y, timeRef.current)
      return { x, y, vx: dx * speed, vy: dy * speed, life: 1 + seededRandom(i) * 2 }
    }

    function ensureParticles(width: number, height: number) {
      while (particles.length < MAX_PARTICLES) {
        particles.push(spawnParticle(width, height, particles.length + 1))
      }
    }

    function step() {
      const width = canvasEl.clientWidth
      const height = canvasEl.clientHeight
      timeRef.current += 0.016

      // Only draw simple line segments; no fades or overlays
      ctx2.globalCompositeOperation = "source-over"
      ctx2.strokeStyle = "#000"
      ctx2.lineWidth = 1
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        const { dx, dy } = flowDirection(p.x, p.y, timeRef.current)
        p.vx += dx * 0.06
        p.vy += dy * 0.06

        // Gentle drag
        p.vx *= 0.98
        p.vy *= 0.98

        const prevX = p.x
        const prevY = p.y
        p.x += p.vx
        p.y += p.vy
        p.life -= 0.004

        // Trail
        ctx2.beginPath()
        ctx2.moveTo(prevX, prevY)
        ctx2.lineTo(p.x, p.y)
        ctx2.stroke()

        const off = p.x < -60 || p.y < -60 || p.x > width + 60 || p.y > height + 60
        if (p.life <= 0 || off) {
          particles[i] = spawnParticle(width, height, i + timeRef.current)
        }
      }

      animationRef.current = requestAnimationFrame(step)
    }

    resize()
    ensureParticles(canvasEl.clientWidth, canvasEl.clientHeight)
    animationRef.current = requestAnimationFrame(step)

    window.addEventListener("resize", resize)

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <div
      className={
        "pointer-events-none absolute inset-0 overflow-hidden" +
        (className ? ` ${className}` : "")
      }
      aria-hidden
    >
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  )
}


