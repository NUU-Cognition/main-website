"use client"

import * as React from "react"

/**
 * IceAurora
 * Subtle, GPU-friendly layered gradients using the ice palette.
 * - Respects prefers-reduced-motion
 * - Uses masks so edges fade gracefully
 */
export function IceAurora() {
  const reduceMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Aurora layers */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 aurora-mask"
        style={{
          width: "120vmax",
          height: "120vmax",
          filter: "blur(40px) saturate(120%)",
          opacity: 0.8,
        }}
      >
        <div
          className={!reduceMotion ? "animate-aurora-slow" : undefined}
          style={{
            width: "100%",
            height: "100%",
            background:
              // three layered radial gradients with ice palette
              `radial-gradient(35% 45% at 18% 28%, rgba(148,163,184,0.28), transparent 60%),
               radial-gradient(30% 40% at 82% 18%, rgba(203,213,225,0.22), transparent 60%),
               radial-gradient(50% 60% at 50% 80%, rgba(51,65,85,0.18), transparent 65%)`,
            willChange: "transform",
          }}
        />
      </div>

      {/* Soft grid sheen (very low opacity) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(148,163,184,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.06) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
          maskImage:
            "radial-gradient(60% 50% at 50% 40%, black 35%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(60% 50% at 50% 40%, black 35%, transparent 100%)",
        }}
      />
    </div>
  )
}