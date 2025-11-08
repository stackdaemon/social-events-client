import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Foooter from '../components/Foooter';

const Rootlayout = () => {
     return (
          <div className='  flex flex-col min-h-screen'>
               <Navbar></Navbar>
               <div className=' w-11/12 mx-auto flex-1'>
               <Outlet></Outlet>
               </div>
               <Foooter></Foooter>
          </div>
     );
};

export default Rootlayout;