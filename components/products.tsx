'use client'

import { ShoppingCart, Star } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const products = [
  {
    id: 1,
    name: 'PureSmile Pro Toothpaste',
    category: 'Toothpaste',
    price: '$12.99',
    rating: 4.8,
    reviews: 324,
    description: 'Whitening toothpaste with natural mint flavor. Removes stains and strengthens enamel.',
    features: ['Fluoride enriched', 'Whitening formula', 'Fresh mint', 'Natural ingredients'],
    link: '#buy-toothpaste',
    image: '/toothpaste-whitening.jpg',
  },
  {
    id: 2,
    name: 'PureSmile Sensitive Care',
    category: 'Toothpaste',
    price: '$14.99',
    rating: 4.9,
    reviews: 412,
    description: 'Specially formulated for sensitive teeth. Provides relief in 3 days.',
    features: ['Sensitivity relief', 'Gentle formula', 'Long-lasting', 'Clinically proven'],
    link: '#buy-sensitive',
    image: '/toothpaste-sensitive.jpg',
  },
  {
    id: 3,
    name: 'PureSmile Soft Bristle Brush',
    category: 'Toothbrush',
    price: '$8.99',
    rating: 4.7,
    reviews: 256,
    description: 'Ergonomic handle with ultra-soft bristles. Perfect for daily use and gum care.',
    features: ['Soft bristles', 'Ergonomic design', 'Gum-friendly', 'Easy to grip'],
    link: '#buy-brush-soft',
    image: '/toothbrush-soft.jpg',
  },
  {
    id: 4,
    name: 'PureSmile Electric Toothbrush',
    category: 'Toothbrush',
    price: '$49.99',
    rating: 4.9,
    reviews: 589,
    description: '5000 strokes per minute vibration for superior cleaning. Water-resistant design.',
    features: ['Electric powered', 'Smart timer', 'Water resistant', '2-week battery'],
    link: '#buy-electric',
    image: '/toothbrush-electric.jpg',
  },
]

export function Products() {
  return (
    <section id="products" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Our Recommended Products
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            High-quality dental care products recommended by Dr. Mitchell for optimal oral health
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Product Image */}
              <div className="relative h-64 bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Product Details */}
              <div className="p-6 space-y-4">
                {/* Category and Price */}
                <div className="flex items-start justify-between">
                  <span className="text-sm font-semibold text-primary">{product.category}</span>
                  <p className="text-2xl font-bold text-accent">{product.price}</p>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground">{product.name}</h3>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={`${
                            i < Math.floor(product.rating)
                              ? 'fill-accent text-accent'
                              : 'text-foreground/20'
                          }`}
                        />
                      ))}
                  </div>
                  <span className="text-sm font-semibold text-foreground">{product.rating}</span>
                  <span className="text-sm text-foreground/60">({product.reviews} reviews)</span>
                </div>

                {/* Description */}
                <p className="text-foreground/70 text-sm">{product.description}</p>

                {/* Features */}
                <ul className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-foreground/70">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  asChild
                  className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <a href={product.link} className="flex items-center justify-center gap-2">
                    <ShoppingCart size={18} />
                    Buy Now
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bulk Order Info */}
        <div className="mt-16 p-8 bg-secondary/5 rounded-xl border border-border text-center">
          <h3 className="text-2xl font-bold text-foreground mb-2">Bulk Orders & Wholesale</h3>
          <p className="text-foreground/70 mb-4 max-w-2xl mx-auto">
            Looking to stock our products in your clinic or store? Contact us for wholesale pricing and special bulk discounts.
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Contact for Wholesale
          </Button>
        </div>
      </div>
    </section>
  )
}
