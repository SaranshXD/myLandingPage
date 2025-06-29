'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function Section7() {
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
        delayChildren: 0.8,     // ⬅️ Increased animation delay
        staggerChildren: 0.3,
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
            className="relative mt-[160px] w-full overflow"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="mx-auto w-[95%] max-w-[1550px]">
              <div className="bg-[#F8F8F8] h-auto bg-opacity-90 shadow-lg border border-gray-200 overflow-visible">
                <div className="grid h-auto grid-cols-1 lg:grid-cols-2 gap-10 p-10 h-[600px]">

                  {/* Left Image */}
                  <motion.div
                    className="w-full h-full flex items-center justify-start"
                    variants={itemVariants}
                  >
                    <Image
                      src="/assets/Section7.png"
                      alt="Motorcycle Road"
                      width={550}
                      height={700}
                      className="object-cover -mt-[150px] md:-mt-[200px]"
                      priority
                    />
                  </motion.div>

                  {/* Right Content */}
                  <motion.div
                    className="flex flex-col justify-center space-y-6"
                    variants={itemVariants}
                  >
                    <span className="text-[#0546D2] font-inter font-semibold text-[20px] leading-[30px]">
                      Lorem Ipsum
                    </span>

                    <h2 className="text-[#222222] font-roboto font-semibold text-[48px] leading-[40px] tracking-tighter uppercase">
                      <span className="text-[#0546D2]">LOREM</span> IPSUM DOLOR SIT<br />
                      AMET CONSECTETUR. ENIM DONEC.
                    </h2>

                    <p className="text-black font-inter text-[18px] leading-[25px]">
                      Lorem ipsum dolor sit amet consectetur. Vel pellentesque quis orci 
                      amet nunc.
                    </p>

                    {/* Two Column List */}
                    <div className="grid grid-cols-2 gap-x-8 gap-y-3 pt-4">
                      {Array(6).fill(0).map((_, idx) => (
                        <motion.div
                          key={idx}
                          className="text-black font-inter font-bold text-[18px] tracking-wider leading-[20px]"
                          variants={itemVariants}
                        >
                          Lorem Ipsum
                        </motion.div>
                      ))}
                    </div>

                    {/* Button */}
                    <div className="pt-6">
                      <motion.button
                        className="bg-[#1959AC] hover:bg-[#0546D2] text-white font-inter font-bold text-[15px] leading-[19px] px-6 py-3 rounded-lg shadow-md transition"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        variants={itemVariants}
                      >
                        Lorem Ipsum →
                      </motion.button>
                    </div>
                  </motion.div>
                </div>

                {/* Bottom Gradient Bar */}
                <motion.div
                  className="h-[20px] w-full"
                  style={{
                    background: 'linear-gradient(90deg, #033798 0%, #079802 50%, #160040 100%)',
                  }}
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                />
              </div>
            </div>
          </motion.section>
        </AnimatePresence>
      )}
    </>
  );
}
