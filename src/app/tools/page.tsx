export default function Tools() {
    return (
        <div className="min-h-screen pt-24 pb-20 px-6">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-3xl font-medium mb-12">Tools</h1>
                
                <div className="space-y-16">
                    <div>
                        <h2 className="text-xl font-semibold mb-4">NUU Surf</h2>
                        <p className="mb-6 leading-relaxed">
                            A revolutionary way to read and understand documents through 
                            multi-layered abstraction. Navigate seamlessly between different 
                            levels of detail while maintaining context and accuracy.
                        </p>
                        <span className="inline-block px-4 py-1.5 bg-secondary text-sm font-medium rounded-full">
                            Coming soon
                        </span>
                    </div>
                    
                    <div className="border-t border-border pt-16">
                        <h3 className="text-base font-semibold mb-8">Future Tools</h3>
                        
                        <div className="space-y-6">
                            <div className="border-l-2 border-border pl-4">
                                <h4 className="font-medium mb-1">NUU Echo</h4>
                                <p className="text-sm text-foreground/70">
                                    Enhanced audio consumption and processing
                                </p>
                            </div>
                            
                            <div className="border-l-2 border-border pl-4">
                                <h4 className="font-medium mb-1">NUU Transform</h4>
                                <p className="text-sm text-foreground/70">
                                    Convert information between different mediums
                                </p>
                            </div>
                            
                            <div className="border-l-2 border-border pl-4">
                                <h4 className="font-medium mb-1">NUU Remember</h4>
                                <p className="text-sm text-foreground/70">
                                    Advanced memory enhancement and recall
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="pt-8">
                        <a 
                            href="/about" 
                            className="inline-flex items-center text-sm font-medium text-foreground/50 hover:text-foreground transition-colors duration-200"
                        >
                            ← Back to about
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}