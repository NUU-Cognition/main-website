import { MinimalPageHeader } from "@/components/MinimalPageHeader"
import { ContentSection } from "@/components/ContentSection"
import { FeatureCard } from "@/components/FeatureCard"
import { TeamMemberCard } from "@/components/TeamMemberCard"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function About() {
  const team = [
    {
      name: "Nathan",
      role: "Founder & Research Lead",
      bio: "Leads product thinking for Cognition OS and NUU Surf. Focused on turning cognitive science into calm, practical software.",
      initials: "N",
      links: { twitter: "https://x.com/nuucognition" }
    },
    {
      name: "Maya Chen",
      role: "Product Design",
      bio: "Designs minimal, context-preserving interfaces and motion systems that keep you in the flow.",
      initials: "MC",
      links: {}
    },
    {
      name: "Arjun Patel",
      role: "Systems Engineer",
      bio: "Builds our local-first data layer, encrypted sync, and markdown semantics for agents.",
      initials: "AP",
      links: { github: "https://github.com/nuucognition" }
    },
    {
      name: "Riley Brooks",
      role: "ML Engineer",
      bio: "Works on summarization, retrieval, and agent-safe abstractions behind NUU Surf.",
      initials: "RB",
      links: {}
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <MinimalPageHeader
        title="We augment human thinking."
        subtitle="Combining cognitive science with practical engineering to build tools that enhance, not replace, human intelligence."
      />

      <ContentSection className="pt-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard
            title="Philosophy"
            description="We maintain human agency and design for deep work. The best insights emerge when technology supports—not substitutes—human thought."
          />
          <FeatureCard
            title="Method"
            description="First-principles research meets tight feedback loops. We prototype quickly, validate with real use, and refine until interfaces disappear."
          />
          <FeatureCard
            title="Practice"
            description="Markdown-first, local-first architecture. Minimal interfaces that preserve context. Built for agents, safe for people."
          />
        </div>

      </ContentSection>

      <ContentSection className="bg-soft-gray">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light mb-4">Our team</h2>
          <p className="text-lg text-foreground/60">
            A small group of researchers and engineers working to augment human cognition.
          </p>
        </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((m) => (
              <TeamMemberCard
                key={m.name}
                name={m.name}
                role={m.role}
                bio={m.bio}
                initials={m.initials}
                links={m.links as any}
              />
            ))}
          </div>
      </ContentSection>

      <ContentSection>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-light mb-6">Ready to augment your thinking?</h2>
          <p className="text-lg text-foreground/60 mb-10">
            Join our early access program and be among the first to experience the future of cognitive tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="/tools" className="inline-flex items-center gap-2">
                Explore our tools
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://forms.gle/your-waitlist-form">Join waitlist</a>
            </Button>
          </div>
        </div>
      </ContentSection>
    </div>
  )
}