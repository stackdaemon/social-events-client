// About.jsx
import React, { use } from "react";
import { AuthContext } from "./Auth/AuthContext";
import Loading from "./Private/Loading";

const About = () => {
  const {loading}=use(AuthContext)
  if(loading){
    return <Loading></Loading>
  }
  return (
    <section className="py-16 px-6 md:px-16 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <h1 className="text-4xl font-bold text-center mb-10 text-[#02705e]">
        About Our Platform
      </h1>

      <div className="max-w-5xl mx-auto space-y-6">
        <p>
          Welcome to <span className="font-semibold">Social Development Events Platform</span> — 
          a community-driven platform dedicated to connecting people through social service events.
        </p>

        <p>
          Our mission is to empower local communities by providing a simple and intuitive platform 
          where anyone can create, join, and track social service activities like road cleaning, 
          tree plantations, donations, and more.
        </p>

        <p>
          Every event is created by a verified user and is designed to bring people together for 
          the betterment of society. We prioritize transparency, collaboration, and active participation.
        </p>

        <p>
          Join us and be part of the movement that makes a difference in your local community!
        </p>

        <ul className="list-disc list-inside space-y-2">
          <li>Create and manage social events easily.</li>
          <li>Join upcoming events in your area.</li>
          <li>Track your contributions and history.</li>
          <li>Receive notifications about events that matter to you.</li>
          <li>Enjoy a responsive and modern user interface with theme customization.</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
