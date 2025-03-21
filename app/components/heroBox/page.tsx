'use client';
import React from 'react';
import Card1 from '../card1/page';
import StackedCards from '../StackedCards/page';
import { motion } from 'framer-motion';

const HeroBox = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-800 to-blue-500 min-h-screen py-12 overflow-x-hidden herobox-scrollbar-hide"> 
      {/* Allow vertical scrolling while hiding horizontal overflow */}

      {/* First Section (Text & Button) */}
      <div className="flex flex-col lg:flex-row justify-between items-center min-h-[calc(100vh-64px)]">
        
        {/* Animated Content */}
        <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-white pt-6 lg:mb-0">
          <motion.div 
            className="w-full max-w-lg text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Welcome to EduTech Solutions
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Transforming education through innovative technology solutions
            </p>
            <div className="flex justify-center">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-lg transition-colors cursor-pointer"
              >
                Get Started
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Stacked Cards Section */}
        <motion.div
          className="flex-1 flex justify-center items-center mt-10 lg:mt-0 lg:pt-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {/* Mobile Mode - Landscape Adjustment */}
          <div className="relative lg:top-0 top-[-70px] w-full px-4 md:max-w-[500px] max-w-[320px]"> 
            <div className="block md:hidden px-4"> {/* Mobile View */}
              <div className="w-full h-[180px] sm:h-[220px] flex justify-center items-center"> {/* Landscape style */}
                <StackedCards />
              </div>
            </div>

            <div className="hidden md:block"> {/* Desktop View */}
              <StackedCards />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Animated Cards Section */}
      <motion.div 
        className="absolute left-0 right-0 z-20 w-full flex justify-center px-4 top-full md:top-[80%]" 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="mx-auto max-w-7xl mb-4 md:mb-0">
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
