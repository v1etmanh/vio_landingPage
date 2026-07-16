import React, { useState } from 'react'
import Button from '../../ui/Button'

// ── Social SVGs ─────────────────────────────────────────────────────────────
const FacebookIcon = () => (
  <svg width='18' height='18' viewBox='0 0 24 24' fill='currentColor'>
    <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' />
  </svg>
)

const TikTokIcon = () => (
  <svg width='18' height='18' viewBox='0 0 24 24' fill='currentColor'>
    <path d='M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z' />
  </svg>
)

const InstagramIcon = () => (
  <svg width='18' height='18' viewBox='0 0 24 24' fill='currentColor'>
    <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
  </svg>
)

const MapPinIcon = () => (
  <svg width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='flex-shrink-0 mt-0.5'>
    <path d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z' />
    <circle cx='12' cy='10' r='3' />
  </svg>
)

const PhoneIcon = () => (
  <svg width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='flex-shrink-0 mt-0.5'>
    <path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.6 1.2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' />
  </svg>
)

const ClockIcon = () => (
  <svg width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='flex-shrink-0 mt-0.5'>
    <circle cx='12' cy='12' r='10' />
    <polyline points='12 6 12 12 16 14' />
  </svg>
)

const MailIcon = () => (
  <svg width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='flex-shrink-0 mt-0.5'>
    <path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z' />
    <polyline points='22,6 12,13 2,6' />
  </svg>
)

// ── Quick links ──────────────────────────────────────────────────────────────
const quickLinks = [
  { label: 'Về chúng tôi', href: '#About' },
  { label: 'Dịch vụ', href: '#Services' },
  { label: 'Bảng giá', href: '#Pricing' },
  { label: 'Huấn luyện viên', href: '#Trainers' },
  { label: 'Đánh giá', href: '#Testimonials' },
  { label: 'Liên hệ', href: '#Contact' },
]

const hours = [
  { day: 'Thứ 2 – Thứ 6', time: '05:30 – 22:30' },
  { day: 'Thứ 7', time: '06:00 – 21:00' },
  { day: 'Chủ nhật', time: '07:00 – 20:00' },
]

// ── Footer ───────────────────────────────────────────────────────────────────
const Footer = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) setSubmitted(true)
  }

  return (
    <footer id='Contact' className='bg-[var(--color-deep-slate)] text-white'>



      {/* Main footer grid */}
      <div className='container mx-auto max-w-7xl px-6 lg:px-12 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>

          {/* COL 1 — Brand */}
          <div className='lg:col-span-1'>
            <p className='font-heading text-2xl font-bold uppercase tracking-widest text-white mb-1'>
              VIO FITNESS
            </p>
            <p className='text-[var(--color-primary)] text-xs font-bold tracking-[0.2em] uppercase mb-4'>
              & GYM ĐÀ NẴNG
            </p>
            <p className='text-white/50 text-sm leading-relaxed mb-6'>
              Phòng gym 3 tầng chuẩn quốc tế tại trung tâm Đà Nẵng. Nơi hội tụ thiết bị đỉnh cao và HLV chuyên nghiệp.
            </p>
            {/* Social icons */}
            <div className='flex items-center gap-3'>
              <a
                href='https://www.facebook.com/vio.gymfitness'
                target='_blank'
                rel='noreferrer'
                id='footer-facebook'
                aria-label='Facebook VIO Fitness'
                className='w-9 h-9 border border-white/20 flex items-center justify-center text-white/60 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors duration-200'
              >
                <FacebookIcon />
              </a>
              <a
                href='https://www.tiktok.com/@vio.gymfitness'
                target='_blank'
                rel='noreferrer'
                id='footer-tiktok'
                aria-label='TikTok VIO Fitness'
                className='w-9 h-9 border border-white/20 flex items-center justify-center text-white/60 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors duration-200'
              >
                <TikTokIcon />
              </a>
              <a
                href='https://www.instagram.com/vio.gymfitness?igsh=MTc5djl0amFyNXBmYw=='
                target='_blank'
                rel='noreferrer'
                id='footer-instagram'
                aria-label='Instagram VIO Fitness'
                className='w-9 h-9 border border-white/20 flex items-center justify-center text-white/60 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors duration-200'
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

          {/* COL 2 — Quick links */}
          <div>
            <p className='font-heading text-sm font-bold uppercase tracking-[0.2em] text-white/40 mb-6'>
              Liên kết nhanh
            </p>
            <ul className='space-y-3'>
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className='text-white/70 text-[15px] hover:text-[var(--color-primary)] transition-colors duration-150 flex items-center gap-2 group'
                  >
                    <span className='w-0 group-hover:w-3 overflow-hidden transition-all duration-200 text-[var(--color-primary)]'>→</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COL 3 — Contact info */}
          <div>
            <p className='font-heading text-sm font-bold uppercase tracking-[0.2em] text-white/40 mb-6'>
              Thông tin liên hệ
            </p>
            <ul className='space-y-4'>
              <li className='flex items-start gap-3 text-white/70 text-sm'>
                <span className='text-[var(--color-primary)] mt-0.5'><MapPinIcon /></span>
                <a
                  href='https://maps.app.goo.gl/oF3KHEfNwWbVswZa7'
                  target='_blank'
                  rel='noreferrer'
                  className='hover:text-white transition-colors leading-relaxed'
                >
                  15 Trần Phú – 02 Nguyễn Du,<br />Hải Châu, Đà Nẵng
                </a>
              </li>
              <li className='flex items-start gap-3 text-white/70 text-sm'>
                <span className='text-[var(--color-primary)] mt-0.5'><PhoneIcon /></span>
                <a href='tel:0961119495' className='hover:text-white transition-colors'>
                  0961 119 495
                </a>
              </li>
              <li className='flex items-start gap-3 text-white/70 text-sm'>
                <span className='text-[var(--color-primary)] mt-0.5'><MailIcon /></span>
                <a href='mailto:info@viofitness.vn' className='hover:text-white transition-colors'>
                  info@viofitness.vn
                </a>
              </li>
              <li className='pt-2 border-t border-white/10'>
                <p className='flex items-start gap-3 text-white/40 text-xs uppercase tracking-widest mb-3 font-bold'>
                  <span className='text-[var(--color-primary)]'><ClockIcon /></span>
                  Giờ mở cửa
                </p>
                <ul className='space-y-1.5 pl-6'>
                  {hours.map((h, i) => (
                    <li key={i} className='flex justify-between text-sm text-white/60'>
                      <span>{h.day}</span>
                      <span className='text-white/80 font-medium'>{h.time}</span>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>

          {/* COL 4 — Newsletter / Tư vấn */}
          <div>
            <p className='font-heading text-sm font-bold uppercase tracking-[0.2em] text-white/40 mb-2'>
              Đăng ký tư vấn
            </p>
            <p className='text-white/50 text-sm mb-6 leading-relaxed'>
              Để lại thông tin — đội ngũ VIO sẽ liên hệ tư vấn gói tập phù hợp nhất cho bạn.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className='space-y-3' id='footer-consult-form'>
                <input
                  type='text'
                  placeholder='Họ và tên'
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className='w-full bg-white/5 border border-white/15 text-white text-sm px-4 py-3 placeholder:text-white/30 focus:outline-none focus:border-[var(--color-primary)] transition-colors duration-200'
                  id='footer-input-name'
                />
                <input
                  type='tel'
                  placeholder='Số điện thoại *'
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className='w-full bg-white/5 border border-white/15 text-white text-sm px-4 py-3 placeholder:text-white/30 focus:outline-none focus:border-[var(--color-primary)] transition-colors duration-200'
                  id='footer-input-phone'
                />
                <Button
                  type='submit'
                  id='footer-submit-btn'
                  variant='primary'
                  className='w-full'
                >
                  Gửi yêu cầu tư vấn
                </Button>
              </form>
            ) : (
              <div className='border border-[var(--color-primary)]/40 bg-[var(--color-primary)]/10 p-5 text-center'>
                <p className='text-[var(--color-primary)] font-heading font-bold uppercase tracking-wider text-sm mb-1'>
                  Đã nhận!
                </p>
                <p className='text-white/60 text-sm'>
                  VIO sẽ liên hệ với bạn trong thời gian sớm nhất.
                </p>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className='border-t border-white/10'>
        <div className='container mx-auto max-w-7xl px-6 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/40 text-sm'>
          <p>© {new Date().getFullYear()} VIO FITNESS & GYM ĐÀ NẴNG. All rights reserved.</p>
          <div className='flex items-center gap-6'>
            <a href='#' className='hover:text-white/70 transition-colors'>Chính sách riêng tư</a>
            <span className='text-white/20'>|</span>
            <a href='#' className='hover:text-white/70 transition-colors'>Điều khoản sử dụng</a>
          </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer
