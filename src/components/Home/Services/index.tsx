import { useLocale } from '@/app/context/useLocale'
import { Icon } from '@iconify/react'
import Button from '../../ui/Button'

// Single accent token for the whole section. Everything gold you see
// (tag numerals, divider, thread line, thread nodes, counter) reads from
// this one constant, so "Gold Thread" stays literally one thread.
const THREAD = '#C9A66B'

interface ServiceItem {
  id: 'equipment' | 'functional' | 'recovery' | 'sauna' | 'nutrition'
  image: string
}

const servicesData: ServiceItem[] = [
  {
    id: 'equipment',
    image: '/images/Bản sao của KSP02409-HDR-Edit.jpg',
  },
  {
    id: 'functional',
    image: '/images/Bản sao của KSP02428-HDR-Edit.jpg',
  },
  {
    id: 'recovery',
    image: '/images/Bản sao của KSP02444-HDR-Edit.jpg',
  },
  {
    id: 'sauna',
    image: '/images/Bản sao của KSP02464-HDR-Edit.jpg',
  },
  {
    id: 'nutrition',
    image: '/images/Bản sao của KSP02479-HDR-Edit.jpg',
  },
]

export default function Services() {
  const locale = useLocale()

  return (
    <section id="Services" className="relative overflow-hidden bg-[var(--color-darkmode)] py-24 text-white">
      {/* Combined Header & Stats Pill (About Us + Services) */}
      <div className="mx-auto flex max-w-4xl flex-col items-center px-4 pb-16 pt-12 text-center">
        <p className="services-eyebrow mb-2 text-2xl font-bold uppercase tracking-wide text-[var(--color-primary)] font-heading">
          {locale.services.eyebrow}
        </p>
        <h2 className="services-heading-line mb-6 font-heading text-3xl sm:text-5xl font-black uppercase leading-tight text-white md:text-6xl tracking-tight">
          {locale.services.title}
        </h2>
        <p className="services-lede mx-auto max-w-2xl text-base leading-relaxed text-white/70">
          {locale.services.body}
        </p>

        {/* Stats Pill */}
        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-center gap-4 sm:gap-6 rounded-2xl sm:rounded-full border border-white/20 px-6 sm:px-8 py-6 sm:py-4 w-full sm:w-auto mx-auto bg-white/5 sm:bg-transparent">
          <div className="flex items-center gap-3">
            <Icon icon="tabler:crown" className="text-2xl sm:text-3xl text-[var(--color-primary)] sm:text-white" />
            <span className="text-left text-xs sm:text-sm font-bold leading-tight tracking-wider text-white uppercase">
              {locale.services.equipment}
            </span>
          </div>
          <span className="hidden sm:block text-white/30 text-xl font-light">/</span>
          <div className="flex items-center gap-3">
            <Icon icon="tabler:building" className="text-2xl sm:text-3xl text-[var(--color-primary)] sm:text-white" />
            <span className="text-left text-xs sm:text-sm font-bold leading-tight tracking-wider text-white uppercase">
              {locale.services.floors}
            </span>
          </div>
          <span className="hidden sm:block text-white/30 text-xl font-light">/</span>
          <div className="flex items-center gap-3">
            <Icon icon="tabler:user-check" className="text-2xl sm:text-3xl text-[var(--color-primary)] sm:text-white" />
            <span className="text-left text-xs sm:text-sm font-bold leading-tight tracking-wider text-white uppercase">
              {locale.services.personal}
            </span>
          </div>
        </div>
      </div>

      {/* Desktop: lightweight editorial grid. Avoids scroll-jacking and keeps the conversion page fast. */}
      <div className="relative mx-auto hidden max-w-7xl grid-cols-2 gap-6 px-4 lg:grid">
        {servicesData.map((item, index) => {
          const content = locale.services.items[item.id]
          return <article key={item.id} className={`overflow-hidden border border-white/10 bg-[#221e1a] ${index === 0 ? 'col-span-2 grid grid-cols-2' : ''}`}>
            <div className={`relative bg-[#111] ${index === 0 ? 'min-h-[430px]' : 'h-72'}`}>
              <img src={item.image} alt={content.title} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#221e1a]/70 to-transparent" />
            </div>
            <div className="p-8 xl:p-10">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em]" style={{ color: THREAD }}>{content.tag}</p>
              <h3 className="font-heading text-3xl font-bold uppercase leading-[0.95] text-white xl:text-4xl">{content.title}</h3>
              <div className="my-6 h-px w-12" style={{ backgroundColor: THREAD }} />
              <p className="mb-4 leading-relaxed text-white/80">{content.description}</p>
              <p className="text-sm leading-relaxed text-white/50">{content.detail}</p>
            </div>
          </article>
        })}
      </div>

      {/* Mobile: stacked layout */}
      <div className="mx-auto block max-w-md px-4 lg:hidden">
        {servicesData.map((item) => {
          const content = locale.services.items[item.id]
          return <div key={item.id} className="mb-16">
            <div className="relative h-[60vh] w-full overflow-hidden" style={{ border: `1px solid ${THREAD}` }}>
              <div className="absolute inset-0 overflow-hidden">
                <img src={item.image} alt={content.title} className="h-full w-full object-cover" />
              </div>
            </div>
            <div className="mt-6">
              <h3 className="font-heading text-3xl font-bold uppercase leading-[0.95] text-white">
                {content.title}
              </h3>
              <div className="my-5 h-px w-12" style={{ backgroundColor: THREAD }} />
              <p className="mb-3 text-base leading-relaxed text-white/80">{content.description}</p>
              <p className="text-sm leading-relaxed text-white/50">{content.detail}</p>
            </div>
          </div>
        })}
      </div>

      {/* Closing link into the next step */}
      <div className="mx-auto flex justify-center px-4 mt-12 pb-12">
        <Button variant="white" href="#TrialForm" icon="tabler:arrow-right">
          {locale.services.cta}
        </Button>
      </div>
    </section>
  )
}
