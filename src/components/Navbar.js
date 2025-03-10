import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { Menu, X } from "lucide-react"; // Icons for mobile menu

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 z-10 top-0 sticky text-white flex justify-between items-center px-6 py-4 relative">
      {/* Logo */}
      <div>
        <Link to="/">
          <img src="/path_to_your_logo.png" alt="Logo" className="h-10" />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-6">
        <li>
          <Link to="/" className="hover:text-gray-400 transition">
            Home
          </Link>
        </li>
        <li>
          <Link to="/event" className="hover:text-gray-400 transition">
            Events
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-gray-400 transition">
            About
          </Link>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {/* {menuOpen ? <X size={28} /> : <Menu size={28} />} */}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="absolute top-16 right-6 bg-gray-800 rounded-lg shadow-lg p-4 flex flex-col space-y-3 md:hidden">
          <li>
            <Link
              to="/"
              className="block text-white hover:text-gray-400 transition"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/event"
              className="block text-white hover:text-gray-400 transition"
              onClick={() => setMenuOpen(false)}
            >
              Events
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="block text-white hover:text-gray-400 transition"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
