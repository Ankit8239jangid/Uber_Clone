// import React, { useState } from 'react';
// import { MapPinHouse, Car } from 'lucide-react';
// import { motion } from 'framer-motion';

// function Serch_Input() {
//     const [isInputClicked, setIsInputClicked] = useState(false);

//     const handleToggle = () => {
//         setIsInputClicked(!isInputClicked);
//     };

//     return (
//         <>
//             {/* Left Section: Search Form */}
//             <div className="flex flex-col md:w-1/2 w-full pt-10 rounded-t-2xl items-center">
//                 <form className="space-y-6 w-full">
//                     <div className="text-center md:text-left">
//                         <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
//                             Find Your Perfect Ride
//                         </h1>
//                         <p className="text-gray-400 text-lg">
//                             Enter your trip details to get started
//                         </p>
//                     </div>

//                     {/* Input for Location */}
//                     <motion.div
//                         className="relative group"
//                         animate={{ y: isInputClicked ? -50 : 0 }} // Move up on click
//                         transition={{ type: 'spring', stiffness: 300, damping: 30 }}
//                     >
//                         <input
//                             type="text"
//                             required
//                             placeholder="Enter location"
//                             className="w-full p-4 pr-12 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
//                             onFocus={handleToggle} // Move input up when clicked
//                         />
//                         <div className="absolute right-4 top-1/2 -translate-y-1/2">
//                             <MapPinHouse className="text-blue-400 group-hover:animate-pulse" size={24} />
//                         </div>
//                     </motion.div>

//                     {/* Input for Destination */}
//                     <motion.div
//                         className="relative group"
//                         animate={{ y: isInputClicked ? -50 : 0 }} // Move up on click
//                         transition={{ type: 'spring', stiffness: 300, damping: 30 }}
//                     >
//                         <input
//                             type="text"
//                             required
//                             placeholder="Enter destination"
//                             className="w-full p-4 pr-12 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
//                             onFocus={handleToggle} // Move input up when clicked
//                         />
//                         <div className="absolute right-4 top-1/2 -translate-y-1/2">
//                             <Car className="text-blue-400 group-hover:animate-pulse" size={24} />
//                         </div>
//                     </motion.div>

//                     {/* Submit Button */}
//                     <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 active:bg-blue-800 transition-all duration-300 transform hover:-translate-y-1">
//                         See Prices
//                     </button>
//                 </form>
//             </div>
//         </>
//     );
// }

// export default Serch_Input;
