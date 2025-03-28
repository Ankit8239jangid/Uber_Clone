import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SearchInput from '../Dashboard/UserDashbord_Component/SearchInput';
import RideOptionCard from '../Dashboard/UserDashbord_Component/RideOptionCard';
import SearchResults from '../Dashboard/UserDashbord_Component/SearchResults';
import { Car, Landmark, MapPin, Globe, Building, Home, Mountain, Sun, TreePine, Ship, Compass } from "lucide-react";

const data = [
    { id: 1, state: "California", address: "123 Main St, Los Angeles, CA 90001", icon: <Landmark /> },
    { id: 2, state: "Texas", address: "456 Elm St, Houston, TX 77002", icon: <MapPin /> },
    { id: 3, state: "Florida", address: "789 Ocean Dr, Miami Beach, FL 33139", icon: <Globe /> },
    { id: 4, state: "New York", address: "101 Broadway, New York, NY 10001", icon: <Building /> },
    { id: 5, state: "Illinois", address: "222 Lake Shore Dr, Chicago, IL 60611", icon: <Home /> },
    { id: 6, state: "Nevada", address: "777 Vegas Blvd, Las Vegas, NV 89109", icon: <Mountain /> },
    { id: 7, state: "Arizona", address: "888 Desert Rd, Phoenix, AZ 85001", icon: <Sun /> },
    { id: 8, state: "Colorado", address: "345 Aspen Ave, Denver, CO 80202", icon: <TreePine /> },
    { id: 9, state: "Washington", address: "567 Rainier St, Seattle, WA 98101", icon: <Ship /> },
    { id: 10, state: "Oregon", address: "999 Pine St, Portland, OR 97201", icon: <Compass /> }
];

const rideOptions = [
    { id: 1, name: "RideGo", capacity: 4, eta: "2 mins away", time: "15:24", price: "₹193.20", description: "Affordable, compact rides", icon: <Car /> },
    { id: 2, name: "RidePlus", capacity: 4, eta: "3 mins away", time: "15:30", price: "₹245.50", description: "Spacious, premium rides", icon: <Car /> },
    { id: 3, name: "RideEco", capacity: 3, eta: "5 mins away", time: "15:45", price: "₹150.00", description: "Eco-friendly, compact rides", icon: <Car /> },
];

const buttonVariants = {
    hover: {
        scale: 1.05,
        backgroundColor: "#1a1a1a",
        boxShadow: "0 0 15px rgba(255, 255, 255, 0.5)",
        transition: { duration: 0.3, ease: "easeInOut" }
    },
    tap: { scale: 0.95, transition: { duration: 0.2 } }
};

function UserDashboard() {
    const [isInputClicked, setIsInputClicked] = useState(false);
    const [isSearchbox, setIsSearchbox] = useState(false);
    const [location, setLocation] = useState('');
    const [destination, setDestination] = useState('');
   

    const handleRideSelect = (ride) => {
        setLocation(ride.name);
        setDestination(`Price: ${ride.price}, ETA: ${ride.eta}`);
        setIsInputClicked(false);
        setIsSearchbox(false);
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
                                    <RideOptionCard key={ride.id} ride={ride} index={index} onClick={handleRideSelect} />
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

                {/* Left Section: Search Form */}
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

                        <SearchInput
                            isInputClicked={isInputClicked}
                            setIsInputClicked={setIsInputClicked}
                            setIsSearchbox={setIsSearchbox}
                            placeholder="Enter location"
                            icon="MapPinHouse"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />

                        <SearchInput
                            isInputClicked={isInputClicked}
                            setIsInputClicked={setIsInputClicked}
                            setIsSearchbox={setIsSearchbox}
                            placeholder="Enter destination"
                            icon="Car"
                            value={destination}
                            onChange={(e) => setDestination(e.target.value)}
                        />

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

                        {window.innerWidth <= 768 && isInputClicked && (
                            <SearchResults rideOptions={rideOptions} isInputClicked={isInputClicked} onRideSelect={handleRideSelect} />
                        )}
                    </form>
                </motion.div>
            </section>
        </div>
    );
}

export default UserDashboard;