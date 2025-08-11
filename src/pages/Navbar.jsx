"use client";

import { useState } from "react";
//import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
// import { IoLogoWindows } from "react-icons/io5";
import ShopLogo from "../assets/images/trimz_photo.jpg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // fix the backgriund to be black color
    <nav className="bg-yellow-400 text-white p-4 fixed w-full top-0 z-50 shadow-lg">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <a href="#" className="flex items-center">
          {/* <IoLogoWindows size={50} /> */}
          <img src={ShopLogo} alt="shop logo" className="p-2 h-20 w-36" />
        </a>

        {/* Hamburger / Close Icon (Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none z-50"
        >
          {isOpen ? <X size={32} /> : <Menu size={28} />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-yellow-400 ml-3 transition">
            HOME
          </a>
          <a href="#about" className="hover:text-yellow-400 ml-3 transition">
            ABOUT
          </a>
          <a href="#services" className="hover:text-yellow-400 ml-3 transition">
            SERVICES
          </a>
          <a href="#barbers" className="hover:text-yellow-400 ml-3 transition">
            BARBERS
          </a>
          <a href="#findus" className="hover:text-yellow-400 ml-3 transition">
            CONTACT
          </a>
          <a
            href="#appointment"
            className="bg-black text-green-900 ml-6 px-4 py-2 rounded-md font-semibold hover:bg-yellow-500 transition"
          >
            BOOK APPOINTMENT
          </a>
        </div>
      </div>

      {/* Mobile Fullscreen Menu */}
      {/* // fix the backgriund to be black color */}

      <div
        className={`fixed inset-0 bg-yellow-400 text-white flex flex-col items-center justify-center z-40 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Navigation Links */}
        <div className="flex flex-col space-y-6 text-2xl font-semibold">
          <a
            href="#"
            onClick={() => setIsOpen(false)}
            className="hover:text-yellow-400 mt-3 transition"
          >
            HOME
          </a>
          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="hover:text-yellow-400 mt-3 transition"
          >
            ABOUT
          </a>
          <a
            href="#services"
            onClick={() => setIsOpen(false)}
            className="hover:text-yellow-400 mt-3 transition"
          >
            SERVICES
          </a>
          <a
            href="#barbers"
            onClick={() => setIsOpen(false)}
            className="hover:text-yellow-400 mt-3 transition"
          >
            BARBERS
          </a>
          <a
            href="#findus"
            onClick={() => setIsOpen(false)}
            className="hover:text-yellow-400 mt-3 transition"
          >
            CONTACT
          </a>
          <a
            href="#appointment"
            onClick={() => setIsOpen(false)}
            className="bg-black text-red-800 mt-6 px-6 py-3 rounded-md hover:bg-yellow-500 transition"
          >
            BOOK APPOINTMENT
          </a>
        </div>
      </div>
    </nav>
  );
}
