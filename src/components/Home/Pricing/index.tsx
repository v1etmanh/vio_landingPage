import { useState } from 'react'
import { Icon } from '@iconify/react'
import { m, useReducedMotion } from 'framer-motion'
import { PRICING_PLANS, type PricingPlan } from '@/app/config/pricing'
import { useLocale } from '@/app/context/useLocale'

const Pricing = () => {
  const locale = useLocale()
  const reduceMotion = useReducedMotion()
  const [focusedPlanId, setFocusedPlanId] = useState<string | null>(null)
  const featuredPlan = PRICING_PLANS.find((plan) => plan.isPopular) ?? PRICING_PLANS[0]
  const compactPlans = PRICING_PLANS.filter((plan) => plan.id !== featuredPlan.id)

  const planCopy = (id: string) => {
    if (id === 'day-pass') return locale.pricing.plans.dayPass
    if (id === 'short-term') return locale.pricing.plans.shortTerm
    if (id === 'weekly-pass') return locale.pricing.plans.weeklyPass
    if (id === 'membership') return locale.pricing.plans.membership
    return locale.pricing.plans.longTerm
  }

  const periodCopy = (id: string) => {
    if (id === 'day-pass') return locale.pricing.periodDay
    if (id === 'short-term') return locale.pricing.periodDays
    if (id === 'weekly-pass') return locale.pricing.periodWeek
    if (id === 'membership') return locale.pricing.periodMonth
    return locale.pricing.periodYear
  }

  const selectPlan = (plan: PricingPlan) => {
    sessionStorage.setItem('vio-selected-plan', plan.name)
    window.dispatchEvent(new CustomEvent('vio-plan-selected', { detail: plan.name }))
  }

  const PlanCard = ({ plan, featured = false }: { plan: PricingPlan; featured?: boolean }) => {
    const copy = planCopy(plan.id)
    const period = periodCopy(plan.id)
    const focused = focusedPlanId === plan.id
    const hasFocus = focusedPlanId !== null
    const toggleFocus = () => setFocusedPlanId((current) => current === plan.id ? null : plan.id)

    return (
      <m.article
        initial={false}
        animate={{
          scale: reduceMotion ? 1 : focused ? 1.035 : hasFocus ? 0.97 : 1,
          opacity: reduceMotion ? 1 : hasFocus && !focused ? 0.62 : 1,
        }}
        transition={{ duration: 0.28, ease: [0.25, 1, 0.5, 1] }}
        onClick={toggleFocus}
        onKeyDown={(event) => {
          if (event.target !== event.currentTarget) return
          if (event.key !== 'Enter' && event.key !== ' ') return
          event.preventDefault()
          toggleFocus()
        }}
        tabIndex={0}
        role='group'
        aria-label={`${plan.name}. ${focused ? locale.pricing.clearFocus : locale.pricing.focusPlan}`}
        className={`relative isolate flex overflow-hidden border bg-[var(--color-vio-surface)] outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-vio-gold)] ${focused ? 'z-20 border-[var(--color-vio-gold)]' : 'z-0'} ${featured ? 'border-[var(--color-vio-gold)]' : 'h-full border-[var(--color-vio-line)]'}`}
        data-plan-id={plan.id}
        data-plan-focused={focused ? 'true' : 'false'}
      >
        <div className='absolute inset-0 -z-20 bg-cover bg-center opacity-20' style={{ backgroundImage: plan.backgroundImage }} aria-hidden='true' />
        <div className='absolute inset-0 -z-10 bg-[var(--color-vio-canvas)]/75' aria-hidden='true' />
        {focused && (
          <button
            type='button'
            onClick={(event) => {
              event.stopPropagation()
              setFocusedPlanId(null)
            }}
            className='absolute right-4 top-4 z-10 inline-flex min-h-11 min-w-11 items-center justify-center border border-[var(--color-vio-gold)] bg-[var(--color-vio-canvas)]/85 text-[var(--color-vio-text)] outline-none transition-colors duration-200 hover:bg-[var(--color-vio-gold)] hover:text-[var(--color-vio-canvas)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-vio-gold)]'
            aria-label={locale.pricing.clearFocus}
          >
            <Icon icon='tabler:x' className='text-xl' aria-hidden='true' />
          </button>
        )}
        <div className={`flex w-full flex-col p-6 sm:p-8 ${featured ? 'lg:p-10' : ''}`}>
          <div className='flex items-start justify-between gap-4'>
            <div>
              <p className='text-xs font-bold uppercase tracking-[0.1em] text-[var(--color-vio-gold)]'>{copy.prefix}</p>
              <h3 className={`mt-3 text-wrap-balance font-heading font-bold uppercase leading-[1.05] text-[var(--color-vio-text)] ${featured ? 'text-4xl sm:text-5xl' : 'text-3xl'}`}>{plan.name}</h3>
            </div>
            {featured && (
              <span className='border border-[var(--color-vio-gold)] px-3 py-2 text-[0.7rem] font-bold uppercase tracking-[0.1em] text-[var(--color-vio-gold)]'>{locale.pricing.popular}</span>
            )}
          </div>

          <div className={`mt-8 border-b border-[var(--color-vio-line)] pb-8 ${featured ? 'sm:mt-12' : ''}`}>
            <div className='flex flex-wrap items-end gap-x-3 gap-y-2 [font-variant-numeric:tabular-nums]'>
              <span className={`font-heading font-bold leading-none text-[var(--color-vio-text)] ${featured ? 'text-6xl sm:text-7xl' : 'text-5xl'}`}>{plan.priceVnd}</span>
              <span className='pb-1 text-xs font-bold uppercase tracking-[0.08em] text-[var(--color-vio-muted)]'>{period}</span>
            </div>
            <p className='mt-3 text-lg font-bold text-[var(--color-vio-gold)] [font-variant-numeric:tabular-nums]'>{plan.priceUsd} <span className='text-xs font-semibold uppercase tracking-[0.08em] text-[var(--color-vio-muted)]'>{period}</span></p>
          </div>

          <ul className={`flex-grow space-y-4 py-8 ${featured ? 'sm:columns-2 sm:gap-8 lg:columns-1' : ''}`}>
            {copy.features.map((feature) => (
              <li key={feature} className='flex break-inside-avoid items-start gap-3 text-base leading-relaxed text-[var(--color-vio-text)]'>
                <Icon icon='tabler:check' className='mt-1 shrink-0 text-lg text-[var(--color-vio-gold)]' aria-hidden='true' />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <a
            href='#TrialForm'
            onClick={(event) => {
              event.stopPropagation()
              selectPlan(plan)
              setFocusedPlanId(plan.id)
            }}
            id={`pricing-cta-${plan.id}`}
            className={`inline-flex min-h-12 w-full items-center justify-center px-5 text-center font-heading text-sm font-bold uppercase tracking-[0.1em] outline-none transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-vio-gold)] active:translate-y-0.5 ${featured ? 'bg-[var(--color-vio-gold)] text-[var(--color-vio-canvas)] hover:bg-[var(--color-vio-text)]' : 'border border-[var(--color-vio-line)] text-[var(--color-vio-text)] hover:border-[var(--color-vio-gold)] hover:text-[var(--color-vio-gold)]'}`}
          >
            {plan.id === 'day-pass' ? locale.pricing.trial : locale.pricing.choose}
          </a>
        </div>
      </m.article>
    )
  }

  const paymentMethods = [
    { icon: 'tabler:cash', label: locale.pricing.paymentCash },
    { icon: 'tabler:credit-card', label: locale.pricing.paymentCard },
    { icon: 'tabler:building-bank', label: locale.pricing.paymentTransfer },
  ]

  return (
    <section id='Pricing' className='bg-[var(--color-vio-canvas)] py-24 text-[var(--color-vio-text)] lg:py-32'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-12'>
        <div className='mb-12 max-w-4xl lg:mb-16'>
          <p className='mb-4 text-xs font-bold uppercase tracking-[0.1em] text-[var(--color-vio-gold)]'>{locale.pricing.eyebrow}</p>
          <h2 className='text-wrap-balance font-heading text-4xl font-bold uppercase leading-[1.1] text-[var(--color-vio-text)] sm:text-5xl lg:text-6xl'>{locale.pricing.title}</h2>
          <p className='mt-5 max-w-2xl text-base leading-relaxed text-[var(--color-vio-muted)] sm:text-lg'>{locale.pricing.subtitle}</p>
        </div>

        <div className='grid gap-5 lg:grid-cols-12 lg:items-start lg:gap-6'>
          <div className='grid gap-6 lg:col-span-5'>
            <PlanCard plan={featuredPlan} featured />
            <div className='border-y border-[var(--color-vio-line)]'>
              <div className='py-8'>
                <h3 className='font-heading text-3xl font-bold uppercase leading-tight text-[var(--color-vio-text)]'>{locale.pricing.paymentTitle}</h3>
                <p className='mt-3 max-w-md text-base leading-relaxed text-[var(--color-vio-muted)]'>{locale.pricing.paymentIntro}</p>
              </div>
              <div className='grid grid-cols-3 border-t border-[var(--color-vio-line)]'>
                {paymentMethods.map((method, index) => (
                  <div key={method.label} className={`flex min-h-32 flex-col items-start justify-center gap-3 px-3 py-5 sm:px-5 ${index > 0 ? 'border-l border-[var(--color-vio-line)]' : ''}`}>
                    <Icon icon={method.icon} className='text-2xl text-[var(--color-vio-gold)] sm:text-3xl' aria-hidden='true' />
                    <span className='font-heading text-sm font-bold uppercase tracking-[0.04em] text-[var(--color-vio-text)] sm:text-base'>{method.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className='grid gap-5 sm:grid-cols-2 lg:col-span-7 lg:gap-6'>
            {compactPlans.map((plan) => <PlanCard key={plan.id} plan={plan} />)}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
