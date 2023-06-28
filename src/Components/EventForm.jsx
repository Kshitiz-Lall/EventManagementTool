import React, { useState } from "react";
import EventDto from "../models/EventDto";

const EventCreationForm = () => {
  const [event, setEvent] = useState(new EventDto());

  const handleChange = (e) => {
    const { name, value } = e.target;

    setEvent((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  const handleSubmit = (e) => {};

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">Create Event</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="eventName"
            className="block text-gray-700 font-bold mb-2"
          >
            Event Name:
          </label>
          <input
            type="text"
            id="eventName"
            name="eventName"
            className="w-full border border-gray-300 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
            // value={eventName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="eventStartDate"
            className="block text-gray-700 font-bold mb-2"
          >
            Event Start Date:
          </label>
          <input
            type="date"
            id="eventStartDate"
            name="eventStartDate"
            className="w-full border border-gray-300 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
            // value={eventStartDate}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="eventEndDate"
            className="block text-gray-700 font-bold mb-2"
          >
            Event End Date:
          </label>
          <input
            type="date"
            id="eventEndDate"
            name="eventEndDate"
            className="w-full border border-gray-300 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
            //value={eventEndDate}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="eventStartTime"
            className="block text-gray-700 font-bold mb-2"
          >
            Event Start Time:
          </label>
          <input
            type="time"
            id="eventStartTime"
            name="eventStartTime"
            className="w-full border border-gray-300 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
            //value={eventStartTime}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="eventEndTime"
            className="block text-gray-700 font-bold mb-2"
          >
            Event End Time:
          </label>
          <input
            type="time"
            id="eventEndTime"
            name="eventEndTime"
            className="w-full border border-gray-300 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
            // value={eventEndTime}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="eventVenue"
            className="block text-gray-700 font-bold mb-2"
          >
            Event Venue:
          </label>
          <input
            type="text"
            id="eventVenue"
            name="eventVenue"
            className="w-full border border-gray-300 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
            // value={eventVenue}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="eventDescription"
            className="block text-gray-700 font-bold mb-2"
          >
            Event Description:
          </label>
          <textarea
            id="eventDescription"
            name="eventDescription"
            className="w-full border border-gray-300 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
            // value={eventDescription}
            onChange={handleChange}
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Create Event
        </button>
      </form>
    </div>
  );
};

export default EventCreationForm;
