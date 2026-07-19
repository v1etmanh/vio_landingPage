import React, { useRef, useState, useEffect } from 'react'
import { Icon } from '@iconify/react'
import SliderModule from 'react-slick'
const Slider = (SliderModule as any).default || SliderModule;
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Button from '../../ui/Button'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Testimonials = () => {
  const [slidesToShow, setSlidesToShow] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1)
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2)
      } else {
        setSlidesToShow(3)
      }
    }
    
    // Set initial width
    handleResize()
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const sliderRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    // Hardware acceleration
    gsap.set([headerRef.current?.children, sliderRef.current, ctaRef.current], {
      y: 50,
      opacity: 0,
      force3D: true
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
        invalidateOnRefresh: true,
      }
    });

    if (headerRef.current?.children) {
      tl.to(headerRef.current.children, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
      });
    }

    tl.to(sliderRef.current, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power3.out'
    }, "-=0.4");

    tl.to(ctaRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power3.out'
    }, "-=0.6");

  }, { scope: sectionRef });

  const reviews = [
    {
      name: 'AKEMI MEDIA',
      time: '1 month ago',
      rating: 5,
      comment: 'One of the best gyms I’ve been to in Da Nang. So clean, vibey and has every piece of equipment you can think of. Awesome sauna too. The staff is always welcoming, and the overall atmosphere really pushes you to train harder. Highly recommend this place to anyone looking for a premium workout experience in the city.',
      avatar: '/images/testimonial/user1.svg'
    },
    {
      name: 'Niko gangadean',
      time: '2 months ago',
      rating: 5,
      comment: 'Vio Fitness is a wonderful gym. Plenty of machines, great free weight options, all very clean and functional. It is the perfect temperature with fans running and good AirCon. Not too crowded, and incredible service. Henry was the one upfront at the time and was incredibly helpful and attentive.',
      avatar: '/images/testimonial/user2.svg'
    },
    {
      name: 'Hai Ha Thanh',
      time: '3 weeks ago',
      rating: 5,
      comment: 'Great gym with a clean and modern environment. The equipment is new and well-maintained, with everything you need for a full workout. I especially like that they have a sauna, which is perfect for relaxing after training. The drinks are also delicious and provide great energy for workouts. Friendly atmosphere and a very comfortable place to work out. Highly recommended!',
      avatar: '/images/testimonial/user3.svg'
    },
    {
      name: 'Mikalil Kuncekli',
      time: '1 month ago',
      rating: 5,
      comment: 'I have trained in many gyms across Asia, but this is by far the friendliest, nicest, and most welcoming gym I’ve ever been to. The atmosphere is amazing and the staff are incredibly kind and helpful. The equipment is top-notch and the layout is very spacious, meaning you never feel crowded even during peak hours.',
      avatar: '/images/testimonial/user1.svg'
    }
  ]

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    swipeToSlide: true,
  }

  return (
    <section id='Reviews' ref={sectionRef} className='py-24 lg:py-32 overflow-hidden bg-white'>
      <div className='container mx-auto max-w-[1600px] px-4 sm:px-6 md:px-12 lg:px-8'>
        <div ref={headerRef} className='text-center max-w-3xl mx-auto mb-16 sm:mb-20'>
          <div className='flex justify-center items-center gap-4 mb-4'>
            <Icon icon='logos:google-icon' className='text-2xl sm:text-3xl' />
            <span className='text-xl sm:text-2xl font-bold text-gray-700 tracking-wider uppercase font-heading'>Reviews</span>
          </div>
          <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 font-heading tracking-tighter uppercase leading-[0.9] text-gray-900'>
            WHAT OUR <br className="hidden sm:block" />MEMBERS SAY.
          </h2>
          <div className='flex flex-wrap items-center justify-center gap-2'>
            <span className='text-3xl sm:text-4xl font-bold font-heading text-gray-900'>5.0</span>
            <div className='flex text-[#fbbc04] text-xl sm:text-2xl'>
              <Icon icon='ic:round-star' />
              <Icon icon='ic:round-star' />
              <Icon icon='ic:round-star' />
              <Icon icon='ic:round-star' />
              <Icon icon='ic:round-star' />
            </div>
            <span className='text-gray-500 font-medium text-sm sm:text-base ml-2'>(99+ reviews)</span>
          </div>
        </div>

        <div ref={sliderRef} className='w-full'>
          <Slider {...settings} className='testimonial-slider'>
            {reviews.map((review, index) => (
              <div key={index} className='px-2 sm:px-4 pb-10'>
                <div className='bg-white p-5 sm:p-8 rounded-2xl shadow-lg border border-gray-100'>
                  <div className='flex flex-wrap items-center mb-4 gap-3'>
                    <div className='w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-gray-200 shrink-0'>
                      <img src={review.avatar} alt={review.name} className='w-full h-full object-cover' />
                    </div>
                    <div className='flex-grow'>
                      <h5 className='font-bold text-base sm:text-lg text-gray-900'>{review.name}</h5>
                      <div className='flex items-center gap-2 flex-wrap'>
                        <div className='flex text-[#fbbc04] text-xs sm:text-sm'>
                          {Array.from({ length: review.rating }).map((_, i) => (
                            <Icon key={i} icon='ic:round-star' />
                          ))}
                        </div>
                        <span className='text-gray-400 text-xs sm:text-sm'>{review.time}</span>
                      </div>
                    </div>
                    <Icon icon='logos:google-icon' className='text-xl sm:text-2xl opacity-50 shrink-0 hidden sm:block' />
                  </div>
                  <p className='text-gray-600 leading-relaxed text-sm sm:text-base'>"{review.comment}"</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div ref={ctaRef} className='mt-8 sm:mt-12 flex justify-center px-4'>
          <Button 
            variant="dark"
            href="https://maps.app.goo.gl/pCEQfgEn4dRgezyh9" 
            target="_blank" 
            rel="noopener noreferrer"
            icon="logos:google-icon"
            className="w-full sm:w-auto text-center justify-center"
          >
            Xem thêm đánh giá trên Google
          </Button>
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
