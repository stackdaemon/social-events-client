import React from "react";
import { motion } from "framer-motion";
import {fadeIn} from '../../variants'

const Features = () => {
  return (
    <section className="py-16  text-center ">
      <motion.h2 
      variants={fadeIn("up",0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once:false,amount:0.3}}
      
      className="text-3xl font-bold mb-10 text-[#02705e]">Our Key Features</motion.h2>
      <div className="grid md:grid-cols-4 gap-8 max-w-6xl text-black dark:text-white mx-auto px-4">
        {/* 1k ta  */}
        <motion.div
        variants={fadeIn("up",0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once:false,amount:0.7}}
        
        className="p-6 bg-white dark:bg-[#1c1c1e]  border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1484/1484838.png"
            alt="Create"
            className="w-16 mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Create Events</h3>
          <p className="text-gray-600">Organize social service events easily with our intuitive form.</p>
        </motion.div>
        {/* two number  */}
        <motion.div
        variants={fadeIn("up",0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once:false,amount:0.3}}
         className="p-6 bg-white rounded-2xl dark:bg-[#1c1c1e] border border-gray-200  dark:border-gray-700 shadow-md">
          <img
            src="https://cdn-icons-png.flaticon.com/512/189/189665.png"
            alt="Join"
            className="w-16 mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Join Events</h3>
          <p className="text-gray-600">
            Participate in meaningful local events and help your community grow.
          </p>
        </motion.div>
        {/* 3rd number */}
        <motion.div
        variants={fadeIn("up",0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once:false,amount:0.3}}
        
        className="p-6 dark:bg-[#1c1c1e] bg-white border border-gray-200  dark:border-gray-700 rounded-2xl shadow-md">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3062/3062634.png"
            alt="Track"
            className="w-16 mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Track Progress</h3>
          <p>View your participation history and earned achievements.</p>
        </motion.div>

        <modiv
        variants={fadeIn("up",0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once:false,amount:0.3}}
        
        className="p-6 bg-white  dark:bg-[#1c1c1e] border border-gray-200  dark:border-gray-700 rounded-2xl shadow-md">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1256/1256650.png"
            alt="Community"
            className="w-16 mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Community Impact</h3>
          <p>See how your actions are making a difference around you.</p>
        </modiv>
      </div>
    </section>
  );
};

export default Features;
