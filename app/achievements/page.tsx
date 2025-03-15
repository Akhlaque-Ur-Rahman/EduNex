import React from 'react'
import Navbar from '../components/navbar/page'
import HeroBox from '../components/heroBox/page'

const AchievementsPage = () => {
  return (
    <div>
      <Navbar />
      <HeroBox />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Achievements</h1>
        <div className="max-w-3xl mx-auto">
          <div className="grid gap-6">
            {/* Academic Achievements */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Academic Achievements</h2>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="text-emerald-600 mr-2">•</span>
                  <span>Graduated with First Class Honours in Computer Science</span>
                </li>
                <li className="flex items-center">
                  <span className="text-emerald-600 mr-2">•</span>
                  <span>Dean's List for Academic Excellence (2020-2023)</span>
                </li>
              </ul>
            </div>

            {/* Professional Achievements */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Professional Achievements</h2>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="text-emerald-600 mr-2">•</span>
                  <span>Led development of award-winning mobile application</span>
                </li>
                <li className="flex items-center">
                  <span className="text-emerald-600 mr-2">•</span>
                  <span>Successfully managed team of 5 developers in startup environment</span>
                </li>
              </ul>
            </div>

            {/* Certifications */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="text-emerald-600 mr-2">•</span>
                  <span>AWS Certified Solutions Architect</span>
                </li>
                <li className="flex items-center">
                  <span className="text-emerald-600 mr-2">•</span>
                  <span>Google Cloud Professional Developer</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AchievementsPage
