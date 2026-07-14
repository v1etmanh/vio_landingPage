import { Icon } from '@iconify/react'

const Footer = () => {
  return (
    <footer className='bg-[#111111] text-[#B0B0B0] py-20' id='Contact'>
      <div className='container mx-auto max-w-[1600px] px-4 md:px-8 lg:px-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 lg:gap-16'>
          
          {/* Column 1 */}
          <div className='flex flex-col'>
            <div className='flex items-center gap-4 mb-6'>
              {/* Logo Hexagon Icon Placeholder */}
              <div className='w-12 h-12 flex items-center justify-center relative'>
                {/* A simple hexagon using SVG for the exact Vio Fitness logo look */}
                <svg viewBox="0 0 100 100" className="w-full h-full text-[#C5A059]" fill="none" stroke="currentColor" strokeWidth="4">
                  <polygon points="50 3, 93 28, 93 72, 50 97, 7 72, 7 28" />
                  <polyline points="25 35, 50 80, 75 35" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className='flex flex-col mt-1'>
                <span className='text-[#C5A059] text-[22px] font-extrabold tracking-[0.15em] leading-none uppercase'>VIO FITNESS</span>
                <span className='text-[#C5A059] text-[9px] tracking-[0.3em] font-medium mt-1.5 uppercase'>DA NANG • EST. 2023</span>
              </div>
            </div>
            <p className='text-sm md:text-base leading-relaxed mb-10 max-w-sm text-gray-400'>
              A premium gym in the heart of Đà Nẵng. World-class equipment, refined space, designed for expats and travelers.
            </p>
            <div className='flex items-center gap-4'>
              <a href='#' className='w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-[#C5A059] hover:text-[#C5A059] transition-all duration-300 text-[11px] font-bold tracking-widest'>
                IG
              </a>
              <a href='#' className='w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-[#C5A059] hover:text-[#C5A059] transition-all duration-300 text-[11px] font-bold tracking-widest'>
                FB
              </a>
              <a href='#' className='w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-[#C5A059] hover:text-[#C5A059] transition-all duration-300 text-[11px] font-bold tracking-widest'>
                YT
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div className='flex flex-col xl:pl-8'>
            <h4 className='text-[#C5A059] text-xs font-bold tracking-[0.25em] mb-8 uppercase'>Address</h4>
            <p className='text-[15px] leading-8 text-gray-300'>
              15 Trần Phú — 02 Nguyễn Du<br />
              Hải Châu District, Đà Nẵng
            </p>
          </div>

          {/* Column 3 */}
          <div className='flex flex-col'>
            <h4 className='text-[#C5A059] text-xs font-bold tracking-[0.25em] mb-8 uppercase'>Hours</h4>
            <p className='text-[15px] leading-8 text-gray-300'>
              Mon — Sat 05:30 — 20:30<br />
              Sunday 08:00 — 19:00
            </p>
          </div>

          {/* Column 4 */}
          <div className='flex flex-col'>
            <h4 className='text-[#C5A059] text-xs font-bold tracking-[0.25em] mb-8 uppercase'>Contact</h4>
            <p className='text-[15px] leading-8 mb-6 text-gray-300'>
              096 111 9495<br />
              viofitness0961119495@gmail.com
            </p>
            <a href='#' className='flex items-center gap-2 text-[#C5A059] text-xs font-bold tracking-[0.2em] hover:text-[#b08d4a] transition-colors uppercase w-fit'>
              <Icon icon='ph:whatsapp-logo-light' className='text-[22px]' />
              Whatsapp / Zalo
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className='mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] tracking-[0.25em] uppercase text-white/40 font-semibold'>
          <p>© 2026 Vio Fitness · Đà Nẵng · All Rights Reserved.</p>
          <p>Designed in Đà Nẵng</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
