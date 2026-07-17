import { Icon } from '@iconify/react'
import { MEMBER_STORIES } from '@/app/config/media'

const MemberStories = () => (
  <section id='MemberStories' className='bg-[var(--color-darkmode)] py-24 text-white'>
    <div className='container mx-auto max-w-7xl px-4 sm:px-6 lg:px-12'>
      <div className='mb-10 max-w-2xl'>
        <p className='mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-primary)]'>Cộng đồng VIO</p>
        <h2 className='font-heading text-4xl font-bold uppercase leading-tight sm:text-5xl'>Người thật. Hành trình thật.</h2>
        <p className='mt-5 text-lg leading-relaxed text-white/60'>Xem các video học viên do VIO cung cấp. Mỗi câu chuyện đều được chia sẻ với sự đồng ý của người xuất hiện trong video.</p>
      </div>
      <div className='grid gap-5 md:grid-cols-3'>
        {MEMBER_STORIES.map((story, index) => (
          <a key={story.href} href={story.href} target='_blank' rel='noreferrer' className='group flex min-h-56 flex-col justify-between border border-white/10 bg-white/[0.04] p-6 transition hover:border-[var(--color-primary)] hover:bg-white/[0.08]'>
            <span className='flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-primary)] text-[var(--color-darkmode)] transition group-hover:scale-105'><Icon icon='tabler:player-play-filled' className='text-2xl' /></span>
            <span className='mt-12 flex items-center justify-between font-bold uppercase tracking-wider text-white'>Video học viên {String(index + 1).padStart(2, '0')}<Icon icon='tabler:arrow-up-right' className='text-[var(--color-primary)]' /></span>
          </a>
        ))}
      </div>
    </div>
  </section>
)

export default MemberStories
