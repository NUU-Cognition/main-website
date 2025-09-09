import { ProductShowcase } from '@/components/ProductShowcase'
import { FutureProductCard } from '@/components/FutureProductCard'
import { MinimalPageHeader } from '@/components/MinimalPageHeader'
import { ContentSection } from '@/components/ContentSection'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function Tools() {
    return (
        <div className="bg-background">
            <MinimalPageHeader
                title="Tools that think with you."
                // subtitle="Markdown-first software for reading, understanding, and shaping knowledge. Every tool works alone or together."
            />

            <ContentSection className="pt-0">
                <div className="mb-4">
                    <span className="text-xs font-medium uppercase tracking-wider text-foreground/40">Featured</span>
                </div>
                
                <ProductShowcase
                    title="NUU Surf"
                    subtitle="In Development"
                    description="A revolutionary way to read and understand documents through multi-layered summaries. Navigate seamlessly between different levels of detail while maintaining context and accuracy."
                    features={[
                        "Multi-layered document navigation with intelligent abstraction",
                        "Context-preserving summaries at every level",
                        "Seamless transitions between detail and overview",
                        "Built for deep understanding, not just skimming"
                    ]}
                    link="https://forms.gle/vYYueKML2t7fgHkU9"
                    buttonText="Join Early Testing ->"
                />
            </ContentSection>

            <ContentSection className="bg-soft-gray">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-light mb-4">Coming Soon</h2>
                    <p className="text-lg text-foreground/60">The next generation of thinking tools</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <FutureProductCard
                        title="NUU Transform"
                        subtitle="Media Conversion"
                        description="Seamlessly convert information between different mediums while preserving meaning and enhancing understanding."
                        status="in-development"
                    />

                    <FutureProductCard
                        title="NUU Echo"
                        subtitle="Audio Intelligence"
                        description="Transform how you consume and process audio content. Echo brings clarity to podcasts, lectures, and conversations through intelligent processing."
                        status="coming-soon"
                    />
                </div>
            </ContentSection>

            {/* <ContentSection>
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-light mb-6">Be the first to know</h2>
                    <p className="text-lg text-foreground/60 mb-10">
                        Join our waitlist for early access to new tools as they launch.
                    </p>
                    <Button size="lg" asChild>
                        <a href="https://forms.gle/your-waitlist-form" className="inline-flex items-center gap-2">
                            Join the waitlist
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </Button>
                </div>
            </ContentSection> */}
        </div>
    );
}