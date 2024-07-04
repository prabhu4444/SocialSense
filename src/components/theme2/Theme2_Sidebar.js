import { FaTachometerAlt, FaUser, FaStickyNote, FaCog, FaSignOutAlt } from 'react-icons/fa';
import React from 'react';
import profile from "@/assets/profile.png";
import hr_logo from "@/assets/HR_logo.png";
import Image from "next/image";



export default function Theme2_Sidebar() {
  return (
    <div className="bg-neutral-800 h-full flex mt-4 ml-4 mb-4 flex-col justify-between items-center py-4 rounded-bl-2xl rounded-tl-2xl">
      <div className="flex flex-col items-center">
      <Image src={hr_logo} alt="HR Logo" width={40} height={40} />
      <div className="flex flex-col mt-20 space-y-8">
          <FaTachometerAlt className="text-white text-2xl rounded-full p-1 hover:bg-slate-800" />
          <FaUser className="text-white text-2xl rounded-full p-1 hover:bg-slate-800" />
          <FaStickyNote className="text-white text-2xl rounded-full p-1 hover:bg-slate-800" />
          <FaCog className="text-white text-2xl rounded-full p-1 hover:bg-slate-800" />
        </div>
      </div>
      <div className="flex flex-col items-center ">
        
        <Image
          src={profile}
          alt="Profile"
          className="w-12 h-12 mb-4 rounded-full"
        />
        <FaSignOutAlt className="text-white text-2xl rounded-full p-1 hover:bg-slate-800" />
      </div>
    </div>
  );
};
