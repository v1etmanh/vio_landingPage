import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ReactLenis from 'lenis/react'

gsap.registerPlugin(ScrollTrigger)

interface ServiceItem {
  id: number
  title: string
  subtitle: string
  tag: string
  description: string
  detail: string
  image: string
}

const services: ServiceItem[] = [
  {
    id: 1,
    title: 'Thiết Bị Đỉnh Cao',
    subtitle: 'Panatta & Hammer Strength',
    tag: '01 — EQUIPMENT',
    description:
      'Hệ thống máy tập 100% nhập khẩu từ Ý và Mỹ — Panatta Sport và Hammer Strength — tối ưu hóa từng nhóm cơ, giúp bạn đạt kết quả nhanh hơn và an toàn hơn.',
    detail: 'Mỗi máy được hiệu chỉnh bởi đội kỹ thuật chuyên nghiệp hàng tuần để đảm bảo hiệu suất tập luyện tốt nhất.',
    image: '/images/Bản sao của KSP02409-HDR-Edit.jpg',
  },
  {
    id: 2,
    title: 'Khu Vực Chức Năng',
    subtitle: 'Boxing & Functional Area',
    tag: '02 — FUNCTIONAL',
    description:
      'Khu boxing & functional training rộng rãi tầng 2, trang bị thảm đấm bốc, dây kéo, dụng cụ cân bằng và không gian thoáng để bạn di chuyển tự do.',
    detail: 'Phù hợp cho mọi cấp độ từ người mới bắt đầu đến vận động viên chuyên nghiệp.',
    image: '/images/Bản sao của KSP02428-HDR-Edit.jpg',
  },
  {
    id: 3,
    title: 'Phục Hồi & Trị Liệu',
    subtitle: 'PT + Therapy Zone',
    tag: '03 — RECOVERY',
    description:
      'Khu vực trị liệu chuyên biệt với HLV cá nhân và chuyên gia phục hồi chức năng. Giảm đau, phục hồi sau chấn thương, tối ưu hóa sức bền lâu dài.',
    detail: 'Liệu trình phục hồi được thiết kế riêng cho từng cá nhân, kết hợp massage therapy và kéo giãn cơ chuyên sâu.',
    image: '/images/Bản sao của KSP02444-HDR-Edit.jpg',
  },
  {
    id: 4,
    title: 'Phòng Xông Hơi',
    subtitle: 'Premium Sauna',
    tag: '04 — WELLNESS',
    description:
      'Phòng sauna khô cao cấp giúp thanh lọc cơ thể, giảm căng thẳng và phục hồi cơ bắp sau mỗi buổi tập. Không gian riêng tư, vệ sinh tuyệt đối.',
    detail: 'Nhiệt độ duy trì ở mức 80–90°C, thiết kế từ gỗ thông Phần Lan nhập khẩu, đạt chuẩn quốc tế.',
    image: '/images/Bản sao của KSP02464-HDR-Edit.jpg',
  },
  {
    id: 5,
    title: 'Nạp Năng Lượng',
    subtitle: 'Protein Bar & Smoothie',
    tag: '05 — NUTRITION',
    description:
      'Quầy bar dinh dưỡng ngay trong phòng gym phục vụ protein shake, sinh tố trái cây tươi và snack lành mạnh — bổ sung năng lượng ngay sau buổi tập.',
    detail: 'Thực đơn được tư vấn bởi chuyên gia dinh dưỡng, không phẩm màu, không chất bảo quản.',
    image: '/images/Bản sao của KSP02479-HDR-Edit.jpg',
  },
]

// ── Sticky Photo Stack ─────────────────────────────────────────────────────
const StickyPhotoStack = ({ images }: { images: string[] }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const imageRefs = useRef<(HTMLImageElement | null)[]>([])

  useGSAP(
    () => {
      const els = imageRefs.current
      if (!els[0]) return

      gsap.set(els[0], { y: '0%', scale: 1, rotation: 0 })
      for (let i = 1; i < els.length; i++) {
        if (els[i]) gsap.set(els[i], { y: '100%', scale: 1, rotation: 0 })
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.sticky-photo-area',
          start: 'top top',
          end: `+=${window.innerHeight * (els.length - 1)}`,
          pin: true,
          scrub: 0.6,
          pinSpacing: true,
        },
      })

      for (let i = 0; i < els.length - 1; i++) {
        const cur = els[i]
        const next = els[i + 1]
        if (!cur || !next) continue
        tl.to(cur, { scale: 0.75, rotation: -4, opacity: 0.4, duration: 1, ease: 'none' }, i)
        tl.to(next, { y: '0%', duration: 1, ease: 'none' }, i)
      }

      const ro = new ResizeObserver(() => ScrollTrigger.refresh())
      if (containerRef.current) ro.observe(containerRef.current)

      return () => {
        ro.disconnect()
        tl.kill()
        ScrollTrigger.getAll().forEach(t => t.kill())
      }
    },
    { scope: containerRef },
  )

  return (
    <div ref={containerRef} className='relative h-full w-full'>
      <div className='sticky-photo-area sticky top-0 flex h-screen w-full items-center justify-center p-6 lg:p-12'>
        <div className='relative h-[75vh] w-full max-w-xl overflow-hidden rounded-none shadow-[0_20px_60px_rgba(0,0,0,0.35)]'>
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`VIO Fitness ${i + 1}`}
              className='absolute inset-0 h-full w-full object-cover'
              ref={el => { imageRefs.current[i] = el }}
            />
          ))}
          {/* Subtle bottom scrim */}
          <div className='absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent pointer-events-none' />
        </div>
      </div>
    </div>
  )
}

// ── Text Sections ──────────────────────────────────────────────────────────
const TextSections = ({ items }: { items: ServiceItem[] }) => {
  return (
    <div className='flex flex-col'>
      {items.map((item, i) => (
        <div
          key={item.id}
          className='flex items-center min-h-screen py-24 px-6 lg:px-12'
        >
          <div className='max-w-lg service-text-block'>
            {/* Tag */}
            <span className='inline-block text-[var(--color-primary)] text-xs font-bold tracking-[0.3em] uppercase mb-6'>
              {item.tag}
            </span>
            {/* Subtitle */}
            <p className='text-[var(--color-primary)]/70 text-sm font-bold tracking-widest uppercase mb-3'>
              {item.subtitle}
            </p>
            {/* Title */}
            <h3 className='font-heading text-4xl md:text-5xl xl:text-6xl font-bold uppercase text-[var(--color-darkmode)] leading-[0.95] mb-8'>
              {item.title}
            </h3>
            {/* Divider */}
            <div className='w-12 h-[3px] bg-[#C0392B] mb-8' />
            {/* Description */}
            <p className='text-[var(--color-darkmode)]/70 text-lg leading-relaxed mb-4'>
              {item.description}
            </p>
            <p className='text-[var(--color-darkmode)]/45 text-sm leading-relaxed'>
              {item.detail}
            </p>
            {/* Step indicator */}
            <div className='mt-10 flex items-center gap-3'>
              <span className='font-heading font-bold text-5xl text-black/5 leading-none select-none'>
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className='flex gap-1.5'>
                {items.map((_, dot) => (
                  <span
                    key={dot}
                    className={`block h-1 rounded-full transition-all duration-300 ${dot === i
                        ? 'w-6 bg-[#C0392B]'
                        : 'w-2 bg-black/15'
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

// ── Main Services Section ──────────────────────────────────────────────────
const Services = () => {
  const sectionHeaderRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const el = sectionHeaderRef.current
    if (!el) return

    // Eyebrow clip-in
    gsap.fromTo(
      el.querySelector('.services-eyebrow'),
      { clipPath: 'inset(0 100% 0 0)', opacity: 0 },
      {
        clipPath: 'inset(0 0% 0 0)', opacity: 1,
        duration: 0.8, ease: 'expo.out',
        scrollTrigger: { trigger: el, start: 'top 88%' }
      }
    )

    // Heading lines
    gsap.fromTo(
      el.querySelectorAll('.services-heading-line'),
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.85, ease: 'expo.out',
        stagger: 0.12,
        scrollTrigger: { trigger: el, start: 'top 85%' }
      }
    )
  }, { scope: sectionHeaderRef })

  return (
    <ReactLenis root options={{ lerp: 0.08, duration: 1.4 }}>
      <section id='Services' className='relative'>

        {/* Section Header */}
        <div ref={sectionHeaderRef} className='pt-24 pb-0 text-center max-w-3xl mx-auto px-4'>
          <h2 className='services-eyebrow text-[var(--color-primary)] text-sm font-bold tracking-[0.25em] uppercase mb-4'>
            Trải Nghiệm Đẳng Cấp
          </h2>
          <h3 className='font-heading text-5xl md:text-6xl font-bold text-[var(--color-darkmode)] uppercase leading-tight'>
            <span className='services-heading-line block'>Không Gian 3 Tầng</span>
            <span className='services-heading-line block'>Chuẩn Quốc Tế</span>
          </h3>
        </div>

        {/* Sticky Photo + Scrolling Text — side by side */}
        <div className='flex flex-col lg:flex-row'>
          {/* LEFT: sticky photos */}
          <div className='w-full lg:w-1/2 lg:h-auto'>
            <StickyPhotoStack images={services.map(s => s.image)} />
          </div>

          {/* RIGHT: scrolling text */}
          <div className='w-full lg:w-1/2'>
            <TextSections items={services} />
          </div>
        </div>

      </section>
    </ReactLenis>
  )
}

export default Services
