import { motion } from 'framer-motion'

const Logo: React.FC = () => {
  return (
    <a href='/' className='flex items-center gap-2 group'>
      <motion.img 
        src='/logo.png' 
        alt='VIO FITNESS Logo' 
        className='h-10 lg:h-12 w-auto object-contain transition-transform duration-500 group-hover:scale-105'
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.span 
        className='text-primary uppercase tracking-[0.2em] text-lg lg:text-xl font-bold'
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      >
        VIO
      </motion.span>
    </a>
  )
}

export default Logo
