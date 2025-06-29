// src/app/components/BannerSection.tsx
'use client'

import { motion, AnimatePresence, Variants } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function BannerSection() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 120,
        duration: 0.8
      }
    }
  }

  const fadeInVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  }

  return (
    <>
      {/* Optional loader spinner */}
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
          <motion.div
            className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </div>
      )}

      {/* Main content - visible only after loading */}
      {!isLoading && (
        <AnimatePresence>
          <section className="relative h-auto mt-10 w-full py-2 px-4">
            {/* Background Image */}
            <motion.div
              className="absolute inset-0 bg-no-repeat bg-cover bg-center"
              style={{
                backgroundImage: 'url(/assets/Banner.png)',
                minHeight: '900px',
                zIndex: '-1'
              }}
              initial="hidden"
              whileInView="visible"
              variants={fadeInVariants}
              viewport={{ once: true, amount: 0.1 }}
            />
               {/* Logo */}
              <motion.div 
                className="flex justify-start w-full"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Image
                  src="/assets/Logo.png"
                  alt="Logo"
                  width={150}
                  height={150}
                  className="mt-10 ml-4 md:ml-16 lg:ml-20"
                />
              </motion.div>
            
            <motion.div 
              className="max-w-6xl mx-auto flex flex-col items-center text-center"
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
              viewport={{ once: true, amount: 0.2 }}
            >
           
              
              {/* Heading */}
              <motion.h1 
                className="uppercase font-robotoCondensed font-bold text-white mb-6 leading-[0.98] px-4"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                style={{
                  minWidth: '63vw',
                  marginTop: '10vh',
                  fontWeight: '700',
                  fontSize: 'clamp(1.5rem, 4vw, 2.625rem)',
                  lineHeight: '1.2'
                }}
              >
                Lorem ipsum dolor sit amet consectetur. Quis adipiscing purus egestas aliquam viverra mi.
              </motion.h1>
              
              {/* Paragraphs */}
              <div className="max-w-4xl mx-auto flex flex-col items-center text-center px-4">
                <motion.p 
                  className="font-inter text-white mb-6 leading-relaxed"
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  style={{
                    fontWeight: '600',
                    fontSize: 'clamp(1rem, 1.8vw, 1.125rem)'
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur. Mattis justo euismod volutpat vestibulum nisi at nec risus amet. Mi accumsan sagittis justo pellentesque id sed. Id tellus id luctus id. At quis numer libero urna arcu vulputate sed ut. Nisi porta massa diam condimentum nulla quam.
                </motion.p>
                
                <motion.p 
                  className="font-inter text-white mb-6 leading-relaxed"
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  style={{
                    fontWeight: '600',
                    fontSize: 'clamp(1rem, 1.8vw, 1.125rem)'
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur. Volutpat in dictum nec condimentum ultrices non. Omare semper in tincidunt pellentesque eras mauris in vitae. At viverra quis eu malesuada vel et porttitor. Nulla luctus quam lacus lacus non at. Tincidunt morbi feugiat a pulvinar euismod natoque nulla ligula. Tincidunt cursus vitae leo.
                </motion.p>
              </div>
              
              {/* Divider */}
              <motion.div 
                className="h-px bg-gray-300 max-w-2xl w-full mx-auto mb-12"
                variants={itemVariants}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
              
              {/* Footer */}
              <motion.div 
                className="text-center"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Image
                  src="/assets/Button.png"
                  alt="Button"
                  width={250}
                  height={150}
                  className="mx-auto"
                />
              </motion.div>
            </motion.div>
          </section>
        </AnimatePresence>
      )}
    </>
  )
}