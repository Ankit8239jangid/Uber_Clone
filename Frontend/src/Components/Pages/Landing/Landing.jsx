// src/Components/Pages/Home/Landing.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Car, User, LogIn, UserPlus } from 'lucide-react';
import backgroundImage from '/3d.jpg'; // Add your background image

const Landing = () => {
    const navigate = useNavigate();
    const [role, setRole] = useState(null); // 'user' or 'captain'
    const [action, setAction] = useState(null); // 'login' or 'signup'

    const handleRoleSelection = (selectedRole) => {
        setRole(selectedRole);
    };

    const handleActionSelection = (selectedAction) => {
        setAction(selectedAction);
        if (role) {
            redirectUser(selectedAction);
        }
    };

    const redirectUser = (selectedAction) => {
        if (role === 'user') {
            navigate(selectedAction === 'login' ? '/user-login' : '/user-signup');
        } else if (role === 'captain') {
            navigate(selectedAction === 'login' ? '/captain-login' : '/captain-registration');
        }
    };

    return (
        <div
            className="min-h-screen bg-cover bg-center md:  bg-top flex items-center justify-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="bg-black bg-opacity-70 w-full min-h-screen flex items-center justify-center">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                        Welcome to Your Ride
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl mb-8">
                        Get moving with ease—whether you’re riding or driving.
                    </p>

                    {/* Role Selection */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">Who are you?</h2>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <button
                                onClick={() => handleRoleSelection('user')}
                                className={`flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-lg font-medium transition-colors ${
                                    role === 'user'
                                        ? 'bg-green-500 text-white'
                                        : 'bg-white text-black hover:bg-gray-200'
                                }`}
                            >
                                <User className="w-6 h-6" />
                                User
                            </button>
                            <button
                                onClick={() => handleRoleSelection('captain')}
                                className={`flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-lg font-medium transition-colors ${
                                    role === 'captain'
                                        ? 'bg-green-500 text-white'
                                        : 'bg-white text-black hover:bg-gray-200'
                                }`}
                            >
                                <Car className="w-6 h-6" />
                                Captain
                            </button>
                        </div>
                    </div>

                    {/* Action Selection */}
                    {role && (
                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">What would you like to do?</h2>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <button
                                    onClick={() => handleActionSelection('login')}
                                    className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-black rounded-lg text-lg font-medium hover:bg-gray-200 transition-colors"
                                >
                                    <LogIn className="w-6 h-6" />
                                    Log In
                                </button>
                                <button
                                    onClick={() => handleActionSelection('signup')}
                                    className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-black rounded-lg text-lg font-medium hover:bg-gray-200 transition-colors"
                                >
                                    <UserPlus className="w-6 h-6" />
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Footer Note */}
                    <p className="text-sm text-gray-300">
                        Join thousands of riders and drivers already on the move.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Landing;