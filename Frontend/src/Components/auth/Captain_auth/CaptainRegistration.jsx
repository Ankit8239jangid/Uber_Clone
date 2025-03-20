import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
const CaptainRegistration = () => {
  const navigate = useNavigate()

const { captainSignupFormData, handleCaptainSignupChange, handleCaptainSignup } = useAuth();


  return (
    <div className="min-h-screen bg-red-300 flex flex-col md:flex-row items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full md:w-1/2 max-w-md space-y-8 bg-white p-8 rounded-lg shadow-lg">
        <div>
          <h2 className="text-center text-3xl font-bold text-gray-900">Captain Registration</h2>
          <p className="mt-2 text-center text-sm text-gray-600">Join our platform as a captain and start driving!</p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleCaptainSignup}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">First Name</label>
              <input name="firstname" type="text" value={captainSignupFormData.firstname} onChange={handleCaptainSignupChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="John" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Last Name</label>
              <input name="lastname" type="text" value={captainSignupFormData.lastname} onChange={handleCaptainSignupChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Doe" required />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input name="email" type="email" value={captainSignupFormData.email} onChange={handleCaptainSignupChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="john.doe@example.com" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input name="password" type="password" value={captainSignupFormData.password} onChange={handleCaptainSignupChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="********" required />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Vehicle Color</label>
              <input name="vehicleColor" type="text" value={captainSignupFormData.vehicle.vehicleColor} onChange={handleCaptainSignupChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Blue" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">License Plate</label>
              <input name="vehiclePlate" type="text" value={captainSignupFormData.vehicle.vehiclePlate} onChange={handleCaptainSignupChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="ABC-123" required />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Vehicle Capacity</label>
              <input name="vehicleCapacity" type="text" value={captainSignupFormData.vehicle.vehicleCapacity} onChange={handleCaptainSignupChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="4" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Vehicle Type</label>
              <select name="vehicleType" value={captainSignupFormData.vehicle.vehicleType} onChange={handleCaptainSignupChange} className="mt-1 block px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm w-full">
                <option value="car">Car</option>
                <option value="motorcycle">Motorcycle</option>
                <option value="auto">Auto</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Location (Optional)</label>
            <input name="location" type="text" value={captainSignupFormData.location} onChange={handleCaptainSignupChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="City, State" />
          </div>
          <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Register as Captain
          </button>
        </form>
        <div className="text-center text-sm">
          <span className="text-gray-600">Already have an account?</span>
          <button onClick={() => navigate('/Captain-login')} className="text-blue-500 hover:underline ml-1">Go to Login</button>
        </div>
      </div>

    </div>
  );
};

export default CaptainRegistration;
