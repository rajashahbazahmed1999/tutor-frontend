import React from 'react'



import { useState } from "react";

function MyProfile() {
  const [name, setName] = useState("Admin User");
  const [email, setEmail] = useState("admin@gmail.com");
  const [role] = useState(localStorage.getItem("role"));

  const handleSave = () => {
    alert("Profile Updated Successfully!");
  };

  return (
    
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-xl shadow w-[400px]">

        <h2 className="text-xl font-bold mb-4 text-center">
          My Profile
        </h2>

        <div className="space-y-4">

     
          <div>
            <label className="text-sm text-gray-600">Name</label>
            <input
              type="text"
              className="w-full p-3 border rounded-lg"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Email</label>
            <input
              type="email"
              className="w-full p-3 border rounded-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

         
          <div>
            <label className="text-sm text-gray-600">Role</label>
            <input
              type="text"
              className="w-full p-3 border rounded-lg bg-gray-100"
              value={role}
              readOnly
            />
          </div>

          
          <button
            onClick={handleSave}
            className="w-full bg-blue-500 text-white py-3 rounded-lg"
          >
            Save Changes
          </button>

        </div>

      </div>

    </div>
  );
}

export default MyProfile;