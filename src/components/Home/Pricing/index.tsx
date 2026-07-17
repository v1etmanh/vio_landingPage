import React from 'react'
import { Icon } from '@iconify/react'
import Button from '../../ui/Button'
import { PRICING_PLANS } from '@/app/config/pricing'
import { useLocale } from '@/app/context/useLocale'

const Pricing = () => {
  const locale = useLocale()
  const planCopy = (id: string) => {
    if (id === 'day-pass') return locale.pricing.plans.dayPass
    if (id === 'short-term') return locale.pricing.plans.shortTerm
    if (id === 'weekly-pass') return locale.pricing.plans.weeklyPass
    if (id === 'membership') return locale.pricing.plans.membership
    return locale.pricing.plans.longTerm
  }
  const periodCopy = (id: string) => id === 'day-pass' ? locale.pricing.periodDay : id === 'short-term' ? locale.pricing.periodDays : id === 'weekly-pass' ? locale.pricing.periodWeek : id === 'membership' ? locale.pricing.periodMonth : locale.pricing.periodYear
  const getCardStyle = (index: number) => {
    // Center card (Index 2)
    if (index === 2) return 'border-[2px] border-[var(--color-primary)] shadow-[0_0_40px_rgba(140,120,83,0.4)] xl:scale-[1.15] z-30 xl:-translate-y-8 bg-[var(--color-darkmode)] min-h-[580px]'
    // Inner neighbors (Index 1 & 3)
    if (index === 1 || index === 3) return 'border border-gray-600 shadow-2xl z-20 xl:scale-100 xl:translate-y-6 bg-[var(--color-deep-slate)] min-h-[540px]'
    // Outer neighbors (Index 0 & 4)
    return 'border border-gray-600 shadow-xl z-10 xl:scale-95 xl:translate-y-16 opacity-90 hover:opacity-100 bg-black/90 min-h-[500px]'
  }

  return (
    <section id='Pricing' className='py-32 bg-transparent relative z-10'>
      <div className='w-full max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center max-w-4xl mx-auto mb-32'>
          <p className='text-gray-600 text-xs sm:text-sm md:text-lg tracking-[0.1em] sm:tracking-[0.2em] uppercase mb-4 font-bold font-sans'>
            {locale.pricing.eyebrow}
          </p>
          <h2 className='text-3xl sm:text-4xl md:text-6xl font-black mb-6 text-[var(--color-darkmode)] tracking-tight'>
            {locale.pricing.title}
          </h2>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 xl:gap-4 items-stretch mb-20'>
          {PRICING_PLANS.map((plan, index) => (
            (() => {
              const copy = planCopy(plan.id)
              const period = periodCopy(plan.id)
              return (
            <div
              key={index}
              className={`relative rounded-none overflow-hidden transition-all duration-500 flex flex-col ${getCardStyle(index)}`}
            >
              {/* Abstract Background Layer */}
              <div
                className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-700 hover:scale-110"
                style={{ backgroundImage: plan.backgroundImage }}
              ></div>
              {/* Dark Gradient Overlay for readability */}
              <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/60 via-black/85 to-[#111]"></div>

              {/* Content Layer */}
              <div className='relative z-10 p-6 xl:p-8 flex flex-col h-full'>
                {plan.isPopular && (
                  <div className='absolute -top-1 left-1/2 -translate-x-1/2 bg-[var(--color-darkmode)] border border-[var(--color-primary)] text-[var(--color-primary)] px-6 py-2 rounded-b-md text-xs font-bold uppercase tracking-widest whitespace-nowrap shadow-lg'>
                    {locale.pricing.popular}
                  </div>
                )}

                <div className={`text-center ${plan.isPopular ? 'mt-8' : 'mt-4'} mb-8 pb-6 border-b border-gray-600/50`}>
                  <p className='text-gray-300 tracking-widest text-[11px] mb-2 uppercase font-sans font-bold'>{copy.prefix}</p>
                  <h3 className='text-2xl lg:text-3xl font-bold text-white mb-6'>{plan.name}</h3>
                  <div className='flex items-baseline justify-center text-white'>
                    <span className='text-4xl lg:text-5xl font-black tracking-tight'>{plan.priceVnd}</span>
                    <span className='text-gray-400 ml-2 text-sm font-medium tracking-wide font-sans'>{period}</span>
                  </div>
                  <div className='flex items-baseline justify-center text-[var(--color-primary)] mt-2'>
                    <span className='text-xl lg:text-2xl font-bold tracking-tight'>{plan.priceUsd}</span>
                    <span className='text-[var(--color-primary)]/70 ml-1 text-xs font-medium tracking-wide font-sans'>{period}</span>
                  </div>
                </div>

                <ul className='space-y-4 mb-8 flex-grow'>
                  {copy.features.map((feature, idx) => (
                    <li key={idx} className='flex items-start text-gray-200 text-sm xl:text-[15px]'>
                      <Icon icon='tabler:check' className='text-[var(--color-primary)] text-xl mr-3 flex-shrink-0 mt-0.5' />
                      <span className="leading-relaxed font-sans">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  href='#TrialForm'
                  onClick={() => {
                    sessionStorage.setItem('vio-selected-plan', plan.name)
                    window.dispatchEvent(new CustomEvent('vio-plan-selected', { detail: plan.name }))
                  }}
                  id={`pricing-cta-${plan.id}`}
                  variant={plan.isPopular ? 'outline' : 'secondary'}
                  className={`w-full mt-auto ${plan.isPopular ? 'border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white shadow-[0_0_15px_rgba(140,120,83,0.2)]' : ''}`}
                >
                  {plan.id === 'day-pass' ? locale.pricing.trial : locale.pricing.choose}
                </Button>
              </div>
            </div>
              )
            })()
          ))}
        </div>

        <div className='text-center mt-12 bg-white/80 backdrop-blur-sm p-6 rounded-none max-w-xl mx-auto shadow-lg border border-gray-200'>
          <h4 className='text-[var(--color-darkmode)] font-bold text-lg mb-2'>{locale.pricing.paymentTitle}</h4>
          <div className='flex justify-center items-center gap-3 text-gray-700'>
            <Icon icon='ph:credit-card-duotone' className='text-3xl text-[var(--color-primary)]' />
            <span className='font-medium font-sans'>{locale.pricing.paymentMethods}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
