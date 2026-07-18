import { Icon } from '@iconify/react'
import { m, useReducedMotion } from 'framer-motion'
import { MEMBER_STORIES } from '@/app/config/media'
import { useLocale } from '@/app/context/useLocale'

const MemberStories = () => {
  const locale = useLocale()
  const reduceMotion = useReducedMotion()

  return (
    <section id='MemberStories' className='overflow-hidden bg-[var(--color-vio-canvas)] py-24 text-[var(--color-vio-text)] lg:py-32'>
      <div className='container mx-auto max-w-7xl px-4 sm:px-6 lg:px-12'>
        <m.div
          initial={reduceMotion ? false : { opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className='mb-12 max-w-3xl lg:mb-16'
        >
          <h2 className='text-wrap-balance font-heading text-4xl font-bold uppercase leading-[1.1] text-[var(--color-vio-text)] sm:text-5xl lg:text-6xl'>{locale.stories.title}</h2>
          <p className='mt-5 max-w-2xl text-base leading-relaxed text-[var(--color-vio-muted)] sm:text-lg'>{locale.stories.body}</p>
        </m.div>

        <div className='grid auto-cols-[82%] grid-flow-col gap-4 overflow-x-auto pb-4 snap-x snap-mandatory md:auto-cols-auto md:grid-flow-row md:grid-cols-3 md:gap-5 md:overflow-visible md:pb-0 lg:gap-6'>
          {MEMBER_STORIES.map((story, index) => (
            <m.article
              key={story.id}
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={reduceMotion ? undefined : { y: -6 }}
              whileTap={reduceMotion ? undefined : { scale: 0.985 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: Math.min(index * 0.08, 0.16), ease: [0.16, 1, 0.3, 1] }}
              className='snap-start'
            >
              {story.videoSrc ? (
                <m.video className='aspect-[9/16] w-full border border-[var(--color-vio-line)] object-cover' controls preload='none' poster={story.poster || undefined}>
                  <source src={story.videoSrc} type='video/mp4' />
                </m.video>
              ) : (
                <m.a
                  href={story.href}
                  target='_blank'
                  rel='noreferrer'
                  whileHover={reduceMotion ? undefined : { borderColor: 'var(--color-vio-gold)' }}
                  className='group relative block aspect-[9/16] overflow-hidden border border-[var(--color-vio-line)] bg-[var(--color-vio-surface)] outline-none transition-colors duration-200 hover:border-[var(--color-vio-gold)] focus-visible:border-[var(--color-vio-gold)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-vio-gold)] active:translate-y-0.5'
                  aria-label={`${locale.stories.watch}: ${locale.stories.video} ${index + 1}`}
                >
                  <img
                    src={story.poster}
                    alt=''
                    className='absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none'
                    loading='lazy'
                    decoding='async'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-[var(--color-vio-canvas)] via-transparent to-[var(--color-vio-canvas)]/20' aria-hidden='true' />

                  <span className='absolute left-5 top-5 inline-flex min-h-11 items-center gap-2 border border-[var(--color-vio-text)]/25 bg-[var(--color-vio-canvas)]/80 px-3 text-xs font-bold uppercase tracking-[0.1em] text-[var(--color-vio-text)]'>
                    <Icon icon='tabler:brand-facebook-filled' className='text-lg text-[var(--color-vio-gold)]' aria-hidden='true' />
                    Facebook Reel
                  </span>

                  <span className='absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--color-vio-gold)] text-[var(--color-vio-canvas)] transition-transform duration-200 group-hover:scale-105 group-active:scale-95 motion-reduce:transition-none' aria-hidden='true'>
                    <Icon icon='tabler:player-play-filled' className='ml-1 text-2xl' />
                  </span>

                  <span className='absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-6'>
                    <span>
                      <span className='block text-xs font-bold uppercase tracking-[0.1em] text-[var(--color-vio-gold)]'>{locale.stories.video}</span>
                      <span className='mt-2 block font-heading text-2xl font-bold uppercase leading-tight'>{locale.stories.watch}</span>
                    </span>
                    <Icon icon='tabler:arrow-up-right' className='mb-1 text-2xl text-[var(--color-vio-gold)] transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none' aria-hidden='true' />
                  </span>
                </m.a>
              )}
            </m.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MemberStories
