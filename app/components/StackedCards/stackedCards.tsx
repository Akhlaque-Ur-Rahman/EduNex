'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const StackedCards: React.FC = () => {
  const cardImages = [
    '/resources/Community-Home.jpg',
    '/resources/Community-Posts2.jpg',
    '/resources/Community-Shorts.jpg',
    '/resources/Products-Exams.jpg',
    '/resources/Products-TestSeries.jpg',
    '/resources/Dashboard.jpg',
  ];

  const [cards, setCards] = useState(cardImages);

  const handleCardClick = () => {
    const updatedCards = [...cards];
    const firstCard = updatedCards.shift();
    if (firstCard) updatedCards.push(firstCard);
    setCards(updatedCards);
  };

  return (
    <div className="flex justify-center items-center mt-6 sm:mt-10 relative w-full min-h-[250px]">
      {/* Shadow below the stack */}
      <div 
        className="absolute w-full max-w-[300px] sm:max-w-[350px] h-[25px] bg-black opacity-30 blur-md rounded-full -bottom-6 z-0"
      />

      <div 
        className="relative w-full max-w-[300px] sm:max-w-[350px] md:max-w-[450px] h-[200px] sm:h-[240px] md:h-[280px] cursor-pointer"
        onClick={handleCardClick}
      >
        {cards.map((image, index) => (
          <motion.div
            key={image}
            className="absolute inset-0"
            initial={{ x: index * 10, y: index * 6, scale: 1 - index * 0.04 }}
            animate={{ x: index * 10, y: index * 6, scale: 1 - index * 0.04 }}
            whileHover={{ scale: 1.05, rotate: 0.5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            style={{ zIndex: cards.length - index }}
          >
            <Image
              src={image}
              alt={`Card ${index + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px"
              className="rounded-lg shadow-lg object-cover"
              priority={index === 0}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StackedCards;
