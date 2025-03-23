import React, { useState } from 'react';
import { MapPinHouse, Car } from 'lucide-react';
import { motion } from 'framer-motion';

function UserDashboard() {
    const [isInputClicked, setIsInputClicked] = useState(false); // State to track if the input is clicked

    return (
        <div className="min-h-screen pt-16 md:pt-20  bg-black text-white overflow-x-hidden">
            <section className="container gap-6 md:gap-10 mx-auto px-4 md:px-10 h-full flex flex-col md:flex-row">
                {/* Right Section: Image/Map */}
                <div className="flex flex-col md:w-1/2 w-full h-full order-1 md:order-2">
                    <img
                        loading="lazy"
                        src="https://imgs.search.brave.com/-szcuCbXMv7wgtzf_ZsDqiy0BgHDYZpNqoTRpBQfNWk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS50ZW5vci5jb20v/REFnTG1hTl9QdFVB/QUFBTS9ncHNzLmdp/Zg.gif"
                        alt="Map preview"
                        className="rounded-xl shadow-2xl w-full h-[50vh] md:h-[80vh] object-cover transform transition-all duration-300 hover:scale-105"
                    />
                </div>

                {/* Left Section: Search Input with animation */}
                <motion.div
                    className={`flex flex-col md:w-1/2 w-full pt-10 md:pt-10 bg-black h-[80vh] rounded-2xl items-center order-2 md:order-1 ${isInputClicked ? 'z-10 absolute inset-x-0 mx-auto' : 'relative'
                        }`}
                    animate={
                        window.innerWidth < 768 && isInputClicked
                            ? { y: '-12vh', scale: 1.05, x: '0' } // Animation only in mobile mode, lock x at 0
                            : { y: 0, scale: 1, x: '0' } // No animation on desktop, lock x at 0
                    }
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                >
                    <form className="space-y-6 w-full max-w-md px-4 md:px-0">
                        <div className="text-center md:text-left">
                            <h1 className="text-2xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                                Find Your Perfect Ride
                            </h1>
                            <p className="text-gray-400 text-base md:text-lg">
                                Enter your trip details to get started
                            </p>
                        </div>

                        {/* Search Input */}
                        <div className="relative group">
                            <input
                                type="text"
                                required
                                placeholder="Enter location"
                                className="w-full p-3 md:p-4 pr-12 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                onFocus={() => window.innerWidth > 768 ? setIsInputClicked(false) : setIsInputClicked(true)} // Trigger animation on focus
                                onBlur={() => setIsInputClicked(false)} // Reset on blur
                            />
                            <div className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2">
                                <MapPinHouse className="text-blue-400 group-hover:animate-pulse" size={20} md:size={24} />
                            </div>
                        </div>

                        {/* Destination Input */}
                        <div className="relative group">
                            <input
                                type="text"
                                required
                                placeholder="Enter destination"
                                className="w-full p-3 md:p-4 pr-12 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                onFocus={() => window.innerWidth > 768 ? setIsInputClicked(false) : setIsInputClicked(true)}// Trigger animation on focus
                                onBlur={() => setIsInputClicked(false)} // Reset on blur
                            />
                            <div className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2">
                                <Car className="text-blue-400 group-hover:animate-pulse" size={20} md:size={24} />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button className="w-full bg-blue-600 text-white px-6 py-2 md:py-3 rounded-lg font-semibold hover:bg-blue-700 active:bg-blue-800 transition-all duration-300 transform hover:-translate-y-1">
                            See Prices
                        </button>
                    </form>
                </motion.div>
            </section>
        </div>
    );
}

export default UserDashboard;