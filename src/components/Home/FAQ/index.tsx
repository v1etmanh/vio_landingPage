import { useRef, useState } from 'react'
import { Icon } from '@iconify/react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { SiteLanguage } from '../../../App'

gsap.registerPlugin(ScrollTrigger)

type FAQCategoryId = 'all' | 'membership' | 'training' | 'amenities' | 'visiting'

type LocalizedText = Record<SiteLanguage, string>

interface FAQItem {
  id: string
  category: Exclude<FAQCategoryId, 'all'>
  question: LocalizedText
  paragraphs: Record<SiteLanguage, string[]>
  bullets?: Record<SiteLanguage, string[]>
  conclusion?: LocalizedText
}

const categories: { id: FAQCategoryId; label: LocalizedText }[] = [
  { id: 'all', label: { en: 'All Questions', vi: 'Tất cả câu hỏi' } },
  { id: 'membership', label: { en: 'Membership & Pricing', vi: 'Gói tập & chi phí' } },
  { id: 'training', label: { en: 'Training & Facilities', vi: 'Tập luyện & cơ sở vật chất' } },
  { id: 'amenities', label: { en: 'Amenities & Recovery', vi: 'Tiện nghi & phục hồi' } },
  { id: 'visiting', label: { en: 'Visiting VIO', vi: 'Đến VIO' } },
]

const faqItems: FAQItem[] = [
  {
    id: 'membership-options',
    category: 'membership',
    question: {
      en: 'What membership options does VIO Fitness offer?',
      vi: 'VIO Fitness có những lựa chọn gói tập nào?',
    },
    paragraphs: {
      en: [
        'VIO Fitness provides flexible choices ranging from Day Passes to short-term and long-term memberships. Our options are tailored for local Đà Nẵng residents, beginners, as well as tourists and international expats visiting or residing in Đà Nẵng.',
        'You can easily select a plan based on your length of stay, training frequency, and personal goals.',
      ],
      vi: [
        'VIO Fitness có các lựa chọn linh hoạt, từ vé tập theo ngày đến gói ngắn hạn và dài hạn. Các gói được thiết kế phù hợp với người dân Đà Nẵng, người mới bắt đầu, khách du lịch và người nước ngoài đang đến hoặc sinh sống tại Đà Nẵng.',
        'Bạn có thể dễ dàng chọn gói theo thời gian lưu trú, tần suất tập luyện và mục tiêu cá nhân.',
      ],
    },
  },
  {
    id: 'day-pass-price',
    category: 'membership',
    question: {
      en: 'How much is a Day Pass at VIO Fitness?',
      vi: 'Vé Day Pass tại VIO Fitness có giá bao nhiêu?',
    },
    paragraphs: {
      en: [
        'Our Day Pass is priced at 200,000 VND per person per day. It is ideal for tourists, short-term visitors, or anyone wanting to experience our modern workout space before committing to a long-term membership.',
        'With a Day Pass, you get full access to all facility amenities for the day, including:',
      ],
      vi: [
        'Day Pass có giá 200.000 VND/người/ngày. Đây là lựa chọn phù hợp cho khách du lịch, người ghé Đà Nẵng ngắn ngày hoặc bất kỳ ai muốn trải nghiệm không gian tập hiện đại trước khi đăng ký gói dài hạn.',
        'Với Day Pass, bạn được sử dụng đầy đủ tiện ích trong ngày, bao gồm:',
      ],
    },
    bullets: {
      en: [
        'Modern, high-quality gym equipment',
        'Clean, spacious, air-conditioned training environment',
        'Free InBody composition analysis',
        'Complimentary workout towel and secure personal locker',
        'Fully equipped shower facilities and full sauna access',
        'Complete access to post-workout recovery amenities',
      ],
      vi: [
        'Thiết bị tập luyện hiện đại, chất lượng cao',
        'Không gian tập sạch sẽ, rộng rãi và điều hòa mát mẻ',
        'Đo chỉ số cơ thể InBody miễn phí',
        'Khăn tập miễn phí và tủ khóa cá nhân an toàn',
        'Khu tắm đầy đủ tiện nghi và sử dụng sauna không giới hạn',
        'Truy cập đầy đủ tiện ích phục hồi sau tập',
      ],
    },
    conclusion: {
      en: 'Enjoy a complete workout and unwind with our post-workout amenities without a long-term membership commitment.',
      vi: 'Bạn có thể hoàn thành buổi tập và thư giãn với các tiện ích phục hồi sau tập mà không cần cam kết gói dài hạn.',
    },
  },
  {
    id: 'beginners',
    category: 'training',
    question: {
      en: 'I am a complete beginner and have never worked out before. Can I train at VIO Fitness?',
      vi: 'Tôi hoàn toàn mới và chưa từng tập luyện. Tôi có thể tập tại VIO Fitness không?',
    },
    paragraphs: {
      en: [
        'Absolutely. VIO Fitness warmly welcomes all fitness levels, from absolute beginners to experienced athletes with defined goals.',
        'If you are unsure where to start, our coaching staff can help you get familiar with the space, guide you on using the equipment, and teach basic techniques tailored to your objectives. You do not have to hire a Personal Trainer right away: take it step by step, get comfortable with the machines, and build a routine at your own pace.',
        'At VIO Fitness, we believe anyone can start their transformation journey and build lasting health habits.',
      ],
      vi: [
        'Chắc chắn rồi. VIO Fitness chào đón mọi trình độ, từ người hoàn toàn mới đến vận động viên đã có mục tiêu rõ ràng.',
        'Nếu chưa biết bắt đầu từ đâu, đội ngũ huấn luyện của chúng tôi sẽ giúp bạn làm quen với không gian, hướng dẫn sử dụng thiết bị và các kỹ thuật cơ bản phù hợp với mục tiêu. Bạn không cần thuê PT ngay: hãy bắt đầu từng bước, làm quen với máy và xây dựng lịch tập theo nhịp độ của mình.',
        'VIO Fitness tin rằng ai cũng có thể bắt đầu hành trình thay đổi và xây dựng thói quen khỏe mạnh bền vững.',
      ],
    },
  },
  {
    id: 'personal-trainer',
    category: 'training',
    question: {
      en: 'Do I need to hire a Personal Trainer (PT) to train at VIO Fitness?',
      vi: 'Tôi có bắt buộc phải thuê Personal Trainer (PT) để tập tại VIO Fitness không?',
    },
    paragraphs: {
      en: [
        'No, it is not mandatory. You are welcome to train independently using our modern equipment organized into specialized workout zones.',
        'If you prefer a personalized routine based on your body composition and goals, plus a coach to correct your form, motivate you, and track your progress, our Personal Training service is available. PT is recommended for members seeking structured guidance, better form, and faster results.',
      ],
      vi: [
        'Không, đây không phải yêu cầu bắt buộc. Bạn hoàn toàn có thể tự tập với hệ thống thiết bị hiện đại được bố trí theo các khu vực chuyên biệt.',
        'Nếu bạn muốn có giáo án cá nhân hóa theo chỉ số cơ thể và mục tiêu, cùng huấn luyện viên chỉnh kỹ thuật, động viên và theo dõi tiến độ, dịch vụ Personal Training luôn sẵn sàng. PT phù hợp với người cần lộ trình rõ ràng, tối ưu kỹ thuật và kết quả nhanh hơn.',
      ],
    },
  },
  {
    id: 'air-conditioning',
    category: 'training',
    question: {
      en: 'Is VIO Fitness air-conditioned?',
      vi: 'VIO Fitness có điều hòa không?',
    },
    paragraphs: {
      en: [
        'Yes. Our training spaces across both floors are equipped with full air-conditioning systems and high-powered fans to maintain a cool, well-ventilated atmosphere at all times.',
        'We place strong emphasis on a cool, comfortable environment, especially in Đà Nẵng’s warmer climate.',
      ],
      vi: [
        'Có. Khu tập ở cả hai tầng đều được trang bị hệ thống điều hòa đầy đủ và quạt công suất cao để duy trì không khí mát mẻ, thông thoáng mọi lúc.',
        'Chúng tôi đặc biệt chú trọng môi trường tập thoải mái, mát mẻ, nhất là với khí hậu ấm nóng của Đà Nẵng.',
      ],
    },
  },
  {
    id: 'shower-facilities',
    category: 'amenities',
    question: {
      en: 'I am a tourist in Đà Nẵng. Does VIO Fitness have shower facilities?',
      vi: 'Tôi là khách du lịch tại Đà Nẵng. VIO Fitness có khu tắm không?',
    },
    paragraphs: {
      en: [
        'Yes. We provide separate shower and sauna facilities for men and women, so you can freshen up and relax right after your session.',
        'Our shower areas include clean towels, shampoo, body wash, hair dryers, and personal care supplies. It is especially convenient for travelers who want to work out, shower, and unwind in one place before continuing their time in Đà Nẵng.',
      ],
      vi: [
        'Có. VIO Fitness có khu tắm và sauna riêng cho nam và nữ, để bạn có thể làm mới cơ thể và thư giãn ngay sau buổi tập.',
        'Khu tắm được trang bị khăn sạch, dầu gội, sữa tắm, máy sấy tóc và các vật dụng chăm sóc cá nhân. Điều này đặc biệt tiện cho du khách muốn tập, tắm và thư giãn tại một địa điểm trước khi tiếp tục khám phá Đà Nẵng.',
      ],
    },
  },
  {
    id: 'lockers',
    category: 'amenities',
    question: {
      en: 'Can I use personal lockers?',
      vi: 'Tôi có thể sử dụng tủ khóa cá nhân không?',
    },
    paragraphs: {
      en: ['Yes. VIO Fitness provides secure individual lockers to safely store your belongings while you train.'],
      vi: ['Có. VIO Fitness cung cấp tủ khóa cá nhân an toàn để bạn cất giữ đồ dùng trong lúc tập luyện.'],
    },
  },
  {
    id: 'nutrition-drinks',
    category: 'amenities',
    question: {
      en: 'Does VIO Fitness offer post-workout nutrition and drinks?',
      vi: 'VIO Fitness có đồ uống và dinh dưỡng sau tập không?',
    },
    paragraphs: {
      en: [
        'Yes. Our in-house beverage bar offers pre- and post-workout choices, including mineral water, specialty coffee, high-protein shakes, and fresh whey smoothies.',
        'It is a great place to refuel, hydrate, and relax before moving on with your day.',
      ],
      vi: [
        'Có. Quầy đồ uống tại VIO phục vụ các lựa chọn trước và sau tập, gồm nước khoáng, cà phê đặc sản, protein shake và whey smoothie tươi.',
        'Đây là nơi lý tưởng để bổ sung năng lượng, bù nước và thư giãn trước khi bạn tiếp tục lịch trình trong ngày.',
      ],
    },
  },
  {
    id: 'foreigner-friendly',
    category: 'visiting',
    question: {
      en: 'Is VIO Fitness expat and foreigner-friendly?',
      vi: 'VIO Fitness có thân thiện với người nước ngoài và expat không?',
    },
    paragraphs: {
      en: [
        'Yes. VIO Fitness is in the heart of Đà Nẵng, making it convenient for international tourists, digital nomads, and expats living or working in the city. Its central location makes it easy to combine training with your daily schedule or sightseeing plans.',
        'VIO Fitness has welcomed more than 1,000 international guests. Whether you are in Đà Nẵng for a few days, a few months, or longer, you are always welcome to train and become part of our vibrant community.',
      ],
      vi: [
        'Có. VIO Fitness nằm ngay trung tâm Đà Nẵng, thuận tiện cho khách quốc tế, digital nomad và expat đang sống hoặc làm việc tại thành phố. Vị trí trung tâm giúp bạn dễ dàng kết hợp lịch tập với công việc hoặc kế hoạch tham quan.',
        'Đến nay, VIO Fitness đã đón hơn 1.000 khách quốc tế. Dù bạn ở Đà Nẵng vài ngày, vài tháng hay lâu dài, bạn luôn được chào đón để tập luyện và trở thành một phần của cộng đồng VIO.',
      ],
    },
  },
  {
    id: 'location',
    category: 'visiting',
    question: {
      en: 'Where is VIO Fitness located?',
      vi: 'VIO Fitness nằm ở đâu?',
    },
    paragraphs: {
      en: ['VIO Fitness is located at 15 Trần Phú, Hải Châu District, Đà Nẵng, Vietnam.', 'Our central location offers easy access from major city hubs and the Hàn River waterfront area.'],
      vi: ['VIO Fitness tọa lạc tại 15 Trần Phú, quận Hải Châu, Đà Nẵng, Việt Nam.', 'Vị trí trung tâm giúp bạn dễ dàng di chuyển từ các khu vực chính của thành phố và khu vực bờ sông Hàn.'],
    },
  },
  {
    id: 'operating-hours',
    category: 'visiting',
    question: {
      en: 'What are your operating hours?',
      vi: 'Giờ hoạt động của VIO Fitness là khi nào?',
    },
    paragraphs: {
      en: ['Monday to Saturday: 05:30 AM to 08:30 PM.', 'Sunday: 08:00 AM to 07:00 PM.'],
      vi: ['Thứ Hai đến Thứ Bảy: 05:30 đến 20:30.', 'Chủ nhật: 08:00 đến 19:00.'],
    },
  },
  {
    id: 'stretching-area',
    category: 'training',
    question: {
      en: 'Does VIO Fitness have a dedicated stretching area?',
      vi: 'VIO Fitness có khu giãn cơ riêng không?',
    },
    paragraphs: {
      en: ['Yes. We have a dedicated stretching area where you can warm up, cool down, and perform mobility exercises before or after your workout.'],
      vi: ['Có. VIO Fitness có khu giãn cơ riêng để bạn khởi động, thả lỏng và thực hiện các bài tập linh hoạt trước hoặc sau buổi tập.'],
    },
  },
  {
    id: 'sauna-recovery',
    category: 'amenities',
    question: {
      en: 'Does VIO Fitness have a sauna and post-workout recovery area?',
      vi: 'VIO Fitness có sauna và khu phục hồi sau tập không?',
    },
    paragraphs: {
      en: [
        'Yes. After your session, you can use our sauna, showers, and stretching zones to relax your muscles and recover.',
        'The sauna is enhanced with soft background music and soothing water soundscapes for a peaceful recovery after an intense workout.',
      ],
      vi: [
        'Có. Sau buổi tập, bạn có thể sử dụng sauna, khu tắm và khu giãn cơ để thả lỏng cơ bắp và phục hồi.',
        'Không gian sauna có nhạc nền nhẹ nhàng và âm thanh nước dịu êm, mang lại trải nghiệm phục hồi yên bình sau buổi tập cường độ cao.',
      ],
    },
  },
]

interface FAQProps {
  language: SiteLanguage
}

const FAQ = ({ language }: FAQProps) => {
  const [activeCategory, setActiveCategory] = useState<FAQCategoryId>('all')
  const [openId, setOpenId] = useState(faqItems[0].id)
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  const copy = language === 'vi'
    ? {
        eyebrow: 'Câu hỏi thường gặp',
        title: 'Mọi điều bạn cần biết trước khi đến VIO Fitness',
        description: 'Từ gói tập và không gian luyện tập đến tiện ích phục hồi, tìm nhanh câu trả lời cho những điều khách hàng thường quan tâm.',
      }
    : {
        eyebrow: 'Frequently Asked Questions',
        title: 'Everything You Need to Know Before You Visit VIO Fitness',
        description: 'From memberships and facilities to recovery amenities, find quick answers to common questions from local members, tourists, and international guests.',
      }

  const visibleItems = activeCategory === 'all'
    ? faqItems
    : faqItems.filter((item) => item.category === activeCategory)
  const splitAt = Math.ceil(visibleItems.length / 2)
  const itemColumns = [visibleItems.slice(0, splitAt), visibleItems.slice(splitAt)]

  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 78%',
        toggleActions: 'play none none none',
      },
    })

    timeline
      .from(headerRef.current, { y: 28, opacity: 0, duration: 0.7, ease: 'power3.out' })
      .from(contentRef.current, { y: 22, opacity: 0, duration: 0.65, ease: 'power3.out' }, '-=0.35')
  }, { scope: sectionRef })

  const selectCategory = (category: FAQCategoryId) => {
    const firstItem = category === 'all'
      ? faqItems[0]
      : faqItems.find((item) => item.category === category)

    setActiveCategory(category)
    if (firstItem) setOpenId(firstItem.id)
  }

  const handleCategoryKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return

    event.preventDefault()
    const nextIndex = event.key === 'Home'
      ? 0
      : event.key === 'End'
        ? categories.length - 1
        : (index + (event.key === 'ArrowRight' ? 1 : -1) + categories.length) % categories.length
    const nextCategory = categories[nextIndex]

    selectCategory(nextCategory.id)
    document.getElementById(`faq-tab-${nextCategory.id}`)?.focus()
  }

  return (
    <section id='FAQ' ref={sectionRef} className='relative z-10 overflow-hidden border-t border-white/5 bg-[var(--color-darkmode)] py-24 lg:py-32'>
      <div className='mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8'>
        <div ref={headerRef} className='mx-auto max-w-5xl text-center'>
          <p className='mb-5 text-xs font-bold uppercase tracking-[0.34em] text-[var(--color-primary)] sm:text-sm'>
            {copy.eyebrow}
          </p>
          <h2 className='font-heading text-4xl font-black uppercase leading-[0.98] tracking-tight text-white sm:text-5xl lg:text-7xl'>
            {copy.title}
          </h2>
          <p className='mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/60 sm:text-lg'>
            {copy.description}
          </p>
        </div>

        <div
          className='mt-10 flex gap-3 overflow-x-auto pb-2 sm:mt-12 sm:justify-center sm:overflow-visible'
          role='tablist'
          aria-label={copy.eyebrow}
        >
          {categories.map((category, index) => {
            const isActive = category.id === activeCategory
            return (
              <button
                key={category.id}
                id={`faq-tab-${category.id}`}
                type='button'
                role='tab'
                aria-selected={isActive}
                aria-controls='faq-list'
                tabIndex={isActive ? 0 : -1}
                onClick={() => selectCategory(category.id)}
                onKeyDown={(event) => handleCategoryKeyDown(event, index)}
                className={`shrink-0 rounded-full border px-5 py-3 text-sm font-semibold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)] active:translate-y-px sm:px-6 ${
                  isActive
                    ? 'border-[var(--color-primary)] bg-[var(--color-primary)] text-white shadow-[0_12px_28px_rgba(0,0,0,0.24)]'
                    : 'border-white/15 bg-white/[0.03] text-white/75 hover:border-white/35 hover:bg-white/[0.07] hover:text-white'
                }`}
              >
                {category.label[language]}
              </button>
            )
          })}
        </div>

        <div id='faq-list' ref={contentRef} role='tabpanel' aria-labelledby={`faq-tab-${activeCategory}`} className='mt-8 grid grid-cols-1 gap-3 lg:mt-10 lg:grid-cols-2 lg:gap-5'>
          {itemColumns.map((column, columnIndex) => (
            <div key={columnIndex} className='space-y-3 lg:space-y-4'>
              {column.map((item) => {
                const isOpen = item.id === openId
                const answerId = `faq-answer-${item.id}`
                const questionId = `faq-question-${item.id}`
                const itemNumber = String(faqItems.indexOf(item) + 1).padStart(2, '0')

                return (
                  <article
                    key={item.id}
                    className={`overflow-hidden rounded-2xl border transition-colors duration-200 ${
                      isOpen ? 'border-[var(--color-primary)]/70 bg-black/20' : 'border-white/10 bg-white/[0.025] hover:border-white/25'
                    }`}
                  >
                    <h3 className='m-0'>
                      <button
                        id={questionId}
                        type='button'
                        aria-expanded={isOpen}
                        aria-controls={answerId}
                        onClick={() => setOpenId(item.id)}
                        className='flex w-full items-center gap-4 px-5 py-5 text-left transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[var(--color-primary)] sm:px-6'
                      >
                        <span className={`w-9 shrink-0 text-sm font-medium ${isOpen ? 'text-[var(--color-primary)]' : 'text-white/45'}`}>
                          {itemNumber}
                        </span>
                        <span className='flex-1 font-sans text-base font-semibold normal-case leading-snug tracking-normal text-white sm:text-lg'>
                          {item.question[language]}
                        </span>
                        <Icon
                          icon={isOpen ? 'tabler:minus' : 'tabler:plus'}
                          aria-hidden='true'
                          className={`shrink-0 text-xl transition-transform duration-200 ${isOpen ? 'text-[var(--color-primary)]' : 'text-white/60'}`}
                        />
                      </button>
                    </h3>
                    <div id={answerId} role='region' aria-labelledby={questionId} hidden={!isOpen} className='px-5 pb-6 pl-[4.5rem] text-sm leading-relaxed text-white/65 sm:px-6 sm:pb-7 sm:pl-[5.25rem] sm:text-base'>
                      {item.paragraphs[language].map((paragraph, paragraphIndex) => (
                        <p key={paragraphIndex} className={paragraphIndex === 0 ? '' : 'mt-3'}>{paragraph}</p>
                      ))}
                      {item.bullets && (
                        <ul className='mt-4 space-y-2 border-l border-[var(--color-primary)]/60 pl-4 text-white/75'>
                          {item.bullets[language].map((bullet) => <li key={bullet}>{bullet}</li>)}
                        </ul>
                      )}
                      {item.conclusion && <p className='mt-4'>{item.conclusion[language]}</p>}
                    </div>
                  </article>
                )
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
