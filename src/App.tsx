import React from 'react'
import Hero from './components/Home/Hero'
import StudioInMotion from './components/Home/StudioInMotion'
import Knowledge from './components/Home/Knowledge'
import Pricing from './components/Home/Pricing'
import TrustBar from './components/Home/TrustBar'
import Positioning from './components/Home/Positioning'
import Services from './components/Home/Services'
import Testimonial from './components/Home/Testimonials'
import Join from './components/Home/Joinus'
import Map from './components/Home/Map'
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import FloatingActions from './components/Layout/FloatingActions'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Pricing />
        <StudioInMotion />
        <Knowledge />
        <Positioning />
        <Testimonial />
        <Join />
        <Map />
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}

export default App
