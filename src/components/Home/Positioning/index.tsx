import React from 'react'
import { Icon } from '@iconify/react'
import Button from '../../ui/Button'

const Positioning = () => {
  const profiles = [
    {
      title: 'EXPATS',
      subtitle: 'Seamless Community for Expats',
      description: 'Connect with a diverse, global community. Enjoy multilingual support, flexible memberships, and exclusive social events in our vibrant VIO lounge.',
      iconMain: 'ph:globe-light',
      iconSub: 'ph:airplane-tilt-fill',
      subPos: '-bottom-1 -right-2 text-2xl',
    },
    {
      title: 'FITNESS ENTHUSIASTS',
      subtitle: 'Premium Training & Equipment',
      description: 'Push your limits with state-of-the-art facilities, elite Olympic lifting areas, expert personal trainers, and specialized workshops.',
      iconMain: 'ph:person-simple-run-light',
      iconSub: 'ph:barbell-fill',
      subPos: 'bottom-0 -right-4 text-3xl',
    },
    {
      title: 'BEGINNERS',
      subtitle: 'Guided & Supportive Environment',
      description: 'Start your fitness journey confidently with expert induction sessions, tailored beginner programs, small group classes, and a welcoming atmosphere.',
      iconMain: 'ph:plant-light',
      iconSub: 'ph:heart-fill',
      subPos: '-top-2 -right-2 text-2xl',
    },
    {
      title: 'BUSY PROFESSIONALS',
      subtitle: 'Flexible Fitness for Professionals',
      description: 'Optimize your time with 24/7 access, express classes, sleek workspace, luxury locker rooms, and efficient booking system.',
      iconMain: 'ph:clock-light',
      iconSub: 'ph:briefcase-fill',
      subPos: '-bottom-2 -right-3 text-3xl',
    },
  ]

  return (
    <section className='py-24 bg-transparent relative z-10'>
      <div className='container mx-auto max-w-[1400px] px-4'>
        <div className='text-center max-w-4xl mx-auto mb-16'>
          <h2 className='text-5xl md:text-6xl font-bold mb-6 text-[#101b2b] tracking-tight' style={{ fontFamily: 'Georgia, serif' }}>
            You will love VIO if...
          </h2>
          <p className='text-gray-800 text-xl font-light leading-relaxed max-w-2xl mx-auto'>
            Discover how VIO caters to your unique fitness journey.<br className="hidden md:block" />
            Join a community that understands your goals.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16'>
          {profiles.map((profile, index) => (
            <div 
              key={index} 
              className='relative flex flex-col items-center text-center p-8 rounded-[2rem] border-2 border-white shadow-[0_15px_35px_rgba(0,0,0,0.1),inset_0_0_60px_rgba(255,255,255,0.9)] bg-gradient-to-b from-white/60 via-gray-100/30 to-white/60 backdrop-blur-xl min-h-[520px] hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(0,0,0,0.15),inset_0_0_80px_rgba(255,255,255,1)] transition-all duration-500 group'
            >
              {/* Golden Icon Combination */}
              <div className='relative mb-10 mt-6'>
                <Icon icon={profile.iconMain} className='text-[75px] text-[#C5A059] group-hover:scale-110 transition-transform duration-500' />
                <Icon icon={profile.iconSub} className={`absolute text-[#C5A059] bg-white/70 backdrop-blur-md rounded-full p-0.5 ${profile.subPos}`} />
              </div>
              
              <h4 className='text-[22px] font-bold mb-4 text-[#1a1a1a] tracking-wider uppercase'>
                {profile.title}
              </h4>
              
              <h5 className='text-[19px] font-bold text-[#1a1a1a] mb-5 leading-snug min-h-[56px]'>
                {profile.subtitle}
              </h5>
              
              <p className='text-[16px] text-[#1a1a1a] leading-relaxed font-medium opacity-80'>
                {profile.description}
              </p>
            </div>
          ))}
        </div>

        <div className='flex justify-center'>
          <Button variant="primary" size="lg" className="flex items-center gap-3 group shadow-md hover:shadow-lg">
            <span className="tracking-wide text-sm md:text-base">EXPLORE VIO MEMBERSHIPS</span>
            <span className="font-light mx-1 opacity-60">|</span>
            <span className="font-medium text-sm md:text-base">Find Your Fit</span>
            <Icon icon="tabler:arrow-right" className="text-xl group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Positioning
