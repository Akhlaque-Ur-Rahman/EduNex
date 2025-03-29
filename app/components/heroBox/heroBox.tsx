'use client';
import React from 'react';
import Card1 from '../card1/Card1';
import StackedCards from '../StackedCards/stackedCards';
import { motion } from 'framer-motion';

const HeroBox = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-800 to-blue-500 min-h-screen flex flex-col justify-between">
      
      {/* First Section (Text & Stacked Cards) */}
      <div className="w-full flex flex-col lg:flex-row items-center justify-between max-sm:py-24 px-6 md:px-12 lg:px-20 xl:px-32 min-h-[calc(100vh-64px)]">
        
        {/* Left Section: Text & Button */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Welcome to <br /> EduTech Solutions
          </h1>
          <p className="text-lg text-gray-200 mt-4 max-w-lg">
            Transforming education through innovative technology solutions
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 bg-green-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-600 transition"
          >
            Get Started
          </motion.button>
        </motion.div>

        {/* Right Section: Stacked Cards */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center mt-6 lg:mt-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="relative w-full max-w-[280px] sm:max-w-[340px] md:max-w-[450px] flex justify-center">
            <StackedCards />
          </div>
        </motion.div>

      </div>

      {/* Second Section: Animated Cards */}
      <motion.div 
        className="w-full flex justify-center px-4 md:mt-10 mt-6 z-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center">
            <div className="w-full sm:w-3/4 lg:w-full">
              <Card1 
                title="AI-Powered Learning" 
                description="Enhance your learning with AI-driven personalized study plans." 
                buttonText="Explore AI Tools" 
              />
            </div>
            <div className="w-full sm:w-3/4 lg:w-full">
              <Card1 
                title="Virtual Classrooms" 
                description="Engage with interactive online sessions and real-time discussions." 
                buttonText="Join Now" 
              />
            </div>
            <div className="w-full sm:w-3/4 lg:w-full">
              <Card1 
                title="Gamified Education" 
                description="Boost engagement with fun and interactive learning modules." 
                buttonText="Start Playing" 
              />
            </div>
          </div>
        </div>
      </motion.div>

    </div>
  );
};

export default HeroBox;
