import React from 'react';

export default function Header() {
  return (
    <header className="w-full bg-opacity-50 shadow-sm h-16 bg-[#151420]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Left side - Logo/Name */}
          <div className="flex items-center pb-3.5 text-2xl font-bold bg-gradient-to-r from-[#ffffff] to-[#9ae0f5] to-[#37caf6] bg-clip-text text-transparent">
            Ishmaam
          </div>

          <div className='flex items-center'>
            {/* Right side - Navigation */}
            <nav className="flex gap-6 [&_a]:pb-3.5 [&_a]:border-transparent [&_a]:border-spacing-y-10  [&_a]:border-b-10  [&_a]:px-3  [&_a:hover]:border-b-amber-500  [&_a:hover]:scale-104  [&_a:hover]:bg-[#4e4747] [&_a]:rounded-lg">
              <a
                href="#home"
                className="text-[#caced4]  transition-colors duration-200"
              >
                Home
              </a>
              <a
                href="#education"
                className="text-[#caced4] hover:text-[#caced4] transition-colors duration-200"
              >
                Education
              </a>
              <a
                href="#project"
                className="text-[#caced4] hover:text-[#caced4] transition-colors duration-200"
              >
                Project
              </a>
              <a
                href="#achievement"
                className="text-[#caced4] hover:text-[#caced4] transition-colors duration-200"
              >
                Achievement
              </a>
              <a
                href="#contact"
                className="text-[#caced4] hover:text-[#caced4] transition-colors duration-200"
              >
                Contact Me
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}