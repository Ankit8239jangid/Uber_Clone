import { ChevronRight ,ChevronLeft } from 'lucide-react';
import React, { useState, useEffect } from 'react';

const Carousel = ({ children: slides = [], autoSlide = false, autoSlideInterval = 3000 }) => {
    const [curr, setCurr] = useState(0);

    const prev = () => setCurr((curr) => (curr > 0 ? curr - 1 : 0)); // Stop at first image
    const next = () => setCurr((curr) => (curr < slides.length - 1 ? curr + 1 : curr)); // Stop at last image

    useEffect(() => {
        if (!autoSlide || slides.length <= 1) return;

        const slideInterval = setInterval(() => {
            setCurr((prev) => (prev < slides.length - 1 ? prev + 1 : prev)); // Stops at last slide
        }, autoSlideInterval);

        return () => clearInterval(slideInterval);
    }, [autoSlide, autoSlideInterval, slides.length]);

    return (
        <div className="relative max-w-3xl  mt-10 overflow-hidden rounded-lg shadow-lg">
            {/* Slide Container */}
            <div
                className="flex transition-transform ease-in-out duration-500"
                style={{ transform: `translateX(-${curr * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <div key={index} className="w-full h-[60vh] flex-shrink-0 flex  bg-gray-100 o">
                        {slide}
                    </div>
                ))}
            </div>

            {/* Navigation Dots */}
            <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-2">
                {slides.map((_, i) => (
                    <div
                        key={i}
                        className={`w-3 h-3 rounded-full transition-all ${curr === i ? 'bg-white scale-125' : 'bg-gray-400 opacity-50'}`}
                    />
                ))}
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={prev}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-80 text-white p-3 rounded-full shadow-md transition"
            >
                <ChevronLeft />
            </button>
            <button
                onClick={next}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-80 text-white p-3 rounded-full shadow-md transition"
            >
            <ChevronRight />
            </button>
        </div>
    );
};

export default Carousel;
