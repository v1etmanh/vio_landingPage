import { Key, useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HeaderItem } from '@/app/types/menu'
import Logo from './Logo'
import HeaderLink from './Navigation/HeaderLink'
import MobileHeaderLink from './Navigation/MobileHeaderLink'
import { headerData } from '@/app/utils/data'
import Button from '../../ui/Button'
import { Icon } from '@iconify/react'

const Header: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  const handleClickOutside = (event: MouseEvent) => {
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target as Node) &&
      navbarOpen
    ) {
      setNavbarOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [navbarOpen])

  useEffect(() => {
    if (navbarOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [navbarOpen])

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 z-50 w-full shadow-md bg-[#1A1A1A] border-b border-white/10">
      <div className='lg:py-0 py-1'>
        <div className='container mx-auto max-w-[1600px] flex items-center justify-between px-4'>
          <div className='lg:pr-16 py-2'>
            <Logo />
          </div>
          <nav className='hidden lg:flex grow items-center gap-8 justify-center'>
            {headerData.map((item, index) => (
              <HeaderLink key={index} item={item} />
            ))}
          </nav>
          <div className='flex items-center gap-2 sm:gap-4 lg:pl-16 py-2'>
            <a href="tel:0961119495" className="hidden lg:flex items-center gap-2 text-white/80 hover:text-white font-semibold transition-colors">
              <Icon icon="tabler:phone-filled" className="text-xl" />
              <span className="text-lg tracking-wider">0961119495</span>
            </a>
            <div className="hidden lg:block">
              <Button
                variant="gold"
                size="sm"
                onClick={() => document.getElementById('Contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Đăng ký tập thử
              </Button>
            </div>
            
            {/* Mobile Pinned Hotline */}
            <a href="tel:0961119495" className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-[#C5A059] text-white shadow-md shrink-0">
              <Icon icon="tabler:phone-filled" className="text-lg" />
            </a>

            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className='block lg:hidden p-2 rounded-lg shrink-0'
              aria-label='Toggle mobile menu'>
              <span className='block w-6 h-[2px] bg-white'></span>
              <span className='block w-6 h-[2px] bg-white mt-1.5'></span>
              <span className='block w-6 h-[2px] bg-white mt-1.5'></span>
            </button>
          </div>
        </div>
        {navbarOpen && (
          <div className='fixed top-0 left-0 w-full h-full bg-black/80 backdrop-blur-sm z-40' />
        )}
        <div
          ref={mobileMenuRef}
          className={`lg:hidden fixed top-0 right-0 h-full w-full bg-black border-l border-white/10 shadow-2xl transform transition-transform duration-300 max-w-xs ${
            navbarOpen ? 'translate-x-0' : 'translate-x-full'
          } z-50`}>
          <div className='flex items-center justify-between p-4 border-b border-white/10'>
            <h2 className='text-lg font-bold text-white'>
              <Logo />
            </h2>
            <button
              onClick={() => setNavbarOpen(false)}
              className="bg-[url('/images/closed.svg')] bg-no-repeat bg-contain w-5 h-5 dark:invert opacity-70 hover:opacity-100 transition-opacity"
              aria-label='Close menu Modal'></button>
          </div>
          <nav className='flex flex-col items-start p-4'>
            {headerData.map(
              (item: HeaderItem, index: Key | null | undefined) => (
                <MobileHeaderLink key={index} item={item} />
              )
            )}
            <div className='mt-8 w-full'>
              <Button
                variant="gold"
                size="md"
                className="w-full justify-center"
                onClick={() => {
                  document.getElementById('Contact')?.scrollIntoView({ behavior: 'smooth' })
                  setNavbarOpen(false)
                }}>
                Đăng ký tập thử
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </motion.header>
  )
}

export default Header
