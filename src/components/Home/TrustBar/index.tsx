import React from 'react'
import LogoLoop from '../../ui/LogoLoop'

const topLogos = [
  { src: "/logo.png", alt: "VIO Fitness" },
  { node: <span className="font-heading tracking-widest uppercase font-bold text-[var(--color-darkmode)] whitespace-nowrap">PANATTA SPORT</span> },
  { src: "/logo.png", alt: "VIO Fitness" },
  { node: <span className="font-heading tracking-widest uppercase font-bold text-[var(--color-darkmode)] whitespace-nowrap">HAMMER STRENGTH</span> },
  { src: "/logo.png", alt: "VIO Fitness" },
  { node: <span className="font-heading tracking-widest uppercase font-bold text-[var(--color-darkmode)] whitespace-nowrap">PREMIUM GYM</span> },
  { src: "/logo.png", alt: "VIO Fitness" },
  { node: <span className="font-heading tracking-widest uppercase font-bold text-[var(--color-darkmode)] whitespace-nowrap">INTERNATIONAL STANDARD</span> },
]

const bottomLogos = [
  { src: "/logo.png", alt: "VIO Fitness" },
  { node: <span className="font-heading tracking-widest uppercase font-bold text-[var(--color-darkmode)] whitespace-nowrap">PERSONAL TRAINING</span> },
  { src: "/logo.png", alt: "VIO Fitness" },
  { node: <span className="font-heading tracking-widest uppercase font-bold text-[var(--color-darkmode)] whitespace-nowrap">SAUNA & SPA</span> },
  { src: "/logo.png", alt: "VIO Fitness" },
  { node: <span className="font-heading tracking-widest uppercase font-bold text-[var(--color-darkmode)] whitespace-nowrap">RECOVERY ZONE</span> },
  { src: "/logo.png", alt: "VIO Fitness" },
  { node: <span className="font-heading tracking-widest uppercase font-bold text-[var(--color-darkmode)] whitespace-nowrap">BOXING AREA</span> },
]

const BrandLoop = () => {
  return (
    <section className='relative z-20 py-12 border-b border-black/5 bg-transparent overflow-hidden'>
      <div className='flex flex-col gap-6 w-full opacity-60 pointer-events-none select-none -rotate-2 scale-105'>
        {/* Top Loop: Left */}
        <LogoLoop
          logos={topLogos}
          speed={40}
          direction="left"
          logoHeight={26}
          gap={80}
          pauseOnHover={false}
        />
        {/* Bottom Loop: Right */}
        <LogoLoop
          logos={bottomLogos}
          speed={30}
          direction="right"
          logoHeight={26}
          gap={80}
          pauseOnHover={false}
        />
      </div>
    </section>
  )
}

export default BrandLoop
