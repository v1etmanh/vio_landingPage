import { useEffect, useMemo, useState } from 'react'
import { Icon } from '@iconify/react'
import { BUSINESS } from '@/app/config/business'
import { useLanguage } from '@/app/context/useLanguage'
import { trackEvent } from '@/app/utils/analytics'

type Goal = 'muscle' | 'weight-loss' | 'beginner' | 'personal-training' | 'traveller'

const goals: { value: Goal; vi: string; en: string }[] = [
  { value: 'muscle', vi: 'Tăng cơ', en: 'Build muscle' },
  { value: 'weight-loss', vi: 'Giảm cân', en: 'Lose weight' },
  { value: 'beginner', vi: 'Mới bắt đầu', en: 'Getting started' },
  { value: 'personal-training', vi: 'PT 1-1', en: '1-on-1 personal training' },
  { value: 'traveller', vi: 'Khách du lịch', en: 'Visitor / traveller' },
]

const copy = {
  vi: {
    eyebrow: 'Bắt đầu thật đơn giản',
    title: 'Đăng ký buổi tập thử miễn phí',
    body: 'Điền 3 thông tin ngắn. VIO sẽ mở đúng kênh chat để bạn gửi yêu cầu cho đội ngũ.',
    name: 'Tên của bạn',
    goal: 'Mục tiêu tập',
    time: 'Khung giờ muốn đến',
    choose: 'Chọn mục tiêu',
    timePlaceholder: 'Ví dụ: 17:00–19:00',
    zalo: 'Đăng ký qua Zalo',
    instagram: 'Nhắn qua Instagram',
    call: 'Gọi hotline',
    copied: 'Đã copy tin nhắn. Dán vào chat Zalo/Instagram nhé!',
    copyFailed: 'Không thể tự copy. Vui lòng giữ trang này và nhập lại 3 thông tin trong cửa sổ chat.',
    required: 'Vui lòng nhập tên, mục tiêu và khung giờ.',
    offer: 'Miễn phí buổi tập + đo InBody miễn phí',
  },
  en: {
    eyebrow: 'Start simply',
    title: 'Book your free trial session',
    body: 'Share 3 quick details. VIO will open the right chat channel for your request.',
    name: 'Your name',
    goal: 'Training goal',
    time: 'Preferred time',
    choose: 'Choose a goal',
    timePlaceholder: 'Example: 17:00–19:00',
    zalo: 'Book via WhatsApp',
    instagram: 'Message on Instagram',
    call: 'Call the gym',
    copied: 'Message copied. Paste it into the Zalo/Instagram chat!',
    copyFailed: 'The message could not be copied. Please enter the 3 details again in the chat window.',
    required: 'Please enter your name, goal and preferred time.',
    offer: 'Free trial session + free InBody scan',
  },
} as const

const TrialForm = () => {
  const { language, isVietnamese } = useLanguage()
  const labels = copy[language]
  const [name, setName] = useState('')
  const [goal, setGoal] = useState<Goal | ''>('')
  const [preferredTime, setPreferredTime] = useState('')
  const [selectedPlan, setSelectedPlan] = useState('')
  const [message, setMessage] = useState('')
  const [hasStarted, setHasStarted] = useState(false)

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
    sessionStorage.setItem('vio-trial-draft', JSON.stringify({ name, goal, preferredTime }))
  }, [name, goal, preferredTime])

  const composedMessage = useMemo(() => {
    const source = isVietnamese ? 'WEB-VI-A' : 'WEB-EN-A'
    const goalLabel = goals.find((item) => item.value === goal)?.[language] ?? goal
    const planLine = selectedPlan
      ? isVietnamese ? `\nGói quan tâm: ${selectedPlan}.` : `\nInterested plan: ${selectedPlan}.`
      : ''
    return isVietnamese
      ? `[${source}] Xin chào VIO Fitness! Em là ${name}.\nEm muốn đăng ký TẬP THỬ MIỄN PHÍ.\nMục tiêu: ${goalLabel}. Giờ muốn đến: ${preferredTime}.${planLine}`
      : `[${source}] Hello VIO Fitness! My name is ${name}.\nI would like to book a FREE TRIAL SESSION.\nGoal: ${goalLabel}. Preferred time: ${preferredTime}.${planLine}`
  }, [goal, isVietnamese, language, name, preferredTime, selectedPlan])

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

  return (
    <section id='TrialForm' className='bg-[var(--color-deep-slate)] py-24 text-white'>
      <div className='container mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-12'>
        <div>
          <p className='mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-primary)]'>{labels.eyebrow}</p>
          <h2 className='font-heading text-4xl font-bold uppercase leading-tight sm:text-5xl'>{labels.title}</h2>
          <p className='mt-6 max-w-md text-lg leading-relaxed text-white/65'>{labels.body}</p>
          <p className='mt-8 inline-flex items-center gap-2 border border-[var(--color-primary)]/40 px-4 py-3 text-sm font-semibold text-[var(--color-primary)]'>
            <Icon icon='tabler:gift' /> {labels.offer}
          </p>
        </div>
        <form
          className='border border-white/10 bg-white/[0.04] p-6 sm:p-8'
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
                {goals.map((item) => <option key={item.value} value={item.value}>{item[language]}</option>)}
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
          <a href={`tel:${BUSINESS.phone}`} onClick={() => trackEvent('phone_clicked', { language })} className='mt-5 flex items-center justify-center gap-2 text-sm text-white/65 hover:text-white'><Icon icon='tabler:phone' /> {labels.call}: {BUSINESS.phoneDisplay}</a>
        </form>
      </div>
    </section>
  )
}

export default TrialForm
