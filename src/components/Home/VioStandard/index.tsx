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
      <div className='container mx-auto max-w-[1700px] px-4 md:px-8 lg:px-12'>
        
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
              <span className='font-serif italic text-[4.5rem] md:text-[5.5rem] lg:text-[6.5rem] text-[#332E29] font-light'>
                The Vio
              </span>
              <span className='font-black text-[4rem] md:text-[6rem] lg:text-[7rem] text-[#1A1A1A] tracking-tighter uppercase'>
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
              className='bg-transparent hover:bg-white/60 backdrop-blur-sm border border-[#E8E3D9] hover:border-transparent rounded-none p-10 xl:p-12 transition-all duration-300 hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:-translate-y-2 group flex flex-col h-full min-h-[420px] cursor-pointer'
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
          <div className='flex flex-wrap items-center gap-6 md:gap-10'>
            {['NO CONTRACTS', 'NO HIDDEN FEES', 'NO HARD-SELLING'].map((text, idx) => (
              <div key={idx} className='flex items-center gap-3'>
                <Icon icon='ph:check-bold' className='text-[#C5A059] text-xl' />
                <span className='font-bold text-sm tracking-[0.15em] text-[#4A453F]'>
                  {text}
                </span>
              </div>
            ))}
          </div>
          
          <a href='#Contact' className='group flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer'>
            <span className='font-bold text-sm tracking-[0.15em] text-[#1A1A1A]'>
              SEE ALL THE FACILITY
            </span>
            <Icon icon='tabler:arrow-right' className='text-[#C5A059] text-xl group-hover:translate-x-2 transition-transform duration-300' />
          </a>
        </div>
        
      </div>
    </section>
  )
}

export default VioStandard
