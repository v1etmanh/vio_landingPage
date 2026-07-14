import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'

/**
 * IntroScreen — Full-screen white opening animation
 * Shows logo + "VIO FITNESS" blur-in, then sweeps out to reveal the site.
 * Plays once per session (sessionStorage key).
 */
const IntroScreen = ({ onComplete }: { onComplete: () => void }) => {
  const overlayRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const [textVisible, setTextVisible] = useState(false)
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    // Phase 1: small delay then show text
    const t1 = setTimeout(() => setTextVisible(true), 300)

    // Phase 2: after text animates in (~1.8s), sweep out
    const t2 = setTimeout(() => {
      setLeaving(true)

      if (!overlayRef.current || !lineRef.current) return

      // Red line sweeps across before the panel lifts
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0, transformOrigin: 'left center' },
        { scaleX: 1, duration: 0.5, ease: 'expo.out', delay: 0.1 }
      )

      // Panel slides up
      gsap.to(overlayRef.current, {
        yPercent: -105,
        duration: 0.9,
        ease: 'expo.inOut',
        delay: 0.45,
        onComplete: () => onComplete(),
      })
    }, 2800)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [onComplete])

  // Word-by-word blur keyframes (manual — no IntersectionObserver needed here)
  const words = ['VIO', 'FITNESS']
  const wordVariants = {
    hidden: { filter: 'blur(14px)', opacity: 0, y: -30 },
    visible: (i: number) => ({
      filter: 'blur(0px)',
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: 0.1 + i * 0.18,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
    exit: (i: number) => ({
      filter: 'blur(12px)',
      opacity: 0,
      y: 20,
      transition: { duration: 0.3, delay: i * 0.06, ease: 'easeIn' },
    }),
  }

  const subtitleVariants = {
    hidden: { opacity: 0, letterSpacing: '0.1em' },
    visible: {
      opacity: 1,
      letterSpacing: '0.4em',
      transition: { duration: 0.8, delay: 0.55, ease: 'easeOut' },
    },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  }

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.85, filter: 'blur(8px)' },
    visible: {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      transition: { duration: 0.7, delay: 0.0, ease: [0.22, 1, 0.36, 1] },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      filter: 'blur(6px)',
      transition: { duration: 0.25 },
    },
  }

  return (
    <div
      ref={overlayRef}
      className='fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center overflow-hidden'
      style={{ willChange: 'transform' }}
    >
      {/* Red accent bar at bottom — sweeps before exit */}
      <div
        ref={lineRef}
        className='absolute bottom-0 left-0 right-0 h-[3px] bg-[#C0392B] scale-x-0 origin-left'
      />

      {/* Content */}
      <AnimatePresence>
        {textVisible && (
          <motion.div
            className='flex flex-col items-center gap-6'
            initial='hidden'
            animate='visible'
            exit='exit'
          >
            {/* Logo */}
            <motion.img
              src='/logo.png'
              alt='VIO Fitness Logo'
              variants={logoVariants}
              className='w-20 h-20 object-contain'
            />

            {/* VIO FITNESS — word by word blur */}
            <div className='flex items-center gap-4 overflow-hidden'>
              {words.map((word, i) => (
                <motion.span
                  key={word}
                  custom={i}
                  variants={wordVariants}
                  className='font-heading font-bold uppercase text-[var(--color-darkmode)] text-6xl md:text-7xl lg:text-8xl leading-none tracking-tighter select-none'
                  style={{ display: 'inline-block', willChange: 'transform, filter, opacity' }}
                >
                  {word}
                </motion.span>
              ))}
            </div>

            {/* Tagline */}
            <motion.p
              variants={subtitleVariants}
              className='text-[var(--color-primary)] text-xs font-bold uppercase tracking-[0.35em] select-none'
            >
              Gym &amp; Fitness · Đà Nẵng
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Thin decorative vertical rule */}
      <motion.div
        className='absolute left-1/2 bottom-16 -translate-x-1/2 w-px bg-black/10'
        initial={{ height: 0 }}
        animate={textVisible ? { height: 48 } : { height: 0 }}
        transition={{ duration: 0.6, delay: 0.8, ease: 'easeOut' }}
      />
    </div>
  )
}

export default IntroScreen
