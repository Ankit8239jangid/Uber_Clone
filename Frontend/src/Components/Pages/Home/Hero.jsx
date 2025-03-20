import React from 'react';
import video from '/video.mp4';
import { NavLink, useNavigate } from 'react-router-dom';
import { businessData } from '../../../utility/mockData';
import { MapPinHouse, Car } from 'lucide-react';

const Hero = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-white text-black min-h-screen">
            {/* Hero Section */}
            <section className="bg-black grid grid-cols-1 md:grid-cols-2 gap-6 px-6 py-12 max-w-7xl mx-auto items-center mt-10">
                <div className="space-y-6 text-center md:text-left text-white">
                    <h1 className="text-4xl md:text-5xl font-bold">Go anywhere with Uber</h1>
                    <p className="text-lg">Request a ride, hop in, and go.</p>

                    <form onSubmit={() => navigate('/user-signup')} className="space-y-4 w-full">
                        <div className="relative flex items-center">
                            <input
                                type="text"
                                required
                                placeholder="Enter location"
                                className="w-full p-3 rounded bg-white text-black placeholder-gray-500 focus:ring-2 focus:ring-gray-400"
                            />
                            <div className="absolute right-3 top-3 flex flex-col items-center">
                                <MapPinHouse className="text-black animate-bounce" />
                                <div className="h-12 w-0.5 bg-green-600"></div>
                            </div>
                        </div>

                        <div className="relative flex items-center">
                            <input
                                type="text"
                                required
                                placeholder="Enter destination"
                                className="w-full p-3 rounded bg-white text-black placeholder-gray-500 focus:ring-2 focus:ring-gray-400"
                            />
                            <div className="absolute -top-4 right-3 flex flex-col items-center">
                                <div className="h-10 w-0.5 bg-green-600 rounded-lg"></div>
                                <Car className="text-black" />
                            </div>
                        </div>

                        <button className="w-full bg-white text-black px-4 py-3 rounded hover:bg-gray-200 transition">
                            See prices
                        </button>
                    </form>
                </div>

                <div className="max-w-lg min-w-min rounded-lg">
                    <video key="video-slide" src={video} autoPlay muted loop className="w-full object-cover rounded-lg" />
                </div>
            </section>

            {/* Suggestions Section */}
            <section className="px-6 py-12 max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">Suggestions</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {businessData.services.map((item, index) => (
                        <div key={index} className="bg-gray-100 p-4 rounded-lg shadow flex flex-col md:flex-row items-center justify-between">
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold">{item.title}</h3>
                                <p className="mt-2">{item.description}</p>
                                <button
                                    onClick={() => navigate('/user-signup')}
                                    className="mt-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
                                >
                                    Details
                                </button>
                            </div>
                            <img src={item.imageUrl} className="h-24 w-24 object-cover rounded-lg" alt={item.title} />
                        </div>
                    ))}
                </div>
            </section>

            {/* Business Sections */}
            {businessData.sections.map((section, index) => (
                <section
                    key={index}
                    className={`flex flex-col md:flex-row items-center justify-between px-5 gap-5 py-12 max-w-7xl mx-auto ${section.reverse ? 'md:flex-row-reverse' : ''}`}
                >
                    <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
                        <h1 className="text-3xl md:text-5xl font-bold">{section.title}</h1>
                        <p className="text-lg">{section.description}</p>
                        <div className="space-x-4">
                            <button
                                onClick={() => navigate(section.buttonText === 'Log in to your account' ? '/user-login' : '/user-signup')}
                                className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800"
                            >
                                {section.buttonText}
                            </button>
                            {section.linkText && (
                                <NavLink to="/user-signup" className="text-gray-500 hover:underline">
                                    {section.linkText}
                                </NavLink>
                            )}
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <img src={section.imageUrl} alt={section.altText} className="rounded-lg mx-auto object-cover" />
                    </div>
                </section>
            ))}

            {/* Apps Section */}
            <section className="px-6 py-12 max-w-7xl mx-auto bg-gray-100 text-center">
                <h2 className="text-3xl font-bold mb-6">It's easier in the apps</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {businessData.apps.map((app, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow">
                            <img src={app.imageUrl} alt={app.altText} className="mx-auto mb-4 object-cover rounded-lg" />
                            <p className="text-lg">{app.title}</p>
                            <p className="text-gray-500">{app.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Hero;
