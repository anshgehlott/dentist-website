'use client'

import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

export function Hero() {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-secondary/10">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Welcome to Pure Smile Dental
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Your Smile <span className="text-primary">Matters</span>
            </h1>
            <p className="text-lg text-foreground/70 max-w-lg leading-relaxed">
              Experience world-class dental care with our team of experienced professionals using state-of-the-art technology. Your comfort and health are our priorities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#appointment"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
              >
                Book Appointment
                <ArrowRight size={20} />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors font-semibold"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="w-full aspect-square rounded-2xl overflow-hidden border border-border shadow-lg">
              <Image
                src="/dental-hero.jpg"
                alt="Happy patient at dental clinic"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
