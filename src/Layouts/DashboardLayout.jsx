import React, { useContext } from 'react';
import { NavLink, Outlet, useNavigate, useNavigation } from 'react-router-dom';
import { AuthContext } from '../pages/Auth/AuthContext';
import { FaHome, FaPlus, FaList, FaUsers, FaChartPie, FaSignOutAlt } from 'react-icons/fa';
import { MdEventAvailable } from 'react-icons/md';
import Loading from '../pages/Private/Loading';

import useAdmin from '../hooks/useAdmin';

const DashboardLayout = () => {
    const { user, signOutUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const navigation = useNavigation();
    const isLoading = navigation.state === "loading";
    const [isAdmin] = useAdmin();

    const handleLogOut = () => {
        signOutUser()
            .then(() => {
                navigate('/');
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="flex h-screen bg-base-200 dark:bg-gray-900 overflow-hidden">
            {isLoading && <Loading />}
            {/* Sidebar */}
            <aside className="w-64 bg-white dark:bg-gray-800 shadow-xl hidden lg:flex flex-col">
                <div className="p-6 text-center border-b dark:border-gray-700">
                   <h2 className="text-2xl font-bold text-primary dark:text-green-400">Eventify</h2>
                   <p className="text-sm text-gray-500 dark:text-gray-400">Manage your events</p>
                </div>
                
                <div className="flex flex-col flex-1 p-4 space-y-2 overflow-y-auto">
                    {/* User Info */}
                    <div className="flex flex-col items-center mb-6">
                        <img 
                            src={user?.photoURL} 
                            alt="Profile" 
                            className="w-16 h-16 rounded-full mb-2 border-2 border-primary"
                        />
                        <h3 className="font-semibold dark:text-gray-200">{user?.displayName}</h3>
                        <p className="text-xs text-gray-500">{user?.email}</p>
                    </div>

                    {/* Navigation */}
                    <p className="text-xs font-bold text-gray-400 uppercase">Menu</p>
                    
                    {isAdmin ? (
                        <>
                            <NavLink to="/dashboard/statistics" 
                                className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive ? 'bg-primary text-white shadow-md' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`}>
                                <FaChartPie /> Admin Dashboard
                            </NavLink>
                            <NavLink to="/dashboard/all-users" 
                                className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive ? 'bg-primary text-white shadow-md' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`}>
                                <FaUsers /> Manage Users
                            </NavLink>
                            <NavLink to="/dashboard/manage-events" 
                                className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive ? 'bg-primary text-white shadow-md' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`}>
                                <FaList /> Manage All Events
                            </NavLink>
                        </>
                    ) : (
                        <>
                            <NavLink to="/dashboard/statistics" 
                                className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive ? 'bg-primary text-white shadow-md' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`}>
                                <FaChartPie /> User Dashboard
                            </NavLink>
                            <NavLink to="/dashboard/create-event" 
                                className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive ? 'bg-primary text-white shadow-md' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`}>
                                <FaPlus /> Add Event
                            </NavLink>
                            <NavLink to="/dashboard/manage-events" 
                                className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive ? 'bg-primary text-white shadow-md' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`}>
                                <FaList /> My Events
                            </NavLink>
                            <NavLink to="/dashboard/joined-events" 
                                className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive ? 'bg-primary text-white shadow-md' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`}>
                                <MdEventAvailable /> Joined Events
                            </NavLink>
                        </>
                    )}

                    <div className="divider"></div>

                    <NavLink to="/" 
                        className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                        <FaHome /> Home
                    </NavLink>
                </div>
                
                <div className="p-4 border-t dark:border-gray-700">
                    <button onClick={handleLogOut} className="flex items-center gap-3 w-full px-4 py-3 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors">
                        <FaSignOutAlt /> Logout
                    </button>
                </div>
            </aside>

            {/* Mobile Sidebar (Drawer) can be added here if needed */}

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Top Navbar */}
                <header className="bg-white dark:bg-gray-800 shadow-sm h-16 flex items-center justify-between px-6 lg:hidden">
                    <div className="font-bold text-xl text-primary">Eventify</div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                            <img alt="User" src={user?.photoURL} />
                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li><NavLink to="/dashboard/statistics">Dashboard</NavLink></li>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><button onClick={handleLogOut}>Logout</button></li>
                        </ul>
                    </div>
                </header>

                <main className="flex-1 overflow-y-auto p-6 bg-gray-50 dark:bg-gray-900">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
