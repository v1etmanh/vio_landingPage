import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface Plan {
  label: string        // tier label (eyebrow)
  name: string         // tier name (big)
  price: string
  note: string         // e.g. "/tháng" or "Liên hệ"
  features: string[]
  isPopular: boolean
  cta: string
  href: string
}

const plans: Plan[] = [
  {
    label: 'Gói',
    name: 'Cơ Bản',
    price: 'Liên hệ',
    note: 'để biết giá',
    features: [
      'Tập không giới hạn giờ',
      'Tủ đồ thông minh cá nhân',
      'Khu vực cardio & máy Panatta',
      'Phòng xông hơi (Sauna)',
      'Wi-Fi tốc độ cao',
      'Hỗ trợ từ đội ngũ tại phòng gym',
    ],
    isPopular: false,
    cta: 'Đăng ký ngay',
    href: '#Contact',
  },
  {
    label: 'Gói',
    name: 'PT Cá Nhân',
    price: 'Liên hệ',
    note: 'để biết giá',
    features: [
      'Tất cả quyền lợi gói Cơ Bản',
      'HLV cá nhân đồng hành 1-1',
      'Lịch tập được thiết kế riêng',
      'Theo dõi chỉ số cơ thể định kỳ',
      'Tư vấn dinh dưỡng cùng PT',
      'Khu boxing & functional area',
      'Ưu tiên đặt lịch giờ cao điểm',
    ],
    isPopular: true,
    cta: 'Đăng ký ngay',
    href: '#Contact',
  },
  {
    label: 'Gói',
    name: 'VIP Trị Liệu',
    price: 'Liên hệ',
    note: 'để biết giá',
    features: [
      'Tất cả quyền lợi gói PT Cá Nhân',
      'Liệu trình phục hồi & trị liệu',
      'Massage therapy chuyên sâu',
      'Khu Recovery Zone độc quyền',
      'Protein bar & smoothie miễn phí',
      'Locker VIP khoá điện tử riêng',
      'Ưu đãi đặc biệt cho thành viên lâu năm',
    ],
    isPopular: false,
    cta: 'Đăng ký ngay',
    href: '#Contact',
  },
]

const CheckIcon = () => (
  <svg
    className='flex-shrink-0 w-4 h-4 mt-0.5'
    viewBox='0 0 16 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M3 8L6.5 11.5L13 4.5'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

const Pricing = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const redLineRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    // Header fade-up
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1, y: 0, duration: 0.9, ease: 'expo.out',
        scrollTrigger: { trigger: headerRef.current, start: 'top 85%' }
      }
    )

    // Red line sweep
    gsap.fromTo(
      redLineRef.current,
      { scaleX: 0, transformOrigin: 'left center' },
      {
        scaleX: 1, duration: 1, ease: 'expo.out',
        scrollTrigger: { trigger: headerRef.current, start: 'top 75%' }
      }
    )

    // Cards stagger
    const cards = cardsRef.current?.querySelectorAll('.pricing-card')
    if (cards) {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 60, scale: 0.97 },
        {
          opacity: 1, y: 0, scale: 1,
          duration: 0.75, ease: 'expo.out',
          stagger: 0.12,
          scrollTrigger: { trigger: cardsRef.current, start: 'top 80%' }
        }
      )
    }
  }, { scope: sectionRef })

  return (
    <section id='Pricing' className='py-24 relative z-10' ref={sectionRef}>
      <div className='container mx-auto max-w-7xl px-6 lg:px-12'>

        {/* Section Header */}
        <div className='text-center mb-16 relative' ref={headerRef}>
          {/* Animated red underline */}
          <div ref={redLineRef} className='absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-24 bg-[#C0392B] scale-x-0 origin-left mb-[-20px]' />
          <p className='text-[var(--color-primary)] text-sm font-bold tracking-[0.25em] uppercase mb-4'>
            Bảng Giá
          </p>
          <h2 className='font-heading text-5xl md:text-6xl font-bold uppercase text-[var(--color-darkmode)] leading-tight'>
            Chọn Gói Tập <br className='hidden md:block' />
            Phù Hợp Với Bạn
          </h2>
          <p className='mt-5 text-[var(--color-darkmode)]/60 text-lg max-w-xl mx-auto'>
            Mọi gói đều bao gồm đầy đủ cơ sở vật chất 3 tầng. Liên hệ trực tiếp để nhận tư vấn và giá ưu đãi tốt nhất.
          </p>
        </div>

        {/* Cards */}
        <div ref={cardsRef} className='grid grid-cols-1 lg:grid-cols-3 gap-6 items-start lg:items-stretch'>
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`pricing-card relative flex flex-col rounded-none transition-all duration-300 ${
                plan.isPopular
                  ? 'border-2 border-[#C0392B] shadow-[0_8px_40px_rgba(192,57,43,0.25)] lg:scale-[1.04] z-20 bg-[var(--color-darkmode)]'
                  : 'border border-[var(--color-darkmode)]/20 shadow-lg bg-[var(--color-darkmode)]/90 z-10'
              }`}
            >
              {/* Popular badge */}
              {plan.isPopular && (
                <div className='absolute -top-[1px] left-1/2 -translate-x-1/2 bg-[#C0392B] text-white text-[10px] font-heading font-bold uppercase tracking-[0.2em] px-5 py-1.5 z-30'>
                  Phổ biến nhất
                </div>
              )}

              {/* Card header */}
              <div className={`p-8 pb-6 border-b border-white/10 ${plan.isPopular ? 'pt-10' : ''}`}>
                <p className='text-white/40 text-xs font-bold tracking-[0.2em] uppercase mb-1'>
                  {plan.label}
                </p>
                <h3 className='font-heading text-3xl font-bold uppercase text-white mb-5'>
                  {plan.name}
                </h3>
                <div className='flex items-end gap-2'>
                  <span className='font-heading text-4xl font-bold text-white'>
                    {plan.price}
                  </span>
                  <span className='text-white/40 text-sm pb-1'>{plan.note}</span>
                </div>
              </div>

              {/* Features */}
              <ul className='p-8 space-y-4 flex-grow'>
                {plan.features.map((f, idx) => (
                  <li key={idx} className='flex items-start gap-3 text-white/80 text-[15px] leading-snug'>
                    <span className={plan.isPopular ? 'text-[#C0392B]' : 'text-[var(--color-primary)]'}>
                      <CheckIcon />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className='p-8 pt-0'>
                <a href={plan.href} id={`pricing-cta-${i}`} className='block'>
                  <button
                    className={`w-full font-heading font-bold uppercase tracking-widest text-sm py-4 transition-colors duration-200 ${
                      plan.isPopular
                        ? 'bg-[#C0392B] hover:bg-[#a93226] text-white'
                        : 'border-2 border-white/40 hover:border-white text-white hover:bg-white/10'
                    }`}
                  >
                    {plan.cta}
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className='text-center mt-10 text-[var(--color-darkmode)]/50 text-sm'>
          * Giá chính thức sẽ được tư vấn cụ thể theo nhu cầu và lộ trình tập luyện của bạn.
          <a href='tel:0961119495' className='ml-2 text-[#C0392B] font-semibold hover:underline'>
            Gọi ngay: 0961 119 495
          </a>
        </p>

      </div>
    </section>
  )
}

export default Pricing
