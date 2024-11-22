import React, { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-neutral-900 text-beige shadow-md z-50 font-mono opacity-95 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="text-2xl font-thin">R</div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-beige focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="sr-only hover:text-slate-200">Toggle menu</span>
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-slate-200">
            Home
          </a>
          <a href="#about" className="hover:text-slate-200">
            About
          </a>
          <a href="#projects" className="hover:text-slate-200">
            Projects
          </a>
          <a href="#contact" className="hover:text-slate-200">
            Contact
          </a>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden mt-1">
          <div className="flex flex-col space-y-4 pl-2 font-sans tracking-widest font-light">
            <a href="#home" className="hover:text-slate-200">
              Home
            </a>
            <a href="#about" className="hover:text-slate-200">
              About
            </a>
            <a href="#projects" className="hover:text-slate-200">
              Projects
            </a>
            <a href="#contact" className="hover:text-slate-200">
              Contact
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;
