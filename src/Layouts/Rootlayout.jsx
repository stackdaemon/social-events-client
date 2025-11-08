import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer'

const Rootlayout = () => {
     return (
          <div className='  flex flex-col min-h-screen'>
               <Navbar></Navbar>
               <div className=' w-11/12 mx-auto flex-1'>
               <Outlet></Outlet>
               </div>
               <Footer></Footer>
          </div>
     );
};

export default Rootlayout;