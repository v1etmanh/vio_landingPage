import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import { Icon } from '@iconify/react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { CustomEase } from 'gsap/CustomEase'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { SiteLanguage } from '../../../App'
import './vio-story.css'

gsap.registerPlugin(ScrollTrigger, CustomEase)

const pageTransition = CustomEase.create('vio-story-page-transition', 'M0,0 C0.38,0.05 0.48,0.58 0.65,0.82 0.82,1 1,1 1,1')

interface VioStoryProps {
  language: SiteLanguage
}

interface StoryStep {
  number: string
  label: string
  title: string
  paragraphs: string[]
}

interface StoryArticleElements {
  article: HTMLElement
  chars: HTMLSpanElement[]
  words: HTMLSpanElement[]
  ruleFill: HTMLSpanElement
}

const storyContent = {
  en: [
    {
      number: '01',
      label: 'THE BEGINNING',
      title: 'Every lasting journey begins with an idea.',
      paragraphs: [
        'VIO Fitness began with a desire to create a considered place to train, where quality and experience carry equal weight.',
        'In early 2026, VIO opened in Da Nang and welcomed its first members.',
      ],
    },
    {
      number: '02',
      label: 'THE EXPERIENCE',
      title: 'A good gym offers more than equipment.',
      paragraphs: [
        'People need a clean, cool and private place to focus on themselves, while still feeling open enough to meet and connect.',
        'That need is especially clear in Da Nang, where many ways of life come together.',
      ],
    },
    {
      number: '03',
      label: 'THE VISION',
      title: 'VIO takes a more welcoming approach to training.',
      paragraphs: [
        'We created a modern, open and friendly space to help you care for your body, restore your energy and keep an active rhythm.',
        'VIO is a place to experience progress and meet people with the same spirit.',
      ],
    },
    {
      number: '04',
      label: 'GYM IS HOME',
      title: 'VIO Fitness - Where people connect.',
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
      paragraphs: [
        'VIO Fitness được ấp ủ từ mong muốn tạo nên một không gian tập luyện chỉn chu, nơi chất lượng và trải nghiệm được đặt ngang nhau.',
        'Đầu năm 2026, VIO mở cửa tại Đà Nẵng và chào đón những thành viên đầu tiên.',
      ],
    },
    {
      number: '02',
      label: 'TRẢI NGHIỆM',
      title: 'Một phòng gym tốt không chỉ có đủ máy.',
      paragraphs: [
        'Mọi người cần một nơi sạch sẽ, mát mẻ và riêng tư để tập trung vào chính mình, nhưng vẫn đủ cởi mở để gặp gỡ và kết nối.',
        'Đây là nhu cầu rõ nét ở Đà Nẵng, nơi nhiều nhịp sống cùng gặp nhau.',
      ],
    },
    {
      number: '03',
      label: 'TẦM NHÌN',
      title: 'VIO chọn một cách tập luyện gần gũi hơn.',
      paragraphs: [
        'Chúng tôi xây dựng một không gian hiện đại, thân thiện và mở để bạn chăm sóc cơ thể, lấy lại năng lượng và duy trì nhịp sống tích cực.',
        'VIO là nơi để trải nghiệm, tiến bộ và gặp những người cùng tinh thần.',
      ],
    },
    {
      number: '04',
      label: 'GYM LÀ NHÀ',
      title: 'VIO Fitness - Nơi mọi người kết nối.',
      paragraphs: [
        'Dù bạn mới bắt đầu, đã tập lâu năm, đang sống hay chỉ ghé thăm Đà Nẵng, mỗi lần đến VIO đều nên bắt đầu bằng cảm giác được chào đón.',
        'Với chúng tôi, gym là nơi tập luyện, sẻ chia và trở về.',
      ],
    },
  ],
} satisfies Record<SiteLanguage, StoryStep[]>

const createStoryArticle = (step: StoryStep): StoryArticleElements => {
  const article = document.createElement('article')
  article.className = 'vio-story-article max-w-4xl'

  const mobileMeta = document.createElement('div')
  mobileMeta.className = 'mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-[#C5A059] lg:hidden'
  const mobileNumber = document.createElement('span')
  mobileNumber.textContent = step.number
  const mobileRule = document.createElement('span')
  mobileRule.className = 'h-px w-8 bg-[#C5A059]'
  const mobileLabel = document.createElement('span')
  mobileLabel.textContent = step.label
  mobileMeta.append(mobileNumber, mobileRule, mobileLabel)

  const desktopLabel = document.createElement('p')
  desktopLabel.className = 'mb-4 hidden text-xs font-bold uppercase tracking-[0.22em] text-[#C5A059] lg:block'
  desktopLabel.textContent = step.label

  const rule = document.createElement('div')
  rule.className = 'relative my-4 h-px w-full max-w-56 overflow-hidden bg-white/15 sm:my-5'
  const ruleFill = document.createElement('span')
  ruleFill.setAttribute('aria-hidden', 'true')
  ruleFill.className = 'absolute inset-0 bg-[#C5A059]'
  rule.appendChild(ruleFill)

  const title = document.createElement('h3')
  title.setAttribute('aria-label', step.title)
  title.className = 'font-heading max-w-3xl !text-white text-4xl font-black uppercase leading-[0.88] tracking-tighter sm:text-5xl md:text-6xl lg:text-[clamp(3.75rem,4.2vw,5.25rem)]'
  const chars: HTMLSpanElement[] = []
  Array.from(step.title).forEach((character) => {
    const clip = document.createElement('span')
    clip.setAttribute('aria-hidden', 'true')
    clip.className = 'inline-block overflow-hidden align-top [perspective:800px]'
    const char = document.createElement('span')
    char.className = 'inline-block'
    char.textContent = character === ' ' ? '\u00a0' : character
    clip.appendChild(char)
    title.appendChild(clip)
    chars.push(char)
  })

  const paragraphGroup = document.createElement('div')
  paragraphGroup.className = 'mt-5 max-w-3xl space-y-2.5 text-sm leading-relaxed text-white/65 sm:mt-7 sm:text-base lg:text-lg'
  const words: HTMLSpanElement[] = []
  step.paragraphs.forEach((copy) => {
    const clip = document.createElement('div')
    clip.className = 'overflow-hidden'
    const paragraph = document.createElement('p')
    copy.split(/(\s+)/).forEach((part) => {
      if (/^\s+$/.test(part)) {
        paragraph.appendChild(document.createTextNode(part))
        return
      }

      const word = document.createElement('span')
      word.className = 'inline-block'
      word.textContent = part
      paragraph.appendChild(word)
      words.push(word)
    })
    clip.appendChild(paragraph)
    paragraphGroup.appendChild(clip)
  })

  article.append(mobileMeta, desktopLabel, rule, title, paragraphGroup)
  return { article, chars, words, ruleFill }
}

const VioStory = ({ language }: VioStoryProps) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [revealedThrough, setRevealedThrough] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const timelineTrackRef = useRef<HTMLSpanElement>(null)
  const timelineFillRef = useRef<HTMLSpanElement>(null)
  const timelineArrowRef = useRef<HTMLSpanElement>(null)
  const dotRefs = useRef<Array<HTMLSpanElement | null>>([])
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null)
  const visibleArticleRef = useRef<StoryArticleElements | null>(null)
  const visibleIndexRef = useRef(0)
  const activeIndexRef = useRef(0)
  const queuedIndexRef = useRef<number | null>(null)
  const isTransitioningRef = useRef(false)
  const storyHasEnteredRef = useRef(false)
  const wheelLockedRef = useRef(false)
  const touchStartYRef = useRef<number | null>(null)
  const touchStartXRef = useRef<number | null>(null)
  const touchAxisRef = useRef<'horizontal' | 'vertical' | null>(null)
  const revealTimelineRef = useRef<gsap.core.Timeline | null>(null)
  const slideTimelineRef = useRef<gsap.core.Timeline | null>(null)
  const requestSlideRef = useRef<(index: number) => void>(() => undefined)
  const reduceMotion = useReducedMotion()
  const steps = storyContent[language]

  const prepareArticleReveal = useCallback((elements: StoryArticleElements) => {
    if (reduceMotion) {
      gsap.set(elements.chars, { opacity: 0 })
      gsap.set(elements.words, { opacity: 0 })
      return
    }
    gsap.set(elements.chars, { yPercent: 120, rotateX: 70, transformOrigin: '0% 100%' })
    gsap.set(elements.words, { yPercent: 100, opacity: 0 })
    gsap.set(elements.ruleFill, { xPercent: -100 })
  }, [reduceMotion])

  const revealArticle = useCallback((elements: StoryArticleElements, delay = 0) => {
    prepareArticleReveal(elements)

    const timeline = gsap.timeline({ delay, defaults: { force3D: true } })
    if (reduceMotion) {
      timeline
        .to(elements.chars, { opacity: 1, duration: 0.08, stagger: 0.025, ease: 'none' }, 0)
        .to(elements.words, { opacity: 1, duration: 0.12, stagger: 0.035, ease: 'none' }, 0.3)
    } else {
      timeline
        .to(elements.chars, { yPercent: 0, rotateX: 0, duration: 1.1, stagger: 0.022, ease: 'expo.out' }, 0)
        .to(elements.ruleFill, { xPercent: 0, duration: 0.7, ease: 'power2.inOut' }, 0)
        .to(elements.words, { yPercent: 0, opacity: 1, duration: 0.35, stagger: 0.022, ease: 'power3.out' }, 0.15)
    }

    revealTimelineRef.current = timeline
    timeline.eventCallback('onComplete', () => {
      if (revealTimelineRef.current === timeline) revealTimelineRef.current = null
    })
    return timeline
  }, [prepareArticleReveal, reduceMotion])

  const showArticle = useCallback((index: number, shouldReveal: boolean) => {
    const stage = stageRef.current
    if (!stage) return

    slideTimelineRef.current?.kill()
    revealTimelineRef.current?.kill()
    const elements = createStoryArticle(steps[index])
    stage.replaceChildren(elements.article)
    stage.style.minHeight = ''
    visibleArticleRef.current = elements
    visibleIndexRef.current = index
    isTransitioningRef.current = false
    queuedIndexRef.current = null

    if (shouldReveal) revealArticle(elements, 0.15)
    else prepareArticleReveal(elements)
  }, [prepareArticleReveal, revealArticle, steps])

  const transitionTo = useCallback((index: number) => {
    const stage = stageRef.current
    const outgoing = visibleArticleRef.current

    if (!stage || !outgoing) {
      showArticle(index, false)
      return
    }

    if (visibleIndexRef.current === index) return

    if (reduceMotion) {
      showArticle(index, true)
      return
    }

    isTransitioningRef.current = true
    revealTimelineRef.current?.kill()
    const incoming = createStoryArticle(steps[index])
    const stageHeight = Math.ceil(stage.getBoundingClientRect().height)
    stage.style.minHeight = `${stageHeight}px`

    gsap.set(outgoing.article, { position: 'absolute', top: 0, left: 0, width: '100%' })
    gsap.set(incoming.article, {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      clipPath: 'inset(100% 0% 0% 0%)',
      opacity: 1,
      zIndex: 10,
    })
    stage.appendChild(incoming.article)
    revealArticle(incoming, 0.35)

    const timeline = gsap.timeline({ defaults: { force3D: true } })
      .to(outgoing.article, { y: '-6%', scale: 0.94, opacity: 0.35, duration: 0.9, ease: pageTransition }, 0)
      .to(incoming.article, { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.9, ease: pageTransition }, 0)

    slideTimelineRef.current = timeline
    timeline.eventCallback('onComplete', () => {
      outgoing.article.remove()
      gsap.set(incoming.article, { clearProps: 'position,top,left,width,zIndex,clipPath,opacity' })
      stage.style.minHeight = ''
      visibleArticleRef.current = incoming
      visibleIndexRef.current = index
      slideTimelineRef.current = null
      isTransitioningRef.current = false

      const queuedIndex = queuedIndexRef.current
      queuedIndexRef.current = null
      if (queuedIndex !== null && queuedIndex !== index) {
        window.requestAnimationFrame(() => requestSlideRef.current(queuedIndex))
      }
    })
  }, [reduceMotion, revealArticle, showArticle, steps])

  const requestSlide = useCallback((index: number) => {
    const nextIndex = Math.max(0, Math.min(index, steps.length - 1))
    if (activeIndexRef.current === nextIndex) return

    activeIndexRef.current = nextIndex
    setActiveIndex(nextIndex)

    if (isTransitioningRef.current) {
      queuedIndexRef.current = nextIndex
      return
    }

    transitionTo(nextIndex)
  }, [steps.length, transitionTo])

  useEffect(() => {
    requestSlideRef.current = requestSlide
  }, [requestSlide])

  const revealStoryOnEnter = useCallback(() => {
    if (storyHasEnteredRef.current) return

    const currentArticle = visibleArticleRef.current
    if (!currentArticle) return

    storyHasEnteredRef.current = true
    revealTimelineRef.current?.kill()
    revealArticle(currentArticle, 0.15)
  }, [revealArticle])

  const syncDesktopTimeline = useCallback((animate: boolean) => {
    const timeline = timelineRef.current
    const track = timelineTrackRef.current
    const fill = timelineFillRef.current
    const arrow = timelineArrowRef.current
    const dots = dotRefs.current.filter((dot): dot is HTMLSpanElement => Boolean(dot))
    if (!timeline || !track || !fill || !arrow || dots.length !== steps.length) return

    const timelineTop = timeline.getBoundingClientRect().top
    const centers = dots.map((dot) => {
      const bounds = dot.getBoundingClientRect()
      return bounds.top - timelineTop + bounds.height / 2
    })
    const firstCenter = centers[0]
    const trackHeight = centers[centers.length - 1] - firstCenter
    const progress = activeIndexRef.current / (steps.length - 1)
    const fillHeight = trackHeight * progress

    track.style.top = `${firstCenter}px`
    track.style.height = `${trackHeight}px`
    fill.style.top = `${firstCenter}px`
    arrow.style.top = `${firstCenter - arrow.getBoundingClientRect().height / 2}px`

    gsap.killTweensOf([fill, arrow])
    if (animate && !reduceMotion) {
      gsap.to(fill, { height: fillHeight, duration: 0.6, ease: 'power3.out' })
      gsap.to(arrow, { y: fillHeight, duration: 0.6, ease: 'power3.out' })
    } else {
      gsap.set(fill, { height: fillHeight })
      gsap.set(arrow, { y: fillHeight })
    }
  }, [reduceMotion, steps.length])

  useLayoutEffect(() => {
    const initialIndex = Math.max(0, Math.min(activeIndexRef.current, steps.length - 1))
    activeIndexRef.current = initialIndex
    setActiveIndex(initialIndex)
    showArticle(initialIndex, !reduceMotion && storyHasEnteredRef.current)

    return () => {
      revealTimelineRef.current?.kill()
      slideTimelineRef.current?.kill()
    }
  }, [language, reduceMotion, showArticle, steps.length])

  useLayoutEffect(() => {
    const frame = window.requestAnimationFrame(() => syncDesktopTimeline(false))
    const handleResize = () => syncDesktopTimeline(false)
    const observer = timelineRef.current ? new ResizeObserver(handleResize) : null
    if (timelineRef.current) observer?.observe(timelineRef.current)
    window.addEventListener('resize', handleResize)
    document.fonts?.ready.then(handleResize).catch(() => undefined)

    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('resize', handleResize)
      observer?.disconnect()
    }
  }, [syncDesktopTimeline])

  useEffect(() => {
    syncDesktopTimeline(true)
  }, [activeIndex, syncDesktopTimeline])

  useEffect(() => {
    if (activeIndex <= revealedThrough) return
    if (reduceMotion) {
      setRevealedThrough(activeIndex)
      return
    }

    const revealTimer = window.setTimeout(() => {
      setRevealedThrough((currentIndex) => Math.min(currentIndex + 1, activeIndex))
    }, 180)

    return () => window.clearTimeout(revealTimer)
  }, [activeIndex, reduceMotion, revealedThrough])

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

  const goToSlide = useCallback((index: number) => {
    const nextIndex = Math.max(0, Math.min(index, steps.length - 1))
    if (nextIndex === activeIndexRef.current) return

    requestSlide(nextIndex)

    const trigger = scrollTriggerRef.current
    if (trigger) {
      const progress = nextIndex / (steps.length - 1)
      const target = trigger.start + (trigger.end - trigger.start) * progress
      window.scrollTo({ top: target, behavior: 'auto' })
    }
  }, [requestSlide, steps.length])

  const changeSlide = (direction: 1 | -1) => goToSlide(activeIndexRef.current + direction)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    let unlockTimer: number | undefined
    const setWheelLock = (duration = 900) => {
      wheelLockedRef.current = true
      window.clearTimeout(unlockTimer)
      unlockTimer = window.setTimeout(() => {
        wheelLockedRef.current = false
      }, duration)
    }

    const handleWheel = (event: WheelEvent) => {
      if (!window.matchMedia('(min-width: 1024px)').matches) return
      if (!scrollTriggerRef.current?.isActive) return
      if (Math.abs(event.deltaY) < 12) return

      const nextIndex = activeIndexRef.current + (event.deltaY > 0 ? 1 : -1)
      if (nextIndex < 0 || nextIndex >= steps.length) return

      event.preventDefault()
      const wasLocked = wheelLockedRef.current
      setWheelLock()
      if (wasLocked) return
      goToSlide(nextIndex)
    }

    const handleTouchStart = (event: TouchEvent) => {
      if (!(event.target instanceof Node) || !section.contains(event.target)) {
        touchStartYRef.current = null
        touchStartXRef.current = null
        touchAxisRef.current = null
        return
      }
      const touch = event.touches[0]
      touchStartYRef.current = wheelLockedRef.current ? null : touch?.clientY ?? null
      touchStartXRef.current = wheelLockedRef.current ? null : touch?.clientX ?? null
      touchAxisRef.current = null
    }

    const handleTouchMove = (event: TouchEvent) => {
      const startY = touchStartYRef.current
      const startX = touchStartXRef.current
      if (startY === null || startX === null) return

      const touch = event.touches[0]
      const distanceY = startY - (touch?.clientY ?? startY)
      const distanceX = startX - (touch?.clientX ?? startX)
      if (touchAxisRef.current === null) {
        if (Math.max(Math.abs(distanceX), Math.abs(distanceY)) < 12) return
        touchAxisRef.current = Math.abs(distanceX) > Math.abs(distanceY) ? 'horizontal' : 'vertical'
      }
      if (touchAxisRef.current === 'horizontal' || Math.abs(distanceY) < 12) return

      const nextIndex = activeIndexRef.current + (distanceY > 0 ? 1 : -1)
      if (nextIndex >= 0 && nextIndex < steps.length) event.preventDefault()
    }

    const handleTouchEnd = (event: TouchEvent) => {
      const startY = touchStartYRef.current
      const startX = touchStartXRef.current
      touchStartYRef.current = null
      touchStartXRef.current = null
      const axis = touchAxisRef.current
      touchAxisRef.current = null
      if (startY === null || wheelLockedRef.current) return

      const touch = event.changedTouches[0]
      const distanceY = startY - (touch?.clientY ?? startY)
      const distanceX = startX === null ? 0 : startX - (touch?.clientX ?? startX)
      if (axis === 'horizontal' || (axis === null && Math.abs(distanceX) > Math.abs(distanceY))) return
      if (Math.abs(distanceY) < 40) return

      const nextIndex = activeIndexRef.current + (distanceY > 0 ? 1 : -1)
      if (nextIndex < 0 || nextIndex >= steps.length) return

      setWheelLock(350)
      goToSlide(nextIndex)
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('touchstart', handleTouchStart, { passive: true, capture: true })
    window.addEventListener('touchmove', handleTouchMove, { passive: false, capture: true })
    window.addEventListener('touchend', handleTouchEnd, { passive: true, capture: true })

    return () => {
      window.clearTimeout(unlockTimer)
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('touchstart', handleTouchStart, true)
      window.removeEventListener('touchmove', handleTouchMove, true)
      window.removeEventListener('touchend', handleTouchEnd, true)
    }
  }, [goToSlide, steps.length])

  useGSAP(() => {
    if (reduceMotion) return

    const rings = gsap.to('.story-rings', {
      rotation: 360,
      svgOrigin: '1260 220',
      duration: 60,
      repeat: -1,
      ease: 'none',
    })
    const bar = gsap.to('.story-bar', {
      y: -14,
      duration: 2.4,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    })

    return () => {
      rings.kill()
      bar.kill()
    }
  }, { scope: sectionRef, dependencies: [reduceMotion] })

  useGSAP(() => {
    const section = sectionRef.current
    if (!section) return

    const media = gsap.matchMedia()
    const entranceTrigger = ScrollTrigger.create({
      trigger: section,
      start: 'top 80%',
      once: true,
      onEnter: revealStoryOnEnter,
    })
    const refreshFrame = window.requestAnimationFrame(() => {
      const bounds = section.getBoundingClientRect()
      if (bounds.top < window.innerHeight * 0.8 && bounds.bottom > 0) revealStoryOnEnter()
      ScrollTrigger.refresh()
    })

    media.add('(min-width: 1024px)', () => {
      const trigger = ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: () => `+=${window.innerHeight * (steps.length - 1)}`,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        snap: {
          snapTo: 1 / (steps.length - 1),
          delay: 0.05,
          duration: { min: 0.15, max: 0.5 },
          ease: 'power2.out',
        },
        onUpdate: (self) => {
          if (wheelLockedRef.current) return
          const chapterProgress = self.progress * (steps.length - 1)
          const nextIndex = self.direction >= 0
            ? Math.ceil(chapterProgress - 0.001)
            : Math.floor(chapterProgress + 0.001)
          requestSlide(nextIndex)
        },
      })

      scrollTriggerRef.current = trigger

      return () => {
        if (scrollTriggerRef.current === trigger) scrollTriggerRef.current = null
        trigger.kill()
      }
    })

    return () => {
      window.cancelAnimationFrame(refreshFrame)
      entranceTrigger.kill()
      media.revert()
    }
  }, { scope: sectionRef, dependencies: [language, reduceMotion, requestSlide, revealStoryOnEnter, steps.length] })

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
      <img src='/images/story_asset/background.webp' alt='' aria-hidden='true' className='pointer-events-none absolute inset-0 h-full w-full object-cover object-center' />
      <div className='pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(10,10,10,.82)_0%,rgba(10,10,10,.72)_54%,rgba(10,10,10,.34)_100%)]' />

      <div className='relative z-10 mx-auto flex min-h-[100dvh] w-full max-w-[1600px] flex-col px-5 py-7 sm:px-8 sm:py-8 lg:h-full lg:min-h-0 lg:px-14 lg:pb-8 lg:pt-30 xl:px-20'>
        <header className='shrink-0 lg:mb-2'>
          <h2 className='!text-white font-heading text-4xl font-black uppercase leading-[0.82] tracking-tighter sm:text-5xl md:text-6xl lg:text-[clamp(3.75rem,4.2vw,5.25rem)]'>
            {language === 'vi' ? 'Câu chuyện của VIO' : 'The story of VIO'}
          </h2>
        </header>

        <div className='grid min-h-0 flex-1 items-center gap-6 py-6 lg:grid-cols-[minmax(17rem,.82fr)_minmax(0,2fr)] lg:gap-12 xl:gap-16'>
          <div ref={timelineRef} onScroll={revealMobileChapterOnScroll} role='group' aria-label={language === 'vi' ? 'Các mốc câu chuyện VIO' : 'VIO story chapters'} className='relative flex gap-3 overflow-x-auto py-1 lg:flex-col lg:gap-4 lg:overflow-visible lg:py-0 lg:pl-[3.25rem]'>
            <span ref={timelineTrackRef} className='absolute left-[5px] top-0 z-0 hidden w-0.5 rounded-full bg-white/25 lg:block' />
            <span ref={timelineFillRef} className='absolute left-[5px] top-0 z-[1] hidden w-0.5 rounded-full bg-[#C5A059] lg:block' />
            <span ref={timelineArrowRef} className='vio-story-arrow absolute -left-2 top-0 z-10 hidden h-7 w-7 items-center justify-center rounded-full border border-[#C5A059] bg-[#171717]/90 text-[#C5A059] shadow-[0_0_14px_rgba(197,160,89,.35)] lg:flex'>
              <Icon icon='tabler:arrow-down' aria-hidden='true' className='h-4 w-4' />
            </span>
            {steps.map((step, index) => {
              const isActive = activeIndex === index
              const isRevealed = index <= revealedThrough
              return (
                <button key={step.number} data-story-index={index} type='button' onClick={() => goToSlide(index)} aria-label={step.label} aria-current={isActive ? 'step' : undefined} aria-hidden={!isRevealed} tabIndex={isRevealed ? 0 : -1} className={`group relative block w-[min(56vw,16rem)] shrink-0 text-left transition-[opacity,transform] duration-500 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C5A059] lg:w-full lg:max-w-64 ${isRevealed ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'}`}>
                  <span ref={(element) => { dotRefs.current[index] = element }} className={`absolute -left-[2.9rem] top-1/2 z-[2] hidden h-3.5 w-3.5 -translate-y-1/2 rounded-full border transition-all lg:block ${isActive ? 'scale-110 border-[#C5A059] bg-[#C5A059]' : 'border-white/45 bg-[#171717] group-hover:border-white'}`} />
                  <span className={`absolute left-2 top-2 z-[2] rounded-sm px-1.5 py-0.5 text-xs font-bold tracking-[0.12em] lg:-left-[2.1rem] lg:top-2 ${isActive ? 'text-white' : 'text-white/55'}`}>{step.number}</span>
                  <span className={`block aspect-[2/1] overflow-hidden rounded-md border bg-black/40 transition-all duration-300 lg:aspect-auto lg:h-[clamp(5.25rem,16vh,7.5rem)] ${isActive ? 'border-[#C5A059] shadow-[0_0_18px_rgba(197,160,89,.28)]' : 'border-white/20 group-hover:border-white/60'}`}>
                    <img src={`/images/story_asset/${index + 1}.webp`} alt={step.label} className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]' />
                  </span>
                </button>
              )
            })}
          </div>

          <div ref={stageRef} className='vio-story-stage relative min-w-0 max-w-4xl lg:justify-self-center' aria-live='polite' />
        </div>
      </div>
    </section>
  )
}

export default VioStory