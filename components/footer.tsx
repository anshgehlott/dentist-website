'use client'

import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Pure Smile</h3>
            <p className="text-background/80 text-sm">
              Your trusted partner for exceptional dental care and beautiful smiles.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-background/80 hover:text-background transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-background/80 hover:text-background transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-background/80 hover:text-background transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-background/80 hover:text-background transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  General Dentistry
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  Cosmetic Dentistry
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  Dental Implants
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  Orthodontics
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="font-semibold">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-background/80">
              © 2024 Pure Smile Dental. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-background/80 hover:text-background transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-background/80 hover:text-background transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
          
          {/* Developer Credit */}
          <div className="mt-6 text-center text-xs text-background/60">
            Designed & Developed by <span className="font-semibold text-background/80">Uma Webdevelopers</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
