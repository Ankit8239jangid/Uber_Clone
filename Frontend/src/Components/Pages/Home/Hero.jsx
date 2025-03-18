import React from 'react';
import video from '/video.mp4';
import { NavLink, useNavigate } from 'react-router-dom';
const businessData = {

    sections: [
        {
            title: 'Log in to see your recent activity',
            description: 'View past trips, tailored suggestions, support resources, and more.',
            buttonText: 'Log in to your account',
            imageUrl: 'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_768,w_1152/v1730197725/assets/0f/48c7ba-da13-4fdc-b54c-42878042f513/original/Airport-Fall.png',
            altText: 'Uber Business',
            reverse: false,
        },
        {
            title: 'Drive when you want, make what you need',
            description: 'Make money on your schedule with deliveries or rides—or both. You can use your own car or choose a rental through Uber.',
            buttonText: 'Get Started',
            linkText: 'Already have an account?',
            imageUrl: 'https://img.freepik.com/free-photo/young-woman-testing-car-car-showroom_1303-17732.jpg?uid=R111050759&semt=ais_hybrid',
            altText: 'Uber Business',
            reverse: false,
        },
        {
            title: 'The Uber you know, reimagined for business',
            description: 'Uber for business is a platform for managing global rides and meals, local deliveries, for companies of any size.',
            buttonText: 'Get Started',
            linkText: 'Check out our solutions',
            imageUrl: 'https://img.freepik.com/free-photo/man-buying-car_1303-13714.jpg?uid=R111050759&semt=ais_hybrid',
            altText: 'Uber Business',
            reverse: false,
        },
        {
            title: 'Make money by renting out your car',
            description: "Connect with thousands of drivers and earn more per week with Uber's free fleet management tools.",
            buttonText: 'Get Started',
            imageUrl: 'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_1152,w_1152/v1696243819/assets/18/34e6fd-33e3-4c95-ad7a-f484a8c812d7/original/fleet-management.jpg',
            altText: 'Renting Car',
            reverse: true,
        },
        {
            title: 'Learn how to use the app',
            description: "Whether it’s your first trip or your 100th, Driver App Basics is your comprehensive resource filled with tips and informative videos.",
            buttonText: 'Go to Driver App Basics',
            imageUrl: 'https://tb-static.uber.com/prod/uber-static/chameleon-assets/v1.0.0/bfe81e31-f084-4e16-bc67-fab7fb880867/desk2x.jpg',
            altText: 'Renting Car',
            reverse: true,
        },
        {
            title: 'Getting rewarded with Uber Pro',
            description: "Uber Pro is a rewards program that recognizes your commitment and effort, so you can reach your goals—on and off the road.",
            buttonText: 'Learn more',
            imageUrl: 'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_648,w_1152/v1680656337/assets/ca/1cd711-fac4-4918-88be-577daa6a2161/original/landingpage_v02_d_ltr_2x.png',
            altText: 'Renting Car',
            reverse: true,
        },
    ],
    apps: [
        {
            title: 'Download the Uber App',
            description: 'Scan to download',
            imageUrl: 'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_225,w_225/v1690813707/assets/50/e85531-2f7e-4ee7-92d4-e39a6801ee2b/original/QR_https___t.uber.com_download-driver-app.png',
            altText: 'Uber App QR Code',
        },
        {
            title: 'Download the Driver App',
            description: 'Scan to download',
            imageUrl: 'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_225,w_225/v1690813707/assets/50/e85531-2f7e-4ee7-92d4-e39a6801ee2b/original/QR_https___t.uber.com_download-driver-app.png',
            altText: 'Driver App QR Code',
        },
    ],
    services: [
        {
            title: "Ride",
            description: "Go anywhere with Uber. Request a ride, hop in, and go.",
            buttonText: "Details",
            imageUrl: "https://mobile-content.uber.com/launch-experience/ride.png",
        },
        {
            title: "Courier",
            description: "Uber makes same-day item delivery easier than ever",
            buttonText: "Details",
            imageUrl: "https://cn-geo1.uber.com/static/mobile-content/Courier.png",
        },
        {
            title: "Reserve",
            description: "Reserve your ride in advance so you can relax on the day of your trip.",
            buttonText: "Details",
            imageUrl: "https://mobile-content.uber.com/uber_reserve/reserve_clock.png",
        },
    ]







};

const BusinessSection = ({ title, description, buttonText, linkText, imageUrl, altText, reverse }) => {
    const navigate = useNavigate()
    return (
        <section className={`flex flex-col md:flex-row items-center justify-between px-5 gap-5 py-12 max-w-7xl mx-auto ${reverse ? 'md:flex-row-reverse' : ''}`}>
            <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
                <h1 className="text-3xl md:text-5xl font-bold">{title}</h1>
                <p className="text-lg">{description}</p>
                <div className="space-x-4">
                    <button onClick={() => navigate('/signup')} className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800">{buttonText}</button>
                    {linkText && <NavLink to={'/signup'} className="text-gray-500 hover:underline">{linkText}</NavLink>}
                </div>
            </div>
            <div className="w-full md:w-1/2">
                <img src={imageUrl} alt={altText} className="rounded-lg mx-auto" />
            </div>
        </section>
    );
};

const AppsSection = () => {
    return (
        <section className="px-6 py-12 max-w-7xl mx-auto bg-gray-100 text-center">
            <h2 className="text-3xl font-bold mb-6">It's easier in the apps</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {businessData.apps.map((app, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow">
                        <img src={app.imageUrl} alt={app.altText} className="mx-auto mb-4" />
                        <p className="text-lg">{app.title}</p>
                        <p className="text-gray-500">{app.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

const Hero = () => {
    const navigate = useNavigate()
    return (
        <div className="bg-white text-black min-h-screen">

            {/* Hero Section */}
            <section className=" bg-black grid grid-cols-1 md:grid-cols-2 gap-6 px-6 py-12 max-w-7xl mx-auto items-center">
                <div className="space-y-6 text-center md:text-left text-white">
                    <h1 className="text-4xl md:text-5xl font-bold">Go anywhere with Uber</h1>
                    <p className="text-lg">Request a ride, hop in, and go.</p>
                    <div className="space-y-4">
                        <input
                            type="text"
                            required
                            placeholder="Enter location"
                            className="w-full p-2 rounded bg-white text-black placeholder-gray-500"
                        />
                        <input
                            type="text"
                            required
                            placeholder="Enter destination"
                            className="w-full p-2 rounded bg-white text-black placeholder-gray-500"
                        />
                        <button onClick={() => navigate('/signup')} className="w-full bg-white text-black px-4 py-2 rounded hover:bg-gray-200">
                            See prices
                        </button>
                    </div>
                </div>
                <div className="flex justify-center pt-10">
                    <div className="h-full w-full rounded-xl overflow-hidden">
                        <video
                            src={video}
                            muted
                            autoPlay
                            loop
                            className="w-full h-full object-cover"
                        ></video>
                    </div>
                </div>
            </section>

            {/* Suggestions Section */}
            <section className="px-6 py-12 max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">Suggestions</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {businessData.services.map((item, index) => (
                        <div key={index} className="bg-gray-100 p-4 rounded-lg shadow flex items-center justify-center ">
                            <div className="">
                                <h3 className="text-lg font-semibold">{item.title}</h3>
                                <p className="mt-2 text-wrap">{item.description}</p>
                                <button onClick={() => navigate('/signup')} className="mt-4 bg-white text-black px-4 py-2 rounded hover:bg-gray-200">Details</button>
                            </div>
                            <img src={item.imageUrl} className='h-24 w-24' alt="hihihih" />
                        </div>
                    ))}
                </div>
            </section>


            {businessData.sections.map((section, index) => (
                <BusinessSection key={index} {...section} />
            ))}
            <AppsSection />
        </div>
    );
};

export default Hero;
