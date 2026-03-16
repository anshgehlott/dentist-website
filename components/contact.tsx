'use client'

import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-foreground/70">
            We're here to answer any questions you might have
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Location */}
          <div className="p-6 bg-card border border-border rounded-xl hover:border-primary/30 transition-colors">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
              <MapPin className="text-primary" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Location</h3>
            <p className="text-foreground/70 text-sm">
              123 Smile Street<br />
              Dental Plaza, Suite 200<br />
              New York, NY 10001
            </p>
          </div>

          {/* Phone */}
          <div className="p-6 bg-card border border-border rounded-xl hover:border-primary/30 transition-colors">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
              <Phone className="text-primary" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Phone</h3>
            <p className="text-foreground/70 text-sm">
              <a href="tel:+12125551234" className="hover:text-primary transition-colors">
                (212) 555-1234
              </a>
            </p>
          </div>

          {/* Email */}
          <div className="p-6 bg-card border border-border rounded-xl hover:border-primary/30 transition-colors">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
              <Mail className="text-primary" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Email</h3>
            <p className="text-foreground/70 text-sm">
              <a href="mailto:hello@puresmile.com" className="hover:text-primary transition-colors">
                hello@puresmile.com
              </a>
            </p>
          </div>

          {/* Hours */}
          <div className="p-6 bg-card border border-border rounded-xl hover:border-primary/30 transition-colors">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
              <Clock className="text-primary" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Hours</h3>
            <p className="text-foreground/70 text-sm">
              Mon-Fri: 8AM - 6PM<br />
              Sat: 9AM - 3PM<br />
              Sun: Closed
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
