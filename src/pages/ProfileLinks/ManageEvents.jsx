import React, { useEffect, useState, use } from "react";

import { Link } from "react-router";
import { AuthContext } from "../Auth/AuthContext";

const ManageEvents = () => {
  const { user } = use(AuthContext);
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(user);
  useEffect(() => {
    if (!user?.email) return;
    fetch(
      `https://social-events-weld.vercel.app/manage_event?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setModels(data);
        setLoading(false);
      })
      .catch();
  }, [user]);

  if (loading) {
    return <h3>Please wait .....loading</h3>;
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8">Manage My Events</h2>

      <div className="overflow-x-auto shadow-md rounded-xl ">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-100 dark:bg-[#1c1c1f]">
            <tr>
              <th className="py-3 px-6 text-left">Thumbnail</th>
              <th className="py-3 px-6 text-left">Title</th>
              <th className="py-3 px-6 text-left">Date</th>
              <th className="py-3 px-6 text-left">Type</th>
              <th className="py-3 px-6 text-left">Location</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 dark:divide-gray-700 ">
            {models.map((event) => (
              <tr
                key={event._id}
                className="hover:bg-gray-50 dark:hover:bg-black"
              >
                <td className="py-3 px-6">
                  <img
                    src={event.thumbnailUrl}
                    alt={event.title}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                </td>
                <td className="py-3 px-6 font-semibold text-gray-800 dark:text-white">
                  {event.title}
                </td>
                <td className="py-3 px-6">{event.eventDate}</td>
                <td className="py-3 px-6">{event.eventType}</td>
                <td className="py-3 px-6">{event.location}</td>
                <td className="py-3 px-6 text-center space-x-3">
                  <Link
                    to={`/update/${event._id}`}
                    className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded-md text-sm"
                  >
                    Update
                  </Link>
                  <button
                    // onClick={() => handleDelete(event._id)}
                    className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded-md text-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageEvents;
