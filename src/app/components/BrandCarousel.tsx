'use client'

import Image from 'next/image'
import { motion, AnimatePresence, Variants } from 'framer-motion'
import { useEffect, useState } from 'react'

const brands = [
  { name: 'Hero', src: '/assets/hero.png' },
  { name: 'Honda', src: '/assets/Honda.png' },
  { name: 'Bajaj', src: '/assets/bajaj.png' },
  { name: 'TVS', src: '/assets/tvs.png' },
  { name: 'Royal Enfield', src: '/assets/royal.png' },
  { name: 'Yamaha', src: '/assets/yamaha.png' },
  { name: 'KTM', src: '/assets/ktm.png' },
  { name: 'Ather', src: '/assets/ather.jpg' },
  { name: 'Ola Electric', src: '/assets/ola.png' },
  { name: 'Revolt', src: '/assets/revolt.png' },
  { name: 'Ultraviolette', src: '/assets/ultra.jpg' },
  { name: 'Tork Motors', src: '/assets/tork.jpg' },
]

const BrandCarousel = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.4,
      },
    },
  }

  const rowVariants = (direction: 'left' | 'right') => ({
    hidden: {
      x: direction === 'right' ? 100 : -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 18,
        stiffness: 80,
        duration: 1.4,
      },
    },
  })

  const itemVariants : Variants= {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        damping: 14,
        stiffness: 90,
        duration: 0.6,
      },
    },
  }

  const row1 = brands.slice(0, 4)
  const row2 = brands.slice(4, 8)
  const row3 = brands.slice(8, 12)

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
          <motion.div
            className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          />
        </div>
      )}

      {!isLoading && (
        <AnimatePresence>
          <motion.section
            className="w-full py-16 bg-white text-center overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
          >
            <motion.h2
              className="font-roboto font-bold text-2xl md:text-4xl text-[#222] mb-12"
              variants={itemVariants}
            >
              LOREM IPSUM DOLOR SIT AMET
              <br />
              <span className="font-normal text-xl md:text-2xl">
                CONSECTETUR. COMMODO LEO AMET.
              </span>
            </motion.h2>

            {/* Desktop */}
            <div className="hidden md:flex flex-col gap-12">
              {[row1, row2, row3].map((row, rowIndex) => (
                <motion.div
                  key={rowIndex}
                  className="flex justify-center"
                  variants={rowVariants(rowIndex % 2 === 0 ? 'right' : 'left')}
                >
                  {row.map((brand) => (
                    <motion.div
                      key={brand.name}
                      className="min-w-[160px] h-[100px] mx-4 flex items-center justify-center"
                      variants={itemVariants}
                      whileHover={{ scale: 1.1 }}
                    >
                      <div className="relative w-[120px] h-[60px]">
                        <Image
                          alt={brand.name}
                          src={brand.src}
                          fill
                          className="object-contain"
                          sizes="100vw"
                        />
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              ))}
            </div>

            {/* Mobile */}
            <div className="md:hidden flex flex-col gap-10 mt-8">
              {[row1, row2, row3].map((row, rowIndex) => (
                <motion.div
                  key={rowIndex}
                  className="flex justify-center"
                  variants={rowVariants(rowIndex % 2 === 0 ? 'left' : 'right')}
                >
                  {row.map((brand) => (
                    <motion.div
                      key={`${brand.name}-mobile`}
                      className="min-w-[140px] h-[80px] mx-3 flex items-center justify-center"
                      variants={itemVariants}
                    >
                      <div className="relative w-[100px] h-[50px]">
                        <Image
                          alt={brand.name}
                          src={brand.src}
                          fill
                          className="object-contain"
                          sizes="100vw"
                        />
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              ))}
            </div>
          </motion.section>
        </AnimatePresence>
      )}
    </>
  )
}

export default BrandCarousel
