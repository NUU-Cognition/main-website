'use client'

import React from 'react'
import { cn } from '@/lib/utils'

// Layout helpers
import { ContentSection } from '@/components/ContentSection'

// Core components
import { PageHeader } from '@/components/PageHeader'
import { MinimalPageHeader } from '@/components/MinimalPageHeader'
import { FeatureCard } from '@/components/FeatureCard'
import { PrincipleCard } from '@/components/PrincipleCard'
import { BenefitRow } from '@/components/BenefitRow'
import { SystemCard } from '@/components/SystemCard'
import { ProductShowcase } from '@/components/ProductShowcase'
import { FutureProductCard } from '@/components/FutureProductCard'
import { TeamMemberCard } from '@/components/TeamMemberCard'
import { MinimalTeamCard } from '@/components/MinimalTeamCard'
import { SurfVisualPattern } from '@/components/SurfVisualPattern'


// UI primitives
import { Button } from '@/components/ui/button'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

// Icons
import {
  ArrowRight,
  CheckCircle2,
  Brain,
  Layers as LayersIcon,
  Sparkles,
  Shield,
  Github,
  Users,
} from 'lucide-react'

export default function Testing() {
  const [effects, setEffects] = React.useState({
    halo: true,
    grid: false,
    ice: true,
    layers: true,
  })

  const toggle = (k: keyof typeof effects) =>
    setEffects((s) => ({ ...s, [k]: !s[k] }))

  const team = [
    {
      name: 'Nathan',
      role: 'Founder & Research Lead',
      bio: 'Leads product thinking for Cognition OS and NUU Surf.',
      initials: 'N',
      links: { github: 'https://github.com/nuucognition' },
    },
    {
      name: 'Maya Chen',
      role: 'Product Design',
      bio: 'Minimal, context‑preserving interfaces and motion systems.',
      initials: 'MC',
      links: {},
    },
    {
      name: 'Arjun Patel',
      role: 'Systems Engineer',
      bio: 'Local‑first data layer, encrypted sync, markdown semantics.',
      initials: 'AP',
      links: {},
    },
    {
      name: 'Riley Brooks',
      role: 'ML Engineer',
      bio: 'Summarization, retrieval, and agent‑safe abstractions.',
      initials: 'RB',
      links: {},
    },
  ]

  return (
    <div className="relative min-h-screen bg-background">
      {/* Optional background effects for quick visual checks */}

      <div className="sticky top-14 z-40 border-b border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-6xl mx-auto px-6 py-3 flex flex-wrap items-center gap-2 text-xs">
          <div className="ml-auto hidden sm:flex gap-2">
            <Button asChild size="sm" variant="ghost"><a href="#ui">UI</a></Button>
            <Button asChild size="sm" variant="ghost"><a href="#headers">Headers</a></Button>
            <Button asChild size="sm" variant="ghost"><a href="#cards">Cards</a></Button>
            <Button asChild size="sm" variant="ghost"><a href="#content">Content</a></Button>
            <Button asChild size="sm" variant="ghost"><a href="#teams">Teams</a></Button>
            <Button asChild size="sm" variant="ghost"><a href="#effects">Effects</a></Button>
          </div>
        </div>
      </div>

      {/* PageHeader demo */}
      <PageHeader
        eyebrow="Testing"
        title="Component & effects showroom"
        lead={
          <>
            This page renders every exported component with sensible demo props. Use it for
            development, visual QA, and quick regression checks.
          </>
        }
        badge="Dev Only"
        primaryCta={{ href: '/', label: 'Back home' }}
        secondaryCta={{ href: '/tools', label: 'View tools', variant: 'outline' }}
      />

      {/* UI primitives ---------------------------------------------------- */}
      <ContentSection className="pt-0">
        <h2 className="text-2xl font-medium mb-6">UI primitives</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Buttons</CardTitle>
              <CardDescription>Variants & sizes</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Button>Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="link" asChild>
                  <a href="#">Link</a>
                </Button>
              </div>
              <Separator />
              <div className="flex flex-wrap items-center gap-2">
                <Button size="sm">Sm</Button>
                <Button>Default</Button>
                <Button size="lg">Lg</Button>
                <Button size="icon" aria-label="Icon">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
            <CardFooter className="text-xs text-muted-foreground">
              Uses shadcn/ui button with CVA variants.
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Card + Separator</CardTitle>
              <CardDescription>Structure primitives</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-foreground/70 mb-4">
                Cards provide consistent padding, border, and shadow. Use <code>Separator</code> for subtle dividers.
              </p>
              <Separator />
              <p className="text-sm text-foreground/60 mt-4">
                This is content below a separator.
              </p>
            </CardContent>
            <CardFooter className="text-xs text-muted-foreground">Footer content</CardFooter>
          </Card>
        </div>
      </ContentSection>

      {/* Headers ----------------------------------------------------------- */}
      <ContentSection className="bg-soft-gray">
        <h2 className="text-2xl font-medium mb-6">Headers</h2>
        <div className="space-y-12">
          <div className="border border-border/50 rounded-lg overflow-hidden">
            <MinimalPageHeader
              title="MinimalPageHeader"
              subtitle="A simple page title + subtitle block (no CTAs)."
              className="pt-16 pb-12"
            />
          </div>

          <div className="border border-border/50 rounded-lg p-6">
            <PageHeader
              eyebrow="Pattern"
              title="PageHeader"
              lead="Header with eyebrow, badge, and CTAs. Can be centered or left‑aligned."
              badge="Example"
              center={false}
              primaryCta={{ href: '#', label: 'Primary action' }}
              secondaryCta={{ href: '#', label: 'Secondary', variant: 'outline' }}
            />
          </div>
        </div>
      </ContentSection>

      {/* Cards & content blocks ------------------------------------------- */}
      <ContentSection>
        <h2 className="text-2xl font-medium mb-6">Cards & content blocks</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <FeatureCard
            icon={<LayersIcon className="w-5 h-5" />}
            title="FeatureCard (default)"
            description="Default card with subtle hover and shadow."
          />
          <FeatureCard
            icon={<Shield className="w-5 h-5" />}
            title="FeatureCard (outline)"
            description="Outline variant for lighter emphasis."
            variant="outline"
          />
          <FeatureCard
            icon={<Sparkles className="w-5 h-5" />}
            title="FeatureCard (ghost)"
            description="Ghost variant adds a soft hover only."
            variant="ghost"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <PrincipleCard
            icon={<Brain className="w-5 h-5 text-foreground/60" />}
            title="PrincipleCard"
            description="Communicate principles or values with an optional icon."
          />

          <div className="bg-white border border-black/10 rounded-lg p-8">
            <h3 className="text-lg font-medium mb-4">BenefitRow</h3>
            <ul className="space-y-3">
              <BenefitRow
                icon={<CheckCircle2 className="w-5 h-5" />}
                title="Readable markdown"
                copy="All data stored as human‑readable markdown files."
              />
              <BenefitRow
                icon={<Github className="w-5 h-5" />}
                title="Versionable"
                copy="Git‑friendly by design—track changes, branch, merge."
              />
              <BenefitRow
                icon={<Users className="w-5 h-5" />}
                title="Team‑ready"
                copy="Composable tools that integrate cleanly across teams."
              />
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SystemCard
            title="Cognition OS"
            subtitle="Personal"
            description="Your personal cognitive operating system—knowledge, tasks, and creative work in one flow."
            features={['Local‑first markdown storage', 'Seamless tool integration', 'Cross‑platform sync']}
            link="#"
          />

          <ProductShowcase
            title="NUU Surf"
            subtitle="Early Access"
            description="Multi‑layered abstraction for reading + understanding. Move between levels of detail while preserving context."
            features={[
              'Context‑preserving summaries at every level',
              'Seamless transitions between detail and overview',
              'Built for deep understanding, not just skimming',
            ]}
            link="https://library.nuucognition.com"
            buttonText="Join Waitlist"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <FutureProductCard
            title="NUU Transform"
            subtitle="Media Conversion"
            description="Convert information across mediums while preserving meaning."
            status="in-development"
          />
          <FutureProductCard
            title="NUU Echo"
            subtitle="Audio Intelligence"
            description="Bring clarity to podcasts, lectures, and conversations."
            status="coming-soon"
          />
        </div>
      </ContentSection>

      {/* Team blocks ------------------------------------------------------- */}
      <ContentSection className="bg-soft-gray">
        <h2 className="text-2xl font-medium mb-6">Team components</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {team.map((m) => (
            <TeamMemberCard
              key={m.name}
              name={m.name}
              role={m.role}
              bio={m.bio}
              initials={m.initials}
              links={m.links as Record<string, string>}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((m) => (
            <MinimalTeamCard
              key={m.name + '-mini'}
              name={m.name}
              role={m.role}
              bio={m.bio}
              links={m.links as Record<string, string>}
            />
          ))}
        </div>
      </ContentSection>

      {/* Visual patterns & effects ---------------------------------------- */}
      <ContentSection>
        <h2 className="text-2xl font-medium mb-6">Visual patterns & effects</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>SurfVisualPattern</CardTitle>
              <CardDescription>Lightweight SVG grid/dots composition</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 border rounded-lg overflow-hidden">
                <SurfVisualPattern />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Effect toggles</CardTitle>
              <CardDescription>Quickly enable/disable layered background effects</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex flex-wrap gap-2">
                <ToggleChip active={effects.halo} onClick={() => toggle('halo')}>FocusHalo</ToggleChip>
                <ToggleChip active={effects.ice} onClick={() => toggle('ice')}>IceAurora</ToggleChip>
                <ToggleChip active={effects.grid} onClick={() => toggle('grid')}>GridGlow</ToggleChip>
                <ToggleChip active={effects.layers} onClick={() => toggle('layers')}>StackedLayers</ToggleChip>
              </div>
              <p className="text-xs text-foreground/60">
                These are non‑blocking, GPU‑friendly, and respect <code>prefers‑reduced‑motion</code> where applicable.
              </p>
            </CardContent>
          </Card>
        </div>
      </ContentSection>

      {/* Footer spacer for scroll room */}
      <div className="h-16" />
    </div>
  )
}

/** Simple pill toggle used in the toolbar */
function ToggleChip({
  active,
  onClick,
  children,
}: {
  active?: boolean
  onClick?: () => void
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'rounded-full border text-xs px-3 py-1 transition-colors',
        active
          ? 'bg-foreground text-background border-foreground'
          : 'bg-background text-foreground/70 border-border hover:text-foreground'
      )}
    >
      {children}
    </button>
  )
}
