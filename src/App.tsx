import React from 'react'
import Hero from './components/Home/Hero'
import TrustBar from './components/Home/TrustBar'
import Aboutus from './components/Home/AboutUs'
import Positioning from './components/Home/Positioning'
import Services from './components/Home/Services'
import Pricing from './components/Home/Pricing'
import Testimonial from './components/Home/Testimonials'
import Knowledge from './components/Home/Knowledge'
import Join from './components/Home/Joinus'
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
        <Positioning />
        <Services />
        <Pricing />
        <Testimonial />
        <Knowledge />
        <Join />
      </main>
      <Footer />
    </>
  )
}

export default App
