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
        <div className='w-full rounded-none overflow-hidden bg-[var(--color-darkmode)] relative aspect-[9/16] shadow-xl border border-gray-800 transition-transform duration-300 hover:scale-[1.02]'>
          {!isLoaded ? (
            <div
              className='absolute inset-0 flex items-center justify-center cursor-pointer group'
              onClick={() => setIsLoaded(true)}
            >
              {/* Dark overlay for contrast */}
              <div className='absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500'></div>

              {/* Brutalist Tag */}
              <div className='absolute top-6 left-6 bg-[var(--color-primary)] text-white text-[11px] font-bold px-4 py-2 rounded-none shadow-xl uppercase tracking-widest z-10'>
                REEL 0{index + 1}
              </div>

              {/* Rigid Play Button */}
              <div className='absolute inset-0 flex items-center justify-center z-10'>
                <div className='w-24 h-16 bg-white/10 backdrop-blur-md border-[2px] border-white flex items-center justify-center group-hover:bg-[var(--color-primary)] group-hover:border-[var(--color-primary)] transition-all duration-300 group-hover:scale-105 shadow-[0_0_30px_rgba(0,0,0,0.5)] rounded-none'>
                  <Icon icon='ph:play-fill' className='text-white text-3xl ml-1.5' />
                </div>
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
    <section id='Studio' className='py-32 bg-[var(--color-darkmode)] relative z-10 overflow-hidden border-t border-white/5'>
      <div className='w-full max-w-[1700px] mx-auto px-4 sm:px-6 md:px-12 lg:px-8'>
        <div className='flex flex-col md:flex-row justify-between items-end mb-12 md:mb-20 border-b border-gray-600/50 pb-8'>
          <h2 className='text-4xl sm:text-5xl md:text-[80px] xl:text-[90px] font-black text-white font-heading tracking-tight uppercase leading-[0.95]'>
            STUDIO <br className='hidden md:block' />IN MOTION.
          </h2>
          <a href='#' className='group flex items-center gap-3 text-sm xl:text-base font-bold font-sans tracking-[0.2em] uppercase mt-8 md:mt-0 text-gray-300 hover:text-[var(--color-primary)] transition-colors'>
            SEE ALL REELS
            <div className='w-10 h-10 border border-white/20 flex items-center justify-center rounded-none group-hover:border-[var(--color-primary)] group-hover:bg-[var(--color-primary)] transition-all duration-300'>
              <Icon icon='ph:arrow-right-bold' className='text-white text-lg group-hover:translate-x-1 transition-transform' />
            </div>
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
          width: 56px;
          height: 64px;
          background: #221e1a;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 0;
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
          background: var(--color-primary);
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
