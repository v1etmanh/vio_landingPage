import React, { useState, useEffect, useMemo } from 'react'
import { Icon } from '@iconify/react'
import type { SiteLanguage } from '../../../App'

interface VioStandardProps {
  language: SiteLanguage
}

const VioStandard: React.FC<VioStandardProps> = ({ language }) => {
  const [currentRotation, setCurrentRotation] = useState(0)

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
    {
      num: '01.',
      title: copy.cards[0][0],
      desc: copy.cards[0][1],
      bg: 'bg-[#1A1A1A]',
      textColor: 'text-white'
    },
    {
      num: '02.',
      title: copy.cards[1][0],
      desc: copy.cards[1][1],
      bg: 'bg-[#2A2522]',
      textColor: 'text-white'
    },
    {
      num: '03.',
      title: copy.cards[2][0],
      desc: copy.cards[2][1],
      bg: 'bg-[#C5A059]',
      textColor: 'text-[#1A1A1A]'
    },
    {
      num: '04.',
      title: copy.cards[3][0],
      desc: copy.cards[3][1],
      bg: 'bg-[#332E29]',
      textColor: 'text-white'
    }
  ]

  const slideHeight = 360
  const slideWidth = 480
  const slideCount = 4
  const slideAngle = 360 / slideCount

  // Do the exact math from the pen
  const {
    innerRadius, outerRadius, upperArcHeight, lowerArcHeight,
    slideFullWidth, slideFullHeight, slideSidePadding,
    pathCoords
  } = useMemo(() => {
    const halfAngleRad = (slideAngle / 2) * (Math.PI / 180)
    const iR = (1 / Math.tan(halfAngleRad)) * (slideWidth / 2)
    const oR = Math.sqrt(Math.pow(iR + slideHeight, 2) + Math.pow(slideWidth / 2, 2))
    const uAH = oR - (iR + slideHeight)
    const lAH = iR - (iR * Math.cos(halfAngleRad))
    const sFW = Math.sin(halfAngleRad) * oR * 2
    const sFH = uAH + slideHeight + lAH
    const sSP = (sFW - slideWidth) / 2
    const fAH = oR - (oR * Math.cos(halfAngleRad))
    const lAO = (sFW - (Math.sin(halfAngleRad) * iR * 2)) / 2

    let path = `M 0 ${fAH}`
    path += ` A ${oR} ${oR} 0 0 1 ${sFW} ${fAH}`
    path += ` L ${sFW - lAO} ${sFH}`
    path += ` A ${iR} ${iR} 0 0 0 ${lAO} ${sFH} Z`

    return {
      innerRadius: iR,
      outerRadius: oR,
      upperArcHeight: uAH,
      lowerArcHeight: lAH,
      slideFullWidth: sFW,
      slideFullHeight: sFH,
      slideSidePadding: sSP,
      pathCoords: path
    }
  }, [slideAngle, slideHeight, slideWidth])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRotation(prev => prev - slideAngle)
    }, 4000)
    return () => clearInterval(interval)
  }, [slideAngle])

  return (
    <section id='Standards' className='py-24 bg-white relative z-10 overflow-hidden'>
      {/* SVG Clip Path definition */}
      <svg className="absolute w-0 h-0">
        <defs>
          <clipPath id="slideClip">
            <path d={pathCoords} />
          </clipPath>
        </defs>
      </svg>

      <div className='container mx-auto max-w-[1700px] px-4 sm:px-6 md:px-8 lg:px-12'>

        <div className='flex flex-col xl:flex-row items-center xl:items-start justify-between gap-20 xl:gap-8'>

          {/* Left Section: Text Content & Stats */}
          <div className='max-w-2xl xl:max-w-lg flex-shrink-0 z-20 relative pt-12 xl:pt-24'>
            <div className='flex items-center gap-4 mb-6'>
              <div className='h-[1px] w-12 bg-[#C5A059]'></div>
              <span className='text-sm font-bold uppercase tracking-[0.2em] text-[#4A453F]'>
                {copy.eyebrow}
              </span>
            </div>
            <h2 className='flex flex-col leading-[0.9] mb-6'>
              <span className='font-serif italic text-4xl sm:text-5xl md:text-[5.5rem] lg:text-[6.5rem] text-[#332E29] font-light'>
                {copy.headingLead}
              </span>
              <span className='font-black text-5xl sm:text-[4rem] md:text-[5.5rem] lg:text-[6.5rem] text-[#1A1A1A] tracking-tighter uppercase'>
                {copy.headingAccent}
              </span>
            </h2>
            <p className='text-lg md:text-xl text-[#5A544A] font-light leading-relaxed max-w-sm mb-10'>
              {copy.intro}
            </p>

            <div className='flex flex-col sm:flex-row items-start sm:items-center gap-6 pb-12 mb-12 border-b border-gray-200'>
              <div className='flex flex-row items-center gap-6'>
                {copy.highlights.map((text, idx) => (
                  <div key={idx} className='flex items-center gap-2'>
                    <Icon icon='ph:check-bold' className='text-[#C5A059] text-xl' />
                    <span className='font-bold text-[10px] tracking-[0.1em] text-[#4A453F] whitespace-nowrap'>
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quote block */}
            <div className='mb-12 relative'>
              <span className='text-6xl text-[#C5A059] font-serif absolute -top-8 -left-4 opacity-50'>“</span>
              <h3 className='font-serif italic text-3xl md:text-4xl text-[#332E29] leading-tight'>
                {copy.quote}
              </h3>
            </div>

            {/* Stats block */}
            <div className='flex flex-row flex-wrap sm:flex-nowrap gap-4'>
              {/* Stat 1 */}
              <div className='bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl flex-1 flex flex-col items-center text-center border border-gray-100 hover:-translate-y-1 transition-transform'>
                <Icon icon="tabler:crown" className="text-3xl text-[#C5A059] mb-3" />
                <span className="text-2xl lg:text-3xl font-black text-[#1A1A1A] leading-none mb-2">10+</span>
                <span className="text-[9px] font-bold uppercase tracking-wider text-[#5A544A]">{copy.stats[0]}</span>
              </div>
              {/* Stat 2 */}
              <div className='bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl flex-1 flex flex-col items-center text-center border border-gray-100 hover:-translate-y-1 transition-transform'>
                <Icon icon="tabler:users" className="text-3xl text-[#C5A059] mb-3" />
                <span className="text-2xl lg:text-3xl font-black text-[#1A1A1A] leading-none mb-2">500+</span>
                <span className="text-[9px] font-bold uppercase tracking-wider text-[#5A544A]">{copy.stats[1]}</span>
              </div>
              {/* Stat 3 */}
              <div className='bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl flex-1 flex flex-col items-center text-center border border-gray-100 hover:-translate-y-1 transition-transform'>
                <Icon icon="tabler:ticket" className="text-3xl text-[#C5A059] mb-3" />
                <span className="text-2xl lg:text-3xl font-black text-[#1A1A1A] leading-none mb-2">500+</span>
                <span className="text-[9px] font-bold uppercase tracking-wider text-[#5A544A]">{copy.stats[2]}</span>
              </div>
            </div>
          </div>

          {/* Center: Character Image Overlay */}
          <div className='hidden xl:block absolute bottom-0 left-[53%] 2xl:left-[49%] z-30 pointer-events-none -translate-x-1/2 origin-bottom'>
            <img
              src="/webp/images/vio-coach-bao-cutout.png"
              alt="Huấn luyện viên VIO Fitness"
              className="h-[800px] 2xl:h-[920px] w-[532px] 2xl:w-[612px] object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.18)]"
            />
          </div>

          {/* Right Section: Rotating Slider */}
          <div className='flex justify-center items-center w-full xl:w-auto relative z-10 min-h-[400px] xl:min-h-[800px] xl:-mr-32'>

            {/* Wrapper for mobile scaling - the massive wheel needs scaling down on smaller screens */}
            <div
              className="relative flex justify-center items-center transform scale-[0.4] sm:scale-[0.5] md:scale-[0.7] xl:scale-[0.64] origin-center"
              style={{ width: slideWidth, height: slideHeight }}
            >

              <div
                className="rotate-slider relative mx-auto"
                style={{ width: slideWidth, height: slideHeight }}
              >
                <ul
                  className="slides absolute top-0 left-1/2 m-0 p-0 list-none z-0"
                  style={{
                    height: outerRadius * 2,
                    width: outerRadius * 2,
                    transform: `translateX(-50%) rotate(${currentRotation}deg)`,
                    transformOrigin: 'center center',
                    top: -upperArcHeight,
                    transition: 'transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)'
                  }}
                >
                  {cards.map((card, i) => (
                    <li
                      key={i}
                      className={`absolute top-0 left-1/2 block text-center ${card.bg} ${card.textColor}`}
                      style={{
                        boxSizing: 'content-box',
                        transformOrigin: `center ${innerRadius + slideHeight}px`,
                        height: slideHeight,
                        width: slideWidth,
                        padding: `${upperArcHeight}px ${slideSidePadding}px ${lowerArcHeight}px ${slideSidePadding}px`,
                        top: upperArcHeight,
                        transform: `translateX(-50%) rotate(${slideAngle * i}deg) translateY(-${upperArcHeight}px)`,
                        WebkitClipPath: 'url(#slideClip)',
                        clipPath: 'url(#slideClip)',
                      }}
                    >
                      <div className="inner h-full w-full flex flex-col items-center justify-center p-6 box-border">
                        <span className="font-serif italic text-4xl lg:text-5xl text-[#C5A059] mb-2 opacity-80">{card.num}</span>
                        <h3 className="text-lg lg:text-xl font-black uppercase tracking-wider mb-2 lg:mb-3">{card.title}</h3>
                        <p className={`text-xs md:text-sm font-light leading-relaxed max-w-[240px] ${card.textColor === 'text-white' ? 'text-gray-300' : 'text-gray-800'}`}>
                          {card.desc}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default VioStandard
