import React, { useState } from "react";
import { Menu, MoonStar, Sun, X } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const navLinks = ["Ride", "Drive", "Business", "About"];

const Header = () => {
    const { handleLogout, isLogin, handleDashboard, ThemMode, setThemMode } = useAuth();
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className="bg-black text-white fixed top-0 w-full z-50 shadow-lg">
            <div className="flex justify-between items-center px-6 py-2 max-w-7xl mx-auto">
                {/* Logo */}
                <NavLink to="/" className="text-2xl font-bold">
                    Uber
                </NavLink>

                {/* Navigation Links */}
                <nav className="hidden md:flex space-x-6">
                    {navLinks.map((link) => (
                        <NavLink
                            to={`/${link.toLowerCase()}`}
                            key={link}
                            className={({ isActive }) =>
                                `hover:text-gray-300 transition duration-300 ${isActive ? "text-gray-300" : ""}`
                            }
                        >
                            {link}
                        </NavLink>
                    ))}
                </nav>

                {/* Actions & Hamburger */}
                <div className="flex items-center space-x-4">
                    {isLogin ? (
                        <div className="flex gap-4">
                            <button
                                onClick={() => {
                                    handleDashboard();
                                    toggleMenu();
                                }}
                                className="border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition duration-300 hidden md:inline"
                            >
                                Dashboard
                            </button>
                            <button
                                onClick={handleLogout}
                                className="border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition duration-300 hidden md:inline"
                            >
                                Log Out
                            </button>
                        </div>
                    ) : (
                        <>
                            <button
                                onClick={() => navigate('/user-login')}
                                className="border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition duration-300 hidden md:inline"
                            >
                                Log In
                            </button>
                            <button
                                onClick={() => navigate('/Landing')}
                                className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition duration-300 hidden md:inline"
                            >
                                Sign Up
                            </button>
                        </>
                    )}
                    <button className="md:hidden" onClick={() => setThemMode(!ThemMode)}>
                        {!ThemMode ? <MoonStar className="w-6 h-6" /> : <Sun className="w-6 h-6" />}
                    </button>

                    <button className="md:hidden" onClick={toggleMenu}>
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden -z-10 fixed top-0 left-0 w-full h-screen bg-black bg-opacity-90 flex flex-col items-center justify-center transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                {navLinks.map((link) => (
                    <NavLink
                        to={`/${link.toLowerCase()}`}
                        key={link}
                        onClick={toggleMenu}
                        className={({ isActive }) =>
                            `text-2xl py-3 hover:text-gray-300 transition duration-300 ${isActive ? "text-gray-300" : "text-white"}`
                        }
                    >
                        {link}
                    </NavLink>
                ))}

                {isLogin ? (
                    <div className="flex flex-col gap-4 mt-4">
                        <button

                            onClick={() => {
                                handleDashboard();
                                toggleMenu();
                            }}
                            className="border border-white px-6 py-3 rounded hover:bg-white hover:text-black transition duration-300 text-xl"
                        >
                            Dashboa
                        </button>
                        <button
                            onClick={() => {
                                handleLogout();
                                toggleMenu();
                            }}
                            className="border border-white px-6 py-3 rounded hover:bg-white hover:text-black transition duration-300 text-xl"
                        >
                            Log Out
                        </button>
                    </div>
                ) : (
                    <>
                        <button
                            onClick={() => {
                                navigate('/user-login');
                                toggleMenu();
                            }}
                            className="mt-4 border border-white px-6 py-3 rounded hover:bg-white hover:text-black transition duration-300 text-xl"
                        >
                            Log In
                        </button>
                        <button
                            onClick={() => {
                                navigate('/Landing');
                                toggleMenu();
                            }}
                            className="mt-4 bg-white text-black px-6 py-3 rounded hover:bg-gray-200 transition duration-300 text-xl"
                        >
                            Sign Up
                        </button>
                    </>
                )}
            </div>
        </header >
    );
};

export default Header;