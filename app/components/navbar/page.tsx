'use client';
import { FC, useState } from "react";
import { usePathname, useRouter } from 'next/navigation';
import { X, Menu } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import logo from "../../resources/EduNexLogo.svg";

const Navbar: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const isActive = (path: string) => pathname === path;
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const handleNavigation = (path: string) => {
    if (path === 'home') path = '/';
    router.push(path);
    closeMobileMenu();
  };

  return (
    <nav className="flex items-center justify-between px-4 py-2 bg-white shadow-md w-full">
      <div className="flex items-center justify-between mx-4 w-full lg:w-auto">
        <div onClick={() => handleNavigation('/')} className="cursor-pointer">
          <Image src={logo} alt="EDUNEX Logo" width={60} priority />
        </div>

        <div className="lg:hidden">
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 cursor-pointer" onClick={toggleMobileMenu} />
          ) : (
            <Menu className="w-6 h-6 cursor-pointer" onClick={toggleMobileMenu} />
          )}
        </div>
      </div>

      <div className="hidden lg:flex items-center gap-6 text-gray-700">
        {['Home', 'Services', 'Clients', 'Contact'].map((item) => (
          <div key={item} onClick={() => handleNavigation(item.toLowerCase() === 'home' ? '/' : `/${item.toLowerCase()}`)}
            className={`relative cursor-pointer ${isActive(item.toLowerCase() === 'home' ? '/' : `/${item.toLowerCase()}`) ? 'text-black font-bold underline' : ''} hover:underline`}>
            {item}
          </div>
        ))}
      </div>

      <div className="hidden lg:flex items-center gap-4">
        <FaFacebook className="w-6 h-6 cursor-pointer" />
        <FaInstagram className="w-6 h-6 cursor-pointer" />
        <FaLinkedinIn className="w-6 h-6 cursor-pointer" />
        <FaXTwitter className="w-6 h-6 cursor-pointer" />
      </div>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col w-full p-4">
          <div className="flex justify-between items-center mb-6">
            <div onClick={() => handleNavigation('/')} className="cursor-pointer">
              <Image src={logo} alt="EDUNEX Logo" height={60} priority />
            </div>
            <X className="w-6 h-6 cursor-pointer" onClick={toggleMobileMenu} />
          </div>
          <div className="flex flex-col items-start gap-4 mb-10">
            {['Home', 'Services', 'Clients', 'Contact Us'].map((item) => (
              <div key={item} onClick={() => handleNavigation(item.toLowerCase() === 'home' ? '/' : `/${item.toLowerCase().replace(' ', '')}`)}
                className={`text-lg cursor-pointer ${isActive(item.toLowerCase() === 'home' ? '/' : `/${item.toLowerCase().replace(' ', '')}`) ? 'text-black font-bold underline' : ''} hover:underline`}>
                {item}
              </div>
            ))}
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
