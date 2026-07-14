import React from 'react'

const Services = () => {
  const items = [
    {
      title: 'Free Weight Zone',
      tag: 'HAMMER STRENGTH DUMBBELLS',
      imgSrc: '/dung_cu/Screenshot 2026-07-15 000755.png',
      span: 'md:col-span-2 md:row-span-2',
      titleSize: 'text-3xl md:text-5xl font-serif',
    },
    {
      title: 'Functional Area',
      tag: 'VERSATILE WORKOUT SPACE',
      imgSrc: '/dung_cu/Screenshot 2026-07-15 000815.png',
      span: 'md:col-span-1 md:row-span-1',
      titleSize: 'text-2xl font-serif',
    },
    {
      title: 'Cardio Deck',
      tag: 'IMPULSE TREADMILLS',
      imgSrc: '/dung_cu/Screenshot 2026-07-15 000836.png',
      span: 'md:col-span-1 md:row-span-1',
      titleSize: 'text-2xl font-serif',
    },
    {
      title: 'Pin-Loaded Machines',
      tag: 'TARGETED MUSCLE FOCUS',
      imgSrc: '/dung_cu/Screenshot 2026-07-15 002352.png',
      span: 'md:col-span-1 md:row-span-1',
      titleSize: 'text-2xl md:text-3xl font-serif',
    },
    {
      title: 'Performance Floor',
      tag: 'FREE-WEIGHT PLATFORM',
      imgSrc: '/dung_cu/Screenshot 2026-07-15 002417.png',
      span: 'md:col-span-2 md:row-span-1',
      titleSize: 'text-2xl md:text-3xl font-serif',
    }
  ]

  return (
    <section id='Services' className='py-8 bg-[#1A1A1A]'>
      <div className='w-full px-4 md:px-6'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 h-auto md:h-[90vh] min-h-[800px]'>
          {items.map((item, index) => (
            <div key={index} className={`relative group overflow-hidden rounded-2xl ${item.span}`}>
              <img
                src={item.imgSrc}
                alt={item.title}
                className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-105'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20' />
              
              {/* Top Right Tag */}
              <div className='absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1 border border-white/10'>
                <p className='text-white/90 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em]'>
                  {item.tag}
                </p>
              </div>

              {/* Bottom Left Title */}
              <div className='absolute bottom-6 left-6 pr-6'>
                <h3 className={`text-white ${item.titleSize}`}>
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
