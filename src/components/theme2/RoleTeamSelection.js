"use client"
import React, { useState } from 'react';

const RoleTeamSelection = () => {
  const [role, setRole] = useState('');
  const [team1, setTeam1] = useState('');
  const [team2, setTeam2] = useState('');
  const [team3, setTeam3] = useState('');

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleTeam1Change = (e) => {
    setTeam1(e.target.value);
  };

  const handleTeam2Change = (e) => {
    setTeam2(e.target.value);
  };

  const handleTeam3Change = (e) => {
    setTeam3(e.target.value);
  };

  return (
    <div className="w-1/3">
      
      <div className="flex flex-col mb-6">
        <p className="text-lg text-slate-400 uppercase">Role</p>
        <div className="space-y-2 bg-gray-100 w-96 border rounded-md focus:outline-none">
        <select
          onChange={handleRoleChange}
          value={role}
          className='my-1 p-4 bg-gray-100'
        >
          <option value="">Select Role</option>
          <option value="Developer">Frontend</option>
          <option value="Designer">Backend</option>
          <option value="Manager">Fullstack</option>  
        </select>
        </div>

      </div>


      <div className="flex flex-col mb-6">
        <p className="text-lg text-slate-400 uppercase">Team</p>
        <div className="flex w-96 flex-col space-y-2">
          <select
            className="my-1 p-4 border bg-gray-100 border-gray-300 rounded-md focus:outline-none"
            onChange={handleTeam1Change}
            value={team1}
          >
            <option value="">Select Team 1</option>
            <option value="Team A">Team A</option>
            <option value="Team B">Team B</option>
            <option value="Team C">Team C</option>
            
          </select>
          <br />
          <select
            className="my-1 p-4 border bg-gray-100 border-gray-300 rounded-md focus:outline-none"
            onChange={handleTeam2Change}
            value={team2}
          >
            <option value="">Select Team 2</option>
            <option value="Team X">Team X</option>
            <option value="Team Y">Team Y</option>
            <option value="Team Z">Team Z</option>
            
          </select>
          <br />
          <select
            className="my-1 p-4 w-f border bg-gray-100 border-gray-300 rounded-md focus:outline-none"
            onChange={handleTeam3Change}
            value={team3}
          >
            <option value="">Select Team 3</option>
            <option value="Team I">Team I</option>
            <option value="Team II">Team II</option>
            <option value="Team III">Team III</option>
            
          </select>
        </div>
      </div>
    </div>
  );
};

export default RoleTeamSelection;
