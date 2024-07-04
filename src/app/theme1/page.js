"use client";
import Image from "next/image";
import profile from "@/assets/profile.png";
import bg_wallpaper from "@/assets/background_wallpaper3.jpeg";

import Theme1_Sidebar from "@/components/theme1/Theme1_Sidebar";
import { FiPlus } from "react-icons/fi";
//import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setThemeColor } from '@/lib/theme1Slice';
import { setForegroundColor } from '@/lib/theme1Slice';



export default function Theme1() {
    const dispatch = useDispatch();
    const { themeColor, foregroundColor } = useSelector((state) => state.theme1);
    console.log(themeColor);
    //const themeColorStyle = themeColor ? { backgroundColor: themeColor } : {};

    const handleSolidColorClick = (color) => {
      dispatch(setThemeColor({
        type: 'solid',
        value: color,
      }));
    };
  
    const handleLinearGradientClick = (gradient) => {
      console.log("hereliner");
      console.log(gradient);
      dispatch(setThemeColor({
        type: 'linear',
        value: gradient,
      }));
    };
  
    const handleRadialGradientClick = (gradient) => {
      //const radialGradient = `radial-gradient(circle, ${gradient} 0%, rgba(255,255,255,0) 100%)`;
      console.log("hereradial");
      console.log(gradient);
      dispatch(setThemeColor({
        type: 'radial',
        value: gradient,
      }));
    };
  
    const handleForegroundColorClick = (color) => {
      dispatch(setForegroundColor(color));
    };

  return (
    <div className="flex">
      <div className="bg-gray-200 w-2/12">
        <Theme1_Sidebar />
      </div>

      <div className="flex-1 p-4 flex-wrap w-10/12 bg-white">
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-2xl font-bold">Themes</h1>
          <div className="flex items-center rounded bg-gray-200 p-2">
            <span className="mr-4 ">Prabhu Satyam</span>
            <Image
          src={profile}
          alt="Profile"
          className="w-8 h-8 rounded-full"
        />
          </div>
        </div>
        <div className="bg-slate-200 border-slate-300 rounded flex justify-between items-center border-2">
          <div>
            <h1 className="text-xl m-4">Apply a skin to your profile</h1>
          </div>
          <div className="flex items-center">
            <button className="p-2 bg-white border border-black rounded-lg text-sm flex items-center">
              <FiPlus size={14} className="mr-1" />
              Custom
            </button>
            <button className="mx-4 px-8 py-2 bg-black text-sm text-white rounded">
              Save
            </button>
          </div>
        </div>

        {/* Submain content */}
        <div className="flex flex-row gap-8 py-2 flex-wrap">
          <div className="bg-white p-2 rounded  w-4/12">
            <div className="grid grid-rows-3 gap-1">
              {/* Solids */}
              <div className="mb-3">
                <h3 className="font-semibold mb-2">Solids</h3>
                <div className="grid grid-cols-7 gap-2">
                  {[
                    { name: "black", class: "bg-black" },
                    { name: "gray", class: "bg-gray-400" },
                    { name: "yellow", class: "bg-yellow-400" },
                    { name: "green", class: "bg-green-400" },
                    { name: "blue", class: "bg-blue-400" },
                    { name: "pink", class: "bg-pink-400" },
                    { name: "purple", class: "bg-purple-400" },
                    { name: "red", class: "bg-red-400" },
                    { name: "orange", class: "bg-orange-400" },
                    { name: "indigo", class: "bg-indigo-400	" },
                    { name: "indigo", class: "bg-fuchsia-400	" },
                  ].map((color, index) => (
                    <div
                      key={index}
                      className={`w-10 border border-black h-10 ${color.class} cursor-pointer`}
                      onClick={() => handleSolidColorClick(color.name)}
                    ></div>
                  ))}
                </div>
              </div>

              {/* Linear Gradients */}
              <div className="mb-3">
                <h3 className="font-semibold mb-2">Linear Gradients</h3>
                <div className="grid grid-cols-7 gap-2">
                  {[
                    "black",
                    "gray",
                    "yellow",
                    "green",
                    "blue",
                    "pink",
                    "purple",
                    "red",
                    "orange",
                    "indigo",
                    "fuchsia",
                  ].map((gradientColor, index) => (
                    <div
                      key={index}
                      className="w-10 h-10 cursor-pointer"
                      style={{
                        backgroundImage: `linear-gradient(to left, ${gradientColor}, #ffffff)`,
                        border: "1px solid black", // Example border for visibility
                      }}
                      onClick={() =>
                        handleLinearGradientClick(
                          `linear-gradient(to left, ${gradientColor}, #ffffff)`
                        )
                      }
                    ></div>
                  ))}
                </div>
              </div>

              {/* Radial Gradients */}
              <div className="mb-3">
                <h3 className="font-semibold mb-2">Radial Gradients</h3>
                <div className="grid grid-cols-7 gap-2">
                  {[
                    "black",
                    "gray",
                    "yellow",
                    "green",
                    "blue",
                    "pink",
                    "purple",
                    "red",
                    "orange",
                    "indigo",
                    "fuchsia",
                  ].map((gradientColor, index) => (
                    <div
                      key={index}
                      className="w-10 border border-black h-10 cursor-pointer"
                      style={{
                        background: `radial-gradient(circle, ${gradientColor} 0%, ${gradientColor} 35%, rgba(255,255,255,0) 100%)`,
                      }}
                      onClick={() =>
                        handleRadialGradientClick(
                          `radial-gradient(circle, ${gradientColor} 0%, ${gradientColor} 35%, rgba(255,255,255,0) 100%)`
                        )
                      }
                    ></div>
                  ))}
                </div>
              </div>

              {/* Foreground Color */}
              <div>
                <h3 className="font-semibold mb-2">Foreground Color</h3>
                <div className="flex gap-1">
                  {["black", "white"].map((color, index) => (
                    <div
                      key={index}
                      className={`w-8 border border-black h-8 bg-${color} cursor-pointer`}
                      onClick={() => handleForegroundColorClick(color)}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Profile Display */}
          <div className=" shadow p-2 border-4 border-double	rounded w-7/12">
          <div className="bg-white rounded" style={{ background: themeColor.value }}>   {/*Important line */}
            <div className="border  min-h-48 max-h-48	relative rounded-lg  overflow-hidden">
            <Image
        src={bg_wallpaper}
        alt="bg_wallpaper"
        className="bg-black w-full h-full object-cover"
    fill={true}
      />
          </div>
              <div className="p-5 flex justify-left items-left">
                <div className="flex items-left flex-col">
                  <div className="text-left z-10">
                    <Image
                      src={profile}
                      alt="profile-pic"
                      className="w-24 h-24 border-double	 border-2	border-black bg-white p-1 rounded-full mb-4"
                      style={{ marginTop: "-70px" }}
                      quality={100} 
                    />
                    <p className="mt-1 text-3xl	font-bold"style={{ color: foregroundColor }}>Prabhu Satyam</p>
                    <span className="mt-1 font-medium	italic"style={{ color: foregroundColor }}>Full-Stack Developer </span>
                    <span> || </span>
                    <span className="mt-1 text-sky-600">prabhusatyam4.4@gmail.com </span>
                  </div>
                  <div
                    className="p-4 shadow-md shadow-gray-500 rounded-lg mt-4"
                  >
                    <p style={{ color: foregroundColor }}>
                      I am a full-stack developer skilled in the MERN stack,
                      specializing in MongoDB, Express.js, React, Node.js, and
                      also proficient in Next.js for building robust and
                      efficient web applications. My skills encompass both
                      front-end and back-end development, allowing me to create
                      intuitive user interfaces and robust server-side logic. I
                      enjoy leveraging JavaScript and related technologies to
                      build responsive and efficient solutions that meet the
                      demands of modern web development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
