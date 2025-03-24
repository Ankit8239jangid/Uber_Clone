import React from 'react';
import { MapPinHouse, Car } from 'lucide-react';
import { motion } from 'framer-motion';

const inputVariants = {
    focus: { scale: 1.02, boxShadow: "0 0 10px rgba(255, 255, 255, 0.3)" },
    blur: { scale: 1, boxShadow: "none" }
};

function SearchInput({ isInputClicked, setIsInputClicked, setIsSearchbox, placeholder, icon, value, onChange }) {
    return (
        <motion.div
            className="relative group"
            variants={inputVariants}
            animate={isInputClicked ? "focus" : "blur"}
        >
            <input
                type="text"
                required
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="w-full p-3 sm:p-4 pr-12 rounded-xl bg-gray-900/80 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-white focus:bg-gray-900 transition-all duration-300 text-sm sm:text-base"
                onFocus={() => window.innerWidth > 768 ? setIsSearchbox(true) : setIsInputClicked(true)}
                onBlur={() => setIsInputClicked(false) || setIsSearchbox(false)}
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
                {icon === 'MapPinHouse' ? (
                    <MapPinHouse className="text-gray-300 group-hover:animate-pulse group-hover:text-white" size={20} />
                ) : (
                    <Car className="text-gray-300 group-hover:animate-pulse group-hover:text-white" size={20} />
                )}
            </div>
        </motion.div>
    );
}

export default SearchInput;