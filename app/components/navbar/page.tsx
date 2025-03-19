'use client';
import { FC, useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { X, Menu } from 'lucide-react';
import { FaFacebook, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import Image from 'next/image';
import { motion } from 'framer-motion';

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
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 bg-white w-full transition-shadow duration-300 ${
        isScrolled ? 'shadow-md' : ''
      }`}
    >
      <div className="flex items-center justify-between w-full px-4 py-2">
        
        {/* Logo */}
        <div className="flex items-center gap-6">
          <Image
            src='/resources/EduNexLogo.svg'
            alt="EDUNEX Logo"
            width={60}
            height={60}
            priority
            onClick={() => handleNavigation('/')}
            className="cursor-pointer"
          />

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            {!isMobileMenuOpen ? (
              <Menu className="w-6 h-6 cursor-pointer" onClick={toggleMobileMenu} />
            ) : (
              <X className="w-6 h-6 cursor-pointer" onClick={toggleMobileMenu} />
            )}
          </div>
        </div>
        
        {/* Navigation Links and Social Icons - Desktop */}
        <div className="hidden lg:flex items-center gap-8 ml-auto pr-8">
          <div className="flex items-center gap-6">
            {/* Navigation Links */}
            <div onClick={() => handleNavigation('home')} className={`cursor-pointer ${pathname === '/' ? 'text-black font-bold underline' : 'text-gray-700'} hover:underline`}>Home</div>
            <div onClick={() => handleNavigation('services')} className={`cursor-pointer ${pathname === '/services' ? 'text-black font-bold underline' : 'text-gray-700'} hover:underline`}>Services</div>
            <div onClick={() => handleNavigation('clients')} className={`cursor-pointer ${pathname === '/clients' ? 'text-black font-bold underline' : 'text-gray-700'} hover:underline`}>Clients</div>
            <div onClick={() => handleNavigation('contact')} className={`cursor-pointer ${pathname === '/contact' ? 'text-black font-bold underline' : 'text-gray-700'} hover:underline`}>Contact</div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 ml-6">
            <FaFacebook className="w-6 h-6 cursor-pointer" />
            <FaInstagram className="w-6 h-6 cursor-pointer" />
            <FaLinkedinIn className="w-6 h-6 cursor-pointer" />
            <FaXTwitter className="w-6 h-6 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col w-[80%] h-[80%] p-4 transition-transform duration-300 transform">
          <div className="flex flex-col items-start gap-4 mt-8 ml-4">
            <div onClick={() => handleNavigation('home')} className={`text-lg cursor-pointer ${pathname === '/' ? 'text-black font-bold underline' : 'text-gray-700'} hover:underline`}>Home</div>
            <div onClick={() => handleNavigation('services')} className={`text-lg cursor-pointer ${pathname === '/services' ? 'text-black font-bold underline' : 'text-gray-700'} hover:underline`}>Services</div>
            <div onClick={() => handleNavigation('clients')} className={`text-lg cursor-pointer ${pathname === '/clients' ? 'text-black font-bold underline' : 'text-gray-700'} hover:underline`}>Clients</div>
            <div onClick={() => handleNavigation('contact')} className={`text-lg cursor-pointer ${pathname === '/contact' ? 'text-black font-bold underline' : 'text-gray-700'} hover:underline`}>Contact</div>
          </div>

          <div className="flex gap-6 mt-8 ml-4">
            <FaFacebook className="w-6 h-6 cursor-pointer" />
            <FaInstagram className="w-6 h-6 cursor-pointer" />
            <FaLinkedinIn className="w-6 h-6 cursor-pointer" />
            <FaXTwitter className="w-6 h-6 cursor-pointer" />
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
