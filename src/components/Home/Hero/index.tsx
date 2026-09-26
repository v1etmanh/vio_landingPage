import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import Button from '../../ui/Button'
import type { SiteLanguage } from '../../../App'

interface HeroProps {
  language: SiteLanguage
}

const Hero: React.FC<HeroProps> = ({ language }) => {
  const heroImage = '/ChatGPT%20Image%20Sep%2020,%202026,%2002_57_19%20PM.png'
  const content = language === 'vi'
    ? {
        location: '15 TRẦN PHÚ • HẢI CHÂU • ĐÀ NẴNG',
        headline: ['PHÒNG GYM', 'ĐẲNG CẤP QUỐC TẾ', 'GIỮA LÒNG ĐÀ NẴNG'],
        benefits: ['Phòng tập dành cho người mới', 'Trang bị đầy đủ máy móc hiện đại, cao cấp', 'Đội ngũ tận tâm - thân thiện - chuyên nghiệp'],
        explore: 'Khám phá dịch vụ',
        book: 'Đặt lịch ngay',
        instagram: 'Instagram',
        facebook: 'Facebook',
      }
    : {
        location: '15 TRAN PHU • HAI CHAU • DA NANG',
        headline: ['A WORLD-CLASS GYM', 'IN THE HEART', 'OF DA NANG!'],
        benefits: ['1-on-1 Personal Training', 'Fully equipped with modern, top-tier machines', 'Dedicated - Friendly - Professional staff'],
        explore: 'Explore services',
        book: 'Book now',
        instagram: 'Instagram',
        facebook: 'Facebook',
      }

  return (
    <section
      id='Home'
      className='relative mt-[80px] flex min-h-[calc(100dvh-80px)] w-full items-center overflow-hidden'
    >
      {/* Single supplied image across the full hero. */}
      <div className='absolute inset-0 z-0 overflow-hidden bg-black'>
        <img src={heroImage} alt='' className='h-full w-full object-cover object-center' fetchPriority='high' />
        <div className='absolute inset-y-0 left-0 w-[78%] bg-gradient-to-r from-black/90 via-black/68 to-transparent sm:w-[66%] lg:w-[52%]' />
        <div className='absolute inset-x-0 bottom-0 h-[48%] bg-gradient-to-t from-black/70 via-black/20 to-transparent' />
        <div className='absolute inset-0 flex items-center justify-end pr-[5%] lg:pr-[8%] pointer-events-none'>
          <span
            className='select-none font-heading text-[38vw] font-black leading-none tracking-tighter mix-blend-overlay opacity-70 md:text-[29vw] xl:text-[30vw]'
            style={{ color: 'transparent', WebkitTextStroke: '3px rgba(255, 255, 255, 0.72)' }}
          >
            VIO
          </span>
        </div>
      </div>

      {/* ── Content ── */}
      <div className='relative z-10 w-full'>
        <div className='container mx-auto max-w-[1700px] px-4 sm:px-6 lg:px-12 py-12 lg:py-24'>

          <div className='grid grid-cols-1 xl:grid-cols-2 gap-12 lg:gap-8 items-center'>

            {/* LEFT COLUMN: TEXT CONTENT */}
            <div className='max-w-2xl'>
              {/* Eyebrow */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className='text-white/80 text-xs sm:text-sm font-bold tracking-[0.15em] uppercase mb-4 flex items-center gap-2'
              >
                {content.location}
              </motion.p>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35 }}
                className='uppercase leading-[1.05] tracking-tight mb-8'
              >
                <div className='text-white font-black text-[48px] sm:text-[60px] md:text-[72px] lg:text-[80px] mb-2 leading-none'>
                  {content.headline[0]}
                </div>
                <div className='text-[#B79B6C] font-semibold text-[36px] sm:text-[46px] md:text-[54px] lg:text-[60px] leading-tight'>
                  {content.headline[1]}
                </div>
                <div className='text-white font-semibold text-[36px] sm:text-[46px] md:text-[54px] lg:text-[60px] leading-tight'>
                  {content.headline[2]}
                </div>
              </motion.h1>

              {/* Subheadline List - Hidden on mobile for cleaner look */}
              <motion.ul
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className='hidden md:flex text-white/90 text-[18px] md:text-[22px] font-light leading-[1.7] mb-10 max-w-[520px] flex-col gap-3'
              >
                <li className="flex items-start gap-3">
                  <Icon icon="ph:check-circle-fill" className="text-[#B79B6C] text-2xl shrink-0 mt-1" />
                  <span>{content.benefits[0]}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon icon="ph:check-circle-fill" className="text-[#B79B6C] text-2xl shrink-0 mt-1" />
                  <span>{content.benefits[1]}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon icon="ph:check-circle-fill" className="text-[#B79B6C] text-2xl shrink-0 mt-1" />
                  <span>{content.benefits[2]}</span>
                </li>
              </motion.ul>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.65 }}
                className='flex flex-col sm:flex-row items-center gap-4'
              >
                <Button variant="outline" size="lg" className="w-full sm:w-auto h-[56px] bg-transparent border border-white text-white hover:bg-white/10" onClick={() => document.getElementById('Services')?.scrollIntoView({ behavior: 'smooth' })}>
                  {content.explore}
                  <Icon icon="tabler:arrow-right" className="text-xl" />
                </Button>
                <Button variant="gold" size="lg" className="w-full sm:w-auto text-sm uppercase tracking-wider h-[56px]" onClick={() => document.getElementById('Contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  {content.book}
                  <Icon icon="tabler:arrow-right" className="text-xl" />
                </Button>
              </motion.div>

              {/* Rating block - Restored for social proof on mobile */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.85 }}
                className='flex flex-wrap items-center gap-x-3 md:gap-x-4 gap-y-2 text-white/80 mt-8 md:mt-12'
              >
                <div className='flex items-center gap-1 md:gap-2'>
                  <div className='flex text-[#B79B6C] text-lg md:text-xl'>
                    {'★★★★★'.split('').map((s, i) => <span key={i}>{s}</span>)}
                  </div>
                  <span className='text-white font-bold text-base md:text-lg'>5.0</span>
                </div>
                
                <div className="text-xs md:text-sm font-light text-white/60">
                  (99+ đánh giá)
                </div>

                <div className='hidden sm:block text-white/20'>|</div>

                <div className='flex items-center gap-3 md:gap-4 w-full sm:w-auto mt-2 sm:mt-0'>
                  <a href='https://www.instagram.com/vio.gymfitness/' target='_blank' rel='noreferrer' className='flex items-center gap-1.5 transition-colors hover:text-white' aria-label='Instagram VIO Fitness'>
                    <Icon icon="mdi:instagram" className="text-base md:text-lg" />
                    <span className='text-xs md:text-sm font-semibold'>{content.instagram}</span>
                  </a>
                  <span className='text-white/20'>|</span>
                  <a href='https://www.facebook.com/vio.gymfitness' target='_blank' rel='noreferrer' className='flex items-center gap-1.5 transition-colors hover:text-white' aria-label='Facebook VIO Fitness'>
                    <Icon icon="mdi:facebook" className="text-base md:text-lg" />
                    <span className='text-xs md:text-sm font-semibold'>{content.facebook}</span>
                  </a>
                </div>
              </motion.div>
            </div>



          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
