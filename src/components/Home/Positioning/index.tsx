import React from 'react'
import { Icon } from '@iconify/react'
import Button from '../../ui/Button'
import { BUSINESS } from '@/app/config/business'
import { useLocale } from '@/app/context/useLocale'

const Positioning = () => {
  const locale = useLocale()
  return (
    <section id='About' className='py-24 bg-transparent relative z-10'>
      <div className='container mx-auto max-w-[1700px] px-4 md:px-8 lg:px-12'>
        <div className='grid items-center gap-8 lg:grid-cols-[1fr_auto]'>
          <div className='max-w-3xl'>
            <p className='mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-primary)]'>{locale.positioning.eyebrow}</p>
            <h2 className='font-heading text-3xl font-bold uppercase leading-tight text-[var(--color-darkmode)] sm:text-5xl'>
              {locale.positioning.title}
            </h2>
            <p className='mt-5 text-lg leading-relaxed text-black/60'>
              {locale.positioning.body.replace(/^(Ba|Three)/, String(BUSINESS.floors))}
            </p>
          </div>
          <Button href='#TrialForm' variant='primary' size='lg' className='group shadow-md hover:shadow-lg'>
            <span className='tracking-wide text-sm md:text-base'>{locale.positioning.cta}</span>
            <Icon icon='tabler:arrow-right' className='ml-2 text-xl transition-transform group-hover:translate-x-1' />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Positioning
