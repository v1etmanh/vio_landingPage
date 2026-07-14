import React from 'react'

const TrustBar = () => {
  const stats = [
    { label: 'Years of Experience', value: '5+' },
    { label: 'Active Members', value: '1000+' },
    { label: 'Expert Trainers', value: '20+' },
    { label: 'Modern Equipment', value: '100%' },
  ]

  return (
    <section className='relative z-20 -mt-24 mx-4 md:mx-auto max-w-6xl'>
      <div className='bg-white/70 backdrop-blur-2xl border border-gray-200 shadow-[0_10px_40px_rgba(0,0,0,0.08)] rounded-[2rem] px-8 py-10 md:py-14'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-y-10 md:gap-y-0 md:divide-x md:divide-gray-300/60 text-center'>
          {stats.map((stat, index) => (
            <div key={index} className='flex flex-col items-center justify-center px-4'>
              <h3 className='text-[42px] md:text-[54px] font-bold mb-2 text-[#C5A059] [text-shadow:0_2px_15px_rgba(197,160,89,0.3)] tracking-tight leading-none'>
                {stat.value}
              </h3>
              <p className='text-gray-800 text-[11px] md:text-[13px] font-bold uppercase tracking-[0.2em] mt-2 opacity-90'>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustBar
