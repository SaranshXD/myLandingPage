'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function Section6() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.8,
      staggerChildren: 0.25,
    },
  },
};


  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        damping: 12,
        stiffness: 100,
      },
    },
    exit: {
      opacity: 0,
      y: -30,
      transition: { duration: 0.5 },
    },
  };

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
            className="relative w-full min-h-screen overflow-hidden bg-blue-100"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Background pattern */}
            <motion.div
              className="absolute top-0 bottom-0 inset-0 bg-no-repeat bg-cover opacity-100 z-0"
              style={{ backgroundImage: "url('/assets/Bg-Graphic2.svg')" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />

            {/* Content Container */}
            <div className="relative z-10 bg-blue-100" style={{ paddingLeft: '60px' }}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <motion.div
                  className="space-y-6 pt-40"
                  variants={itemVariants}
                >
                  <span className="text-blue-600 font-medium text-sm tracking-tight uppercase">
                    NO LIMITS
                  </span>

                  <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 tracking-tighter leading-tighter uppercase">
                    LOREM IPSUM DOLOR SIT<br />AMET
                  </h2>

                  <p className="text-sm text-gray-600 font-semibold leading-relaxed tracking-tighter max-w-md">
                    Lorem ipsum dolor sit amet consectetur. Elit faucibus cursus elementum pharetra eget
                    duis elit. Mauris consectetur mauris mauris lorem.
                  </p>

                  <motion.button
                    className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-700 transition-colors text-sm uppercase tracking-wide"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    LEARN MORE →
                  </motion.button>
                </motion.div>
              </div>
            </div>

            {/* Right Side Image */}
            <motion.div
              className="hidden lg:flex absolute top-20 xl:right-14 right-10 w-10/11 h-[80%] z-10"
              initial={{ scale: 0.9, rotate: -2 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', damping: 10, stiffness: 100, delay: 0.1 }}
              variants={itemVariants}
            >
              <Image
                src="/assets/club.png"
                alt="Motorcycle lineup"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </motion.section>
        </AnimatePresence>
      )}
    </>
  );
}
