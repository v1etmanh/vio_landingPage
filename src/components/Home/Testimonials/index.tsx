import React from 'react'
import { Icon } from '@iconify/react'
import { GOOGLE_RATING } from '@/app/config/business'

const Testimonials = () => {
  return (
    <section id='Reviews' className='py-24'>
      <div className='container mx-auto max-w-7xl px-4 sm:px-6 lg:px-12'>
        <div className='text-center max-w-3xl mx-auto'>
          <div className='flex justify-center items-center gap-4 mb-4'>
            <Icon icon='logos:google-icon' className='text-3xl' />
            <span className='text-2xl font-bold text-gray-700'>Reviews</span>
          </div>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-6'>
            Hội viên nói gì về VIO.
          </h2>
          <div className='flex items-center justify-center gap-2 mb-8'>
            <span className='text-3xl font-bold'>{GOOGLE_RATING.score}</span>
            <div className='flex text-[#fbbc04] text-2xl'>
              <Icon icon='ic:round-star' />
              <Icon icon='ic:round-star' />
              <Icon icon='ic:round-star' />
              <Icon icon='ic:round-star' />
              <Icon icon='ic:round-star' />
            </div>
            <span className='text-gray-500'>({GOOGLE_RATING.countLabel})</span>
          </div>
          <a
            href={GOOGLE_RATING.mapsUrl}
            target='_blank'
            rel='noreferrer'
            id='reviews-google-link'
            className='inline-flex items-center gap-2 border border-gray-300 px-6 py-3 font-semibold text-gray-700 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors duration-200'
          >
            <Icon icon='logos:google-maps' className='text-xl' />
            Xem tất cả đánh giá trên Google Maps
          </a>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
