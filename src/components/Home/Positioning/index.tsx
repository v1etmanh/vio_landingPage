import React from 'react'
import { Icon } from '@iconify/react'

const Positioning = () => {
  return (
    <section className='py-24 bg-transparent relative z-10'>
      <div className='container mx-auto max-w-[1700px] px-4 md:px-8 lg:px-12'>
        <div className='flex justify-center'>
          <button className='bg-gradient-to-r from-[#B48F44] via-[#E2C779] to-[#B48F44] hover:from-[#9D7A35] hover:via-[#D1B463] hover:to-[#9D7A35] text-[#1a1a1a] px-10 py-4 rounded-md shadow-lg transition-all hover:shadow-xl flex items-center gap-3 font-semibold group'>
            <span className="tracking-wide text-sm md:text-base">EXPLORE VIO MEMBERSHIPS</span>
            <span className="font-light mx-1">|</span>
            <span className="font-medium text-sm md:text-base">Find Your Fit</span>
            <Icon icon="tabler:arrow-right" className="text-xl group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Positioning
