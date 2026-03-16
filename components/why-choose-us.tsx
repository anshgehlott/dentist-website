'use client'

import { Card } from '@/components/ui/card'

const reasons = [
  { title: 'Expert Team', description: 'Highly trained and certified professionals' },
  { title: 'Modern Technology', description: 'Latest dental equipment and techniques' },
  { title: 'Patient Comfort', description: 'Relaxing environment with sedation options' },
  { title: 'Affordable Care', description: 'Flexible payment plans available' },
]

export function WhyChooseUs() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">Why Choose Us?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason) => (
            <Card key={reason.title} className="p-6">
              <h3 className="text-2xl font-bold mb-2">{reason.title}</h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
