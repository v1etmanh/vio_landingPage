import { m, useReducedMotion } from 'framer-motion'

const Logo: React.FC = () => {
  const reduceMotion = useReducedMotion()
  return (
    <a href='/' className='flex items-center gap-2 group'>
      <m.img
        src='/logo.png' 
        alt='VIO FITNESS Logo' 
        className='h-10 lg:h-12 w-auto object-contain transition-transform duration-500 group-hover:scale-105'
        initial={reduceMotion ? false : { opacity: 0, scale: 0.8 }}
        animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      />
      <m.span
        className='text-primary uppercase tracking-[0.2em] text-lg lg:text-xl font-bold'
        initial={reduceMotion ? false : { opacity: 0, x: -10 }}
        animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      >
        VIO
      </m.span>
    </a>
  )
}

export default Logo
