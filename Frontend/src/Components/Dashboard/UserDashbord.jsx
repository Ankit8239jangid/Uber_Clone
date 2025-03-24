import React, { useState } from 'react';
import { MapPinHouse, Car, Users } from 'lucide-react';
import {
    Landmark,
    MapPin,
    Globe,
    Building,
    Home,
    Mountain,
    Sun,
    TreePine,
    Ship,
    Compass
} from "lucide-react";
import { motion } from 'framer-motion';

// Sample ride options data inspired by the UberGo card
const rideOptions = [
    { id: 1, name: "RideGo", capacity: 4, eta: "2 mins away", time: "15:24", price: "₹193.20", description: "Affordable, compact rides", icon: <Car /> },
    { id: 2, name: "RidePlus", capacity: 4, eta: "3 mins away", time: "15:30", price: "₹245.50", description: "Spacious, premium rides", icon: <Car /> },
    { id: 3, name: "RideEco", capacity: 3, eta: "5 mins away", time: "15:45", price: "₹150.00", description: "Eco-friendly, compact rides", icon: <Car /> },
];

function UserDashboard() {
    const [isInputClicked, setIsInputClicked] = useState(false);
    const [isSearchbox, setIsSearchbox] = useState(false);

    const inputVariants = {
        focus: { scale: 1.02, boxShadow: "0 0 10px rgba(255, 255, 255, 0.3)" },
        blur: { scale: 1, boxShadow: "none" }
    };

    const cardVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
        hover: { y: -5, boxShadow: "0 8px 20px rgba(255, 255, 255, 0.2)", transition: { duration: 0.3 } },
        tap: { scale: 0.98, transition: { duration: 0.2 } }
    };

    const buttonVariants = {
        hover: { 
            scale: 1.05, 
            backgroundColor: "#1a1a1a", 
            boxShadow: "0 0 15px rgba(255, 255, 255, 0.5)",
            transition: { duration: 0.3, ease: "easeInOut" }
        },
        tap: { scale: 0.95, transition: { duration: 0.2 } }
    };

    return (
        <div className="min-h-screen pt-12 sm:pt-16 md:pt-20 bg-gradient-to-br from-black to-gray-900 text-white overflow-x-hidden">
            <section className="container gap-4 sm:gap-6 md:gap-8 lg:gap-12 mx-auto px-4 sm:px-6 md:px-8 lg:px-10 h-full flex flex-col md:flex-row">
                {/* Right Section: Image/Map */}
                <div className="flex flex-col md:w-1/2 w-full h-full order-1 md:order-2 relative">
                    {window.innerWidth > 768 && isSearchbox ? (
                        <motion.div
                            className="rounded-3xl shadow-2xl w-full overflow-auto h-[50vh] sm:h-[60vh] md:h-[80vh] bg-gray-950 border border-gray-800"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            <ul className="p-3 sm:p-4 space-y-3">
                                {rideOptions.map((ride, index) => (
                                    <motion.li
                                        key={ride.id}
                                        className="flex items-center gap-4 p-3 sm:p-4 rounded-xl bg-gray-900/80 hover:bg-gray-800/80 transition-colors cursor-pointer border border-gray-700"
                                        variants={cardVariants}
                                        initial="initial"
                                        animate="animate"
                                        whileHover="hover"
                                        whileTap="tap"
                                        custom={index}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <span className="text-white p-2 bg-gray-800 rounded-full shadow-lg">{ride.icon}</span>
                                        <div className="flex-1">
                                            <div className="flex justify-between items-center">
                                                <p className="text-sm sm:text-base font-bold text-white">{ride.name}</p>
                                                <p className="text-sm sm:text-base font-bold text-white">{ride.price}</p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Users size={16} className="text-gray-300" />
                                                <p className="text-xs text-gray-300">{ride.capacity}</p>
                                                <p className="text-xs text-gray-300">• {ride.eta} • {ride.time}</p>
                                            </div>
                                            <p className="text-xs text-gray-400">{ride.description}</p>
                                        </div>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    ) : (
                        <motion.img
                            loading="lazy"
                            src="https://imgs.search.brave.com/-szcuCbXMv7wgtzf_ZsDqiy0BgHDYZpNqoTRpBQfNWk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS50ZW5vci5jb20v/REFnTG1hTl9QdFVB/QUFBTS9ncHNzLmdp/Zg.gif"
                            alt="Map preview"
                            className={`${isInputClicked && 'md:block hidden'} rounded-3xl shadow-2xl w-full h-[40vh] sm:h-[50vh] md:h-[80vh] object-cover border border-gray-800`}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        />
                    )}
                </div>

                {/* Left Section: Search Input */}
                <motion.div
                    className={`flex flex-col md:w-1/2 w-full pt-8 sm:pt-10 md:pt-12 bg-gradient-to-b from-gray-950 to-black h-[50vh] sm:h-[60vh] md:h-[80vh] rounded-3xl items-center order-2 md:order-1 border border-gray-800 shadow-2xl ${isInputClicked ? 'z-20 absolute w-full sm:w-3/4 md:w-1/2 inset-x-0 mx-auto' : 'relative'}`}
                    animate={
                        window.innerWidth < 768 && isInputClicked
                            ? { y: '-12vh', scale: 1, x: '0' }
                            : { y: 0, scale: 1, x: '0' }
                    }
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                >
                    <form className="w-full max-w-md px-4 sm:px-6 md:px-0 space-y-6">
                        <motion.div
                            className="text-center md:text-left"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-3 text-white tracking-tight drop-shadow-md">
                                Find Your Perfect Ride
                            </h1>
                            <p className="text-gray-300 text-xs sm:text-sm md:text-base tracking-wide drop-shadow-sm">
                                Discover the best travel options instantly
                            </p>
                        </motion.div>

                        {/* Search Input */}
                        <motion.div
                            className="relative group"
                            variants={inputVariants}
                            animate={isInputClicked ? "focus" : "blur"}
                        >
                            <input
                                type="text"
                                required
                                placeholder="Enter location"
                                className="w-full p-3 sm:p-4 pr-12 rounded-xl bg-gray-900/80 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-white focus:bg-gray-900 transition-all duration-300 text-sm sm:text-base"
                                onFocus={() => window.innerWidth > 768 ? setIsSearchbox(true) : setIsInputClicked(true)}
                                onBlur={() => setIsInputClicked(false) || setIsSearchbox(false)}
                            />
                            <div className="absolute right-4 top-1/2 -translate-y-1/2">
                                <MapPinHouse className="text-gray-300 group-hover:animate-pulse group-hover:text-white" size={20} sm:size={24} />
                            </div>
                        </motion.div>

                        {/* Destination Input */}
                        <motion.div
                            className="relative group"
                            variants={inputVariants}
                            animate={isInputClicked ? "focus" : "blur"}
                        >
                            <input
                                type="text"
                                required
                                placeholder="Enter destination"
                                className="w-full p-3 sm:p-4 pr-12 rounded-xl bg-gray-900/80 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-white focus:bg-gray-900 transition-all duration-300 text-sm sm:text-base"
                                onFocus={() => window.innerWidth > 768 ? setIsSearchbox(true) : setIsInputClicked(true)}
                            />
                            <div className="absolute right-4 top-1/2 -translate-y-1/2">
                                <Car className="text-gray-300 group-hover:animate-pulse group-hover:text-white" size={20} sm:size={24} />
                            </div>
                        </motion.div>

                        {/* Submit Button */}
                        <div className="flex justify-center md:justify-start">
                            <motion.button
                                onClick={() => setIsInputClicked(false) || setIsSearchbox(false)}
                                className="w-3/4 sm:w-2/3 md:w-1/2 bg-black text-white px-6 py-3 rounded-xl font-semibold border border-gray-700 shadow-lg hover:bg-gray-800 active:bg-gray-900 transition-all duration-300 drop-shadow-md"
                                variants={buttonVariants}
                                whileHover="hover"
                                whileTap="tap"
                            >
                                See Prices
                            </motion.button>
                        </div>

                        {/* Search Results */}
                        {window.innerWidth <= 768 && isInputClicked && (
                            <motion.div
                                className="absolute left-0 right-0 shadow-xl top-[43vh] w-full sm:w-3/4 max-h-[60vh] sm:max-h-[50vh] overflow-auto p-3 sm:p-4 bg-gray-950 space-y-2"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                            >
                                <ul className="space-y-3">
                                    {rideOptions.map((ride, index) => (
                                        <motion.li
                                            key={ride.id}
                                            className="flex items-center gap-4 p-3 sm:p-4 rounded-xl bg-gray-900/80 hover:bg-gray-800/80 transition-colors cursor-pointer border border-gray-700"
                                            variants={cardVariants}
                                            initial="initial"
                                            animate="animate"
                                            whileHover="hover"
                                            whileTap="tap"
                                            custom={index}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <span className="text-white p-2 bg-gray-800 rounded-full shadow-lg">{ride.icon}</span>
                                            <div className="flex-1">
                                                <div className="flex justify-between items-center">
                                                    <p className="text-sm sm:text-base font-bold text-white">{ride.name}</p>
                                                    <p className="text-sm sm:text-base font-bold text-white">{ride.price}</p>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Users size={16} className="text-gray-300" />
                                                    <p className="text-xs text-gray-300">{ride.capacity}</p>
                                                    <p className="text-xs text-gray-300">• {ride.eta} • {ride.time}</p>
                                                </div>
                                                <p className="text-xs text-gray-400">{ride.description}</p>
                                            </div>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}
                    </form>
                </motion.div>
            </section>
        </div>
    );
}

export default UserDashboard;