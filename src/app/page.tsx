export default function Home() {
    return (
        <div className="min-h-screen flex items-center justify-center px-6">
            <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-8 tracking-tight">
                    NUU Cognition
                </h1>
                <p className="text-lg md:text-xl text-foreground/60 mb-16 leading-relaxed max-w-xl mx-auto">
                    Thinking tools for everyone.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a 
                        href="/about" 
                        className="px-8 py-3 border border-black font-medium text-sm hover:bg-black hover:text-white transition-all duration-200 rounded-full"
                    >
                        Learn more
                    </a>
                    <a 
                        href="/tools" 
                        className="px-8 py-3 bg-black text-white font-medium text-sm hover:bg-black/90 transition-all duration-200 rounded-full"
                    >
                        Our tools
                    </a>
                </div>
            </div>
        </div>
    );
}