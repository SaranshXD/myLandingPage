"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import Image from "next/image";

// Form validation schema
const emailSchema = z.object({
  email: z.string().email("Invalid email address").min(1, "Email is required"),
});

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [reloadKey, setReloadKey] = useState(0);

  const navLinks = [
    { name: "Lorem Ipsum", href: "#" },
    { name: "Lorem Ipsum", href: "#" },
    { name: "Lorem Ipsum", href: "#" },
  ];

  useEffect(() => {
    setReloadKey(Date.now());
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const loadTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(loadTimer);
    };
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(emailSchema),
  });

  const onSubmit = () => {
    toast.success("Thank you for subscribing!");
    reset();
  };

  return (
    <>
      {/* Loading overlay */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-white z-[100] flex items-center justify-center"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content rendered after loading */}
      {!isLoading && (
        <div className="h-[90vh]">
          {/* Header */}
          <motion.header
            className="w-full bg-[rgba(0,0,0,0.0)] fixed top-0 left-0 z-50 shadow-sm h-[100px]"
            animate={{
              height: isScrolled ? "80px" : "100px",
              boxShadow: isScrolled ? "0 4px 20px rgba(0,0,0,0.08)" : "none",
              backgroundColor: isScrolled ? "white" : "rgba(0,0,0,0.0)",
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="w-full h-full px-6 md:px-20 flex items-center justify-between">
              <motion.button
                className="bg-[#DBDBDB] text-primary font-inter font-extrabold text-[32px] leading-[39px] px-4 py-2 rounded"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                LOGO
              </motion.button>

              <nav className="hidden md:flex items-center space-x-8">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-center space-x-2 cursor-pointer group"
                    whileHover={{ y: -2 }}
                  >
                    <span className="text-[#0546D2] font-inter font-medium text-lg">
                      {link.name}
                    </span>
                    <ChevronDown className="w-4 h-4 text-[#0546D2] group-hover:rotate-180 transition duration-200" />
                  </motion.div>
                ))}
              </nav>

              <motion.button
                className="hidden md:block bg-white text-primary font-inter font-bold text-[15px] leading-[19px] px-6 py-3 rounded shadow-lg border border-gray-300"
                whileHover={{
                  y: -3,
                  boxShadow: "0 6px 16px rgba(0,0,0,0.12)",
                  backgroundColor: "#1959AC",
                  color: "white",
                }}
                whileTap={{ scale: 0.98 }}
              >
                Sign In
              </motion.button>

              <div className="md:hidden">
                <motion.button
                  onClick={() => setIsOpen(!isOpen)}
                  whileTap={{ scale: 0.9 }}
                >
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.button>
              </div>
            </div>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="bg-white px-6 py-4 space-y-4 md:hidden shadow"
                >
                  {navLinks.map((link, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <span className="text-[#0546D2] font-inter font-medium text-lg">
                        {link.name}
                      </span>
                      <ChevronDown className="w-2 h-1 text-[#0546D2]" />
                    </div>
                  ))}
                  <button className="w-full bg-white border border-gray-300 px-6 py-3 rounded shadow-lg text-primary font-bold text-[15px] leading-[19px]">
                    Sign In
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.header>

          {/* Hero Section */}
          <section className="flex h-[95vh] relative">
            <div className="w-[100%] mx-auto px-4 md: h-[95vh] flex flex-col-reverse md:flex-row items-center">
              {/* Left Content */}
              <motion.div
                key={reloadKey}
                className="w-full mx-auto md:w-1/2 max-w-[700px] pt-10 md:pt-0 md:mr-auto"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <motion.h1
                  className="text-textDark4 font-roboto font-bold text-4xl md:text-[64px] leading-[1.2] md:leading-[70px] mb-6 md:mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  Lorem ipsum dolor sit amet
                </motion.h1>

                <motion.p
                  className="text-primary font-inter text-base md:text-lg leading-[1.6] md:leading-[25px] mb-6 md:mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  Lorem ipsum dolor sit amet consectetur. Enim netus cras congue
                  quis elit sociis. Sed mi rhoncus id habitant. In urna tellus
                  nisi platea morbi libero imperdiet neque.
                </motion.p>

                {/* Email Form */}
                <motion.form
                  onSubmit={handleSubmit(onSubmit)}
                  className="mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <div className="flex flex-col md:flex-row gap-4 mb-4">
                    <div className="flex-1">
                      <input
                        type="email"
                        {...register("email")}
                        className={`w-full h-[46px] bg-white border ${
                          errors.email ? "border-red-500" : "border-gray-300"
                        } rounded-md px-4 transition-all`}
                        placeholder="Enter your email"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    <motion.button
                      type="submit"
                      className="bg-[#1959AC] text-white font-inter font-bold text-[15px] leading-[19px] px-6 py-3 rounded shadow-lg min-w-[120px]"
                      whileHover={{ scale: 1.08, backgroundColor: "#1959AC" }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Submit
                    </motion.button>
                  </div>
                </motion.form>

                <motion.div
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  <div className="w-[30px] h-[29px] bg-tertiary rounded-[14px] flex items-center justify-center">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-6 h-6" />
                  </div>
                  <span className="text-primary font-inter font-medium text-[15px] leading-[19px]">
                    No credit card required!
                  </span>
                </motion.div>
              </motion.div>

              {/* Right Image */}
              <motion.div
                key={`${reloadKey}-img`}
                className="w-full md:w-1/2 h-[50vh] md:h-full relative"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <div className="absolute inset-0 overflow-hidden">
                  <div
                    className="absolute top-0 right-0 w-full h-full"
                    style={{
                      clipPath: "polygon(12% 0%, 100% 0%, 100% 100%, 0% 100%)",
                    }}
                  >
                    <Image
                      src="/assets/img_heroimage.png"
                      alt="Motorcycle"
                      fill
                      priority
                      className="object-cover object-right"
                    />
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full" />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Bottom Fade */}
            <div
              className="absolute bottom-0 left-0 w-full h-[120px] pointer-events-none"
              style={{
                background:
                  "linear-gradient(to top, white 40%, rgba(255, 255, 255, 0) 100%)",
              }}
            />
          </section>
        </div>
      )}
    </>
  );
}
