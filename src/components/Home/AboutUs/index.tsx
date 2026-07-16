import React from 'react'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import Button from '../../ui/Button'

const Aboutus = () => {
  const images = [
    '/landscape/gym_04.jpg',
    '/landscape/gym_05.jpg',
    '/landscape/gym_06.jpg',
    '/landscape/gym_07.jpg',
    '/landscape/gym_08.jpg',
    '/landscape/gym_09.jpg',
  ]

  const paragraphText = "Elevate your fitness journey at VIO Fitness. We deliver a world-class training experience rooted in community, expert coaching, and state-of-the-art facilities designed for transformative results."
  const words = paragraphText.split(" ")

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  }

  const wordVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  }

  const headingVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  }

  return (
    <section id='About' className='py-20 bg-transparent overflow-hidden'>
      <div className='container mx-auto max-w-[1700px] px-4 md:px-8 lg:px-12'>
        
        {/* Heading Above */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headingVariants}
          className="mb-12"
        >
          <h2 className='text-4xl md:text-5xl lg:text-6xl font-black uppercase text-[#1a1a1a] tracking-tighter leading-none'>
            MORE THAN A GYM
          </h2>
        </motion.div>

        {/* Horizontal Image Scroll */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex overflow-x-auto gap-8 pb-12 snap-x hide-scrollbar"
        >
          {images.map((img, idx) => (
            <div key={idx} className="min-w-[90vw] md:min-w-[90vw] lg:min-w-[1200px] xl:min-w-[1400px] 2xl:min-w-[1500px] h-[350px] md:h-[650px] lg:h-[750px] xl:h-[800px] rounded-none border-[3px] border-[#C5A059]/30 hover:border-[#C5A059] hover:shadow-[0_0_25px_rgba(197,160,89,0.5)] shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500 overflow-hidden snap-center flex-shrink-0 group cursor-pointer bg-white">
              <img
                src={img}
                alt={`VIO Fitness Space ${idx + 1}`}
                className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-105'
              />
            </div>
          ))}
        </motion.div>

        {/* Text Below */}
        <div className="max-w-3xl">
          <motion.p 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className='text-lg text-gray-800 mb-10 leading-relaxed font-light flex flex-wrap gap-x-2'
          >
            {words.map((word, idx) => (
              <motion.span key={idx} variants={wordVariants} className="inline-block">
                {word}
              </motion.span>
            ))}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Button variant="dark" className="px-8 py-4 shadow-md hover:shadow-lg hover:-translate-y-1">
              <div className="flex flex-col text-left">
                <span className="font-bold text-lg tracking-wide">EXPERIENCE VIO</span>
                <span className="text-sm font-light text-gray-300">Join Today</span>
              </div>
              <Icon icon="tabler:chevron-right" className="ml-6 text-2xl text-gray-400" />
            </Button>
          </motion.div>
        </div>

      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  )
}

export default Aboutus
