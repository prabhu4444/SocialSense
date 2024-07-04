import React from 'react';
import { FaArrowLeft, FaTrashAlt } from 'react-icons/fa';
import Image from 'next/image';
import profile from "@/assets/profile.png";

const Theme2_Navbar = () => {
  return (
    <div className="flex items-center justify-between p-2">
      
      <div className="flex items-center">
      <FaArrowLeft className="text-gray-600 text-xl ml-12" />
      <Image
          src={profile}
          alt="Profile"
          className="w-16 h-16 mb-4 mx-4 rounded-full"
        />
        <span className="text-xl mx-2 font-semibold">Prabhu Satyam</span>
      </div>

      <div className="flex items-center space-x-4">
        <span className="text-gray-600 text-sm"> Added on 21.04.2022</span>
        <button className="flex items-center rounded-lg p-2 bg-red-200 text-red-600 hover:text-black">
          <FaTrashAlt className="mx-1" />
          Delete
        </button>
      </div>
    </div>
  );
};

export default Theme2_Navbar;
