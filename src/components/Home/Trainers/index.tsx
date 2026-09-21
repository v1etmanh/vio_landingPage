import { useRef, useState } from 'react'
import type { CSSProperties, FC } from 'react'
import type { SiteLanguage } from '../../../App'

interface TrainersProps { language: SiteLanguage }

interface ClientReview {
  name: string
  from?: string
  quote: string
}

interface Trainer {
  name: string
  focus: string
  role: string
  profile: string
  quote: string
  portraitImage: string
  portraitPosition: string
  clientImages: string[]
  reviews: ClientReview[]
}

const clientGalleries = {
  duyBao: [
    '/Ảnh PT với khách-20260919T154920Z-1-001/Ảnh PT với khách/duybao_k1.jpg',
    '/Ảnh PT với khách-20260919T154920Z-1-001/Ảnh PT với khách/duybao_k2.png',
    '/Ảnh PT với khách-20260919T154920Z-1-001/Ảnh PT với khách/duybao_k3.jpg',
  ],
  chiCong: [
    '/Ảnh PT với khách-20260919T154920Z-1-001/Ảnh PT với khách/chicong_k1.jpg',
  ],
  mia: [
    '/Ảnh PT với khách-20260919T154920Z-1-001/Ảnh PT với khách/mia_k1.jpg',
    '/Ảnh PT với khách-20260919T154920Z-1-001/Ảnh PT với khách/mia_k2.jpg',
  ],
}

const trainersByLanguage: Record<SiteLanguage, Trainer[]> = {
  vi: [
    {
      name: 'Duy Bảo',
      focus: 'Sức mạnh - Tăng cơ - Giảm mỡ',
      role: 'Huấn luyện viên cá nhân',
      profile: 'Coach Duy Bảo chuyên tăng cơ, giảm mỡ, sức mạnh và chuyển đổi vóc dáng. Phương pháp tập trung vào cơ chế vận động đúng, cải thiện tư thế và xây dựng một cơ thể bền bỉ.',
      quote: 'Thêm một hiệp. Thêm một lần lặp. Mạnh mẽ hơn mỗi ngày.',
      portraitImage: '/webp/trainers/duy-bao.webp',
      portraitPosition: 'center 22%',
      clientImages: clientGalleries.duyBao,
      reviews: [
        { name: 'Tuyết Anh', from: 'Đà Nẵng, Việt Nam', quote: 'Chỉ trong 6 ngày tại VIO, tôi đã học được rất nhiều bài tập và kỹ thuật mới. Coach Duy Bảo hiểu rõ chuyên môn, thân thiện và luôn hướng dẫn tận tình.' },
        { name: 'Michael Tiongson', from: 'Philippines', quote: 'Sau chương trình 1-1 kéo dài 5 tuần, tôi giảm 4kg mỡ. Coach Bảo giúp tôi tự tin từ những ngày đầu chưa biết sử dụng máy tập.' },
        { name: 'Veronique Vysotskaya', from: 'Nga', quote: 'Tôi thấy kết quả rõ rệt chỉ sau một tháng. Coach Duy Bảo chú ý kỹ thuật và giúp tôi cảm nhận cơ thể khỏe hơn từng buổi tập.' },
      ],
    },
    {
      name: 'Chí Công',
      focus: 'Vận động - Functional Training - Thể lực',
      role: 'Huấn luyện viên cá nhân',
      profile: 'Tốt nghiệp Cử nhân loại Giỏi Đại học Thể dục Thể thao Đà Nẵng, Coach Chí Công theo đuổi phương pháp tập luyện dựa trên nền tảng khoa học. Mỗi lộ trình được thiết kế theo thể trạng, mục tiêu và khả năng vận động của khách hàng.',
      quote: 'Mỗi người có một mục tiêu tập luyện khác nhau. Tốt hơn mỗi ngày đã là một thành công.',
      portraitImage: '/webp/trainers/chi-cong.webp',
      portraitPosition: 'center 20%',
      clientImages: clientGalleries.chiCong,
      reviews: [
        { name: 'Valeria', from: 'Nga', quote: 'Coach Chí Công hướng dẫn rất chuyên nghiệp, giải thích rõ ràng và luôn chú ý đến kỹ thuật cùng mục tiêu riêng của tôi. Tôi đã thấy tiến bộ thực sự nhờ những buổi tập này.' },
      ],
    },
    {
      name: 'Mia',
      focus: 'Chuyển đổi vóc dáng - Sức mạnh - Dinh dưỡng',
      role: 'Huấn luyện viên cá nhân',
      profile: 'Với hơn 5 năm trong ngành fitness, Mia chuyên chuyển đổi vóc dáng và xây nền tảng sức mạnh bền vững bằng phương pháp cá nhân hoá, có cơ sở khoa học. Mia tạo nên môi trường tập luyện ấm áp, giàu năng lượng bằng tiếng Việt, Anh và Trung.',
      quote: 'Fitness không chỉ là nâng tạ. Đó là xây dựng sự tự tin, sức mạnh và niềm tin vào cơ thể của chính bạn.',
      portraitImage: '/webp/trainers/mia.webp',
      portraitPosition: 'center 20%',
      clientImages: clientGalleries.mia,
      reviews: [
        { name: 'Nashima Hozumi', from: 'Nhật Bản', quote: 'Nhờ Mia hướng dẫn, tôi đạt được cân nặng mục tiêu sau sáu tháng. Cô ấy luôn vui vẻ, kiên nhẫn và khiến tôi tự tin hơn trong mỗi buổi tập.' },
        { name: 'Olga', from: 'Nga', quote: 'Sau 18 buổi tập, Mia đã giúp tôi trở về cân nặng trước đây chỉ trong một tháng. Mỗi buổi đều được điều chỉnh kỹ thuật, mức tạ và động viên đúng lúc.' },
        { name: 'Jasmine Paul', quote: 'Mia hiểu rõ fitness, dinh dưỡng và sự đồng hành. Tôi khỏe hơn, tự tin hơn và chăm sóc cơ thể của mình tốt hơn nhờ trải nghiệm tại VIO.' },
      ],
    },
  ],
  en: [
    {
      name: 'Duy Bảo',
      focus: 'Strength - Muscle Building - Fat Loss',
      role: 'Personal trainer',
      profile: 'Coach Duy Bao specialises in muscle hypertrophy, fat loss, strength conditioning, and body transformation. His approach prioritises movement mechanics and posture realignment for a balanced, powerful, resilient physique.',
      quote: 'One more set. One more rep. Become stronger.',
      portraitImage: '/webp/trainers/duy-bao.webp',
      portraitPosition: 'center 22%',
      clientImages: clientGalleries.duyBao,
      reviews: [
        { name: 'Tuyet Anh', from: 'Da Nang, Vietnam', quote: 'In only six days at VIO, I learned so many new exercises and techniques. Coach Duy Bao is knowledgeable, approachable, and always ready to guide me.' },
        { name: 'Michael Tiongson', from: 'Philippines', quote: 'After a five-week one-to-one programme, I lost 4kg of fat. Coach Bao made me feel comfortable from the first day when I knew nothing about gym equipment.' },
        { name: 'Veronique Vysotskaya', from: 'Russia', quote: 'I saw amazing results in just one month. Coach Duy Bao pays close attention to technique and has helped me feel stronger and fitter.' },
      ],
    },
    {
      name: 'Chi Cong',
      focus: 'Movement - Functional Training - Conditioning',
      role: 'Personal trainer',
      profile: 'Coach Chi Cong graduated with distinction from Da Nang Sports University. His evidence-based programmes are built around each client’s condition and goals, from technique and body control to lasting confidence in independent training.',
      quote: 'Everyone has a different training goal. Becoming better every day is already a success.',
      portraitImage: '/webp/trainers/chi-cong.webp',
      portraitPosition: 'center 20%',
      clientImages: clientGalleries.chiCong,
      reviews: [
        { name: 'Valeria', from: 'Russia', quote: 'Coach Chi Cong is professional, explains everything clearly, and pays attention to technique and individual goals. I saw real progress thanks to his training.' },
      ],
    },
    {
      name: 'Mia',
      focus: 'Body Transformation - Strength - Nutrition',
      role: 'Personal trainer',
      profile: 'With over five years in fitness, Mia specialises in body transformation and lasting strength through a personalised, science-backed approach. Fluent in Vietnamese, English, and Chinese, she creates a warm, high-energy setting where every client feels supported.',
      quote: 'Fitness is more than moving weights. It is sculpting confidence, building strength, and trusting your own body.',
      portraitImage: '/webp/trainers/mia.webp',
      portraitPosition: 'center 20%',
      clientImages: clientGalleries.mia,
      reviews: [
        { name: 'Nashima Hozumi', from: 'Japan', quote: 'With Mia’s guidance, I reached my target weight in six months. She is cheerful, patient, professional, and makes me feel confident in every session.' },
        { name: 'Olga', from: 'Russia', quote: 'After 18 workouts, Mia helped me return to my previous weight in one month. She adjusted every weight and technique while always encouraging me.' },
        { name: 'Jasmine Paul', quote: 'Mia is knowledgeable about fitness, nutrition, and accountability. I feel stronger, more confident, and better able to care for my body.' },
      ],
    },
  ],
}

const avatarColours = ['#b34b3d', '#1f6d68', '#47649f', '#9b4d79', '#b36b24', '#5d6f3d']

const avatarColour = (name: string) => {
  const sum = Array.from(name).reduce((total, character) => total + character.charCodeAt(0), 0)
  return avatarColours[sum % avatarColours.length]
}

const clientImageStyle = (index: number, imageCount: number): CSSProperties => {
  if (imageCount === 1) return { left: '12%', top: 0, height: '100%', width: '66%', zIndex: 10 }
  if (imageCount === 2) {
    return index === 0
      ? { left: '3%', top: 0, height: '82%', width: '48%', zIndex: 10 }
      : { bottom: '3%', left: '38%', height: '72%', width: '50%', transform: 'rotate(-8deg)', zIndex: 20 }
  }
  if (index === 0) return { left: 0, top: 0, height: '78%', width: '45%', zIndex: 10 }
  if (index === 1) return { left: '28%', top: '9%', height: '68%', width: '45%', transform: 'rotate(-9deg)', zIndex: 20 }
  return { bottom: 0, right: 0, height: '54%', width: '54%', zIndex: 30 }
}

const Trainers: FC<TrainersProps> = ({ language }) => {
  const trainers = trainersByLanguage[language]
  const [activeTrainerIndex, setActiveTrainerIndex] = useState(0)
  const [reviewIndexes, setReviewIndexes] = useState([0, 0, 0])
  const dragStart = useRef<number | null>(null)
  const wheelLocked = useRef(false)
  const previousIndex = (activeTrainerIndex - 1 + trainers.length) % trainers.length
  const nextIndex = (activeTrainerIndex + 1) % trainers.length
  const copy = language === 'vi'
    ? {
        eyebrow: 'Đội ngũ huấn luyện viên', title: <>Đồng hành cùng tiến bộ của bạn.</>, meet: 'Gặp gỡ HLV của bạn', reviewLabel: 'Đánh giá từ khách hàng', previous: 'Trước', next: 'Tiếp', book: 'Đặt lịch cùng',
      }
    : {
        eyebrow: 'Our coaches', title: <>Coaching your progress.</>, meet: 'Meet your coach', reviewLabel: 'Client testimonial', previous: 'Previous', next: 'Next', book: 'Book with',
      }

  const goToSlide = (index: number) => {
    setActiveTrainerIndex(index)
  }

  const selectReview = (trainerIndex: number, reviewIndex: number) => {
    setReviewIndexes(current => current.map((item, index) => index === trainerIndex ? reviewIndex : item))
  }

  const isInteractiveTarget = (target: EventTarget | null) =>
    target instanceof HTMLElement && Boolean(target.closest('button, a'))

  return (
    <section id='Trainers' className='overflow-hidden bg-[#f7f6f1] py-14 text-[#171512] sm:py-16 lg:py-20'>
      <div
        aria-label={copy.eyebrow}
        className='cursor-grab overflow-hidden select-none active:cursor-grabbing'
        onPointerDown={(event) => {
          if (isInteractiveTarget(event.target)) return
          dragStart.current = event.clientX
          event.currentTarget.setPointerCapture(event.pointerId)
        }}
        onPointerUp={(event) => {
          if (isInteractiveTarget(event.target)) return
          if (dragStart.current === null) return
          const distance = event.clientX - dragStart.current
          if (Math.abs(distance) > 48) goToSlide(distance < 0 ? nextIndex : previousIndex)
          dragStart.current = null
        }}
        onPointerCancel={() => { dragStart.current = null }}
        onWheel={(event) => {
          if (Math.abs(event.deltaX) <= Math.abs(event.deltaY) || Math.abs(event.deltaX) < 18 || wheelLocked.current) return
          event.preventDefault()
          wheelLocked.current = true
          goToSlide(event.deltaX > 0 ? nextIndex : previousIndex)
          window.setTimeout(() => { wheelLocked.current = false }, 650)
        }}
      >
        <div className='mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-16 xl:px-20'>
          <header className='mx-auto w-full pb-16 text-center lg:pb-20'>
            <p className='mb-3 text-[11px] font-extrabold uppercase tracking-[0.23em] text-[#a87e32]'>{copy.eyebrow}</p>
            <h2 className='font-heading text-4xl font-black uppercase leading-[0.82] tracking-tighter sm:text-5xl md:text-6xl lg:whitespace-nowrap lg:text-[clamp(3.75rem,4.2vw,5.25rem)]'>{copy.title}</h2>
            <p className='mx-auto mt-8 text-sm leading-relaxed text-black/55 sm:text-base lg:whitespace-nowrap'>{language === 'vi' ? 'Ba chuyên gia. Ba phương pháp. Một hành trình mạnh mẽ hơn.' : 'Three specialists. Three approaches. One stronger journey.'}</p>
          </header>
        </div>

        <div className='relative overflow-hidden'>
          <div className='flex will-change-transform transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)]' style={{ transform: `translate3d(-${activeTrainerIndex * 100}%, 0, 0)` }}>
            {trainers.map((trainer, trainerIndex) => (
              <article key={trainer.name} aria-label={trainer.name} className='w-full shrink-0'>
                {(() => {
                  const reviews = trainer.reviews.filter(({ quote }) => quote.trim().length > 0)
                  const reviewIndex = Math.min(reviewIndexes[trainerIndex] ?? 0, reviews.length - 1)
                  const review = reviews[reviewIndex]

                  return (
                <div className='mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-16 xl:px-20'>
                  <div className='grid gap-8 lg:grid-cols-12 lg:gap-12 xl:gap-16'>
                  <div className='lg:col-span-5'>
                    <figure className='coach-portrait'>
                      <img src={trainer.portraitImage} alt={`${trainer.name}, ${trainer.role}`} className='coach-portrait-image' style={{ objectPosition: trainer.portraitPosition }} loading={trainerIndex === 0 ? 'eager' : 'lazy'} />
                      <figcaption className='absolute inset-x-0 bottom-0 bg-[linear-gradient(to_top,rgba(20,17,13,.7),transparent)] px-6 pb-6 pt-20 text-[11px] font-extrabold uppercase tracking-[0.17em] text-white/85'>{trainer.focus}</figcaption>
                    </figure>
                    <a href='#Registration' className='mx-auto mt-4 flex w-fit items-center gap-3 bg-[#171512] px-5 py-3.5 text-[11px] font-extrabold uppercase tracking-[0.15em] text-white transition-colors hover:bg-[#a87e32] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a87e32]'>
                      {copy.book} {trainer.name} <span aria-hidden='true'>↗</span>
                    </a>
                  </div>

                  <div className='flex flex-col justify-center py-1 lg:col-span-7 lg:py-5'>
                    <p className='text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#a87e32]'>{copy.meet}</p>
                    <h3 className='font-heading mt-3 text-5xl font-black uppercase leading-[0.88] tracking-tight sm:text-6xl lg:text-7xl'>{trainer.name}</h3>
                    <p className='mt-4 text-xs font-extrabold uppercase tracking-[0.15em] text-black/55'>{trainer.focus}</p>
                    <p className='mt-7 max-w-2xl text-base leading-relaxed text-black/72 sm:text-lg'>{trainer.profile}</p>
                    <blockquote className='mt-7 max-w-xl border-l-2 border-[#d0a54f] pl-4 text-lg italic leading-relaxed text-black/80'>&ldquo;{trainer.quote}&rdquo;</blockquote>

                    <div className='coach-details-grid mt-6'>
                      {review && <aside className='h-full border-l-2 border-[#d0a54f] bg-white/45 px-5 py-5 sm:px-6' aria-label={copy.reviewLabel}>
                        <p className='mb-2 text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#a87e32]'>{copy.reviewLabel}</p>
                        <p className='mb-3 text-sm leading-none tracking-[0.16em] text-[#d0a54f]' aria-label='5 stars'>★★★★★</p>
                        <blockquote className='font-heading text-sm leading-relaxed tracking-tight text-black/75 sm:text-[15px]'>&ldquo;{review.quote}&rdquo;</blockquote>
                        <div className='mt-4 flex items-center gap-2.5'>
                          <span aria-hidden='true' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: avatarColour(review.name), color: '#ffffff', boxShadow: '0 0 0 2px #f0e2bf', fontFamily: 'Inter, sans-serif', lineHeight: 1, textAlign: 'center' }} className='h-8 w-8 shrink-0 rounded-full text-xs font-black'>{review.name.trim().charAt(0).toUpperCase()}</span>
                          <p className='text-[10px] font-extrabold uppercase tracking-[0.14em] text-black/55'>{review.name}{review.from ? ` · ${review.from}` : ''}</p>
                        </div>
                        {reviews.length > 1 && <div className='mt-4 flex flex-wrap gap-1.5'>
                          {reviews.map((item, index) => <button key={item.name} type='button' onClick={() => selectReview(trainerIndex, index)} aria-pressed={reviewIndex === index} className={`border px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-[0.12em] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a87e32] ${reviewIndex === index ? 'border-[#171512] bg-[#171512] text-white' : 'border-black/15 text-black/55 hover:border-[#a87e32] hover:text-[#171512]'}`}>{item.name}</button>)}
                        </div>}
                      </aside>}
                      <div className='coach-client-gallery'>
                        {trainer.clientImages.map((image, index) => <img key={image} src={image} alt={`${trainer.name} coaching a VIO FITNESS member`} loading='lazy' style={clientImageStyle(index, trainer.clientImages.length)} className='absolute border-[3px] border-[#f7f6f1] object-cover shadow-[0_12px_24px_rgba(23,21,18,.18)]' />)}
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
                  )
                })()}
              </article>
            ))}
          </div>
          <nav className='pointer-events-none absolute inset-x-0 top-44 z-40 hidden items-center justify-between px-5 lg:flex xl:px-8' aria-label={language === 'vi' ? 'Chuyển huấn luyện viên' : 'Change coach'}>
            <button type='button' onClick={() => goToSlide(previousIndex)} className='pointer-events-auto grid h-12 w-12 place-items-center rounded-full border border-black/20 bg-[#f7f6f1]/90 text-xl text-black/65 shadow-[0_8px_22px_rgba(23,21,18,.08)] transition-colors hover:border-[#a87e32] hover:text-[#a87e32] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a87e32]' aria-label={`${copy.previous}: ${trainers[previousIndex].name}`} title={`${copy.previous}: ${trainers[previousIndex].name}`}>←</button>
            <button type='button' onClick={() => goToSlide(nextIndex)} className='pointer-events-auto grid h-12 w-12 place-items-center rounded-full border border-black/20 bg-[#f7f6f1]/90 text-xl text-black/65 shadow-[0_8px_22px_rgba(23,21,18,.08)] transition-colors hover:border-[#a87e32] hover:text-[#a87e32] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a87e32]' aria-label={`${copy.next}: ${trainers[nextIndex].name}`} title={`${copy.next}: ${trainers[nextIndex].name}`}>→</button>
          </nav>
        </div>
      </div>

      <div className='mx-auto mt-10 max-w-[1440px] px-4 text-center sm:px-8 lg:mt-12 lg:px-16 xl:px-20'>
        <div className='border-y border-black/10 py-9 sm:py-11'>
          <p className='font-heading mx-auto max-w-3xl text-3xl leading-tight tracking-tight text-[#171512] sm:text-4xl'>{language === 'vi' ? 'Bạn ấn tượng nhất với HLV nào? Hãy cho VIO biết nhé!' : 'Which coach were you most impressed with? Let me know!'}</p>
          <a href='#Registration' className='mt-6 inline-flex items-center gap-3 bg-[#a87e32] px-6 py-4 text-[11px] font-extrabold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#171512] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a87e32]'>
            {language === 'vi' ? 'Để lại thông tin' : 'Leave your details'} <span aria-hidden='true'>↗</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Trainers
