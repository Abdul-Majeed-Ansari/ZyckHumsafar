import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    profileFor: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: '',
    dateOfBirth: '',
    maritalStatus: '',
    country: '',
    state: '',
    city: '',
    phone: '',
    hearAboutUs: '',
    termsAccepted: false,
  });

  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.termsAccepted) {
      alert('Please accept the terms and conditions to proceed.');
      return;
    }
    console.log('Form Data Submitted:', formData);
    // Redirect to a thank-you or dashboard page after signup
    navigate('/dashboard'); // Replace with your desired route
  };

  return (
    <div className="min-h-screen bg-pink-50 flex flex-col items-center py-10">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-pink-600 text-center mb-6">Create an Account</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* First Name and Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-4 focus:ring-pink-300 focus:border-pink-500 p-3"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-4 focus:ring-pink-300 focus:border-pink-500 p-3"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Profile For */}
          <div>
            <label htmlFor="profileFor" className="block text-sm font-medium text-gray-700">
              Profile For
            </label>
            <select
              id="profileFor"
              name="profileFor"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-4 focus:ring-pink-300 focus:border-pink-500 p-3"
              value={formData.profileFor}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="self">Self</option>
              <option value="son">Son</option>
              <option value="daughter">Daughter</option>
              <option value="brother">Brother</option>
              <option value="sister">Sister</option>
              <option value="relative">Relative</option>
            </select>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-4 focus:ring-pink-300 focus:border-pink-500 p-3"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password and Confirm Password */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-4 focus:ring-pink-300 focus:border-pink-500 p-3"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-4 focus:ring-pink-300 focus:border-pink-500 p-3"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Gender</label>
            <div className="mt-2 flex items-center space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  className="form-radio h-5 w-5 text-pink-600"
                  onChange={handleChange}
                  required
                />
                <span className="ml-2 text-gray-700">Male</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  className="form-radio h-5 w-5 text-pink-600"
                  onChange={handleChange}
                  required
                />
                <span className="ml-2 text-gray-700">Female</span>
              </label>
            </div>
          </div>

          {/* Other Fields */}
          {/* Add remaining fields here as per the last implementation */}

          {/* Terms & Conditions */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="termsAccepted"
              name="termsAccepted"
              className="form-checkbox h-5 w-5 text-pink-600"
              checked={formData.termsAccepted}
              onChange={handleChange}
              required
            />
            <label htmlFor="termsAccepted" className="ml-2 text-gray-700 text-sm">
              I agree to the <a href="#" className="text-pink-600 hover:underline">terms and conditions</a>.
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
          >
            Sign Up
          </button>

          {/* Already Have an Account */}
          <div className="text-center mt-4">
            <Link
              to="/login"
              className="text-pink-600 hover:underline text-sm font-medium"
            >
              Already have an account? Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
