import React, { useState, useEffect } from 'react'

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

    </div>
  )
}

export default FloatingActions
