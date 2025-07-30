import React from 'react'

interface BenefitRowProps {
  icon: React.ReactNode
  title: string
  copy: string
}

export function BenefitRow({ icon, title, copy }: BenefitRowProps) {
  return (
    <li className="flex items-start gap-3">
      <span className="flex-shrink-0 w-5 h-5 text-foreground/50 mt-0.5">
        {icon}
      </span>
      <div>
        <p className="text-sm font-medium text-foreground">{title}</p>
        <p className="text-sm text-foreground/60">{copy}</p>
      </div>
    </li>
  )
}