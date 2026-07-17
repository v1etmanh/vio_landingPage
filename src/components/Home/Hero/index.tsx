import { m, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import Button from '../../ui/Button'
import { useLocale } from '@/app/context/useLocale'
import { REVIEWS_CONFIG } from '@/app/config/reviews'
import { BUSINESS } from '@/app/config/business'

const Hero = () => {
  const locale = useLocale()
  const reduceMotion = useReducedMotion()
  const { scrollY } = useScroll()
  const backgroundY = useTransform(scrollY, [0, 600], ['0%', '15%'])

  return (
    <section
      id='Home'
      className='relative w-full min-h-screen flex items-center overflow-hidden -mt-[80px]'
    >
      {/* ── Full-bleed Background Photo ── */}
      <m.div
        className='absolute inset-0 w-full h-full z-0'
        style={reduceMotion ? undefined : { y: backgroundY }}
      >
        <img
          src='/images/Bản sao của KSP02428-HDR-Edit.jpg'
          alt={locale.hero.alt}
          className='w-full h-full object-cover object-center scale-105'
        />
        {/* Dark gradient from bottom-up for text readability */}
        <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20' />
        {/* Subtle left vignette for better text contrast */}
        <div className='absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent' />
      </m.div>

      {/* ── Content ── */}
      <div className='relative z-10 w-full pt-[80px]'>
        <div className='container mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 py-20 lg:py-32'>
          <div className='max-w-2xl'>

            {/* Eyebrow */}
            <m.p
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='text-[var(--color-primary)] text-xs sm:text-sm font-bold tracking-[0.15em] sm:tracking-[0.25em] uppercase mb-4'
            >
              {BUSINESS.address}
            </m.p>

            {/* Headline */}
            <m.h1
              initial={reduceMotion ? false : { opacity: 0, y: 30 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className='text-white font-heading text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase leading-[1.05] tracking-tight mb-6'
            >
              {locale.hero.titleBefore} <br />
              <span className='text-[var(--color-primary)]'>{locale.hero.titleAccent}</span> <br />
              {locale.hero.titleAfter}
            </m.h1>

            {/* Subheadline */}
            <m.p
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className='text-white/80 text-base sm:text-lg md:text-xl font-light leading-relaxed mb-10 max-w-lg border-l-4 border-[var(--color-primary)] pl-5'
            >
              {locale.hero.description}
            </m.p>

            {/* CTAs */}
            <m.div
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className='hero-cta relative mt-10 sm:mt-12 w-full'
            >
              <div className='flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start'>
                {/* Primary CTA */}
                <a href='#TrialForm' id='hero-cta-primary'>
                  <Button variant="primary">
                    {locale.hero.primary}
                    <span className='text-lg'>→</span>
                  </Button>
                </a>
                
                {/* Secondary CTA */}
                <a href='#Services' id='hero-cta-secondary'>
                  <Button variant="outline">
                    {locale.hero.secondary}
                  </Button>
                </a>
              </div>
            </m.div>

            {/* Trust row */}
            <m.div
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={reduceMotion ? undefined : { opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.85 }}
              className='flex flex-row items-center justify-center lg:justify-start gap-2 sm:gap-4 text-white/70 text-[10px] sm:text-sm mt-10 whitespace-nowrap w-full lg:w-auto overflow-hidden'
            >
              {/* Stars */}
              <div className='flex items-center gap-1 sm:gap-1.5'>
                <div className='flex text-yellow-400 text-xs sm:text-base'>
                  {'★★★★★'.split('').map((s, i) => <span key={i}>{s}</span>)}
                </div>
                <span className='text-white font-semibold ml-1 sm:ml-0'>{REVIEWS_CONFIG.score}</span>
                <span className='text-white/60 hidden sm:inline'>· {REVIEWS_CONFIG.countLabel}</span>
              </div>

              <span className='text-white/30'>|</span>

              {/* Google badge */}
              <div className='flex items-center gap-1 sm:gap-1.5'>
                <svg className="w-3 h-3 sm:w-4 sm:h-4" viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z' fill='#4285F4' />
                  <path d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z' fill='#34A853' />
                  <path d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z' fill='#FBBC05' />
                  <path d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z' fill='#EA4335' />
                </svg>
                <span className='text-white/70'>{locale.hero.google}</span>
              </div>

              <span className='text-white/30'>|</span>

              {/* Facebook badge */}
              <div className='flex items-center gap-1 sm:gap-1.5'>
                <svg className="w-3 h-3 sm:w-4 sm:h-4" viewBox='0 0 24 24' fill='#1877F2' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' />
                </svg>
                <span className='text-white/70'>{locale.hero.facebook}</span>
              </div>
            </m.div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
