import React, { useEffect, useRef, useState } from 'react'
import { Icon } from '@iconify/react'
import Button from '../../ui/Button'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { SiteLanguage } from '../../../App'

gsap.registerPlugin(ScrollTrigger)

interface PricingProps {
  language: SiteLanguage
}

interface MembershipPlan {
  name: string
  tagline: string
  priceVND: string
  priceUSD: string
  features: string[]
  isPopular: boolean
  btnText: string
  bgImage: string
}

const plansByLanguage: Record<SiteLanguage, MembershipPlan[]> = {
  en: [
    {
      name: 'DAY PASS', tagline: 'Quick & easy daily access', priceVND: '200,000 VND', priceUSD: '$8', isPopular: false, btnText: 'GET DAY PASS', bgImage: "url('/images/pricing/essential.png')",
      features: ['Unlimited Gym Access', 'Luxurious Air-Conditioned Space', '2 clean workout towels provided per visit', 'Free InBody Analysis', 'Sauna Access Included', 'Get a FREE 500ml bottle of water', 'Quick Registration — Start Immediately'],
    },
    {
      name: '3-DAY PASS', tagline: 'Ideal for weekend getaways', priceVND: '500,000 VND', priceUSD: '$20', isPopular: false, btnText: 'GET 3-DAY PASS', bgImage: "url('/images/pricing/abstract_white.png')",
      features: ['Unlimited gym access for 3 consecutive days', 'Luxurious Air-Conditioned Space', '2 clean workout towels provided per visit', 'Free InBody Analysis', 'Sauna Access Included', 'Quick Registration — Start Immediately', 'Get a FREE 500ml bottle of water'],
    },
    {
      name: 'WEEK PASS', tagline: 'Best choice for short trips', priceVND: '900,000 VND', priceUSD: '$24', isPopular: true, btnText: 'GET WEEK PASS', bgImage: "url('/output_ms/abstract_kinetic_energy.png')",
      features: ['Unlimited gym access for 7 consecutive days', 'Luxurious Air-Conditioned Space', '2 clean workout towels provided per visit', 'Free InBody Analysis', 'Sauna Access Included', 'Quick Registration — Start Immediately', 'Get a FREE Americano or Monster Energy Drink (for first-time members registering at VIO FITNESS)'],
    },
    {
      name: 'MONTH PASS', tagline: 'Save more, train more', priceVND: '1,650,000 VND', priceUSD: '$63', isPopular: false, btnText: 'GET MONTH PASS', bgImage: "url('/images/pricing/elite.png')",
      features: ['Unlimited gym access for 30 days', 'Luxurious Air-Conditioned Space', '2 clean workout towels provided per visit', 'Free InBody Analysis', 'Sauna Access Included', 'Free 2 one-to-one training sessions with a personal trainer', '1 membership freeze of up to 30 days', 'Get 1 free whey protein smoothie (for first-time members registering at VIO FITNESS)'],
    },
    {
      name: '1-YEAR PASS', tagline: 'By your side every workout', priceVND: '10,200,000 VND', priceUSD: '$400', isPopular: false, btnText: 'GET 1-YEAR PASS', bgImage: "url('/images/pricing/abstract_gold.png')",
      features: ['Unlimited gym access for 1 year', 'Luxurious Air-Conditioned Space', '2 clean workout towels provided per visit', 'Free InBody Analysis', 'Sauna Access Included', 'Free 2 one-to-one training sessions with a personal trainer', '3 membership freezes of up to 30 days each', 'Get 1 month membership free', 'Get 2 free whey protein smoothies', 'Get a relaxing stretching session'],
    },
  ],
  vi: [
    {
      name: 'VÉ TẬP NGÀY', tagline: 'Truy cập nhanh, dễ dàng mỗi ngày', priceVND: '200.000 VND', priceUSD: '$8', isPopular: false, btnText: 'ĐĂNG KÝ VÉ NGÀY', bgImage: "url('/images/pricing/essential.png')",
      features: ['Không giới hạn quyền sử dụng phòng gym', 'Không gian sang trọng, điều hoà mát mẻ', '2 khăn tập sạch cho mỗi lượt ghé thăm', 'Phân tích chỉ số InBody miễn phí', 'Đã bao gồm phòng xông hơi', 'Tặng 1 chai nước 500ml', 'Đăng ký nhanh — bắt đầu ngay'],
    },
    {
      name: 'VÉ 3 NGÀY', tagline: 'Lý tưởng cho kỳ nghỉ cuối tuần', priceVND: '500.000 VND', priceUSD: '$20', isPopular: false, btnText: 'ĐĂNG KÝ VÉ 3 NGÀY', bgImage: "url('/images/pricing/abstract_white.png')",
      features: ['Không giới hạn quyền sử dụng phòng gym trong 3 ngày liên tiếp', 'Không gian sang trọng, điều hoà mát mẻ', '2 khăn tập sạch cho mỗi lượt ghé thăm', 'Phân tích chỉ số InBody miễn phí', 'Đã bao gồm phòng xông hơi', 'Đăng ký nhanh — bắt đầu ngay', 'Tặng 1 chai nước 500ml'],
    },
    {
      name: 'VÉ TUẦN', tagline: 'Lựa chọn tốt nhất cho chuyến đi ngắn', priceVND: '900.000 VND', priceUSD: '$24', isPopular: true, btnText: 'ĐĂNG KÝ VÉ TUẦN', bgImage: "url('/output_ms/abstract_kinetic_energy.png')",
      features: ['Không giới hạn quyền sử dụng phòng gym trong 7 ngày liên tiếp', 'Không gian sang trọng, điều hoà mát mẻ', '2 khăn tập sạch cho mỗi lượt ghé thăm', 'Phân tích chỉ số InBody miễn phí', 'Đã bao gồm phòng xông hơi', 'Đăng ký nhanh — bắt đầu ngay', 'Tặng 1 Americano hoặc Monster Energy Drink (áp dụng cho hội viên lần đầu đăng ký tại VIO FITNESS)'],
    },
    {
      name: 'VÉ THÁNG', tagline: 'Tiết kiệm hơn, tập nhiều hơn', priceVND: '1.650.000 VND', priceUSD: '$63', isPopular: false, btnText: 'ĐĂNG KÝ VÉ THÁNG', bgImage: "url('/images/pricing/elite.png')",
      features: ['Không giới hạn quyền sử dụng phòng gym trong 30 ngày', 'Không gian sang trọng, điều hoà mát mẻ', '2 khăn tập sạch cho mỗi lượt ghé thăm', 'Phân tích chỉ số InBody miễn phí', 'Đã bao gồm phòng xông hơi', 'Tặng 2 buổi tập 1-1 cùng huấn luyện viên cá nhân', 'Bảo lưu hội viên 1 lần, tối đa 30 ngày', 'Tặng 1 whey protein smoothie (áp dụng cho hội viên lần đầu đăng ký tại VIO FITNESS)'],
    },
    {
      name: 'VÉ 1 NĂM', tagline: 'Đồng hành trong mỗi buổi tập', priceVND: '10.200.000 VND', priceUSD: '$400', isPopular: false, btnText: 'ĐĂNG KÝ VÉ 1 NĂM', bgImage: "url('/images/pricing/abstract_gold.png')",
      features: ['Không giới hạn quyền sử dụng phòng gym trong 1 năm', 'Không gian sang trọng, điều hoà mát mẻ', '2 khăn tập sạch cho mỗi lượt ghé thăm', 'Phân tích chỉ số InBody miễn phí', 'Đã bao gồm phòng xông hơi', 'Tặng 2 buổi tập 1-1 cùng huấn luyện viên cá nhân', 'Bảo lưu hội viên 3 lần, tối đa 30 ngày mỗi lần', 'Tặng thêm 1 tháng hội viên', 'Tặng 2 whey protein smoothie', 'Tặng 1 buổi stretching thư giãn'],
    },
  ],
}

const Pricing: React.FC<PricingProps> = ({ language }) => {
  const [activePlanIndex, setActivePlanIndex] = useState(0)
  const mobileCardRef = useRef<HTMLDivElement>(null)
  const plans = plansByLanguage[language]
  const copy = language === 'vi'
    ? { popular: 'Lựa chọn nổi bật', eyebrow: 'Gói hội viên VIO FITNESS', title: 'Chọn gói phù hợp với bạn', tabLabel: 'Chọn gói tập' }
    : { popular: 'Most popular', eyebrow: 'VIO FITNESS membership packages', title: 'Choose your membership', tabLabel: 'Choose a membership plan' }

  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const card = mobileCardRef.current
    if (!card) return

    gsap.fromTo(
      card,
      { opacity: 0, y: 18 },
      { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out', overwrite: true }
    )

    return () => {
      gsap.killTweensOf(card)
    }
  }, [activePlanIndex])

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1280px)", () => {
      // Desktop: Hardware-accelerated fan out animation
      gsap.set('.pricing-card', { opacity: 0, y: 0, force3D: true });
      gsap.set('.pricing-card-0, .pricing-card-1', { x: -80, scale: 0.85 });
      gsap.set('.pricing-card-3, .pricing-card-4', { x: 80, scale: 0.85 });
      gsap.set('.pricing-card-2', { scale: 0.85, y: 20 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        }
      });

      tl.to('.pricing-card-0, .pricing-card-4', {
        x: 0, y: 44, scale: 0.9, opacity: 0.9, duration: 0.8, ease: 'power3.out'
      }, 0)
      .to('.pricing-card-1, .pricing-card-3', {
        x: 0, y: 18, scale: 0.96, opacity: 1, duration: 0.8, ease: 'power3.out'
      }, 0.1)
      .to('.pricing-card-2', {
        x: 0, y: -18, scale: 1.06, opacity: 1, duration: 0.8, ease: 'power3.out'
      }, 0.2);
    });

    mm.add("(max-width: 1279px)", () => {
      // Mobile: Batch animation for smooth scrolling without simultaneous overloads
      gsap.set('.pricing-card', { opacity: 0, y: 50, force3D: true });
      
      ScrollTrigger.batch('.pricing-card', {
        start: 'top 85%',
        onEnter: batch => gsap.to(batch, 
          { opacity: 1, y: 0, stagger: 0.15, duration: 0.6, ease: 'power3.out', overwrite: true }
        )
      });
    });

    return () => mm.revert();
  }, { scope: sectionRef });

  const getCardStyle = (index: number) => {
    // Center card (Index 2)
    if (index === 2) return 'border-[2px] border-[var(--color-primary)] shadow-[0_0_40px_rgba(140,120,83,0.4)] z-30 bg-[var(--color-darkmode)] min-h-[580px]'
    // Inner neighbors (Index 1 & 3)
    if (index === 1 || index === 3) return 'border border-gray-600 shadow-2xl z-20 bg-[var(--color-deep-slate)] min-h-[550px]'
    // Outer neighbors (Index 0 & 4)
    return 'border border-gray-600 shadow-xl z-10 hover:opacity-100 bg-black/90 min-h-[520px]'
  }

  type Plan = (typeof plans)[number]

  const renderPlanCard = (
    plan: Plan,
    index: number,
    wrapperClassName: string,
    ref?: React.Ref<HTMLDivElement>
  ) => (
    <div
      ref={ref}
      className={`${wrapperClassName} pricing-card-${index}`}
    >
      <div
        className={`relative rounded-none overflow-hidden flex flex-col h-full transition-shadow duration-500 hover:shadow-2xl hover:z-40 ${getCardStyle(index)}`}
      >
        <div
          className='absolute inset-0 z-0 bg-cover bg-center transition-transform duration-700 hover:scale-110'
          style={{ backgroundImage: plan.bgImage }}
        />
        <div className='absolute inset-0 z-0 bg-gradient-to-b from-black/60 via-black/85 to-[#111]' />

        <div className='relative z-10 p-4 xl:p-5 flex flex-col h-full'>
          {plan.isPopular && (
            <div className='absolute -top-1 left-1/2 -translate-x-1/2 bg-[var(--color-darkmode)] border border-[var(--color-primary)] text-[var(--color-primary)] px-6 py-2 rounded-b-md text-xs font-bold uppercase tracking-widest whitespace-nowrap shadow-lg'>
              {copy.popular}
            </div>
          )}

          <div className={`text-center ${plan.isPopular ? 'mt-6' : 'mt-2'} mb-4 pb-4 border-b border-gray-600/50`}>
            <p className='min-h-6 text-gray-200 tracking-[0.1em] text-[10px] leading-snug uppercase font-sans font-bold'>{plan.tagline}</p>
            <h3 className='mt-2 text-xl lg:text-2xl font-bold text-white mb-3'>{plan.name}</h3>
            <div className='flex items-baseline justify-center text-white'>
              <span className='text-xl lg:text-2xl font-black tracking-tight'>{plan.priceVND}</span>
            </div>
            <div className='flex items-baseline justify-center text-[var(--color-primary)] mt-1'>
              <span className='text-lg lg:text-xl font-bold tracking-tight'>{plan.priceUSD}</span>
            </div>
          </div>

          <ul className='space-y-2 mb-4 flex-grow'>
            {plan.features.map((feature, featureIndex) => (
              <li key={featureIndex} className='flex items-start text-gray-100 text-xs xl:text-[12px]'>
                <Icon icon='tabler:check' className='text-[var(--color-primary)] text-base mr-2 flex-shrink-0 mt-0.5' />
                <span className='leading-snug font-sans'>{feature}</span>
              </li>
            ))}
          </ul>

          <Button
            variant={plan.isPopular ? 'outline' : 'secondary'}
            href='#Registration'
            className={`w-full mt-auto ${plan.isPopular ? 'border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white shadow-[0_0_15px_rgba(140,120,83,0.2)]' : ''}`}
          >
            {plan.btnText}
          </Button>
        </div>
      </div>
    </div>
  )

  return (
    <section id='Pricing' ref={sectionRef} className='py-24 lg:py-32 bg-transparent relative z-10 overflow-hidden'>
      <div className='w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center max-w-4xl mx-auto mb-8 xl:mb-16'>
          <p className='text-gray-600 text-xs sm:text-sm md:text-lg tracking-[0.1em] sm:tracking-[0.2em] uppercase mb-4 font-bold font-sans'>
            {copy.eyebrow}
          </p>
          <h2 className='text-2xl sm:text-3xl md:text-5xl font-black mb-6 text-[var(--color-darkmode)] tracking-tight'>
            {copy.title}
          </h2>
        </div>

        <div className='md:hidden mb-10 overflow-x-auto scrollbar-hide -mx-4 px-4' role='tablist' aria-label={copy.tabLabel}>
          <div className='flex min-w-max justify-center gap-2'>
            {plans.map((plan, index) => {
              const isActive = activePlanIndex === index

              return (
                <button
                  key={plan.name}
                  type='button'
                  role='tab'
                  aria-selected={isActive}
                  aria-controls='mobile-pricing-card'
                  onClick={() => setActivePlanIndex(index)}
                  className={`min-h-10 px-4 border text-[10px] font-bold tracking-[0.12em] uppercase whitespace-nowrap transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)] ${
                    isActive
                      ? 'border-[var(--color-primary)] bg-[var(--color-darkmode)] text-[var(--color-primary)]'
                      : 'border-black/15 bg-white/40 text-[var(--color-darkmode)]/60'
                  }`}
                >
                  {plan.name}
                </button>
              )
            })}
          </div>
        </div>

        <div id='mobile-pricing-card' ref={mobileCardRef} className='md:hidden mb-20 w-full max-w-md mx-auto' role='tabpanel'>
          {renderPlanCard(plans[activePlanIndex], activePlanIndex, 'pricing-card-mobile')}
        </div>

        <div className='hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 xl:gap-4 items-stretch mb-20 xl:pt-6 xl:pb-16'>
          {plans.map((plan, index) => renderPlanCard(plan, index, 'pricing-card will-change-transform opacity-0'))}
        </div>

      </div>
    </section>
  )
}

export default Pricing
