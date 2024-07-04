"use client"
import Image from 'next/image';
import profile from "../../assets/Profile.png";
import React, { useState } from 'react';
import { FaBell, FaCog, FaSearch, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white p-4 flex items-center justify-between w-full rounded-t-2xl">
      <div className="flex items-center">
        <div className="w-8 h-8 border-4 mx-3 border-yellow-600 rounded-full"></div>
        <ul className="hidden md:flex ml-4 space-x-4">
          <li><a href="#" className="text-center py-2 px-2 hover:bg-yellow-100 hover:text-yellow-600 text-sm font-semibold transition-colors hover:text-primary rounded">Home</a></li>
          <li><a href="#" className="text-sm p-2 hover:bg-yellow-100 hover:text-yellow-600 font-semibold">Dashboard</a></li>
          <li><a href="#" className="text-sm p-2 hover:bg-yellow-100 hover:text-yellow-600 font-semibold">Projects</a></li>
          <li><a href="#" className="text-sm p-2 hover:bg-yellow-100 hover:text-yellow-600 font-semibold">Tasks</a></li>
          <li><a href="#" className="text-sm p-2 hover:bg-yellow-100 hover:text-yellow-600 font-semibold">Reporting</a></li>
          <li><a href="#" className="text-sm p-2 hover:bg-yellow-100 hover:text-yellow-600 font-semibold">Users</a></li>
        </ul>
        <button
          className="md:hidden ml-4 text-gray-600 hover:text-gray-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <div className="flex items-center space-x-4 ml-auto">
        <div className="relative">
          <FaSearch className="absolute left-2 top-2 text-gray-600" />
          <input
            type="text"
            placeholder="Search Here"
            className="pl-8 pr-4 py-1 border rounded-md text-gray-600"
          />
        </div>
        <FaCog className="text-gray-600 hover:text-gray-800" />
        <FaBell className="text-gray-600 hover:text-gray-800" />
        <Image
          src={profile}
          alt="Profile"
          className="w-8 h-8 rounded-full"
        />
      </div>
      {isMenuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-white shadow-md p-4 flex flex-col space-y-4 md:hidden">
          <li><a href="#" className="text-gray-600 hover:text-gray-800">Home</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-800">Dashboard</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-800">Projects</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-800">Tasks</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-800">Reporting</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-800">Users</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;