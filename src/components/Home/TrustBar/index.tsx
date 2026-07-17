import LogoLoop from '../../ui/LogoLoop'
import { useLocale } from '@/app/context/useLocale'
import { BUSINESS } from '@/app/config/business'

const BrandLoop = () => {
  const locale = useLocale()
  const text = (value: string) => <span className='whitespace-nowrap font-heading text-lg font-semibold uppercase tracking-widest text-[var(--color-darkmode)]/80'>{value}</span>
  const topLogos = [
    { src: '/logo.png', alt: 'VIO Fitness' },
    { node: text(locale.trust.panatta) },
    { src: '/logo.png', alt: 'VIO Fitness' },
    { node: text(locale.trust.hammer) },
    { src: '/logo.png', alt: 'VIO Fitness' },
    { node: text(locale.trust.premium) },
    { src: '/logo.png', alt: 'VIO Fitness' },
    { node: text(locale.trust.international) },
  ]
  const bottomLogos = [
    { src: '/logo.png', alt: 'VIO Fitness' },
    { node: text(locale.trust.personal) },
    { src: '/logo.png', alt: 'VIO Fitness' },
    { node: text(locale.trust.sauna) },
    { src: '/logo.png', alt: 'VIO Fitness' },
    { node: text(locale.trust.recovery) },
    { src: '/logo.png', alt: 'VIO Fitness' },
    { node: text(locale.trust.boxing) },
  ]

  return (
    <section className='relative z-20 flex items-center justify-center overflow-visible border-b border-black/5 bg-white/50 pb-7 pt-3 backdrop-blur-sm'>
      <div className='flex w-full flex-col gap-3 opacity-50 transition-opacity duration-700 hover:opacity-80 pointer-events-none select-none'>
        <LogoLoop logos={topLogos} speed={45} direction='left' logoHeight={52} gap={90} pauseOnHover={false} />
        <LogoLoop logos={bottomLogos} speed={40} direction='right' logoHeight={52} gap={90} pauseOnHover={false} />
      </div>
      <div className='absolute bottom-0 left-1/2 flex -translate-x-1/2 translate-y-1/2 items-center gap-3 bg-[var(--color-darkmode)] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white shadow-lg sm:gap-5 sm:px-6 sm:text-xs'>
        <span>{locale.trust.openDays}</span>
        <span className='text-[var(--color-primary)]'>·</span>
        <span>{BUSINESS.hours.open}–{BUSINESS.hours.close}</span>
      </div>
    </section>
  )
}

export default BrandLoop
