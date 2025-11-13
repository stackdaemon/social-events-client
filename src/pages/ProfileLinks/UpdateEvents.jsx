import React, { useState } from "react";
import DatePicker from "react-datepicker";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router";

const UpdateEvents = () => {
  const data = useLoaderData();
  const navigate = useNavigate();
  const event = data.result;

  const [selectedDate, setSelectedDate] = useState(
    event?.eventDate ? new Date(event.eventDate) : null
  );

  const handleUpdate = (e) => {
    e.preventDefault();
    const formData = {
      title: e.target.title.value,
      description: e.target.description.value,
      eventType: e.target.select.value,
      thumbnailUrl: e.target.imageUrl.value,
      eventDate: selectedDate || event.eventDate, 
      location: e.target.location.value,
    };

    fetch(`https://social-events-weld.vercel.app/events/${event._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Successfully Updated!");
        navigate("/manage_event");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-[#1c1c1f] border dark:border-gray-700 rounded-lg my-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Update Event</h2>

      <form onSubmit={handleUpdate} className="flex flex-col gap-4">
        {/* Event Title */}
        <div>
          <label className="block font-medium mb-1">Event Title</label>
          <input
            type="text"
            defaultValue={event.title}
            name="title"
            required
            placeholder="Enter event title"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0b3948]"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block font-medium mb-1">Description</label>
          <textarea
            required
            name="description"
            defaultValue={event.description}
            placeholder="Enter event description"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Event Type Dropdown */}
        <div>
          <label className="block font-medium mb-1 ">Event Type</label>
          <select
            name="select"
            required
            defaultValue={event.eventType}
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
            required
            defaultValue={event.thumbnailUrl}
            name="imageUrl"
            placeholder="Enter thumbnail image URL"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Location */}
        <div>
          <label className="block font-medium mb-1">Location</label>
          <input
            type="text"
            required
            defaultValue={event.location}
            name="location"
            placeholder="Enter location"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Event Date */}
        <div>
          <label className="block font-medium mb-1">Event Date</label>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
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
          Update Event
        </button>
      </form>
    </div>
  );
};

export default UpdateEvents;
