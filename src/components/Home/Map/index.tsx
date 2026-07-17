import React from 'react'
import { BUSINESS } from '@/app/config/business'
import { trackEvent } from '@/app/utils/analytics'

const Map = () => {
  return (
    <section className='relative w-full h-[400px] md:h-[500px] bg-[#111] border-b-4 border-[#C5A059]'>
      <iframe 
        src={`https://maps.google.com/maps?q=${encodeURIComponent(BUSINESS.address)}&t=m&z=16&output=embed&iwloc=near`}
        width="100%" 
        height="100%" 
        style={{ border: 0, filter: 'grayscale(0.2) contrast(1.1)' }} 
        allowFullScreen={false} 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Vio Fitness Location"
      ></iframe>

      {/* Custom Overlay Tooltip */}
      <div className='absolute top-1/2 left-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center mt-16 md:mt-12'>
        <div className='bg-[#C5A059] text-[#1a1a1a] px-6 py-2.5 text-[11px] font-bold tracking-[0.2em] uppercase shadow-2xl'>
          {BUSINESS.name} - {BUSINESS.address}
        </div>
        <div className='w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-[#C5A059] drop-shadow-md'></div>
        <a
          href={BUSINESS.mapsUrl}
          target='_blank'
          rel='noreferrer'
          onClick={() => trackEvent('directions_clicked')}
          className='mt-3 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#1a1a1a] shadow-lg transition hover:bg-[#1a1a1a] hover:text-white'
        >
          Chỉ đường
        </a>
      </div>
    </section>
  )
}

export default Map
