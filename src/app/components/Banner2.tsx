// src/app/components/BannerSection.tsx
'use client'

import { motion, AnimatePresence, Variants } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Banner2() {
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
          <section className="relative h-auto mt-10 w-full py-2 px-4 mb-10">
            {/* Background Image */}
            <motion.div
              className="absolute inset-0 bg-no-repeat bg-cover bg-center mb-10"
              style={{
                backgroundImage: 'url(/assets/Banner2.png)',
                minHeight: '652px',
                zIndex: '-1',
                filter: 'blur(3px)',
                marginBottom:'10vh',
              }}
              initial="hidden"
              whileInView="visible"
              variants={fadeInVariants}
              viewport={{ once: true, amount: 0.1 }}
            />
            
            <motion.div 
              className="max-w-8xl mx-auto flex flex-col items-center text-center"
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
              viewport={{ once: true, amount: 0.2 }}
            >
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
              
              {/* Heading */}
              <motion.h1 
                className=" max-w-xl uppercase font-robotoCondensed font-semibold text-white mb-6  leading-[0.98] px-4 tracking-tight"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                style={{
                  minWidth: '63vw',
                  marginTop: '10vh',
                  fontWeight: '',
                  fontSize: 'clamp(1.5rem, 4vw, 2.625rem)',
                  lineHeight: '1.2'
                }}
              >
                dolor sit amet consectetur. Quis adipiscing purus egestas aliquam viverra mi. dolor sit amet consectetur. Quis adipiscing
              </motion.h1>
              
              
            </motion.div>
          </section>
        </AnimatePresence>
      )}
    </>
  )
}