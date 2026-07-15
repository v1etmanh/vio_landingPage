import { motion } from 'framer-motion'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: '50%', opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  }

  return (
    <section className='relative overflow-hidden z-1 h-screen min-h-[700px] flex items-center justify-start -mt-24 pt-24'>
      {/* Background Image */}
      <div className='absolute inset-0 w-full h-full z-[-1]'>
        <div className='absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10' />
        <img
          src='/landscape/gym_05.jpg'
          alt='Gym Background'
          className='w-full h-full object-cover'
        />
      </div>

      <div className='container mx-auto px-6 lg:px-12 relative z-20 text-left'>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate='visible'
          className='max-w-3xl'
        >
          <div className='overflow-hidden mb-6'>
            <motion.h1 variants={itemVariants} className='text-white text-6xl md:text-[5rem] lg:text-[6rem] font-extrabold uppercase leading-[1.05] tracking-tight'>
              <span className='block'>ELEVATE</span>
              <span className='block'>YOUR</span>
              <span className='block'>FITNESS</span>
              <span className='block'>JOURNEY</span>
            </motion.h1>
          </div>
          
          <div className='overflow-hidden mb-12'>
            <motion.p variants={itemVariants} className='text-white/90 text-[18px] font-light max-w-lg leading-relaxed'>
              A premium, international-standard space in the heart of the city.
            </motion.p>
          </div>

          <div className='overflow-hidden'>
            <motion.div variants={itemVariants}>
              <a href={'#Contact'}>
                <button className='group relative inline-flex items-center justify-center px-12 py-4 text-xl font-medium text-white transition-all duration-300 bg-transparent rounded-lg border-2 border-[#C5A059] hover:bg-[#C5A059]/10 shadow-[0_0_20px_rgba(197,160,89,0.5)]'>
                  BOOK A VISIT 
                  <span className='ml-3 text-2xl transition-transform group-hover:translate-x-1'>→</span>
                </button>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
