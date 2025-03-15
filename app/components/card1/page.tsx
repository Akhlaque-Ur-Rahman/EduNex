import React from 'react'

const card1 = () => {
  return (
    <div>
      <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold text-gray-800">Featured Solution</h2>
          <span className="bg-emerald-100 text-emerald-800 text-sm font-medium px-3 py-1 rounded-full">New</span>
        </div>
        <p className="text-gray-600 mb-6">
          Transform your educational experience with our cutting-edge learning management system. Designed for modern educators and students.
        </p>
        <div className="flex items-center justify-between">
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
            Learn More
          </button>
          <div className="flex items-center text-gray-500">
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
