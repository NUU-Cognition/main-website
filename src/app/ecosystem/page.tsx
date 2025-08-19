import { MinimalPageHeader } from '@/components/MinimalPageHeader'
import { ContentSection } from '@/components/ContentSection'
import { FeatureCard } from '@/components/FeatureCard'
import { SystemCard } from '@/components/SystemCard'
import { Button } from '@/components/ui/button'
import { ArrowRight, FileText, Shield, GitBranch, Globe, Cloud, Users, HardDrive, User, Layers, Zap, Sparkles, Lock } from "lucide-react"

export default function Ecosystem() {
    return (
        <div className="min-h-screen bg-background">
            <MinimalPageHeader
                title="Everything connected."
                subtitle="A complete ecosystem of cognitive tools. Each works independently, all integrate seamlessly."
            />

            <ContentSection className="pt-0">
                <div className="inline-flex items-center gap-2 mb-12">
                    <span className="text-xs font-medium uppercase tracking-wider text-foreground/40">Preview</span>
                    <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">In Development</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <FeatureCard
                        icon={<Layers className="w-5 h-5" />}
                        title="Composable"
                        description="Pick one tool or combine many. No migration pain, no vendor lock-in."
                        variant="outline"
                    />
                    <FeatureCard
                        icon={<Lock className="w-5 h-5" />}
                        title="Private"
                        description="Local-first by default. Your thoughts stay on your machine."
                        variant="outline"
                    />
                    <FeatureCard
                        icon={<Sparkles className="w-5 h-5" />}
                        title="AI-Ready"
                        description="Semantic metadata and open formats perfect for agents."
                        variant="outline"
                    />
                    <FeatureCard
                        icon={<GitBranch className="w-5 h-5" />}
                        title="Versionable"
                        description="Built to work with git. Track changes, collaborate, never lose an idea."
                        variant="outline"
                    />
                </div>
            </ContentSection>

            <ContentSection className="bg-soft-gray">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-light mb-4">Core Systems</h2>
                    <p className="text-lg text-foreground/60">Three pillars of the NUU ecosystem</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="bg-white border border-black/5 rounded-lg p-8 hover:shadow-lg transition-shadow">
                        <div className="text-xs font-medium uppercase tracking-wider text-foreground/40 mb-2">Personal</div>
                        <h3 className="text-2xl font-light mb-4">Cognition OS</h3>
                        <p className="text-foreground/60 mb-6">
                            Your personal cognitive operating system. A unified environment for managing knowledge, tasks, and creative work.
                        </p>
                        <ul className="space-y-2 text-sm text-foreground/60">
                            <li className="flex items-center gap-2">
                                <div className="w-1 h-1 bg-foreground/40 rounded-full" />
                                Local-first markdown storage
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-1 h-1 bg-foreground/40 rounded-full" />
                                Seamless tool integration
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-1 h-1 bg-foreground/40 rounded-full" />
                                Cross-platform sync
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white border border-black/5 rounded-lg p-8 hover:shadow-lg transition-shadow">
                        <div className="text-xs font-medium uppercase tracking-wider text-foreground/40 mb-2">Team</div>
                        <h3 className="text-2xl font-light mb-4">NUU Core</h3>
                        <p className="text-foreground/60 mb-6">
                            Transform your organization's collective knowledge into a living, breathing system.
                        </p>
                        <ul className="space-y-2 text-sm text-foreground/60">
                            <li className="flex items-center gap-2">
                                <div className="w-1 h-1 bg-foreground/40 rounded-full" />
                                Shared knowledge graphs
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-1 h-1 bg-foreground/40 rounded-full" />
                                Team-wide search
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-1 h-1 bg-foreground/40 rounded-full" />
                                Flexible permissions
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white border border-black/5 rounded-lg p-8 hover:shadow-lg transition-shadow">
                        <div className="text-xs font-medium uppercase tracking-wider text-foreground/40 mb-2">Command</div>
                        <h3 className="text-2xl font-light mb-4">NUU Centre</h3>
                        <p className="text-foreground/60 mb-6">
                            Your unified hub for orchestrating all NUU tools. Access everything from one place.
                        </p>
                        <ul className="space-y-2 text-sm text-foreground/60">
                            <li className="flex items-center gap-2">
                                <div className="w-1 h-1 bg-foreground/40 rounded-full" />
                                Unified tool access
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-1 h-1 bg-foreground/40 rounded-full" />
                                Workflow management
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-1 h-1 bg-foreground/40 rounded-full" />
                                Cross-tool search
                            </li>
                        </ul>
                    </div>
                </div>
            </ContentSection>

            <ContentSection>
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-light mb-8">How it works</h2>
                    
                    <div className="space-y-12">
                        <div className="flex gap-6">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-soft-gray flex items-center justify-center text-sm font-medium">1</div>
                            <div>
                                <h3 className="text-xl font-medium mb-2">Everything is markdown</h3>
                                <p className="text-foreground/60">
                                    All content stored as human-readable markdown files. Edit with any tool, search with grep, version with git.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-soft-gray flex items-center justify-center text-sm font-medium">2</div>
                            <div>
                                <h3 className="text-xl font-medium mb-2">Choose your deployment</h3>
                                <p className="text-foreground/60">
                                    Run everything locally for complete privacy, or leverage cloud infrastructure for powerful compute and accessibility.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-soft-gray flex items-center justify-center text-sm font-medium">3</div>
                            <div>
                                <h3 className="text-xl font-medium mb-2">Scale as needed</h3>
                                <p className="text-foreground/60">
                                    Start solo, grow to teams. Share knowledge graphs, co-edit documents, build collective intelligence.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </ContentSection>

            <ContentSection className="bg-soft-gray">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-light mb-6">Join the future</h2>
                    <p className="text-lg text-foreground/60 mb-10">
                        The NUU Ecosystem is currently in development. Join our waitlist for early access.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" asChild>
                            <a href="https://forms.gle/your-waitlist-form" className="inline-flex items-center gap-2">
                                Join waitlist
                                <ArrowRight className="w-4 h-4" />
                            </a>
                        </Button>
                        <Button size="lg" variant="outline" asChild>
                            <a href="/tools">Explore tools</a>
                        </Button>
                    </div>
                </div>
            </ContentSection>
        </div>
    )
}