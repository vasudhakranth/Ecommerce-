// forgotPassword.js
import React, { useState } from "react";
import { FaLock, FaArrowLeft } from "react-icons/fa";

const ForgotPassword = () => {
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.newPassword !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    alert("Password Reset Successful!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100">
      <div className="bg-white w-full max-w-md p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-green-600 text-center mb-6">
          Reset Password
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* New Password */}
          <div className="flex items-center border border-green-300 rounded-md px-3">
            <FaLock className="text-green-400 mr-2" />
            <input
              type="password"
              name="newPassword"
              placeholder="New Password"
              value={formData.newPassword}
              onChange={handleChange}
              className="w-full py-2 focus:outline-none"
              required
            />
          </div>

          {/* Confirm Password */}
          <div className="flex items-center border border-green-300 rounded-md px-3">
            <FaLock className="text-green-400 mr-2" />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full py-2 focus:outline-none"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition font-semibold"
          >  
            Submit
          </button>
        </form>

        {/* Back to Login */}
        <div className="text-center mt-4">
          <a
            href="#"
            className="inline-flex items-center text-green-600 hover:text-green-800 font-medium"
          >
            <FaArrowLeft className="mr-2" />
            Back to Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
