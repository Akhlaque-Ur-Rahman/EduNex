'use client';

import React, { useState } from 'react'
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm p-4">
      <div className="flex items-center justify-between">
        <div className="text-xl font-bold w-1/4">EduNex</div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 ml-auto" // Added ml-auto to push to extreme right
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8 justify-center w-2/4">
          <Link href="/" className="relative hover:text-emerald-600 transition-colors after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-emerald-600 after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform">
            Home
          </Link>
          <Link href="/career" className="relative hover:text-emerald-600 transition-colors after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-emerald-600 after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform">
            Career
          </Link>
          <Link href="/achievements" className="relative hover:text-emerald-600 transition-colors after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-emerald-600 after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform">
            Achievements
          </Link>
          <Link href="/about" className="relative hover:text-emerald-600 transition-colors after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-emerald-600 after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform">
            About
          </Link>
          <Link href="/contact" className="relative hover:text-emerald-600 transition-colors after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-emerald-600 after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform">
            Contact
          </Link>
        </div>
        <div className="w-1/4 hidden md:block"></div> {/* Spacer div for balance, hidden on mobile */}
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden mt-4`}>
        <div className="flex flex-col items-center gap-4">
          <Link href="/" className="hover:text-emerald-600 transition-colors">
            Home
          </Link>
          <Link href="/career" className="hover:text-emerald-600 transition-colors">
            Career
          </Link>
          <Link href="/achievements" className="hover:text-emerald-600 transition-colors">
            Achievements
          </Link>
          <Link href="/about" className="hover:text-emerald-600 transition-colors">
            About
          </Link>
          <Link href="/contact" className="hover:text-emerald-600 transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
