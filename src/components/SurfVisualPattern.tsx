'use client'

import React from 'react'

export function SurfVisualPattern() {
  return (
    <div className="relative w-full h-full min-h-[300px] flex items-center justify-center overflow-hidden">
      <svg 
        width="100%" 
        height="100%" 
        viewBox="0 0 400 300" 
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0"
      >
        <defs>
          {/* Grid pattern */}
          <pattern id="grid" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(0,0,0,0.1)" strokeWidth="0.5"/>
          </pattern>
          
          {/* Dot pattern */}
          <pattern id="dots" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
            <circle cx="15" cy="15" r="1" fill="rgba(0,0,0,0.2)" />
          </pattern>
        </defs>
        
        {/* Background */}
        <rect width="100%" height="100%" fill="white" />
        
        {/* Apply grid pattern */}
        <rect width="100%" height="100%" fill="url(#grid)" />
        
        {/* Apply dots at intersections */}
        <rect width="100%" height="100%" fill="url(#dots)" />
        
        {/* Large geometric shapes */}
        <g opacity="0.05">
          <rect x="50" y="50" width="100" height="100" fill="black" transform="rotate(25 100 100)" />
          <rect x="250" y="150" width="80" height="80" fill="black" transform="rotate(-15 290 190)" />
          <circle cx="300" cy="80" r="60" fill="black" />
        </g>
        
        {/* Decorative lines */}
        <g opacity="0.1">
          <line x1="0" y1="150" x2="400" y2="150" stroke="black" strokeWidth="1" />
          <line x1="200" y1="0" x2="200" y2="300" stroke="black" strokeWidth="1" />
        </g>
      </svg>
    </div>
  )
}