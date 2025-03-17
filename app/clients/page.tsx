import React from 'react'
import { FaTools } from "react-icons/fa";
import Navbar from '../components/navbar/page'
const clientsPage = () => {
  return (
    <div>
        
          <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 md:p-8">
                <FaTools className="w-16 h-16 text-yellow-500 mb-4" />
                <h1 className="text-2xl md:text-3xl font-bold text-gray-700 mb-2 text-center">Page is Under Construction</h1>
                <p className="text-base md:text-xl text-gray-600 italic text-center">“We’re building something awesome. Just give us a few hammer strikes!”</p>
              </div>
    </div>
  )
}

export default clientsPage
