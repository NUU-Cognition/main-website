export default function Home() {
    return (
        <div className="min-h-screen flex items-center justify-center px-6">
            <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-8 tracking-tight">
                    NUU Cognition
                </h1>
                <p className="text-lg md:text-xl text-foreground/60 mb-12 leading-relaxed max-w-xl mx-auto">
                    Software to augment your mind.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                    <a 
                        href="/about" 
                        className="px-6 py-2.5 border border-black/70 font-medium text-sm hover:bg-black hover:text-white hover:scale-105 transition-all duration-200 rounded-full inline-block"
                    >
                        Learn more
                    </a>
                    <a 
                        href="/tools" 
                        className="px-6 py-2.5 border bg-black text-white font-medium text-sm hover:bg-black/0 hover:scale-105 hover:text-black hover:border-black/70 transition-all duration-200 rounded-full inline-block shadow-sm hover:shadow-md"
                    >
                        Explore our products
                    </a>
                </div>
            </div>
        </div>
    );
}