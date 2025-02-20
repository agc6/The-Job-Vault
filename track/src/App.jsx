import React, { useState, useEffect } from "react";
import "./App.css";
import { LuTrash, LuPlus } from "react-icons/lu";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import getDropdownStyle from "./utils/getDropdownStyle";

// Initial state with separate rows
const initialApplications = [
  { company: "", jobTitle: "", appType: "", locationType: "", jobType: "", salary: "", website: "", status: "", favorite: false },
  { company: "", jobTitle: "", appType: "", locationType: "", jobType: "", salary: "", website: "", status: "", favorite: false },
  { company: "", jobTitle: "", appType: "", locationType: "", jobType: "", salary: "", website: "", status: "", favorite: false },
  { company: "", jobTitle: "", appType: "", locationType: "", jobType: "", salary: "", website: "", status: "", favorite: false },
  { company: "", jobTitle: "", appType: "", locationType: "", jobType: "", salary: "", website: "", status: "", favorite: false },
  { company: "", jobTitle: "", appType: "", locationType: "", jobType: "", salary: "", website: "", status: "", favorite: false },
];

function App() {
  // Load from localStorage or use initial state
  const [applications, setApplications] = useState(() => {
    const savedData = localStorage.getItem("jobApplications");
    return savedData ? JSON.parse(savedData) : initialApplications;
  });

  // Save to localStorage on change
  useEffect(() => {
    localStorage.setItem("jobApplications", JSON.stringify(applications));
  }, [applications]);

  const handleInputChange = (index, field, value) => {
    const updatedApplications = [...applications];
    updatedApplications[index][field] = value;
    setApplications(updatedApplications);
  };

  const addRow = () => {
    setApplications([...applications, { ...initialApplications[0] }]);
  };

  const deleteRow = (index) => {
    const updatedApplications = applications.filter((_, i) => i !== index);
    setApplications(updatedApplications);
  };

  const toggleFavorite = (index) => {
    const updatedApplications = [...applications];
    updatedApplications[index].favorite = !updatedApplications[index].favorite;

    // Sort favorites first
    updatedApplications.sort((a, b) => b.favorite - a.favorite);

    setApplications(updatedApplications);
  };

  // Reset function
  const resetApplications = () => {
    setApplications(initialApplications);
    localStorage.removeItem("jobApplications"); // Clear local storage
  };

  return (
    <div className="App text-gray-600 bg-gradient-to-br from-blue-50 to-purple-50 relative">
      <h1 className="font-poppins text-4xl font-bold text-gray-600 my-6">
        The Job Vault
      </h1>
      <div className="table-container rounded-3xl shadow-md overflow-x-auto bg-white font-poppins py-7 px-7">
        <div className="table grid-cols-9 gap-2 text-gray-700 mb-4 font-semibold">
          <div>Company</div>
          <div>Job Title</div>
          <div>Method</div>
          <div>Location Type</div>
          <div>Job Type</div>
          <div>Salary</div>
          <div>Website</div>
          <div>Status</div>
          <div>Actions</div>
        </div>
        {applications.map((application, index) => (
          <div key={index} className="row grid grid-cols-9 gap-2 items-center py-3 border-b border-gray-300">
            <input type="text" className="rounded-md px-2 py-2 text-sm" value={application.company}
              onChange={(e) => handleInputChange(index, "company", e.target.value)} placeholder="Enter company"/>
            <input type="text" className="rounded-md px-2 py-2 text-sm" value={application.jobTitle}
              onChange={(e) => handleInputChange(index, "jobTitle", e.target.value)} placeholder="Enter job title"/>
            <select
            className="rounded-md px-2 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
            value={application.appType}
            onChange={(e) => handleInputChange(index, "appType", e.target.value)}
            style={getDropdownStyle(application.appType)}
          >
              <option value="">Select</option>
              <option value="linkedin" className="bg-blue-100 text-blue-600">LinkedIn</option>
              <option value="company site" className="bg-green-100 text-green-500">Company Site</option>
              <option value="other" className="bg-purple-100 text-purple-500">Other</option>
            </select>
            <select
            className="rounded-md px-2 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
            value={application.locationType}
            onChange={(e) => handleInputChange(index, "locationType", e.target.value)}
            style={getDropdownStyle(application.locationType)}
          >
            <option value="">Select</option>
            <option value="remote" className="bg-indigo-100 text-indigo-600">Remote</option>
            <option value="on-site" className="bg-green-100 text-green-600">On-Site</option>
            <option value="hybrid" className="bg-red-100 text-red-600">Hybrid</option>
          </select>
          <select
              className=" rounded-md px-2 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
              value={application.jobType}
              onChange={(e) => handleInputChange(index, "jobType", e.target.value)}
              style={getDropdownStyle(application.jobType)}
            >
              <option value="">Select</option>
              <option value="internship" className="bg-blue-100 text-blue-600">Internship</option>
              <option value="full-time" className="bg-green-100 text-green-600">Full-time</option>
              <option value="part-time" className="bg-orange-100 text-orange-600">Part-Time</option>
              <option value="contract" className="bg-purple-100 text-purple-600">Contract</option>
            </select>
            <input type="text" className="rounded-md px-2 py-2 text-sm" value={application.salary}
              onChange={(e) => handleInputChange(index, "salary", e.target.value)} placeholder="Enter salary"/>
            <input type="url" className="rounded-md px-2 py-2 text-sm" value={application.website}
              onChange={(e) => handleInputChange(index, "website", e.target.value)} placeholder="Enter website link"/>
            <select
            className="rounded-md px-2 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
            value={application.status}
            onChange={(e) => handleInputChange(index, "status", e.target.value)}
            style={getDropdownStyle(application.status)}
          >
              <option value="">Select</option>
              <option value="waiting for reply" className="bg-pink-100 text-pink-600">Waiting for Reply</option>
              <option value="no reply" className="bg-gray-100 text-gray-600">No Reply</option>
              <option value="rejected" className="bg-red-100 text-red-600">Rejected</option>
              <option value="rejected myself" className="bg-orange-100 text-orange-600">Rejected Myself</option>
              <option value="interviewing" className="bg-blue-100 text-blue-600">Interviewing</option>
              <option value="negotiating" className="bg-green-100 text-green-600">Negotiating</option>
              <option value="accepted" className="bg-purple-100 text-purple-600">Accepted</option>
            </select>
            <div className="actions flex items-center space-x-2">
              <button className="text-teal-400 hover:text-teal-500" onClick={() => toggleFavorite(index)}>
                {application.favorite ? <AiFillStar /> : <AiOutlineStar />}
              </button>
              <button className="text-red-500 hover:text-red-700" onClick={() => deleteRow(index)}>
                <LuTrash />
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {/* Buttons */}
      <div className="fixed bottom-4 right-4 flex space-x-3">
        <button className="bottom-4 right-4 bg-indigo-600 text-white p-5 rounded-full shadow-lg hover:bg-indigo-700 focus:outline-none"
          onClick={addRow}>
          <LuPlus />
        </button>
        <button className="bg-red-600 text-white p-4 rounded-full shadow-lg hover:bg-red-700"
          onClick={resetApplications}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
