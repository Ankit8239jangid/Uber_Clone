import React from 'react';
import { MapPinHouse, Car } from 'lucide-react';

function Dashboard() {
    return (
        <div className="min-h-screen py-16  md:py-24 bg-gradient-to-br from-gray-900 to-black text-white">
            <section className="container gap-10 mx-auto px-10 h-full flex flex-col md:flex-row">

                {/* Right Section: Image/Map */}
                <div className="flex flex-col md:w-1/2 w-full h-full items-center justify-center relative">
                    <div className="absolute inset-0 bg-blue-500/20 h-1/2 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                    <img
                        loading="lazy"
                        src="https://img.freepik.com/free-photo/young-woman-testing-car-car-showroom_1303-17732.jpg?uid=R111050759&semt=ais_hybrid"
                        alt="Map preview"
                        className="relative rounded-xl shadow-2xl w-full  object-cover transform transition-all duration-300 group-hover:scale-105"
                    />
                </div>


                {/* Left Section: Search Form */}
                <div className="flex flex-col md:w-1/2 w-full items-center justify-center space-y-8">
                    <div className="text-center md:text-left">
                        <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                            Find Your Perfect Ride
                        </h1>
                        <p className="text-gray-400 text-lg">
                            Enter your trip details to get started
                        </p>
                    </div>

                    <form onSubmit={() => navigate('/Landing')} className="space-y-6 w-full">
                        <div className="relative group">
                            <input
                                type="text"
                                required
                                placeholder="Enter location"
                                className="w-full p-4 pr-12 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                            />
                            <div className="absolute right-4 top-1/2 -translate-y-1/2">
                                <MapPinHouse className="text-blue-400 group-hover:animate-pulse" size={24} />
                            </div>
                        </div>

                        <div className="relative group">
                            <input
                                type="text"
                                required
                                placeholder="Enter destination"
                                className="w-full p-4 pr-12 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                            />
                            <div className="absolute right-4 top-1/2 -translate-y-1/2">
                                <Car className="text-blue-400 group-hover:animate-pulse" size={24} />
                            </div>
                        </div>

                        <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 active:bg-blue-800 transition-all duration-300 transform hover:-translate-y-1">
                            See Prices
                        </button>
                    </form>
                </div>


            </section>
            
        </div>
    );
}

export default Dashboard;
