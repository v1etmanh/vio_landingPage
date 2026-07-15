import React from 'react'

const TrustBar = () => {
  const stats = [
    { label: 'MEMBERS ON FLOOR', value: '38', sub: '/ 120 CAPACITY' },
    { label: 'FREE PT SLOTS', value: '06', sub: 'NEXT 24 HOURS' },
    { label: 'AVERAGE RATING', value: '4.96', sub: 'ON 312 REVIEWS' },
    { label: 'OPEN TODAY', value: '14h', sub: '05:30 — 20:30' },
  ]

  return (
    <section className='relative z-20 mx-2 md:mx-auto w-[98%] max-w-[1600px] mb-12'>
      <div className='bg-white/70 backdrop-blur-xl border border-gray-200 shadow-[0_10px_40px_rgba(0,0,0,0.05)] rounded-none px-4 md:px-6 py-4 md:py-5'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-y-6 md:gap-y-0 md:divide-x md:divide-gray-200'>
          {stats.map((stat, index) => (
            <div key={index} className='flex flex-col justify-center px-3 md:px-8 text-left'>
              <p className='text-gray-600 text-[10px] md:text-[12px] font-bold uppercase tracking-[0.15em] mb-0 md:mb-1'>
                {stat.label}
              </p>
              <div className='flex flex-wrap items-baseline gap-x-2 gap-y-1'>
                <h3 className='text-[38px] md:text-[48px] font-serif italic text-[#B48F44] tracking-tight leading-none'>
                  {stat.value}
                </h3>
                {stat.sub && (
                  <span className='text-gray-500 text-[10px] md:text-[11px] font-bold uppercase tracking-wider'>
                    {stat.sub}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustBar
