import React from 'react'
import { Icon } from '@iconify/react'
import Button from '../../ui/Button'

const Positioning = () => {
  return (
    <section className='py-24 bg-transparent relative z-10'>
      <div className='container mx-auto max-w-[1700px] px-4 md:px-8 lg:px-12'>
        <div className='flex justify-center'>
          <Button variant="primary" size="lg" className="group shadow-md hover:shadow-lg">
            <span className="tracking-wide text-sm md:text-base">EXPLORE VIO MEMBERSHIPS</span>
            <span className="font-light mx-2">|</span>
            <span className="font-medium text-sm md:text-base">Find Your Fit</span>
            <Icon icon="tabler:arrow-right" className="text-xl ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Positioning
