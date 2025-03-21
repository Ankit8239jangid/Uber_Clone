import React from 'react';
import { NavLink } from 'react-router-dom';
import Apps_Stor from '/Apps_Stor.jpg'
import Googelplay from '/Googelplay.webp'

const footerData = {
    company: {
        title: "Uber",
        helpText: "Visit Help Center",
        links: ["About us", "Our Offerings", "Newsroom", "Investors", "Blog", "Careers"],
    },
    products: {
        title: "Products",
        links: ["Ride", "Driver", "Deliver", "Eat", "Uber for Business", "Uber Freight", "Gift cards"],
    },
    citizenship: {
        title: "Global citizenship",
        links: ["Safety", "Diversity and inclusion", "Sustainability"],
    },
    travel: {
        title: "Travel",
        links: ["Reserve", "Airports", "Cities"],
    },

    legalLinks: ["Privacy", "Accessibility", "Terms"],
    languageOptions: ["English", "Hindi"],
};

const Footer = () => {
    return (
        <footer className="bg-black text-white py-8 px-4 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Footer Content */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                    {Object.values(footerData).slice(0, 4).map((section, idx) => (
                        <div key={idx}>
                            <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
                            {section.helpText && <p className="text-sm mb-4">{section.helpText}</p>}
                            <ul className="space-y-2 text-sm">
                                {section.links.map((link, index) => (
                                    <li key={index}><NavLink href="#" className="hover:text-gray-300">{link}</NavLink></li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* App Store and Social Media */}
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4 mb-6">
                    {/* App Store Badges */}
                    <div className="flex space-x-4">
                        <NavLink href="#"><img loading='lazy' src={Googelplay} alt="Google Play" className="h-10" /></NavLink>
                        <NavLink href="#"><img loading='lazy' src={Apps_Stor} alt="App Store" className="h-10" /></NavLink>
                    </div>

                </div>

                {/* Language and Copyright */}
                <div className="flex flex-col md:flex-row justify-between items-center text-sm border-t border-gray-700 pt-4">
                    <p className="mb-2 md:mb-0">© 2024 Uber Technologies Inc by Ankit.</p>
                    <div className="flex space-x-4">
                        {footerData.legalLinks.map((link, index) => (
                            <NavLink key={index} href="#" className="hover:text-gray-300">{link}</NavLink>
                        ))}
                        <div className="flex items-center space-x-2">
                            {footerData.languageOptions.map((lang, index) => (
                                <NavLink key={index} href="#" className="hover:text-gray-300">{lang}</NavLink>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;