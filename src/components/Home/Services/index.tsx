import React, { useRef, useState } from 'react'
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion'
import { Icon } from '@iconify/react'

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
    image: '/images/Bản sao của KSP02409-HDR-Edit.jpg',
  },
  {
    id: 2,
    title: 'Khu Vực Chức Năng',
    subtitle: 'Boxing & Functional Training',
    tag: '02 · TẦNG 2',
    description:
      'Không gian riêng cho boxing và functional training với thảm đấm bốc, dây kéo và dụng cụ cân bằng, đủ rộng để bạn di chuyển tự do trong từng bài tập.',
    detail: 'Phù hợp với mọi trình độ, từ người mới bắt đầu đến vận động viên thi đấu.',
    image: '/images/Bản sao của KSP02428-HDR-Edit.jpg',
  },
  {
    id: 3,
    title: 'Phục Hồi Và Trị Liệu',
    subtitle: 'Personal Training & Therapy',
    tag: '03 · CHĂM SÓC',
    description:
      'Khu trị liệu riêng biệt có huấn luyện viên cá nhân và chuyên gia phục hồi chức năng, hỗ trợ giảm đau, phục hồi chấn thương và duy trì sức bền lâu dài.',
    detail: 'Liệu trình được thiết kế riêng cho từng người, kết hợp massage trị liệu và kéo giãn cơ chuyên sâu.',
    image: '/images/Bản sao của KSP02444-HDR-Edit.jpg',
  },
  {
    id: 4,
    title: 'Phòng Xông Hơi',
    subtitle: 'Premium Dry Sauna',
    tag: '04 · THƯ GIÃN',
    description:
      'Phòng sauna khô cao cấp giúp thanh lọc cơ thể, giảm căng thẳng và hỗ trợ phục hồi cơ bắp sau mỗi buổi tập, trong không gian riêng tư và sạch sẽ tuyệt đối.',
    detail: 'Gỗ thông Phần Lan nhập khẩu, duy trì nhiệt độ ổn định 80 đến 90 độ C theo chuẩn quốc tế.',
    image: '/images/Bản sao của KSP02464-HDR-Edit.jpg',
  },
  {
    id: 5,
    title: 'Nạp Năng Lượng',
    subtitle: 'Protein Bar & Smoothie',
    tag: '05 · DINH DƯỠNG',
    description:
      'Quầy dinh dưỡng ngay trong phòng gym phục vụ protein shake, sinh tố trái cây tươi và snack lành mạnh để bạn nạp năng lượng ngay sau buổi tập.',
    detail: 'Thực đơn được tư vấn bởi chuyên gia dinh dưỡng, không phẩm màu và không chất bảo quản.',
    image: '/images/Bản sao của KSP02479-HDR-Edit.jpg',
  },
]

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const services = servicesData

  const [activeSlide, setActiveSlide] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const total = services.length
    const index = Math.min(Math.floor(latest * total), total - 1)
    if (index !== activeSlide) {
      setActiveSlide(index)
    }
  })

  return (
    <section id="Services" ref={sectionRef} className="relative text-white z-10">
      {/* ── OPUS-STYLE SLIDER SECTION ── */}
      <div ref={containerRef} className="relative w-full" style={{ height: `${services.length * 100}vh` }}>
        <div className="sticky top-0 w-full h-screen overflow-hidden bg-black flex items-center justify-center">
          
          {/* Background Images */}
          {services.map((item, index) => (
            <motion.div
              key={item.id}
              className="absolute inset-0 w-full h-full z-0"
              initial={{ opacity: 0, scale: 1 }}
              animate={{ 
                opacity: activeSlide === index ? 1 : 0,
                scale: activeSlide === index ? 1.05 : 1
              }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            >
              <img src={item.image} className="w-full h-full object-cover" alt={item.title} />
              {/* Overlay to ensure text contrast */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/80" />
            </motion.div>
          ))}

          {/* Pagination Indicators */}
          <div className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
            {services.map((_, index) => (
              <div 
                key={index} 
                className={`w-3 h-3 md:w-4 md:h-4 rounded-full border-2 border-white transition-all duration-500 ${
                  activeSlide === index ? 'bg-white scale-125' : 'bg-transparent opacity-50'
                }`}
              />
            ))}
          </div>

          {/* Text Content */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-12 md:px-24 h-full flex items-center justify-end">
            <div className="max-w-2xl text-right">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={{
                    animate: { transition: { staggerChildren: 0.1 } },
                    exit: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
                  }}
                  className="flex flex-col items-end"
                >
                  <motion.div variants={lineVariants} className="text-[var(--color-primary)] font-bold tracking-widest text-xs md:text-sm uppercase mb-3">
                    {services[activeSlide].tag}
                  </motion.div>
                  <motion.div variants={lineVariants} className="font-heading text-4xl md:text-5xl lg:text-7xl font-black uppercase mb-2 text-white leading-none">
                    {services[activeSlide].title}
                  </motion.div>
                  <motion.div variants={lineVariants} className="text-2xl md:text-3xl lg:text-4xl font-light mb-6 text-white/90">
                    {services[activeSlide].subtitle}
                  </motion.div>
                  <motion.div variants={lineVariants} className="text-base md:text-lg text-white/80 mb-4 max-w-lg text-right">
                    {services[activeSlide].description}
                  </motion.div>
                  <motion.div variants={lineVariants} className="text-sm md:text-base text-white/50 max-w-md text-right flex items-center justify-end gap-3">
                    <div className="h-px w-8 bg-white/20" />
                    {services[activeSlide].detail}
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>

    </section>
  )
}

const lineVariants = {
  initial: { y: 60, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  exit: { y: -60, opacity: 0, transition: { duration: 0.5, ease: [0.7, 0, 0.84, 0] } }
}