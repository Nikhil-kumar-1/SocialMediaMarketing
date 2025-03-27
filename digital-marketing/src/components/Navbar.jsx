import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import Logo from '../assets/logo.svg';
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <nav className="bg-white shadow-md w-full">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center gap-2 cursor-pointer">
          <img src={Logo} alt="Logo" className="w-10 h-10 border-2 border-red-400 p-1" />
          <h1 className="text-2xl font-bold text-red-400">
            SEO<span className="text-yellow-400">RE</span>
          </h1>
        </div>
        <div className="md:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </div>
        <div className="hidden md:flex gap-6 items-center">
          <Link to="/" className="text-gray-700 hover:text-red-400 transition">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-red-400 transition">About</Link>
          <div className="relative group">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center text-gray-700 hover:text-red-400 transition"
            >
              Services <FiChevronDown className="ml-1" />
            </button>
            <div
              className={`absolute left-0 w-40 bg-white shadow-lg rounded-md transition-all duration-300 ${
                isDropdownOpen ? 'block' : 'hidden'
              } md:group-hover:block`}
            >
              <Link to="/services/web-development" className="block px-4 py-2 text-gray-700 hover:bg-red-100">
                Web Development
              </Link>
              <Link to="/services/app-development" className="block px-4 py-2 text-gray-700 hover:bg-red-100">
                App Development
              </Link>
            </div>
          </div>
          <Link to="/blog" className="text-gray-700 hover:text-red-400 transition">Blog</Link>
          <Link to="/contact" className="text-gray-700 hover:text-red-400 transition">Contact</Link>
        </div>
        <div className="hidden md:block">
          <button className="bg-red-400 text-white px-4 py-2 rounded-md hover:bg-red-500 transition">
            Let's Chat
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-100 p-4">
          <Link to="/" className="block text-gray-700 py-2 hover:text-red-400">Home</Link>
          <Link to="/about" className="block text-gray-700 py-2 hover:text-red-400">About</Link>
          <div className="relative group">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center text-gray-700 hover:text-red-400 transition"
            >
              Services <FiChevronDown className="ml-1" />
            </button>
            <div
              className={`absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md transition-all duration-300 ${
                isDropdownOpen ? 'block' : 'hidden'
              } md:group-hover:block`}
            >
              <Link to="/services/web-development" className="block px-4 py-2 text-gray-700 hover:bg-red-100">
                Web Development
              </Link>
              <Link to="/services/app-development" className="block px-4 py-2 text-gray-700 hover:bg-red-100">
                App Development
              </Link>
            </div>
          </div>
          <Link to="/blog" className="block text-gray-700 py-2 hover:text-red-400">Blog</Link>
          <Link to="/contact" className="block text-gray-700 py-2 hover:text-red-400">Contact</Link>
          <button className="w-full bg-red-400 text-white px-4 py-2 mt-2 rounded-md hover:bg-red-500 transition">
            Let's Chat
          </button>
        </div>
      )}
    </nav>
  );
}
export default Navbar;