import React from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyChooseCCTV from './components/WhyChooseCCTV'
import HomeCCTV from './components/HomeCCTV'
import BusinessCCTV from './components/BusinessCCTV'
import SystemFeatures from './components/SystemFeatures'
import TestimonialsCarousel from './components/TestimonialsCarousel'
import PartnerLogos from './components/PartnerLogos'
import Benefits from './components/Benefits'
import About from './components/About'
import FAQ from './components/FAQ'
import Contact from './components/Contact'

const page = () => {
  return (
    <div className="bg-white">
      <Hero />
      <Services />
      <WhyChooseCCTV />
      <HomeCCTV />
      <BusinessCCTV />
      <SystemFeatures />
      <TestimonialsCarousel />
      <PartnerLogos />
      <Benefits />
      <About />
      <FAQ />
      <Contact />
    </div>
  )
}

export default page
