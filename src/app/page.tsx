import { Button } from "@/components/ui/button"
import { FocusHalo } from "@/components/effects/FocusHalo"

export default function Home() {
  return (
    <div className="relative h-screen flex items-center justify-center px-6">
      <FocusHalo />

      {/* Hero */}
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
          Augment your thinking.
        </h1>

        <p className="mt-4 text-lg md:text-xl text-foreground/60 leading-relaxed max-w-xl mx-auto">
          Tools for deep understanding and flow — markdown‑first, local‑first, AI‑ready.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center items-center">
          <Button asChild>
            <a href="/tools">Explore tools</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="/about">Learn more</a>
          </Button>
        </div>

        <p className="mt-6 text-xs text-foreground/50">
          Cognition × Software • Plain files • No lock‑in
        </p>
      </div>
    </div>
  )
}