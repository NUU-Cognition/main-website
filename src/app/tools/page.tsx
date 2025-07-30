import { ProductShowcase } from '@/components/ProductShowcase'
import { FutureProductCard } from '@/components/FutureProductCard'

export default function Tools() {
    return (
        <div className="min-h-screen bg-background">
            <div className="max-w-6xl mx-auto px-6 pt-24 pb-20">
                {/* Featured Product */}
                <section className="mb-24">
                    <div className="mb-6">
                        <p className="text-sm font-medium text-foreground/40 uppercase tracking-wider">Featured</p>
                    </div>
                    
                    <ProductShowcase
                        title="NUU Surf"
                        subtitle="Early Access"
                        description="A revolutionary way to read and understand documents through multi-layered abstraction. Navigate seamlessly between different levels of detail while maintaining context and accuracy."
                        features={[
                            "Multi-layered document navigation with intelligent abstraction",
                            "Context-preserving summaries at every level",
                            "Seamless transitions between detail and overview",
                            "Built for deep understanding, not just skimming"
                        ]}
                        link="https://library.nuucognition.com"
                        buttonText="Join Waitlist"
                    />
                </section>
                
                {/* Available Tools */}
                <section className="mb-24">
                    <div className="mb-6">
                        <p className="text-sm font-medium text-foreground/40 uppercase tracking-wider">The NUU Suite</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Add non-featured existing tools here when available */}
                        <div className="col-span-full text-center py-12 bg-soft-gray rounded-[4px]">
                            <p className="text-foreground/50">More tools coming soon</p>
                        </div>
                    </div>
                </section>
                
                {/* Future Tools */}
                <section className="mb-24">
                    <div className="mb-6">
                        <p className="text-sm font-medium text-foreground/40 uppercase tracking-wider">Future Tools</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

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
                </section>
                
                {/* <div className="mt-20 pt-12 border-t border-border/50">
                    <a 
                        href="/about" 
                        className="inline-flex items-center text-sm font-medium text-foreground/50 hover:text-foreground transition-colors duration-200"
                    >
                        ← Learn more about our philosophy
                    </a>
                </div> */}
            </div>
        </div>
    );
}