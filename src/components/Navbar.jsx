import React, { use, useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../pages/Auth/AuthContext";
import toast from "react-hot-toast";
import { Settings, SquarePen, Users } from "lucide-react";
import { MdKeyboardDoubleArrowDown } from "react-icons/md"
const Navbar = () => {
  const { user, logout } = use(AuthContext);
  const links = (
    <>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/upcomming_events"}>Upcomming Events</NavLink>
      <NavLink to={"/about"}>About</NavLink>
      <NavLink to={"/contect"}>Contect</NavLink>
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
    <div className="navbar bg-base-100 shadow-sm lg:px-10">
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
        <div className="dropdown dropdown-hover z-20 ">
          <Link to={"/"}>
            <div tabIndex={0} role="button" className=" m-1">
              <img
                className={` ${
                  user &&
                  "w-10 h-10 rounded-full ring-2 mr-2 max-sm:mr-1 cursor-pointer ring-[#02705e] p-[1px]"
                }`}
                src={user ? user.photoURL : " "}
                alt=""
              />
            </div>
          </Link>

          {/* dropdown */}

          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-60 p-2 shadow-[0_0_12px_#bbb] absolute -left-20 "
          >
            <li>
              <a className="text-center inline font-bold">
                {user ? user?.displayName : " "}
              </a>
            </li>
          </ul>
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="" className=" mr-1">
         <MdKeyboardDoubleArrowDown />
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <div className="font-bold ">
              <div className="divider"></div>
              <ul>
                <li>
                  <Link to={"creat_event"}>
                    {" "}
                    <SquarePen size={18} className="text-[#02705e] " /> Creat
                    Event{" "}
                  </Link>
                </li>
                <li>
                  <Link to={"manage_event"}>
                    {" "}
                    <Settings size={18} className="text-[#02705e] " />
                    Manage Events{" "}
                  </Link>
                </li>
                <li>
                  <Link to={"joined_event"}>
                    {" "}
                    <Users size={18} className="text-[#02705e] " /> Joined
                    Events{" "}
                  </Link>
                </li>
              </ul>
            </div>
          </ul>
        </div>

        {user ? (
          <button
            onClick={handlelogout}
            className=" md:btn max-sm:px-2 py-2 rounded-md bg-[#02705e] text-white"
          >
            LogOut
          </button>
        ) : (
          <Link to={"/login"} className=" md:btn max-sm:px-3 py-2 rounded-md bg-[#02705e] text-white">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
