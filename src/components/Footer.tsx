import React from 'react'
import { FaInstagram, FaYoutube, FaFacebook, FaLinkedin } from 'react-icons/fa'

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 relative w-full b-0 z-50">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="h-6 w-6" />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <FaYoutube className="h-6 w-6" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook className="h-6 w-6" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="h-6 w-6" />
          </a>
        </div>
        <p className='text-xs'>© 2024 All Rights Reserved by CharltonK Dev</p>
      </div>
    </footer>
  )
}

export default Footer
