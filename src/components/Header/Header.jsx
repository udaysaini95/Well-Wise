import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // install lucide-react for icons

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Well Form", path: "/About" },
    { name: "Contact", path: "/Contact" },
    { name: "WellAi", path: "/User" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-4 left-27  w-320 z-50 transition-all duration-300 backdrop-blur-sm bg-white/15 shadow-lg rounded-4xl">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 transform transition-transform duration-300 hover:scale-105"
        >
        
          <span className="text-2xl font-extrabold bg-gradient-to-r from-green-500 to-lime-500 bg-clip-text text-transparent">
            Well Wise
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex space-x-8 font-medium">
          {navItems.map((item) => (
            <li key={item.name} className="group">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `relative text-lg tracking-wide transition duration-300
                  ${
                    isActive
                      ? "text-green-500 font-semibold"
                      : "text-gray-400 hover:text-green-500"
                  }`
                }
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link
            to="#"
            className="px-5 py-2 text-gray-400 hover:text-green-600 transition font-medium"
          >
            Log in
          </Link>
          <Link
            to="#"
            className="px-6 py-2 rounded-full text-white bg-gradient-to-r from-green-500 to-lime-500 transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 rounded-md transition-colors duration-300 hover:bg-white/20"
          onClick={toggleMenu}
          aria-label="Toggle mobile menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden animate-slide-down bg-white/90 backdrop-blur-md shadow-lg">
          <ul className="flex flex-col space-y-4 p-6 font-medium">
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  onClick={toggleMenu}
                  className={({ isActive }) =>
                    `block text-lg py-2 transition duration-200 ${
                      isActive
                        ? "text-green-700 font-semibold"
                        : "text-gray-800 hover:text-green-500"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
            <li>
              <Link
                to="#"
                className="block px-5 py-2 text-center text-gray-800 hover:text-green-600 transition"
              >
                Log in
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="block px-6 py-2 rounded-full text-center text-white bg-gradient-to-r from-green-500 to-lime-500 transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
