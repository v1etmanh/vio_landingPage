import { motion, useScroll, useTransform } from 'framer-motion'
import { Icon } from '@iconify/react'

const Hero = () => {
  const { scrollY } = useScroll()
  const backgroundY = useTransform(scrollY, [0, 600], ['0%', '15%'])

  return (
    <section
      id='Home'
      className='relative w-full min-h-[100vh] flex items-center overflow-hidden -mt-[80px]'
    >
      {/* ── Full-bleed Background Photo ── */}
      <motion.div
        className='absolute inset-0 w-full h-full z-0 pointer-events-none'
        style={{ y: backgroundY }}
      >
        {/* Base bright image */}
        <img
          src='/images/KSP02404-HDR-Edit.jpg'
          alt='VIO Fitness interior'
          className='absolute inset-0 w-full h-full object-cover object-center scale-105'
        />

        {/* MULTIPLY MASK: Darkens everything EXCEPT the white text, which becomes fully transparent (showing the bright image) */}
        <div className='absolute inset-0 bg-[#555555]' style={{ mixBlendMode: 'multiply' }}>
          {/* Aligned to the right but spaced away from the edge, with increased letter spacing */}
          <h1 className='absolute right-[5%] lg:right-[8%] top-1/2 -translate-y-1/2 text-white font-black text-[28vw] md:text-[24vw] xl:text-[26vw] tracking-[0.15em] select-none leading-none opacity-100'>
            VIO
          </h1>
        </div>

        {/* 90deg Gradient Overlay */}
        <div className='absolute inset-0 pointer-events-none' style={{ background: 'linear-gradient(90deg, rgba(0,0,0,0.70), rgba(0,0,0,0.45), rgba(0,0,0,0.15))' }} />
      </motion.div>

      {/* ── Content ── */}
      <div className='relative z-10 w-full pt-[80px]'>
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
                15 TRẦN PHÚ &bull; HẢI CHÂU &bull; ĐÀ NẴNG
              </motion.p>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35 }}
                className='uppercase leading-[1.05] tracking-tight mb-8'
              >
                <div className='text-white font-black text-[48px] sm:text-[60px] md:text-[72px] lg:text-[80px] mb-2 leading-none'>
                  PHÒNG GYM
                </div>
                <div className='text-[#B79B6C] font-semibold text-[36px] sm:text-[46px] md:text-[54px] lg:text-[60px] leading-tight'>
                  Chuẩn Quốc Tế
                </div>
                <div className='text-white font-semibold text-[36px] sm:text-[46px] md:text-[54px] lg:text-[60px] leading-tight'>
                  Giữa Lòng Đà Nẵng
                </div>
              </motion.h1>

              {/* Subheadline List */}
              <motion.ul
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className='text-white/90 text-[18px] md:text-[22px] font-light leading-[1.7] mb-10 max-w-[520px] flex flex-col gap-3'
              >
                <li className="flex items-start gap-3">
                  <Icon icon="ph:check-circle-fill" className="text-[#B79B6C] text-2xl shrink-0 mt-1" />
                  <span>PT cá nhân hóa 1-1 cùng HLV chuyên nghiệp</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon icon="ph:check-circle-fill" className="text-[#B79B6C] text-2xl shrink-0 mt-1" />
                  <span>Trang bị toàn bộ máy <strong>Panatta</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon icon="ph:check-circle-fill" className="text-[#B79B6C] text-2xl shrink-0 mt-1" />
                  <span>Cùng dàn máy <strong>Hammer Strength</strong> nhập khẩu</span>
                </li>
              </motion.ul>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.65 }}
                className='flex flex-col sm:flex-row items-center gap-4'
              >
                {/* Primary CTA */}
                <a href='#Contact' className="w-full sm:w-auto">
                  <button className='w-full sm:w-auto h-[56px] px-[36px] bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold rounded-[10px] flex items-center justify-center gap-2 transition-colors uppercase tracking-wider text-sm'>
                    <Icon icon="tabler:calendar-event" className="text-xl" />
                    ĐẶT LỊCH NGAY
                  </button>
                </a>

                {/* Secondary CTA */}
                <a href='#Services' className="w-full sm:w-auto">
                  <button className='w-full sm:w-auto h-[56px] px-[36px] bg-transparent border border-white text-white hover:bg-white/10 font-bold rounded-[10px] flex items-center justify-center gap-2 transition-colors'>
                    Khám phá dịch vụ
                    <Icon icon="tabler:arrow-right" className="text-xl" />
                  </button>
                </a>
              </motion.div>

              {/* Rating block */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.85 }}
                className='flex flex-wrap items-center gap-x-4 gap-y-2 text-white/80 mt-12'
              >
                <div className='flex items-center gap-2'>
                  <div className='flex text-[#B79B6C] text-xl'>
                    {'★★★★★'.split('').map((s, i) => <span key={i}>{s}</span>)}
                  </div>
                  <span className='text-white font-bold text-lg'>5.0</span>
                </div>
                
                <div className="text-sm font-light text-white/60">
                  (99+ đánh giá)
                </div>

                <div className='hidden sm:block text-white/20'>|</div>

                <div className='flex items-center gap-4'>
                  <div className='flex items-center gap-1.5'>
                    <Icon icon="logos:google-icon" className="text-lg" />
                    <span className='text-sm font-semibold'>Google</span>
                  </div>
                  <span className='text-white/20'>|</span>
                  <div className='flex items-center gap-1.5'>
                    <Icon icon="logos:facebook" className="text-lg" />
                    <span className='text-sm font-semibold'>Facebook</span>
                  </div>
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
