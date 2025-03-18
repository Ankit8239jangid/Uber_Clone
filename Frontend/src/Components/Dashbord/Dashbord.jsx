import React from 'react'
const navLinks = ["Ride", "Drive", "Business", "About"];
const userOptions = ["Help", "Log In", "Sign Up"];

function Dashbord() {
    return (
        <>
            <div className="bg-black text-white min-h-screen">
                {/* hederrrrrr */}
                <header className="flex flex-wrap justify-between items-center px-6 py-4 md:flex-nowrap">
                    <div className="flex items-center space-x-6">
                        <a href="#" className="text-xl font-bold">Uber</a>
                        <nav className="hidden md:flex space-x-6">
                            {navLinks.map((link, index) => (
                                <a key={index} href="#" className="hover:text-gray-300">{link}</a>
                            ))}
                        </nav>
                    </div>
                    <div className="flex items-center space-x-4">
                        <span className="text-sm">EN</span>
                        {userOptions.map((option, index) => (
                            <a key={index} href="#" className="hover:text-gray-300">{option}</a>
                        ))}
                        <button className="border border-white px-4 py-2 rounded hover:bg-white hover:text-black">{userOptions[1]}</button>
                        <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200">{userOptions[2]}</button>
                    </div>
                </header>



                {/* Hero Section */}
                <section className="flex items-center justify-between px-6 py-12 max-w-7xl mx-auto">
                    <div className="space-y-6">
                        <h1 className="text-5xl font-bold">Go anywhere with Uber</h1>
                        <p className="text-lg">Request a ride, hop in, and go.</p>
                        <div className="space-y-4">
                            <input
                                type="text"
                                placeholder="Enter location"
                                className="w-full p-2 rounded bg-white text-black placeholder-gray-500"
                            />
                            <input
                                type="text"
                                placeholder="Enter destination"
                                className="w-full p-2 rounded bg-white text-black placeholder-gray-500"
                            />
                            <button className="w-full bg-white text-black px-4 py-2 rounded hover:bg-gray-200">
                                See prices
                            </button>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <img
                            src='https://img.freepik.com/free-vector/commuting-by-bike-concept-illustration_114360-28364.jpg?uid=R111050759&semt=ais_hybrid'
                            alt="Uber Ride"
                            className="rounded-lg"
                        />
                    </div>
                </section>
            </div>


            <div className="bg-white text-black min-h-screen">
              

                {/* Drive Hero Section */}
                <section className="flex items-center justify-between px-6 py-12 max-w-7xl mx-auto bg-white">
                    <div className="w-1/2">
                        <img
                            src='https://img.freepik.com/free-vector/commuting-by-bike-concept-illustration_114360-28364.jpg?uid=R111050759&semt=ais_hybrid'
                            alt="Driver in Car"
                            className="rounded-lg"
                        />
                    </div>
                    <div className="w-1/2 space-y-6">
                        <h1 className="text-5xl font-bold">Drive when you want, make what you need</h1>
                        <p className="text-lg">
                            Make money on your schedule with deliveries or rides—or both. You can use your own car or choose a rental
                            through Uber.
                        </p>
                        <div className="space-y-4">
                            <button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800">Get Started</button>
                            <a href="#" className="text-gray-500 hover:underline">Already have an account? Sign in</a>
                        </div>
                    </div>
                </section>
            </div>










            <div className="bg-white text-black min-h-screen">
                {/* Uber for Business Section */}
                <section className="flex items-center justify-between px-6 py-12 max-w-7xl mx-auto">
                    <div className="w-1/2 space-y-6">
                        <h1 className="text-5xl font-bold">The Uber you know, reimagined for business</h1>
                        <p className="text-lg">
                            Uber for business is a platform for managing global rides and meals, local deliveries, for companies of any
                            size.
                        </p>
                        <div className="space-x-4">
                            <button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800">Get Started</button>
                            <a href="#" className="text-gray-500 hover:underline">Check out our solutions</a>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <img
                            src='https://img.freepik.com/free-vector/commuting-by-bike-concept-illustration_114360-28364.jpg?uid=R111050759&semt=ais_hybrid'
                            alt="Uber Business"
                            className="rounded-lg"
                        />
                    </div>
                </section>

                {/* Make Money by Renting Out Your Car Section */}
                <section className="flex items-center justify-between px-6 py-12 max-w-7xl mx-auto">
                    <div className="w-1/2">
                        <img
                            src='https://img.freepik.com/free-vector/commuting-by-bike-concept-illustration_114360-28364.jpg?uid=R111050759&semt=ais_hybrid'
                            alt="Renting Car"
                            className="rounded-lg"
                        />
                    </div>
                    <div className="w-1/2 space-y-6">
                        <h1 className="text-5xl font-bold">Make money by renting out your car</h1>
                        <p className="text-lg">
                            Connect with thousands of drivers and earn more per week with Uber's free fleet management tools.
                        </p>
                        <button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800">Get Started</button>
                    </div>
                </section>

                {/* It's Easier in the Apps Section */}
                <section className="px-6 py-12 max-w-7xl mx-auto bg-gray-100 text-center">
                    <h2 className="text-3xl font-bold mb-6">It's easier in the apps</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow">
                            <img
                                src='https://img.freepik.com/free-vector/commuting-by-bike-concept-illustration_114360-28364.jpg?uid=R111050759&semt=ais_hybrid'
                                alt="Uber App QR Code"
                                className="mx-auto mb-4"
                            />
                            <p className="text-lg">Download the Uber App</p>
                            <p className="text-gray-500">Scan to download</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow">
                            <img
                                src='https://img.freepik.com/free-vector/commuting-by-bike-concept-illustration_114360-28364.jpg?uid=R111050759&semt=ais_hybrid'
                                alt="Driver App QR Code"
                                className="mx-auto mb-4"
                            />
                            <p className="text-lg">Download the Driver App</p>
                            <p className="text-gray-500">Scan to download</p>
                        </div>
                    </div>
                </section>
            </div>


            <footer className="bg-black text-white py-8 px-4 md:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Footer Content */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                        {/* Company Column */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Uber</h3>
                            <p className="text-sm mb-4">Visit Help Center</p>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="hover:text-gray-300">About us</a></li>
                                <li><a href="#" className="hover:text-gray-300">Our Offerings</a></li>
                                <li><a href="#" className="hover:text-gray-300">Newsroom</a></li>
                                <li><a href="#" className="hover:text-gray-300">Investors</a></li>
                                <li><a href="#" className="hover:text-gray-300">Blog</a></li>
                                <li><a href="#" className="hover:text-gray-300">Careers</a></li>
                            </ul>
                        </div>

                        {/* Products Column */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Products</h3>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="hover:text-gray-300">Ride</a></li>
                                <li><a href="#" className="hover:text-gray-300">Driver</a></li>
                                <li><a href="#" className="hover:text-gray-300">Deliver</a></li>
                                <li><a href="#" className="hover:text-gray-300">Eat</a></li>
                                <li><a href="#" className="hover:text-gray-300">Uber for Business</a></li>
                                <li><a href="#" className="hover:text-gray-300">Uber Freight</a></li>
                                <li><a href="#" className="hover:text-gray-300">Gift cards</a></li>
                            </ul>
                        </div>

                        {/* Global Citizenship Column */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Global citizenship</h3>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="hover:text-gray-300">Safety</a></li>
                                <li><a href="#" className="hover:text-gray-300">Diversity and inclusion</a></li>
                                <li><a href="#" className="hover:text-gray-300">Sustainability</a></li>
                            </ul>
                        </div>

                        {/* Travel Column */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Travel</h3>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="hover:text-gray-300">Reserve</a></li>
                                <li><a href="#" className="hover:text-gray-300">Airports</a></li>
                                <li><a href="#" className="hover:text-gray-300">Cities</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* App Store and Social Media */}
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4 mb-6">
                        {/* App Store Badges */}
                        <div className="flex space-x-4">
                            <a href="#" className="flex items-center">
                                <img
                                    src="https://via.placeholder.com/120x40" // Replace with actual Google Play badge
                                    alt="Get it on Google Play"
                                    className="h-10"
                                />
                            </a>
                            <a href="#" className="flex items-center">
                                <img
                                    src="https://via.placeholder.com/120x40" // Replace with actual App Store badge
                                    alt="Download on the App Store"
                                    className="h-10"
                                />
                            </a>
                        </div>

                        {/* Social Media Icons */}
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-gray-300"><span className="text-2xl">f</span></a>
                            <a href="#" className="hover:text-gray-300"><span className="text-2xl">x</span></a>
                            <a href="#" className="hover:text-gray-300"><span className="text-2xl">y</span></a>
                            <a href="#" className="hover:text-gray-300"><span className="text-2xl">i</span></a>
                            <a href="#" className="hover:text-gray-300"><span className="text-2xl">o</span></a>
                        </div>
                    </div>

                    {/* Language and Copyright */}
                    <div className="flex flex-col md:flex-row justify-between items-center text-sm border-t border-gray-700 pt-4">
                        <p className="mb-2 md:mb-0">© 2024 Uber Technologies Inc.</p>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-gray-300">Privacy</a>
                            <a href="#" className="hover:text-gray-300">Accessibility</a>
                            <a href="#" className="hover:text-gray-300">Terms</a>
                            <div className="flex items-center space-x-2">
                                <span>English</span>
                                <span className="text-gray-400">|</span>
                                <a href="#" className="hover:text-gray-300">Bhojpuri</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>


        </>
    );

};
export default Dashbord

