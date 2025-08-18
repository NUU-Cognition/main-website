import { ProductShowcase } from '@/components/ProductShowcase'
import { FutureProductCard } from '@/components/FutureProductCard'

export default function Tools() {
    return (
        <div className="bg-background">
            {/* Featured Product Section - Full Screen */}
            <section className="min-h-screen flex items-center px-6 pt-14">
                <div className="max-w-6xl mx-auto w-full">
                    <div className="mb-8">
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
                </div>
            </section>
            
            {/* Available Tools Section - Full Screen */}
            <section className="min-h-screen flex items-center px-6">
                <div className="max-w-6xl mx-auto w-full">
                    <div className="mb-8">
                        <p className="text-sm font-medium text-foreground/40 uppercase tracking-wider">The NUU Suite</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Add non-featured existing tools here when available */}
                        <div className="col-span-full text-center py-24 bg-soft-gray rounded-lg">
                            <p className="text-foreground/50 text-lg">More tools coming soon</p>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Future Tools Section - Full Screen */}
            <section className="min-h-screen flex items-center px-6 pb-20">
                <div className="max-w-6xl mx-auto w-full">
                    <div className="mb-8">
                        <p className="text-sm font-medium text-foreground/40 uppercase tracking-wider">Future Tools</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                </div>
            </section>
        </div>
    );
}