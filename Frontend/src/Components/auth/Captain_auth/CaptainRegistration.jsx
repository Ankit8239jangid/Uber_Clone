import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const CaptainRegistration = () => {
    const navigate = useNavigate();
    const {
        captainSignupFormData,
        handleCaptainSignupChange,
        handleCaptainSignup,
        isLoading
    } = useAuth();

    // Memoize the navigation handler
    const handleNavigateToLogin = useCallback(() => {
        navigate('/captain-login');
    }, [navigate]);

    return (
        <div className="min-h-screen bg-black pt-16 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-lg bg-white rounded-xl shadow-lg p-8 space-y-6">
                {/* Header */}
                <div className="text-center">
                    <button
                        onClick={() => navigate('/')}
                        className="mx-auto mb-4 bg-gray-900 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                        U
                    </button>
                    <h2 className="text-2xl font-semibold text-gray-900">
                        Become a Captain
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Join our team and start driving today
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleCaptainSignup} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">
                                First Name
                            </label>
                            <input
                                id="firstname"
                                name="firstname"
                                type="text"
                                value={captainSignupFormData.firstname || ''}
                                onChange={handleCaptainSignupChange}
                                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all disabled:bg-gray-100"
                                placeholder="John"
                                required
                                disabled={isLoading}
                            />
                        </div>
                        <div>
                            <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">
                                Last Name
                            </label>
                            <input
                                id="lastname"
                                name="lastname"
                                type="text"
                                value={captainSignupFormData.lastname || ''}
                                onChange={handleCaptainSignupChange}
                                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all disabled:bg-gray-100"
                                placeholder="Doe"
                                required
                                disabled={isLoading}
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email Address
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={captainSignupFormData.email || ''}
                            onChange={handleCaptainSignupChange}
                            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all disabled:bg-gray-100"
                            placeholder="john.doe@example.com"
                            required
                            disabled={isLoading}
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            value={captainSignupFormData.password || ''}
                            onChange={handleCaptainSignupChange}
                            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all disabled:bg-gray-100"
                            placeholder="••••••••"
                            required
                            minLength={8}
                            disabled={isLoading}
                        />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="vehicleColor" className="block text-sm font-medium text-gray-700">
                                Vehicle Color
                            </label>
                            <input
                                id="vehicleColor"
                                name="vehicle.color"
                                type="text"
                                value={captainSignupFormData.vehicle?.color || ''}
                                onChange={handleCaptainSignupChange}
                                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all disabled:bg-gray-100"
                                placeholder="Blue"
                                required
                                disabled={isLoading}
                            />
                        </div>
                        <div>
                            <label htmlFor="vehiclePlate" className="block text-sm font-medium text-gray-700">
                                License Plate
                            </label>
                            <input
                                id="vehiclePlate"
                                name="vehicle.plate"
                                type="text"
                                value={captainSignupFormData.vehicle?.plate || ''}
                                onChange={handleCaptainSignupChange}
                                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all disabled:bg-gray-100"
                                placeholder="ABC-123"
                                required
                                disabled={isLoading}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="vehicleCapacity" className="block text-sm font-medium text-gray-700">
                                Vehicle Capacity
                            </label>
                            <input
                                id="vehicleCapacity"
                                name="vehicle.capacity"
                                type="number"
                                value={captainSignupFormData.vehicle?.capacity || ''}
                                onChange={handleCaptainSignupChange}
                                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all disabled:bg-gray-100"
                                placeholder="4"
                                required
                                min="1"
                                disabled={isLoading}
                            />
                        </div>
                        <div>
                            <label htmlFor="vehicleType" className="block text-sm font-medium text-gray-700">
                                Vehicle Type
                            </label>
                            <select
                                id="vehicleType"
                                name="vehicle.vehicleType"
                                value={captainSignupFormData.vehicle?.vehicleType || ''}
                                onChange={handleCaptainSignupChange}
                                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all disabled:bg-gray-200"
                                required
                                disabled={isLoading}
                            >
                                <option value="" disabled>Select Vehicle Type</option>
                                <option value="car">Car</option>
                                <option value="motorcycle">Motorcycle</option>
                                <option value="auto">Auto</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                            Location (Optional)
                        </label>
                        <input
                            id="location"
                            name="location"
                            type="text"
                            value={captainSignupFormData.location || ''}
                            onChange={handleCaptainSignupChange}
                            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all disabled:bg-gray-100"
                            placeholder="City, State"
                            disabled={isLoading}
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-gray-900 text-white py-2.5 rounded-lg font-medium hover:bg-gray-800 disabled:bg-gray-600 disabled:cursor-not-allowed transition-all active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                        {isLoading ? (
                            <span className="flex items-center justify-center">
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Registering...
                            </span>
                        ) : (
                            'Join as Captain'
                        )}
                    </button>

                    <p className="text-center text-sm text-gray-600">
                        Already have an account?{' '}
                        <button
                            onClick={handleNavigateToLogin}
                            className="text-green-600 hover:underline font-medium focus:outline-none focus:ring-2 focus:ring-green-500 rounded"
                            disabled={isLoading}
                        >
                            Sign in
                        </button>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default CaptainRegistration;