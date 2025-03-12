import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-6">
      <div className="container mx-auto flex flex-col items-center space-y-4">

        <div className="flex space-x-4">
          <a href="https://instagram.com/mukesh__sardiwal" target="_blank" rel="noopener noreferrer">
            <img 
              src={'https://cdn-icons-png.flaticon.com/128/717/717392.png'} 
              alt="Instagram" 
              className="h-8 w-8 hover:transform hover:scale-125 hover:rotate-6 transition-transform duration-300 " 
            />
          </a>
          <a href="https://x.com/themuZz07" target="_blank" rel="noopener noreferrer">
            <img 
              src={'https://cdn-icons-png.flaticon.com/128/5968/5968958.png'} 
              alt="Twitter" 
              className="h-8 w-8 hover:transform hover:scale-125 hover:rotate-6 transition-transform duration-300" 
            />
          </a>
          <a href="https://github.com/mukeshsardiwal" target="_blank" rel="noopener noreferrer">
            <img 
              src={'https://cdn-icons-png.flaticon.com/128/3291/3291695.png'} 
              alt="GitHub" 
              className="h-8 w-8 hover:transform hover:scale-125 hover:rotate-6 transition-transform duration-300" 
            />
          </a>
          <a href="https://in.linkedin.com/in/mukesh-sardiwal" target="_blank" rel="noopener noreferrer">
            <img 
              src={'https://cdn-icons-png.flaticon.com/128/61/61109.png'} 
              alt="LinkedIn" 
              className="h-8 w-8 hover:transform hover:scale-125 hover:rotate-6 transition-transform duration-300" 
            />
          </a>
        </div>

        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
