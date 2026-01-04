import React, { use, useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../pages/Auth/AuthContext";
import toast from "react-hot-toast";
import { Settings, SquarePen, Users, LayoutDashboard } from "lucide-react";
import { MdKeyboardDoubleArrowDown } from "react-icons/md"
const Navbar = () => {
  const { user, logout } = use(AuthContext);
  const links = (
    <>
      <NavLink to={"/"}>Home</NavLink>
      {user && <NavLink to={"/upcomming_events"}>Upcoming Events</NavLink>}
      <NavLink to={"/about"}>About</NavLink>
      <NavLink to={"/contact"}>Contact</NavLink>
      <NavLink to={"/blog"}>Blog</NavLink>
    </>
  );
  const handlelogout = () => {
    logout()
      .then(() => {
        toast.success("Your LogOut  successful. ");
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  // Theme
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  return (
    <div className="navbar bg-base-100 shadow-sm lg:px-10 sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="  px-2 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to={"/"} className="font-bold text-xl max-sm:text-sm">
          Social <span className="text-[#02705e]">Events</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex  gap-5 ">{links}</ul>
      </div>
      <div className="navbar-end">
        <div className="mr-3 max-sm:mr-1">
          <input
            onChange={(e) => handleTheme(e.target.checked)}
            type="checkbox"
            defaultChecked={localStorage.getItem("theme") === "dark"}
            className="toggle"
          />
        </div>

        {user ? (
          <div className="dropdown dropdown-end z-50">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar m-1">
              <div className="w-10 rounded-full ring-2 ring-[#02705e] ring-offset-2">
                <img
                  alt="User"
                  src={user?.photoURL || "https://i.pravatar.cc/150"}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-60"
            >
              <li>
                <div className="justify-between font-bold pointer-events-none">
                  {user?.displayName}
                </div>
              </li>
              <div className="divider my-1"></div>
              <li>
                <Link to={"/dashboard/statistics"}>
                  <LayoutDashboard size={16} className="text-[#02705e]" /> Dashboard
                </Link>
              </li>
              <div className="divider my-1"></div>
              <li>
                <button
                  onClick={handlelogout}
                  className="text-red-500 hover:bg-red-50 font-semibold"
                >
                  LogOut
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link
            to={"/login"}
            className="md:btn max-sm:px-3 py-2 rounded-md bg-[#02705e] text-white"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
