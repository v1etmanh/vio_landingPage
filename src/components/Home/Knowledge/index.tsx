import React, { useState } from 'react'
import { Icon } from '@iconify/react'

const Knowledge = () => {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null)

  const videos = [
    {
      title: 'How to perfect your Deadlift form',
      description: 'Our head coach breaks down the mechanics of a safe and effective deadlift.',
      thumbnail: '/images/knowledge_thumbnail_1.png',
      src: '/information_video/VIDEO 1/VIDE0 1.mov',
      duration: '4:20'
    },
    {
      title: 'Nutrition myths busted',
      description: 'Stop wasting time on fad diets. Here is what science actually says about fat loss.',
      thumbnail: '/information_video/VIDEO 2/BÌA.png',
      src: '/information_video/VIDEO 2/VIDE0 2.mp4',
      duration: '6:15'
    }
  ]

  return (
    <section id='Knowledge' className='py-24 bg-transparent'>
      <div className='container mx-auto max-w-7xl px-4'>
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

        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
          {videos.map((video, index) => (
            <div key={index} className='group'>
              <div className='relative h-[350px] md:h-[450px] rounded-2xl overflow-hidden mb-6 shadow-xl border border-gray-200 bg-black'>
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
                    <div className='absolute bottom-5 right-5 bg-black/80 text-white px-4 py-1.5 rounded-lg text-sm font-bold tracking-wider'>
                      {video.duration}
                    </div>
                  </>
                )}
              </div>
              <h3 className='text-2xl font-bold mb-3 text-[#1a1a1a] group-hover:text-[#C5A059] transition-colors cursor-pointer' onClick={() => setPlayingIndex(index)}>
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
