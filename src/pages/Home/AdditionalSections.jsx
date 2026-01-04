
import React from 'react';
import { motion } from 'framer-motion';
import teamData from '../../assets/team.json';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

import { FaCalendarAlt, FaUsers, FaHandshake, FaSmile } from 'react-icons/fa';

export const Statistics = () => {
  const stats = [
    { id: 1, icon: <FaCalendarAlt size={30} />, number: "500+", label: "Events Hosted", color: "bg-blue-100 text-blue-600" },
    { id: 2, icon: <FaUsers size={30} />, number: "10k+", label: "Attendees", color: "bg-green-100 text-green-600" },
    { id: 3, icon: <FaHandshake size={30} />, number: "50+", label: "Sponsors", color: "bg-purple-100 text-purple-600" },
    { id: 4, icon: <FaSmile size={30} />, number: "100%", label: "Satisfaction", color: "bg-yellow-100 text-yellow-600" },
  ];

  return (
    <div className="py-20 bg-base-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-extrabold mb-4 text-primary"
            >
                Our Impact
            </motion.h2>
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-gray-500 max-w-2xl mx-auto"
            >
                We are proud of the difference we make in communities through our dedicated events and passionate participants.
            </motion.p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
                <motion.div 
                    key={stat.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="p-8 border border-gray-100 dark:border-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white dark:bg-gray-800 text-center group cursor-default"
                >
                    <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                        {stat.icon}
                    </div>
                    <h3 className="text-4xl font-black text-gray-800 dark:text-white mb-2">{stat.number}</h3>
                    <p className="text-gray-500 font-medium uppercase tracking-wider text-sm space-x-1">{stat.label}</p>
                </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
};

export const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah Jenkins",
      role: "Event Organizer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      text: "This platform has completely transformed how I manage my charity events. The tools are intuitive and the community is amazing!"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Frequent Volunteer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      text: "I've met so many like-minded people through these events. It's never been easier to find causes I care about and get involved."
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Community Leader",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      text: "The impact metrics help us show our sponsors exactly what we've achieved. A game-changer for non-profit transparency."
    }
  ];

  return (
    <div className="py-16 bg-base-200 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">What People Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review) => (
                <div key={review.id} className="bg-base-100 dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-4 mb-4">
                        <img 
                            src={review.image} 
                            alt={review.name} 
                            className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                            <h4 className="font-bold dark:text-gray-200">{review.name}</h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{review.role}</p>
                        </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 italic">"{review.text}"</p>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export const FAQ = () => {
    return (
        <div className="py-16 bg-base-100 dark:bg-gray-900">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-10 text-primary">Frequently Asked Questions</h2>
                <div className="join join-vertical w-full">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="collapse collapse-arrow join-item border border-base-300 dark:border-gray-700">
                            <input type="radio" name="my-accordion-4" defaultChecked={i===1} />
                            <div className="collapse-title text-xl font-medium">
                                How do I register for an event?
                            </div>
                            <div className="collapse-content">
                                <p>Simply create an account, browse the events, and click on 'Join Event'.</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


export const Team = () => {
    return (
        <div className="py-16 bg-base-200 dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <motion.h2 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl font-bold mb-10 text-primary"
                >
                    Meet Our Team
                </motion.h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamData.map((member, index) => (
                        <motion.div 
                            key={member.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-base-100 dark:bg-gray-700 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 group"
                        >
                            <div className="relative inline-block">
                                <img 
                                    src={member.image} 
                                    alt={member.name} 
                                    className="w-24 h-24 object-cover rounded-full mx-auto mb-4 border-4 border-primary/10 group-hover:border-primary/30 transition-colors"
                                />
                            </div>
                            <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                            <p className="text-primary text-sm font-medium mb-1">{member.role}</p>
                            <p className="text-gray-500 text-xs mb-4">{member.institute}</p>
                            
                            <div className="flex justify-center gap-3">
                                {member.social?.github && (
                                    <a href={member.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                                        <FaGithub size={18} />
                                    </a>
                                )}
                                {member.social?.linkedin && (
                                    <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                                        <FaLinkedin size={18} />
                                    </a>
                                )}
                                {member.social?.email && (
                                    <a href={member.social.email.startsWith('mailto:') ? member.social.email : `mailto:${member.social.email}`} className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                                        <FaEnvelope size={18} />
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export const Partners = () => {
    // Partner logos using simple SVG placeholders/icons for a clean look
    const partners = [
      { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
      { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
      { name: "Spotify", logo: "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg" },
      { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
      { name: "Airbnb", logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg" },
      { name: "Uber", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" }
    ];
  
    return (
      <div className="py-20 bg-base-100 dark:bg-gray-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">Trusted By Leading Organizations</h2>
          <p className="text-gray-500">Working with the best to deliver excellence</p>
        </div>
        
        {/* Marquee Container */}
        <div className="relative flex overflow-x-hidden group">
          {/* First Scrolling Part */}
          <div className="flex animate-marquee whitespace-nowrap">
            {partners.map((partner, index) => (
              <div key={`partner-1-${index}`} className="mx-12 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer">
                <img src={partner.logo} alt={partner.name} className="h-12 w-auto object-contain" />
              </div>
            ))}
          </div>
  
          {/* Second Scrolling Part (Duplicate for seamless loop) */}
          <div className="flex absolute top-0 animate-marquee2 whitespace-nowrap">
            {partners.map((partner, index) => (
               <div key={`partner-2-${index}`} className="mx-12 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer">
                <img src={partner.logo} alt={partner.name} className="h-12 w-auto object-contain" />
              </div>
            ))}
          </div>
        </div>
  
        {/* Add custom CSS for marquee animation if not already present in global css */}
        <style jsx>{`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-100%); }
          }
          @keyframes marquee2 {
            0% { transform: translateX(100%); }
            100% { transform: translateX(0%); }
          }
          .animate-marquee {
            animation: marquee 25s linear infinite;
          }
          .animate-marquee2 {
            animation: marquee2 25s linear infinite;
          }
          /* Pause on hover */
          .group:hover .animate-marquee,
          .group:hover .animate-marquee2 {
             animation-play-state: paused;
          }
        `}</style>
      </div>
    );
  };

import { FaUserPlus, FaSearchLocation, FaHandsHelping } from 'react-icons/fa';

export const HowItWorks = () => {
    const steps = [
        {
            id: 1,
            title: "Create Account",
            desc: "Sign up in seconds and setup your profile to get started.",
            icon: <FaUserPlus size={24} />,
            color: "bg-blue-500"
        },
        {
            id: 2,
            title: "Join Events",
            desc: "Browse through hundreds of events and join the ones you like.",
            icon: <FaSearchLocation size={24} />,
            color: "bg-orange-500"
        },
        {
            id: 3,
            title: "Connect & Impact",
            desc: "Meet new people, expand your network, and make a difference.",
            icon: <FaHandsHelping size={24} />,
            color: "bg-green-500"
        }
    ];

    return (
        <div className="py-24 bg-base-200 dark:bg-gray-800">
             <div className="max-w-7xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4 text-primary">How It Works</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">Start your journey with us in three simple steps. Making a difference has never been easier.</p>
                </motion.div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-1 bg-gray-300 dark:bg-gray-700 -z-1 border-t-2 border-dashed border-gray-400"></div>

                    {steps.map((step, index) => (
                        <motion.div 
                            key={step.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            className="relative flex flex-col items-center"
                        >
                            <div className={`w-24 h-24 ${step.color} text-white rounded-full flex items-center justify-center shadow-lg mb-6 relative z-10 group hover:scale-110 transition-transform duration-300`}>
                                {step.icon}
                                <span className="absolute -top-2 -right-2 w-8 h-8 bg-white dark:bg-gray-900 text-primary border-2 border-primary rounded-full flex items-center justify-center font-bold text-sm shadow-sm">
                                    {step.id}
                                </span>
                            </div>
                            <h3 className="font-bold text-xl mb-3 dark:text-white">{step.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 max-w-xs">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

