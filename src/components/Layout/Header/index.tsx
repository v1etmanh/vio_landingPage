import { Key, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { HeaderItem } from '@/app/types/menu'
import Logo from './Logo'
import HeaderLink from './Navigation/HeaderLink'
import MobileHeaderLink from './Navigation/MobileHeaderLink'
import { headerData } from '@/app/utils/data'
import Button from '../../ui/Button'
import { Icon } from '@iconify/react'
import { useLanguage } from '@/app/context/useLanguage'
import { BUSINESS } from '@/app/config/business'

const Header: React.FC = () => {
  const { language, setLanguage } = useLanguage()
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [sticky, setSticky] = useState(false)

  const mobileMenuRef = useRef<HTMLDivElement>(null)

  const handleScroll = () => {
    setSticky(window.scrollY >= 80)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        navbarOpen
      ) {
        setNavbarOpen(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      window.removeEventListener('scroll', handleScroll)
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
      className={`fixed top-0 z-40 w-full transition-colors duration-500 border-b ${
        sticky ? 'shadow-sm bg-white/85 backdrop-blur-md border-black/5' : 'shadow-none border-transparent bg-transparent'
      }`}>
      <div className='lg:py-0 py-1'>
        <div className='container mx-auto max-w-(--breakpoint-xl) flex items-center justify-between px-4'>
          <div
            className={`pr-16 lg:border-r border-black/5 duration-300 ${
              sticky ? 'py-2' : 'py-3'
            }`}>
            <Logo />
          </div>
          <nav className='hidden lg:flex grow items-center gap-8 justify-center'>
            {headerData.map((item, index) => (
              <HeaderLink key={index} item={item} />
            ))}
          </nav>
          <div
            className={`flex items-center gap-3 pl-8 lg:pl-16 lg:border-l border-black/5 duration-300 ${
              sticky ? 'py-2' : 'py-3'
            }`}>
            <a href={`tel:${BUSINESS.phone}`} className="hidden lg:flex items-center gap-2 text-darkmode hover:text-primary font-semibold transition-colors">
              <Icon icon="tabler:phone-filled" className="text-xl" />
              <span className="text-lg">{BUSINESS.phoneDisplay}</span>
            </a>
            <Button
              variant="secondary"
              size="sm"
              className='hidden lg:inline-flex'
              onClick={() => document.getElementById('TrialForm')?.scrollIntoView({ behavior: 'smooth' })}>
              Đăng ký tập thử
            </Button>
            <button
              type='button'
              aria-label='Chuyển ngôn ngữ'
              onClick={() => setLanguage(language === 'vi' ? 'en' : 'vi')}
              className='hidden lg:inline-flex min-w-12 items-center justify-center border border-black/15 px-2 py-2 text-xs font-bold uppercase text-darkmode transition hover:border-primary hover:text-primary'
            >
              {language === 'vi' ? 'EN' : 'VI'}
            </button>
            
            {/* Mobile Pinned Hotline */}
            <a href={`tel:${BUSINESS.phone}`} className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white shadow-md">
              <Icon icon="tabler:phone-filled" className="text-lg" />
            </a>

            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className='block lg:hidden p-2 rounded-lg'
              aria-label='Toggle mobile menu'>
              <span className='block w-6 h-0.5 bg-darkmode'></span>
              <span className='block w-6 h-0.5 bg-darkmode mt-1.5'></span>
              <span className='block w-6 h-0.5 bg-darkmode mt-1.5'></span>
            </button>
          </div>
        </div>
        {navbarOpen && (
          <div className='fixed top-0 left-0 w-full h-full bg-black/50 z-40' />
        )}
        <div
          ref={mobileMenuRef}
          className={`lg:hidden fixed top-0 right-0 h-full w-full bg-darkmode shadow-lg transform transition-transform duration-300 max-w-xs ${
            navbarOpen ? 'translate-x-0' : 'translate-x-full'
          } z-50`}>
          <div className='flex items-center justify-between p-4'>
            <h2 className='text-lg font-bold text-white'>
              <Logo />
            </h2>
            <button
              onClick={() => setNavbarOpen(false)}
              className="bg-[url('/images/closed.svg')] bg-no-repeat bg-contain w-5 h-5 absolute top-0 right-0 mr-8 mt-8 dark:invert"
              aria-label='Close menu Modal'></button>
          </div>
          <nav className='flex flex-col items-start p-4'>
            {headerData.map(
              (item: HeaderItem, index: Key | null | undefined) => (
                <MobileHeaderLink key={index} item={item} onNavigate={() => setNavbarOpen(false)} />
              )
            )}
            <div className='mt-8 w-full'>
              <Button
                variant="secondary"
                size="md"
                className='w-full'
                onClick={() => {
                  document.getElementById('TrialForm')?.scrollIntoView({ behavior: 'smooth' })
                  setNavbarOpen(false)
                }}>
                Đăng ký tập thử
              </Button>
              <button
                type='button'
                onClick={() => setLanguage(language === 'vi' ? 'en' : 'vi')}
                className='mt-4 w-full border border-white/20 px-4 py-3 text-sm font-bold uppercase text-white'
              >
                {language === 'vi' ? 'English' : 'Tiếng Việt'}
              </button>
            </div>
          </nav>
        </div>
      </div>
    </motion.header>
  )
}

export default Header
