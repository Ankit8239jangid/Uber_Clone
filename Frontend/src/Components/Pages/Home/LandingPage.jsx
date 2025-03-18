import React, { useState } from 'react';
import image from '/Travelers.png';
import { MapPin, Search, Clock, Truck, Users, Menu, X } from 'lucide-react';

const LandingPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-6xl w-full bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Navigation Bar */}
        <nav className="p-4 md:p-6 bg-indigo-700 text-white">
          <div className="flex items-center justify-between">
            <div className="font-bold text-xl md:text-2xl">RideQuest</div>
            <div className="md:hidden">
              <button onClick={toggleMobileMenu} className="focus:outline-none">
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
            <div className="hidden md:flex space-x-6">
              <button className="hover:text-gray-200 transition">Home</button>
              <button className="hover:text-gray-200 transition">About</button>
              <button className="hover:text-gray-200 transition">Services</button>
              <button className="hover:text-gray-200 transition">Safety</button>
            </div>
            <div className="hidden md:flex space-x-4">
              <button className="hover:text-gray-200 transition">Sign in</button>
              <button className="bg-red-500 px-4 py-2 rounded-full hover:bg-red-600 transition">Sign up</button>
            </div>
          </div>


          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="fixed top-16 left-0 w-full bg-white text-black shadow-2xl z-40">
              <div className="flex flex-col space-y-3 p-4">
                <button className=" hover:text-blue-600 py-2">Home</button>
                <button className=" hover:text-blue-600 py-2">About</button>
                <button className=" hover:text-blue-600 py-2">Services</button>
                <button className=" hover:text-blue-600 py-2">Safety</button>
                <div className="flex space-x-3 mt-4 pt-3 border-t border-gray-200">
                  <button className="bg-red-700 text-white px-3 py-1 rounded-full hover:bg-indigo-100">Sign up</button>
                  <button className="bg-red-700 text-white px-3 py-1 rounded-full hover:bg-indigo-100">Sign-in</button>
                </div>
              </div>
            </div>
          )}
        </nav>




        {/* Hero Section */}
        <div className="flex flex-col md:flex-row p-6 gap-6">
          <div className="w-full md:w-1/2 space-y-6">
            <div className="flex items-center text-indigo-900 font-medium">
              <MapPin size={20} className="mr-2 text-blue-500" /> Rides at your fingertips
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Discover the Best <span className="text-red-500">Ride</span>: Get Moving!
            </h1>
            <p className="text-gray-600 text-lg">Affordable, reliable rides whenever you need.</p>
            <div className="relative w-full">
              <input type="text" placeholder="Where are you going?" className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-indigo-500" />
              <Search className="absolute left-3 top-3 text-gray-400" size={20} />
            </div>
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <img src='https://img.freepik.com/free-photo/young-female-traveler-with-backpack-binoculars_23-2147842482.jpg?t=st=1742279863~exp=1742283463~hmac=26848d39a6168f495df9085e3e7b4e06bd274a767c33c909e0b16c5d8f3d0301&w=740' alt="Happy riders using app" className="w-64 h-64 md:w-96 md:h-96 object-cover rounded-full shadow-lg  hover:scale-105 transition-all" />
          </div>
        </div>

        {/* About Section */}
        <div className="p-6 bg-gray-50 text-center">
          <h2 className="text-3xl font-bold text-gray-900">About RideQuest</h2>
          <p className="mt-4 text-gray-600">RideQuest is dedicated to providing safe, reliable, and affordable rides to customers worldwide. Our cutting-edge technology ensures seamless ride booking, safety, and convenience.</p>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6">
          {[{ icon: MapPin, title: "Your location", desc: "Set pickup point" },
          { icon: Clock, title: "Pickup time", desc: "Now" },
          { icon: Truck, title: "Ride type", desc: "Select cab" },
          { icon: Users, title: "Passengers", desc: "Add riders" }
          ].map(({ icon: Icon, title, desc }, idx) => (
            <div key={idx} className="bg-gray-100 rounded-lg p-4 flex flex-col items-center">
              <Icon size={24} className="text-indigo-700 mb-2" />
              <h3 className="text-lg font-medium">{title}</h3>
              <p className="text-sm text-gray-500">{desc}</p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer className="bg-indigo-700 text-white p-6 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} RideQuest. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-3">
            <button className="hover:text-gray-300">Privacy Policy</button>
            <button className="hover:text-gray-300">Terms of Service</button>
            <button className="hover:text-gray-300">Contact Us</button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;
