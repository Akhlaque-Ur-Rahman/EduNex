'use client';
import React from 'react';
import Image from 'next/image';
import Card1 from '../card1/page';
import { motion } from 'framer-motion';

const HeroBox = () => {
  return (
    <div className="relative">
      <div className="h-[calc(100vh-64px)]">
        <div className="relative h-full w-full">
          {/* Hero Image */}
          <div className="absolute inset-0">
            <Image
              src="/car.jpg"
              alt="Hero background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          {/* Animated Content */}
          <div className="relative z-10 h-full flex flex-col justify-center items-center text-white px-4">
            <motion.div 
              className="w-1/2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">
                Welcome to EduTech Solutions
              </h1>
              <p className="text-xl md:text-2xl text-center mb-8 max-w-2xl">
                Transforming education through innovative technology solutions
              </p>
              <div className="flex justify-center">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Animated Cards Section */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 translate-y-1/2 z-20 w-full"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            <div className="w-full sm:w-3/4 lg:w-full"><Card1 /></div>
            <div className="w-full sm:w-3/4 lg:w-full"><Card1 /></div>
            <div className="w-full sm:w-3/4 lg:w-full"><Card1 /></div>
          </div>
        </div>
      </motion.div>
      
    </div>
  );
};

export default HeroBox;
