import { SystemCard } from '@/components/SystemCard'
import { PrincipleCard } from '@/components/PrincipleCard'
import { BenefitRow } from '@/components/BenefitRow'
import { ArrowRight, FileText, Shield, GitBranch, Globe, Cloud, Users, HardDrive, User, Layers, Zap, Sparkles } from "lucide-react"

export default function Ecosystem() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section - Full Height */}
            <section className="min-h-screen flex items-center relative">
                {/* Preview Banner - positioned to account for navbar */}
                <div className="absolute top-16 left-0 right-0 bg-soft-gray border-y border-black/10 z-40">
                    <div className="max-w-6xl mx-auto px-6 py-3">
                        <p className="text-sm text-center text-foreground/60">
                            <span className="font-medium">Preview:</span> This ecosystem is currently in development. Join our waitlist to get early access.
                        </p>
                    </div>
                </div>
                <div className="max-w-6xl mx-auto px-6 py-24">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left copy */}
                        <div>
                            <h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-8">
                                NUU Ecosystem
                            </h1>
                            
                            <p className="text-xl text-foreground/70 leading-relaxed mb-8 max-w-prose">
                                The systems built on top of our cognitive tools.
                                Every component works independently but can integrate seamlessly.
                            </p>
                            
                            <p className="text-base text-foreground/60 leading-relaxed mb-10 max-w-prose">
                                Built on open standards and markdown-first principles, the NUU ecosystem 
                                keeps your knowledge portable, searchable and truly yours.
                            </p>
                            
                            <a 
                                href="#systems"
                                className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all group"
                            >
                                Explore core systems 
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                        
                        {/* Right benefit box */}
                        <aside className="lg:pl-12">
                            <div className="bg-white border border-black/10 rounded-[4px] p-10 relative">
                                <h3 className="text-sm font-medium text-foreground/40 uppercase tracking-wider mb-6">
                                    Our Vision
                                </h3>
                                
                                <ul className="space-y-4">
                                    <BenefitRow
                                        icon={<Layers className="w-5 h-5" />}
                                        title="Composable by Design"
                                        copy="Pick one tool or combine many without migration pain."
                                    />
                                    <BenefitRow
                                        icon={<Zap className="w-5 h-5" />}
                                        title="Zero Lock-in"
                                        copy="Everything lives in plain files — switch tools any time."
                                    />
                                    <BenefitRow
                                        icon={<Sparkles className="w-5 h-5" />}
                                        title="AI-Ready"
                                        copy="Semantic metadata + open formats = perfect fodder for agents."
                                    />
                                    <BenefitRow
                                        icon={<Shield className="w-5 h-5" />}
                                        title="Privacy First, Cloud Optional"
                                        copy="Local-first architecture with granular encrypted sync."
                                    />
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            {/* Rest of the content */}
            <div className="max-w-6xl mx-auto px-6 space-y-24 pb-20">

                {/* Core Systems */}
                <section id="systems">
                    <div className="flex items-center gap-3 mb-8">
                        <p className="text-sm font-medium text-foreground/40 uppercase tracking-wider">Planned Systems</p>
                        <span className="text-xs bg-soft-gray px-2 py-1 rounded-full text-foreground/50">In Development</span>
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
                            link="/systems/cognition-os"
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
                            link="/systems/nuu-core"
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
                            link="/systems/nuu-centre"
                        />
                    </div>
                </section>

                {/* Spectrum Section */}
                <section>
                    <p className="text-sm font-medium text-foreground/40 uppercase tracking-wider mb-2">The Spectrum</p>
                    <h2 className="text-3xl font-semibold text-foreground mb-4">Flexible Architecture</h2>
                    <p className="text-foreground/70 leading-relaxed max-w-3xl mb-12">
                        Position each tool exactly where you need it on two fundamental spectrums.
                    </p>
                    
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
                                based on each project&apos;s requirements.
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
                <section>
                    <p className="text-sm font-medium text-foreground/40 uppercase tracking-wider mb-2">Core Principles</p>
                    <h2 className="text-3xl font-semibold text-foreground mb-4">Built on Solid Foundations</h2>
                    <p className="text-foreground/70 leading-relaxed max-w-3xl mb-12">
                        Every decision in the NUU ecosystem stems from these fundamental principles.
                    </p>
                    
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
                <section>
                    <p className="text-sm font-medium text-foreground/40 uppercase tracking-wider mb-2">Integration</p>
                    <h2 className="text-3xl font-semibold text-foreground mb-4">Everything Connects</h2>
                    <p className="text-foreground/70 leading-relaxed max-w-3xl mb-12">
                        While each tool excels independently, the real power emerges when they work together.
                    </p>
                    
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

                {/* Join the Waitlist */}
                <section className="border-t border-border/50 pt-16">
                    <div className="text-center max-w-2xl mx-auto">
                        <h2 className="text-3xl font-semibold text-foreground mb-4">
                            Be Part of the Future
                        </h2>
                        <p className="text-foreground/70 mb-8 leading-relaxed">
                            The NUU Ecosystem is currently in development. Join our waitlist to get early access 
                            to these tools as they launch and help shape the future of cognitive augmentation.
                        </p>
                        <div className="flex gap-4 justify-center">
                            <a 
                                href="https://forms.gle/your-waitlist-form"
                                className="inline-flex border items-center gap-2 px-6 py-2.5 bg-foreground text-background rounded-full text-sm font-medium hover:bg-foreground/0 hover:text-black hover:border-foreground/20 hover:transition"
                            >
                                Join Waitlist
                                <ArrowRight className="w-4 h-4" />
                            </a>
                            <a 
                                href="/tools"
                                className="inline-flex items-center gap-2 px-6 py-2.5 border border-foreground/20 rounded-full text-sm font-medium hover:border-foreground/40 transition"
                            >
                                Explore Tools
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}