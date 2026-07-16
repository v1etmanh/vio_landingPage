import React from 'react'

const Map = () => {
  return (
    <section className='relative w-full h-[400px] md:h-[500px] bg-[#111] border-b-4 border-[#C5A059]'>
      <iframe 
        src="https://maps.google.com/maps?q=15%20Trần%20Phú,%20Hải%20Châu,%20Đà%20Nẵng&t=m&z=16&output=embed&iwloc=near" 
        width="100%" 
        height="100%" 
        style={{ border: 0, filter: 'grayscale(0.2) contrast(1.1)' }} 
        allowFullScreen={false} 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Vio Fitness Location"
      ></iframe>

      {/* Custom Overlay Tooltip */}
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none mt-16 md:mt-12'>
        <div className='bg-[#C5A059] text-[#1a1a1a] px-6 py-2.5 text-[11px] font-bold tracking-[0.2em] uppercase shadow-2xl'>
          Vio Fitness - 15 Trần Phú
        </div>
        <div className='w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-[#C5A059] drop-shadow-md'></div>
      </div>
    </section>
  )
}

export default Map
