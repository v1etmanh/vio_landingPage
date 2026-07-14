import React from 'react'
import { Icon } from '@iconify/react'

const Joinus = () => {
  return (
    <section id='Contact' className='py-20 bg-darkmode text-white'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
          
          {/* CTA Side */}
          <div>
            <h2 className='text-4xl md:text-6xl font-bold mb-6 text-white'>
              Ready to elevate your fitness?
            </h2>
            <p className='text-white/80 text-lg md:text-xl mb-10 leading-relaxed max-w-lg'>
              Join VIO Fitness today and experience the difference of a truly premium training environment. First trial is on us!
            </p>
            <div className='flex flex-wrap gap-4'>
              <button className='bg-primary text-white text-xl font-semibold py-4 px-10 rounded-full hover:bg-white hover:text-primary transition-all duration-300'>
                Book a Free Trial
              </button>
              <button className='bg-transparent border-2 border-white text-white text-xl font-semibold py-4 px-10 rounded-full hover:bg-white hover:text-darkmode transition-all duration-300'>
                Contact Us
              </button>
            </div>
          </div>

          {/* Info Side */}
          <div className='bg-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-sm border border-white/20'>
            <h3 className='text-2xl font-bold mb-8 text-white'>Visit Us</h3>
            
            <div className='space-y-6'>
              <div className='flex items-start'>
                <div className='w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0'>
                  <Icon icon='tabler:map-pin' className='text-primary text-2xl' />
                </div>
                <div>
                  <h4 className='text-lg font-bold text-white mb-1'>Location</h4>
                  <p className='text-white/70'>123 Nguyen Van Linh, Hai Chau, Da Nang City, Vietnam</p>
                </div>
              </div>

              <div className='flex items-start'>
                <div className='w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0'>
                  <Icon icon='tabler:clock' className='text-primary text-2xl' />
                </div>
                <div>
                  <h4 className='text-lg font-bold text-white mb-1'>Opening Hours</h4>
                  <p className='text-white/70'>Mon - Fri: 5:00 AM - 10:00 PM</p>
                  <p className='text-white/70'>Sat - Sun: 6:00 AM - 9:00 PM</p>
                </div>
              </div>

              <div className='flex items-start'>
                <div className='w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0'>
                  <Icon icon='tabler:phone' className='text-primary text-2xl' />
                </div>
                <div>
                  <h4 className='text-lg font-bold text-white mb-1'>Hotline</h4>
                  <p className='text-white/70'>+84 905 123 456</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Joinus
