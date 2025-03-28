'use client';
import { FC } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const AboutSection: FC = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-between py-16 px-6 lg:px-20 bg-white">
      {/* Left Side: Text Section */}
      <div className="lg:w-1/2 w-full mt-10 lg:mt-0 text-center lg:text-left">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">About Edunex</h2>
          <p className="text-gray-700 mb-6 font-medium text-sm lg:text-base">
            Innovating education technology with modern design and user-centric solutions for a brighter learning experience.
          </p>
          <button className="px-6 py-2 text-black border border-black rounded-full hover:bg-black hover:text-white transition duration-300 cursor-pointer">
            Learn More
          </button>
        </motion.div>
      </div>

      {/* Right Side: Image Section */}
      <div className="lg:w-1/2 w-full flex justify-center gap-6 relative mt-6 lg:mt-0">
        {/* Desktop Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="rounded-xl overflow-hidden shadow-lg"
        >
          <Image
            src="/resources/desktop.jpg"
            alt="Desktop UI"
            width={500}
            height={300}
            style={{ width: '100%', height: '100%' }}
            className="rounded-xl object-cover"
          />
        </motion.div>

        {/* Mobile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="rounded-xl overflow-hidden shadow-lg"
        >
          <div className="relative w-[150px] lg:w-[250px] h-[300px] lg:h-[500px]">
          <Image
  src="/resources/mobile.jpg"
  alt="Mobile UI"
  fill
  sizes="(max-width: 1024px) 50vw, 250px"
  className="rounded-xl object-cover"
/>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
