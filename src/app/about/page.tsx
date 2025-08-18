import { Button } from "@/components/ui/button"

export default function About() {
  return (
    <div className="relative">
      <div className="max-w-6xl mx-auto px-6 pt-28 pb-24">
        {/* Header + lead */}
        <header className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">About</h1>
          <p className="mt-4 text-lg text-foreground/60 leading-relaxed">
            We explore cognition through software—building clear, practical tools that help you
            understand more deeply and work in flow.
          </p>
        </header>

        {/* Intro body copy */}
        <section className="max-w-3xl mx-auto text-foreground/80 leading-relaxed mb-12 space-y-6">
          <p>
            Our goal is to better understand the human mind, and with that understanding, innovate
            effective methods to develop, use, and augment it. This pursuit sits at the intersection
            between learning (developing), cognition (using), and technology (augmenting).
          </p>
          <p>
            NUU Cognition is an engineering lab, building on research through rapid iteration, testing
            and validation. We translate insights into practical methods, products, and services that
            meaningfully enhance human capabilities.
          </p>
        </section>

        {/* Subtle divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-12" />

        {/* Two-column details */}
        <section className="grid md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div>
              <h2 className="text-base font-semibold mb-2">Philosophy</h2>
              <p className="text-sm text-foreground/70 leading-relaxed">
                AI should enhance human thinking, not substitute for it. Our tools are designed to keep
                you actively engaged in the cognitive process.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold mb-2">Approach</h2>
              <p className="text-sm text-foreground/70 leading-relaxed">
                We approach cognitive enhancement from first principles about how humans process
                information, learn, and make decisions.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-base font-semibold mb-2">Method</h2>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Our work is grounded in research from cognitive science, psychology, and neuroscience,
                combined with practical experimentation and validation.
              </p>
            </div>

            <div className="rounded-[6px] border border-border/50 bg-white p-6">
              <h3 className="text-sm font-medium text-foreground/80 mb-2">What this means in practice</h3>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li className="flex items-start gap-2">
                  <span className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-foreground/40" />
                  Markdown‑first, local‑first tools with zero lock‑in.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-foreground/40" />
                  Designs that reduce friction and preserve context while you think.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-foreground/40" />
                  Iteration guided by real use, not cosmetic complexity.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="mt-16 flex items-center justify-center gap-3">
          <Button asChild>
            <a href="/tools">Explore tools</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="/ecosystem">See the ecosystem</a>
          </Button>
        </div>
      </div>
    </div>
  )
}