export default function About() {
    return (
        <div className="min-h-screen pt-24 pb-20 px-6">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-3xl font-medium mb-12">About</h1>
                
                <div className="space-y-8 leading-relaxed text-foreground/90">
                    <p>
                        Our goal is to better understand the human mind, and with that understanding, 
                        innovate effective methods to develop, use, and augment it. This pursuit sits 
                        at the intersection between learning (developing), cognition (using), and 
                        technology (augmenting).
                    </p>
                    
                    <p>
                        NUU Cognition is an innovation lab, building on research through rapid iteration, 
                        testing and validation. We aim to translate insights into practical methods, 
                        products, and services that meaningfully enhance human capabilities.
                    </p>
                    
                    <div className="pt-12 space-y-8">
                        <div>
                            <h2 className="text-base font-semibold mb-3">Philosophy</h2>
                            <p>
                                We believe AI should enhance human thinking, not substitute for it. 
                                Our tools are designed to keep you actively engaged in the cognitive process.
                            </p>
                        </div>
                        
                        <div>
                            <h2 className="text-base font-semibold mb-3">Approach</h2>
                            <p>
                                We approach cognitive enhancement from fundamental principles about how 
                                humans process information, learn, and make decisions.
                            </p>
                        </div>
                        
                        <div>
                            <h2 className="text-base font-semibold mb-3">Method</h2>
                            <p>
                                Our work is grounded in academic research from cognitive science, psychology, 
                                and neuroscience, combined with practical experimentation.
                            </p>
                        </div>
                    </div>
                    
                    <div className="pt-16">
                        <a 
                            href="/tools" 
                            className="inline-flex items-center text-sm font-medium border-b border-foreground/20 hover:border-foreground/60 transition-colors duration-200"
                        >
                            Explore our tools →
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}