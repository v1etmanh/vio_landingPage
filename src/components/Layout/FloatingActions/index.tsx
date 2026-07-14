import React, { useState, useEffect } from 'react'

const ZaloIcon = () => (
  <svg width='26' height='26' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <rect width='48' height='48' rx='12' fill='#0068FF' />
    <text x='50%' y='54%' dominantBaseline='middle' textAnchor='middle' fill='white' fontSize='16' fontWeight='bold' fontFamily='Arial, sans-serif'>
      Zalo
    </text>
  </svg>
)

const PhoneIcon = () => (
  <svg width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.5' strokeLinecap='round' strokeLinejoin='round'>
    <path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.6 1.2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' />
  </svg>
)

const FloatingActions = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Show after 2 seconds
    const timer = setTimeout(() => setVisible(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className={`fixed bottom-6 right-5 z-[999] flex flex-col items-center gap-3.5 transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
      }`}
    >
      {/* Zalo */}
      <div className='relative group flex flex-col items-end'>
        {/* Tooltip */}
        <span className='absolute right-full mr-3 whitespace-nowrap bg-[var(--color-deep-slate)] text-white text-xs font-semibold px-2.5 py-1.5 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-md'>
          Chat Zalo
        </span>
        <a
          href='https://zalo.me/0961119495'
          target='_blank'
          rel='noreferrer'
          id='float-zalo'
          aria-label='Chat Zalo với VIO Fitness'
          className='relative w-14 h-14 rounded-xl overflow-hidden shadow-[0_8px_20px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.2)] hover:scale-105 transition-all duration-200 block'
        >
          <img
            src="/images/logo-zalo-vector.png"
            alt="Zalo"
            className="w-full h-full object-cover"
          />
        </a>
      </div>

      {/* Hotline */}
      <div className='relative group flex flex-col items-end'>
        {/* Tooltip */}
        <span className='absolute right-full mr-3 whitespace-nowrap bg-[var(--color-deep-slate)] text-white text-xs font-semibold px-2.5 py-1.5 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-md'>
          0961 119 495
        </span>
        <a
          href='tel:0961119495'
          id='float-hotline'
          aria-label='Gọi hotline VIO Fitness'
          className='relative w-12 h-12 rounded-full shadow-[0_8px_20px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.2)] hover:scale-105 transition-all duration-200 flex items-center justify-center bg-[#C0392B] text-white'
        >
          <PhoneIcon />
        </a>
      </div>
    </div>
  )
}

export default FloatingActions
