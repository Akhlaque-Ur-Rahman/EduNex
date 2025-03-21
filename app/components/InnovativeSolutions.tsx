'use client';
import { FC } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const solutions = [
  {
    title: 'Coding Environment',
    image: '/resources/solution1.jpg',
  },
  {
    title: 'Educational Apps',
    image: '/resources/solution2.jpg',
  },
  {
    title: 'All-in-One Meeting App',
    image: '/resources/solution3.jpg',
  },
  {
    title: 'Interactive Learning Tool',
    image: '/resources/solution4.jpg',
  },
  {
    title: 'Visual Dashboard',
    image: '/resources/solution5.jpg',
  },
  {
    title: 'Mobile Learning Platform',
    image: '/resources/seminar.jpg',
  },
  {
    title: 'Visual Dashboard',
    image: '/resources/solution7.jpg',
  },
];

const InnovativeSolutions: FC = () => {
  return (
    <motion.section
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="py-10 px-6 md:py-16 md:px-28 bg-white"
    >
      <h2 className="text-3xl font-bold mb-4 text-center">Innovative Solutions</h2>
      <p className="text-gray-600 mb-12 text-center">Explore our cutting-edge designs and exceptional educational technology offerings.</p>

      <div className="columns-1 md:columns-3 gap-4 space-y-4">
        {solutions.map((solution, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="bg-e0f7ff rounded-2xl overflow-hidden mb-4 shadow-md cursor-pointer"
          >
            <Image
              src={solution.image}
              alt={solution.title}
              width={400}
              height={300}
              className="w-full h-auto"
            />
            <div className="p-4">
              <h3 className="font-bold text-gray-800 text-center">{solution.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default InnovativeSolutions;
