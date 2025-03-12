import React from 'react';

const NavBar = ({ scrollToSection }) => {
  return (
    <div className='border-b-2 border-purple-500'>
      <div className='bg-black h-[60px] w-full text-white'>
        <ul className='flex flex-row justify-center mr-10 pt-3 items-center gap-8'>
          <li>
            <a href="#" onClick={() => scrollToSection('about')} className='hover:text-purple-500 cursor-pointer'>
              About Me
            </a>
          </li>
          <li>
            <a href="#" onClick={() => scrollToSection('skills')} className='hover:text-purple-500 cursor-pointer'>
              Skills
            </a>
          </li>
          <li>
            <a href="#" onClick={() => scrollToSection('projects')} className='hover:text-purple-500 cursor-pointer'>
              Projects
            </a>
          </li>
          <li>
            <a href="#" onClick={() => scrollToSection('contact')} className='bg-gray-900 text-white rounded-sm text-md px-4 py-2.5 hover:bg-gray-900'>
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
