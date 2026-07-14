import { useEffect, useRef, useState } from 'react'
import Logo from './Logo'
import { headerData } from '@/app/utils/data'
import { Icon } from '@iconify/react'

const Header: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node) &&
      dropdownOpen
    ) {
      setDropdownOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [dropdownOpen])

  useEffect(() => {
    if (dropdownOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [dropdownOpen])

  return (
    <header className='absolute top-0 left-0 right-0 z-50 w-full border-b border-black/10 bg-transparent'>
      <div className='container mx-auto px-4 md:px-8 max-w-[1600px]'>
        <div className='flex items-center justify-between py-6 md:py-8'>
          <div>
            <Logo />
          </div>
          
          <div className='relative'>
            <button
              onClick={() => setDropdownOpen(true)}
              className='flex items-center gap-2 bg-[#C5A059] text-black px-5 py-2.5 md:px-7 md:py-3.5 rounded-full font-bold text-sm tracking-widest uppercase transition-all duration-300 hover:bg-[#b08d4a] shadow-lg'
            >
              MENU
              <Icon icon='ph:list-bold' className='text-lg md:text-xl' />
            </button>
          </div>
        </div>
      </div>

      {/* Offcanvas Menu Overlay */}
      {dropdownOpen && (
        <div className='fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] transition-opacity' />
      )}

      {/* Offcanvas Menu Panel */}
      <div
        ref={dropdownRef}
        className={`fixed top-0 right-0 h-full w-full sm:w-[450px] md:w-[500px] bg-white shadow-2xl z-[70] transform transition-transform duration-500 ease-in-out flex flex-col ${
          dropdownOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ borderTopLeftRadius: '2rem', borderBottomLeftRadius: '2rem' }}
      >
        <div className='flex-1 overflow-y-auto px-8 md:px-12 py-10 relative scrollbar-hide'>
          {/* Close Button */}
          <button
            onClick={() => setDropdownOpen(false)}
            className='absolute top-8 right-8 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-colors z-10'
          >
            <Icon icon='ph:x-bold' className='text-xl' />
          </button>

          {/* Menu Links */}
          <nav className='flex flex-col gap-6 mt-16 mb-12'>
            {headerData.map((item: any, index: number) => (
              <a
                key={index}
                href={item.href}
                onClick={() => setDropdownOpen(false)}
                className='text-[22px] md:text-[26px] text-[#1a1a1a] hover:text-[#C5A059] font-medium transition-colors w-fit'
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Social & Action Buttons */}
          <div className='flex items-center gap-4 mb-8 flex-wrap'>
            <a href='#Contact' onClick={() => setDropdownOpen(false)} className='px-6 py-2.5 bg-gray-100 rounded-full text-sm font-semibold text-[#1a1a1a] hover:bg-gray-200 transition-colors flex items-center gap-2'>
              Book Trial <Icon icon='ph:sparkle-fill' />
            </a>
            <a href='#' className='w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-[#1a1a1a] hover:bg-gray-200 transition-colors'>
              <Icon icon='ph:instagram-logo-fill' className='text-lg' />
            </a>
            <a href='#' className='w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-[#1a1a1a] hover:bg-gray-200 transition-colors'>
              <Icon icon='ph:facebook-logo-fill' className='text-lg' />
            </a>
            <a href='#' className='w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-[#1a1a1a] hover:bg-gray-200 transition-colors'>
              <Icon icon='ph:tiktok-logo-fill' className='text-lg' />
            </a>
          </div>

          {/* Banner Image */}
          <a 
            href='#Contact' 
            onClick={() => setDropdownOpen(false)}
            className='relative block w-full h-[180px] rounded-2xl overflow-hidden group shadow-lg mt-auto cursor-pointer'
          >
            <img 
              src='/banner-image.png' 
              alt='Contact Us' 
              className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
            />
            <div className='absolute inset-0 bg-gradient-to-r from-black/60 to-transparent'></div>
            <div className='absolute top-6 left-6 flex items-center gap-2 text-white'>
              <span className='text-xl font-bold tracking-wide'>Contact Us</span>
              <Icon icon='ph:arrow-up-right-bold' className='text-xl' />
            </div>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
