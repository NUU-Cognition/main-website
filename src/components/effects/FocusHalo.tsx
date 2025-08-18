"use client"

import * as React from "react"

/**
 * FocusHalo v3
 * - Vibrant blue gradient with no grey cast
 * - Uses a mask to fade edges (no white overlay)
 * - Zero animation, fast to paint
 */
export function FocusHalo() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="nuu-hero-halo" />
      <style jsx>{`
        .nuu-hero-halo {
          position: absolute;
          inset: -20%;
          /* Color-forward blue mix */
          background:
            radial-gradient(900px 520px at 50% 22%, rgba(99, 102, 241, 0.28), transparent 60%),
            radial-gradient(1000px 600px at 75% 18%, rgba(59, 130, 246, 0.24), transparent 65%),
            radial-gradient(800px 520px at 18% 84%, rgba(14, 165, 233, 0.22), transparent 66%);
          filter: blur(22px) saturate(118%);
          opacity: 0.9;

          /* Fade edges without adding grey */
          -webkit-mask-image: radial-gradient(72% 60% at 50% 40%, #000 62%, transparent 100%);
                  mask-image: radial-gradient(72% 60% at 50% 40%, #000 62%, transparent 100%);
        }
      `}</style>
    </div>
  )
}