'use client';
import { FC, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { X, Menu } from 'lucide-react';
import { FaFacebook, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import Image from 'next/image';
import logo from '../../resources/EduNexLogo.svg';

const Navbar: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const handleNavigation = (path: string) => {
    router.push(path === 'home' ? '/' : `/${path}`);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="flex items-center justify-between px-4 py-2 bg-white shadow-md w-full">
      <div className="flex items-center justify-between w-full lg:w-auto">
        <div className="lg:hidden order-1 flex items-center justify-between w-full">
          <X className="w-6 h-6 cursor-pointer order-1" onClick={toggleMobileMenu} />
          <Image src={logo} alt="EDUNEX Logo" width={60} priority onClick={() => handleNavigation('/')} className="cursor-pointer ml-auto order-2" />
        </div>
      </div>

      <div className="hidden lg:flex items-center gap-6">
        <div onClick={() => handleNavigation('home')} className={`cursor-pointer ${pathname === '/' ? 'text-black font-bold underline' : 'text-gray-700'} hover:underline`}>Home</div>
        <div onClick={() => handleNavigation('services')} className={`cursor-pointer ${pathname === '/services' ? 'text-black font-bold underline' : 'text-gray-700'} hover:underline`}>Services</div>
        <div onClick={() => handleNavigation('clients')} className={`cursor-pointer ${pathname === '/clients' ? 'text-black font-bold underline' : 'text-gray-700'} hover:underline`}>Clients</div>
        <div onClick={() => handleNavigation('contact')} className={`cursor-pointer ${pathname === '/contact' ? 'text-black font-bold underline' : 'text-gray-700'} hover:underline`}>Contact</div>
      </div>

      <div className="hidden lg:flex items-center gap-4">
        <FaFacebook className="w-6 h-6 cursor-pointer" />
        <FaInstagram className="w-6 h-6 cursor-pointer" />
        <FaLinkedinIn className="w-6 h-6 cursor-pointer" />
        <FaXTwitter className="w-6 h-6 cursor-pointer" />
      </div>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col w-full h-full p-4 transition-transform duration-300 transform">
          <div className="flex justify-between items-center mb-6">
            <X className="w-6 h-6 cursor-pointer order-1" onClick={toggleMobileMenu} />
            <Image src={logo} alt="EDUNEX Logo" height={60} priority onClick={() => handleNavigation('/')} className="cursor-pointer order-2" />
          </div>

          <div className="flex flex-col items-start gap-4 mb-10">
            <div onClick={() => handleNavigation('home')} className={`text-lg cursor-pointer ${pathname === '/' ? 'text-black font-bold underline' : 'text-gray-700'} hover:underline`}>Home</div>
            <div onClick={() => handleNavigation('services')} className={`text-lg cursor-pointer ${pathname === '/services' ? 'text-black font-bold underline' : 'text-gray-700'} hover:underline`}>Services</div>
            <div onClick={() => handleNavigation('clients')} className={`text-lg cursor-pointer ${pathname === '/clients' ? 'text-black font-bold underline' : 'text-gray-700'} hover:underline`}>Clients</div>
            <div onClick={() => handleNavigation('contact')} className={`text-lg cursor-pointer ${pathname === '/contact' ? 'text-black font-bold underline' : 'text-gray-700'} hover:underline`}>Contact</div>
          </div>

          <div className="flex gap-6 mt-8">
            <FaFacebook className="w-6 h-6 cursor-pointer" />
            <FaInstagram className="w-6 h-6 cursor-pointer" />
            <FaLinkedinIn className="w-6 h-6 cursor-pointer" />
            <FaXTwitter className="w-6 h-6 cursor-pointer" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
