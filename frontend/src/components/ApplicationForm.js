import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const ApplicationForm = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [company, setCompany] = useState('');
  const [applicationDate, setApplicationDate] = useState(new Date().toISOString().substr(0, 10));
  const [status, setStatus] = useState('Pending');

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      // Fetch application details for editing
      axios.get(`http://localhost:5000/api/applications/${id}`)
        .then(response => {
          const application = response.data;
          setJobTitle(application.jobTitle);
          setCompany(application.company);
          setApplicationDate(application.applicationDate);
          setStatus(application.status);
        })
        .catch(error => console.error('Error fetching application details:', error));
    }
  }, [id]);

  const submitForm = (e) => {
    e.preventDefault();
    
    const applicationData = { jobTitle, company, applicationDate, status };
    console.log(applicationData)

    if (id) {
      // Update existing application
      axios.post(`http://localhost:5000/api/applications/update/${id}`, applicationData)
        .then(response => console.log(response.data))
        .catch(error => console.error('Error updating application:', error));
    } else {
      // Add new application
      axios.post('http://localhost:5000/api/applications/add', applicationData)
        .then(response => console.log(response.data))
        .catch(error => console.error('Error adding new application:', error));
    }

    navigate('/');
  };

  return (
    <div>
      {/* <h3>Job Application Form</h3> */}
     
      <form onSubmit={submitForm} className="max-w-md mx-auto mt-10">
  <div className="mb-4">
    <label htmlFor="jobTitle" className="block text-gray-700 text-sm font-bold mb-2">
      Job Title:
    </label>
    <input
      type="text"
      id="jobTitle"
      value={jobTitle}
      onChange={(e) => setJobTitle(e.target.value)}
      required
      className="w-full border rounded-md px-3 py-2"
    />
  </div>
  <div className="mb-4">
    <label htmlFor="company" className="block text-gray-700 text-sm font-bold mb-2">
      Company:
    </label>
    <input
      type="text"
      id="company"
      value={company}
      onChange={(e) => setCompany(e.target.value)}
      required
      className="w-full border rounded-md px-3 py-2"
    />
  </div>
  <div className="mb-4">
    <label htmlFor="applicationDate" className="block text-gray-700 text-sm font-bold mb-2">
      Application Date:
    </label>
    <input
      type="date"
      id="applicationDate"
      value={applicationDate}
      onChange={(e) => setApplicationDate(e.target.value)}
      required
      className="w-full border rounded-md px-3 py-2"
    />
  </div>
  <div className="mb-4">
    <label htmlFor="status" className="block text-gray-700 text-sm font-bold mb-2">
      Status:
    </label>
    <select
      id="status"
      value={status}
      onChange={(e) => setStatus(e.target.value)}
      required
      className="w-full border rounded-md px-3 py-2"
    >
      <option  value="Pending">Pending</option>
      <option value="In Progress">In Progress</option>
      <option value="Completed">Completed</option>
    </select>
  </div>
  <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-md">
    Save
  </button>
</form>


    </div>
  );
};

export default ApplicationForm;
