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

  const FacebookReel = ({ videoId, index }: { videoId: string, index: number }) => {
    const videoUrl = encodeURIComponent(`https://www.facebook.com/watch/?v=${videoId}`);

    return (
      <div className='px-3 xl:px-4 group'>
        <div className='w-full rounded-none overflow-hidden bg-black relative aspect-[9/16] border border-white/10 group-hover:border-white/30 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.8)]'>
            <iframe
              src={`https://www.facebook.com/plugins/video.php?href=${videoUrl}&show_text=false&width=400`}
              className='w-full h-full border-none overflow-hidden'
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              loading="lazy"
            ></iframe>
        </div>
      </div>
    )
  }

  return (
    <section id='Studio' className='py-24 lg:py-32 bg-[var(--color-darkmode)] relative z-10 overflow-hidden border-t border-white/5'>
      <div className='w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 lg:px-8'>
        <div className='flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8'>
          <div className='max-w-2xl'>
            <p className='text-[#C5A059] text-xs sm:text-sm tracking-[0.2em] uppercase mb-4 font-bold'>
              SOCIAL HIGHLIGHTS
            </p>
            <h2 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white font-heading uppercase tracking-tighter leading-[0.9]'>
              STUDIO <br className='hidden md:block' /> IN MOTION.
            </h2>
          </div>
          <a href='#' className='group flex items-center gap-4 cursor-pointer mt-8 md:mt-0'>
            <span className='relative font-bold text-sm xl:text-base tracking-[0.2em] uppercase text-gray-300 overflow-hidden py-1 group-hover:text-white transition-colors duration-300'>
              XEM THÊM
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#C5A059] -translate-x-[105%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
            </span>
            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#C5A059] group-hover:border-[#C5A059] group-hover:shadow-[0_5px_15px_rgba(197,160,89,0.4)] transition-all duration-500">
              <Icon icon='tabler:arrow-right' className='text-gray-300 group-hover:text-white text-xl transition-colors duration-500' />
            </div>
          </a>
        </div>

        <div className='-mx-3 xl:-mx-4 mt-12 studio-slider w-full overflow-hidden sm:overflow-visible'>
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
