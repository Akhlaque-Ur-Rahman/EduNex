'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const StackedCards: React.FC = () => {
  const cardImages = [
    '/resources/Community-Home.svg',
    '/resources/Community-Posts2.svg',
    '/resources/Community-Shorts.svg',
    '/resources/Products-Exams.svg',
    '/resources/Products-TestSeries.svg',
  ];

  const [cards, setCards] = useState(cardImages);

  const handleCardClick = () => {
    const updatedCards = [...cards];
    const firstCard = updatedCards.shift();
    if (firstCard) updatedCards.push(firstCard);
    setCards(updatedCards);
  };

  return (
    <div className="flex justify-center items-center mt-10">
      <div 
        className="relative w-[500px] h-[300px] cursor-pointer" 
        onClick={handleCardClick}
      >
        {cards.map((image, index) => (
          <motion.div
            key={image}
            className="absolute w-full h-full"
            initial={{ y: index * -10 }}
            animate={{ 
              y: index * -10,
              scale: 1 - index * 0.03
            }}
            whileHover={index === 0 ? { rotate: 1 } : {}}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{ 
              zIndex: cards.length - index,
              boxShadow: index !== 0 ? `0 0 0 ${index * 1.5}px rgba(0,0,0,0.1)` : '0 0 10px rgba(0,0,0,0.3)',
              borderRadius: '12px'
            }}
          >
            <Image
              src={image}
              alt={`Card ${index + 1}`}
              width={500}
              height={300}
              className="rounded-lg"
              priority={index === 0}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StackedCards;
