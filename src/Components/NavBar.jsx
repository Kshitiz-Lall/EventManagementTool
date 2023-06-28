import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="/" className="text-white text-xl  font-bold">
              Event Managment
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="#"
                className="text-white hover:bg-blue-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Pending Event
              </a>
              <a
                href="createevent"
                className="text-white hover:bg-blue-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Create Event
              </a>
              <a
                href="/profile"
                className="text-white hover:bg-blue-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                View Profiles
              </a>
              <a
                href="/aboutus"
                className="text-white hover:bg-blue-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                About Us
              </a>
              <a
                href="#"
                className="text-white hover:bg-blue-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
