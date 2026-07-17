import { Icon } from '@iconify/react'
import { TRAINERS } from '@/app/config/media'
import { useLocale } from '@/app/context/useLocale'

const Trainers = () => {
  const locale = useLocale()

  return (
    <section id='Trainers' className='bg-[#f4f0e8] py-24 text-[var(--color-darkmode)]'>
      <div className='container mx-auto max-w-7xl px-4 sm:px-6 lg:px-12'>
        <div className='max-w-2xl'>
          <p className='mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-primary)]'>{locale.trainers.eyebrow}</p>
          {TRAINERS.length === 0 ? (
            <>
              <h2 className='font-heading text-4xl font-bold uppercase leading-tight sm:text-5xl'>{locale.trainers.title}</h2>
              <p className='mt-6 text-lg leading-relaxed text-black/60'>{locale.trainers.body}</p>
            </>
          ) : (
            <>
              <h2 className='font-heading text-4xl font-bold uppercase leading-tight sm:text-5xl'>{locale.trainers.verified}</h2>
              <div className='mt-8 grid gap-4 sm:grid-cols-2'>
                {TRAINERS.map((trainer) => (
                  <article key={trainer.id} className='border border-black/10 bg-white/60 p-4'>
                    <img src={trainer.image} alt={trainer.name} className='mb-4 aspect-[4/3] w-full object-cover' loading='lazy' />
                    <h3 className='font-heading text-xl font-bold uppercase'>{trainer.name}</h3>
                    <p className='mt-1 text-sm text-black/60'>{trainer.specialty}</p>
                  </article>
                ))}
              </div>
            </>
          )}
          <a href='#TrialForm' className='mt-8 inline-flex items-center gap-2 border border-[var(--color-darkmode)] px-5 py-3 text-sm font-bold uppercase tracking-wider transition hover:bg-[var(--color-darkmode)] hover:text-white'>
            {locale.trainers.cta} <Icon icon='tabler:arrow-right' aria-hidden='true' />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Trainers
