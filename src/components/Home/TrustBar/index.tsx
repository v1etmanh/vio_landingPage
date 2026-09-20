import React from 'react'
import type { SiteLanguage } from '../../../App'

interface TrustBarProps {
  language: SiteLanguage
}

const messageClassName = 'font-heading tracking-widest uppercase font-semibold text-lg text-[var(--color-darkmode)]/80 whitespace-nowrap'

const TrustBar: React.FC<TrustBarProps> = ({ language }) => {
  const messages = language === 'vi'
    ? [
        '3C - MÁT MẺ. SẠCH SẼ. THOẢI MÁI',
        'VIO FITNESS - NƠI THUỘC VỀ',
        'TRẢI NGHIỆM CAO CẤP',
        'HUẤN LUYỆN CÁ NHÂN',
        'XÂY DỰNG PHIÊN BẢN MẠNH NHẤT',
        'ĐÁNH GIÁ 5 SAO',
      ]
    : [
        '3C - COOL. CLEAN. COMFORTABLE',
        'VIO FITNESS - IT’S HOME',
        'PREMIUM EXPERIENCE',
        'PERSONAL TRAINING',
        'BUILD YOUR STRONGEST',
        '5 STAR RATING',
      ]

  const renderTrack = (items: string[]) =>
    [...items, ...items].map((label, index) => (
      <React.Fragment key={`${label}-${index}`}>
        <img src='/webp/logo.webp' alt='' aria-hidden='true' className='h-10 w-auto object-contain opacity-70' />
        <span className={messageClassName}>{label}</span>
      </React.Fragment>
    ))

  const topMessages = messages.slice(0, 3)
  const bottomMessages = messages.slice(3)

  return (
    <section className='relative z-20 py-3 border-b border-black/5 bg-white/50 backdrop-blur-sm overflow-hidden flex items-center justify-center'>
      <div className='flex flex-col gap-3 w-full opacity-50 hover:opacity-80 transition-opacity duration-700 pointer-events-none select-none' aria-label={language === 'vi' ? 'Thông điệp VIO Fitness' : 'VIO Fitness highlights'}>
        <div className='trust-marquee-row'>
          <div className='trust-marquee-track trust-marquee-track-left'>
            {renderTrack(topMessages)}
          </div>
        </div>
        <div className='trust-marquee-row'>
          <div className='trust-marquee-track trust-marquee-track-right'>
            {renderTrack(bottomMessages)}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustBar
