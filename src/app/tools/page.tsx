import { ProductShowcase } from '@/components/ProductShowcase'
import { FutureProductCard } from '@/components/FutureProductCard'

export default function Tools() {
    return (
        <div className="min-h-screen bg-background">
            <div className="max-w-6xl mx-auto px-6 pt-24 pb-20">
                {/* <div className="mb-16">
                    <h1 className="text-4xl font-semibold text-foreground mb-4">Tools</h1>
                    <p className="text-lg text-foreground/70 max-w-3xl">
                        Software designed to augment your cognitive capabilities, not replace them.
                    </p>
                </div> */}
                
                <section className="mb-20">
                    <h2 className="text-2xl font-semibold text-foreground mb-8">Featured</h2>
                    
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
                    />
                </section>
                
                <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-8">Coming Soon</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <FutureProductCard
                            title="NUU Echo"
                            subtitle="Audio Intelligence"
                            description="Transform how you consume and process audio content. Echo brings clarity to podcasts, lectures, and conversations through intelligent processing."
                            status="in-development"
                        />
                        
                        <FutureProductCard
                            title="NUU Transform"
                            subtitle="Media Conversion"
                            description="Seamlessly convert information between different mediums while preserving meaning and enhancing understanding."
                            status="coming-soon"
                        />
                        
                        <FutureProductCard
                            title="NUU Remember"
                            subtitle="Memory Enhancement"
                            description="Advanced memory augmentation that helps you retain and recall information when you need it most."
                            status="coming-soon"
                        />
                        
                        <FutureProductCard
                            title="NUU Focus"
                            subtitle="Attention Management"
                            description="Intelligent workspace that adapts to your cognitive state, creating the optimal environment for deep work."
                            status="coming-soon"
                        />
                        
                        <FutureProductCard
                            title="NUU Connect"
                            subtitle="Knowledge Synthesis"
                            description="Build connections between disparate pieces of information to generate new insights and understanding."
                            status="coming-soon"
                        />
                    </div>
                </section>
                
                <div className="mt-20 pt-12 border-t border-border/50">
                    <a 
                        href="/about" 
                        className="inline-flex items-center text-sm font-medium text-foreground/50 hover:text-foreground transition-colors duration-200"
                    >
                        ← Learn more about our philosophy
                    </a>
                </div>
            </div>
        </div>
    );
}