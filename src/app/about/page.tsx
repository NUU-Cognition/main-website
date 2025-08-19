export default function About() {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-32">
        <div className="space-y-24">
          <section>
            <h1 className="text-sm font-medium text-foreground/60 mb-8">About</h1>
            <p className="text-2xl leading-relaxed text-foreground/90">
              We build tools that enhance human thinking. Our approach combines cognitive science 
              research with practical engineering to create software that keeps you engaged in the 
              cognitive process.
            </p>
          </section>

          <section className="grid gap-16">
            <div>
              <h2 className="text-sm font-medium text-foreground/60 mb-4">Philosophy</h2>
              <p className="text-foreground/80 leading-relaxed">
                AI should augment, not replace. Every tool we build maintains human agency while 
                reducing cognitive friction. We believe the best insights emerge when technology 
                supports rather than substitutes human thought.
              </p>
            </div>

            <div>
              <h2 className="text-sm font-medium text-foreground/60 mb-4">Method</h2>
              <p className="text-foreground/80 leading-relaxed">
                First principles thinking guides our work. We ground everything in research from 
                cognitive science and validate through rapid iteration. Complex problems become 
                tractable when approached with clear thinking and the right tools.
              </p>
            </div>

            <div>
              <h2 className="text-sm font-medium text-foreground/60 mb-4">Practice</h2>
              <div className="space-y-3 text-foreground/80">
                <p>Local-first architecture with zero lock-in</p>
                <p>Minimal interfaces that preserve context</p>
                <p>Tools shaped by use, not feature lists</p>
              </div>
            </div>
          </section>

          <section className="pt-8">
            <a 
              href="/tools" 
              className="inline-flex text-sm text-foreground/60 hover:text-foreground transition-colors"
            >
              Explore tools →
            </a>
          </section>
        </div>
      </div>
    </div>
  )
}