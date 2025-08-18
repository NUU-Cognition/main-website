"use client"

import * as React from "react"

/**
 * StackedLayers
 * - Minimal, brand-appropriate background evoking layered documents/abstractions.
 * - Pure CSS (no canvas), GPU-accelerated transforms, honors reduced motion.
 * - Theme-aware via CSS variables (borders/background/secondary).
 */
export function StackedLayers() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="nuu-layers">
        <div className="nuu-layer layer-1" />
        <div className="nuu-layer layer-2" />
        <div className="nuu-layer layer-3" />
      </div>

      {/* Subtle grid sheen for texture */}
      <div className="nuu-grid" />
      <style jsx>{`
        .nuu-layers {
          position: absolute;
          inset: 0;
        }
        .nuu-layer {
          position: absolute;
          left: 50%;
          top: 50%;
          width: min(76vmin, 960px);
          height: min(46vmin, 560px);
          transform: translate(-50%, -50%);
          border-radius: var(--radius);
          border: 1px solid hsl(var(--border) / 0.7);
          background:
            linear-gradient(to bottom,
              hsl(var(--secondary) / 0.7),
              hsl(var(--background) / 0.95) 30%,
              hsl(var(--background)) 70%);
          box-shadow:
            0 30px 80px -40px rgba(2,6,23,0.25),
            0 1px 0 rgba(255,255,255,0.4) inset;
          will-change: transform, opacity;
        }

        /* Individual layers: slight scale/rotation offsets for depth */
        .layer-1 {
          transform: translate(-50%, calc(-50% - 8px)) rotate(-4deg) scale(0.98);
          opacity: 0.55;
        }
        .layer-2 {
          transform: translate(-50%, -50%) rotate(0deg) scale(1);
          opacity: 0.85;
        }
        .layer-3 {
          transform: translate(-50%, calc(-50% + 10px)) rotate(5deg) scale(0.96);
          opacity: 0.45;
        }

        /* Gentle vertical drift for a living-yet-subtle feel */
        @keyframes nuu-float {
          0%   { transform: translate(-50%, -50%) rotate(0deg) scale(1); }
          50%  { transform: translate(-50%, calc(-50% - 6px)) rotate(0deg) scale(1); }
          100% { transform: translate(-50%, -50%) rotate(0deg) scale(1); }
        }
        @keyframes nuu-float-tilt-left {
          0%   { transform: translate(-50%, calc(-50% - 8px)) rotate(-4deg) scale(0.98); }
          50%  { transform: translate(-50%, calc(-50% - 14px)) rotate(-4deg) scale(0.985); }
          100% { transform: translate(-50%, calc(-50% - 8px)) rotate(-4deg) scale(0.98); }
        }
        @keyframes nuu-float-tilt-right {
          0%   { transform: translate(-50%, calc(-50% + 10px)) rotate(5deg) scale(0.96); }
          50%  { transform: translate(-50%, calc(-50% + 4px)) rotate(5deg) scale(0.965); }
          100% { transform: translate(-50%, calc(-50% + 10px)) rotate(5deg) scale(0.96); }
        }

        .layer-1 { animation: nuu-float-tilt-left 12s ease-in-out infinite; }
        .layer-2 { animation: nuu-float 12s ease-in-out infinite; }
        .layer-3 { animation: nuu-float-tilt-right 12s ease-in-out infinite; }

        @media (prefers-reduced-motion: reduce) {
          .layer-1, .layer-2, .layer-3 { animation: none; }
        }

        // /* Very faint grid for texture (theme-aware) */
        // .nuu-grid {
        //   position: absolute;
        //   inset: 0;
        //   background:
        //     linear-gradient(to right, hsl(var(--foreground) / 0.04) 1px, transparent 1px),
        //     linear-gradient(to bottom, hsl(var(--foreground) / 0.04) 1px, transparent 1px);
        //   background-size: 36px 36px;
        //   mask-image: radial-gradient(65% 55% at 50% 45%, black 35%, transparent 100%);
        //   -webkit-mask-image: radial-gradient(65% 55% at 50% 45%, black 35%, transparent 100%);
        //   pointer-events: none;
        // }
      `}</style>
    </div>
  )
}