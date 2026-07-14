import { motion, useScroll, useTransform } from 'framer-motion'
import BlurText from './BlurText'
import Button from '../../ui/Button'

const Hero = () => {
  const { scrollY } = useScroll()
  const backgroundY = useTransform(scrollY, [0, 500], ['0%', '20%'])
  const opacity = useTransform(scrollY, [0, 500], [1, 0])

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
      {/* Background Image with Parallax */}
      <motion.div 
        className='absolute inset-0 w-full h-full z-[-1]'
        style={{ y: backgroundY, opacity }}
      >
        <div className='absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-black/20 z-10' />
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src='/landscape/gym_01.jpg'
          alt='Gym Background'
          className='w-full h-full object-cover'
        />
      </motion.div>

      <div className='container mx-auto px-6 lg:px-12 relative z-20 text-left'>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate='visible'
          className='max-w-3xl'
        >
          <div className='mb-6'>
            <BlurText
              text="ELEVATE YOUR FITNESS JOURNEY"
              delay={200}
              animateBy="words"
              direction="top"
              className='text-white text-6xl md:text-[5rem] lg:text-[6rem] font-extrabold uppercase leading-[1.05] tracking-tight flex-col'
            />
          </div>
          
          <div className='overflow-hidden mb-12'>
            <motion.p 
              variants={itemVariants} 
              className='text-white/90 text-lg md:text-xl font-light max-w-lg leading-relaxed border-l-4 border-primary pl-6 py-2'
            >
              A premium, international-standard space in the heart of the city. Join us to transform your body and mind.
            </motion.p>
          </div>

          <div className='overflow-hidden pt-4'>
            <motion.div variants={itemVariants}>
              <a href={'#Contact'}>
                <Button size="lg" variant="primary" className="group">
                  <span className='tracking-wide'>BOOK A VISIT</span>
                  <span className='ml-3 text-xl transition-transform duration-300 group-hover:translate-x-2'>→</span>
                </Button>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Decorative gradient orb */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none z-0 translate-x-1/3 translate-y-1/3" />
    </section>
  )
}

export default Hero
