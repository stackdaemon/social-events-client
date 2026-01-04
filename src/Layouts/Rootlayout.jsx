import React from "react";
import Navbar from "../components/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";
import Loading from "../pages/Private/Loading";

const Rootlayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="  flex flex-col min-h-screen">
      {isLoading && <Loading />}
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
