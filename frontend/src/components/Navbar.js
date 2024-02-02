// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className=" bg-slate-600 p-4   border-b-[3px] border-black">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-semibold ml-5">Job Application Tracker</h1>
        <Link
           to="/create"
          className="bg-white text-blue-500 px-4 mr-20 py-2 rounded-md hover:bg-blue-100"
        >
          Create Application
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
