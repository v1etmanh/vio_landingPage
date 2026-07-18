import React from 'react'
import { Icon } from '@iconify/react'
import SliderModule from 'react-slick'
const Slider = (SliderModule as any).default || SliderModule;
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Button from '../../ui/Button'

const Testimonials = () => {
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
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
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
    <section id='Reviews' className='py-24'>
      <div className='container mx-auto max-w-7xl px-4 sm:px-6 lg:px-12'>
        <div className='text-center max-w-3xl mx-auto mb-16'>
          <div className='flex justify-center items-center gap-4 mb-4'>
            <Icon icon='logos:google-icon' className='text-3xl' />
            <span className='text-2xl font-bold text-gray-700'>Reviews</span>
          </div>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-6'>
            What our members say.
          </h2>
          <div className='flex items-center justify-center gap-2'>
            <span className='text-3xl font-bold'>4.9</span>
            <div className='flex text-[#fbbc04] text-2xl'>
              <Icon icon='ic:round-star' />
              <Icon icon='ic:round-star' />
              <Icon icon='ic:round-star' />
              <Icon icon='ic:round-star' />
              <Icon icon='ic:round-star-half' />
            </div>
            <span className='text-gray-500'>(124 reviews)</span>
          </div>
        </div>

        <Slider {...settings} className='testimonial-slider'>
          {reviews.map((review, index) => (
            <div key={index} className='px-4 pb-10'>
              <div className='bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full'>
                <div className='flex items-center mb-4'>
                  <div className='w-12 h-12 rounded-full overflow-hidden mr-4 bg-gray-200'>
                    <img src={review.avatar} alt={review.name} width={48} height={48} className='object-cover' />
                  </div>
                  <div>
                    <h5 className='font-bold text-lg'>{review.name}</h5>
                    <div className='flex items-center gap-2'>
                      <div className='flex text-[#fbbc04] text-sm'>
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Icon key={i} icon='ic:round-star' />
                        ))}
                      </div>
                      <span className='text-gray-400 text-sm'>{review.time}</span>
                    </div>
                  </div>
                  <Icon icon='logos:google-icon' className='ml-auto text-2xl opacity-50' />
                </div>
                <p className='text-gray-600 leading-relaxed'>"{review.comment}"</p>
              </div>
            </div>
          ))}
        </Slider>

        <div className='mt-12 flex justify-center'>
          <Button 
            variant="dark"
            href="https://maps.app.goo.gl/pCEQfgEn4dRgezyh9" 
            target="_blank" 
            rel="noopener noreferrer"
            icon="logos:google-icon"
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
