import React from 'react'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'

const VioStandard = () => {
  const cards = [
    {
      num: '01.',
      title: 'Prime Location',
      desc: 'Steps away from the Hàn River, easy to find and effortless to reach — 15 Trần Phú, Hải Châu, the heart of central Đà Nẵng.',
      icon: 'ph:map-pin-light'
    },
    {
      num: '02.',
      title: 'Ultimate Flexibility',
      desc: 'No complicated paperwork. No long-term commitments. Day passes and flexible short-term options designed for travelers.',
      icon: 'ph:sparkle-light'
    },
    {
      num: '03.',
      title: 'Premium Amenities',
      desc: 'Complimentary towels, modern saunas, secure lockers, and free InBody body-composition analysis — included.',
      icon: 'ph:barbell-light'
    },
    {
      num: '04.',
      title: 'World-Class Equipment',
      desc: 'Brand-new, strictly maintained Rogue, Hammer Strength and Impulse machines — for a smooth, powerful workout every time.',
      icon: 'tabler:barbell'
    }
  ]

  return (
    <section id='Standards' className='py-24 bg-transparent relative z-10'>
      <div className='container mx-auto max-w-[1700px] px-4 sm:px-6 md:px-8 lg:px-12'>
        
        {/* Header Section */}
        <div className='flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8'>
          <div className='max-w-3xl'>
            <div className='flex items-center gap-4 mb-6'>
              <div className='h-[1px] w-12 bg-[#C5A059]'></div>
              <span className='text-sm font-bold uppercase tracking-[0.2em] text-[#4A453F]'>
                WHY VIO
              </span>
            </div>
            <h2 className='flex flex-col leading-[0.9]'>
              <span className='font-serif italic text-4xl sm:text-5xl md:text-[5.5rem] lg:text-[6.5rem] text-[#332E29] font-light'>
                The Vio
              </span>
              <span className='font-black text-5xl sm:text-[4rem] md:text-[6rem] lg:text-[7rem] text-[#1A1A1A] tracking-tighter uppercase'>
                STANDARD.
              </span>
            </h2>
          </div>
          <div className='max-w-md pb-6'>
            <p className='text-xl md:text-2xl text-[#5A544A] font-light leading-relaxed'>
              Four reasons travelers and expats choose Vio Fitness over every chain gym in Đà Nẵng.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20'>
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className='bg-gray-200/60 hover:bg-gray-200/90 backdrop-blur-md border border-[#D0CACA] hover:border-[#BDB5B5] rounded-2xl p-6 md:p-10 xl:p-12 transition-all duration-300 hover:shadow-[0_15px_40px_rgba(0,0,0,0.1)] hover:-translate-y-2 group flex flex-col h-full min-h-[auto] md:min-h-[420px] cursor-pointer'
            >
              <div className='flex justify-between items-start mb-14'>
                <span className='font-serif italic text-5xl text-[#C5A059] group-hover:scale-110 transition-transform duration-300'>
                  {card.num}
                </span>
                <div className='w-14 h-14 rounded-full bg-[#2A2522] flex items-center justify-center text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-white transition-colors duration-300 shadow-md'>
                  <Icon icon={card.icon} className='text-3xl' />
                </div>
              </div>
              
              <h3 className='font-serif text-[32px] leading-tight text-[#1A1A1A] mb-6'>
                {card.title}
              </h3>
              
              <p className='text-[#5A544A] font-light leading-relaxed flex-grow text-base md:text-lg'>
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center pt-8 border-t border-[#E8E3D9] gap-6'>
          <div className='flex flex-row items-center justify-between w-full lg:w-auto gap-2 sm:gap-6 md:gap-10 overflow-hidden'>
            {['NO CONTRACTS', 'NO HIDDEN FEES', 'NO HARD-SELLING'].map((text, idx) => (
              <div key={idx} className='flex flex-col sm:flex-row items-center gap-1 sm:gap-3 text-center sm:text-left'>
                <Icon icon='ph:check-bold' className='text-[#C5A059] text-sm sm:text-xl' />
                <span className='font-bold text-[8px] sm:text-sm tracking-[0.05em] sm:tracking-[0.15em] text-[#4A453F] leading-tight whitespace-nowrap sm:whitespace-normal'>
                  {text}
                </span>
              </div>
            ))}
          </div>
          
          <a href='#TrialForm' className='group flex items-center gap-4 cursor-pointer'>
            <span className='relative font-bold text-sm tracking-[0.15em] text-[#1A1A1A] overflow-hidden py-1'>
              SEE ALL THE FACILITY
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#C5A059] -translate-x-[105%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
            </span>
            <div className="w-10 h-10 rounded-full border border-[#C5A059]/30 flex items-center justify-center group-hover:bg-[#C5A059] group-hover:shadow-[0_5px_15px_rgba(197,160,89,0.4)] transition-all duration-500">
              <Icon icon='tabler:arrow-right' className='text-[#C5A059] group-hover:text-white text-xl transition-colors duration-500' />
            </div>
          </a>
        </div>
        
      </div>
    </section>
  )
}

export default VioStandard
