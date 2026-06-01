import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-900 text-white fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold">
              Tailwind{" "}
            </a>
          </div>
          {/* Navigation Menu */}
          <nav className="hidden md:flex space-x-10 text-lg">
            <NavLink to="/About" className="hover:text-gray-300 transition-all">
              About Us
            </NavLink>
            <NavLink
              to="/Product"
              className="hover:text-gray-300 transition-all"
            >
              Product
            </NavLink>
            <NavLink
              to="/Register"
              className="hover:text-gray-300 transition-all"
            >
              Register
            </NavLink>
            <NavLink to="/Login" className="hover:text-gray-300 transition-all">
              Login
            </NavLink>
            <NavLink
              to="/Profile"
              className="hover:text-gray-300 transition-all"
            >
              Profile
            </NavLink>
            <NavLink
              to="/Contact"
              className="hover:text-gray-300 transition-all"
            >
              Contact
            </NavLink>
          </nav>
          {/* Call-to-Action Button */}
          <div className="hidden md:block">
            {/* thay thế thẻ a => NavLink hoặc Link của react-router-dom 
                <NavLink
                // /about là endpoint được define trong App.jsx
                // react router dom sẽ tự động điều hướng đến endpoint đó khi click vào NavLink
            */}
            <NavLink
              to="/Contact"
              className="bg-yellow-500 hover:bg-yellow-400 text-black py-2 px-6 rounded-full text-lg transition-all"
            >
              Get in Touch
            </NavLink>
          </div>
          {/* Mobile Menu Button (for smaller screens) */}
          <div className="md:hidden flex items-center">
            <button id="menu-button" className="text-white focus:outline-none">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Navigation Menu */}
        <div id="mobile-menu" className="md:hidden mt-5 hidden space-y-4">
          <a
            href="/"
            className="block text-lg hover:text-gray-300 transition-all"
          >
            Home
          </a>
          <a
            href="#services"
            className="block text-lg hover:text-gray-300 transition-all"
          >
            Services
          </a>
          <a
            href="#about"
            className="block text-lg hover:text-gray-300 transition-all"
          >
            About Us
          </a>
          <a
            href="#contact"
            className="block text-lg hover:text-gray-300 transition-all"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
