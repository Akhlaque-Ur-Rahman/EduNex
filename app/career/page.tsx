import React from 'react'
import Navbar from '../components/navbar/page'

const careerPage = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Career</h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 mb-6">
            Welcome to my career page. Here you'll find information about my professional journey and experiences.
          </p>
          {/* Placeholder content - replace with actual career details */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Professional Experience</h2>
            <p className="text-gray-600">
              Content coming soon...
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default careerPage
