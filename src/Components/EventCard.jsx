import React from "react";
import Navbar from "./NavBar";

const EventCard = ({ event, user }) => {
  function formateDate(datestring) {
    const date = new Date(datestring);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  }
  return (
    <div>
      {" "}
      <div className="m-auto max-w-sm rounded place-items-center overflow-hidden shadow-lg">
        {/* <img className="w-full" src={} alt={} /> */}
        <div className="px-4 py-8">
          <div className="text-gray-900 text-xl mb-2">
            Event Name: {event.eventName}
          </div>
          <p className="text-gray-700 text-base mb-2">
            Event Description: {event.eventDescription}
          </p>
          <p className="text-gray-600 text-sm mb-2">
            Event Start Date: {formateDate(event.eventStartDate)}
          </p>
          <p className="text-gray-600 text-sm mb-2">
            Event End Date: {formateDate(event.eventEndDate)}
          </p>
          <p className="text-gray-600 text-sm mb-2">
            Event Start Time: {event.eventStartTime}
          </p>
          <p className="text-gray-600 text-sm mb-2">
            Event End Time: {event.eventEndTime}
          </p>
          <p className="text-gray-600 text-sm mb-2">
            Event Venue: {event.eventVenue}
          </p>
        </div>
        <div className="px-6 py-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Enroll Event
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
