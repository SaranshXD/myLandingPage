'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';


export default function Section8() {
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
        staggerChildren: 0.2,
        delayChildren: 0.6, // increased delay
      }
    }
  };

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut' as const
    }
  }
};


  const testimonials = [
    {
      id: 1,
      icon: "💭",
      text: "Lorem ipsum dolor sit amet. Diam maecenas sed enim ut sem viverra aliquet eget sit amet tellus.",
      name: "Jane Cooper",
      avatar: "/placeholder-avatar-1.jpg"
    },
    {
      id: 2,
      icon: "👑",
      text: "Aliquam vitae sit consectetur porttitor. Cras adipiscing enim eu turpis egestas pretium aenean.",
      name: "Robert Edwards",
      avatar: "/placeholder-avatar-2.jpg"
    },
    {
      id: 3,
      icon: "👔",
      text: "Nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida.",
      name: "Courtney Henry",
      avatar: "/placeholder-avatar-3.jpg"
    },
    {
      id: 4,
      icon: "⏰",
      text: "Dui mauris lacus ligula. Quis magna ut commodo. Pharetra magna ac placerat vestibulum.",
      name: "Cameron",
      avatar: "/placeholder-avatar-4.jpg"
    }
  ];

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
            className="w-full bg-[#155ADA] py-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="max-w-7xl mx-auto px-6">
              {/* Header */}
              <motion.div className="text-center mb-12" variants={cardVariants}>
                <p className="text-blue-100 font-semibold tracking-wide text-lg font-medium mb-2">
                  Join other Sun harvesters
                </p>
                <h2 className="text-white font-semibold tracking-tight text-4xl lg:text-5xl font-bold mb-4">
                  LOREM IPSUM DOLOR SIT AMET
                </h2>
                <p className="text-blue-100 text-md text-base max-w-2xl mx-auto leading-relaxed">
                  Dui mauris lacus ligula. Aliquam vitae sit consectetur porttitor. Bibendum ut bibendum consectetur rhoncus.
                </p>
              </motion.div>

              {/* Testimonials Grid */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
                variants={containerVariants}
              >
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.id}
                    variants={cardVariants}
                  >
                    <Card className={`bg-white h-full ${index === 0 ? 'scale-[1.05]' : ''}`}>
                      <CardContent className="p-6 flex flex-col h-full">
                        <div className="text-3xl mb-4">{testimonial.icon}</div>
                        <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                          {testimonial.text}
                        </p>
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-gray-300 rounded-full mr-3 overflow-hidden">
                            <div className="w-full h-full bg-gray-400 flex items-center justify-center text-white text-xs">
                              {testimonial.name.charAt(0)}
                            </div>
                          </div>
                          <span className="text-gray-900 font-medium text-sm">
                            {testimonial.name}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>

              {/* Navigation Arrows */}
              <motion.div className="flex justify-center space-x-4" variants={cardVariants}>
                <motion.button
                  className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-white hover:bg-opacity-30 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ChevronLeft className="w-5 h-5" style={{ color: 'black' }} />
                </motion.button>
                <motion.button
                  className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-white hover:bg-opacity-30 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ChevronRight className="w-5 h-5" style={{ color: 'black' }} />
                </motion.button>
              </motion.div>
            </div>
          </motion.section>
        </AnimatePresence>
      )}
    </>
  );
}
