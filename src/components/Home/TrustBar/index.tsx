import React from 'react'

const TrustBar = () => {
  const stats = [
    { label: 'MEMBERS ON FLOOR', value: '38', sub: '/ 120 CAPACITY' },
    { label: 'FREE PT SLOTS', value: '06', sub: 'NEXT 24 HOURS' },
    { label: 'AVERAGE RATING', value: '4.96', sub: 'ON 312 REVIEWS' },
    { label: 'OPEN TODAY', value: '14h', sub: '05:30 — 20:30' },
  ]

  return (
    <section className='relative z-20 -mt-32 md:-mt-36 mx-2 md:mx-auto w-[98%] max-w-[1600px]'>
      <div className='bg-[#161310]/95 backdrop-blur-2xl border border-[#302A22] shadow-[0_10px_40px_rgba(0,0,0,0.5)] rounded-none px-4 md:px-6 py-4 md:py-5'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-y-6 md:gap-y-0 md:divide-x md:divide-[#302A22]'>
          {stats.map((stat, index) => (
            <div key={index} className='flex flex-col justify-center px-3 md:px-8 text-left'>
              <p className='text-[#B4A896] text-[10px] md:text-[12px] font-bold uppercase tracking-[0.15em] mb-0 md:mb-1'>
                {stat.label}
              </p>
              <div className='flex flex-wrap items-baseline gap-x-2 gap-y-1'>
                <h3 className='text-[38px] md:text-[48px] font-serif italic text-[#E6B869] tracking-tight leading-none'>
                  {stat.value}
                </h3>
                {stat.sub && (
                  <span className='text-[#7A7367] text-[10px] md:text-[11px] font-bold uppercase tracking-wider'>
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
