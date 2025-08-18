"use client"

import * as React from "react"

/**
 * FocusHalo v4
 * - Static elliptical ratio (viewport-based) for consistency
 * - Covers most of the screen with soft edge mask
 * - Extremely slow, lightweight drift (transform only)
 * - Keeps original blue color mix
 */
export function FocusHalo() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="nuu-hero-halo" />
      <style jsx>{`
        .nuu-hero-halo {
          position: absolute;
          left: 50%;
          top: 50%;
          /* Fixed ellipse ratio for consistency across screens */
          width: 140vmax;
          height: 110vmax;
          transform: translate(-50%, -50%);
          will-change: transform;
          filter: blur(36px) saturate(120%);
          opacity: 0.9;

          /* Keep the blue palette; % sizes lock the internal shapes */
          background:
            radial-gradient(60% 50% at 50% 40%, rgba(99,102,241,0.26), transparent 70%),
            radial-gradient(50% 45% at 70% 30%, rgba(59,130,246,0.20), transparent 75%),
            radial-gradient(70% 60% at 30% 70%, rgba(14,165,233,0.18), transparent 75%);

          /* Soft edge, no grey cast */
          -webkit-mask-image: radial-gradient(70% 60% at 50% 45%, #000 60%, transparent 100%);
                  mask-image: radial-gradient(70% 60% at 50% 45%, #000 60%, transparent 100%);

          /* EXTREMELY slow drift (10 minutes), transform-only for perf */
          animation: nuu-halo-drift 600s linear infinite;
        }

        @keyframes nuu-halo-drift {
          0%   { transform: translate(-50%, -50%); }
          50%  { transform: translate(calc(-50% - 1.25%), calc(-50% + 1.25%)); }
          100% { transform: translate(-50%, -50%); }
        }

        @media (prefers-reduced-motion: reduce) {
          .nuu-hero-halo { animation: none; }
        }
      `}</style>
    </div>
  )
}