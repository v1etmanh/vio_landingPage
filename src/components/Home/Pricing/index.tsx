import React from 'react'
import { Icon } from '@iconify/react'
import Button from '../../ui/Button'

const Pricing = () => {
  const plans = [
    {
      name: 'ESSENTIAL',
      prefix: 'AURORA',
      price: '$199',
      period: '/ MO',
      features: [
        'Unlimited Gym Access',
        'Group Classes',
        'Sauna & Steam Room',
        'Locker Service',
        'Guest Passes',
      ],
      isPopular: false,
      btnText: 'JOIN ESSENTIAL',
      bgImage: "url('/images/pricing/essential.png')",
    },
    {
      name: 'PRESTIGE',
      prefix: 'AURORA',
      price: '$349',
      period: '/ MO',
      features: [
        'Unlimited Gym Access',
        'Group Classes',
        'Sauna & Steam Room',
        'Locker Service',
        'Guest Passes',
        'Personal Training Sessions',
        'Nutrition Coaching',
        'Spa Access',
        'Priority Booking & Spa Access',
        '1x Guest Pass/Week',
      ],
      isPopular: true,
      btnText: 'SELECT PRESTIGE',
      bgImage: "url('/output_ms/abstract_kinetic_energy.png')",
    },
    {
      name: 'ELITE',
      prefix: 'AURORA',
      price: '$599',
      period: '/ MO',
      features: [
        'Unlimited Gym Access',
        'Group Classes',
        'Sauna & Steam Room',
        'Personal Training Sessions',
        'Nutrition Coaching',
        'Spa Access',
        'Priority Booking',
        'Towel Service',
      ],
      isPopular: false,
      btnText: 'JOIN ELITE',
      bgImage: "url('/images/pricing/elite.png')",
    },
  ]

  return (
    <section id='Pricing' className='py-24 bg-transparent relative z-10'>
      <div className='container mx-auto max-w-[1300px] px-4'>
        <div className='text-center max-w-4xl mx-auto mb-20'>
          <p className='text-gray-600 text-lg tracking-[0.2em] uppercase mb-4 font-medium' style={{ fontFamily: 'Georgia, serif' }}>
            Pricing Plans
          </p>
          <h2 className='text-5xl md:text-6xl font-bold mb-6 text-[#1a1a1a] tracking-tight' style={{ fontFamily: 'Georgia, serif' }}>
            ELEVATE YOUR FITNESS JOURNEY
          </h2>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 items-center mb-12'>
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative rounded-xl overflow-hidden transition-all duration-300 flex flex-col ${
                plan.isPopular 
                  ? 'border-[2px] border-[#C5A059] shadow-[0_0_30px_rgba(197,160,89,0.3)] min-h-[680px] lg:scale-105 z-20' 
                  : 'border border-gray-600 shadow-2xl min-h-[600px] z-10'
              }`}
            >
              {/* Abstract Background Layer */}
              <div 
                className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-700 hover:scale-110"
                style={{ backgroundImage: plan.bgImage }}
              ></div>
              {/* Dark Gradient Overlay for readability */}
              <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/60 via-black/80 to-[#151515]"></div>

              {/* Content Layer */}
              <div className='relative z-10 p-10 flex flex-col h-full'>
                {plan.isPopular && (
                  <div className='absolute -top-1 left-1/2 -translate-x-1/2 bg-[#2a2a2a] border border-[#C5A059] text-[#C5A059] px-6 py-1.5 rounded-b-md text-xs font-bold uppercase tracking-widest'>
                    Most Popular
                  </div>
                )}
                
                <div className={`text-center ${plan.isPopular ? 'mt-6' : 'mt-2'} mb-8 pb-8 border-b border-gray-600/50`}>
                  <p className='text-gray-300 tracking-widest text-sm mb-2' style={{ fontFamily: 'Georgia, serif' }}>{plan.prefix}</p>
                  <h3 className='text-3xl font-bold text-white mb-6' style={{ fontFamily: 'Georgia, serif' }}>{plan.name}</h3>
                  <div className='flex items-baseline justify-center text-white'>
                    <span className='text-5xl md:text-[54px] font-bold tracking-tight' style={{ fontFamily: 'Georgia, serif' }}>{plan.price}</span>
                    <span className='text-gray-400 ml-1 text-lg font-medium tracking-wide'>{plan.period}</span>
                  </div>
                </div>
                
                <ul className='space-y-4 mb-10 flex-grow'>
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className='flex items-center text-gray-200 text-[15px]'>
                      <Icon icon='tabler:check' className='text-[#C5A059] text-xl mr-4 flex-shrink-0' />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={plan.isPopular ? 'primary' : 'secondary'} 
                  size="lg" 
                  className="w-full tracking-widest uppercase text-sm"
                >
                  {plan.btnText}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
