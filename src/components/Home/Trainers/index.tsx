import { Icon } from '@iconify/react'
import { TRAINERS } from '@/app/config/media'

const Trainers = () => (
  <section id='Trainers' className='bg-[#f4f0e8] py-24 text-[var(--color-darkmode)]'>
    <div className='container mx-auto max-w-7xl px-4 sm:px-6 lg:px-12'>
      <div className='max-w-2xl'>
        {TRAINERS.length > 0 && <p className='mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-primary)]'>{TRAINERS.length} verified trainers</p>}
        <p className='mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-primary)]'>Đồng hành cùng bạn</p>
        <h2 className='font-heading text-4xl font-bold uppercase leading-tight sm:text-5xl'>Đội ngũ HLV đang được cập nhật</h2>
        <p className='mt-6 text-lg leading-relaxed text-black/60'>
          VIO đang hoàn thiện hồ sơ từng HLV để giới thiệu đúng chuyên môn, kinh nghiệm và phong cách huấn luyện. Bạn có thể đăng ký tập thử để được đội ngũ tư vấn trực tiếp.
        </p>
        <a href='#TrialForm' className='mt-8 inline-flex items-center gap-2 border border-[var(--color-darkmode)] px-5 py-3 text-sm font-bold uppercase tracking-wider transition hover:bg-[var(--color-darkmode)] hover:text-white'>
          Đăng ký tư vấn <Icon icon='tabler:arrow-right' />
        </a>
      </div>
    </div>
  </section>
)

export default Trainers
