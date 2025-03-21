'use client';
import { FC } from 'react';
import { Star, StarHalf, Star as FilledStar } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Alice Johnson',
    location: 'San Francisco',
    feedback: "Edunex's intuitive design and powerful tools have significantly improved our training sessions.",
    image: '/resources/neonAvatar.jpg',
    rating: 4,
    date: 'March 18, 2025'
  },
  {
    name: 'Michael Lee',
    location: 'Chicago',
    feedback: "We appreciate the smooth integration of Edunex with our existing systems. Highly recommended!",
    image: '/resources/neonAvatar.jpg',
    rating: 5,
    date: 'March 19, 2025'
  },
  {
    name: 'Sophia Brown',
    location: 'Boston',
    feedback: "The support team at Edunex is fantastic. The platform's features are user-friendly and effective.",
    image: '/resources/neonAvatar.jpg',
    rating: 3,
    date: 'March 20, 2025'
  },
];

const ClientFeedback = () => {
  return (
    <section className="py-10 px-6 md:py-16 md:px-20 bg-white">
      <h2 className="text-3xl font-bold mb-4 text-center">Client Feedback</h2>
      <p className="text-gray-600 mb-12 text-center">Discover what our clients say about our innovative education technology solutions.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => {
          const filledStars = Math.floor(testimonial.rating);
          const hasHalfStar = testimonial.rating % 1 !== 0;
          const emptyStars = 5 - filledStars - (hasHalfStar ? 1 : 0);

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)' }}
              transition={{ duration: 0.3 }}
              className="bg-[#e0f7ff] p-6 md:p-8 rounded-2xl shadow-md cursor-pointer"
            >
              <div className="flex items-center mb-4">
                {[...Array(filledStars)].map((_, i) => (
                  <FilledStar key={i} size={20} className="text-yellow-500 mr-1 fill-current" />
                ))}
                {hasHalfStar && <StarHalf size={20} className="text-yellow-500 mr-1" />}
                {[...Array(emptyStars)].map((_, i) => (
                  <Star key={i} size={20} className="text-gray-300 mr-1" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 text-left">{testimonial.feedback}</p>

              <div className="flex items-center justify-between mt-6">
                <div className="flex items-center">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div className="ml-4 text-left">
                    <h3 className="font-bold text-gray-800">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.location}</p>
                  </div>
                </div>
                <p className="text-gray-500 text-sm">{testimonial.date}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ClientFeedback;
