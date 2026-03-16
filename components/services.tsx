'use client'

import { Smile, Zap, Crown, Shield } from 'lucide-react'

const services = [
  {
    icon: Smile,
    title: 'General Dentistry',
    description: 'Preventive care, cleanings, and fillings to maintain your oral health.'
  },
  {
    icon: Crown,
    title: 'Cosmetic Dentistry',
    description: 'Teeth whitening, veneers, and bonding for your perfect smile.'
  },
  {
    icon: Zap,
    title: 'Dental Implants',
    description: 'Advanced implant solutions for missing teeth restoration.'
  },
  {
    icon: Shield,
    title: 'Orthodontics',
    description: 'Professional teeth alignment and braces for all ages.'
  }
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Comprehensive dental solutions tailored to meet your unique needs and goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group p-6 bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors mb-4">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
