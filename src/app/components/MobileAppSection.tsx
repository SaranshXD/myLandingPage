'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const leftItemVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

const rightItemVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 15,
    },
  },
};



export default function MobileAppSection() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Loader */}
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
            className="w-full bg-gray flex items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="w-full">
              <div className="bg-[#F3F3F3] w-full h-full">
                <motion.div
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center px-8 md:px-16 py-12 lg:py-0"
                  variants={containerVariants}
                >
                  {/* Left Text Content */}
                  <motion.div className="space-y-6" variants={leftItemVariants}>
                    <motion.span
                      className="text-blue-600 font-semibold text-lg tracking-wide uppercase inline-block"
                      variants={leftItemVariants}
                    >
                      Lorem Ipsum
                    </motion.span>

                    <motion.h2
                      className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight tracking-tighter"
                      variants={leftItemVariants}
                    >
                      Lorem Ipsum Dolor
                      <br />
                      Sit Amet
                    </motion.h2>

                    <motion.p
                      className="text-gray-600 text-base leading-relaxed max-w-md"
                      variants={leftItemVariants}
                    >
                      Lorem ipsum dolor sit amet consectetur. Volutpat amet tellus nunc consectetur
                      rhoncus. Orci a pharetra ipsum tellus faucibus lorem. Nunc lorem mauris mauris
                      consectetur mauris mauris lorem.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div className="flex flex-col sm:flex-row gap-4 pt-4" variants={leftItemVariants}>
                      {/* Google Play Button */}
                      <motion.a
                        href="#"
                        className="inline-flex items-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-6 h-6">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                            </svg>
                          </div>
                          <div className="text-left">
                            <div className="text-xs text-gray-300">GET IT ON</div>
                            <div className="text-sm font-semibold">Google Play</div>
                          </div>
                        </div>
                      </motion.a>

                      {/* App Store Button */}
                      <motion.a
                        href="#"
                        className="inline-flex items-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-6 h-6">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                              <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                            </svg>
                          </div>
                          <div className="text-left">
                            <div className="text-xs text-gray-300">Download on the</div>
                            <div className="text-sm font-semibold">App Store</div>
                          </div>
                        </div>
                      </motion.a>
                    </motion.div>
                  </motion.div>

                  {/* Right Side Image */}
                  <motion.div
                    className="relative w-full h-[600px] px-8 md:px-16"
                    variants={rightItemVariants}
                  >
                    <Image
                      src="/assets/phone.png"
                      alt="Phone showcasing app"
                      fill
                      priority
                      className="object-contain object-right"
                    />
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.section>
        </AnimatePresence>
      )}
    </>
  );
}
