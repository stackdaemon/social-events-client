import React from "react";
import first from '../../assets/doctor.png'
import second from '../../assets/donation.jpg'
import third from '../../assets/tree.jpg'
import four from '../../assets/clean.jpg'
import five from '../../assets/tree2.jpg'


const Gallery = () => {
  

  return (
    <section className="py-16   text-center">
      <h2 className="text-3xl font-bold  text-[#02705e]">
         Gallery 
      </h2>
      <p className="text-gray-400 mb-10">A glimpse of our inspiring community activities — from tree plantations to donation  drives and cleanliness campaigns.<br /> Every picture tells a story of unity and compassion.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 max-w-6xl mx-auto lg:max-h-[660px]">
        {/* Left large column */}
        <div className="md:col-span-1">
          <img
            src={first}
            alt="Banana leaf meal"
            className="rounded-xl w-full lg:h-[660px] object-cover"
          />
        </div>

        {/* Middle column with two stacked images */}
        <div className="flex flex-col gap-4">
          <img
            src={second}
            alt="Indian curry"
            className="rounded-xl w-full h-[320px] object-cover"
          />
          <img
            src={third}
            alt="Vegetable stir fry"
            className="rounded-xl w-full h-[320px] object-cover"
          />
        </div>

        {/* Right column - vertical collage */}
        <div className="flex flex-col gap-4">
          <img
            src={four}
            alt="Golden tea set"
            className="rounded-xl w-full object-cover"
          />
          <img
            src={five}
            alt="Copper curry bowl"
            className="rounded-xl w-full flex-1 object-cover"
          />
        </div>

       
      </div>
    </section>
  );
};

export default Gallery;
