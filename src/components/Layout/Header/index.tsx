import { Key, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { HeaderItem } from '@/app/types/menu'
import Logo from './Logo'
import HeaderLink from './Navigation/HeaderLink'
import MobileHeaderLink from './Navigation/MobileHeaderLink'
import { headerData } from '@/app/utils/data'
import Button from '../../ui/Button'
import { Icon } from '@iconify/react'
import type { SiteLanguage } from '../../../App'

interface HeaderProps {
  language: SiteLanguage
  onLanguageChange: (language: SiteLanguage) => void
}

const Header: React.FC<HeaderProps> = ({ language, onLanguageChange }) => {
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

  const localizedHeaderData = headerData.map((item) => ({
    ...item,
    label: language === 'en' ? item.labelEn ?? item.label : item.label,
  }))

  const copy = language === 'vi'
    ? { trial: 'Đăng ký tập thử', menu: 'Mở menu', close: 'Đóng menu' }
    : { trial: 'Book a trial', menu: 'Open menu', close: 'Close menu' }

  const socialLinks = [
    { href: 'https://www.facebook.com/vio.gymfitness', icon: 'mdi:facebook', label: 'Facebook VIO Fitness' },
    { href: 'https://www.instagram.com/vio.gymfitness/', icon: 'mdi:instagram', label: 'Instagram VIO Fitness' },
    { href: 'https://www.tiktok.com/@viofitness.dn', icon: 'ic:baseline-tiktok', label: 'TikTok VIO Fitness' },
    { href: 'tel:0961119495', icon: 'tabler:phone-filled', label: language === 'vi' ? 'Gọi VIO Fitness' : 'Call VIO Fitness' },
  ]

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
          <div className='lg:pr-8 py-2'>
            <Logo />
          </div>
          <nav className='hidden lg:flex grow items-center gap-8 justify-center'>
            {localizedHeaderData.map((item, index) => (
              <HeaderLink key={index} item={item} />
            ))}
          </nav>
          <div className='flex items-center gap-2 sm:gap-3 lg:pl-8 py-2'>
            <div className='hidden lg:flex items-center gap-1'>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
                  aria-label={social.label}
                  title={social.label}
                  className='p-2 text-white/80 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]'
                >
                  <Icon icon={social.icon} className='text-lg' />
                </a>
              ))}
            </div>
            <div className='hidden sm:flex items-center border border-white/20 text-[10px] font-bold tracking-[0.12em] text-white'>
              <button
                type='button'
                onClick={() => onLanguageChange('vi')}
                aria-pressed={language === 'vi'}
                className={`px-2.5 py-2 transition-colors ${language === 'vi' ? 'bg-[var(--color-primary)] text-white' : 'hover:bg-white/10'}`}
              >
                VIE
              </button>
              <button
                type='button'
                onClick={() => onLanguageChange('en')}
                aria-pressed={language === 'en'}
                className={`px-2.5 py-2 transition-colors ${language === 'en' ? 'bg-[var(--color-primary)] text-white' : 'hover:bg-white/10'}`}
              >
                ENG
              </button>
            </div>
            <div className="hidden lg:block">
              <Button
                variant="gold"
                size="sm"
                className='!bg-[var(--color-primary)] hover:!bg-[#746243]'
                onClick={() => document.getElementById('Registration')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {copy.trial}
              </Button>
            </div>
            
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className='block lg:hidden p-2 rounded-lg shrink-0'
              aria-label={copy.menu}>
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
              aria-label={copy.close}></button>
          </div>
          <nav className='flex flex-col items-start p-4'>
            {localizedHeaderData.map(
              (item: HeaderItem, index: Key | null | undefined) => (
                <MobileHeaderLink key={index} item={item} />
              )
            )}
            <div className='mt-6 flex w-full items-center border border-white/20 text-xs font-bold tracking-[0.12em] text-white'>
              <button type='button' onClick={() => onLanguageChange('vi')} aria-pressed={language === 'vi'} className={`flex-1 py-3 ${language === 'vi' ? 'bg-[var(--color-primary)]' : ''}`}>VIE</button>
              <button type='button' onClick={() => onLanguageChange('en')} aria-pressed={language === 'en'} className={`flex-1 py-3 ${language === 'en' ? 'bg-[var(--color-primary)]' : ''}`}>ENG</button>
            </div>
            <div className='mt-5 flex items-center gap-3 text-white'>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
                  aria-label={social.label}
                  className='p-2 text-white/80 transition-colors hover:text-white'
                >
                  <Icon icon={social.icon} className='text-xl' />
                </a>
              ))}
            </div>
            <div className='mt-8 w-full'>
              <Button
                variant="gold"
                size="md"
                className="w-full justify-center"
                onClick={() => {
                  document.getElementById('Registration')?.scrollIntoView({ behavior: 'smooth' })
                  setNavbarOpen(false)
                }}>
                {copy.trial}
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </motion.header>
  )
}

export default Header
