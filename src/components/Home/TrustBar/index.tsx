import React from 'react'
import LogoLoop from '../../ui/LogoLoop'

const topLogos = [
  { src: "/logo.png", alt: "VIO Fitness" },
  { node: <span className="font-heading tracking-widest uppercase font-semibold text-2xl text-[var(--color-darkmode)]/80 whitespace-nowrap">PANATTA SPORT</span> },
  { src: "/logo.png", alt: "VIO Fitness" },
  { node: <span className="font-heading tracking-widest uppercase font-semibold text-2xl text-[var(--color-darkmode)]/80 whitespace-nowrap">HAMMER STRENGTH</span> },
  { src: "/logo.png", alt: "VIO Fitness" },
  { node: <span className="font-heading tracking-widest uppercase font-semibold text-2xl text-[var(--color-darkmode)]/80 whitespace-nowrap">PREMIUM GYM</span> },
  { src: "/logo.png", alt: "VIO Fitness" },
  { node: <span className="font-heading tracking-widest uppercase font-semibold text-2xl text-[var(--color-darkmode)]/80 whitespace-nowrap">INTERNATIONAL STANDARD</span> },
]

const bottomLogos = [
  { src: "/logo.png", alt: "VIO Fitness" },
  { node: <span className="font-heading tracking-widest uppercase font-semibold text-2xl text-[var(--color-darkmode)]/80 whitespace-nowrap">PERSONAL TRAINING</span> },
  { src: "/logo.png", alt: "VIO Fitness" },
  { node: <span className="font-heading tracking-widest uppercase font-semibold text-2xl text-[var(--color-darkmode)]/80 whitespace-nowrap">SAUNA & SPA</span> },
  { src: "/logo.png", alt: "VIO Fitness" },
  { node: <span className="font-heading tracking-widest uppercase font-semibold text-2xl text-[var(--color-darkmode)]/80 whitespace-nowrap">RECOVERY ZONE</span> },
  { src: "/logo.png", alt: "VIO Fitness" },
  { node: <span className="font-heading tracking-widest uppercase font-semibold text-2xl text-[var(--color-darkmode)]/80 whitespace-nowrap">BOXING AREA</span> },
]

const BrandLoop = () => {
  return (
    <section className='relative z-20 py-6 border-b border-black/5 bg-white/50 backdrop-blur-sm overflow-hidden flex items-center justify-center'>
      <div className='flex flex-col gap-6 w-full opacity-50 hover:opacity-80 transition-opacity duration-700 pointer-events-none select-none'>
        {/* Top Loop: Left */}
        <LogoLoop
          logos={topLogos}
          speed={45}
          direction="left"
          logoHeight={38}
          gap={120}
          pauseOnHover={false}
        />
        {/* Bottom Loop: Right */}
        <LogoLoop
          logos={bottomLogos}
          speed={40}
          direction="right"
          logoHeight={38}
          gap={120}
          pauseOnHover={false}
        />
      </div>
    </section>
  )
}

export default BrandLoop
