
import React, { useState, useContext, useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "./Auth/AuthContext";
import Loading from "./Private/Loading";

const UpcommingEvents = () => {
    const { user, loading, setLoading } = useContext(AuthContext);
    const events = useLoaderData();

    // Initial Filter: Upcoming only
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const getUpcoming = (data) => data.filter((event) => {
        const eventDate = new Date(event.eventDate);
        eventDate.setHours(0, 0, 0, 0);
        return eventDate >= today;
    });

    const [eventss, setEventss] = useState(getUpcoming(events));
    const [sortOption, setSortOption] = useState("date-asc");
    const [locationFilter, setLocationFilter] = useState("all");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    // Get Unique Locations
    const locations = ["all", ...new Set(events.map(e => e.location))];

    // Applied Filters
    const filteredEvents = eventss.filter(event => {
        if (locationFilter !== "all" && event.location !== locationFilter) return false;
        return true;
    });
    
    // Sorting Logic (on filteredEvents)
    const sortedEvents = [...filteredEvents].sort((a, b) => {
        if (sortOption === "date-asc") {
            return new Date(a.eventDate) - new Date(b.eventDate);
        } else if (sortOption === "date-desc") {
            return new Date(b.eventDate) - new Date(a.eventDate);
        } else if (sortOption === "price-asc") {
             // Assuming price exists or default to 0
             return (a.price || 0) - (b.price || 0);
        } else if (sortOption === "price-desc") {
             return (b.price || 0) - (a.price || 0);
        }
        return 0;
    });

    const handleSearch = (e) => {
        e.preventDefault();
        const search_text = e.target.search.value;
        setLoading(true);
        fetch(`https://social-events-weld.vercel.app/search?search=${search_text}`)
            .then((res) => res.json())
            .then((data) => {
                setEventss(getUpcoming(data));
                setLoading(false);
                setCurrentPage(1);
            })
            .catch((err) => {
                console.error("Search fetch error:", err);
                setLoading(false);
            });
    };

    const handleType = (e) => {
        e.preventDefault();
        const select_text = e.target.select.value;
        setLoading(true);
        fetch(`https://social-events-weld.vercel.app/select?select=${select_text}`)
            .then((res) => res.json())
            .then((data) => {
                 setEventss(getUpcoming(data));
                 setLoading(false);
                 setCurrentPage(1);
            })
            .catch((err) => {
                console.error("Filter fetch error:", err);
                setLoading(false);
            });
    };

    // Pagination Logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = sortedEvents.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(sortedEvents.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo(0, 0);
    };

    if (loading) {
        return <Loading></Loading>;
    }

    return (
        <div className="min-h-screen py-10 bg-base-100 dark:bg-gray-900 transition-colors">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-10 text-primary dark:text-green-400">
                    Upcoming Events
                </h2>

                <div className="flex flex-col lg:flex-row items-center justify-between gap-4 pb-8">
                     {/* Sorting & Location */}
                    <div className="flex flex-wrap items-center gap-2">
                        <select 
                            className="select select-bordered select-sm w-full max-w-xs dark:bg-gray-800 dark:text-gray-300"
                            value={sortOption}
                            onChange={(e) => setSortOption(e.target.value)}
                        >
                            <option value="date-asc">Date (Earliest)</option>
                            <option value="date-desc">Date (Latest)</option>
                            <option value="price-asc">Price (Low to High)</option>
                            <option value="price-desc">Price (High to Low)</option>
                        </select>

                         <select 
                            className="select select-bordered select-sm w-full max-w-xs dark:bg-gray-800 dark:text-gray-300"
                            value={locationFilter}
                            onChange={(e) => setLocationFilter(e.target.value)}
                        >
                            <option value="all">All Locations</option>
                            {locations.filter(l => l !== 'all').map(loc => (
                                <option key={loc} value={loc}>{loc}</option>
                            ))}
                        </select>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-3">
                        {/* Search */}
                        <form onSubmit={handleSearch}>
                            <div className="join">
                                <label className="input input-bordered flex items-center gap-2 join-item dark:bg-gray-800 dark:border-gray-600">
                                    <input type="text" name="search" className="grow dark:text-gray-200" placeholder="Search" />
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                                </label>
                                <button className="btn btn-primary join-item text-white">Search</button>
                            </div>
                        </form>

                        {/* Filter */}
                        <form onSubmit={handleType} className="join">
                            <select
                                name="select"
                                className="select select-bordered join-item dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600"
                            >
                                <option value="all">All Types</option>
                                <option value="cleanup">Cleanup</option>
                                <option value="plantation">Plantation</option>
                                <option value="donation">Donation</option>
                                <option value="other">Other</option>
                            </select>
                            <button
                                type="submit"
                                className="btn btn-primary join-item text-white"
                            >
                                Filter
                            </button>
                        </form>
                    </div>
                </div>

                {/* Grid layout - Updated to 4 columns on large screens */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {currentItems.map((event) => (
                        <div
                            key={event._id}
                            className="card bg-base-100 dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col border dark:border-gray-700"
                        >
                            {/* Thumbnail */}
                            <figure className="h-48 relative overflow-hidden">
                                <img
                                    src={event.thumbnailUrl}
                                    alt={event.title}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                />
                                <div className="absolute top-2 right-2 badge badge-secondary">{event.eventType}</div>
                            </figure>

                            <div className="card-body p-4 flex-grow">
                                {/* Header */}
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="avatar">
                                         <div className="w-8 rounded-full">
                                            <img src={event.photoURL || "https://i.pravatar.cc/150"} alt="Host" />
                                         </div>
                                    </div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400">
                                        <p className="font-semibold">{event?.displayName || "Organizer"}</p>
                                        <p>{new Date(event.eventDate).toLocaleDateString()}</p>
                                    </div>
                                </div>

                                <h2 className="card-title text-lg font-bold text-primary dark:text-green-400">
                                    {event.title}
                                </h2>
                                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-2">
                                    {event.description}
                                </p>
                                <div className="flex items-center text-xs text-gray-500 mb-4">
                                     <span>📍 {event.location}</span>
                                </div>
                                
                                <div className="card-actions justify-end mt-auto">
                                    <Link
                                        to={`/event_details/${event._id}`}
                                        className="btn btn-primary btn-sm w-full text-white"
                                    >
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}

                    {currentItems.length === 0 && (
                        <div className="col-span-full py-20 text-center">
                            <h3 className="text-xl font-bold text-gray-500">No events found matching your criteria.</h3>
                        </div>
                    )}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex justify-center mt-12">
                        <div className="join">
                            <button 
                                className="join-item btn" 
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                            >
                                «
                            </button>
                            {[...Array(totalPages)].map((_, index) => (
                                <button
                                    key={index}
                                    className={`join-item btn ${currentPage === index + 1 ? "btn-active btn-primary text-white" : ""}`}
                                    onClick={() => handlePageChange(index + 1)}
                                >
                                    {index + 1}
                                </button>
                            ))}
                            <button 
                                className="join-item btn"
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                            >
                                »
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default UpcommingEvents;
