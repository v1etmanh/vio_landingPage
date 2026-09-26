import React, { useState, useCallback, useEffect } from 'react'
import Hero from './components/Home/Hero'
import StudioInMotion from './components/Home/StudioInMotion'
import FAQ from './components/Home/FAQ'
import Pricing from './components/Home/Pricing'
import VioStandard from './components/Home/VioStandard'
import TrustBar from './components/Home/TrustBar'
import Positioning from './components/Home/Positioning'
import Services from './components/Home/Services'
import Trainers from './components/Home/Trainers'
import Testimonial from './components/Home/Testimonials'
import RegistrationForm from './components/Home/RegistrationForm'
import Map from './components/Home/Map'
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import IntroScreen from './components/ui/IntroScreen'

export type SiteLanguage = 'vi' | 'en'

function App() {
  const [language, setLanguage] = useState<SiteLanguage>('vi')
  const [introVisible, setIntroVisible] = useState(() => {
    return !sessionStorage.getItem('introPlayed')
  })

  const handleIntroComplete = useCallback(() => {
    sessionStorage.setItem('introPlayed', 'true')
    setIntroVisible(false)
  }, [])

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  return (
    <>
      {introVisible && <IntroScreen onComplete={handleIntroComplete} />}
      <Header language={language} onLanguageChange={setLanguage} />
      <main>
        <Hero language={language} />
        <VioStandard language={language} />
        <TrustBar language={language} />
        <Services language={language} />
        <Trainers language={language} />
        <Pricing language={language} />
        <StudioInMotion language={language} />
        <FAQ language={language} />
        <Positioning />
        <Testimonial language={language} />
        <RegistrationForm language={language} />
        <Map language={language} />
      </main>
      <Footer language={language} />
    </>
  )
}

export default App
