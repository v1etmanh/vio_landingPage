import React, { useState, useRef, useEffect } from 'react'
import { Icon } from '@iconify/react'
import SliderModule from 'react-slick'
const Slider = (SliderModule as any).default || SliderModule;
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Testimonials = () => {
  const [isHovered, setIsHovered] = useState(false)
  const [direction, setDirection] = useState<'next' | 'prev'>('next')
  const sliderRef = useRef<any>(null)

  const reviews = [
    {
      name: 'Mario Giorgi',
      sub: 'ITALY . DROP-IN',
      initials: 'MG',
      rating: 5,
      comment: 'Excellent gym. The machines are incredibly well selected. The staff is super friendly and welcoming. Definitely the best gym in Da Nang.',
    },
    {
      name: 'Ryan G.',
      sub: 'USA . VISITING',
      initials: 'RG',
      rating: 5,
      comment: 'Randomly stumbled into this place. The gym is brand new with quality products. The staff made me and my wife feel welcome.',
    },
    {
      name: 'Lianne Berard',
      sub: 'WINNIPEG, CANADA . LOCAL GUIDE',
      initials: 'LB',
      rating: 5,
      comment: 'Beautiful gym facility! Employees were very nice and helped me find athletic tape in the area. Would definitely visit again next time I\'m back.',
    },
    {
      name: 'Veronique Vysotskaya',
      sub: 'LOCAL GUIDE . 2 THÁNG TRƯỚC',
      initials: 'VV',
      rating: 5,
      comment: 'Absolutely love this gym in Da Nang. It’s clean, smells great, and the whole space feels very stylish and well-designed. They have a sauna, which is a huge plus after workouts. The staff is friendly and welcoming, and the equipment is brand new and high quality. I’ve just started my second training program with my coach Duo Båo, and the results in just one month have been amazing.',
    },
    {
      name: 'Maria Stadler',
      sub: 'LOCAL GUIDE . 1 THÁNG TRƯỚC',
      initials: 'MS',
      rating: 5,
      comment: 'Great gym, everything is new and clean. Staff is very friendly and helpful. The AC makes it comfortable to workout without sweating too much. They even have a cafe offering protein shakes. Vanilla protein shake with water and ice was good. 10/10. One small recommendation: place water stations, so people can refill their water bottles instead of buying new ones. Save plastic!! 🙏🏽',
    },
    {
      name: 'Oliver Thornton',
      sub: 'LOCAL GUIDE . 1 THÁNG TRƯỚC',
      initials: 'OT',
      rating: 5,
      comment: 'Without a doubt the best gym in Da Nang. From the cleanliness to the place to the quality of the machines. The machines are the best brand of machine in the industry. Startrac leverage chest presses 🤩 Panatta leverage Lat Pull 😍 It’s a bodybuilders Wet Dream 💦 Shout out to Thang the manager for helping me out with an ankle issue and helping me fix my squat form. Incredible staff also!',
    },
    {
      name: 'AKEMI Media',
      sub: 'GOOGLE REVIEW . 3 TUẦN TRƯỚC',
      initials: 'AM',
      rating: 5,
      comment: 'One of the best gyms I’ve been to in Da Nang. So clean, vibey and has every piece of equipment you can think of. Awesome sauna too.',
    },
    {
      name: 'Harriet Fuggle',
      sub: 'GOOGLE REVIEW . 2 THÁNG TRƯỚC',
      initials: 'HF',
      rating: 5,
      comment: 'A great gym, lots of equipment, all new and well maintained. Really friendly staff, great atmosphere, nice and cool inside! They even have a coffee shop on site with protein smoothies ☺️ Highly Recommend',
    },
    {
      name: 'Niko Gangadean',
      sub: 'GOOGLE REVIEW . 1 THÁNG TRƯỚC',
      initials: 'NG',
      rating: 5,
      comment: 'Vio Fitness is a wonderful gym. Plenty of machines, great free weight options, all very clean and functional. It is the perfect temperature with fans running and good AirCon. Not too crowded, and incredible service. Henry was the one upfront at the time and was incredibly helpful and attentive.',
    },
    {
      name: 'Hai Ha Thanh',
      sub: 'GOOGLE REVIEW . 3 THÁNG TRƯỚC',
      initials: 'HH',
      rating: 5,
      comment: 'Great gym with a clean and modern environment. The equipment is new and well-maintained, with everything you need for a full workout. I especially like that they have a sauna, which is perfect for relaxing after training. The drinks are also delicious and provide great energy for workouts. Friendly atmosphere and a very comfortable place to work out. Highly recommended!',
    },
    {
      name: 'Google Reviewer',
      sub: 'GOOGLE REVIEW . 1 THÁNG TRƯỚC',
      initials: 'GR',
      rating: 5,
      comment: 'Amazing gym! The facility is modern, fully air-conditioned, and always very clean. The equipment is top quality, with a great selection of machines and everything you need for a great workout. Everything is well maintained, and you can tell the team genuinely cares about providing the best experience possible for their members. Special mention to Duy, definitely the funniest member of the team! 😋',
    }
  ]

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      if (sliderRef.current && sliderRef.current.innerSlider) {
         const state = sliderRef.current.innerSlider.state;
         const currentSlide = state.currentSlide;
         const slideCount = state.slideCount;
         const slidesToShow = state.slidesToShow;
         
         if (direction === 'next') {
            if (currentSlide >= slideCount - slidesToShow) {
               setDirection('prev');
               sliderRef.current.slickPrev();
            } else {
               sliderRef.current.slickNext();
            }
         } else {
            if (currentSlide <= 0) {
               setDirection('next');
               sliderRef.current.slickNext();
            } else {
               sliderRef.current.slickPrev();
            }
         }
      }
    }, 3000); 
    
    return () => clearInterval(interval);
  }, [isHovered, direction]);

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false, 
    pauseOnHover: false,
    speed: 3000, 
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 1280,
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
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  }

  return (
    <section id='Reviews' className='py-24 bg-transparent relative z-10'>
      <div className='container mx-auto max-w-[1800px] px-4 md:px-8 lg:px-12'>
        <div className='flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16'>
          <h2 className='text-5xl md:text-6xl font-serif text-[#332E29] max-w-lg leading-tight mb-8 lg:mb-0'>
            Loved by the global community.
          </h2>
          
          <div className='flex flex-col items-start lg:items-end gap-2'>
            <div className='flex items-center gap-3'>
              <div className='flex text-[#C5A059] text-sm'>
                <Icon icon='ic:round-star' />
                <Icon icon='ic:round-star' />
                <Icon icon='ic:round-star' />
                <Icon icon='ic:round-star' />
                <Icon icon='ic:round-star' />
              </div>
              <span className='text-[10px] font-bold tracking-[0.2em] uppercase text-[#4A453F]'>
                4.96 AVERAGE . 312 REVIEWS ON GOOGLE
              </span>
            </div>
            <span className='text-3xl font-serif text-[#332E29]'>4.96 / 5.00</span>
          </div>
        </div>

        <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          <Slider ref={sliderRef} {...settings} className='testimonial-slider -mx-4'>
          {reviews.map((review, index) => (
            <div key={index} className='px-3 md:px-4 pb-12 h-full'>
              <div className='bg-white/90 backdrop-blur-sm border-2 border-gray-300 p-6 md:p-8 lg:p-10 rounded-none shadow-[0_10px_40px_rgba(0,0,0,0.04)] h-[480px] flex flex-col justify-between'>
                <div>
                  <div className='flex justify-between items-start mb-6'>
                    <div className='flex text-[#C5A059] text-base md:text-lg'>
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Icon key={i} icon='ic:round-star' />
                      ))}
                    </div>
                    <Icon icon='ph:quotes-light' className='text-4xl md:text-5xl text-[#E8E3D9]' />
                  </div>
                  <p className='text-[#4A453F] leading-relaxed text-[14px] md:text-[16px] italic font-serif mb-6 overflow-hidden text-ellipsis' style={{ display: '-webkit-box', WebkitLineClamp: 8, WebkitBoxOrient: 'vertical' }}>
                    "{review.comment}"
                  </p>
                </div>

                <div className='flex items-center pt-6 border-t border-[#F7F5F0] mt-auto'>
                  <div className='w-12 h-12 md:w-14 md:h-14 rounded-full mr-4 bg-[#7B6349] text-white flex items-center justify-center font-bold text-lg md:text-xl flex-shrink-0'>
                    {review.initials}
                  </div>
                  <div className='overflow-hidden'>
                    <h5 className='font-bold text-[#1A1A1A] text-base md:text-lg mb-1 truncate'>{review.name}</h5>
                    <span className='text-[9px] lg:text-[10px] tracking-[0.1em] lg:tracking-[0.2em] font-bold text-[#8A857F] uppercase block leading-snug break-words'>
                      {review.sub}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
          </Slider>
        </div>
      </div>
      <style>{`
        .testimonial-slider .slick-dots li button:before {
          font-size: 12px;
          color: var(--color-primary);
        }
        .testimonial-slider .slick-dots li.slick-active button:before {
          color: var(--color-darkmode);
        }
      `}</style>
    </section>
  )
}

export default Testimonials
