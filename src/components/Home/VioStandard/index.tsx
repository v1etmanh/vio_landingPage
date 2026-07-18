import React, { useState, useEffect, useMemo } from 'react'
import { Icon } from '@iconify/react'

const VioStandard = () => {
  const [currentRotation, setCurrentRotation] = useState(0)

  const cards = [
    {
      num: '01.',
      title: 'Prime Location',
      desc: 'Steps away from the Hàn River — 15 Trần Phú, central Đà Nẵng.',
      bg: 'bg-[#1A1A1A]',
      textColor: 'text-white'
    },
    {
      num: '02.',
      title: 'Ultimate Flexibility',
      desc: 'No long-term commitments. Day passes & short-term options available.',
      bg: 'bg-[#2A2522]',
      textColor: 'text-white'
    },
    {
      num: '03.',
      title: 'Premium Amenities',
      desc: 'Free towels, saunas, secure lockers & InBody analysis included.',
      bg: 'bg-[#C5A059]',
      textColor: 'text-[#1A1A1A]'
    },
    {
      num: '04.',
      title: 'World-Class Equipment',
      desc: 'Maintained Rogue, Hammer Strength & Impulse machines for a smooth workout.',
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
    <section id='Standards' className='py-24 bg-transparent relative z-10 overflow-hidden'>
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
          <div className='max-w-2xl xl:max-w-lg flex-shrink-0 z-20 relative pt-12 xl:pt-20'>
            <div className='flex items-center gap-4 mb-6'>
              <div className='h-[1px] w-12 bg-[#C5A059]'></div>
              <span className='text-sm font-bold uppercase tracking-[0.2em] text-[#4A453F]'>
                WHY VIO
              </span>
            </div>
            <h2 className='flex flex-col leading-[0.9] mb-6'>
              <span className='font-serif italic text-4xl sm:text-5xl md:text-[5.5rem] lg:text-[6.5rem] text-[#332E29] font-light'>
                The Vio
              </span>
              <span className='font-black text-5xl sm:text-[4rem] md:text-[5.5rem] lg:text-[6.5rem] text-[#1A1A1A] tracking-tighter uppercase'>
                STANDARD.
              </span>
            </h2>
            <p className='text-lg md:text-xl text-[#5A544A] font-light leading-relaxed max-w-sm mb-10'>
              Four reasons travelers and expats choose Vio Fitness over every chain gym in Đà Nẵng.
            </p>

            <div className='flex flex-col sm:flex-row items-start sm:items-center gap-6 pb-12 mb-12 border-b border-gray-200'>
              <div className='flex flex-row items-center gap-6'>
                {['NO CONTRACTS', 'NO HIDDEN FEES'].map((text, idx) => (
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
                More than a gym.<br />A place to belong.
              </h3>
              <span className='absolute right-0 lg:right-12 -top-20 text-[6rem] lg:text-[8rem] font-black text-gray-100 -z-10 tracking-tighter'>EST.<br />2015</span>
            </div>

            {/* Stats block */}
            <div className='flex flex-row flex-wrap sm:flex-nowrap gap-4'>
              {/* Stat 1 */}
              <div className='bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl flex-1 flex flex-col items-center text-center border border-gray-100 hover:-translate-y-1 transition-transform'>
                <Icon icon="tabler:crown" className="text-3xl text-[#C5A059] mb-3" />
                <span className="text-2xl lg:text-3xl font-black text-[#1A1A1A] leading-none mb-2">10+</span>
                <span className="text-[9px] font-bold uppercase tracking-wider text-[#5A544A]">Năm Kinh Nghiệm</span>
              </div>
              {/* Stat 2 */}
              <div className='bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl flex-1 flex flex-col items-center text-center border border-gray-100 hover:-translate-y-1 transition-transform'>
                <Icon icon="tabler:users" className="text-3xl text-[#C5A059] mb-3" />
                <span className="text-2xl lg:text-3xl font-black text-[#1A1A1A] leading-none mb-2">5000+</span>
                <span className="text-[9px] font-bold uppercase tracking-wider text-[#5A544A]">Phiên Tập Hiệu Quả</span>
              </div>
              {/* Stat 3 */}
              <div className='bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl flex-1 flex flex-col items-center text-center border border-gray-100 hover:-translate-y-1 transition-transform'>
                <Icon icon="tabler:ticket" className="text-3xl text-[#C5A059] mb-3" />
                <span className="text-2xl lg:text-3xl font-black text-[#1A1A1A] leading-none mb-2">140+</span>
                <span className="text-[9px] font-bold uppercase tracking-wider text-[#5A544A]">Sự Kiện Độc Quyền</span>
              </div>
            </div>
          </div>

          {/* Center: Character Image Overlay */}
          <div className='hidden xl:block absolute bottom-0 left-[45%] 2xl:left-[40%] z-30 pointer-events-none transform -translate-x-1/2 scale-[1.35] origin-bottom'>
            <img src="/nhanvat.png" alt="Vio Fitness Coach" className="h-[750px] 2xl:h-[850px] object-contain drop-shadow-2xl" />
          </div>

          {/* Right Section: Rotating Slider */}
          <div className='flex justify-center items-center w-full xl:w-auto relative z-10 min-h-[400px] xl:min-h-[800px] xl:-mr-32'>

            {/* Wrapper for mobile scaling - the massive wheel needs scaling down on smaller screens */}
            <div
              className="relative flex justify-center items-center transform scale-[0.4] sm:scale-[0.5] md:scale-[0.7] xl:scale-90 origin-center"
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
