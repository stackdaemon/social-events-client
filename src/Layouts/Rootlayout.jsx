import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";

const Rootlayout = () => {
  return (
    <div className="  flex flex-col min-h-screen">
      <Navbar></Navbar>
      <div className=" w-11/12 mx-auto flex-1">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <Toaster />
    </div>
  );
};

export default Rootlayout;
