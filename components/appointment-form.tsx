'use client'

import { useState } from 'react'
import { Calendar, Clock, User, Phone, Mail } from 'lucide-react'

export function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: 'General Dentistry'
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', date: '', time: '', service: 'General Dentistry' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section id="appointment" className="py-20 bg-secondary/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Schedule Your Appointment
          </h2>
          <p className="text-lg text-foreground/70">
            Book your visit with our dental specialists
          </p>
        </div>

        <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="text-5xl">✓</div>
              <h3 className="text-2xl font-bold text-foreground">
                Thank You!
              </h3>
              <p className="text-foreground/70">
                We'll contact you soon to confirm your appointment.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-foreground">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder:text-muted-foreground"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-foreground">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder:text-muted-foreground"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder:text-muted-foreground"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                {/* Service */}
                <div className="space-y-2">
                  <label htmlFor="service" className="block text-sm font-medium text-foreground">
                    Service
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
                  >
                    <option>General Dentistry</option>
                    <option>Cosmetic Dentistry</option>
                    <option>Dental Implants</option>
                    <option>Orthodontics</option>
                  </select>
                </div>

                {/* Date */}
                <div className="space-y-2">
                  <label htmlFor="date" className="block text-sm font-medium text-foreground">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
                    />
                  </div>
                </div>

                {/* Time */}
                <div className="space-y-2">
                  <label htmlFor="time" className="block text-sm font-medium text-foreground">
                    Preferred Time
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                    <input
                      type="time"
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold text-lg"
              >
                Book Appointment
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
