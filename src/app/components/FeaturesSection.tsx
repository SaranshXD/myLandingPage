'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function FeaturesSection() {
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
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    },
    exit: {
      opacity: 0,
      y: -50,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <>
      {/* Optional loader spinner */}
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
          <motion.div
            className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          />
        </div>
      )}

      {/* Main content - visible only after loading */}
      {!isLoading && (
        <AnimatePresence>
        <motion.section
  className="relative mt-[240px] w-full overflow-hidden"
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.05 }}
>
            {/* Background graphic */}
            <motion.div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: 'url(/assets/Bg-Graphic.png)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.001 }}
            />

            {/* Card */}
            <motion.div
              className="relative mx-auto w-[95%] max-w-[1550px] bg-white bg-opacity-90 shadow-lg rounded-lg border border-gray-200"
               variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.05 }}
            >
              <motion.div
                className="flex  flex-col lg:flex-row p-10 gap-10"
                variants={containerVariants}
              >
                {/* Left Column */}
                <div className="flex-1 max-w-[594px] space-y-12">
                  <motion.span
                    className="block text-[#0546D2] font-inter font-semibold text-[20px] leading-[30px]"
                    variants={itemVariants}
                  >
                    Lorem ipsum dolor sit
                  </motion.span>

                  <motion.h2
                    className="text-[#222222] font-roboto font-bold text-[42px] leading-[49px] uppercase"
                    variants={itemVariants}
                  >
                    Lorem ipsum dolor sit amet
                  </motion.h2>

                  <motion.p
                    className="text-[black] font-inter text-[18px] leading-[25px]"
                    variants={itemVariants}
                  >
                    Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis donec dui. Mi porttitor ut aliquam mattis maecenas eget integer in nam. Non nisl iaculis at felis aliquet. Hendrerit tellus at purus lectus.
                  </motion.p>

                  <motion.ul
                    className="space-y-12"
                    variants={containerVariants}
                  >
                    {[
                      {
                        img: '/assets/bike1.png',
                        alt: 'Feature 1',
                        text: 'Lorem ipsum dolor sit amet consectetur. Vestibulum ornare fermentum feugiat.'
                      },
                      {
                        img: '/assets/bike2.png',
                        alt: 'Feature 2',
                        text: 'Lorem ipsum dolor sit amet consectetur. Dictum at ac tellus faucibus urna ullamcorper id dui cursus.'
                      },
                      {
                        img: '/assets/bike3.png',
                        alt: 'Feature 3',
                        text: 'Lorem ipsum dolor sit amet consectetur. Vestibulum nisl morbi metus gravida eu facilisi enim.'
                      }
                    ].map((item, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-start gap-4"
                        variants={itemVariants}
                      >
                        <motion.div
                          initial={{ scale: 0.8 }}
                          animate={{ scale: 1.2 }}
                          transition={{
                            type: "spring",
                            delay: idx * 0.05,
                            stiffness: 300
                          }}
                        >
                          <Image 
                            src={item.img}
                            alt={item.alt}
                            width={100}
                            height={100}
                            style={{maxWidth:70}}
                            className="rounded"
                          />
                        </motion.div>
                        <p className="text-black font-inter text-[18px] leading-[25px]">
                          {item.text}
                        </p>
                      </motion.li>
                    ))}
                  </motion.ul>

                  <motion.div
                    className="flex items-center gap-8 mt-6"
                    variants={itemVariants}
                    style={{marginTop:'8vh'}}
                  >
                    <motion.button
                      className="flex bg-[#1959AC] hover:bg-[#0546D2] text-white font-inter font-bold text-[15px] leading-[19px] gap-4 px-6 py-3 rounded shadow-md transition"
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 10px 25px rgba(25, 89, 172, 0.4)"
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Learn More
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{
                          repeat: Infinity,
                          duration: 1.5
                        }}
                      >
                        <Image
                          src="/assets/Arrow1.png"
                          alt="Arrow"
                          width={15}
                          height={15}
                          style={{marginTop:'4px'}}
                        />
                      </motion.div>
                    </motion.button>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        href="tel:123456789"
                        className="flex items-center gap-2 text-[#0546D2] font-inter font-semibold text-[15px] leading-[19px]"
                      >
                        <Image
                          src="/assets/Vector.png"
                          alt="Phone"
                          width={24}
                          height={24}
                        />
                        123456789
                      </Link>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Right Image */}
 <motion.div
  className="hw-full xl:w-auto flex justify-center xl:justify-end mt-10 "
  variants={itemVariants}
>
  <motion.div
    initial={{ scale: 0.9, rotate: -2 }}
    animate={{ scale: 1, rotate: 0 }}
    transition={{
      type: "spring",
      damping: 10,
      stiffness: 100,
      delay: 0.1
    }}
  >
    <Image
      src="/assets/bikeMain.png"
      alt="Motorcycle lineup"
      width={629}
      height={803}
      style={{ minHeight: '75vh' }}
      className="object-cover rounded-lg"
      priority
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
            </motion.div>
          </motion.section>
        </AnimatePresence>
      )}
    </>
  )
}
