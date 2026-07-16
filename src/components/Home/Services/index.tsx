import React, { useRef } from 'react'
import { Icon } from '@iconify/react'
import Button from '../../ui/Button'
import ScrollStack, { ScrollStackItem } from '../../ui/ScrollStack'

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
  const services = servicesData

  return (
    <section id="Services" ref={sectionRef} className="relative py-24 bg-[var(--color-darkmode)] text-white overflow-hidden">
      {/* Combined Header & Stats Pill (About Us + Services) */}
      <div ref={headerRef} className="mx-auto max-w-4xl px-4 pb-16 pt-12 text-center flex flex-col items-center">
        <p className="services-eyebrow mb-2 text-2xl font-bold uppercase tracking-wide text-[var(--color-primary)] font-heading">
          Hơn Cả Một Phòng Tập.
        </p>
        <h2 className="services-heading-line mb-6 font-heading text-3xl sm:text-5xl font-black uppercase leading-tight text-white md:text-6xl tracking-tight">
          Một Nơi Để Thuộc Về.
        </h2>
        <p className="services-lede mx-auto max-w-2xl text-base leading-relaxed text-white/70">
          Chúng tôi không chỉ là một phòng tập. Chúng tôi là không gian được xây dựng cho mọi hành trình — dù bạn mới bắt đầu hay đang tìm cách vượt qua giới hạn của bản thân. Ở đây, không quan trọng sự hoàn hảo. Điều quan trọng là sự tiến bộ theo cách của bạn.
        </p>

        {/* Stats Pill */}
        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-center gap-4 sm:gap-6 rounded-2xl sm:rounded-full border border-white/20 px-6 sm:px-8 py-6 sm:py-4 w-full sm:w-auto mx-auto bg-white/5 sm:bg-transparent">
          <div className="flex items-center gap-3">
            <Icon icon="tabler:crown" className="text-2xl sm:text-3xl text-[var(--color-primary)] sm:text-white" />
            <span className="text-left text-xs sm:text-sm font-bold leading-tight tracking-wider text-white uppercase">
              10+ Năm<br className="hidden sm:block" /> <span className="sm:hidden">Kinh Nghiệm</span>
              <span className="hidden sm:inline">Kinh Nghiệm</span>
            </span>
          </div>
          <span className="hidden sm:block text-white/30 text-xl font-light">/</span>
          <div className="flex items-center gap-3">
            <Icon icon="tabler:device-laptop" className="text-2xl sm:text-3xl text-[var(--color-primary)] sm:text-white" />
            <span className="text-left text-xs sm:text-sm font-bold leading-tight tracking-wider text-white uppercase">
              5000+<br className="hidden sm:block" /> <span className="sm:hidden">Phiên Tập</span>
              <span className="hidden sm:inline">Phiên Tập</span>
            </span>
          </div>
          <span className="hidden sm:block text-white/30 text-xl font-light">/</span>
          <div className="flex items-center gap-3">
            <Icon icon="tabler:ticket" className="text-2xl sm:text-3xl text-[var(--color-primary)] sm:text-white" />
            <span className="text-left text-xs sm:text-sm font-bold leading-tight tracking-wider text-white uppercase">
              140+<br className="hidden sm:block" /> <span className="sm:hidden">Sự Kiện</span>
              <span className="hidden sm:inline">Sự Kiện</span>
            </span>
          </div>
        </div>
      </div>

      {/* Desktop: Stacking Cards using ScrollStack */}
      <div className="relative mx-auto hidden max-w-7xl px-4 lg:block">
        <ScrollStack useWindowScroll={true} itemDistance={150}>
          {services.map((item, index) => (
            <ScrollStackItem
              key={item.id}
              itemClassName="flex bg-[#221e1a] border border-white/10 p-0 overflow-hidden shadow-2xl"
            >
              <div className="w-1/2 relative h-full bg-[#111]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading={index === 0 ? "eager" : "lazy"}
                  onLoad={() => window.dispatchEvent(new Event('resize'))}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#221e1a]" />
              </div>
              <div className="w-1/2 flex items-center p-16">
                <div>
                  <h3 className="font-heading text-4xl font-bold uppercase leading-[0.95] text-white xl:text-5xl">
                    {item.title}
                  </h3>
                  <div className="my-6 h-px w-12" style={{ backgroundColor: THREAD }} />
                  <p className="mb-4 text-lg leading-relaxed text-white/80">{item.description}</p>
                  <p className="text-sm leading-relaxed text-white/50">{item.detail}</p>
                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>

      {/* Mobile: stacked layout */}
      <div className="mx-auto block max-w-md px-4 lg:hidden">
        {services.map((item) => (
          <div key={item.id} className="mb-16">
            <div className="relative h-[60vh] w-full overflow-hidden" style={{ border: `1px solid ${THREAD}` }}>
              <div className="absolute inset-0 overflow-hidden">
                <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
              </div>
            </div>
            <div className="mt-6">
              <h3 className="font-heading text-3xl font-bold uppercase leading-[0.95] text-white">
                {item.title}
              </h3>
              <div className="my-5 h-px w-12" style={{ backgroundColor: THREAD }} />
              <p className="mb-3 text-base leading-relaxed text-white/80">{item.description}</p>
              <p className="text-sm leading-relaxed text-white/50">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Closing link into the next step */}
      <div className="mx-auto flex justify-center px-4 mt-12 pb-12">
        <Button variant="white" href="#Contact" icon="tabler:arrow-right">
          Đặt Lịch Tham Quan
        </Button>
      </div>
    </section>
  )
}