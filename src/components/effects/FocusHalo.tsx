"use client"

import * as React from "react"

/**
 * FocusHalo v5
 * - Simple static oval in the center
 * - No animation, no drift
 * - Clean blue gradient
 */
export function FocusHalo() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="absolute"
          style={{
            width: '100vw',
            height: '100vh',
            // maxWidth: '1000px',
            // maxHeight: '1000px',
            background:
              `radial-gradient(60% 50% at 50% 40%, rgba(99,102,241,0.26), transparent 100%),
            radial-gradient(50% 45% at 70% 30%, rgba(59,130,246,0.20), transparent 100%),
            radial-gradient(70% 60% at 30% 70%, rgba(14,165,233,0.18), transparent 100%)`,
            filter: 'blur(10px)',
          }}
        />
      </div>
    </div>
  )
}