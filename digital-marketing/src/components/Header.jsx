import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='flex justify-between items-center p-4 bg-gray-900 text-white w-full'>
      <div className='flex flex-col md:flex-row items-center gap-4 w-full md:w-1/2'>
        <h4>Email: <span>d9PbM@example.com</span></h4>
        <span className='hidden md:block'>|</span>
        <h4>Phone: <span>123-456-7890</span></h4>
      </div>
      <div className='md:hidden cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </div>
      <div className={`absolute md:static top-16 right-4 bg-gray-800 p-4 rounded-md shadow-md md:bg-transparent md:p-0 md:shadow-none md:flex items-center gap-4 w-auto transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}>
        <span>Fa</span>
        <span>Tw</span>
        <span>Li</span>
        <span>Yt</span>
        <span>Ins</span>
      </div>
    </div>
  );
}

export default Header;
