import React, { use, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../Auth/AuthContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const CreateEvents = () => {
  const [eventDate, setEventDate] = useState(null);
  const { user } = use(AuthContext);
  const navigate = useNavigate();

  const handleCreatEvent = (e) => {
    e.preventDefault();
    const formData = {
      title: e.target.title.value,
      description: e.target.description.value,
      eventType: e.target.select.value,
      thumbnailUrl: e.target.imageUrl.value,
      eventDate: e.target.date.value,
      location: e.target.location.value,
      createdBy: user.email,
      photoURL: user.photoURL,
      displayName: user.displayName,
    };

    fetch("https://social-events-weld.vercel.app/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate("/upcomming_events");
        toast.success("Event Created Successful !");
      })
      .catch((error) => {
        toast.error("Event does Not Create❌ ");
        console.log(error);
      });
  };

  if(!user){
    return navigate('/login')
  }

  return (
    <div className="max-w-2xl mx-auto p-6 border border-gray-200 shadow-md  dark:bg-[#1c1c1f]  rounded-lg my-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Create Event</h2>

      <form onSubmit={handleCreatEvent} className="flex flex-col gap-4">
        {/* Event Title */}
        <div>
          <label className="block font-medium mb-1">Event Title</label>
          <input
            type="text"
            name="title"
            required
            placeholder="Enter event title"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block font-medium mb-1">Description</label>
          <textarea
            name="description"
            required
            placeholder="Enter event description"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Event Type Dropdown */}
        <div>
          <label className="block font-medium mb-1">Event Type</label>
          <select
            required
            name="select"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-[#1c1c1f]"
          >
            <option value="">Select Event Type</option>
            <option value="cleanup">Cleanup</option>
            <option value="plantation">Plantation</option>
            <option value="donation">Donation</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Thumbnail URL */}
        <div>
          <label className="block font-medium mb-1">Thumbnail Image URL</label>
          <input
            type="text"
            name="imageUrl"
            required
            placeholder="Enter thumbnail image URL"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Location */}
        <div>
          <label className="block font-medium mb-1">Location</label>
          <input
            type="text"
            name="location"
            required
            placeholder="Enter location"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Event Date */}
        <div>
          <label className="block font-medium mb-1">Event Date</label>
          <DatePicker
            selected={eventDate}
            onChange={(date) => setEventDate(date)}
            minDate={new Date()}
            name="date"
            required
            placeholderText="Select event date"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition cursor-pointer"
        >
          Create Event
        </button>
      </form>
    </div>
  );
};

export default CreateEvents;
