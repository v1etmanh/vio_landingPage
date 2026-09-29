import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import { Icon } from '@iconify/react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { SiteLanguage } from '../../../App'
import './vio-story.css'

gsap.registerPlugin(ScrollTrigger)

const storyTitleClass = 'font-archivo max-w-3xl !text-white text-3xl font-black uppercase leading-[1.12] tracking-tight sm:text-4xl md:text-5xl lg:text-[clamp(2.75rem,3.8vw,4.25rem)]'
const storyChapterTitleClass = 'font-archivo max-w-3xl !text-white text-xl font-black uppercase leading-[1.2] tracking-tight sm:text-2xl md:text-3xl lg:text-[clamp(1.75rem,2.4vw,2.75rem)]'

interface VioStoryProps {
  language: SiteLanguage
}

interface StoryStep {
  number: string
  label: string
  title: string
  titleLines?: string[]
  paragraphs: string[]
}

const storyContent = {
  en: [
    {
      number: '01',
      label: 'THE BEGINNING',
      title: 'Every lasting journey begins with an idea.',
      titleLines: ['Every lasting journey', 'begins with an idea.'],
      paragraphs: [
        'VIO Fitness began with a desire to create a considered place to train, where quality and experience carry equal weight.',
        'In early 2026, VIO opened in Da Nang and welcomed its first members.',
      ],
    },
    {
      number: '02',
      label: 'THE EXPERIENCE',
      title: 'A good gym offers more than equipment.',
      titleLines: ['A good gym offers', 'more than equipment'],
      paragraphs: [
        'People need a clean, cool and private place to focus on themselves, while still feeling open enough to meet and connect.',
        'That need is especially clear in Da Nang, where many ways of life come together.',
      ],
    },
    {
      number: '03',
      label: 'THE VISION',
      title: 'VIO takes a more welcoming approach to training.',
      titleLines: ['VIO takes a more welcoming', 'approach to training.'],
      paragraphs: [
        'We created a modern, open and friendly space to help you care for your body, restore your energy and keep an active rhythm.',
        'VIO is a place to experience progress and meet people with the same spirit.',
      ],
    },
    {
      number: '04',
      label: 'GYM IS HOME',
      title: 'VIO Fitness - Where people connect.',
      titleLines: ['VIO Fitness', 'Where people connect.'],
      paragraphs: [
        'Whether you are just starting, have trained for years, live in Da Nang or are visiting the city, every visit should begin with a warm welcome.',
        'To us, a gym is a place to train, share and belong.',
      ],
    },
  ],
  vi: [
    {
      number: '01',
      label: 'KHỞI ĐẦU',
      title: 'Mọi hành trình bền vững đều bắt đầu từ một ý tưởng.',
      titleLines: ['Mọi hành trình bền vững', 'đều bắt đầu từ một ý tưởng.'],
      paragraphs: [
        'VIO Fitness được ấp ủ từ mong muốn tạo nên một không gian tập luyện chỉn chu, nơi chất lượng và trải nghiệm được đặt ngang nhau.',
        'Đầu năm 2026, VIO mở cửa tại Đà Nẵng và chào đón những thành viên đầu tiên.',
      ],
    },
    {
      number: '02',
      label: 'TRẢI NGHIỆM',
      title: 'Một phòng gym tốt không chỉ có đủ máy',
      titleLines: ['Một phòng gym tốt', 'không chỉ có đủ máy'],
      paragraphs: [
        'Mọi người cần một nơi sạch sẽ, mát mẻ và riêng tư để tập trung vào chính mình, nhưng vẫn đủ cởi mở để gặp gỡ và kết nối.',
        'Đây là nhu cầu rõ nét ở Đà Nẵng, nơi nhiều nhịp sống cùng gặp nhau.',
      ],
    },
    {
      number: '03',
      label: 'TẦM NHÌN',
      title: 'VIO chọn một cách tập luyện gần gũi hơn.',
      titleLines: ['VIO chọn một cách', 'tập luyện gần gũi hơn.'],
      paragraphs: [
        'Chúng tôi xây dựng một không gian hiện đại, thân thiện và mở để bạn chăm sóc cơ thể, lấy lại năng lượng và duy trì nhịp sống tích cực.',
        'VIO là nơi để trải nghiệm, tiến bộ và gặp những người cùng tinh thần.',
      ],
    },
    {
      number: '04',
      label: 'GYM LÀ NHÀ',
      title: 'VIO Fitness - Nơi mọi người kết nối.',
      titleLines: ['VIO Fitness', 'Nơi mọi người kết nối.'],
      paragraphs: [
        'Dù bạn mới bắt đầu, đã tập lâu năm, đang sống hay chỉ ghé thăm Đà Nẵng, mỗi lần đến VIO đều nên bắt đầu bằng cảm giác được chào đón.',
        'Với chúng tôi, gym là nơi tập luyện, sẻ chia và trở về.',
      ],
    },
  ],
} satisfies Record<SiteLanguage, StoryStep[]>

// 4 Luxury Milestone Icons matching reference
const milestoneIcons = [
  // 01: Sprout / Seedling (The Beginning)
  <svg key="sprout" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M12 20v-8" />
    <path d="M12 12c-2.5-3.5-7-3.5-8 0 1.2 4.5 5 4.5 8 0z" />
    <path d="M12 12c2.5-3.5 7-3.5 8 0-1.2 4.5-5 4.5-8 0z" />
    <path d="M7 20c2.5 1 7.5 1 10 0" />
  </svg>,
  // 02: Faceted Diamond (The Experience)
  <svg key="diamond" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M6 4h12l4 6-10 11L2 10l4-6z" />
    <path d="M2 10h20" />
    <path d="M10 4l-2 6 4 11 4-11-2-6" />
  </svg>,
  // 03: Community / People (The Vision)
  <svg key="community" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="10" cy="7" r="3.5" />
    <path d="M20 21v-2a3.5 3.5 0 0 0-2.5-3.3" />
    <path d="M15.5 3.7a3.5 3.5 0 0 1 0 6.6" />
  </svg>,
  // 04: Mountain Peak (Gym is Home)
  <svg key="mountain" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M2 20h20L13 4l-4 7-3-4-4 13z" />
    <path d="M9.5 14l2.5-3 3.5 5" />
  </svg>,
]

const VioStory = ({ language }: VioStoryProps) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [revealedThrough, setRevealedThrough] = useState(0)
  const [curvePath, setCurvePath] = useState('')
  const [beadPositions, setBeadPositions] = useState<Array<{ topY: number; botY: number }>>([])
  const [scrollDirection, setScrollDirection] = useState<'down' | 'up'>('down')

  const sectionRef = useRef<HTMLElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const timelineListRef = useRef<HTMLDivElement>(null)
  const progressPathRef = useRef<SVGPathElement>(null)
  const timelineArrowRef = useRef<HTMLButtonElement>(null)
  const badgeRefs = useRef<Array<HTMLDivElement | null>>([])
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null)
  const activeIndexRef = useRef(0)
  const scrollDirectionRef = useRef<'down' | 'up'>('down')
  const centerYsRef = useRef<number[]>([])

  const reduceMotion = useReducedMotion()
  const steps = storyContent[language]

  // Measure badge positions and generate serpentine S-curve path
  const updateRailDimensions = useCallback(() => {
    const list = timelineListRef.current
    const badges = badgeRefs.current.filter((b): b is HTMLDivElement => Boolean(b))
    const path = progressPathRef.current
    const arrow = timelineArrowRef.current
    if (!list || badges.length !== steps.length) return

    const listRect = list.getBoundingClientRect()
    const centers = badges.map((badge) => {
      const r = badge.getBoundingClientRect()
      return r.top - listRect.top + r.height / 2
    })

    centerYsRef.current = centers
    const y0 = centers[0]
    const y1 = centers[1]
    const y2 = centers[2]
    const y3 = centers[3]

    // Organic S-curve weaving through the centers of badges (x = 52px)
    const d = `M 52,${Math.max(0, y0 - 32)}
      C 52,${y0 - 16} 52,${y0} 52,${y0}
      C 68,${(y0 * 2 + y1) / 3} 68,${(y0 + y1 * 2) / 3} 52,${y1}
      C 36,${(y1 * 2 + y2) / 3} 36,${(y1 + y2 * 2) / 3} 52,${y2}
      C 68,${(y2 * 2 + y3) / 3} 68,${(y2 + y3 * 2) / 3} 52,${y3}
      C 52,${y3 + 30} 70,${y3 + 52} 96,${y3 + 68}`

    setCurvePath(d)
    setBeadPositions([
      { topY: y0 - 28, botY: y0 + 28 },
      { topY: y1 - 28, botY: y1 + 28 },
      { topY: y2 - 28, botY: y2 + 28 },
      { topY: y3 - 28, botY: y3 + 28 },
    ])

    // Update active light thread and arrow if not in the middle of active scrub
    if (path) {
      const len = path.getTotalLength()
      path.style.strokeDasharray = `${len}`
      if (!scrollTriggerRef.current?.isActive) {
        const p = activeIndexRef.current / (steps.length - 1)
        path.style.strokeDashoffset = `${len * (1 - p)}`
        if (arrow) {
          const pt = path.getPointAtLength(p * len)
          arrow.style.transform = `translate3d(${pt.x - 16}px, ${pt.y - 16}px, 0)`
        }
      }
    }
  }, [steps.length])

  useLayoutEffect(() => {
    const frame = window.requestAnimationFrame(updateRailDimensions)
    const handleResize = () => updateRailDimensions()
    const observer = timelineListRef.current ? new ResizeObserver(handleResize) : null
    if (timelineListRef.current) observer?.observe(timelineListRef.current)
    window.addEventListener('resize', handleResize)
    document.fonts?.ready.then(handleResize).catch(() => undefined)

    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('resize', handleResize)
      observer?.disconnect()
    }
  }, [updateRailDimensions])

  // Services-style scrub timeline on desktop
  useGSAP(() => {
    const section = sectionRef.current
    if (!section) return

    const media = gsap.matchMedia()

    media.add('(min-width: 1024px)', () => {
      // 1. Initial visual state for slide 0 (visible)
      gsap.set('.vio-story-article-0', {
        opacity: 1,
        y: 0,
        pointerEvents: 'auto',
        force3D: true,
      })
      gsap.set('.vio-story-article-0 .story-title-word', { y: 0, opacity: 1, force3D: true })
      gsap.set('.vio-story-article-0 .story-rule-fill', { scaleX: 1, transformOrigin: 'left center', force3D: true })
      gsap.set('.vio-story-article-0 .story-para', { y: 0, opacity: 1, force3D: true })

      // Initial visual state for slides 1, 2, 3 (hidden)
      gsap.set('.vio-story-article:not(.vio-story-article-0)', {
        opacity: 0,
        y: 25,
        pointerEvents: 'none',
        force3D: true,
      })
      gsap.set('.vio-story-article:not(.vio-story-article-0) .story-title-word', {
        y: 20,
        opacity: 0,
        force3D: true,
      })
      gsap.set('.vio-story-article:not(.vio-story-article-0) .story-rule-fill', {
        scaleX: 0,
        transformOrigin: 'left center',
        force3D: true,
      })
      gsap.set('.vio-story-article:not(.vio-story-article-0) .story-para', {
        y: 15,
        opacity: 0,
        force3D: true,
      })

      updateRailDimensions()

      // 2. Entrance reveal when section enters 80% of viewport
      let entered = false
      const entranceTrigger = ScrollTrigger.create({
        trigger: section,
        start: 'top 80%',
        once: true,
        onEnter: () => {
          if (entered || reduceMotion) return
          entered = true
          gsap.fromTo(
            '.vio-story-article-0 .story-rule-fill',
            { scaleX: 0, transformOrigin: 'left center' },
            { scaleX: 1, duration: 0.6, ease: 'power2.out' }
          )
          gsap.fromTo(
            '.vio-story-article-0 .story-title-word',
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.025, duration: 0.6, ease: 'power2.out' }
          )
          gsap.fromTo(
            '.vio-story-article-0 .story-para',
            { y: 15, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.08, duration: 0.6, ease: 'power2.out', delay: 0.15 }
          )
        },
      })

      // 3. Create the scrub master timeline (matching Services section)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${window.innerHeight * steps.length * 1.0}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const p = self.progress

            // Animate SVG golden light thread along the curve
            const path = progressPathRef.current
            const arrow = timelineArrowRef.current
            if (path) {
              const len = path.getTotalLength()
              path.style.strokeDasharray = `${len}`
              path.style.strokeDashoffset = `${len * (1 - p)}`

              // Navigation chevron orb follows the exact S-curve coordinates
              if (arrow) {
                const pt = path.getPointAtLength(p * len)
                arrow.style.transform = `translate3d(${pt.x - 16}px, ${pt.y - 16}px, 0)`
              }
            }

            // Update scroll direction for chevron rotation (pointing up when scrolling up)
            const dir = self.direction >= 0 ? 'down' : 'up'
            if (dir !== scrollDirectionRef.current) {
              scrollDirectionRef.current = dir
              setScrollDirection(dir)
            }

            // Balanced segment thresholds for 4 slides
            let current = 0
            if (p >= 0.80) current = 3
            else if (p >= 0.52) current = 2
            else if (p >= 0.24) current = 1
            else current = 0

            if (current !== activeIndexRef.current) {
              activeIndexRef.current = current
              setActiveIndex(current)
              setRevealedThrough((prev) => Math.max(prev, current))
            }
          },
        },
      })

      scrollTriggerRef.current = tl.scrollTrigger ?? null

      // Hold slide 0 for initial reading
      tl.to({}, { duration: 0.8 })

      // Build transition sequence between slides
      for (let i = 1; i < steps.length; i++) {
        const prev = i - 1
        const label = `slide${i}`

        // 1. Outgoing slide fades and glides up slightly
        tl.to(
          `.vio-story-article-${prev}`,
          { y: -30, opacity: 0, duration: 0.6, ease: 'power2.in' },
          label
        )
        tl.set(`.vio-story-article-${prev}`, { pointerEvents: 'none' }, `${label}+=0.6`)

        // 2. Incoming slide becomes active and glides into position
        tl.set(`.vio-story-article-${i}`, { pointerEvents: 'auto' }, label)
        tl.to(
          `.vio-story-article-${i}`,
          { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
          `${label}+=0.1`
        )

        // 3. Rule fill expands from left to right
        tl.to(
          `.vio-story-article-${i} .story-rule-fill`,
          { scaleX: 1, duration: 0.5, ease: 'power2.out' },
          `${label}+=0.15`
        )

        // 4. Title words reveal gradually with smooth stagger ("hiện từ từ")
        tl.to(
          `.vio-story-article-${i} .story-title-word`,
          { y: 0, opacity: 1, stagger: 0.025, duration: 0.5, ease: 'power2.out' },
          `${label}+=0.2`
        )

        // 5. Paragraphs fade in smoothly
        tl.to(
          `.vio-story-article-${i} .story-para`,
          { y: 0, opacity: 1, stagger: 0.08, duration: 0.5, ease: 'power2.out' },
          `${label}+=0.35`
        )

        // 6. Hold frame so user can comfortably read the slide
        tl.to({}, { duration: 0.8 })
      }

      return () => {
        entranceTrigger.kill()
        tl.kill()
        if (scrollTriggerRef.current === tl.scrollTrigger) {
          scrollTriggerRef.current = null
        }
      }
    })

    return () => {
      media.revert()
    }
  }, { scope: sectionRef, dependencies: [language, reduceMotion, updateRailDimensions] })

  // Navigate to slide when clicking dots/cards or using keyboard
  const goToSlide = useCallback((index: number) => {
    const targetIndex = Math.max(0, Math.min(index, steps.length - 1))

    if (window.matchMedia('(min-width: 1024px)').matches) {
      const trigger = scrollTriggerRef.current
      if (trigger) {
        // Centers of each slide's hold period in scrub timeline:
        const slideProgresses = [0.07, 0.35, 0.64, 0.93]
        const targetScroll = trigger.start + (trigger.end - trigger.start) * slideProgresses[targetIndex]
        window.scrollTo({ top: targetScroll, behavior: 'smooth' })
      }
    } else {
      activeIndexRef.current = targetIndex
      setActiveIndex(targetIndex)
      setRevealedThrough((prev) => Math.max(prev, targetIndex))
    }
  }, [steps.length])

  // Mobile horizontal scroll tracking
  const revealMobileChapterOnScroll = () => {
    const timeline = timelineRef.current
    if (!timeline || window.matchMedia('(min-width: 1024px)').matches) return

    const viewport = timeline.getBoundingClientRect()
    const visibleIndex = [...timeline.querySelectorAll<HTMLElement>('[data-story-index]')]
      .reduce((highestIndex, chapter) => {
        const bounds = chapter.getBoundingClientRect()
        const visibleWidth = Math.max(0, Math.min(bounds.right, viewport.right) - Math.max(bounds.left, viewport.left))
        const visibleRatio = bounds.width > 0 ? visibleWidth / bounds.width : 0
        return visibleRatio >= 0.65 ? Math.max(highestIndex, Number(chapter.dataset.storyIndex)) : highestIndex
      }, revealedThrough)

    if (visibleIndex > revealedThrough) setRevealedThrough(visibleIndex)
  }

  // Keyboard navigation when section is active in view
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!['ArrowDown', 'ArrowRight', 'ArrowUp', 'ArrowLeft'].includes(event.key)) return

      const target = event.target
      if (target instanceof HTMLElement && target.closest('input, textarea, select, [contenteditable="true"]')) return

      const section = sectionRef.current
      if (!section) return

      const bounds = section.getBoundingClientRect()
      const centeredInViewport = bounds.top < window.innerHeight / 2 && bounds.bottom > window.innerHeight / 2
      if (!scrollTriggerRef.current?.isActive && !centeredInViewport) return

      const direction = event.key === 'ArrowDown' || event.key === 'ArrowRight' ? 1 : -1
      const nextIndex = activeIndexRef.current + direction
      if (nextIndex < 0 || nextIndex >= steps.length) return

      event.preventDefault()
      goToSlide(nextIndex)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [goToSlide, steps.length])

  return (
    <section
      id='About'
      ref={sectionRef}
      className='vio-story-root relative !flex min-h-[100dvh] items-stretch overflow-hidden !py-0 bg-[#171717] text-white lg:h-[100dvh] lg:min-h-0'
    >
      <img
        src='/images/story_asset/background.webp'
        alt=''
        aria-hidden='true'
        className='pointer-events-none absolute inset-0 h-full w-full object-cover object-center'
      />
      <div className='pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(10,10,10,.82)_0%,rgba(10,10,10,.72)_54%,rgba(10,10,10,.34)_100%)]' />

      <div className='relative z-10 mx-auto flex min-h-[100dvh] w-full max-w-[1600px] flex-col px-5 py-7 sm:px-8 sm:py-8 lg:h-full lg:min-h-0 lg:px-14 lg:pb-8 lg:pt-30 xl:px-20'>
        <header className='shrink-0 lg:mb-2'>
          <h2 className={storyTitleClass}>
            {language === 'vi' ? 'Câu chuyện của VIO' : 'The story of VIO'}
          </h2>
        </header>

        <div className='grid min-h-0 flex-1 items-center gap-6 py-6 lg:grid-cols-[minmax(21rem,1fr)_minmax(0,1.9fr)] lg:gap-12 xl:gap-16'>
          {/* Luxury Interactive Timeline Rail & Cards */}
          <div
            ref={timelineRef}
            onScroll={revealMobileChapterOnScroll}
            role='group'
            aria-label={language === 'vi' ? 'Các mốc câu chuyện VIO' : 'VIO story chapters'}
            className='relative flex flex-col gap-2 overflow-x-auto py-1 lg:overflow-visible lg:py-0'
          >
            {/* Progress Header Badge */}
            <div className='hidden lg:flex items-center justify-between pb-3 mb-2 border-b border-white/10 text-xs font-mono tracking-widest text-[#C5A059]'>
              <div className='flex items-center gap-2'>
                <span className='inline-block w-2 h-2 rounded-full bg-[#FFE08A] shadow-[0_0_8px_rgba(229,180,98,0.8)] animate-pulse' />
                <span className='font-bold uppercase tracking-[0.2em]'>
                  {language === 'vi' ? 'Hành Trình VIO' : 'VIO Journey'}
                </span>
              </div>
              <div className='flex items-center gap-2'>
                <span className='text-white font-bold text-sm'>0{activeIndex + 1}</span>
                <span className='text-white/40'>/ 04</span>
                <span className='ml-1 text-[11px] px-2 py-0.5 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/40 text-[#FFE08A] font-semibold'>
                  {Math.round(((activeIndex + 1) / 4) * 100)}%
                </span>
              </div>
            </div>

            {/* Timeline List with Serpentine Golden Light Thread */}
            <div ref={timelineListRef} className='relative flex gap-3 lg:flex-col lg:gap-4'>
              {/* Desktop Curved Golden Thread SVG */}
              <svg
                className='absolute left-0 top-0 w-[100px] h-full pointer-events-none z-0 hidden lg:block overflow-visible'
                aria-hidden='true'
              >
                <defs>
                  <linearGradient id='goldCurveTrack' x1='0%' y1='0%' x2='0%' y2='100%'>
                    <stop offset='0%' stopColor='#C5A059' stopOpacity='0.25' />
                    <stop offset='50%' stopColor='#8E6D28' stopOpacity='0.18' />
                    <stop offset='100%' stopColor='#4E3E18' stopOpacity='0.12' />
                  </linearGradient>
                  <linearGradient id='goldCurveActive' x1='0%' y1='0%' x2='0%' y2='100%'>
                    <stop offset='0%' stopColor='#FFF2C6' />
                    <stop offset='35%' stopColor='#FFE08A' />
                    <stop offset='75%' stopColor='#E5B462' />
                    <stop offset='100%' stopColor='#C5A059' />
                  </linearGradient>
                  <filter id='goldCurveGlow' x='-50%' y='-50%' width='200%' height='200%'>
                    <feDropShadow dx='0' dy='0' stdDeviation='4' floodColor='#FFE08A' floodOpacity='0.65' />
                  </filter>
                </defs>

                {/* Inactive Track */}
                {curvePath && (
                  <path
                    d={curvePath}
                    fill='none'
                    stroke='url(#goldCurveTrack)'
                    strokeWidth='2.5'
                    strokeLinecap='round'
                  />
                )}

                {/* Active Light Thread */}
                {curvePath && (
                  <path
                    ref={progressPathRef}
                    d={curvePath}
                    fill='none'
                    stroke='url(#goldCurveActive)'
                    strokeWidth='3.2'
                    strokeLinecap='round'
                    filter='url(#goldCurveGlow)'
                  />
                )}

                {/* Glowing Connector Pearls above and below nodes */}
                {beadPositions.map((pos, idx) => {
                  const isReached = activeIndex >= idx
                  return (
                    <g key={idx}>
                      <circle
                        cx='52'
                        cy={pos.topY}
                        r='3'
                        className={`transition-all duration-500 ${
                          isReached
                            ? 'fill-[#FFE08A] drop-shadow-[0_0_6px_rgba(229,180,98,0.9)]'
                            : 'fill-[#C5A059]/30'
                        }`}
                      />
                      <circle
                        cx='52'
                        cy={pos.botY}
                        r='3'
                        className={`transition-all duration-500 ${
                          isReached
                            ? 'fill-[#FFE08A] drop-shadow-[0_0_6px_rgba(229,180,98,0.9)]'
                            : 'fill-[#C5A059]/30'
                        }`}
                      />
                    </g>
                  )
                })}
              </svg>

              {/* Navigation Chevron Orb Traveler following the curve */}
              <button
                type='button'
                onClick={() => {
                  if (scrollDirectionRef.current === 'up') {
                    goToSlide(Math.max(0, activeIndexRef.current - 1))
                  } else {
                    goToSlide(Math.min(steps.length - 1, activeIndexRef.current + 1))
                  }
                }}
                aria-label={
                  scrollDirection === 'up'
                    ? (language === 'vi' ? 'Lên mốc trước' : 'Previous chapter')
                    : (language === 'vi' ? 'Xuống mốc tiếp theo' : 'Next chapter')
                }
                ref={timelineArrowRef}
                className='vio-story-arrow absolute left-0 top-0 z-20 hidden lg:flex h-8 w-8 items-center justify-center rounded-full border border-[#FFE08A] bg-[#141414]/90 text-[#FFE08A] backdrop-blur-md shadow-[0_0_18px_rgba(229,180,98,0.55)] transition-shadow hover:scale-115 active:scale-95 cursor-pointer'
              >
                <Icon
                  icon='tabler:chevron-down'
                  aria-hidden='true'
                  className={`h-4 w-4 transition-transform duration-300 ${
                    scrollDirection === 'up' ? '-rotate-180' : 'rotate-0'
                  }`}
                />
              </button>

              {/* 4 Interactive Chapter Milestones */}
              {steps.map((step, index) => {
                const isActive = activeIndex === index
                const isPassed = activeIndex > index
                const isRevealed = index <= revealedThrough

                return (
                  <button
                    key={step.number}
                    data-story-index={index}
                    type='button'
                    onClick={() => goToSlide(index)}
                    aria-label={step.label}
                    aria-current={isActive ? 'step' : undefined}
                    aria-hidden={!isRevealed}
                    tabIndex={isRevealed ? 0 : -1}
                    className={`group relative flex items-center gap-4 w-[min(56vw,16rem)] shrink-0 text-left transition-[opacity,transform] duration-500 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C5A059] lg:w-full ${
                      isRevealed ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
                    }`}
                  >
                    {/* Left Ribbon: Number + Glowing Milestone Badge */}
                    <div className='relative shrink-0 hidden lg:flex items-center gap-2 w-[86px]'>
                      {/* Step Number */}
                      <span className={`w-6 text-xs font-mono font-bold tracking-widest text-right transition-colors duration-300 ${
                        isActive ? 'text-[#FFE08A] scale-105' : 'text-white/40 group-hover:text-white/70'
                      }`}>
                        {step.number}
                      </span>

                      {/* Glowing Circular Badge */}
                      <div
                        ref={(el) => { badgeRefs.current[index] = el }}
                        className={`relative flex items-center justify-center w-12 h-12 rounded-full border transition-all duration-500 z-10 ${
                          isActive
                            ? 'border-[#FFE08A] bg-[#141414] text-[#FFE08A] shadow-[0_0_25px_rgba(229,180,98,0.6),inset_0_0_12px_rgba(229,180,98,0.35)] scale-110'
                            : isPassed
                            ? 'border-[#C5A059]/60 bg-[#141414]/90 text-[#FFE08A]/85 shadow-[0_0_12px_rgba(197,160,89,0.2)]'
                            : 'border-white/20 bg-[#141414]/90 text-white/40 group-hover:border-[#C5A059]/60 group-hover:text-white/80'
                        }`}
                      >
                        {/* Inner concentric luxury ring */}
                        <span className={`absolute inset-[3px] rounded-full border pointer-events-none transition-colors duration-500 ${
                          isActive ? 'border-[#FFE08A]/50' : 'border-white/5'
                        }`} />

                        {/* Active pulsing double ring halo */}
                        {isActive && (
                          <span className='absolute -inset-1.5 rounded-full border border-[#FFE08A]/40 animate-ping opacity-35 pointer-events-none' />
                        )}

                        {/* Icon */}
                        <span className='relative z-10 transition-transform duration-300 group-hover:scale-110'>
                          {milestoneIcons[index]}
                        </span>
                      </div>
                    </div>

                    {/* Thumbnail Card with Luxury Golden Border and Ambient Glow */}
                    <div
                      className={`relative flex-1 aspect-[2/1] overflow-hidden rounded-lg border transition-all duration-500 lg:aspect-auto lg:h-[clamp(5rem,13.5vh,6.75rem)] ${
                        isActive
                          ? 'border-[#FFE08A] shadow-[0_0_24px_rgba(229,180,98,0.35)] ring-1 ring-[#FFE08A]/40 scale-[1.02] opacity-100'
                          : 'border-white/15 opacity-60 hover:opacity-90 hover:border-white/40'
                      }`}
                    >
                      {/* Mobile milestone badge header */}
                      <div className='absolute left-2 top-2 z-10 flex items-center gap-1.5 rounded bg-black/70 px-1.5 py-0.5 backdrop-blur-sm lg:hidden'>
                        <span className='scale-75 text-[#FFE08A]'>{milestoneIcons[index]}</span>
                        <span className={`text-[10px] font-bold tracking-wider ${isActive ? 'text-[#FFE08A]' : 'text-white/70'}`}>
                          {step.number} · {step.label}
                        </span>
                      </div>

                      <img
                        src={`/images/story_asset/${index + 1}.webp`}
                        alt={step.label}
                        className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-105'
                      />
                      <div
                        className={`absolute inset-0 transition-opacity duration-500 ${
                          isActive ? 'bg-gradient-to-t from-black/40 via-transparent to-transparent' : 'bg-black/35'
                        }`}
                      />
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Stage with stacked Story Articles */}
          <div
            className='vio-story-stage relative min-w-0 max-w-4xl lg:justify-self-center grid grid-cols-1 grid-rows-1 items-start'
            aria-live='polite'
          >
            {steps.map((step, index) => {
              const isMobileActive = activeIndex === index
              const titleLines = step.titleLines ?? [step.title]

              return (
                <article
                  key={step.number}
                  className={`vio-story-article vio-story-article-${index} col-start-1 row-start-1 max-w-4xl ${
                    isMobileActive ? 'block' : 'hidden lg:block'
                  }`}
                >
                  {/* Mobile Chapter Meta */}
                  <div className='mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-[#C5A059] lg:hidden'>
                    <span>{step.number}</span>
                    <span className='h-px w-8 bg-[#C5A059]' />
                    <span>{step.label}</span>
                  </div>

                  {/* Desktop Chapter Label */}
                  <p className='mb-4 hidden text-xs font-bold uppercase tracking-[0.22em] text-[#C5A059] lg:block'>
                    {step.label}
                  </p>

                  {/* Gold Rule Line */}
                  <div className='relative my-4 h-px w-full max-w-56 overflow-hidden bg-white/15 sm:my-5'>
                    <span aria-hidden='true' className='story-rule-fill absolute inset-0 origin-left bg-[#C5A059]' />
                  </div>

                  {/* Animated Chapter Title (Words reveal gradually with smooth stagger) */}
                  <h3 aria-label={step.title} className={storyChapterTitleClass}>
                    {titleLines.map((line, lineIndex) => {
                      const titleWords = line.split(' ')
                      return (
                        <span key={lineIndex} className='block'>
                          {titleWords.map((word, wordIndex) => (
                            <span
                              key={wordIndex}
                              className='story-title-word inline-block mr-[0.25em]'
                            >
                              {word}
                            </span>
                          ))}
                        </span>
                      )
                    })}
                  </h3>

                  {/* Animated Paragraphs */}
                  <div className='mt-5 max-w-3xl space-y-3 text-sm leading-relaxed text-white/75 sm:mt-7 sm:text-base lg:text-lg'>
                    {step.paragraphs.map((copy, pIdx) => (
                      <p key={pIdx} className='story-para'>
                        {copy}
                      </p>
                    ))}
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default VioStory
