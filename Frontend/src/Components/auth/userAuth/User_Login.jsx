import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Github, Twitter, Facebook } from 'lucide-react';
import video from '/video.mp4';
import { useAuth } from '../../context/AuthContext';

const UserLoginPage = () => {
    const {
        loginFormData, handleLoginChange, handleLogin,
        showPassword, setShowPassword, isLoading
    } = useAuth();

    const navigate = useNavigate();

    // Memoize password toggle function to prevent re-creation
    const togglePasswordVisibility = useCallback(() => {
        setShowPassword(prev => !prev);
    }, [setShowPassword]);

    return (
        <div className="flex h-screen w-screen md:p-4 p-2 bg-green-100">
            <div className="flex flex-col w-full h-full max-w-5xl mx-auto bg-white rounded-lg shadow-lg">
                <div className="flex md:flex-row flex-col h-full">

                    {/* Right side - Login form */}
                    <div className="md:w-1/2 h-full p-8 flex flex-col justify-center">
                        <div className="flex items-center justify-center mb-6">
                            <div className="bg-black p-2 rounded-lg">
                                <span className="text-white font-bold text-xl">U</span>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-center mb-2">Welcome back</h2>
                        <p className="text-center text-gray-600 mb-6">
                            Log in to Uber and take a ride to your destination.
                        </p>

                        <form onSubmit={handleLogin} className="space-y-4">
                            <div>
                                <input
                                    name="email"
                                    value={loginFormData.email}
                                    onChange={handleLoginChange}
                                    type="email"
                                    placeholder="Email"
                                    required
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                />
                            </div>

                            <div className="relative">
                                <input
                                    name="password"
                                    type={showPassword ? 'text' : 'password'}
                                    value={loginFormData.password}
                                    onChange={handleLoginChange}
                                    placeholder="Password"
                                    required
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                />
                                <button
                                    type="button"
                                    onClick={togglePasswordVisibility}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d={
                                                showPassword
                                                    ? 'M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21'
                                                    : 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                                            }
                                        />
                                    </svg>
                                </button>
                            </div>

                            <button
                                type="submit"
                                className="w-full active:scale-95 transition-all bg-green-500 text-white py-3 rounded-lg font-medium hover:bg-green-600"
                                disabled={isLoading}
                            >
                                {isLoading ? 'Please Wait' : 'Login with Email'}
                            </button>

                            <div className="text-xs text-gray-500 text-center">
                                <p>
                                    By continuing, you agree to Uber's{' '}
                                    <a href="#" className="underline">Terms of Service</a>{' '}
                                    and{' '}
                                    <a href="#" className="underline">Privacy Policy</a>.
                                </p>
                            </div>

                            <div className="flex items-center justify-center my-4">
                                <div className="border-t border-gray-300 flex-grow" />
                                <span className="px-3 text-gray-500 text-sm">OR</span>
                                <div className="border-t border-gray-300 flex-grow" />
                            </div>

                            <div className="grid grid-cols-3 gap-2">
                                {[Github, Twitter, Facebook].map((Icon, index) => (
                                    <button
                                        key={index}
                                        type="button"
                                        className="flex items-center justify-center p-2 border rounded-lg hover:bg-gray-50"
                                    >
                                        <Icon className="h-6 w-6" />
                                    </button>
                                ))}
                            </div>

                            <div className="text-center text-sm mt-4">
                                <span className="text-gray-600">Don't have an account?</span>
                                <button
                                    onClick={() => navigate('/user-signup')}
                                    className="text-blue-500 hover:underline ml-1"
                                >
                                    Go to Sign-up
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Left side - Video Illustration */}
                    <div className="md:w-1/2 w-full">
                        <div className="h-full w-full rounded-xl overflow-hidden">
                            <video
                                src={video}
                                muted
                                autoPlay
                                loop
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserLoginPage;
