import { useNavigate } from 'react-router-dom';
import { Car, User } from 'lucide-react';

const Landing = () => {
    const navigate = useNavigate();

    const handleNavigation = (role) => {
        navigate(role === 'user' ? '/user-signup' : '/captain-registration');
    };

    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
            <div className="max-w-2xl w-full bg-white/5 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-gray-800/50">
                <div className="text-center mb-10">
                    <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                        Ride Your Way
                    </h1>
                    <p className="text-gray-400 mt-2 text-sm md:text-base">
                        Choose how you want to get started
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <button
                        onClick={() => handleNavigation('user')}
                        className="group relative overflow-hidden bg-white/10 p-6 rounded-xl border border-gray-700/50 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                        <div className="flex flex-col items-center gap-3">
                            <User className="w-10 h-10 text-green-400 group-hover:scale-110 transition-transform" />
                            <span className="text-white font-medium text-lg">
                                Ride with Us
                            </span>
                            <span className="text-gray-400 text-sm">
                                Book your journey now
                            </span>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>

                    <button
                        onClick={() => handleNavigation('captain')}
                        className="group relative overflow-hidden bg-white/10 p-6 rounded-xl border border-gray-700/50 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                        <div className="flex flex-col items-center gap-3">
                            <Car className="w-10 h-10 text-green-400 group-hover:scale-110 transition-transform" />
                            <span className="text-white font-medium text-lg">
                                Drive with Us
                            </span>
                            <span className="text-gray-400 text-sm">
                                Start earning today
                            </span>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Landing;