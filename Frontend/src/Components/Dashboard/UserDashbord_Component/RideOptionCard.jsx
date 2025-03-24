import React from 'react';
import { Users } from 'lucide-react';
import { motion } from 'framer-motion';

const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
    hover: { y: -5, boxShadow: "0 8px 20px rgba(255, 255, 255, 0.2)", transition: { duration: 0.3 } },
    tap: { scale: 0.98, transition: { duration: 0.2 } }
};

function RideOptionCard({ ride, index, onClick }) {
    return (
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
            onClick={() => onClick(ride)}
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
    );
}

export default RideOptionCard;