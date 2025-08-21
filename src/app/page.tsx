import { Button } from "@/components/ui/button"
import { FocusHalo } from "@/components/effects/FocusHalo"
import { StackedLayers } from "@/components/effects/StackedLayers"
import { IceAurora } from "@/components/effects/IceAurora"
import { GridGlow } from "@/components/effects/GridGlow"
import { MeshGradient, DotOrbit } from "@paper-design/shaders-react"

export default function Home() {
  return (
    <div className="relative h-screen flex items-center justify-center px-6">
      {/* Grid effect that follows mouse */}
      {/* <GridGlow /> */}

      {/* Background Effects */}
      {/* <div className="absolute inset-0 overflow-hidden">
        <MeshGradient
          colors={['#e0eaff', '#99c8fa', '#43aaf4']}
          distortion={0.8}
          swirl={0}
          speed={1}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            opacity: 0.5,
          }}
          scale={1}

        />
      </div> */}

      {/* Hero */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight">
          Augment your mind.
        </h1>

        <p className="mt-4 text-lg md:text-xl text-foreground/60 leading-relaxed max-w-xl mx-auto">
          We're building the next generation of thinking tools.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center items-center">
          <Button asChild>
            <a href="/tools">Join our Early Testing -></a>
          </Button>
          <Button variant="outline" asChild>
            <a href="/about">Learn more</a>
          </Button>
        </div>

        {/* <p className="mt-6 text-xs text-foreground/50">
          Cognition × Software
        </p> */}
      </div>
    </div>
  )
}