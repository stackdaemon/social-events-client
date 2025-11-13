// Banner.jsx
import React from "react";
import { Link } from "react-router-dom";
import bannerImage from '../../assets/tree2.jpg'; // replace with your image
import { motion } from 'framer-motion';
import { fadeIn } from "../../variants";

const Banner = () => {
  return (
    <section className="bg-[#FFF8EC] dark:bg-[#1d232a] py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        
        {/* Text Section */}
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold text-[#02705E] mb-6">
            Social Development Events Platform <br />
            Empowering Communities, One Event at a Time
          </h1>
          <p className="text-gray-700 dark:text-gray-400 mb-6">
            Create, join, and track social service events in your local area. Participate in initiatives like 
            “Road Cleaning in Mirpur 10, Dhaka” or “Tree Plantation - Hossainpur, Kishoreganj” and make a meaningful difference!
          </p>
          <div className="flex flex-wrap gap-4 items-center">
          <motion.div
          variants={fadeIn("right",0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once:false,amount:0.3}}
          
          >
              <Link
              to="/upcomming_events"
              className="px-6 py-3 bg-[#02705E] text-white font-semibold rounded-md hover:bg-[#025e4a] transition"
            >
              Explore Events
            </Link>
          </motion.div>
            <motion.div
            variants={fadeIn("left",0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once:false,amount:0.3}}
            
            
            >
              <Link
              to="/creat_event"
              className="px-6 py-3 border border-[#02705E] text-[#02705E] font-semibold rounded-md hover:bg-[#02705E] hover:text-white transition flex items-center gap-2"
            >
              <span className="material-icons">Creat Events</span>
           
            </Link>
            </motion.div>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src={bannerImage}
            alt="Volunteer holding donation box"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
