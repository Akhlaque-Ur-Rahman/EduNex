import React from 'react'

const card1 = () => {
  return (
    <div>
      <div className="bg-gradient-to-br from-blue-900 to-blue-700 shadow-lg hover:shadow-2xl rounded-lg p-6 transition-shadow duration-300">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold text-white">Featured Solution</h2>
          <span className="bg-emerald-300 text-emerald-900 text-sm font-medium px-3 py-1 rounded-full">New</span>
        </div>
        <p className="text-gray-200 mb-6">
          Transform your educational experience with our cutting-edge learning management system. Designed for modern educators and students.
        </p>
        <div className="flex items-center justify-between">
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-2 px-4 rounded-lg transition-colors shadow-sm hover:shadow-md cursor-pointer">
            Learn More
          </button>
          <div className="flex items-center text-gray-300">
            <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd"/>
            </svg>
            <span>Details</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default card1
