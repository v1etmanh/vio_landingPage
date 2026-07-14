import React from 'react'
import Hero from './components/Home/Hero'
import TrustBar from './components/Home/TrustBar'
import Aboutus from './components/Home/AboutUs'
import VioStandard from './components/Home/VioStandard'
import Positioning from './components/Home/Positioning'
import Services from './components/Home/Services'
import Pricing from './components/Home/Pricing'
import Testimonial from './components/Home/Testimonials'
import StudioInMotion from './components/Home/StudioInMotion'
import Knowledge from './components/Home/Knowledge'
import Join from './components/Home/Joinus'
import Map from './components/Home/Map'
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Aboutus />
        <VioStandard />
        <Positioning />
        <Services />
        <Pricing />
        <Testimonial />
        <StudioInMotion />
        <Knowledge />
        <Join />
        <Map />
      </main>
      <Footer />
    </>
  )
}

export default App
