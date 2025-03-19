import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink, useNavigate, useSearchParams } from "react-router-dom";
import UserLogout from "../../auth/userLogout";

const navLinks = ["Ride", "Drive", "Business", "About"];

const Header = () => {
    const [searchParams] = useSearchParams();
    const login = searchParams.get('login') === 'true'; // ✅ Ensure proper boolean check
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <header className="bg-black text-white fixed top-0 w-full z-50 shadow-lg">
            <div className="flex justify-between items-center px-6 py-2 max-w-7xl mx-auto">
                {/* Logo */}
                <NavLink to="/" className="text-2xl font-bold">Uber</NavLink>

                {/* Navigation Links */}
                <nav className="hidden md:flex space-x-6">
                    {navLinks.map((link) => (
                        <NavLink to={`/${link.toLowerCase()}`} key={link} className="hover:text-gray-300 transition duration-300">
                            {link}
                        </NavLink>
                    ))}
                </nav>

                {/* Actions & Hamburger */}
                <div className="flex items-center space-x-4">
                    {login ? (
                        <UserLogout /> // ✅ Show logout button if logged in
                    ) : (
                        <>
                            <button onClick={() => navigate('/user-login')} className="border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition duration-300 hidden md:inline">
                                Log In
                            </button>
                            <button onClick={() => navigate('/user-signup')} className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition duration-300 hidden md:inline">
                                Sign Up
                            </button>
                        </>
                    )}
                    <button className="md:hidden fixed right-6 z-30" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden fixed top-0 left-0 w-full h-screen bg-black bg-opacity-90 flex flex-col items-center justify-center transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
                {navLinks.map((link) => (
                    <NavLink to={`/${link.toLowerCase()}`} key={link} className="text-2xl text-white py-3 hover:text-gray-300 transition duration-300">
                        {link}
                    </NavLink>
                ))}

                {login ? (
                    <UserLogout />
                ) : (
                    <button onClick={() => navigate('/user-login')} className="mt-6 border border-white px-6 py-3 rounded hover:bg-white hover:text-black transition duration-300">
                        Log In
                    </button>
                )}

                <button onClick={() => navigate('/user-signup')} className="mt-4 bg-white text-black px-6 py-3 rounded hover:bg-gray-200 transition duration-300">
                    Sign Up
                </button>
            </div>
        </header>
    );
};

export default Header;
