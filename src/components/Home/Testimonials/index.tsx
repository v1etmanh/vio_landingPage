import React from 'react'
import { Icon } from '@iconify/react'
import { REVIEWS_CONFIG } from '@/app/config/reviews'
import { useLocale } from '@/app/context/useLocale'

const Testimonials = () => {
  const locale = useLocale()
  return (
    <section id='Reviews' className='py-24'>
      <div className='container mx-auto max-w-7xl px-4 sm:px-6 lg:px-12'>
        <div className='text-center max-w-3xl mx-auto'>
          <div className='flex justify-center items-center gap-4 mb-4'>
            <Icon icon='logos:google-icon' className='text-3xl' />
            <span className='text-2xl font-bold text-gray-700'>{locale.reviews.label}</span>
          </div>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-6'>
            {locale.reviews.heading}
          </h2>
          <div className='flex items-center justify-center gap-2 mb-8'>
            <span className='text-3xl font-bold'>{REVIEWS_CONFIG.score}</span>
            <div className='flex text-[#fbbc04] text-2xl'>
              <Icon icon='ic:round-star' />
              <Icon icon='ic:round-star' />
              <Icon icon='ic:round-star' />
              <Icon icon='ic:round-star' />
              <Icon icon='ic:round-star' />
            </div>
            <span className='text-gray-500'>({REVIEWS_CONFIG.countLabel})</span>
          </div>
          <a
            href={REVIEWS_CONFIG.mapsUrl}
            target='_blank'
            rel='noreferrer'
            id='reviews-google-link'
            className='inline-flex items-center gap-2 border border-gray-300 px-6 py-3 font-semibold text-gray-700 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors duration-200'
          >
            <Icon icon='logos:google-maps' className='text-xl' />
            {locale.reviews.button}
          </a>
          <p className='mt-4 text-xs text-gray-500'>{locale.reviews.verified} {REVIEWS_CONFIG.lastVerifiedAt}</p>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
