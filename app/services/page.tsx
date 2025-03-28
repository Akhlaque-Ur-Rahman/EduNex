'use client';
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Navbar from "../components/navbar/navBar";
import Footer from "../components/footer";

const successStories = [
  {
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    quote: "A huge selling point for us was that we were going to be able to move quickly...",
    name: "Dena Suarez",
    company: "America's Test",
    role: "HR Director",
  },
  {
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    quote: "Eden makes it easy to stay organized and ensure a seamless experience...",
    name: "Dana Rosenkranz",
    company: "Operations Manager",
    role: "Company Name",
  },
  {
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    quote: "This platform helped streamline our workflow and increase productivity...",
    name: "John Doe",
    company: "Tech Solutions",
    role: "CTO",
  },
  {
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    quote: "An incredible experience that made our operations smoother than ever!",
    name: "Jane Smith",
    company: "Innovate Inc.",
    role: "CEO",
  },
];

const SuccessStories = () => {
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [visibleCards, setVisibleCards] = useState(2);

  useEffect(() => {
    const updateVisibleCards = () => {
      setVisibleCards(window.innerWidth <= 480 ? 1 : 2);
    };
    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const totalSlides = successStories.length;
  const extendedStories = [
    successStories[totalSlides - 1], // Clone last item at the beginning
    ...successStories,
    successStories[0], // Clone first item at the end
  ];

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setIndex((prevIndex) => prevIndex + 1);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setIndex((prevIndex) => prevIndex - 1);
  };

  // Handle seamless looping when transition ends
  useEffect(() => {
    if (index === totalSlides + 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setIndex(1); // Reset to the first actual slide without animation
      }, 300);
    } else if (index === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setIndex(totalSlides); // Reset to last actual slide without animation
      }, 300);
    } else {
      setIsTransitioning(false);
    }
  }, [index, totalSlides]);

  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen px-4 sm:px-8 md:px-16 py-12">
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }} 
          className="text-center bg-gradient-to-r from-blue-600 to-blue-900 text-white py-24 rounded-md"
        >
          <h1 className="text-3xl sm:text-5xl font-bold">Our Services</h1>
          <p className="mt-4 font-light max-w-2xl mx-auto">
            Explore our range of services designed to drive your success.
          </p>
        </motion.div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl sm:text-4xl font-bold">Success Stories</h2>
          <p className="mt-2 text-gray-600">See how we've helped businesses grow with our services.</p>

          <div className="relative max-w-5xl mx-auto mt-8 overflow-hidden">
            {/* Left Arrow */}
            <button 
              onClick={prevSlide} 
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-md hover:bg-gray-300 z-10"
            >
              <FaChevronLeft size={24} />
            </button>

            {/* Cards Container */}
            <div className="overflow-hidden w-full">
              <motion.div
                className="flex gap-4"
                animate={{ x: `-${index * 50}%` }}
                transition={{ duration: isTransitioning ? 0.5 : 0 }}
              >
                {extendedStories.map((story, i) => (
                  <motion.div
                    key={i}
                    className="w-1/2 flex-shrink-0 bg-white text-black p-6 rounded-xl shadow-lg flex items-center"
                  >
                    <img 
                      src={story.image} 
                      alt={story.name} 
                      className="w-24 h-24 sm:w-40 sm:h-40 rounded-full object-cover" 
                    />
                    <div className="ml-4 text-left">
                      <p className="text-lg italic">"{story.quote}"</p>
                      <p className="mt-4 font-semibold">{story.name}</p>
                      <p className="text-sm text-gray-600">{story.company} • {story.role}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right Arrow */}
            <button 
              onClick={nextSlide} 
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-md hover:bg-gray-300 z-10"
            >
              <FaChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SuccessStories;
