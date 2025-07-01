'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [isLoading, setIsLoading] = useState(true);

  const faqs = [
    {
      question: "Lorem ipsum dolor sit amet consectetur?",
      answer: "Lorem ipsum dolor sit amet consectetur. Nascetur amet aliquet mauris consectetur rhoncus. Ultrices ut ornare mauris leo. Eu cursus ullamcorper. Phasellus rhoncus mauris mauris lorem."
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur?",
      answer: "Answer placeholder 2"
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur",
      answer: "Answer placeholder 3"
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur?",
      answer: "Answer placeholder 4"
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur?",
      answer: "Answer placeholder 5"
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' as const, damping: 12, stiffness: 100 }
    }
  };

  return (
    <>
      {/* Loader Spinner */}
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
          <motion.div
            className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          />
        </div>
      )}

      {/* Main FAQ Content */}
      {!isLoading && (
        <AnimatePresence>
          <motion.section
            className="w-full bg-gray-50 py-18"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
          >
            <div className="max-w-8xl mx-auto px-6">
              <div className="bg-[#FBFBFB] lg:p-12">
                {/* Header */}
                <motion.h2
                  className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-8 uppercase tracking-tight"
                  variants={itemVariants}
                >
                  FREQUENTLY ASKED QUESTIONS (FAQS)
                </motion.h2>

                <div className="border-b border-gray-200 last:border-b-0" />

                {/* FAQ Container */}
                <motion.div className="rounded-lg p-6 space-y-4" variants={containerVariants}>
                  {faqs.map((faq, index) => (
                    <motion.div
                      key={index}
                      className="border-b border-gray-200 last:border-b-0"
                      variants={itemVariants}
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full flex items-center justify-between py-4 text-left hover:bg-gray-50 transition-colors"
                      >
                        <span className="text-gray-900 font-semibold text-lg pr-4 tracking-tight">
                          {faq.question}
                        </span>
                        <div className="flex-shrink-0">
                          {openIndex === index ? (
                            <Minus className="w-5 h-5 text-gray-600" />
                          ) : (
                            <Plus className="w-5 h-5 text-gray-600" />
                          )}
                        </div>
                      </button>

                      <AnimatePresence>
                        {openIndex === index && faq.answer && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="pb-4 pr-8">
                              <p className="text-gray-600 text-sm leading-relaxed tracking-wide">
                                {faq.answer}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.section>
        </AnimatePresence>
      )}
    </>
  );
}
