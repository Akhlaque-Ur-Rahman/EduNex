'use client';
import { FC, useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { X, Menu } from 'lucide-react';
import { FaFacebook, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleNavigation = (path: string) => {
    router.push(path === 'home' ? '/' : `/${path}`);
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Activate sticky when scrolling down
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
  initial={{ y: 0 }}
  animate={{ y: 0 }} 
  className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-md py-2`}
>

      <div className="flex items-center justify-between px-4">
        {/* Mobile: Menu & Logo */}
        <div className="flex items-center justify-between w-full lg:hidden relative z-50">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            onClick={toggleMobileMenu}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute left-0 top-1/2 transform -translate-y-1/2"
                >
                  <X className="w-6 h-6 cursor-pointer text-white" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Menu className="w-6 h-6 cursor-pointer" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <Image
            src="/resources/EduNexLogo.svg"
            alt="EDUNEX Logo"
            width={60}
            height={60}
            priority
            onClick={() => handleNavigation('/')}
            className="cursor-pointer ml-auto"
          />
        </div>

        {/* Desktop: Logo, Links, Social Icons */}
        <div className="hidden lg:flex items-center justify-between w-full">
          <Image
            src="/resources/EduNexLogo.svg"
            alt="EDUNEX Logo"
            width={60}
            height={60}
            priority
            onClick={() => handleNavigation('/')}
            className="cursor-pointer"
          />

          <div className="flex items-center gap-6 ml-auto">
            {['home', 'services', 'clients', 'contact'].map((item) => (
              <div
                key={item}
                onClick={() => handleNavigation(item)}
                className={`cursor-pointer ${
                  pathname === (item === 'home' ? '/' : `/${item}`)
                    ? 'text-black font-bold underline'
                    : 'text-gray-700'
                } hover:underline`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </div>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 pr-4 ml-12 mr-10">
            {[FaFacebook, FaInstagram, FaLinkedinIn, FaXTwitter].map((Icon, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 200, damping: 10 }}
              >
                <Icon className="w-6 h-6 cursor-pointer" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 bg-blue-950 z-40 flex flex-col w-[80%] h-full p-4 transition-transform duration-300 transform"
          >
            {/* Navigation Links */}
            <div className="flex flex-col items-start gap-4 mt-14 text-white">
              {['home', 'services', 'clients', 'contact'].map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ scale: 1.02, x: 5 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 10 }}
                  onClick={() => handleNavigation(item)}
                  className="text-lg cursor-pointer hover:underline"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </motion.div>
              ))}
            </div>

            {/* Social Icons */}
            <div className="flex gap-6 mt-8 text-white">
              {[FaFacebook, FaInstagram, FaLinkedinIn, FaXTwitter].map((Icon, index) => (
                <motion.div key={index} whileHover={{ y: -5 }}>
                  <Icon className="w-7 h-7 cursor-pointer" />
                </motion.div>
              ))}
            </div>

            {/* Sign Up & Login Buttons */}
            <div className="flex gap-4 mt-auto w-full mb-2 p-2">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0px 0px 8px rgba(0, 128, 0, 0.6)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavigation('signup')}
                className="bg-emerald-600 text-white py-2 px-4 rounded hover:bg-emerald-700 transition-colors w-full cursor-pointer"
              >
                Sign Up
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0px 0px 8px rgba(0, 0, 255, 0.6)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavigation('login')}
                className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors w-full cursor-pointer"
              >
                Login
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
