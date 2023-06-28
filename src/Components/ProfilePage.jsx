import React, { useEffect, useState } from "react";
import Navbar from "./NavBar";

const ProfileCard = ({ userDto }) => {
  return (
    // <section class="p-3">
    //   <Navbar />
    //   <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
    //     {/* <img
    //       class="w-24 h-24 md:w-48 md:h-auto md:rounded-xl md:rounded-r-none rounded-xl mx-auto "
    //       src={process.env.PUBLIC_URL + "/images/sarah-dayan.jpg"}
    //       alt=""
    //       width="384"
    //       height="512"
    //     /> */}
    //     <div class="pt-6 md:p-8 text-center md:text-left space-y-3 grow">
    //       <figcaption class="font-medium grid md:grid-cols-3 md:gap-6">
    //         <div>First name: {userDto.employeeName}</div>
    //         <div>Email: {userDto.employeeEmail}</div>
    //         <div>username: {userDto.employeeEmail}</div>
    //         <div>Contact: {userDto.employeeContact}</div>
    //         <div>Designation: {userDto.employeeDesignation}</div>
    //         <div>
    //           Company Name:{" "}
    //           {userDto.companyId == 1 ? "Genzeon Pune" : "Genzeon Hyderabad"}
    //         </div>
    //         {/* <div class={`${(user?.role === 'ROLE_STUDENT') ? '' : 'hidden'}`}>
    //           <a href="#" onClick={handleParticipate} class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Enroll</a>
    //         </div> */}
    //       </figcaption>
    //     </div>
    //   </figure>
    // </section>
    <section>
      <Navbar />
      <div class="max-w-md w-full">
        <div class="bg-white dark:bg-slate-800 shadow-xl rounded-lg overflow-hidden">
          <div class="relative">
            <img
              class="w-full h-64 object-cover"
              src={process.env.PUBLIC_URL + "/images/sarah-dayan.jpg"}
              alt="Profile Picture"
            />
            <div class="absolute inset-0 bg-black opacity-50"></div>
            <div class="absolute bottom-0 p-4">
              <h2 class="text-2xl font-semibold text-white">
                First name: {userDto.employeeName}
              </h2>
              <p class="text-gray-300">Email : {userDto.employeeEmail}</p>
              <p class="text-gray-300">Username: {userDto.employeeEmail}</p>
              <p class="text-gray-300">Contact: {userDto.employeeContact}</p>
              <p class="text-gray-300">
                Designation: {userDto.employeeDesignation}
              </p>
              <p class="text-gray-300">
                Company Name:{" "}
                {userDto.companyId == 1 ? "Genzeon Pune" : "Genzeon Hyderabad"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileCard;
