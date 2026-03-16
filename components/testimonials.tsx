'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Patient',
    content: 'Dr. Mitchell is incredibly professional and made me feel comfortable during my entire visit. Highly recommend!',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'Patient',
    content: 'The best dental experience I\'ve ever had. The staff is friendly and the clinic is modern and clean.',
    rating: 5
  },
  {
    name: 'Emily Rodriguez',
    role: 'Patient',
    content: 'My teeth have never looked better! The cosmetic dentistry work was exceptional.',
    rating: 5
  },
  {
    name: 'David Thompson',
    role: 'Patient',
    content: 'Outstanding service and care. I felt completely at ease throughout my treatment.',
    rating: 5
  }
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[current]

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our Patients Say
          </h2>
          <p className="text-lg text-foreground/70">
            Real stories from real patients
          </p>
        </div>

        <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
          {/* Stars */}
          <div className="flex gap-1 mb-6">
            {[...Array(currentTestimonial.rating)].map((_, i) => (
              <Star key={i} className="fill-accent text-accent" size={20} />
            ))}
          </div>

          {/* Testimonial Text */}
          <blockquote className="text-xl md:text-2xl font-semibold text-foreground mb-8 leading-relaxed">
            {`"${currentTestimonial.content}"`}
          </blockquote>

          {/* Author */}
          <div className="flex items-end justify-between">
            <div>
              <p className="font-semibold text-foreground">
                {currentTestimonial.name}
              </p>
              <p className="text-foreground/60">
                {currentTestimonial.role}
              </p>
            </div>

            {/* Navigation */}
            <div className="flex gap-3">
              <button
                onClick={prev}
                className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={next}
                className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* Dots */}
          <div className="flex gap-2 mt-8 justify-center">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === current ? 'bg-primary' : 'bg-border'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
