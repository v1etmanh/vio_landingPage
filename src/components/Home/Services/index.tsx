import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Icon } from '@iconify/react'

gsap.registerPlugin(ScrollTrigger)

// Single accent token for the whole section. Everything gold you see
// (tag numerals, divider, thread line, thread nodes, counter) reads from
// this one constant, so "Gold Thread" stays literally one thread.
const THREAD = '#C9A66B'

interface ServiceItem {
  id: number
  title: string
  subtitle: string
  tag: string
  description: string
  detail: string
  image: string
}

const servicesData: ServiceItem[] = [
  {
    id: 1,
    title: 'Thiết Bị Đỉnh Cao',
    subtitle: 'Panatta & Hammer Strength',
    tag: '01 · TRANG THIẾT BỊ',
    description:
      'Hệ thống máy tập nhập khẩu nguyên chiếc từ Ý và Mỹ, bố trí theo từng nhóm cơ để bạn tập đúng kỹ thuật và rút ngắn thời gian đạt kết quả.',
    detail: 'Đội kỹ thuật hiệu chỉnh toàn bộ thiết bị mỗi tuần để đảm bảo độ chính xác khi tập luyện.',
    image: '/images/KSP02428-HDR-Edit.jpg',
  },
  {
    id: 2,
    title: 'Không Gian Luyện Tập',
    subtitle: 'Premium & Spacious',
    tag: '02 · KHÔNG GIAN',
    description:
      'Không gian tập luyện rộng rãi, thoáng mát với hệ thống lọc không khí và điều hoà hiện đại, mang lại cảm giác thoải mái nhất khi tập luyện.',
    detail: 'Thiết kế tối ưu để không bao giờ có cảm giác chật chội ngay cả vào giờ cao điểm.',
    image: '/images/KSP02409-HDR-Edit.jpg',
  },
  {
    id: 3,
    title: 'Phục Hồi Và Trị Liệu',
    subtitle: 'Personal Training & Therapy',
    tag: '03 · CHĂM SÓC',
    description:
      'Khu trị liệu riêng biệt có huấn luyện viên cá nhân và chuyên gia phục hồi chức năng, hỗ trợ giảm đau, phục hồi chấn thương và duy trì sức bền lâu dài.',
    detail: 'Liệu trình được thiết kế riêng cho từng người, kết hợp massage trị liệu và kéo giãn cơ chuyên sâu.',
    image: '/images/KSP02574-Edit.jpg',
  },
  {
    id: 4,
    title: 'Phòng Xông Hơi',
    subtitle: 'Premium Dry Sauna',
    tag: '04 · THƯ GIÃN',
    description:
      'Phòng sauna khô cao cấp giúp thanh lọc cơ thể, giảm căng thẳng và hỗ trợ phục hồi cơ bắp sau mỗi buổi tập, trong không gian riêng tư và sạch sẽ tuyệt đối.',
    detail: 'Gỗ thông Phần Lan nhập khẩu, duy trì nhiệt độ ổn định 80 đến 90 độ C theo chuẩn quốc tế.',
    image: '/images/KSP02559-HDR-Edit.jpg',
  },
  {
    id: 5,
    title: 'Nạp Dinh Dưỡng',
    subtitle: 'Protein Bar & Smoothie',
    tag: '05 · DINH DƯỠNG',
    description:
      'Quầy dinh dưỡng ngay trong phòng gym phục vụ protein shake, sinh tố trái cây tươi và snack lành mạnh để bạn nạp năng lượng ngay sau buổi tập.',
    detail: 'Thực đơn được tư vấn bởi chuyên gia dinh dưỡng, không phẩm màu và không chất bảo quản.',
    image: '/images/KSP02474-HDR-Edit.jpg',
  },
]

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const services = servicesData

  useGSAP(() => {
    // Create a ScrollTrigger timeline that scrubs through the animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: `+=${services.length * 100}%`, // Each slide gets 100% of viewport height scroll
        pin: true,
        scrub: 1, // Smooth playback for GSAP scrollTrigger
        invalidateOnRefresh: true,
      }
    });

    // Initial setups for GSAP to avoid FOUC and force hardware acceleration
    gsap.set(".service-bg", { opacity: 0, scale: 1, force3D: true });
    gsap.set(".service-bg-0", { opacity: 1, scale: 1.05 });

    gsap.set(".service-text-wrapper", { opacity: 0, pointerEvents: "none", force3D: true });
    gsap.set(".service-text-wrapper-0", { opacity: 1, pointerEvents: "auto" });

    gsap.set(".service-text-wrapper-0 .service-line", { y: 0, opacity: 1, force3D: true });
    gsap.set(".service-text-wrapper:not(.service-text-wrapper-0) .service-line", { y: 60, opacity: 0, force3D: true });

    gsap.set(".service-dot", { backgroundColor: "transparent", opacity: 0.5, scale: 1, force3D: true });
    gsap.set(".service-dot-0", { backgroundColor: "white", opacity: 1, scale: 1.25 });

    // Build timeline steps
    services.forEach((_, i) => {
      if (i === 0) {
        // Hold the first slide for a moment before starting transitions
        tl.to({}, { duration: 0.5 });
        return;
      }

      tl.to(`.service-bg-${i - 1}`, { opacity: 0, scale: 1, duration: 1, ease: "power1.inOut" }, `slide${i}`)
        .to(`.service-text-wrapper-${i - 1} .service-line`, { y: -60, opacity: 0, stagger: 0.05, duration: 0.5, ease: "power2.in" }, `slide${i}`)
        .set(`.service-text-wrapper-${i - 1}`, { pointerEvents: "none" }, `slide${i}+=0.5`)
        .to(`.service-dot-${i - 1}`, { backgroundColor: "transparent", opacity: 0.5, scale: 1, duration: 0.5 }, `slide${i}`)

        .to(`.service-bg-${i}`, { opacity: 1, scale: 1.05, duration: 1, ease: "power1.inOut" }, `slide${i}`)
        .set(`.service-text-wrapper-${i}`, { opacity: 1, pointerEvents: "auto" }, `slide${i}`)
        .to(`.service-text-wrapper-${i} .service-line`, { y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: "power2.out" }, `slide${i}+=0.2`)
        .to(`.service-dot-${i}`, { backgroundColor: "white", opacity: 1, scale: 1.25, duration: 0.5 }, `slide${i}`)

        // hold frame
        .to({}, { duration: 0.5 });
    });

  }, { scope: sectionRef });

  return (
    <section id="Services" ref={sectionRef} className="relative text-white z-10 bg-black">
      {/* ── OPUS-STYLE SLIDER SECTION ── */}
      <div ref={containerRef} className="relative w-full h-screen overflow-hidden bg-black flex items-center justify-center">

        {/* Background Images */}
        {services.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 w-full h-full z-0 service-bg service-bg-${index}`}
          >
            <img src={item.image} className="w-full h-full object-cover" alt={item.title} loading={index === 0 ? "eager" : "lazy"} fetchPriority={index === 0 ? "high" : "auto"} />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/80" />
          </div>
        ))}

        {/* Pagination Indicators */}
        <div className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
          {services.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 md:w-4 md:h-4 rounded-full border-2 border-white service-dot service-dot-${index}`}
            />
          ))}
        </div>

        {/* Text Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-12 md:px-24 h-full flex items-center justify-end overflow-hidden">
          <div className="max-w-2xl text-right relative w-full h-[400px] flex items-center justify-end">
            {services.map((item, index) => (
              <div key={item.id} className={`absolute right-0 flex flex-col items-end service-text-wrapper service-text-wrapper-${index}`}>
                <div className="text-[var(--color-primary)] font-bold tracking-widest text-xs md:text-sm uppercase mb-3 service-line">
                  {item.tag}
                </div>
                <div className="font-heading text-4xl md:text-5xl lg:text-7xl font-black uppercase mb-2 text-white leading-none service-line">
                  {item.title}
                </div>
                <div className="text-2xl md:text-3xl lg:text-4xl font-light mb-6 text-white/90 service-line">
                  {item.subtitle}
                </div>
                <div className="text-base md:text-lg text-white/80 mb-4 max-w-lg text-right service-line">
                  {item.description}
                </div>
                <div className="text-sm md:text-base text-white/50 max-w-md text-right flex items-center justify-end gap-3 service-line">
                  <div className="h-px w-8 bg-white/20" />
                  {item.detail}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}