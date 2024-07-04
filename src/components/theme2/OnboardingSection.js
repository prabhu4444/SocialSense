"use client"
import React, { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";

const OnboardingSection = () => {
  const [onboardingRequired, setOnboardingRequired] = useState(false);
  const [scriptStatuses, setScriptStatuses] = useState([
    { name: "Office Tour", status: false, percentage: 100 },
    { name: "Management Inventory", status: false, percentage: 20 },
    { name: "Work Tools", status: false, percentage: 0 },
    { name: "Meet Your Colleogues", status: false, percentage: 0 },
    { name: "Duties Journal", status: false, percentage: 0 },
    { name: "Request Handling", status: false, percentage: 0 },
    { name: "Activity Tracker", status: false, percentage: 0 },
  ]);

  const toggleOnboardingRequired = () => {
    setOnboardingRequired(!onboardingRequired);
  };

  const toggleScriptStatus = (index) => {
    const newStatuses = [...scriptStatuses];
    newStatuses[index].status = !newStatuses[index].status;
    setScriptStatuses(newStatuses);
  };

  return (
    <div className="flex flex-col items-center">
      <p className="mt-2 text-lg text-slate-400 uppercase">Onboarding</p>
      <div className="flex items-center w-full bg-gray-200 m-4 rounded-xl justify-around">
        <div className="flex flex-col items-center">
          <div className="text-gray-700">Starts on </div>
          <div className="text-gray-700">21.05.2022 </div>
        </div>
        <FaCalendarAlt className="text-gray-600 mr-2" />
      </div> 
      <div className="flex items-center mt-4">
        <button
          onClick={toggleOnboardingRequired}
          className={`relative inline-flex items-center h-6 rounded-full w-11 ${
            onboardingRequired ? "bg-blue-500" : "bg-gray-300"
          }`}
        >
          <span
            className={`transform transition ease-in-out duration-200 ${
              onboardingRequired ? "translate-x-6" : "translate-x-1"
            } inline-block w-4 h-4 bg-white rounded-full`}
          ></span>
        </button>
        <span className="ml-4">Onboarding Required</span>
      </div>
      <p className="px-4 mt-8 text-gray-600 mr-64">Current Status</p>
      <div className="flex flex-col items-center mt-4 w-full px-4">
      
        <div className="flex items-center justify-between w-full">
        <button className="bg-green-200 p-2 rounded-lg">Onboarding</button>
          <div className="w-2/3 bg-gray-200 shadow-lg rounded-full h-2.5 dark:bg-gray-200">
            <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: "35%" }}></div>
          </div>
        </div>
        <a href="#" className="mt-2 font-semibold text-blue-500">
          View Answers
        </a>
      </div>
      <div className="mt-6 w-full px-4">
        <p className="text-lg text-slate-400 uppercase mb-4">Onboarding Script</p>
        <div className="grid grid-cols-1 gap-4">
        {scriptStatuses.map((script, index) => (
  <div key={index}>
    <div className="flex items-center justify-between">
      <div className="flex items-center p-2">
        <button
          onClick={() => toggleScriptStatus(index)}
          className={`relative inline-flex items-center h-6 rounded-full w-11 ${
            script.status ? "bg-blue-500" : "bg-gray-300"
          }`}
        >
          <span
            className={`transform transition ease-in-out duration-200 ${
              script.status ? "translate-x-6" : "translate-x-1"
            } inline-block w-4 h-4 bg-white rounded-full`}
          ></span>
        </button>
        <span className="ml-2">{script.name}</span>
      </div>
      <span>{script.percentage}%</span>
    </div>
    {index < scriptStatuses.length - 1 && <hr className="w-full my-2" />}
  </div>
))}

        </div>
      </div>
    </div>
  );
};

export default OnboardingSection;


