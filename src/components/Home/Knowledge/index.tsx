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
    <section id='Knowledge' className='py-24 bg-transparent'>
      <div className='w-full max-w-[1600px] mx-auto px-4 lg:px-8'>
        <div className='flex flex-col md:flex-row justify-between items-end mb-16'>
          <div className='max-w-2xl'>
            <p className='text-[#C5A059] text-lg tracking-widest uppercase mb-4 font-semibold'>
              Expertise
            </p>
            <h2 className='text-5xl md:text-6xl font-bold text-[#1a1a1a] tracking-tight'>
              Learn from the pros.
            </h2>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-12'>
          {videos.map((video, index) => (
            <div key={index} className='group'>
              <div className='relative h-[400px] md:h-[500px] xl:h-[650px] rounded-3xl overflow-hidden mb-8 shadow-2xl border border-gray-200 bg-black'>
                {playingIndex === index ? (
                  <video
                    src={video.src}
                    autoPlay
                    controls
                    className='w-full h-full object-contain bg-black'
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
                      className='absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300 cursor-pointer' 
                      onClick={() => setPlayingIndex(index)}
                    />
                    <div 
                      className='absolute inset-0 flex items-center justify-center cursor-pointer'
                      onClick={() => setPlayingIndex(index)}
                    >
                      <div className='w-24 h-24 bg-[#C5A059]/90 backdrop-blur-sm text-white rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-2xl'>
                        <Icon icon='tabler:player-play-filled' className='text-5xl ml-2' />
                      </div>
                    </div>
                  </>
                )}
              </div>
              <h3 className='text-2xl lg:text-3xl font-bold mb-4 text-[#1a1a1a] group-hover:text-[#C5A059] transition-colors cursor-pointer' onClick={() => setPlayingIndex(index)}>
                {video.title}
              </h3>
              <p className='text-gray-700 text-lg leading-relaxed'>{video.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Knowledge
