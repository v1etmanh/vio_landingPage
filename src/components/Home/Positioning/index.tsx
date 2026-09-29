import React from 'react'
import { Icon } from '@iconify/react'
import Button from '../../ui/Button'
import type { SiteLanguage } from '../../../App'

interface PositioningProps {
  language?: SiteLanguage
}

const Positioning: React.FC<PositioningProps> = () => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const regSection = document.getElementById('Registration')
    if (regSection) {
      regSection.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.location.hash = 'Registration'
    }
  }

  return (
    <section className='py-24 bg-transparent relative z-10'>
      <div className='container mx-auto max-w-[1700px] px-4 md:px-8 lg:px-12'>
        <div className='flex justify-center'>
          <Button
            href="#Registration"
            onClick={handleClick}
            variant="primary"
            size="lg"
            className="group shadow-md hover:shadow-lg cursor-pointer"
            aria-label="Explore VIO Memberships - Find Your Fit"
          >
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
