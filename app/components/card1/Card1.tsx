import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  description: string;
  buttonText: string;
}

const Card1: React.FC<CardProps> = ({ title, description, buttonText }) => {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
      className="bg-gradient-to-br from-blue-900 to-blue-700 shadow-lg hover:shadow-2xl rounded-lg p-6 transition-shadow duration-300 cursor-pointer"
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold text-white">{title}</h2>
        <span className="bg-emerald-300 text-emerald-900 text-sm font-medium px-3 py-1 rounded-full">New</span>
      </div>
      <p className="text-gray-200 mb-6">{description}</p>
      <div className="flex items-center justify-between">
        <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-2 px-4 rounded-lg transition-colors shadow-sm hover:shadow-md">
          {buttonText}
        </button>
        <div className="flex items-center text-gray-300">
          <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
          </svg>
          <span>Details</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Card1;
