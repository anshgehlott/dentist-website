'use client'

import Image from 'next/image'

const transformations = [
  {
    id: 1,
    title: 'Whitening & Alignment',
    description: 'Professional teeth whitening combined with alignment correction',
    before: '/transformation-before-1.jpg',
    after: '/transformation-after-1.jpg',
    treatment: 'Whitening + Orthodontics',
  },
  {
    id: 2,
    title: 'Complete Restoration',
    description: 'Damaged teeth restored to full strength and beauty',
    before: '/transformation-before-2.jpg',
    after: '/transformation-after-2.jpg',
    treatment: 'Dental Implants + Restoration',
  },
  {
    id: 3,
    title: 'Cosmetic Veneers',
    description: 'Chipped and discolored teeth transformed with premium veneers',
    before: '/transformation-before-3.jpg',
    after: '/transformation-after-3.jpg',
    treatment: 'Porcelain Veneers',
  },
]

export function Transformations() {
  return (
    <section id="transformations" className="py-20 bg-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Smile Transformations
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            See the incredible results our patients have achieved with our expert dental care
          </p>
        </div>

        {/* Transformation Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {transformations.map((transformation, index) => (
            <div
              key={transformation.id}
              className="group text-left rounded-xl border-2 border-border bg-card hover:border-primary/50 overflow-hidden transition-all"
            >
              {/* Thumbnail Grid */}
              <div className="relative h-32 overflow-hidden bg-foreground/5">
                <div className="absolute inset-0 grid grid-cols-2">
                  <div className="relative border-r border-border">
                    <Image
                      src={transformation.before}
                      alt={`${transformation.title} before`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="relative">
                    <Image
                      src={transformation.after}
                      alt={`${transformation.title} after`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </div>
              </div>

              {/* Card Details */}
              <div className="p-4">
                <h4 className="font-bold text-foreground">{transformation.title}</h4>
                <p className="text-sm text-foreground/60 mt-1 line-clamp-2">
                  {transformation.description}
                </p>
                <div className="mt-3 text-xs font-semibold text-primary">
                  {transformation.treatment}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl border border-primary/20 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-2">
            Ready for Your Smile Transformation?
          </h3>
          <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
            Join hundreds of satisfied patients who have transformed their smiles. Schedule your consultation today.
          </p>
          <a
            href="#appointment"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
          >
            Book Your Consultation
          </a>
        </div>
      </div>
    </section>
  )
}
