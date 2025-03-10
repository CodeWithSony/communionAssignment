import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white sticky text-black flex justify-between items-center px-6 py-4 top-0 w-full z-50 shadow-lg">
      <div>
        <Link to="/" onClick={() => setMenuOpen(false)} className="flex">
          <img src="/logo.png" alt="Logo" className="h-10" />
        </Link>
      </div>

      <ul className="hidden md:flex space-x-6 text-2xl font-bold text-blue-700">
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

      <button
        className="md:hidden text-black focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 shadow-lg transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <button
          className="absolute top-4 right-4 text-white"
          onClick={() => setMenuOpen(false)}
        >
          <X size={28} />
        </button>

        <ul className="flex flex-col space-y-6 mt-16 text-center text-white text-lg">
          <li>
            <Link
              to="/"
              className="block hover:text-gray-400 transition"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/event"
              className="block hover:text-gray-400 transition"
              onClick={() => setMenuOpen(false)}
            >
              Events
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="block hover:text-gray-400 transition"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
