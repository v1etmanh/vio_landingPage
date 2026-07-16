import React, { useState, useCallback } from 'react'
import Hero from './components/Home/Hero'
import StudioInMotion from './components/Home/StudioInMotion'
import Knowledge from './components/Home/Knowledge'
import Pricing from './components/Home/Pricing'
import Aboutus from './components/Home/AboutUs'
import VioStandard from './components/Home/VioStandard'
import TrustBar from './components/Home/TrustBar'
import Positioning from './components/Home/Positioning'
import Services from './components/Home/Services'
import Testimonial from './components/Home/Testimonials'
import Join from './components/Home/Joinus'
import Map from './components/Home/Map'
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import FloatingActions from './components/Layout/FloatingActions'
import IntroScreen from './components/ui/IntroScreen'

function App() {
  const [introVisible, setIntroVisible] = useState(true)

  const handleIntroComplete = useCallback(() => {
    setIntroVisible(false)
  }, [])

  return (
    <>
      {introVisible && <IntroScreen onComplete={handleIntroComplete} />}
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
