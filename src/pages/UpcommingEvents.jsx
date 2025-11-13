import React, { useState, useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "./Auth/AuthContext";
import Loading from "./Private/Loading";

const UpcommingEvents = () => {
  const { user, loading, setLoading } = useContext(AuthContext);
  const events = useLoaderData();

  //upcoming events
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const upcomingEvents = events.filter((event) => {
    const eventDate = new Date(event.eventDate);
    eventDate.setHours(0, 0, 0, 0);
    return eventDate >= today;
  });

  const [eventss, setEventss] = useState(upcomingEvents);

  // Search handler
  const handleSearch = (e) => {
    e.preventDefault();
    const search_text = e.target.search.value;
    setLoading(true);
    fetch(`https://social-events-weld.vercel.app/search?search=${search_text}`)
      .then((res) => res.json())
      .then((data) => {
        const upcoming = data.filter((event) => {
          const eventDate = new Date(event.eventDate);
          eventDate.setHours(0, 0, 0, 0);
          return eventDate >= today;
        });
        setEventss(upcoming);
        setLoading(false);
      })
      .catch((err) => console.error("Search fetch error:", err));
  };

  const handleType = (e) => {
    e.preventDefault();
    const select_text = e.target.select.value;

    fetch(`https://social-events-weld.vercel.app/select?select=${select_text}`)
      .then((res) => res.json())
      .then((data) => {
        const upcoming = data.filter((event) => {
          const eventDate = new Date(event.eventDate);
          eventDate.setHours(0, 0, 0, 0);
          return eventDate >= today;
        });
        setEventss(upcoming);
      })
      .catch((err) => console.error("Filter fetch error:", err));
  };
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div className="min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Upcoming Events
        </h2>

        <div className="flex items-center justify-end gap-3 pb-5 max-sm:flex-col">
          <form onSubmit={handleSearch}>
            <div className="join">
              <div>
                <label className="input validator join-item">
                  <svg
                    className="h-[1em] opacity-50"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <g
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2.5"
                      fill="none"
                      stroke="currentColor"
                    >
                      <circle cx="11" cy="11" r="8"></circle>
                      <path d="m21 21-4.3-4.3"></path>
                    </g>
                  </svg>
                  <input type="search" name="search" placeholder="Search" />
                </label>
              </div>
              <button className="btn btn-neutral bg-[#00705f] join-item">
                Search
              </button>
            </div>
          </form>

          <form onSubmit={handleType} className="flex items-center">
            <select
              name="select"
              className="border border-gray-400 px-3 py-2 rounded-l-md max-sm:w-56"
            >
              <option value="all">All</option>
              <option value="cleanup">Cleanup</option>
              <option value="plantation">Plantation</option>
              <option value="donation">Donation</option>
              <option value="other">Other</option>
            </select>
            <button
              type="submit"
              className="bg-[#00705f] font-semibold text-white px-4 py-2 max-sm:py-[10px] rounded-r-md"
            >
              Filter
            </button>
          </form>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventss.map((event) => (
            <div
              key={event._id}
              className="bg-white dark:bg-[#1c1c1e] border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md overflow-hidden transition-transform hover:scale-102 duration-300"
            >
              {/* Header */}
              <div className="flex items-center p-2">
                <img
                  src={event.photoURL || ""}
                  alt={event.displayName || ""}
                  className="w-10 h-10 rounded-full mr-3 object-cover"
                />
                <div>
                  <h4 className="font-semibold uppercase">
                    {event?.displayName}
                  </h4>
                  <p className="text-gray-500 text-sm">{event.eventDate}</p>
                </div>
              </div>

              {/* Thumbnail */}
              <img
                src={event.thumbnailUrl}
                alt={event.title}
                className="w-full h-56 object-cover p-3 rounded-3xl"
              />

              {/* Body */}
              <div className="p-4">
                <p className="text-sm text-gray-500 mb-1">
                  <span className="font-semibold dark:text-gray-300">
                    Event Type:
                  </span>{" "}
                  {event.eventType}
                </p>
                <h3 className="text-lg font-bold mb-1 text-[#04927d]">
                  {event.title}
                </h3>
                <p className="dark:text-gray-400 text-sm line-clamp-3">
                  {event.description}
                </p>
                <p className="text-sm dark:text-gray-400 mt-2">
                  {event.location}
                </p>
              </div>

              {/* Footer */}
              <div className="px-4 pb-4">
                <Link
                  to={`/event_details/${event._id}`}
                  className="block text-center bg-gradient-to-r from-[#00705f] to-[#0b3948] hover:bg-gradient-to-r hover:from-[#0b3948] to-[#00705f] text-white py-2 rounded-md transition"
                >
                  View Event
                </Link>
              </div>
            </div>
          ))}

          {eventss.length === 0 && (
            <p className="col-span-full text-center text-gray-500">
              No upcoming events.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UpcommingEvents;
