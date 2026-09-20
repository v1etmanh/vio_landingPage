import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Icon } from '@iconify/react'
import type { SiteLanguage } from '../../../App'

interface VioStandardProps {
  language: SiteLanguage
}

const VioStandard: React.FC<VioStandardProps> = ({ language }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [wheelRotation, setWheelRotation] = useState(0)
  const reduceMotion = useReducedMotion()

  const copy = language === 'vi'
    ? {
        eyebrow: 'Vì sao VIO',
        headingLead: 'Tiêu chuẩn',
        headingAccent: 'VIO.',
        intro: 'Bốn lý do giúp VIO Fitness trở thành lựa chọn khác biệt tại Đà Nẵng.',
        highlights: ['Chuyên nghiệp', 'Tận tâm'],
        quote: <>Hơn cả một phòng gym.<br />Một nơi để thuộc về.</>,
        stats: ['Năm kinh nghiệm', 'Khách hàng thay đổi ngoại hình', 'Đánh giá Google Maps'],
        cards: [
          ['Mát mẻ & thoải mái', 'Mát mẻ. Thoải mái.'],
          ['Thiết bị hiện đại', 'Tập tốt hơn. Mạnh mẽ hơn.'],
          ['Cảm giác như ở nhà', 'Ai cũng thuộc về VIO.'],
          ['Trải nghiệm trọn vẹn', 'Phục hồi. Nạp năng lượng. Cảm thấy khỏe khoắn.'],
        ],
      }
    : {
        eyebrow: 'Why VIO',
        headingLead: 'The VIO',
        headingAccent: 'Standard.',
        intro: 'Four reasons travelers and expats choose VIO Fitness over every chain gym in Đà Nẵng.',
        highlights: ['Professional', 'Dedicated'],
        quote: <>More than a gym.<br />A place to belong.</>,
        stats: ['Years of experience', 'Members transformed', 'Google Maps reviews'],
        cards: [
          ['Cool & Comfortable', 'Stay cool. Feel comfortable.'],
          ['Modern Equipment', 'Move better. Get stronger.'],
          ['Feel at Home', 'Everyone belongs at VIO.'],
          ['Complete Experience', 'Recover. Refuel. Feel good.'],
        ],
      }

  const cards = [
    { num: '01', keyword: 'SPACE', title: copy.cards[0][0], desc: copy.cards[0][1] },
    { num: '02', keyword: 'EQUIPMENT', title: copy.cards[1][0], desc: copy.cards[1][1] },
    { num: '03', keyword: 'COACHING', title: copy.cards[2][0], desc: copy.cards[2][1] },
    { num: '04', keyword: 'RECOVERY', title: copy.cards[3][0], desc: copy.cards[3][1] },
  ]

  const activeCard = cards[activeIndex]
  const labelPositions = [
    { position: 'left-[80%] top-[33%] -translate-x-1/2 -translate-y-1/2', angle: 45 },
    { position: 'left-[72%] top-[75%] -translate-x-1/2 -translate-y-1/2', angle: 135 },
    { position: 'left-[20%] top-[67%] -translate-x-1/2 -translate-y-1/2', angle: 225 },
    { position: 'left-[28%] top-[25%] -translate-x-1/2 -translate-y-1/2', angle: 315 },
  ]

  useEffect(() => {
    const rotationInterval = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % cards.length)
      setWheelRotation((rotation) => rotation - 90)
    }, 2000)

    return () => window.clearInterval(rotationInterval)
  }, [cards.length])

  const selectCard = (index: number) => {
    setActiveIndex(index)
    setWheelRotation((rotation) => {
      const currentIndex = ((Math.round(-rotation / 90) % cards.length) + cards.length) % cards.length
      return rotation - ((index - currentIndex + cards.length) % cards.length) * 90
    })
  }

  return (
    <section id='Standards' className='relative z-10 overflow-hidden bg-[#F5F2EC] py-16 sm:py-20 xl:py-28'>
      <div className='container relative mx-auto max-w-[1700px] px-4 sm:px-6 md:px-8 lg:px-12'>
        <div className='grid items-center gap-8 xl:grid-cols-[minmax(0,.9fr)_minmax(680px,1.1fr)] xl:gap-0'>
          <motion.div
            className='relative z-30 max-w-xl py-4 xl:py-14'
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className='mb-6 flex items-center gap-4'>
              <div className='h-px w-10 bg-[#B9934B]' />
              <span className='text-xs font-bold uppercase tracking-[0.18em] text-[#4A453F]'>
                {copy.eyebrow}
              </span>
            </div>

            <h2 className='mb-6 flex flex-col leading-[.88] tracking-tighter'>
              <span className='text-5xl font-light text-[#26221F] sm:text-6xl md:text-7xl'>
                {copy.headingLead}
              </span>
              <span className='text-5xl font-black uppercase text-[#171717] sm:text-6xl md:text-7xl'>
                {copy.headingAccent}
              </span>
            </h2>
            <p className='mb-8 max-w-md text-base font-light leading-relaxed text-[#5A544A] sm:text-lg'>
              {copy.intro}
            </p>

            <div className='mb-9 flex flex-wrap gap-x-6 gap-y-3'>
              {copy.highlights.map((text) => (
                <div key={text} className='flex items-center gap-2'>
                  <Icon icon='ph:check-bold' className='text-lg text-[#B9934B]' aria-hidden='true' />
                  <span className='text-[11px] font-bold uppercase tracking-[0.12em] text-[#4A453F]'>
                    {text}
                  </span>
                </div>
              ))}
            </div>

            <div className='mb-9 border-l-2 border-[#B9934B] pl-5'>
              <span className='mb-2 block text-5xl font-black leading-none text-[#B9934B]'>
                {activeCard.num}.
              </span>
              <h3 className='mb-2 text-2xl font-black uppercase leading-none tracking-tight text-[#171717] sm:text-3xl'>
                {activeCard.title}
              </h3>
              <p aria-live='polite' className='max-w-sm text-sm font-light leading-relaxed text-[#5A544A] sm:text-base'>
                {activeCard.desc}
              </p>
            </div>

            <div className='mb-10 max-w-md border-l border-[#26221F]/25 pl-5'>
              <h3 className='text-2xl font-medium leading-tight text-[#26221F] sm:text-3xl'>
                {copy.quote}
              </h3>
            </div>

            <div className='grid max-w-xl grid-cols-3 gap-3 border-t border-[#26221F]/15 pt-5 sm:gap-6'>
              {[
                ['tabler:crown', '10+', copy.stats[0]],
                ['tabler:users', '500+', copy.stats[1]],
                ['tabler:ticket', '500+', copy.stats[2]],
              ].map(([icon, value, label]) => (
                <div key={label} className='min-w-0'>
                  <Icon icon={icon} className='mb-2 text-xl text-[#B9934B]' aria-hidden='true' />
                  <span className='mb-1 block text-2xl font-black leading-none text-[#171717] sm:text-3xl'>{value}</span>
                  <span className='block text-[9px] font-bold uppercase leading-tight tracking-[0.08em] text-[#5A544A] sm:text-[10px]'>{label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className='relative min-h-[470px] sm:min-h-[610px] xl:min-h-[830px]'>
            <div className='absolute left-1/2 top-1/2 h-[322px] w-[322px] -translate-x-1/2 -translate-y-1/2 sm:h-[434px] sm:w-[434px] md:h-[525px] md:w-[525px] xl:left-auto xl:right-[-60px] xl:top-1/2 xl:h-[700px] xl:w-[700px] xl:-translate-y-1/2 xl:translate-x-0'>
              <div
                className='absolute inset-0 will-change-transform'
                style={{
                  transform: `rotate(${wheelRotation}deg)`,
                  transition: 'transform 900ms cubic-bezier(.16, 1, .3, 1)',
                }}
              >
              <div
                className='absolute inset-0 rounded-full border-[14px] border-[#0D0D0D] bg-[#171717] shadow-[inset_0_0_0_1px_rgba(245,242,236,.12),inset_0_0_0_34px_rgba(0,0,0,.25),0_32px_60px_rgba(23,23,23,.22)] sm:border-[18px]'
                style={{
                  backgroundImage: "linear-gradient(rgba(23,23,23,.82), rgba(23,23,23,.9)), url('/images/standard/weight-plate-texture.png')",
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                }}
              >
                <div className='absolute inset-[6.5%] rounded-full border border-[#F5F2EC]/15' />
                <div className='absolute inset-[16%] rounded-full border border-[#F5F2EC]/10' />
                <div className='absolute inset-[27%] rounded-full border border-[#F5F2EC]/10' />

                <div className='absolute left-1/2 top-[7%] h-[43%] w-px -translate-x-1/2 bg-[#F5F2EC]/15' />
                <div className='absolute left-1/2 bottom-[7%] h-[43%] w-px -translate-x-1/2 bg-[#F5F2EC]/15' />
                <div className='absolute left-[7%] top-1/2 h-px w-[43%] -translate-y-1/2 bg-[#F5F2EC]/15' />
                <div className='absolute right-[7%] top-1/2 h-px w-[43%] -translate-y-1/2 bg-[#F5F2EC]/15' />

                <div
                  className='absolute left-1/2 top-[7%] h-[43%] w-[3px] -translate-x-1/2 origin-bottom bg-[#B9934B] shadow-[0_0_16px_rgba(185,147,75,.25)] transition-transform duration-[900ms] ease-[cubic-bezier(.16,1,.3,1)]'
                  style={{ transform: `translateX(-50%) rotate(${-wheelRotation}deg)` }}
                  aria-hidden='true'
                />

              </div>

              {cards.map((card, index) => {
                const isActive = index === activeIndex
                return (
                  <button
                    key={card.num}
                    type='button'
                    onClick={() => selectCard(index)}
                    onMouseEnter={() => selectCard(index)}
                    onFocus={() => selectCard(index)}
                    aria-pressed={isActive}
                    aria-label={`${card.num}. ${card.title}. ${card.desc}`}
                    className={`group absolute z-20 w-[30%] text-left transition-all duration-300 ease-[cubic-bezier(.16,1,.3,1)] motion-reduce:transition-none ${labelPositions[index].position} ${isActive ? 'text-[#F5F2EC]' : 'text-[#F5F2EC]/60 hover:text-[#F5F2EC]'}`}
                  >
                    <span
                      className='block origin-center'
                      style={{ transform: `rotate(${labelPositions[index].angle}deg)` }}
                    >
                      <span className={`block text-4xl font-black leading-none tracking-tighter sm:text-6xl ${isActive ? 'text-[#B9934B]' : 'text-[#B9934B]/60 group-hover:text-[#B9934B]'}`}>
                        {card.num}.
                      </span>
                      <span className='mt-1 block text-[9px] font-black uppercase leading-none tracking-[0.08em] text-[#F5F2EC] sm:text-xs'>
                        {card.keyword}
                      </span>
                      <span className='mt-2 block text-[10px] font-black uppercase leading-tight text-[#F5F2EC] sm:text-sm'>
                        {card.title}
                      </span>
                      <span className='mt-1 block text-[9px] font-light leading-snug text-[#F5F2EC]/75 sm:text-xs'>
                        {card.desc}
                      </span>
                    </span>
                  </button>
                )
              })}
              </div>

              <div className='absolute inset-[34%] z-30 flex items-center justify-center rounded-full border-[10px] border-[#0A0A0A] bg-[#26221F] shadow-[inset_0_0_0_1px_rgba(245,242,236,.14),inset_0_0_25px_rgba(0,0,0,.7)] sm:border-[14px]'>
                <img
                  src='/Screenshot%202026-09-20%20202141.png'
                  alt='Phi tiêu VIO Fitness'
                  className='h-[76%] w-[76%] translate-x-[25%] -translate-y-[25%] object-contain'
                />
              </div>
            </div>
          </div>
        </div>

        <div className='pointer-events-none absolute bottom-0 left-[42%] z-20 hidden -translate-x-1/2 xl:block'>
          <img
            src='/webp/images/vio-coach-bao-cutout.png'
            alt='Huấn luyện viên VIO Fitness'
            className='h-[760px] w-[505px] object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.18)] 2xl:h-[890px] 2xl:w-[592px]'
          />
        </div>
      </div>
    </section>
  )
}

export default VioStandard
