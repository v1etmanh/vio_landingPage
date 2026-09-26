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
import type { SiteLanguage } from '../../../App'

gsap.registerPlugin(ScrollTrigger)

const getInitials = (name: string) => {
  return name.trim().charAt(0).toUpperCase()
}

const getAvatarBg = (name: string) => {
  const bgClasses = [
    'bg-amber-600',
    'bg-emerald-600',
    'bg-blue-600',
    'bg-purple-600',
    'bg-indigo-600',
    'bg-rose-600',
  ]
  let hash = 0
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash)
  }
  return bgClasses[Math.abs(hash) % bgClasses.length]
}

interface TestimonialsProps {
  language: SiteLanguage
}

const Testimonials = ({ language }: TestimonialsProps) => {
  const [slidesToShow, setSlidesToShow] = useState(3)
  const [selectedReviewIndex, setSelectedReviewIndex] = useState<number | null>(null)

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
  const copy = language === 'vi'
    ? {
        label: 'Khách quốc tế',
        title: <>KHÁCH QUỐC TẾ NÓI GÌ<br className="hidden sm:block" /> VỀ VIO FITNESS.</>,
        ratingCount: '(99+ đánh giá)',
        moreReviews: 'Xem thêm đánh giá trên Google',
        readFull: 'Xem toàn bộ',
        close: 'Đóng',
      }
    : {
        label: 'International guests',
        title: <>WHAT INTERNATIONAL<br className="hidden sm:block" /> GUESTS SAY ABOUT VIO FITNESS.</>,
        ratingCount: '(99+ reviews)',
        moreReviews: 'See more reviews on Google',
        readFull: 'Read full review',
        close: 'Close',
      }

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
      name: 'Eddy',
      time: 'Hàn Quốc',
      rating: 5,
      comment: '한국인 입맛에 딱 맞는 헬스장입니다. 오시게 되면 왜 이 장소가 평점 5.0인지 알게 됩니다. 에어컨이 엄청 강하고 한국 헬스장이랑 거의 비슷합니다. 수입산 머신부터 시작해서 샤워실이랑 엄청 좋습니다. 여기보다 좋은 곳은 없는 것 같아요 😀 직원들도 엄청 친절하고 기구 어떻게 쓰는지 물어보니까 친절하게 알려줍니다!!',
    },
    {
      name: '고건',
      time: 'Hàn Quốc · Local Guide Cấp 3',
      rating: 5,
      comment: '1. 에어컨, 선풍기 모두 틀어져있어 시원하게 운동가능\n\n2. 머신 (파나타, 해머스트랭스 바벨과 덤벨)이 가슴, 하체, 등, 어깨 뭐 할 것 없이 다 있고 찐인 것 같음. 자극이나 무게가 제대로 박힘\n\n3. 다낭에 프로틴 음료 파는 곳이 없어 먹고 싶어도 못 사먹는데 여기는 프로틴 웨이 쉐이크 스무디가 있어서 단백질 보충 바로 가능. 맛도 맛있음 (망고랑 바나나 맛 있음, 그 외 카페 음료도 많음)\n\n4. 직원들도 친절하고 운동 방해 안 하고 샤워시설이나 치안도 굉장히 좋음\n\n장점만 적은 것 같지만 단점이 없는 헬스장임. 다낭에서 헬스장 갈 거면 무조건 여기가야함. 여기 안 가면 인생 손해보는 거임.',
    },
    {
      name: 'Scott Carter',
      time: 'Mỹ · Local Guide Cấp 3',
      rating: 5,
      comment: "Vio gym is awesome! Coming from the U.S. I've been to a lot of Gyms, this is one of the best! Equipment a gym rat would love. Staff was very nice and the place is spotless.",
    },
    {
      name: 'Carmela DOUANLA TIOUA',
      time: 'Mỹ · Local Guide Cấp 5',
      rating: 5,
      comment: 'Vio Fitness is an excellent gym that I highly recommend! The facility is very functional, exceptionally clean, and equipped with a wide variety of modern, high-quality machines. Everything is well maintained, making every workout enjoyable.\n\nThe air conditioning is fantastic, which makes a huge difference during training, and the entire staff is welcoming, friendly, and professional.\n\nA special thank you to Vuong for taking such beautiful videos of me during my workout. I really appreciate the time and care you put into them — they turned out amazing!\n\nIf you’re looking for a clean, well-equipped gym with a great atmosphere and outstanding staff, Vio Fitness is definitely the place to train.',
    },
    {
      name: 'Kanon Koide',
      time: 'Nhật Bản · Local Guide Cấp 3',
      rating: 5,
      comment: '今回ダナンでの長期滞在中に、トレーニングできるジムを探していたところ、こちらを見つけました。施設は外観も内装も清潔感があり、とても快適に過ごせる空間でした。\n\n興味本位で1時間のパーソナルトレーニングも受けてみましたが、想像以上に充実した時間でした。英語でコミュニケーションを取りながら進めてくださり、丁寧にフォームやトレーニング内容を説明してくれたので、安心して参加できました。\n\n普段トレーニングをしている人はもちろん、海外でジムに行くのが初めての方でも通いやすい環境だと思います。スタッフの方も親切で、ダナン滞在中にまた利用したいと思える場所でした。ありがとうございました！',
    },
    {
      name: 'Kasia Holysz',
      time: 'International guest',
      rating: 5,
      comment: 'Really enjoyed this gym. It has a nice boutique feel and everything is clean, modern and looks pretty new. The day pass is 200,000 VND, and you can pay by card with a 3% surcharge.\n\nYou get two towels, and there’s also a sauna and the option to have a protein shake after your workout. Water is available to buy too.\n\nI went early in the morning and basically had the whole gym to myself, which was great. One of the staff members was really kind and showed me how to use a couple of machines I hadn’t used before.\n\nThe air conditioning is also a big plus in Da Nang! Overall, a really good experience and definitely somewhere I’d come back to.',
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

  const selectedReview = selectedReviewIndex === null ? null : reviews[selectedReviewIndex]

  return (
    <section id='Reviews' ref={sectionRef} className='py-24 lg:py-32 overflow-hidden bg-white'>
      <div className='container mx-auto max-w-[1600px] px-4 sm:px-6 md:px-12 lg:px-8'>
        <div ref={headerRef} className='text-center max-w-3xl mx-auto mb-16 sm:mb-20'>
          <div className='flex justify-center items-center gap-4 mb-4'>
            <Icon icon='logos:google-icon' className='text-2xl sm:text-3xl' />
            <span className='text-xl sm:text-2xl font-bold text-gray-700 tracking-wider uppercase font-heading'>{copy.label}</span>
          </div>
          <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 font-heading tracking-tighter uppercase leading-[0.9] text-gray-900'>
            {copy.title}
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
            <span className='text-gray-500 font-medium text-sm sm:text-base ml-2'>{copy.ratingCount}</span>
          </div>
        </div>

        <div ref={sliderRef} className='w-full'>
          <Slider {...settings} className='testimonial-slider'>
            {reviews.map((review, index) => (
              <div key={index} className='px-2 sm:px-4 pb-10'>
                <div className='flex h-[23rem] flex-col rounded-2xl border border-gray-100 bg-white p-5 shadow-lg sm:h-[25rem] sm:p-7'>
                  <div className='flex min-h-[3.5rem] flex-wrap items-center gap-3'>
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden shrink-0 flex items-center justify-center font-bold text-white text-lg sm:text-xl font-heading shadow-md ${getAvatarBg(review.name)}`}>
                      {getInitials(review.name)}
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
                  <div className='relative mt-4 flex-1 overflow-hidden'>
                    <p className='line-clamp-7 whitespace-pre-line text-sm leading-relaxed text-gray-600 sm:text-base'>“{review.comment}”</p>
                    <div className='pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white to-transparent' />
                  </div>
                  <button type='button' onClick={() => setSelectedReviewIndex(index)} className='mt-3 inline-flex w-fit items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[var(--color-primary)] transition-colors hover:text-[var(--color-darkmode)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]'>
                    {copy.readFull} <Icon icon='tabler:arrow-up-right' className='text-base' aria-hidden='true' />
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {selectedReview && (
          <div className='fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm' role='dialog' aria-modal='true' aria-label={`${copy.readFull}: ${selectedReview.name}`} onMouseDown={() => setSelectedReviewIndex(null)}>
            <div className='max-h-[88vh] w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl' onMouseDown={(event) => event.stopPropagation()}>
              <div className='flex items-start justify-between gap-5 border-b border-black/10 p-5 sm:p-7'>
                <div className='flex items-center gap-3'>
                  <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-heading text-lg font-bold text-white ${getAvatarBg(selectedReview.name)}`}>
                    {getInitials(selectedReview.name)}
                  </div>
                  <div>
                    <p className='font-bold text-gray-900'>{selectedReview.name}</p>
                    <p className='mt-1 text-xs text-gray-400'>{selectedReview.time}</p>
                  </div>
                </div>
                <button type='button' onClick={() => setSelectedReviewIndex(null)} className='grid h-10 w-10 shrink-0 place-items-center rounded-full border border-black/10 text-gray-500 transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]' aria-label={copy.close} title={copy.close}>
                  <Icon icon='tabler:x' className='text-xl' aria-hidden='true' />
                </button>
              </div>
              <div className='max-h-[calc(88vh-7rem)] overflow-y-auto p-5 sm:p-7'>
                <div className='mb-5 flex text-[#fbbc04] text-base' aria-label='5 stars'>
                  {Array.from({ length: selectedReview.rating }).map((_, index) => <Icon key={index} icon='ic:round-star' />)}
                </div>
                <p className='whitespace-pre-line text-sm leading-relaxed text-gray-700 sm:text-base'>“{selectedReview.comment}”</p>
              </div>
            </div>
          </div>
        )}

        <div ref={ctaRef} className='mt-8 sm:mt-12 flex justify-center px-4'>
          <Button 
            variant="dark"
            href="https://maps.app.goo.gl/MdoxWFiGfEnWens18"
            target="_blank" 
            rel="noopener noreferrer"
            icon="logos:google-icon"
            className="w-full sm:w-auto text-center justify-center"
          >
            {copy.moreReviews}
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
