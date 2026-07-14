import React from 'react'
import { Icon } from '@iconify/react'

const Services = () => {
  const services = [
    {
      title: 'Personal Training',
      description: 'Achieve your goals faster with customized plans and 1-on-1 expert guidance.',
      imgSrc: '/landscape/gym_01.jpg',
      link: '/services#pt',
    },
    {
      title: 'Strength & Conditioning',
      description: 'Access premium, heavy-duty equipment for serious lifters and athletes.',
      imgSrc: '/landscape/gym_02.jpg',
      link: '/services#strength',
    },
    {
      title: 'Group Classes',
      description: 'Sweat it out in high-energy classes designed for all fitness levels.',
      imgSrc: '/landscape/gym_03.jpg',
      link: '/services#group',
    },
  ]

  return (
    <section id='Services' className='py-20'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='flex flex-col md:flex-row justify-between items-end mb-12'>
          <div className='max-w-2xl'>
            <p className='text-primary text-lg tracking-widest uppercase mb-4 font-semibold'>
              Our Services
            </p>
            <h2 className='text-4xl md:text-5xl font-bold'>
              Everything you need to succeed.
            </h2>
          </div>
          <a href='/services' className='mt-6 md:mt-0 text-primary font-semibold flex items-center hover:underline'>
            View all services <Icon icon='tabler:arrow-right' className='ml-2' />
          </a>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {services.map((service, index) => (
            <a href={service.link} key={index} className='group cursor-pointer'>
              <div className='relative h-[400px] rounded-2xl overflow-hidden mb-6'>
                <img
                  src={service.imgSrc}
                  alt={service.title}
                 
                  className='object-cover transition-transform duration-700 group-hover:scale-105'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent' />
                <div className='absolute bottom-0 left-0 p-8'>
                  <h3 className='text-white text-2xl font-bold mb-2'>{service.title}</h3>
                  <p className='text-white/80 line-clamp-2'>{service.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
