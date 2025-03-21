import React from 'react'
import Navbar from '../components/navbar/navBar'

const aboutPage = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">About EduTech Solutions</h1>
        
        {/* Mission Statement */}
        <div className="max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl font-semibold text-emerald-600 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700 mb-6">
            At EduTech Solutions, we're passionate about transforming education through innovative technology. 
            Our mission is to make quality education accessible to everyone, everywhere.
          </p>
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Adaptive Learning</h3>
            <p className="text-gray-600">
              Our AI-powered platform adjusts to each student's learning pace and style, ensuring personalized education experiences.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Global Reach</h3>
            <p className="text-gray-600">
              Serving students in over 50 countries, we're breaking down geographical barriers to education.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Expert Content</h3>
            <p className="text-gray-600">
              Curriculum developed by leading educators and industry experts to ensure highest quality learning materials.
            </p>
          </div>
        </div>

        {/* Company Stats */}
        <div className="bg-emerald-50 rounded-lg p-8 mb-12">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <h4 className="text-3xl font-bold text-emerald-600">1M+</h4>
              <p className="text-gray-600">Active Students</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-emerald-600">200+</h4>
              <p className="text-gray-600">Expert Instructors</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-emerald-600">5000+</h4>
              <p className="text-gray-600">Course Hours</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-emerald-600">98%</h4>
              <p className="text-gray-600">Satisfaction Rate</p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-emerald-600 mb-6">Our Leadership Team</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Sarah Johnson</h3>
              <p className="text-emerald-600 mb-3">CEO & Founder</p>
              <p className="text-gray-600">
                Former education consultant with 15 years of experience in EdTech innovation.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">David Chen</h3>
              <p className="text-emerald-600 mb-3">Chief Technology Officer</p>
              <p className="text-gray-600">
                Tech veteran with expertise in AI and machine learning applications in education.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default aboutPage
