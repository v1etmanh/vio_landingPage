import { useEffect, useState } from 'react'

interface FloatingActionsProps {
  language: 'vi' | 'en'
}

const FloatingActions = ({ language }: FloatingActionsProps) => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const mobileViewport = window.matchMedia('(max-width: 767px)')
    const updateVisibility = () => {
      setVisible(mobileViewport.matches && window.scrollY > 240)
    }

    updateVisibility()
    window.addEventListener('scroll', updateVisibility, { passive: true })
    mobileViewport.addEventListener('change', updateVisibility)

    return () => {
      window.removeEventListener('scroll', updateVisibility)
      mobileViewport.removeEventListener('change', updateVisibility)
    }
  }, [])

  return (
    <button
      type='button'
      aria-label={language === 'vi' ? 'Đăng ký tập thử' : 'Book a trial'}
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      onClick={() => document.getElementById('Registration')?.scrollIntoView({ behavior: 'smooth' })}
      className={`fixed right-2 top-[85%] z-[999] flex h-[60px] w-[60px] items-center justify-center rounded-full border border-[#C5A059] bg-[#1A1A1A] p-2 shadow-[0_8px_24px_rgba(0,0,0,0.3)] transition-all duration-300 md:hidden ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-6 opacity-0'
      }`}
    >
      <img src='/webp/logo.webp' alt='' aria-hidden='true' className='h-full w-full object-contain' />
    </button>
  )
}

export default FloatingActions
