import React, { useState, useCallback } from 'react'
import Hero from './components/Home/Hero'
import TrustBar from './components/Home/TrustBar'
import Services from './components/Home/Services'
import Pricing from './components/Home/Pricing'
import Testimonial from './components/Home/Testimonials'
import Join from './components/Home/Joinus'
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
        <Testimonial />
        <Join />
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}

export default App
