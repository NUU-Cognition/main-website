import { SystemCard } from '@/components/SystemCard'
import { PrincipleCard } from '@/components/PrincipleCard'
import { ArrowRight, FileText, Shield, GitBranch, Globe, Cloud, Users, HardDrive, User } from "lucide-react"

export default function Ecosystem() {
    return (
        <div className="min-h-screen bg-background">
            <div className="max-w-6xl mx-auto px-6 pt-24 pb-20">
                {/* Header Section */}
                <section className="mb-24">
                    <h1 className="text-4xl md:text-5xl font-semibold text-foreground mb-8">
                        The NUU Ecosystem
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <p className="text-lg text-foreground/70 leading-relaxed mb-6">
                                A comprehensive suite of cognitive tools designed to augment human intelligence. 
                                Every component works independently yet integrates seamlessly, creating a 
                                flexible system that adapts to your needs.
                            </p>
                            <p className="text-base text-foreground/60 leading-relaxed">
                                Built on open standards and markdown-first principles, the NUU ecosystem ensures 
                                your knowledge remains portable, searchable, and truly yours.
                            </p>
                        </div>
                        <div className="bg-soft-gray rounded-[4px] p-8">
                            <h3 className="text-sm font-medium text-foreground/40 uppercase tracking-wider mb-4">
                                Key Benefits
                            </h3>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <span className="inline-block w-1 h-1 bg-foreground/40 rounded-full mt-2 mr-3 flex-shrink-0" />
                                    <span className="text-sm text-foreground/70">Complete data ownership with markdown files</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="inline-block w-1 h-1 bg-foreground/40 rounded-full mt-2 mr-3 flex-shrink-0" />
                                    <span className="text-sm text-foreground/70">Flexible deployment from local to cloud</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="inline-block w-1 h-1 bg-foreground/40 rounded-full mt-2 mr-3 flex-shrink-0" />
                                    <span className="text-sm text-foreground/70">Seamless tool integration and interoperability</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="inline-block w-1 h-1 bg-foreground/40 rounded-full mt-2 mr-3 flex-shrink-0" />
                                    <span className="text-sm text-foreground/70">Privacy-first architecture with optional sync</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Core Systems */}
                <section className="mb-24">
                    <div className="mb-8">
                        <p className="text-sm font-medium text-foreground/40 uppercase tracking-wider">Core Systems</p>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <SystemCard
                            title="Cognition OS"
                            subtitle="Personal System"
                            description="Your personal cognitive operating system. A unified environment for managing knowledge, tasks, and creative work—all stored in plain markdown files you control."
                            features={[
                                "Local-first markdown storage",
                                "Seamless tool integration",
                                "Privacy by design",
                                "Cross-platform sync"
                            ]}
                        />
                        
                        <SystemCard
                            title="NUU Core"
                            subtitle="Organization System"
                            description="Transform your organization's collective knowledge into a living, breathing system. Built for teams that value transparency and distributed intelligence."
                            features={[
                                "Shared knowledge graphs",
                                "Team-wide search and discovery",
                                "Version control integration",
                                "Flexible permissions"
                            ]}
                        />
                        
                        <SystemCard
                            title="NUU Centre"
                            subtitle="Command Center"
                            description="Your unified hub for orchestrating all NUU tools. Access everything from one place while maintaining the flexibility to use each tool independently."
                            features={[
                                "Unified tool access",
                                "Workflow management",
                                "Cross-tool search",
                                "Activity overview"
                            ]}
                        />
                    </div>
                </section>

                {/* Spectrum Section */}
                <section className="mb-24">
                    <div className="mb-12">
                        <p className="text-sm font-medium text-foreground/40 uppercase tracking-wider mb-4">The Spectrum</p>
                        <h2 className="text-2xl font-semibold text-foreground mb-6">
                            Flexible Architecture for Every Need
                        </h2>
                        <p className="text-foreground/70 leading-relaxed max-w-3xl">
                            The NUU ecosystem operates on two fundamental spectrums, allowing you to position 
                            each tool exactly where you need it. This flexibility ensures that your cognitive 
                            tools adapt to your workflow, not the other way around.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white border border-black/10 rounded-[4px] p-8">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="flex items-center gap-3">
                                    <HardDrive className="w-5 h-5 text-foreground/50" />
                                    <span className="text-sm font-medium text-foreground">Local</span>
                                </div>
                                <div className="flex-1 h-[1px] bg-gradient-to-r from-foreground/20 via-foreground/10 to-foreground/20" />
                                <div className="flex items-center gap-3">
                                    <span className="text-sm font-medium text-foreground">Cloud</span>
                                    <Cloud className="w-5 h-5 text-foreground/50" />
                                </div>
                            </div>
                            <p className="text-sm text-foreground/60 leading-relaxed">
                                Run everything on your machine for complete privacy and control, or leverage 
                                cloud infrastructure for powerful compute and accessibility. Mix both approaches 
                                based on each project's requirements.
                            </p>
                        </div>
                        
                        <div className="bg-white border border-black/10 rounded-[4px] p-8">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="flex items-center gap-3">
                                    <User className="w-5 h-5 text-foreground/50" />
                                    <span className="text-sm font-medium text-foreground">Individual</span>
                                </div>
                                <div className="flex-1 h-[1px] bg-gradient-to-r from-foreground/20 via-foreground/10 to-foreground/20" />
                                <div className="flex items-center gap-3">
                                    <span className="text-sm font-medium text-foreground">Collaborative</span>
                                    <Users className="w-5 h-5 text-foreground/50" />
                                </div>
                            </div>
                            <p className="text-sm text-foreground/60 leading-relaxed">
                                Work in focused isolation for deep thinking, or seamlessly collaborate with 
                                your team. Share knowledge graphs, co-edit documents, and build collective 
                                intelligence while maintaining individual ownership.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Core Principles */}
                <section className="mb-24">
                    <div className="mb-12">
                        <p className="text-sm font-medium text-foreground/40 uppercase tracking-wider mb-4">Core Principles</p>
                        <h2 className="text-2xl font-semibold text-foreground mb-6">
                            Built on Solid Foundations
                        </h2>
                        <p className="text-foreground/70 leading-relaxed max-w-3xl">
                            Every decision in the NUU ecosystem stems from these fundamental principles. 
                            They're not just features—they're commitments to how cognitive tools should work.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <PrincipleCard
                            icon={<FileText className="w-5 h-5 text-foreground/50" />}
                            title="Markdown Everything"
                            description="All content stored as human-readable markdown files. Edit with any tool, search with grep, version with git. Your knowledge, your way."
                        />
                        
                        <PrincipleCard
                            icon={<Shield className="w-5 h-5 text-foreground/50" />}
                            title="Privacy by Default"
                            description="Local-first architecture means your thoughts stay on your machine. Cloud features are optional and always encrypted end-to-end."
                        />
                        
                        <PrincipleCard
                            icon={<GitBranch className="w-5 h-5 text-foreground/50" />}
                            title="Version Everything"
                            description="Built to work with version control systems. Track changes, collaborate, and never lose an idea. Time travel through your knowledge."
                        />
                        
                        <PrincipleCard
                            icon={<Globe className="w-5 h-5 text-foreground/50" />}
                            title="Export Anywhere"
                            description="No vendor lock-in. Export your entire knowledge base as plain files anytime. Move between tools, platforms, or build your own."
                        />
                    </div>
                </section>

                {/* How It Works Together */}
                <section className="mb-24">
                    <div className="mb-12">
                        <p className="text-sm font-medium text-foreground/40 uppercase tracking-wider mb-4">Integration</p>
                        <h2 className="text-2xl font-semibold text-foreground mb-6">
                            Everything Connects
                        </h2>
                        <p className="text-foreground/70 leading-relaxed max-w-3xl">
                            While each tool excels independently, the real power emerges when they work together. 
                            Your markdown files serve as the universal language between all components.
                        </p>
                    </div>
                    
                    <div className="bg-soft-gray rounded-[4px] p-12">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div>
                                <h3 className="text-lg font-medium text-foreground mb-3">
                                    Unified Data Layer
                                </h3>
                                <p className="text-sm text-foreground/60 leading-relaxed">
                                    All tools read and write the same markdown format. Edit in NUU Surf, 
                                    analyze in Cognition OS, share via NUU Core—your data flows seamlessly.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-foreground mb-3">
                                    Smart Sync
                                </h3>
                                <p className="text-sm text-foreground/60 leading-relaxed">
                                    Choose what syncs and when. Keep sensitive projects local, sync team 
                                    knowledge to the cloud. Granular control over every file and folder.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-foreground mb-3">
                                    Open Protocols
                                </h3>
                                <p className="text-sm text-foreground/60 leading-relaxed">
                                    Built on standard formats and protocols. Integrate with your existing 
                                    tools, build custom workflows, or create your own tools on top.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Getting Started */}
                <section className="border-t border-border/50 pt-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-2xl font-semibold text-foreground mb-6">
                                Start Your Journey
                            </h2>
                            <p className="text-foreground/70 mb-8 leading-relaxed">
                                Begin with any tool that solves your immediate need. As your requirements grow, 
                                add more components. The ecosystem scales with you, from personal note-taking 
                                to enterprise knowledge management.
                            </p>
                            <div className="flex gap-4">
                                <a 
                                    href="/tools"
                                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-foreground text-background rounded-full text-sm font-medium hover:bg-foreground/90 transition"
                                >
                                    Explore Tools
                                    <ArrowRight className="w-4 h-4" />
                                </a>
                                <a 
                                    href="/about"
                                    className="inline-flex items-center gap-2 px-6 py-2.5 border border-foreground/20 rounded-full text-sm font-medium hover:border-foreground/40 transition"
                                >
                                    Learn More
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="w-full bg-white border border-black/10 rounded-[4px] p-8">
                                <p className="text-sm font-medium text-foreground/40 uppercase tracking-wider mb-4">
                                    Quick Start
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3">
                                        <span className="text-sm font-medium text-foreground">1.</span>
                                        <span className="text-sm text-foreground/70">Choose a tool that fits your workflow</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="text-sm font-medium text-foreground">2.</span>
                                        <span className="text-sm text-foreground/70">Install locally or access via browser</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="text-sm font-medium text-foreground">3.</span>
                                        <span className="text-sm text-foreground/70">Start creating in markdown</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="text-sm font-medium text-foreground">4.</span>
                                        <span className="text-sm text-foreground/70">Add more tools as needed</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}