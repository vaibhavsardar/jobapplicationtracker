import React, { useState, useEffect } from 'react';
import axios from 'axios';
import JobCard from './JobCard';

const ApplicationsList = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    // Fetch applications from the backend
    axios.get('jobapplicationtracker.vercel.app/api/applications')
      .then(response => setApplications(response.data))
      .catch(error => console.error('Error fetching applications:', error));
  }, []);

  const deleteApplication = (id) => {
    // Delete application from the backend
    console.log("del",id)
    axios.get(`jobapplicationtracker.vercel.app/api/applications/delete/${id}`)
      .then(response => {
        console.log(response.data);
        // Update the local state after deletion
        setApplications(applications.filter(app => app._id !== id));
      })
      .catch(error => console.error('Error deleting application:', error));
  };

  return (
    <div>
      {/* <h1>Job Applications</h1> */}
      <div className='grid grid-cols-3 gap-3 p-4 '>
        {applications.map(application => (
          <JobCard job={application} deleteJob={deleteApplication}/>
        ))}
      </div>
    </div>
  );
};

export default ApplicationsList;
