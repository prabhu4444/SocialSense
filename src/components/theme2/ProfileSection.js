"use client";
import { useState } from "react";
import { FaCamera, FaCopy } from "react-icons/fa";
import Profile from "@/components/theme2/ImageCropper/Profile";
import "react-image-crop/dist/ReactCrop.css";
import Image from "next/image";

const ProfileSection = ({ profile }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [position, setPosition] = useState("");

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="flex flex-col items-center p-4">
      <p className=" text-lg text-slate-400 uppercase">Profile Image</p>
      <Profile />      
      <div className="mt-6 w-full">
        <p className="mt-2 text-lg text-slate-400 mx-8 items-center uppercase">
          Employee Details
        </p>
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col bg-gray-100 p-1 my-1 mx-8 rounded-md">
            <label className="text-sm font-medium p-1 text-gray-500">
              First Name
            </label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className=" bg-gray-100 rounded-md focus:outline-none"
            />
          </div>
          <div className="flex flex-col bg-gray-100 my-1 mx-8 p-1 rounded-md">
            <label className="text-sm font-medium p-1 text-gray-500">
              Last Name
            </label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className=" bg-gray-100 rounded-md focus:outline-none"
            />
          </div>
          <div className="flex flex-col bg-gray-100 p-1 my-1 mx-8 rounded-md relative">
            <label className="text-sm font-medium p-1 text-gray-500">
              Email
            </label>
            <div className="flex items-center">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className=" bg-gray-100 rounded-md focus:outline-none flex-grow"
              />
              <FaCopy
                onClick={() => handleCopy(email)}
                className="cursor-pointer mr-4 items-center text-gray-500"
              />
            </div>
          </div>
          <div className="flex flex-col bg-gray-100 p-1 my-1 mx-8 rounded-md relative">
            <label className="text-sm font-medium p-1 text-gray-500">
              Phone
            </label>
            <div className="flex items-center">
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className=" bg-gray-100 rounded-md focus:outline-none flex-grow"
              />
              <FaCopy
                onClick={() => handleCopy(phone)}
                className="cursor-pointer mr-4 items-center text-gray-500"
              />
            </div>
          </div>
          <div className="flex flex-col bg-gray-100 p-1 my-1 mx-8 rounded-md">
            <label className="text-sm font-medium p-1 text-gray-500">
              Position
            </label>
            <input
              type="text"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              className=" bg-gray-100 rounded-md focus:outline-none"
            />
          </div>
        </div>
        <div className="flex justify-center">
  <button className="m-4 py-2 px-12 bg-black text-white rounded-lg hover:bg-gray-800 focus:outline-none">
    Save Changes
  </button>
</div>
      </div>
    </div>
  );
};

export default ProfileSection;
