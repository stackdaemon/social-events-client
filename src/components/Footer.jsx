import React from "react";
import { Facebook, Instagram, Linkedin, Mails } from "lucide-react";
const Footer = () => {
  return (
    <div>
      <footer className="bg-[#035b4c] dark:bg-[#1c1c1e]  text-gray-300  py-12">
        <div className="grid md:grid-cols-5 gap-8 w-11/12 mx-auto">
          <div>
            <div>
              {/* <img className="w-13 inline mr-2" src={logo} alt="" /> */}
              <span className="text-lg font-bold text-red-500">Social <span className="text-white"> Events</span> </span>
            </div>
            <p className="text-sm mt-4">
              Hero is your ultimate productivity companion — designed to help
              you stay organized, focused, and efficient every day. Take quick
              notes, set smart reminders, and manage tasks in one beautiful,
              easy-to-use app.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Company</h4>
            <ul className="space-y-1 text-sm">
              <li >
                <a className="a" href="">About Us</a>
              </li>
              <li >
                <a className="a" href="">Our Mission</a>
              </li>
              <li >
                <a className="a" href="">Contact Saled</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Services</h4>
            <ul className="space-y-1 text-sm">
              <li >
                <a className="a" href="">Products & Services</a>
              </li>
              <li >
                <a className="a" href="">Customer Stories</a>
              </li>
              <li >
                <a className="a" href="">Download Apps</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Information</h4>
            <ul className="space-y-1 text-sm">
              <li >
                <a className="a" href="">Privacy Policy</a>
              </li>
              <li >
                <a className="a" href="">Terms & Conditions</a>
              </li>
              <li >
                <a className="a" href="">Join Us</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Social Links</h4>
            <ul className="space-y-1 text-sm flex gap-3 items-center">
              <li className="cursor-pointer ">
                <Facebook />
              </li>
              <li className="cursor-pointer ">
                <Linkedin />
              </li>
              <li className="cursor-pointer ">
                <Mails />
              </li>
              <li className="cursor-pointer ">
                <Instagram />
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center md:text-center text-gray-400 text-sm mt-4">
         &copy;  Social Events
          <br className="block md:hidden" /> All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;