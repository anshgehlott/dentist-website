'use client'

import { useState } from 'react'
import { X } from 'lucide-react'

const galleryItems = [
  { id: 1, title: 'Smile Transformation', category: 'Cosmetic' },
  { id: 2, title: 'Implant Success', category: 'Implants' },
  { id: 3, title: 'Whitening Results', category: 'Cosmetic' },
  { id: 4, title: 'Restoration Work', category: 'General' },
  { id: 5, title: 'Alignment Achieved', category: 'Orthodontics' },
  { id: 6, title: 'Full Makeover', category: 'Cosmetic' }
]

export function Gallery() {
  const [selectedId, setSelectedId] = useState<number | null>(null)

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Work
          </h2>
          <p className="text-lg text-foreground/70">
            Before and after transformations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedId(item.id)}
              className="group relative overflow-hidden rounded-xl cursor-pointer h-64 bg-gradient-to-br from-primary/20 to-accent/20 border border-border hover:border-primary/50 transition-all"
            >
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                <div className="text-center space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white font-semibold text-lg">{item.title}</p>
                  <span className="inline-block px-3 py-1 bg-primary/80 text-primary-foreground rounded-full text-sm font-medium">
                    {item.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedId && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedId(null)}
          >
            <div
              className="relative bg-card rounded-xl max-w-2xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedId(null)}
                className="absolute top-4 right-4 p-2 bg-background rounded-lg hover:bg-muted transition-colors"
              >
                <X className="text-foreground" size={24} />
              </button>

              <div className="aspect-square rounded-t-xl bg-gradient-to-br from-primary/30 to-accent/20 flex items-center justify-center">
                <div className="text-6xl">✨</div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {galleryItems.find(item => item.id === selectedId)?.title}
                </h3>
                <p className="text-foreground/70">
                  This is a showcase of our exceptional dental work. Our team takes pride in delivering beautiful, natural-looking results that enhance both aesthetics and function.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
