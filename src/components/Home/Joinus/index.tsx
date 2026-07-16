import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Button from '../../ui/Button'

gsap.registerPlugin(ScrollTrigger)

// ── Info items ───────────────────────────────────────────────────────────────
const infoItems = [
  {
    label: 'Địa chỉ',
    value: '15 Trần Phú – 02 Nguyễn Du\nHải Châu, Đà Nẵng',
    href: 'https://maps.app.goo.gl/oF3KHEfNwWbVswZa7',
    icon: (
      <svg width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
        <path d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z' />
        <circle cx='12' cy='10' r='3' />
      </svg>
    ),
  },
  {
    label: 'Giờ mở cửa',
    value: 'Thứ 2 – Thứ 6: 05:30 – 22:30\nThứ 7: 06:00 – 21:00\nChủ nhật: 07:00 – 20:00',
    href: null,
    icon: (
      <svg width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
        <circle cx='12' cy='12' r='10' />
        <polyline points='12 6 12 12 16 14' />
      </svg>
    ),
  },
  {
    label: 'Hotline',
    value: '0961 119 495',
    href: 'tel:0961119495',
    icon: (
      <svg width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
        <path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.6 1.2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' />
      </svg>
    ),
  },
]

// ── Framer stagger variants ──────────────────────────────────────────────────
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
}

// ── Main Component ───────────────────────────────────────────────────────────
const Joinus = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const bgLineRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-10%' })

  // GSAP: horizontal sweep line reveal on bg text
  useGSAP(() => {
    if (!bgLineRef.current) return
    gsap.fromTo(
      bgLineRef.current,
      { x: '-100%', opacity: 0 },
      {
        x: '0%',
        opacity: 1,
        duration: 1.4,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      }
    )
  }, [])

  return (
    <section
      id='Contact'
      ref={sectionRef}
      className='relative overflow-hidden bg-[var(--color-darkmode)] text-white py-28 md:py-36'
    >
      {/* ── Large ghost headline bg ── */}
      <div className='absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none'>
        <div
          ref={bgLineRef}
          className='font-heading font-bold uppercase text-white/[0.03] text-[clamp(6rem,18vw,16rem)] leading-none whitespace-nowrap'
        >
          VIO FITNESS
        </div>
      </div>

      {/* ── Red top accent bar ── */}
      <motion.div
        className='absolute top-0 left-0 h-[3px] bg-[#C0392B]'
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />

      <div className='relative container mx-auto max-w-7xl px-6 lg:px-12'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-28 items-start'>

          {/* ── LEFT: CTA copy ──────────────────────────────────────── */}
          <motion.div
            variants={containerVariants}
            initial='hidden'
            animate={isInView ? 'visible' : 'hidden'}
          >
            {/* Eyebrow */}
            <motion.p variants={fadeUp} className='text-[var(--color-primary)] text-xs font-bold tracking-[0.3em] uppercase mb-6'>
              Bắt đầu hành trình của bạn
            </motion.p>

            {/* Headline */}
            <motion.h2
              variants={fadeUp}
              className='font-heading font-bold uppercase text-white leading-[0.92] text-5xl md:text-6xl xl:text-7xl mb-8'
            >
              Sẵn Sàng<br />
              <span className='text-[#C0392B]'>Bứt Phá</span><br />
              Giới Hạn?
            </motion.h2>

            {/* Body */}
            <motion.p variants={fadeUp} className='text-white/55 text-lg leading-relaxed max-w-md mb-10'>
              Tham gia VIO Fitness ngay hôm nay và trải nghiệm sự khác biệt của môi trường luyện tập đẳng cấp quốc tế.{' '}
              <span className='text-white/80 font-medium'>Buổi tập thử đầu tiên hoàn toàn miễn phí.</span>
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className='flex flex-col sm:flex-row gap-4 mt-8'>
              <a href='#Contact' id='join-cta-trial'>
                <Button variant="primary">
                  Đặt lịch tập thử miễn phí
                  <span>→</span>
                </Button>
              </a>
              <a href='tel:0961119495' id='join-cta-call'>
                <Button variant="outline">
                  Gọi ngay
                </Button>
              </a>
            </motion.div>

            {/* Divider */}
            <motion.div variants={fadeIn} className='mt-16 pt-10 border-t border-white/10'>
              <p className='text-white/30 text-xs uppercase tracking-[0.25em] font-bold'>Thiết bị đối tác</p>
              <div className='mt-4 flex items-center gap-6'>
                <span className='font-heading text-white/20 text-sm font-bold uppercase tracking-widest hover:text-white/50 transition-colors cursor-default'>Panatta</span>
                <span className='text-white/10'>·</span>
                <span className='font-heading text-white/20 text-sm font-bold uppercase tracking-widest hover:text-white/50 transition-colors cursor-default'>Hammer Strength</span>
              </div>
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Info panel ───────────────────────────────────── */}
          <motion.div
            variants={containerVariants}
            initial='hidden'
            animate={isInView ? 'visible' : 'hidden'}
            className='lg:pt-8'
          >
            <motion.p variants={fadeUp} className='text-[var(--color-primary)] text-xs font-bold tracking-[0.3em] uppercase mb-8'>
              Thông tin
            </motion.p>

            <div className='space-y-0 divide-y divide-white/8'>
              {infoItems.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className='py-7 flex items-start gap-5 group'
                >
                  {/* Icon */}
                  <div className='flex-shrink-0 w-10 h-10 border border-white/10 flex items-center justify-center text-[var(--color-primary)] group-hover:border-[var(--color-primary)]/40 transition-colors duration-200'>
                    {item.icon}
                  </div>

                  {/* Text */}
                  <div>
                    <p className='text-white/35 text-xs font-bold uppercase tracking-[0.2em] mb-1.5'>
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                        className='text-white text-base leading-relaxed hover:text-[var(--color-primary)] transition-colors duration-200 whitespace-pre-line block'
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className='text-white text-base leading-relaxed whitespace-pre-line'>
                        {item.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Instagram CTA */}
            <motion.div variants={fadeUp} className='mt-10 pt-8 border-t border-white/8'>
              <a
                href='https://www.instagram.com/vio.gymfitness?igsh=MTc5djl0amFyNXBmYw=='
                target='_blank'
                rel='noreferrer'
                id='join-instagram'
                className='inline-flex items-center gap-3 text-white/40 hover:text-white transition-colors duration-200 group'
              >
                <svg width='18' height='18' viewBox='0 0 24 24' fill='currentColor'>
                  <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'/>
                </svg>
                <span className='text-sm font-medium'>@vio.gymfitness</span>
                <span className='opacity-0 group-hover:opacity-100 transition-opacity -translate-x-1 group-hover:translate-x-0 transition-transform duration-200'>↗</span>
              </a>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Joinus
