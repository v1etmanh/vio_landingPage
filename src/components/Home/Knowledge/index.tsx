import React, { useState } from 'react'
import { Icon } from '@iconify/react'

const Knowledge = () => {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null)

  const videos = [
    {
      title: 'How to perfect your Deadlift form',
      description: 'Our head coach breaks down the mechanics of a safe and effective deadlift.',
      thumbnail: '/information_video/VIDEO 1/BÌA.jpg',
      src: '/information_video/VIDEO 1/VIDE0 1.mov',
      duration: '4:20'
    },
    {
      title: 'Nutrition myths busted',
      description: 'Stop wasting time on fad diets. Here is what science actually says about fat loss.',
      thumbnail: '/information_video/VIDEO 2/BÌA.jpg',
      src: '/information_video/VIDEO 2/VIDE0 2.mp4',
      duration: '6:15'
    },
    {
      title: 'Maximize your muscle growth',
      description: 'Learn the optimal training frequency and volume to build muscle effectively.',
      thumbnail: '/information_video/VIDE0 3/BÌA.jpg',
      src: '/information_video/VIDE0 3/VIDEP 3.mp4',
      duration: '5:45'
    }
  ]

  return (
    <section id='Knowledge' className='py-24 bg-[#151210] relative z-10 border-t border-white/5'>
      <div className='w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col md:flex-row justify-between items-end mb-16 border-b border-gray-600/50 pb-8'>
          <div className='max-w-2xl'>
            <p className='text-[var(--color-primary)] text-lg tracking-[0.2em] uppercase mb-4 font-bold font-sans'>
              Expertise
            </p>
            <h2 className='text-3xl sm:text-5xl md:text-6xl font-black text-white font-heading uppercase tracking-tight'>
              Learn from the pros.
            </h2>
          </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 xl:gap-12'>
          {videos.map((video, index) => (
            <div key={index} className='group flex flex-col'>
              <div className='relative h-[240px] sm:h-[300px] md:h-[350px] xl:h-[450px] rounded-none overflow-hidden mb-6 md:mb-8 shadow-2xl border-[2px] border-white/10 group-hover:border-[var(--color-primary)]/50 transition-colors duration-500 bg-black'>
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
                      className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 cursor-pointer'
                      onClick={() => setPlayingIndex(index)}
                    />
                    <div
                      className='absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500 cursor-pointer'
                      onClick={() => setPlayingIndex(index)}
                    />
                    <div
                      className='absolute inset-0 flex items-center justify-center cursor-pointer z-10'
                      onClick={() => setPlayingIndex(index)}
                    >
                      <div className='w-24 h-16 bg-white/10 backdrop-blur-md border-[2px] border-white flex items-center justify-center group-hover:bg-[var(--color-primary)] group-hover:border-[var(--color-primary)] transition-all duration-300 group-hover:scale-105 shadow-[0_0_30px_rgba(0,0,0,0.5)] rounded-none'>
                        <Icon icon='tabler:player-play-filled' className='text-4xl text-white ml-1.5' />
                      </div>
                    </div>
                  </>
                )}
              </div>
              <div className='flex flex-col flex-grow px-2'>
                <h3 className='text-2xl lg:text-3xl font-black mb-3 md:mb-4 text-white font-heading uppercase group-hover:text-[var(--color-primary)] transition-colors cursor-pointer leading-[1.1]' onClick={() => setPlayingIndex(index)}>
                  {video.title}
                </h3>
                <p className='text-white/60 text-base md:text-lg leading-relaxed'>{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Knowledge
