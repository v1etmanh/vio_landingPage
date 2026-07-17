import { useEffect, useMemo, useRef, useState } from 'react'
import { Icon } from '@iconify/react'
import { BUSINESS } from '@/app/config/business'
import { useLanguage } from '@/app/context/useLanguage'
import { useLocale } from '@/app/context/useLocale'
import { trackEvent } from '@/app/utils/analytics'

type Goal = 'muscle' | 'weight-loss' | 'beginner' | 'personal-training' | 'traveller'

const goalValues: Goal[] = ['muscle', 'weight-loss', 'beginner', 'personal-training', 'traveller']

const TrialForm = () => {
  const { language, isVietnamese } = useLanguage()
  const locale = useLocale()
  const labels = locale.trial
  const [name, setName] = useState('')
  const [goal, setGoal] = useState<Goal | ''>('')
  const [preferredTime, setPreferredTime] = useState('')
  const [selectedPlan, setSelectedPlan] = useState('')
  const [message, setMessage] = useState('')
  const [hasStarted, setHasStarted] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const modalRef = useRef<HTMLDivElement>(null)
  const previouslyFocusedRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const saved = sessionStorage.getItem('vio-trial-draft')
    if (!saved) return
    try {
      const draft = JSON.parse(saved) as { name?: string; goal?: Goal; preferredTime?: string }
      setName(draft.name ?? '')
      setGoal(draft.goal ?? '')
      setPreferredTime(draft.preferredTime ?? '')
    } catch {
      sessionStorage.removeItem('vio-trial-draft')
    }
  }, [])

  useEffect(() => {
    setSelectedPlan(sessionStorage.getItem('vio-selected-plan') ?? '')
    const handlePlanSelected = (event: Event) => {
      setSelectedPlan((event as CustomEvent<string>).detail)
    }
    window.addEventListener('vio-plan-selected', handlePlanSelected)
    return () => window.removeEventListener('vio-plan-selected', handlePlanSelected)
  }, [])

  useEffect(() => {
    const openModal = () => {
      previouslyFocusedRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null
      setIsModalOpen(true)
    }
    window.addEventListener('vio-open-trial-modal', openModal)
    return () => window.removeEventListener('vio-open-trial-modal', openModal)
  }, [])

  useEffect(() => {
    if (!isModalOpen) return
    const previousOverflow = document.body.style.overflow
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsModalOpen(false)
        return
      }

      if (event.key !== 'Tab' || !modalRef.current) return
      const focusable = Array.from(
        modalRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href]'
        )
      )
      if (!focusable.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', closeOnEscape)
    closeButtonRef.current?.focus()
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', closeOnEscape)
      previouslyFocusedRef.current?.focus()
    }
  }, [isModalOpen])

  useEffect(() => {
    sessionStorage.setItem('vio-trial-draft', JSON.stringify({ name, goal, preferredTime }))
  }, [name, goal, preferredTime])

  const composedMessage = useMemo(() => {
    const source = isVietnamese ? 'WEB-VI-A' : 'WEB-EN-A'
    const goalLabel = goal === 'muscle' ? locale.goals.muscle : goal === 'weight-loss' ? locale.goals.weightLoss : goal === 'beginner' ? locale.goals.beginner : goal === 'personal-training' ? locale.goals.personalTraining : goal === 'traveller' ? locale.goals.traveller : goal
    const planLine = selectedPlan
      ? isVietnamese ? `\nGói quan tâm: ${selectedPlan}.` : `\nInterested plan: ${selectedPlan}.`
      : ''
    return isVietnamese
      ? `[${source}] Xin chào VIO Fitness! Em là ${name}.\nEm muốn đăng ký TẬP THỬ MIỄN PHÍ.\nMục tiêu: ${goalLabel}. Giờ muốn đến: ${preferredTime}.${planLine}`
      : `[${source}] Hello VIO Fitness! My name is ${name}.\nI would like to book a FREE TRIAL SESSION.\nGoal: ${goalLabel}. Preferred time: ${preferredTime}.${planLine}`
  }, [goal, isVietnamese, locale, name, preferredTime, selectedPlan])

  const validate = () => {
    if (!name.trim() || !goal || !preferredTime.trim()) {
      setMessage(labels.required)
      return false
    }
    setMessage('')
    return true
  }

  const copyAndOpen = (url: string, eventName: string) => {
    if (!validate()) return
    trackEvent(eventName, { language, source: isVietnamese ? 'WEB-VI-A' : 'WEB-EN-A' })
    const copyPromise = navigator.clipboard?.writeText(composedMessage)
    window.open(url, '_blank', 'noopener,noreferrer')
    if (!copyPromise) {
      setMessage(labels.copyFailed)
      return
    }
    copyPromise.then(() => setMessage(labels.copied)).catch(() => setMessage(labels.copyFailed))
  }

  const openWhatsApp = () => {
    if (!validate()) return
    trackEvent('whatsapp_outbound_clicked', { language, source: 'WEB-EN-A' })
    window.open(`${BUSINESS.socials.whatsapp}?text=${encodeURIComponent(composedMessage)}`, '_blank', 'noopener,noreferrer')
  }

  const renderForm = (className: string) => (
    <form
      className={className}
      onSubmit={(event) => event.preventDefault()}
      onFocus={() => {
        if (hasStarted) return
        setHasStarted(true)
        trackEvent('trial_form_started', { language })
      }}
      noValidate
    >
      <div className='grid gap-5'>
        <label className='grid gap-2 text-sm font-semibold'>
          {labels.name}
          <input value={name} onChange={(event) => setName(event.target.value)} className='min-h-12 border border-white/15 bg-black/20 px-4 text-white outline-none transition focus:border-[var(--color-primary)]' autoComplete='name' />
        </label>
        <label className='grid gap-2 text-sm font-semibold'>
          {labels.goal}
          <select value={goal} onChange={(event) => setGoal(event.target.value as Goal)} className='min-h-12 border border-white/15 bg-[#211d1a] px-4 text-white outline-none transition focus:border-[var(--color-primary)]'>
            <option value=''>{labels.choose}</option>
            {goalValues.map((value) => {
              const label = value === 'muscle' ? locale.goals.muscle : value === 'weight-loss' ? locale.goals.weightLoss : value === 'beginner' ? locale.goals.beginner : value === 'personal-training' ? locale.goals.personalTraining : locale.goals.traveller
              return <option key={value} value={value}>{label}</option>
            })}
          </select>
        </label>
        <label className='grid gap-2 text-sm font-semibold'>
          {labels.time}
          <input value={preferredTime} onChange={(event) => setPreferredTime(event.target.value)} placeholder={labels.timePlaceholder} className='min-h-12 border border-white/15 bg-black/20 px-4 text-white outline-none transition placeholder:text-white/35 focus:border-[var(--color-primary)]' />
        </label>
      </div>
      {message && <p role='status' className='mt-4 text-sm text-[var(--color-primary)]'>{message}</p>}
      <div className='mt-6 grid gap-3 sm:grid-cols-2'>
        {isVietnamese ? (
          <button type='button' onClick={() => copyAndOpen(BUSINESS.socials.zalo, 'zalo_outbound_clicked')} className='min-h-12 bg-[#0068ff] px-5 font-bold text-white transition hover:brightness-110'>{labels.zalo}</button>
        ) : (
          <button type='button' onClick={openWhatsApp} className='min-h-12 bg-[#25d366] px-5 font-bold text-[#062c14] transition hover:brightness-110'>{labels.zalo}</button>
        )}
        <button type='button' onClick={() => copyAndOpen(BUSINESS.socials.instagramDm, 'instagram_outbound_clicked')} className='min-h-12 border border-white/30 px-5 font-bold transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]'>{labels.instagram}</button>
      </div>
      <a href={`tel:${BUSINESS.phone}`} onClick={() => trackEvent('phone_clicked', { language })} className='mt-5 flex items-center justify-center gap-2 text-sm text-white/65 hover:text-white'><Icon icon='tabler:phone' aria-hidden='true' /> {labels.call}: {BUSINESS.phoneDisplay}</a>
    </form>
  )

  return (
    <>
      <section id='TrialForm' className='bg-[var(--color-deep-slate)] py-24 text-white'>
      <div className='container mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-12'>
        <div>
          <p className='mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-primary)]'>{labels.eyebrow}</p>
          <h2 className='font-heading text-4xl font-bold uppercase leading-tight sm:text-5xl'>{labels.title}</h2>
          <p className='mt-6 max-w-md text-lg leading-relaxed text-white/65'>{labels.body}</p>
          <p className='mt-8 inline-flex items-center gap-2 border border-[var(--color-primary)]/40 px-4 py-3 text-sm font-semibold text-[var(--color-primary)]'>
            <Icon icon='tabler:gift' aria-hidden='true' /> {BUSINESS.offer[language]}
          </p>
        </div>
        {renderForm('border border-white/10 bg-white/[0.04] p-6 sm:p-8')}
      </div>
      </section>
      {isModalOpen && (
      <div ref={modalRef} className='fixed inset-0 z-[1000] flex items-end justify-center bg-black/70 p-4 sm:items-center' role='dialog' aria-modal='true' aria-labelledby='trial-modal-title'>
        <div className='max-h-[90vh] w-full max-w-xl overflow-y-auto bg-[var(--color-deep-slate)] p-5 text-white shadow-2xl sm:p-8'>
          <div className='mb-5 flex items-start justify-between gap-4'>
            <h2 id='trial-modal-title' className='font-heading text-2xl font-bold uppercase'>{labels.title}</h2>
            <button ref={closeButtonRef} type='button' onClick={() => setIsModalOpen(false)} className='border border-white/20 px-3 py-2 text-sm' aria-label={locale.header.close}>×</button>
          </div>
          {renderForm('border border-white/10 bg-white/[0.04] p-5')}
        </div>
      </div>
      )}
    </>
  )
}

export default TrialForm
