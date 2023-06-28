import React from "react";
import Header from "./Header";
import Navbar from "./NavBar";
const Registration = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div class="flex items-center justify-center h-screen bg-gray-100">
        <form class="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 w-1/3">
          <h2 class="text-3xl font-bold mb-6 text-center">Sign Up</h2>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="employeeName"
            >
              Employee Name
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="employeeName"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="employeeContact"
            >
              Contact
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="employeeContact"
              type="tel"
              placeholder="Enter your contact number"
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="employeeEmail"
            >
              Email
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="employeeEmail"
              type="email"
              placeholder="Enter your email address"
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="confirmEmail"
            >
              Confirm Email
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="confirmEmail"
              type="email"
              placeholder="Confirm your email address"
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="companyName"
            >
              Company Name
            </label>
            <select
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="companyName"
            >
              <option value="">Select a company</option>
              <option value="Genzeon Pune">Genzeon Pune</option>
              <option value="Genzeon Hyderabad">Genzeon Hyderabad</option>
            </select>
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="role"
            >
              Role
            </label>
            <select
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="role"
            >
              <option value="">Select a role</option>
              <option value="HR admin">HR admin</option>
              <option value="HR">HR</option>
              <option value="Employee">Employee</option>
            </select>
          </div>
          <div class="flex items-center justify-center">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Registration;
