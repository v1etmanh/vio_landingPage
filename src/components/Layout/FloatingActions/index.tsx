import { useEffect, useState } from 'react'
import { useLanguage } from '@/app/context/useLanguage'
import { trackEvent } from '@/app/utils/analytics'

const FloatingActions = () => {
  const { language } = useLanguage()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(true), 1200)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <div
      className={`fixed bottom-4 left-4 right-4 z-[999] transition-all duration-500 lg:hidden ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-8 opacity-0'
      }`}
    >
      <a
        href='#TrialForm'
        onClick={() => trackEvent('sticky_trial_clicked', { language })}
        className='flex min-h-14 items-center justify-center bg-[var(--color-primary)] px-6 font-heading text-sm font-bold uppercase tracking-[0.12em] text-white shadow-[0_10px_30px_rgba(0,0,0,0.3)]'
      >
        {language === 'vi' ? 'Tập thử miễn phí' : 'Book a free trial'}
      </a>
    </div>
  )
}

export default FloatingActions
