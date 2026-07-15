import React from 'react'
import { Icon } from '@iconify/react'

const Joinus = () => {
  return (
    <section id='Contact' className='py-32 bg-transparent relative overflow-hidden'>
      <div className='container mx-auto max-w-[1600px] px-6 md:px-12 lg:px-20 relative z-10'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center'>
          
          {/* Left Side */}
          <div>
            <div className='flex items-center gap-4 mb-8'>
              <div className='w-12 h-[1px] bg-[#C5A059]'></div>
              <span className='text-[#C5A059] text-[10px] font-extrabold tracking-[0.3em] uppercase'>Visit Us</span>
            </div>
            
            <h2 className='mb-10 leading-[1]'>
              <span className='block text-[#1a1a1a] text-4xl md:text-[56px] font-serif mb-2'>
                Ready to <span className='italic text-[#C5A059]'>train</span>
              </span>
              <span className='block text-[#1a1a1a] text-[40px] md:text-[60px] lg:text-[90px] font-black uppercase tracking-tight mt-4'>
                WITH US?
              </span>
            </h2>
            
            <p className='text-gray-600 text-base md:text-lg mb-12 max-w-md leading-relaxed font-light'>
              Drop by our studio today or book your pass online in seconds. We'll have a towel and a flat white waiting.
            </p>
            
            <div className='flex flex-wrap items-center gap-4'>
              <button className='bg-[#C5A059] text-[#1a1a1a] text-[11px] font-bold tracking-[0.2em] py-3 px-6 md:py-4 md:px-10 uppercase hover:bg-[#b08d4a] transition-colors flex items-center gap-3'>
                Visit Us Today <Icon icon='ph:arrow-right-bold' className='text-base' />
              </button>
              <button className='bg-transparent border border-black/20 text-[#1a1a1a] text-[11px] font-bold tracking-[0.2em] py-3 px-6 md:py-4 md:px-10 uppercase hover:bg-black/5 hover:border-black/40 transition-colors flex items-center gap-3'>
                <Icon icon='ph:whatsapp-logo-light' className='text-xl' /> Whatsapp
              </button>
            </div>
          </div>

          {/* Right Side - Info Box */}
          <div className='relative lg:ml-auto w-full max-w-[550px]'>
            {/* L-Shape Corner Accents */}
            <div className='absolute -top-[1px] -left-[1px] w-12 h-12 border-t-[3px] border-l-[3px] border-[#C5A059] z-20 pointer-events-none'></div>
            <div className='absolute -bottom-[1px] -right-[1px] w-12 h-12 border-b-[3px] border-r-[3px] border-[#C5A059] z-20 pointer-events-none'></div>
            
            <div className='border border-white/10 p-6 md:p-16 bg-[#13110E]/90 backdrop-blur-sm relative z-10'>
              {/* Logo */}
              <div className='flex items-center gap-4 mb-16'>
                <div className='w-12 h-12 flex items-center justify-center'>
                  <svg viewBox="0 0 100 100" className="w-full h-full text-[#C5A059]" fill="none" stroke="currentColor" strokeWidth="4">
                    <polygon points="50 3, 93 28, 93 72, 50 97, 7 72, 7 28" />
                    <polyline points="25 35, 50 80, 75 35" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className='flex flex-col'>
                  <span className='text-white text-[16px] font-bold tracking-[0.2em] uppercase'>VIO FITNESS</span>
                  <span className='text-[#C5A059] text-[9px] tracking-[0.35em] font-bold mt-1.5 uppercase'>DA NANG FLAGSHIP</span>
                </div>
              </div>

              <div className='space-y-10'>
                {/* Address */}
                <div>
                  <h4 className='text-[#C5A059] text-[10px] font-bold tracking-[0.25em] mb-4 uppercase'>Address</h4>
                  <p className='text-[15px] leading-8 text-gray-300 mb-4'>
                    15 Trần Phú — 02 Nguyễn Du<br />
                    Hải Châu District, Đà Nẵng
                  </p>
                  <a href='#' className='text-[#C5A059] text-[9px] font-bold tracking-[0.25em] uppercase hover:text-white transition-colors flex items-center gap-2 w-fit'>
                    Find Us On Maps <Icon icon='ph:arrow-right-bold' />
                  </a>
                </div>

                <div className='w-full h-[1px] bg-white/10'></div>

                {/* Hours */}
                <div>
                  <h4 className='text-[#C5A059] text-[10px] font-bold tracking-[0.25em] mb-4 uppercase'>Hours</h4>
                  <p className='text-[15px] leading-8 text-gray-300'>
                    Mon — Sat 05:30 — 20:30<br />
                    Sunday 08:00 — 19:00
                  </p>
                  <p className='text-xs text-gray-500 mt-2 font-medium tracking-wide'>Open daily</p>
                </div>

                <div className='w-full h-[1px] bg-transparent'></div>

                {/* Contact */}
                <div className='pt-2'>
                  <h4 className='text-[#C5A059] text-[10px] font-bold tracking-[0.25em] mb-4 uppercase'>Contact</h4>
                  <p className='text-[15px] leading-8 text-gray-300 mb-4'>
                    096 111 9495<br />
                    viofitness0961119495@gmail.com
                  </p>
                  <a href='#' className='text-[#C5A059] text-[9px] font-bold tracking-[0.25em] uppercase hover:text-white transition-colors flex items-center gap-2 w-fit'>
                    Whatsapp / Zalo <Icon icon='ph:arrow-right-bold' />
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Joinus
