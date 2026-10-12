import { useEffect, useRef, useState } from 'react'
import { Icon } from '@iconify/react'
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

interface TrainerDetailDialogProps {
  trainer: Trainer
  language: SiteLanguage
  open: boolean
  onClose: () => void
}

const clientGalleries = {
  duyBao: [
    '/webp/trainers/with-clients/duy-bao-k1.webp',
    '/webp/trainers/with-clients/duy-bao-k2.webp',
    '/webp/trainers/with-clients/duy-bao-k3.webp',
  ],
  chiCong: [
    '/webp/trainers/with-clients/chi-cong-k1.webp',
  ],
  mia: [
    '/webp/trainers/with-clients/mia-k1.webp',
    '/webp/trainers/with-clients/mia-k2.webp',
  ],
}

const trainersByLanguage: Record<SiteLanguage, Trainer[]> = {
  vi: [
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
      name: 'Duy Bảo',
      focus: 'Sức mạnh - Tăng cơ - Giảm mỡ',
      role: 'Huấn luyện viên cá nhân',
      profile: 'Coach Duy Bảo chuyên tăng cơ, giảm mỡ, sức mạnh và chuyển đổi vóc dáng. Phương pháp tập trung vào cơ chế vận động đúng, cải thiện tư thế và xây dựng một cơ thể bền bỉ.',
      quote: 'Thêm một hiệp. Thêm một lần lặp. Mạnh mẽ hơn mỗi ngày.',
      portraitImage: '/webp/trainers/bao.webp',
      portraitPosition: 'center 22%',
      clientImages: clientGalleries.duyBao,
      reviews: [
        { name: 'Tuyết Anh', from: 'Đà Nẵng, Việt Nam', quote: 'Chỉ trong 6 ngày tại VIO, tôi đã học được rất nhiều bài tập và kỹ thuật mới. Coach Duy Bảo hiểu rõ chuyên môn, thân thiện và luôn hướng dẫn tận tình.' },
        { name: 'Michael Tiongson', from: 'Philippines', quote: 'Sau chương trình 1-1 kéo dài 5 tuần, tôi giảm 4kg mỡ. Coach Bảo giúp tôi tự tin từ những ngày đầu chưa biết sử dụng máy tập.' },
        { name: 'Veronique Vysotskaya', from: 'Nga', quote: 'Tôi thấy kết quả rõ rệt chỉ sau một tháng. Coach Duy Bảo chú ý kỹ thuật và giúp tôi cảm nhận cơ thể khỏe hơn từng buổi tập.' },
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

const TrainerDetailDialog: FC<TrainerDetailDialogProps> = ({ trainer, language, open, onClose }) => {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const galleryRef = useRef<HTMLDivElement>(null)
  const [reviewIndex, setReviewIndex] = useState(0)
  const reviews = trainer.reviews.filter(({ quote }) => quote.trim().length > 0)
  const selectedReview = reviews[Math.min(reviewIndex, reviews.length - 1)]
  const copy = language === 'vi'
    ? {
        close: 'Đóng hồ sơ',
        gallery: 'HLV đồng hành cùng khách hàng',
        image: 'Ảnh',
        profile: 'Hồ sơ chuyên môn',
        philosophy: 'Triết lý huấn luyện',
        reviews: 'Khách hàng nói gì',
        book: 'Đặt lịch cùng',
      }
    : {
        close: 'Close profile',
        gallery: 'Coaching in action',
        image: 'Photo',
        profile: 'Professional profile',
        philosophy: 'Coaching philosophy',
        reviews: 'Client feedback',
        book: 'Book with',
      }

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
  }, [open])

  useEffect(() => {
    if (!open) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [open])

  useEffect(() => {
    setReviewIndex(0)
    galleryRef.current?.scrollTo({ left: 0 })
  }, [trainer.name])

  const goToImage = (index: number) => {
    const gallery = galleryRef.current
    if (!gallery) return
    gallery.scrollTo({
      left: gallery.clientWidth * index,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
    })
  }

  return (
    <dialog
      ref={dialogRef}
      className='trainer-dialog'
      aria-labelledby='trainer-dialog-title'
      aria-describedby='trainer-dialog-focus'
      onClose={onClose}
      onMouseDown={(event) => {
        if (event.target === dialogRef.current) onClose()
      }}
    >
      <div className='trainer-dialog-panel' onMouseDown={(event) => event.stopPropagation()}>
        <header className='trainer-dialog-header'>
          <div className='min-w-0'>
            <p className='text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#a87e32]'>{trainer.role}</p>
            <h3 id='trainer-dialog-title' className='font-heading mt-1 truncate text-3xl font-black uppercase tracking-tight text-[#171512]'>{trainer.name}</h3>
          </div>
          <button
            type='button'
            onClick={onClose}
            className='grid h-11 w-11 shrink-0 place-items-center border border-black/15 text-[#171512] transition-colors hover:border-[#a87e32] hover:text-[#a87e32] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a87e32] active:scale-[0.98]'
            aria-label={copy.close}
            title={copy.close}
          >
            <Icon icon='tabler:x' className='text-2xl' aria-hidden='true' />
          </button>
        </header>

        <div className='trainer-dialog-body'>
          <section className='p-0' aria-labelledby='trainer-gallery-title'>
            <h4 id='trainer-gallery-title' className='sr-only'>{copy.gallery}</h4>
            <div ref={galleryRef} className='trainer-dialog-gallery'>
              {trainer.clientImages.map((image, index) => (
                <figure key={image} className='trainer-dialog-gallery-slide'>
                  <img
                    src={image}
                    alt={`${trainer.name} ${language === 'vi' ? 'đang hướng dẫn hội viên VIO FITNESS' : 'coaching a VIO FITNESS member'}`}
                    className='h-full w-full object-cover'
                    loading='lazy'
                    width='720'
                    height='900'
                  />
                  <figcaption className='sr-only'>{copy.image} {index + 1}</figcaption>
                </figure>
              ))}
            </div>

            {trainer.clientImages.length > 1 && (
              <div className='mt-3 grid grid-cols-3 gap-2' aria-label={copy.gallery}>
                {trainer.clientImages.map((image, index) => (
                  <button
                    key={image}
                    type='button'
                    onClick={() => goToImage(index)}
                    className='aspect-[4/3] overflow-hidden border border-black/10 bg-[#e8e4da] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a87e32] active:scale-[0.98]'
                    aria-label={`${copy.image} ${index + 1}`}
                  >
                    <img src={image} alt='' className='h-full w-full object-cover' loading='lazy' width='240' height='180' />
                  </button>
                ))}
              </div>
            )}
          </section>

          <div className='px-5 pb-8 pt-8'>
            <p id='trainer-dialog-focus' className='text-xs font-extrabold uppercase leading-relaxed tracking-[0.14em] text-[#a87e32]'>{trainer.focus}</p>

            <section className='mt-8 border-t border-black/10 pb-0 pt-6' aria-labelledby='trainer-profile-title'>
              <h4 id='trainer-profile-title' className='font-heading text-2xl font-black uppercase tracking-tight text-[#171512]'>{copy.profile}</h4>
              <p className='mt-3 text-[15px] leading-7 text-black/70'>{trainer.profile}</p>
            </section>

            <section className='mt-8 border-l-2 border-[#d0a54f] py-0 pl-5' aria-labelledby='trainer-philosophy-title'>
              <h4 id='trainer-philosophy-title' className='text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#a87e32]'>{copy.philosophy}</h4>
              <blockquote className='mt-3 text-lg italic leading-8 text-black/80'>&ldquo;{trainer.quote}&rdquo;</blockquote>
            </section>

            {selectedReview && (
              <section className='mt-9 border-t border-black/10 pb-0 pt-7' aria-labelledby='trainer-reviews-title'>
                <h4 id='trainer-reviews-title' className='font-heading text-2xl font-black uppercase tracking-tight text-[#171512]'>{copy.reviews}</h4>
                <div className='mt-5 bg-white/60 p-5'>
                  <p className='text-sm leading-none tracking-[0.16em] text-[#d0a54f]' aria-label='5 stars'>★★★★★</p>
                  <blockquote className='mt-4 text-[15px] leading-7 text-black/75'>&ldquo;{selectedReview.quote}&rdquo;</blockquote>
                  <div className='mt-5 flex items-center gap-3'>
                    <span
                      aria-hidden='true'
                      style={{ backgroundColor: avatarColour(selectedReview.name) }}
                      className='grid h-9 w-9 shrink-0 place-items-center rounded-full text-xs font-black text-white shadow-[0_0_0_2px_#f0e2bf]'
                    >
                      {selectedReview.name.trim().charAt(0).toUpperCase()}
                    </span>
                    <p className='text-[10px] font-extrabold uppercase leading-relaxed tracking-[0.12em] text-black/55'>
                      {selectedReview.name}{selectedReview.from ? `, ${selectedReview.from}` : ''}
                    </p>
                  </div>
                </div>

                {reviews.length > 1 && (
                  <div className='mt-3 flex flex-wrap gap-2' aria-label={copy.reviews}>
                    {reviews.map((review, index) => (
                      <button
                        key={review.name}
                        type='button'
                        onClick={() => setReviewIndex(index)}
                        aria-pressed={reviewIndex === index}
                        className={`border px-3 py-2 text-[9px] font-extrabold uppercase tracking-[0.1em] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a87e32] active:scale-[0.98] ${reviewIndex === index ? 'border-[#171512] bg-[#171512] text-white' : 'border-black/15 text-black/60 hover:border-[#a87e32] hover:text-[#171512]'}`}
                      >
                        {review.name}
                      </button>
                    ))}
                  </div>
                )}
              </section>
            )}
          </div>
        </div>

        <footer className='trainer-dialog-footer'>
          <a
            href='#Registration'
            onClick={onClose}
            className='flex min-h-12 w-full items-center justify-center bg-[#171512] px-5 py-3.5 text-center text-[11px] font-extrabold uppercase tracking-[0.13em] text-white transition-colors hover:bg-[#a87e32] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a87e32] active:scale-[0.99]'
          >
            {copy.book} {trainer.name}
          </a>
        </footer>
      </div>
    </dialog>
  )
}

const Trainers: FC<TrainersProps> = ({ language }) => {
  const trainers = trainersByLanguage[language]
  const [activeTrainerIndex, setActiveTrainerIndex] = useState(0)
  const [detailTrainerIndex, setDetailTrainerIndex] = useState(0)
  const [detailOpen, setDetailOpen] = useState(false)
  const [reviewIndexes, setReviewIndexes] = useState([0, 0, 0])
  const dragStart = useRef<number | null>(null)
  const wheelLocked = useRef(false)
  const previousIndex = (activeTrainerIndex - 1 + trainers.length) % trainers.length
  const nextIndex = (activeTrainerIndex + 1) % trainers.length
  const activeTrainer = trainers[activeTrainerIndex]
  const detailTrainer = trainers[detailTrainerIndex]
  const copy = language === 'vi'
    ? {
        eyebrow: 'Đội ngũ huấn luyện viên', title: <>Đồng hành cùng tiến bộ của bạn.</>, meet: 'Gặp gỡ HLV của bạn', reviewLabel: 'Đánh giá từ khách hàng', previous: 'Trước', next: 'Tiếp', book: 'Đặt lịch cùng',
        mobileActionFor: 'Xem hồ sơ HLV', trainerSelector: 'Chọn huấn luyện viên',
      }
    : {
        eyebrow: 'Our coaches', title: <>Coaching your progress.</>, meet: 'Meet your coach', reviewLabel: 'Client testimonial', previous: 'Previous', next: 'Next', book: 'Book with',
        mobileActionFor: 'View trainer profile', trainerSelector: 'Choose a trainer',
      }

  const goToSlide = (index: number) => {
    setActiveTrainerIndex(index)
  }

  const openTrainerDetail = (index: number) => {
    setDetailTrainerIndex(index)
    setDetailOpen(true)
  }

  const selectReview = (trainerIndex: number, reviewIndex: number) => {
    setReviewIndexes(current => current.map((item, index) => index === trainerIndex ? reviewIndex : item))
  }

  const isInteractiveTarget = (target: EventTarget | null) =>
    target instanceof HTMLElement && Boolean(target.closest('button, a'))

  return (
    <section id='Trainers' className='overflow-hidden bg-[#f7f6f1] py-10 text-[#171512] sm:py-14 md:py-16 lg:py-20'>
      <div className='mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-16 xl:px-20'>
        <header className='mx-auto w-full pb-8 text-center md:pb-16 lg:pb-20'>
          <p className='mb-3 hidden text-[11px] font-extrabold uppercase tracking-[0.23em] text-[#a87e32] md:block'>{copy.eyebrow}</p>
          <h2 className='font-heading text-[2rem] font-black uppercase leading-[0.95] tracking-tighter sm:text-[2.35rem] md:text-6xl lg:whitespace-nowrap lg:text-[clamp(3.75rem,4.2vw,5.25rem)]'>{copy.title}</h2>
          <p className='mx-auto mt-8 hidden text-sm leading-relaxed text-black/55 md:block md:text-base lg:whitespace-nowrap'>{language === 'vi' ? 'Ba chuyên gia. Ba phương pháp. Một hành trình mạnh mẽ hơn.' : 'Three specialists. Three approaches. One stronger journey.'}</p>
        </header>

        <div className='md:hidden'>
          <div className='grid grid-cols-3 border-y border-black/10' role='tablist' aria-label={copy.trainerSelector}>
            {trainers.map((trainer, index) => (
              <button
                key={trainer.name}
                type='button'
                role='tab'
                aria-selected={activeTrainerIndex === index}
                aria-controls='mobile-active-trainer'
                onClick={() => goToSlide(index)}
                className={`min-h-12 border-r border-black/10 px-1.5 py-3 text-[10px] font-extrabold uppercase tracking-[0.08em] transition-colors last:border-r-0 focus-visible:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a87e32] active:scale-[0.98] ${activeTrainerIndex === index ? 'bg-[#171512] text-white' : 'text-black/55 hover:text-[#171512]'}`}
              >
                {trainer.name}
              </button>
            ))}
          </div>

          <article id='mobile-active-trainer' role='tabpanel' aria-label={activeTrainer.name} className='pt-5'>
            <div className='group relative'>
              <span className='block aspect-[4/5] max-h-[58svh] w-full overflow-hidden bg-[#dedbd2]'>
                <img
                  src={activeTrainer.portraitImage}
                  alt={`${activeTrainer.name}, ${activeTrainer.role}`}
                  className='h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.015]'
                  style={{ objectPosition: activeTrainer.portraitPosition }}
                  loading={activeTrainerIndex === 0 ? 'eager' : 'lazy'}
                  width='720'
                  height='900'
                />
              </span>
              <div className='flex min-h-24 items-center justify-between gap-5 border-x border-b border-black/10 bg-white/45 px-4 py-4'>
                <div className='min-w-0'>
                  <h3 className='font-heading text-4xl font-black uppercase leading-none tracking-tight'>{activeTrainer.name}</h3>
                  <p className='mt-2 max-w-[30rem] text-[10px] font-extrabold uppercase leading-relaxed tracking-[0.1em] text-black/55'>{activeTrainer.focus}</p>
                </div>
                <Icon icon='tabler:arrow-up-right' className='shrink-0 text-2xl text-[#a87e32] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5' aria-hidden='true' />
              </div>
              <button
                type='button'
                onClick={() => openTrainerDetail(activeTrainerIndex)}
                className='absolute inset-0 w-full text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a87e32] active:scale-[0.995]'
                aria-label={`${copy.mobileActionFor} ${activeTrainer.name}`}
              />
            </div>
          </article>
        </div>
      </div>

      <div
        aria-label={copy.eyebrow}
        className='relative hidden cursor-grab overflow-hidden select-none active:cursor-grabbing md:block'
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
                          <a href='#Registration' className='mx-auto mt-4 flex w-fit items-center justify-center bg-[#171512] px-6 py-3.5 text-[11px] font-extrabold uppercase tracking-[0.15em] text-white transition-colors hover:bg-[#a87e32] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a87e32]'>
                            {copy.book} {trainer.name}
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

      <div className='mx-auto mt-10 hidden max-w-[1440px] px-4 text-center sm:px-8 md:block lg:mt-12 lg:px-16 xl:px-20'>
        <div className='border-y border-black/10 py-9 sm:py-11'>
          <p className='font-heading mx-auto max-w-3xl text-3xl leading-tight tracking-tight text-[#171512] sm:text-4xl'>{language === 'vi' ? 'Bạn ấn tượng nhất với HLV nào? Hãy cho VIO biết nhé!' : 'Which coach were you most impressed with? Let me know!'}</p>
          <a href='#Registration' className='mt-6 inline-flex items-center justify-center bg-[#a87e32] px-6 py-4 text-[11px] font-extrabold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#171512] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a87e32]'>
            {language === 'vi' ? 'Để lại thông tin' : 'Leave your details'}
          </a>
        </div>
      </div>

      <TrainerDetailDialog trainer={detailTrainer} language={language} open={detailOpen} onClose={() => setDetailOpen(false)} />
    </section>
  )
}

export default Trainers
