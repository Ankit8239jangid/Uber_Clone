import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Github, Twitter, Facebook } from 'lucide-react';
import video from '/video.mp4';
import { useAuth } from '../../context/AuthContext';

const UserLoginPage = () => {
    const {
        loginFormData,
        handleLoginChange,
        handleLogin,
        showPassword,
        setShowPassword,
        isLoading
    } = useAuth();

    const navigate = useNavigate();

    const togglePasswordVisibility = useCallback(() => {
        setShowPassword(prev => !prev);
    }, [setShowPassword]);

    return (
        <div className="min-h-screen  flex items-center justify-center p-4 mt-10">
            <div className="w-full max-w-4xl bg-transparent rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
                {/* Left side - Video */}
                <div className="md:w-1/2 w-full h-64 md:h-auto">
                    <video
                        src={video}
                        muted
                        autoPlay
                        loop
                        className="w-full h-full object-cover"
                        onError={(e) => console.error('Video failed to load:', e)}
                    />
                </div>

                {/* Right side - Login form */}
                <div className="md:w-1/2 w-full p-6 md:p-8 flex flex-col justify-center">
                    <div className="flex justify-center mb-6">
                        <button
                            onClick={() => navigate('/')}
                            className="bg-gray-900 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-gray-800 transition-colors"
                        >
                            U
                        </button>
                    </div>

                    <h2 className="text-2xl font-semibold text-gray-900 text-center mb-2">
                        Welcome Back
                    </h2>
                    <p className="text-gray-600 text-center text-sm mb-6">
                        Log in to continue your journey
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
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
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
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                aria-label={showPassword ? 'Hide password' : 'Show password'}
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d={showPassword
                                            ? 'M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21'
                                            : 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                                        }
                                    />
                                </svg>
                            </button>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-gray-900 text-white py-2.5 rounded-lg font-medium hover:bg-gray-800 disabled:bg-gray-600 disabled:cursor-not-allowed transition-all active:scale-[0.98]"
                        >
                            {isLoading ? 'Logging in...' : 'Sign In'}
                        </button>

                        <div className="flex items-center justify-center my-4">
                            <div className="border-t border-gray-200 flex-grow" />
                            <span className="px-3 text-gray-500 text-xs uppercase">Or</span>
                            <div className="border-t border-gray-200 flex-grow" />
                        </div>

                        <div className="grid grid-cols-3 gap-3">
                            {[Github, Twitter, Facebook].map((Icon, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center"
                                >
                                    <Icon className="h-5 w-5 text-gray-700" />
                                </button>
                            ))}
                        </div>

                        <p className="text-xs text-gray-500 text-center mt-4">
                            New to Uber?{' '}
                            <button
                                onClick={() => navigate('/user-signup')}
                                className="text-green-600 hover:underline font-medium"
                            >
                                Create an account
                            </button>
                        </p>

                        <p className="text-xs text-gray-400 text-center mt-2">
                            By signing in, you agree to our{' '}
                            <a href="#" className="underline hover:text-gray-600">Terms</a>
                            {' '}and{' '}
                            <a href="#" className="underline hover:text-gray-600">Privacy Policy</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UserLoginPage;