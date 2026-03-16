import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { AboutDoctor } from '@/components/about-doctor'
import { Services } from '@/components/services'
import { WhyChooseUs } from '@/components/why-choose-us'
import { Testimonials } from '@/components/testimonials'
import { Gallery } from '@/components/gallery'
import { Transformations } from '@/components/transformations'
import { Products } from '@/components/products'
import { AppointmentForm } from '@/components/appointment-form'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <AboutDoctor />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <Gallery />
      <Transformations />
      <Products />
      <AppointmentForm />
      <Contact />
      <Footer />
    </main>
  )
}
