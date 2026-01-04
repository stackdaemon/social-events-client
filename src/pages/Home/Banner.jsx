import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Sample slides with Unsplash images
const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=2074&auto=format&fit=crop",
    title: "Empowering Communities",
    subtitle: "Join hands to create a sustainable future for everyone through local action.",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2070&auto=format&fit=crop",
    title: "Make a Meaningful Difference",
    subtitle: "Participate in local events like tree plantations, cleanups, and donations.",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1527525443983-6e60c75fff46?q=80&w=2066&auto=format&fit=crop",
    title: "Connect, Grow & Inspire",
    subtitle: "Meet like-minded people while contributing to society and building your network.",
  },
];

const Banner = () => {
  return (
    <section className="relative w-full h-[70vh] min-h-[550px] bg-gray-900 group overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        speed={1500}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true, dynamicBullets: true }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
             {/* Background Image with Zoom Effect */}
            <div className="relative w-full h-full overflow-hidden">
                <div
                className="absolute inset-0 bg-cover bg-center animate-ken-burns"
                style={{ backgroundImage: `url(${slide.image})` }}
                ></div>
                
                {/* Sophisticated Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80 flex flex-col items-center justify-center text-center px-6">
                    <div className="max-w-5xl space-y-6">
                    <motion.h1 
                        key={`title-${slide.id}`}
                        initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight drop-shadow-2xl"
                    >
                        {slide.title}
                    </motion.h1>
                    
                    <motion.p 
                        key={`sub-${slide.id}`}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                        className="text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto drop-shadow-lg font-light leading-relaxed"
                    >
                        {slide.subtitle}
                    </motion.p>
                    
                    <motion.div 
                        key={`btn-${slide.id}`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-5 justify-center items-center pt-4"
                    >
                        <Link
                        to="/upcomming_events"
                        className="btn border-none bg-[#02705e] text-white hover:bg-[#025a4b] px-10 py-3 h-auto text-lg rounded-full shadow-[0_10px_20px_rgba(2,112,94,0.3)] hover:shadow-[0_15px_30px_rgba(2,112,94,0.5)] transition-all transform hover:-translate-y-1"
                        >
                        Explore Events
                        </Link>
                        <Link
                        to="/dashboard/create-event"
                        className="btn btn-outline text-white border-2 border-white/80 hover:bg-white hover:text-[#02705e] hover:border-white px-10 py-3 h-auto text-lg rounded-full shadow-lg transition-all transform hover:-translate-y-1 backdro-blur-sm"
                        >
                        Create Event
                        </Link>
                    </motion.div>
                    </div>
                </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Custom Styles for Animations */}
      <style>{`
        @keyframes ken-burns {
            0% { transform: scale(1); }
            100% { transform: scale(1.15); }
        }
        .animate-ken-burns {
            animation: ken-burns 15s linear infinite alternate;
        }
        .swiper-pagination-bullet {
            width: 12px;
            height: 12px;
            background: rgba(255, 255, 255, 0.5);
            opacity: 1;
            transition: all 0.3s;
        }
        .swiper-pagination-bullet-active {
            background-color: #02705e !important;
            width: 30px;
            border-radius: 6px;
        }
        .swiper-button-next, .swiper-button-prev {
            color: white !important;
            background: rgba(0,0,0,0.3);
            width: 50px;
            height: 50px;
            border-radius: 50%;
            backdrop-filter: blur(5px);
            opacity: 0;
            transition: all 0.3s;
        }
        .swiper-button-next:after, .swiper-button-prev:after {
            font-size: 20px;
            font-weight: bold;
        }
        .group:hover .swiper-button-next, 
        .group:hover .swiper-button-prev {
            opacity: 1;
        }
        .group:hover .swiper-button-next:hover, 
        .group:hover .swiper-button-prev:hover {
            background: #02705e;
        }
      `}</style>
    </section>
  );
};

export default Banner;
