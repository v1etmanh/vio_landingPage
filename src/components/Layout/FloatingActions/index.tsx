import { useEffect, useState } from 'react'
import { useLocale } from '@/app/context/useLocale'
import { useLanguage } from '@/app/context/useLanguage'
import { trackEvent } from '@/app/utils/analytics'

const FloatingActions = () => {
  const locale = useLocale()
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
      <button
        type='button'
        onClick={() => {
          trackEvent('sticky_trial_clicked', { language })
          window.dispatchEvent(new Event('vio-open-trial-modal'))
        }}
        className='flex min-h-14 w-full items-center justify-center bg-[var(--color-primary)] px-6 font-heading text-sm font-bold uppercase tracking-[0.12em] text-white shadow-[0_10px_30px_rgba(0,0,0,0.3)]'
      >
        {locale.hero.primary}
      </button>
    </div>
  )
}

export default FloatingActions
