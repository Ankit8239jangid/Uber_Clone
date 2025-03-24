import React from 'react';
import { motion } from 'framer-motion';
import RideOptionCard from './RideOptionCard';

function SearchResults({ rideOptions, isInputClicked, onRideSelect }) {
    return (
        <motion.div
            className="absolute left-0 right-0 shadow-xl top-[43vh] w-full sm:w-3/4 max-h-[60vh] sm:max-h-[50vh] overflow-auto p-3 sm:p-4 bg-gray-950 space-y-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <ul className="space-y-3">
                {rideOptions.map((ride, index) => (
                    <RideOptionCard key={ride.id} ride={ride} index={index} onClick={onRideSelect} />
                ))}
            </ul>
        </motion.div>
    );
}

export default SearchResults;