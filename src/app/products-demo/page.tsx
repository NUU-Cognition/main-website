'use client'

import { ProductShowcase } from '@/components/ProductShowcase'
import { FutureProductCard } from '@/components/FutureProductCard'

export default function ProductsDemo() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="mb-16">
          <h1 className="text-4xl font-semibold text-foreground mb-4">
            Product Components Demo
          </h1>
          <p className="text-foreground/70">
            Examples of the ProductShowcase and FutureProductCard components
          </p>
        </div>

        <section className="mb-20">
          <h2 className="text-2xl font-semibold text-foreground mb-8">
            Existing Product Showcase
          </h2>
          
          <ProductShowcase
            title="NUU Surf"
            subtitle="Currently Available"
            description="Navigate through information streams with unprecedented clarity. Surf transforms how you discover, process, and retain knowledge in the digital age."
            features={[
              "Intelligent content aggregation from multiple sources",
              "Context-aware filtering and prioritization",
              "Seamless integration with your existing workflow",
              "Privacy-first design with local processing"
            ]}
            link="/tools"
          />
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-8">
            Future Products
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FutureProductCard
              title="NUU Echo"
              subtitle="Voice Interface"
              description="Natural language interaction with your digital environment. Echo understands context and intent, making voice commands actually useful."
              status="in-development"
            />
            
            <FutureProductCard
              title="NUU Focus"
              subtitle="Attention Management"
              description="Intelligent workspace that adapts to your cognitive state. Focus creates the optimal environment for deep work and creative thinking."
              status="coming-soon"
            />
            
            <FutureProductCard
              title="NUU Sync"
              subtitle="Knowledge Graph"
              description="Connect ideas across time and space. Sync builds a personal knowledge graph that evolves with your understanding."
              status="early-access"
              link="/early-access"
            />
          </div>
        </section>
      </div>
    </div>
  )
}