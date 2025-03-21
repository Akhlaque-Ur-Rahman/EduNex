'use client';
import { FC, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const ServicesSection: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const services = [
    {
      title: "SEO Optimization",
      description: "Enhancing your website's visibility with optimized content and meta tags for better search engine ranking.",
      moreInfo: "We use advanced tools and techniques to boost your search engine ranking and drive more organic traffic to your platform.",
      image: "/resources/seminar.jpg",  // Replace with your actual image path
    },
    {
      title: "Web Design",
      description: "Creating modern, responsive websites that engage users and showcase your educational offerings effectively.",
      moreInfo: "We create seamless, attractive, and user-friendly interfaces that leave lasting impressions on your audience.",
      image: "/resources/codinglaptop.jpg",  // Replace with your actual image path
    },
    {
      title: "CMS",
      description: "Creating modern, responsive websites that engage users and showcase your educational offerings effectively.",
      moreInfo: "We create seamless, attractive, and user-friendly interfaces that leave lasting impressions on your audience.",
      image: "/resources/seminar.jpg",  // Replace with your actual image path
    },
  ];

  return (
    <section className="py-16 px-6 lg:px-20 bg-[#e0f7ff] text-center">
      <div className="mb-12">
        <h2 className="text-4xl font-bold mb-2">Our Services</h2>
        <p className="text-gray-700">
          Explore our innovative solutions tailored for the education technology sector to enhance learning experiences.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative w-full h-96 rounded-xl overflow-hidden shadow-lg group cursor-pointer"
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
            onClick={() => setActiveIndex(index === activeIndex ? null : index)}
          >
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
              priority={service.image === '/resources/seminar.jpg'}
            />

            <div className={`absolute bottom-0 w-full text-center text-white p-4 transition-all ${activeIndex === index ? 'opacity-0' : 'opacity-100'}`}>  
              <h3 className="text-xl font-bold">{service.title}</h3>
            </div>

            <AnimatePresence>
              {(activeIndex === index) && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-[#1a1a1a] bg-opacity-25 backdrop-blur-sm text-white flex flex-col justify-between items-center rounded-xl"
                >
                  <div className="p-6 overflow-y-auto">
                    <h3 className="text-2xl font-bold mb-2">{service.title.toUpperCase()}</h3>
                    <p className="text-sm mb-4">{service.description}</p>
                    <p className="text-sm">{service.moreInfo}</p>
                  </div>
                  <div className="p-4 bg-[#1a1a1a] bg-opacity-80 text-center rounded-b-xl">
                    <button className="px-6 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition duration-300">
                      Book Now
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
