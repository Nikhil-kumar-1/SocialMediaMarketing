import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram } from 'react-icons/fa';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='flex justify-between items-center p-4 bg-gray-900 text-white w-full'>
      <div className='flex flex-col md:flex-row md:items-center gap-4 w-full md:w-1/2'>
        <h4>Email: <span>d9PbM@example.com</span></h4>
        <span className='hidden md:block'>|</span>
        <h4>Phone: <span>123-456-7890</span></h4>
      </div>
      <div className='md:hidden cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </div>
      <div
        className={`absolute md:static top-16 right-4 bg-gray-800 md:bg-transparent p-4 md:p-0 rounded-md shadow-md md:shadow-none md:flex items-center gap-4 w-auto transition-all duration-300  ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <Link to="#" className="text-white hover:text-blue-500 transition">
          <FaFacebookF size={20} />
        </Link>
        <Link to="#" className="text-white hover:text-sky-400 transition">
          <FaTwitter size={20} />
        </Link>
        <Link to="#" className="text-white hover:text-blue-600 transition">
          <FaLinkedinIn size={20} />
        </Link>
        <Link to="#" className="text-white hover:text-red-500 transition">
          <FaYoutube size={20} />
        </Link>
        <Link to="#" className="text-white hover:text-pink-500 transition">
          <FaInstagram size={20} />
        </Link>
      </div>
    </div>
  );
}

export default Header;
