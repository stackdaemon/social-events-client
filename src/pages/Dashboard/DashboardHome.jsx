
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../pages/Auth/AuthContext';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const DashboardHome = () => {
    const { user } = useContext(AuthContext);
    const [stats, setStats] = useState({
        totalEvents: 0,
        myEvents: 0, // Placeholder if we had endpoints
        totalAttendees: 0, // Placeholder
        upcomingCount: 0
    });
    const [chartData, setChartData] = useState([]);
    const [pieData, setPieData] = useState([]);
    const [loading, setLoading] = useState(true);

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#d72050', '#02705e'];

    useEffect(() => {
        fetch('https://social-events-weld.vercel.app/events')
            .then(res => res.json())
            .then(data => {
                // Calculate Stats
                const total = data.length;
                const today = new Date();
                const upcoming = data.filter(e => new Date(e.eventDate) >= today).length;
                
                setStats({
                    totalEvents: total,
                    upcomingCount: upcoming,
                    totalAttendees: total * 120, // Mocking attendees as data doesn't have it
                    myEvents: 0
                });

                // Process Data for Bar Chart (Events per Month)
                const monthCounts = {};
                data.forEach(event => {
                    const date = new Date(event.eventDate);
                    const month = date.toLocaleString('default', { month: 'short' });
                    monthCounts[month] = (monthCounts[month] || 0) + 1;
                });

                const processedChartData = Object.keys(monthCounts).map(month => ({
                    name: month,
                    events: monthCounts[month],
                    attendees: monthCounts[month] * 50 + Math.floor(Math.random() * 100) // Mock
                }));
                setChartData(processedChartData);

                // Process Data for Pie Chart (Events by Type)
                const typeCounts = {};
                data.forEach(event => {
                    // Assuming 'eventType' exists, otherwise use random/mock
                    const type = event.eventType || 'Other'; 
                    typeCounts[type] = (typeCounts[type] || 0) + 1;
                });

                const processedPieData = Object.keys(typeCounts).map(type => ({
                    name: type,
                    value: typeCounts[type]
                }));
                setPieData(processedPieData);
                
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    if (loading) return <div className="p-10 text-center">Loading stats...</div>;

    return (
        <div className="space-y-6">
            {/* Welcome Section */}
            <div className="bg-gradient-to-r from-[#02705e] to-[#0b3948] rounded-xl p-8 text-white shadow-lg">
                <h1 className="text-3xl font-bold mb-2">Welcome back, {user?.displayName}!</h1>
                <p className="opacity-90">Here's what's happening with your events today.</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border-l-4 border-blue-500">
                    <h3 className="text-gray-500 text-sm font-medium">Total Global Events</h3>
                    <p className="text-3xl font-bold dark:text-gray-200">{stats.totalEvents}</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border-l-4 border-green-500">
                    <h3 className="text-gray-500 text-sm font-medium">Est. Attendees</h3>
                    <p className="text-3xl font-bold dark:text-gray-200">{stats.totalAttendees}</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border-l-4 border-yellow-500">
                    <h3 className="text-gray-500 text-sm font-medium">Upcoming Events</h3>
                    <p className="text-3xl font-bold dark:text-gray-200">{stats.upcomingCount}</p>
                </div>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Bar Chart */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                    <h3 className="text-xl font-bold mb-4 dark:text-gray-200">Event Frequency (By Month)</h3>
                    <div className="h-80 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={chartData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="events" fill="#02705e" name="Events" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Pie Chart */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                    <h3 className="text-xl font-bold mb-4 dark:text-gray-200">Events Distribution (By Type)</h3>
                    <div className="h-80 w-full flex justify-center">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={pieData}
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={100}
                                    fill="#8884d8"
                                    dataKey="value"
                                    label
                                >
                                    {pieData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;
