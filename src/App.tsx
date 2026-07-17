import React from 'react'
import Hero from './components/Home/Hero'
import Pricing from './components/Home/Pricing'
import TrustBar from './components/Home/TrustBar'
import Positioning from './components/Home/Positioning'
import Services from './components/Home/Services'
import Testimonial from './components/Home/Testimonials'
import Map from './components/Home/Map'
import Trainers from './components/Home/Trainers'
import MemberStories from './components/Home/MemberStories'
import TrialForm from './components/Home/TrialForm'
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import FloatingActions from './components/Layout/FloatingActions'
import { LanguageProvider } from './context/LanguageContext'

function App() {
  return (
    <LanguageProvider>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Testimonial />
        <Positioning />
        <Services />
        <Trainers />
        <MemberStories />
        <Pricing />
        <TrialForm />
        <Map />
      </main>
      <Footer />
      <FloatingActions />
    </LanguageProvider>
  )
}

export default App
