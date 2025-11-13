import React, { use } from "react";
import { Link, useLoaderData, useNavigate } from "react-router";
import { AuthContext } from "./Auth/AuthContext";
import toast from "react-hot-toast";

const EventDetails = () => {
  const { user } = use(AuthContext);
  const navigate = useNavigate();
  const data = useLoaderData();
  const event = data.result;

  const handleJoin = (e) => {
    e.preventDefault();
    if (!user) {
      navigate("/login");
      return;
    } else {
      const formData = {
        thumbnailUrl: event.thumbnailUrl,
        title: event.title,
        description: event.description,
        eventType: event.eventType,
        eventDate: event.eventDate,
        location: event.location,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
      };
      fetch("https://social-events-weld.vercel.app/joined-event", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Joined event saved:", data);
          toast.success("Successfull joined !");
          navigate("/joined_event");
        });
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-6 lg:p-8">
      <div className="card bg-base-100 shadow-xl border border-gray-200 rounded-2xl overflow-hidden">
        <div className="flex flex-col md:flex-row gap-8 p-6 md:p-8">
          {/* Image */}
          <div className="shrink-0 w-full md:w-1/2">
            <img
              src={event.thumbnailUrl}
              alt={event.title}
              className="w-full h-72 object-cover rounded-xl shadow-md"
            />
          </div>

          {/* Text Details */}
          <div className="flex flex-col justify-center space-y-4 w-full md:w-1/2">
            <h1 className="text-3xl md:text-4xl font-bold ">{event.title}</h1>

            <div className="flex flex-wrap gap-3">
              <div className="badge badge-lg badge-outline text-green-600 border-green-600 font-medium">
                {event.eventType}
              </div>
              <div className="badge badge-lg badge-outline text-blue-600 border-blue-600 font-medium">
                📍 {event.location}
              </div>
              <div className="badge badge-lg badge-outline text-purple-600 border-purple-600 font-medium">
                📅 {event.eventDate}
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
              {event.description}
            </p>

            <div className="flex gap-3 mt-6">
              <Link to={`/event_details/${event._id}`}>
                <button
                  type="button"
                  onClick={handleJoin}
                  className="btn bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6"
                >
                  Join Event
                </button>
              </Link>
              <button className="btn btn-outline border-gray-300 hover:border-blue-500 hover:text-blue-600 rounded-full px-6">
                Share
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
