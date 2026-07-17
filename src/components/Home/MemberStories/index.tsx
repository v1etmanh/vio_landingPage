import { Icon } from '@iconify/react'
import { MEMBER_STORIES } from '@/app/config/media'
import { useLocale } from '@/app/context/useLocale'

const MemberStories = () => {
  const locale = useLocale()

  return (
    <section id='MemberStories' className='bg-[var(--color-darkmode)] py-24 text-white'>
      <div className='container mx-auto max-w-7xl px-4 sm:px-6 lg:px-12'>
        <div className='mb-10 max-w-2xl'>
          <p className='mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-primary)]'>{locale.stories.eyebrow}</p>
          <h2 className='font-heading text-4xl font-bold uppercase leading-tight sm:text-5xl'>{locale.stories.title}</h2>
          <p className='mt-5 text-lg leading-relaxed text-white/60'>{locale.stories.body}</p>
        </div>
        <div className='grid gap-5 md:grid-cols-3'>
          {MEMBER_STORIES.map((story, index) => (
            <article key={story.id} className='group overflow-hidden border border-white/10 bg-white/[0.04] transition hover:border-[var(--color-primary)] hover:bg-white/[0.08]'>
              {story.videoSrc ? (
                <video className='aspect-[9/16] w-full object-cover' controls preload='none' poster={story.poster || undefined}>
                  <source src={story.videoSrc} type='video/mp4' />
                </video>
              ) : (
                <a href={story.href} target='_blank' rel='noreferrer' className='flex min-h-56 flex-col justify-between p-6' aria-label={`${locale.stories.watch}: ${locale.stories.video} ${index + 1}`}>
                  <span className='flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-primary)] text-[var(--color-darkmode)] transition group-hover:scale-105'><Icon icon='tabler:player-play-filled' className='text-2xl' aria-hidden='true' /></span>
                  <span className='mt-12 flex items-center justify-between font-bold uppercase tracking-wider text-white'>{locale.stories.video} {String(index + 1).padStart(2, '0')}<Icon icon='tabler:arrow-up-right' className='text-[var(--color-primary)]' aria-hidden='true' /></span>
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MemberStories
