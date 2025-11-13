import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Auth/AuthContext";
import toast from "react-hot-toast";

const JoinedEventsTable = () => {
  const { user } = use(AuthContext);
  const [joinedEvents, setJoinedEvents] = useState([]);

  useEffect(() => {
    if (!user?.email) return;
    fetch(
      `https://social-events-weld.vercel.app/joined-event?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        const sorted = data.sort(
          (a, b) => new Date(a.eventDate) - new Date(b.eventDate)
        );
        setJoinedEvents(sorted);
      })
      .catch((err) => console.error(err));
  }, [user]);

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold dark:text-gray-300 mb-8 text-center">
          My Joined Events
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full shadow-md rounded-xl overflow-hidden">
            <thead className="bg-gray-100 dark:bg-[#1c1c1f]">
              <tr>
                <th className="py-3 px-6 text-left text-gray-600 dark:text-gray-300 font-semibold">
                  Thumbnail
                </th>
                <th className="py-3 px-6 text-left text-gray-600 dark:text-gray-300 font-semibold">
                  Title
                </th>
                <th className="py-3 px-6 text-left text-gray-600 dark:text-gray-300 font-semibold">
                  Type
                </th>
                <th className="py-3 px-6 text-left text-gray-600 dark:text-gray-300 font-semibold">
                  Location
                </th>
                <th className="py-3 px-6 text-left text-gray-600 dark:text-gray-300 font-semibold">
                  Date
                </th>
                <th className="py-3 px-6 text-center text-gray-600 dark:text-gray-300 font-semibold">
                  Status
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {joinedEvents.map((event) => (
                <tr
                  key={event._id}
                  className="hover:bg-gray-50 hover:dark:bg-gray-600 transition"
                >
                  <td className="py-3 px-6">
                    <img
                      src={event.thumbnailUrl}
                      alt={event.title}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                  </td>
                  <td className="py-3 px-6 font-medium text-gray-800 dark:text-gray-400">
                    {event.title}
                  </td>
                  <td className="py-3 px-6 text-gray-600 dark:text-gray-400">
                    {event.eventType}
                  </td>
                  <td className="py-3 px-6 text-gray-600 dark:text-gray-400">
                    {event.location}
                  </td>
                  <td className="py-3 px-6 text-gray-600 dark:text-gray-400">
                    {event.eventDate}
                  </td>
                  <td className="py-3 px-6 text-center">
                    <button
                      disabled
                      className="bg-green-600 text-white py-1 px-4 rounded-full text-sm cursor-not-allowed"
                    >
                      Joined
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default JoinedEventsTable;
