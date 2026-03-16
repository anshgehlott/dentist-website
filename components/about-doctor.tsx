'use client'

import { CheckCircle2 } from 'lucide-react'
import Image from 'next/image'

export function AboutDoctor() {
  return (
    <section id="about" className="py-20 bg-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <div className="w-full aspect-square rounded-2xl overflow-hidden border border-border shadow-lg">
              <Image
                src="/doctor-james.jpg"
                alt="Dr. James Mitchell - Professional Dentist"
                width={400}
                height={400}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Meet Dr. James Mitchell
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              With over 20 years of experience in restorative and cosmetic dentistry, Dr. Mitchell has transformed thousands of smiles. He holds advanced certifications in orthodontics and implant dentistry.
            </p>

            <div className="space-y-3">
              <div className="flex gap-3 items-start">
                <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-foreground">DDS - Stanford University</h3>
                  <p className="text-foreground/60">Dental School Graduate</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-foreground">Board Certified</h3>
                  <p className="text-foreground/60">American Dental Association</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-foreground">Implant Specialist</h3>
                  <p className="text-foreground/60">Advanced Implant Techniques</p>
                </div>
              </div>
            </div>

            <p className="text-foreground/70 leading-relaxed pt-4">
              Dr. Mitchell is passionate about delivering exceptional dental care with a focus on patient comfort and satisfaction. He stays current with the latest advancements in dental technology and techniques.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
