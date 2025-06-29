'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function RequestQuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    dateNeeded: '',
    zip: '',
    quantity: '',
    projectDescription: ''
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 100
      }
    }
  };

  return (
    <>
      {/* Loading Spinner */}
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
          <motion.div
            className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          />
        </div>
      )}

      {/* Main Content */}
      {!isLoading && (
        <AnimatePresence>
          <motion.div
            className="relative bg-white w-full py-20 bg-gray-100 flex items-center justify-center mt-[200px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={containerVariants}
          >
            <motion.div
              className="bg-white rounded-lg p-8 w-full max-w-6xl "
              variants={itemVariants}
            >
              <motion.h1
                className="font-Roboto Condensed text-center text-xl font-semibold text-gray-800 mb-8 tracking-wide mt-12 leading-[0.98]"
                variants={itemVariants}
              >
                REQUEST A QUOTE
              </motion.h1>

              <motion.form onSubmit={handleSubmit} className="space-y-6" variants={containerVariants}>
                {/* Name & Email */}
                <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4" variants={itemVariants}>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </motion.div>

                {/* Phone & Date */}
                <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4" variants={itemVariants}>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Date Needed</label>
                    <input
                      type="date"
                      name="dateNeeded"
                      value={formData.dateNeeded}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </motion.div>

                {/* Zip & Quantity */}
                <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4" variants={itemVariants}>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Zip *</label>
                    <input
                      type="text"
                      name="zip"
                      value={formData.zip}
                      onChange={handleInputChange}
                      placeholder="Please Enter Zip Code"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
                    <select
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Please Select Quantity</option>
                      <option value="1-10">1-10</option>
                      <option value="11-50">11-50</option>
                      <option value="51-100">51-100</option>
                      <option value="100+">100+</option>
                    </select>
                  </div>
                </motion.div>

                {/* Project Description */}
                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Please Describe Your Project
                  </label>
                  <textarea
                    name="projectDescription"
                    value={formData.projectDescription}
                    onChange={handleInputChange}
                    rows={6}
                    placeholder="Please describe your project in detail..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 focus:ring-2 focus:ring-blue-500 resize-none"
                  />
                </motion.div>

                {/* Terms & Submit */}
                <motion.div className="text-center text-sm text-gray-600" variants={itemVariants}>
                  By submitting this form you agree to our{' '}
                  <a href="#" className="text-blue-600 underline hover:text-blue-800">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="#" className="text-blue-600 underline hover:text-blue-800">
                    Privacy Policy
                  </a>.
                </motion.div>

                <motion.div className="text-center mt-4" variants={itemVariants}>
                  <motion.button
                    type="submit"
                    className="bg-blue-600 text-white font-bold py-3 px-8 rounded-md hover:bg-blue-700 transition-colors duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    REQUEST QUOTE
                  </motion.button>
                </motion.div>
              </motion.form>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
}
