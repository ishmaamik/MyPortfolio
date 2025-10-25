import React from 'react';

export default function Header() {
  return (
    <header className="w-full bg-opacity-50 shadow-sm h-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Left side - Logo/Name */}
          <div className="text-2xl font-bold text-gray-900">
            Ishmaam
          </div>
          
          {/* Right side - Navigation */}
          <nav className="flex gap-8">
            <a 
              href="#home" 
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
            >
              Home
            </a>
            <a 
              href="#education" 
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
            >
              Education
            </a>
            <a 
              href="#project" 
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
            >
              Project
            </a>
            <a 
              href="#achievement" 
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
            >
              Achievement
            </a>
            <a 
              href="#contact" 
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
            >
              Contact Me
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}