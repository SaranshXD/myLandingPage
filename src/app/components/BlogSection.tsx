'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

export default function BlogSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [particles, setParticles] = useState<
    { top: string; left: string; width: number; height: number }[]
  >([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const generated = Array.from({ length: 20 }).map(() => ({
      width: Math.random() * 20 + 5,
      height: Math.random() * 20 + 5,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
    }));
    setParticles(generated);
  }, []);

  const blogPosts = [
    {
      id: 1,
      image: '/assets/img1.png',
      title: 'Lorem ipsum dolor sit amet consectetur',
      description:
        'Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat facilisis cursus sit...',
      link: '/blog/post-1',
    },
    {
      id: 2,
      image: '/assets/img2.png',
      title: 'Lorem ipsum dolor sit amet consectetur',
      description:
        'Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat facilisis cursus sit...',
      link: '/blog/post-2',
    },
    {
      id: 3,
      image: '/assets/img3.png',
      title: 'Lorem ipsum dolor sit amet consectetur',
      description:
        'Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat facilisis cursus sit...',
      link: '/blog/post-3',
    },
    {
      id: 4,
      image: '/assets/img4.png',
      title: 'Lorem ipsum dolor sit amet consectetur',
      description:
        'Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat facilibus cursus sit...',
      link: '/blog/post-4',
    },
  ];

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', damping: 15, stiffness: 100 },
    },
  };

const hoverItem = {
  scale: 1.03,
  boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
  transition: { type: 'spring' as const, stiffness: 300 },
};


const floatingAnim = {
  y: [0, -15, 0],
  transition: {
    duration: 4,
    ease: 'easeInOut' as const,
    repeat: Infinity,
  },
};


  return (
    <>
      {isLoading && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-white z-50"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          />
        </motion.div>
      )}

      {!isLoading && (
        <section className="relative max-w-6xl mx-auto px-6 py-12 bg-white  rounded-lg overflow-hidden mt-12">
          {/* Floating particles */}
          <div className="absolute inset-0 pointer-events-none z-0">
            {particles.map((p, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-blue-100 opacity-30"
                style={p}
                animate={floatingAnim}
              />
            ))}
          </div>

          {/* Header */}
          <motion.div
            className="mb-12 relative z-10"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={item}
          >
            <div
              className="font-inter text-md text-blue-600 font-medium mb-2"
              style={{ fontWeight: 500, fontSize: 20 }}
            >
              Lorem ipsum dolor sit amet
            </div>

            <h1
              className="text-3xl font-semibold text-gray-900 mb-4 tracking-tighter"
              style={{ fontFamily: 'Roboto Condensed' }}
            >
              LOREM IPSUM DOLOR SIT
            </h1>

            <p
              className="text-gray-900 max-w-2xl leading-relaxed"
              style={{ fontSize: 'large' }}
            >
              Lorem ipsum dolor sit amet consectetur. Amet volutpat lacus facilibus aliquet elit...
            </p>
          </motion.div>

          {/* Blog Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-12 relative z-10"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {blogPosts.map((post) => (
              <motion.div
                key={post.id}
                className="flex flex-col space-y-4 cursor-pointer"
                variants={item}
                whileHover={hoverItem}
                onMouseEnter={() => setHoveredCard(post.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <motion.div
                  className="relative w-full h-56 overflow-hidden rounded-md"
                  animate={{
                    y: hoveredCard === post.id ? -10 : 0,
                    transition: { duration: 0.5 },
                  }}
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <motion.div
                    className="absolute inset-0 bg-blue-500 opacity-0"
                    animate={{
                      opacity: hoveredCard === post.id ? 0.2 : 0,
                      transition: { duration: 0.3 },
                    }}
                  />
                </motion.div>

                <motion.div
                  className="space-y-3 p-4"
                  style={{ boxShadow: '0 6px 16px rgba(0,0,0,0.12)' }}
                  animate={{
                    backgroundColor:
                      hoveredCard === post.id ? '#f0f9ff' : '#ffffff',
                    transition: { duration: 0.3 },
                  }}
                >
                  <motion.h3
                    className="font-inter text-xl font-semibold text-gray-900 leading-tight"
                    animate={{
                      color:
                        hoveredCard === post.id ? '#2563eb' : '#111827',
                      transition: { duration: 0.3 },
                    }}
                  >
                    {post.title}
                  </motion.h3>
                  <p className="font-inter text-md text-gray-600 leading-relaxed">
                    {post.description}
                  </p>

                  <Link href={post.link} passHref>
                    <motion.div
                      className="inline-flex items-center text-blue-600 text-sm font-medium hover:text-blue-800"
                      whileHover={{
                        x: 5,
                        transition: { type: 'spring', stiffness: 500 },
                      }}
                    >
                      Learn More
                      <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        animate={{
                          x: hoveredCard === post.id ? 5 : 0,
                          opacity: hoveredCard === post.id ? 1 : 0,
                          transition: { duration: 0.3 },
                        }}
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </motion.svg>
                    </motion.div>
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </section>
      )}
    </>
  );
}
