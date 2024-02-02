// src/components/JobCard.js
import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

const JobCard = ({ job, onEdit, deleteJob }) => {
  const { jobTitle, company, applicationDate, status } = job;
 
  return (
    <div className=" bg-amber-50 p-4 rounded-lg  shadow-md ">
      <div className="mb-2">
        <h2 className="text-xl font-semibold">{jobTitle}</h2>
        <p className="text-gray-600">{company}</p>
      </div>
      <div className="flex items-center justify-between mb-2">
        <p className="text-gray-500">{new Date(applicationDate).toLocaleDateString()}</p>
        <span
          className={`text-sm px-2 py-1 rounded ${
            status === 'Open' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
          }`}
        >
          {status}
        </span>
      </div>
      <div className="flex justify-end">
        <Link
         to={`/edit/${job._id}`}
          className="text-blue-500 hover:underline mr-2"
        >
          Edit
        </Link>
        <button
          onClick={() => deleteJob(job._id)}
          className="text-red-500 hover:underline"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default JobCard;
