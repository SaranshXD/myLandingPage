// src/app/components/TestimonialsSection.tsx
'use client'

import Image from 'next/image'
import { motion, AnimatePresence, Variants } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function TestimonialsSection() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 1500)
        return () => clearTimeout(timer)
    }, [])

    // Animation variants
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    }

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100
            }
        },
        exit: {
            opacity: 0,
            y: -30,
            transition: { duration: 0.5 }
        }
    }

    const borderVariants: Variants = {
        hidden: {
            scale: 0.9,
            boxShadow: "0 0 0 rgba(3, 114, 254, 0)"
        },
        visible: {
            scale: 1,
            boxShadow: "0 0 20px rgba(3, 114, 254, 0.5)",
            transition: {
                duration: 0.8,
                ease: "easeOut" as const,
                delay: 0.3
            }
        },
        exit: {
            opacity: 0,
            y: -50,
            transition: { duration: 0.6 }
        }
    }

    const imageVariants: Variants = {
        hidden: {
            opacity: 0,
            x: 50,
            rotate: -5
        },
        visible: {
            opacity: 1,
            x: 0,
            rotate: 0,
            transition: {
                type: "spring",
                damping: 15,
                stiffness: 100,
                delay: 0.5
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
                    <motion.section
                       className="relative mx-auto w-[95%] max-w-[1550px] bg-white bg-opacity-90 shadow-lg rounded-lg border border-gray-200  mt-[100px]"
               

                        variants={borderVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.4 }}
                    >
                        <motion.div
                            className="flex flex-col lg:flex-row items-start p-10 gap-8 justify-between"
                            variants={containerVariants}
                        >
                            {/* Left Column */}
                            <motion.div
                                className="flex-1 flex-wrap justify-between xl:max-w-1/2  space-y-4 "
                                style={{}}
                                variants={containerVariants}
                                
                            >
                                {/* Overline */}
                                <motion.p
                                    className="text-[#0372FE] font-inter text-[24px] leading-[20px] uppercase tracking-[0.5px]"
                                    variants={itemVariants}
                                    
                                >
LOREM IPSUM DOLOR SIT AMET CONSECTETUR.       
                  </motion.p>

                                {/* Title */}
                                <motion.h2
                                    className="font-roboto font-bold text-[28px] leading-[34px] text-[#222222] mt-2"
                                    variants={itemVariants}
                                >
                            
                                    <br />
                                    <span className="uppercase text-[42px] leading-[28px] tracking-wide">
                             Lorem ipsum dolor sit amet consectetur. Eu elit.
                                    </span>
                                </motion.h2>

                                {/* Intro */}
                                <motion.p
                                    className="font-inter text-[18px] leading-[24px] text-[#4F4F4F] mt-10"
                                    variants={itemVariants}
                                    style={{fontSize:'1.125rem'}}
                                >
                                   Lorem ipsum dolor sit amet consectetur. Mauris ullamcorper etiam leo eleifend condimentum in vitae faucibus.
                                </motion.p>

                                {/* List Items */}
                                <motion.ul
                                    className="space-y-16 mt-8"
                                    variants={containerVariants}
                                >
                                    {[
                                        'Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.',
                                        'Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.',
                                        'Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor..'
                                    ].map((text, idx) => (
                                        <motion.li
                                            key={idx}
                                            className="flex items-start gap-4"
                                            variants={itemVariants}
                                        >
                                            <motion.div
                                                className="mt-1 flex-shrink-0"
                                                whileHover={{ scale: 1.2 }}
                                                whileTap={{ scale: 0.9 }}
                                            >
                                                <Image
                                                    src="/assets/logo1.png"
                                                    alt="Check"
                                                    width={24}
                                                    height={24}
                                                />
                                            </motion.div>
                                            
                                            <p className="font-inter-bold text-[16px] leading-[24px] text-[#222222]">
                                              <b style={{fontWeight:'700' }}>  Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.</b><br />

                                            {text}
                                            </p>
                                        </motion.li>
                                    ))}
                                </motion.ul>
                            </motion.div>

                            {/* Right Column Image */}
                            {/* Right Column Image */}
<motion.div
  className="w-full xl:w-auto flex justify-center xl:justify-end mt-10 xl:mt-[5%] md:mt-[30%]"
  variants={imageVariants}
>
  <motion.div
    whileHover={{
      scale: 1.02,
      boxShadow: "0 15px 30px rgba(0,0,0,0.15)"
    }}
    transition={{
      type: "spring",
      stiffness: 300
    }}
    className="overflow-hidden rounded-md w-full max-w-[600px]"
  >
    <Image
      src="/assets/Sect2.png"
      alt="Testimonial"
      width={600}
      height={400}
      className="object-cover w-full h-auto"
    />
  </motion.div>
</motion.div>

                        </motion.div>
                        
                         {/* Gradient Divider */}
              <motion.div
                className="h-[20px] w-full"
                style={{
                  background: 'linear-gradient(90deg, #033798 0%, #079802 50%, #160040 100%)',
                  zIndex: '1'
                }}
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />
            
                    </motion.section>
                </AnimatePresence>
            )}
        </>
    )
}