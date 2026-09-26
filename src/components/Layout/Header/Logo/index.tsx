import { motion } from 'framer-motion'

const Logo: React.FC = () => {
  return (
    <a href='#Home' className='inline-flex group' aria-label='VIO Fitness - Trang chủ'>
      <motion.img 
        src='/webp/logo.webp' 
        alt='VIO FITNESS Logo' 
        className='h-14 lg:h-20 w-auto object-contain transition-transform duration-500 group-hover:scale-105'
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      />
    </a>
  )
}

export default Logo
