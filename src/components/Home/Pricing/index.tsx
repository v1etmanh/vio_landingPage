import React, { useRef } from 'react'
import { Icon } from '@iconify/react'
import Button from '../../ui/Button'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Pricing = () => {
  const plans = [
    {
      name: 'DAY PASS',
      prefix: 'FLEXIBLE',
      priceVND: '200K',
      priceUSD: '$8',
      period: '/ DAY',
      features: [
        'Unlimited Gym Access',
        'Air-conditioned luxury training space',
      ],
      isPopular: false,
      btnText: 'GET DAY PASS',
      bgImage: "url('/images/pricing/essential.png')",
    },
    {
      name: 'SHORT TERM',
      prefix: 'VISITOR',
      priceVND: '500K',
      priceUSD: '$20',
      period: '/ 3 DAYS',
      features: [
        'Unlimited Gym Access',
        'Air-conditioned luxury training space',
      ],
      isPopular: false,
      btnText: 'GET SHORT TERM',
      bgImage: "url('/images/pricing/abstract_white.png')",
    },
    {
      name: 'WEEKLY PASS',
      prefix: 'TRAVELER',
      priceVND: '900K',
      priceUSD: '$36',
      period: '/ 1 WK',
      features: [
        '2 Weeks: 1.25M VND / $50',
        'Unlimited Gym Access',
        'Air-conditioned luxury training space',
      ],
      isPopular: true,
      btnText: 'GET WEEKLY PASS',
      bgImage: "url('/output_ms/abstract_kinetic_energy.png')",
    },
    {
      name: 'MEMBERSHIP',
      prefix: 'COMMITTED',
      priceVND: '1.65M',
      priceUSD: '$66',
      period: '/ 1 MO',
      features: [
        '2 Months: 2.9M VND / $116',
        '3 Months: 3.9M VND / $156',
        '4 Months: 4.8M VND / $192',
        '5 Months: 5.7M VND / $228',
        '6 Months: 6.6M VND / $264',
        'Unlimited Gym Access',
        'Air-conditioned luxury space',
      ],
      isPopular: false,
      btnText: 'JOIN MEMBERSHIP',
      bgImage: "url('/images/pricing/elite.png')",
    },
    {
      name: 'LONG TERM',
      prefix: 'LIFESTYLE',
      priceVND: '10.2M',
      priceUSD: '$408',
      period: '/ 12 MO',
      features: [
        'Unlimited Gym Access',
        'Air-conditioned luxury training space',
      ],
      isPopular: false,
      btnText: 'JOIN LONG TERM',
      bgImage: "url('/images/pricing/abstract_gold.png')",
    },
  ]

  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1280px)", () => {
      // Desktop: Hardware-accelerated fan out animation
      gsap.set('.pricing-card', { opacity: 0, y: 0, force3D: true });
      gsap.set('.pricing-card-0, .pricing-card-1', { x: -80, scale: 0.85 });
      gsap.set('.pricing-card-3, .pricing-card-4', { x: 80, scale: 0.85 });
      gsap.set('.pricing-card-2', { scale: 0.85, y: 20 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        }
      });

      tl.to('.pricing-card-0, .pricing-card-4', {
        x: 0, y: 64, scale: 0.95, opacity: 0.9, duration: 0.8, ease: 'power3.out'
      }, 0)
      .to('.pricing-card-1, .pricing-card-3', {
        x: 0, y: 24, scale: 1, opacity: 1, duration: 0.8, ease: 'power3.out'
      }, 0.1)
      .to('.pricing-card-2', {
        x: 0, y: -32, scale: 1.15, opacity: 1, duration: 0.8, ease: 'power3.out'
      }, 0.2);
    });

    mm.add("(max-width: 1279px)", () => {
      // Mobile: Batch animation for smooth scrolling without simultaneous overloads
      gsap.set('.pricing-card', { opacity: 0, y: 50, force3D: true });
      
      ScrollTrigger.batch('.pricing-card', {
        start: 'top 85%',
        onEnter: batch => gsap.to(batch, 
          { opacity: 1, y: 0, stagger: 0.15, duration: 0.6, ease: 'power3.out', overwrite: true }
        )
      });
    });

    return () => mm.revert();
  }, { scope: sectionRef });

  const getCardStyle = (index: number) => {
    // Center card (Index 2)
    if (index === 2) return 'border-[2px] border-[var(--color-primary)] shadow-[0_0_40px_rgba(140,120,83,0.4)] z-30 bg-[var(--color-darkmode)] min-h-[580px]'
    // Inner neighbors (Index 1 & 3)
    if (index === 1 || index === 3) return 'border border-gray-600 shadow-2xl z-20 bg-[var(--color-deep-slate)] min-h-[540px]'
    // Outer neighbors (Index 0 & 4)
    return 'border border-gray-600 shadow-xl z-10 hover:opacity-100 bg-black/90 min-h-[500px]'
  }

  return (
    <section id='Pricing' ref={sectionRef} className='py-24 lg:py-32 bg-transparent relative z-10 overflow-hidden'>
      <div className='w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center max-w-4xl mx-auto mb-32'>
          <p className='text-gray-600 text-xs sm:text-sm md:text-lg tracking-[0.1em] sm:tracking-[0.2em] uppercase mb-4 font-bold font-sans'>
            VIO FITNESS - MEMBERSHIP PACKAGES
          </p>
          <h2 className='text-3xl sm:text-4xl md:text-6xl font-black mb-6 text-[var(--color-darkmode)] tracking-tight'>
            ELEVATE YOUR FITNESS JOURNEY
          </h2>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 xl:gap-4 items-stretch mb-20 xl:pt-16 xl:pb-16'>
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card pricing-card-${index} will-change-transform opacity-0`}
            >
              <div
                className={`relative rounded-none overflow-hidden flex flex-col h-full transition-shadow duration-500 hover:shadow-2xl hover:z-40 ${getCardStyle(index)}`}
              >
                {/* Abstract Background Layer */}
                <div
                  className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-700 hover:scale-110"
                  style={{ backgroundImage: plan.bgImage }}
                ></div>
                {/* Dark Gradient Overlay for readability */}
                <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/60 via-black/85 to-[#111]"></div>

                {/* Content Layer */}
                <div className='relative z-10 p-6 xl:p-8 flex flex-col h-full'>
                  {plan.isPopular && (
                    <div className='absolute -top-1 left-1/2 -translate-x-1/2 bg-[var(--color-darkmode)] border border-[var(--color-primary)] text-[var(--color-primary)] px-6 py-2 rounded-b-md text-xs font-bold uppercase tracking-widest whitespace-nowrap shadow-lg'>
                      Most Popular
                    </div>
                  )}

                  <div className={`text-center ${plan.isPopular ? 'mt-8' : 'mt-4'} mb-8 pb-6 border-b border-gray-600/50`}>
                    <p className='text-gray-300 tracking-widest text-[11px] mb-2 uppercase font-sans font-bold'>{plan.prefix}</p>
                    <h3 className='text-2xl lg:text-3xl font-bold text-white mb-6'>{plan.name}</h3>
                    <div className='flex items-baseline justify-center text-white'>
                      <span className='text-4xl lg:text-5xl font-black tracking-tight'>{plan.priceVND}</span>
                      <span className='text-gray-400 ml-2 text-sm font-medium tracking-wide font-sans'>{plan.period}</span>
                    </div>
                    <div className='flex items-baseline justify-center text-[var(--color-primary)] mt-2'>
                      <span className='text-xl lg:text-2xl font-bold tracking-tight'>{plan.priceUSD}</span>
                      <span className='text-[var(--color-primary)]/70 ml-1 text-xs font-medium tracking-wide font-sans'>{plan.period}</span>
                    </div>
                  </div>

                  <ul className='space-y-4 mb-8 flex-grow'>
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className='flex items-start text-gray-200 text-sm xl:text-[15px]'>
                        <Icon icon='tabler:check' className='text-[var(--color-primary)] text-xl mr-3 flex-shrink-0 mt-0.5' />
                        <span className="leading-relaxed font-sans">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant={plan.isPopular ? 'outline' : 'secondary'}
                    className={`w-full mt-auto ${plan.isPopular ? 'border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white shadow-[0_0_15px_rgba(140,120,83,0.2)]' : ''}`}
                  >
                    {plan.btnText}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Pricing
