'use client';
import { FC, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const solutions = [
  { title: 'Coding Environment', image: '/resources/solution1.jpg' },
  { title: 'Educational Apps', image: '/resources/solution2.jpg' },
  { title: 'All-in-One Meeting App', image: '/resources/solution3.jpg' },
  { title: 'Interactive Learning Tool', image: '/resources/solution4.jpg' },
  { title: 'Visual Dashboard', image: '/resources/solution5.jpg' },
  { title: 'Mobile Learning Platform', image: '/resources/seminar.jpg' },
  { title: 'Analytics Dashboard', image: '/resources/solution7.jpg' },
];

const InnovativeSolutions: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <motion.section
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
      className="py-10 px-6 md:py-16 md:px-28 bg-white"
    >
      <h2 className="text-3xl font-bold mb-4 text-center text-gray-900">
        Innovative Solutions
      </h2>
      <p className="text-gray-600 mb-12 text-center">
        Explore our cutting-edge designs and exceptional educational technology offerings.
      </p>

      <div className="columns-1 md:columns-3 gap-4 space-y-4">
        {solutions.map((solution, index) => {
          const isActive = activeIndex === index;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer transition-all group"
              onClick={() => setActiveIndex(isActive ? null : index)} // Toggle on tap
            >
              {/* 🖼️ Image */}
              <Image
                src={solution.image}
                alt={solution.title}
                width={400}
                height={300}
                className={`w-full h-auto transition-all duration-300 ease-in-out 
                  ${isActive ? 'brightness-50' : 'group-hover:brightness-50'}`}
              />

              {/* 📌 Title (Appears on Hover & Tap) */}
              <h3
                className={`absolute inset-0 flex items-center justify-center text-white text-xl font-bold 
                  transition-opacity duration-300 ease-in-out 
                  ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
              >
                {solution.title}
              </h3>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default InnovativeSolutions;
