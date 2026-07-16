import React, { useState } from 'react'
import SliderModule from 'react-slick'
const Slider = (SliderModule as any).default || SliderModule;
import { Icon } from '@iconify/react'

const StudioInMotion = () => {
  const videoIds = [
    '26590822753873665',
    '4330502083861415',
    '856023406827575',
    '1755260939185962',
    '961939033050680',
    '1881497989222087'
  ]

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          arrows: false
        }
      }
    ]
  }

  // Facade pattern component for faster load
  const FacebookReel = ({ videoId, index }: { videoId: string, index: number }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const videoUrl = encodeURIComponent(`https://www.facebook.com/watch/?v=${videoId}`);

    return (
      <div className='px-3 xl:px-4'>
        <div className='w-full rounded-none overflow-hidden bg-[#1a1a1a] relative aspect-[9/16] shadow-xl border border-gray-800 transition-transform duration-300 hover:scale-[1.02]'>
          {!isLoaded ? (
            <div 
              className='absolute inset-0 flex items-center justify-center cursor-pointer group'
              onClick={() => setIsLoaded(true)}
            >
              {/* Fake UI resembling Facebook Reel for facade */}
              <div className='absolute top-6 left-6 right-6 flex justify-between items-start z-10'>
                <div className='flex items-center gap-3'>
                  <div className='w-10 h-10 rounded-full bg-black flex items-center justify-center border border-gray-600 shadow-md'>
                    <span className='text-[12px] text-white font-bold'>VIO</span>
                  </div>
                  <span className='text-white text-sm font-bold drop-shadow-lg'>Vio Fitness</span>
                </div>
                <div className='flex flex-col items-center gap-1'>
                  <Icon icon='ph:share-network-bold' className='text-white text-2xl drop-shadow-lg' />
                  <span className='text-white text-[11px] drop-shadow-lg font-medium'>Chia sẻ</span>
                </div>
              </div>
              <div className='absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70'></div>
              <div className='absolute top-4 left-4 bg-[#C5A059] text-black text-xs font-bold px-3 py-1 rounded shadow-md uppercase tracking-wider'>
                Reel 0{index + 1}
              </div>
              
              <div className='w-20 h-20 rounded-full bg-white/20 backdrop-blur-md border-[3px] border-white flex items-center justify-center z-10 group-hover:bg-[#C5A059]/90 group-hover:border-[#C5A059] transition-all duration-300 group-hover:scale-110 shadow-[0_0_30px_rgba(0,0,0,0.5)]'>
                <Icon icon='ph:play-fill' className='text-white text-3xl ml-1.5' />
              </div>
            </div>
          ) : (
            <iframe 
              src={`https://www.facebook.com/plugins/video.php?href=${videoUrl}&show_text=false&width=400`} 
              className='w-full h-full border-none overflow-hidden'
              scrolling="no" 
              frameBorder="0" 
              allowFullScreen={true} 
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          )}
        </div>
      </div>
    )
  }

  return (
    <section id='Studio' className='py-32 bg-transparent relative z-10 overflow-hidden'>
      <div className='w-full px-6 md:px-12 lg:px-20'>
        <div className='flex flex-col md:flex-row justify-between items-end mb-8 md:mb-16'>
          <h2 className='text-4xl sm:text-6xl md:text-[80px] xl:text-[100px] font-black text-[#1a1a1a] tracking-tighter uppercase leading-[0.9]'>
            STUDIO <br className='hidden md:block' />IN MOTION.
          </h2>
          <a href='#' className='group flex items-center gap-3 text-sm xl:text-base font-bold tracking-widest uppercase mt-8 md:mt-0 pb-2 border-b-2 border-transparent hover:border-[#1a1a1a] transition-all'>
            SEE ALL REELS
            <Icon icon='ph:arrow-right-bold' className='text-[#C5A059] text-lg group-hover:translate-x-2 transition-transform' />
          </a>
        </div>

        <div className='-mx-3 xl:-mx-4 mt-12 studio-slider'>
          <Slider {...settings}>
            {videoIds.map((id, index) => (
              <FacebookReel key={id} videoId={id} index={index} />
            ))}
          </Slider>
        </div>
      </div>

      <style>{`
        .studio-slider .slick-prev,
        .studio-slider .slick-next {
          width: 48px;
          height: 48px;
          background: #1a1a1a;
          border-radius: 50%;
          z-index: 20;
          transition: all 0.3s ease;
        }
        .studio-slider .slick-prev {
          left: -24px;
        }
        .studio-slider .slick-next {
          right: -24px;
        }
        .studio-slider .slick-prev:hover,
        .studio-slider .slick-next:hover {
          background: #C5A059;
        }
        .studio-slider .slick-prev:before,
        .studio-slider .slick-next:before {
          font-family: inherit;
          font-size: 20px;
        }
        @media (max-width: 1650px) {
          .studio-slider .slick-prev { left: 10px; }
          .studio-slider .slick-next { right: 10px; }
        }
      `}</style>
    </section>
  )
}

export default StudioInMotion
