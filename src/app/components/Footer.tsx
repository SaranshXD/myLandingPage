'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, Variants } from 'framer-motion'
import Image from 'next/image'

export default function Footer() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  const itemVariants : Variants = {
    hidden: (direction: 'left' | 'right') => ({
      opacity: 0,
      x: direction === 'left' ? -80 : 80,
    }),
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        damping: 18,
        stiffness: 80,
        duration: 1.6,
        delay: i * 0.2, // each element will wait longer before animating
      },
    }),
  }

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
          <motion.footer
            className="w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {/* Top Section */}
            <div className="bg-gray-100 py-16">
              <div className="max-w-4xl mx-auto px-6 text-center">
                <motion.div
                  custom={0}
                  variants={itemVariants}
                  className="flex justify-center w-full"
                >
                  <Image
                    src="/assets/Logo.png"
                    alt="Logo"
                    width={150}
                    height={150}
                    className="mt-10 mb-10"
                  />
                </motion.div>

                <motion.h2
                  custom={1}
                  variants={itemVariants}
                  className="text-4xl font-semibold lg:text-4xl tracking-tight text-gray-900 mb-6 leading-tighter"
                >
                  LOREM IPSUM DOLOR SIT AMET<br />
                  CONSECTETUR. DUI.
                </motion.h2>

                <motion.p
                  custom={2}
                  variants={itemVariants}
                  className="text-gray-600 text-base leading-relaxed mb-8 max-w-2xl mx-auto"
                >
                  Lorem ipsum dolor sit amet consectetur. Elit faucibus cursus elementum
                  pharetra eget duis elit. Mauris mauris consectetur mauris mauris lorem.
                </motion.p>

                <motion.button
                  className="bg-blue-600 text-white font-medium px-6 py-3 rounded-md text-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  variants={itemVariants}
                  custom={3}
                >
                  Lorem ipsum →
                </motion.button>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="relative bg-slate-800 py-12">
              <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative">
                  <motion.div
                    className="absolute"
                    style={{ marginLeft: '-350px' }}
                    custom={4}
                    variants={itemVariants}
                  >
                    <Image
                      src="/assets/Logo.png"
                      alt="Logo"
                      width={125}
                      height={125}
                      className="mt-10"
                    />
                  </motion.div>

                  <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8 ml-auto">
                    {[0, 1, 2, 3].map((colIndex) => (
                      <motion.div
                        key={colIndex}
                        custom={5 + colIndex}
                        variants={itemVariants}
                        className="space-y-4"
                      >
                        <h3 className="text-white font-medium text-sm mb-4">Lorem Ipsum</h3>
                        <ul className="space-y-3">
                          {Array(4)
                            .fill(null)
                            .map((_, i) => (
                              <li key={i}>
                                <a
                                  href="#"
                                  className="text-gray-300 text-sm hover:text-white transition-colors"
                                >
                                  Lorem Ipsum
                                </a>
                              </li>
                            ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.footer>
        </AnimatePresence>
      )}
    </>
  )
}
