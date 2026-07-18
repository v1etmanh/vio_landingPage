import React, { useState } from 'react'
import { Icon } from '@iconify/react'

const Knowledge = () => {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null)

  const videos = [
    {
      title: 'How to perfect your Deadlift form',
      description: 'Our head coach breaks down the mechanics of a safe and effective deadlift.',
      thumbnail: '/information_video/VIDEO 1/BÌA.png',
      src: '/information_video/VIDEO 1/VIDE0 1.mov',
      duration: '4:20'
    },
    {
      title: 'Nutrition myths busted',
      description: 'Stop wasting time on fad diets. Here is what science actually says about fat loss.',
      thumbnail: '/information_video/VIDEO 2/BÌA.png',
      src: '/information_video/VIDEO 2/VIDE0 2.mp4',
      duration: '6:15'
    },
    {
      title: 'Maximize your muscle growth',
      description: 'Learn the optimal training frequency and volume to build muscle effectively.',
      thumbnail: '/information_video/VIDE0 3/BÌA.png',
      src: '/information_video/VIDE0 3/VIDEP 3.mp4',
      duration: '5:45'
    }
  ]

  return (
    <section id='Knowledge' className='py-24 lg:py-32 bg-[var(--color-darkmode)] relative z-10 border-t border-white/5'>
      <div className='w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8'>
          <div className='max-w-2xl'>
            <p className='text-[#C5A059] text-xs sm:text-sm tracking-[0.2em] uppercase mb-4 font-bold'>
              EXPERT ADVICE
            </p>
            <h2 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white font-heading uppercase tracking-tighter leading-[0.9]'>
              LEARN FROM <br className='hidden md:block' /> THE PROS.
            </h2>
          </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 xl:gap-12'>
          {videos.map((video, index) => (
            <div key={index} className='group flex flex-col cursor-pointer' onClick={() => setPlayingIndex(index)}>
              <div className='relative aspect-video rounded-none overflow-hidden mb-6 border border-white/10 group-hover:border-white/30 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.8)] bg-black'>
                {playingIndex === index ? (
                  <video
                    src={video.src}
                    autoPlay
                    controls
                    className='w-full h-full object-cover bg-black'
                  />
                ) : (
                  <>
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-105'
                    />
                    <div className='absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500' />
                    <div className='absolute inset-0 flex items-center justify-center z-10'>
                      <div className='w-16 h-16 sm:w-20 sm:h-20 bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:bg-[#C5A059] group-hover:border-[#C5A059] transition-all duration-500 rounded-full'>
                        <Icon icon='tabler:player-play-filled' className='text-2xl sm:text-3xl text-white ml-1' />
                      </div>
                    </div>
                  </>
                )}
              </div>
              <div className='flex flex-col flex-grow px-1'>
                <h3 className='text-xl sm:text-2xl font-black mb-3 text-white font-heading uppercase transition-colors leading-[1.1]'>
                  {video.title}
                </h3>
                <p className='text-white/50 text-sm sm:text-base leading-relaxed font-light'>{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Knowledge
