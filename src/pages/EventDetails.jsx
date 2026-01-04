import React, { use, useEffect, useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router";
import { AuthContext } from "./Auth/AuthContext";
import toast from "react-hot-toast";

const EventDetails = () => {
  const { user } = use(AuthContext);
  const navigate = useNavigate();
  const data = useLoaderData();
  const event = data.result;
  const [relatedEvents, setRelatedEvents] = useState([]);

  useEffect(() => {
    if (event?.eventType) {
      fetch(`https://social-events-weld.vercel.app/select?select=${event.eventType}`)
        .then((res) => res.json())
        .then((data) => {
          // Filter out current event and take top 3
          const related = data.filter((e) => e._id !== event._id).slice(0, 3);
          setRelatedEvents(related);
        })
        .catch((err) => console.error("Error fetching related:", err));
    }
  }, [event]);

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
          toast.success("Successfully joined!");
          navigate("/dashboard/joined-events");
        });
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8 space-y-12">
      
      {/* Event Header & Gallery */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Gallery Section */}
        <div className="space-y-4">
            <div className="overflow-hidden rounded-2xl shadow-lg h-96">
                <img
                src={event.thumbnailUrl}
                alt={event.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
            </div>
            {/* Mock Gallery Grid */}
            <div className="grid grid-cols-3 gap-4">
                 <img 
                    src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=200" 
                    className="rounded-lg h-24 w-full object-cover cursor-pointer hover:opacity-80 transition"
                    alt="Gallery 1"
                 />
                 <img 
                    src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=200" 
                    className="rounded-lg h-24 w-full object-cover cursor-pointer hover:opacity-80 transition"
                    alt="Gallery 2"
                 />
                 <img 
                    src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=200" 
                    className="rounded-lg h-24 w-full object-cover cursor-pointer hover:opacity-80 transition"
                    alt="Gallery 3"
                 />
            </div>
        </div>

        {/* Info Section */}
        <div className="flex flex-col justify-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold dark:text-white leading-tight">{event.title}</h1>

            <div className="flex flex-wrap gap-3">
              <div className="badge badge-lg badge-primary badge-outline font-medium p-3">
                {event.eventType}
              </div>
              <div className="badge badge-lg badge-secondary badge-outline font-medium p-3">
                📍 {event.location}
              </div>
              <div className="badge badge-lg badge-accent badge-outline font-medium p-3">
                📅 {new Date(event.eventDate).toLocaleDateString()}
              </div>
            </div>
            
            <div className="divider"></div>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
              {event.description}
            </p>

            {/* Organize Info (Mock) */}
             <div className="flex items-center gap-4 bg-base-200 dark:bg-gray-800 p-4 rounded-xl">
                <div className="avatar">
                    <div className="w-12 h-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={event.photoURL || "https://i.pravatar.cc/150"} alt="Organizer" />
                    </div>
                </div>
                <div>
                     <p className="text-sm font-bold dark:text-white">{event.displayName || "Community Organizer"}</p>
                     <p className="text-xs text-gray-500">Event Organizer</p>
                </div>
             </div>

            <div className="flex flex-wrap gap-4 pt-4">
                <button
                  type="button"
                  onClick={handleJoin}
                  className="btn btn-primary btn-lg rounded-full px-8 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                >
                  Join Event Now
                </button>
              <button className="btn btn-outline btn-lg rounded-full px-8 dark:text-white">
                Share Event
              </button>
            </div>
        </div>
      </div>

      {/* Related Events Section */}
      {relatedEvents.length > 0 && (
          <div className="py-10 border-t dark:border-gray-700">
             <h2 className="text-3xl font-bold mb-8 dark:text-white">Related Events</h2>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                 {relatedEvents.map((related) => (
                     <div key={related._id} className="card bg-base-100 dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-all h-full border dark:border-gray-700">
                        <figure className="h-48">
                            <img src={related.thumbnailUrl} alt={related.title} className="w-full h-full object-cover" />
                        </figure>
                        <div className="card-body">
                            <h3 className="card-title text-primary dark:text-green-400 text-lg">{related.title}</h3>
                            <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-2">{related.description}</p>
                            <div className="card-actions justify-end mt-4">
                                <Link to={`/event_details/${related._id}`} className="btn btn-sm btn-outline btn-primary">
                                    View Details
                                </Link>
                            </div>
                        </div>
                     </div>
                 ))}
             </div>
          </div>
      )}
    </div>
  );
};

export default EventDetails;
