import React from 'react'
import Image from 'next/image'
import Card1 from '../card1/page'

const HeroBox = () => {
  return (
    <div className="relative">
      <div className="h-[calc(100vh-64px)]"> {/* Assuming navbar is 64px tall */}
        <div className="relative h-full w-full">
          {/* Hero Image */}
          <div className="absolute inset-0">
            <Image
              src="/resources/car.jpg" // Corrected path
              alt="Hero background"
              fill
              className="object-cover"
              priority
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-center items-center text-white px-4">
            <div className="w-1/2">
              <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">
                Welcome to EduTech Solutions
              </h1>
              <p className="text-xl md:text-2xl text-center mb-8 max-w-2xl">
                Transforming education through innovative technology solutions
              </p>
              <div className="flex justify-center">
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Section - Suspended 50% out of hero section */}
      <div className="absolute bottom-0 left-0 right-0 translate-y-1/2 z-20 w-full">
        <div className="mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            <div className="w-full sm:w-3/4 lg:w-full"><Card1 /></div>
            <div className="w-full sm:w-3/4 lg:w-full"><Card1 /></div>
            <div className="w-full sm:w-3/4 lg:w-full"><Card1 /></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBox;
