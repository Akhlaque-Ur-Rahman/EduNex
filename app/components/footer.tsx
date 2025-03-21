'use client';

import { FC } from 'react';
import { FaFacebookF, FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer: FC = () => {
  return (
    <motion.footer
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-gray-900 text-white py-24 px-6"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Innovate</h2>
          <p className="font-medium text-gray-300 mb-4">Empowering education through technology and design.</p>
          <div className="flex space-x-4 mb-4">
            <button className="bg-black px-5 py-3 rounded-2xl cursor-pointer hover:bg-gray-700 transition-all">About</button>
            <button className="bg-black px-5 py-3 rounded-2xl cursor-pointer hover:bg-gray-700 transition-all">Careers</button>
          </div>
          <div className="flex space-x-6 text-white">
            {[FaFacebookF, FaInstagram, FaTiktok, FaTwitter].map((Icon, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, scale: 1.1, rotate: 10 }}
                className="w-8 h-8 cursor-pointer text-white hover:text-gray-400 transition-all duration-100 ease-in-out"
              >
                <Icon size={30} />
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Trust</h2>
          <p className="text-gray-300 mb-2">+91-9031847049</p>
          <p className="text-gray-300 mb-4">contact@edunexservices.com</p>
          <button className="bg-black px-5 py-3 rounded-2xl cursor-pointer hover:bg-gray-700 transition-all">Contact</button>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Excellence</h2>
          <p className="text-gray-300 mb-4">Enter your email address</p>
          <div className="flex items-center mb-4 bg-white rounded-full shadow-lg overflow-hidden">
            <input 
              type="email" 
              placeholder="Your email for updates" 
              className="px-5 py-3 outline-none w-full text-black focus:ring-2 focus:ring-blue-500 rounded-l-full"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-7 py-3 cursor-pointer hover:bg-blue-700 transition-all rounded-r-full border-none outline-none"
            >
              Submit
            </motion.button>
          </div>
        </div>
      </div>

      <div className="text-center mt-8 text-gray-400">© 2025. All rights reserved.</div>
    </motion.footer>
  );
};

export default Footer;
