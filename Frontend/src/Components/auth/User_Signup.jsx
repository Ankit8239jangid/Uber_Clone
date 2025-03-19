import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Twitter } from 'lucide-react';
import whomanSinupimage from '/Signup.webp'
import axios from 'axios';

const User_Signup = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        FirstName: '',
        LastName: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/api/v1/user/sign-up', formData);
            localStorage.setItem('token', response.data.user.token); // Store the token   
            if (response.data?.user) {
                navigate(`/dashbord?signup=true&id=${response.data.user.id}&name=${response.data.user.firstname}`);
            } else {
                console.error('User data missing in response');
            }
        } catch (error) {
            console.error('Signup error:', error);
            alert("Sign-up failed. Please check your credentials.");
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-zinc-200 to-green-300 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-4xl flex flex-col md:flex-row">
                {/* Left Column - Form Section */}
                <div className="w-full md:w-1/2 p-8 bg-gradient-to-b from-yellow-50 to-white">
                    <div className="flex items-center mb-6">
                        <div className="w-8 text-center font-bold h-8 bg-gray-300 rounded-full mr-2">U</div>
                        <h1 className="text-xl font-semibold text-gray-800">Uber</h1>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Create an account</h2>
                    <p className="text-gray-600 mb-6">Sign-up To get 50% off on your first ride!</p>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="flex gap-2">
                            <input
                                name="FirstName"
                                type="text"
                                value={formData.FirstName}
                                onChange={handleChange}
                                placeholder="First Name"
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            />
                            <input
                                name="LastName"
                                type="text"
                                value={formData.LastName}
                                onChange={handleChange}
                                placeholder="Last Name"
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            />
                        </div>
                        <input
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />
                        <input
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Password"
                            required
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />
                        <button
                            type="submit"
                            className="w-full bg-yellow-500 text-black font-semibold py-2 rounded-md hover:bg-yellow-600 transition"
                        >
                            SUBMIT
                        </button>
                    </form>
                    <div className="flex space-x-4 mt-4">
                        <button className="w-1/2 gap-2 bg-white border border-gray-300 py-2 rounded-md flex items-center justify-center hover:bg-gray-100">
                            <span className="">{<Twitter />}</span>
                        </button>
                        <button className="w-1/2 bg-white border border-gray-300 py-2 rounded-md flex items-center justify-center hover:bg-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24">
                                <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"></path>
                            </svg>
                        </button>
                    </div>
                    <p className="text-center text-gray-600 mt-4 text-sm">
                        Already Have an account? <button onClick={() => navigate('/login')} className="text-blue-500 hover:underline ml-1">Go to Login</button>
                    </p>
                    <p className="text-center text-gray-600 text-sm mt-2">Terms & Conditions</p>
                </div>

                {/* Right Column - Image Section */}
                <div className="w-full md:w-1/2 relative">
                    <img
                        src={whomanSinupimage}
                        alt="Team working"
                        className="w-full h-full object-cover object-right"
                    />
                    <div className="absolute md:top-4 top-8 right-4 bg-yellow-400 text-black p-1 rounded-tr-xl rounded-tl-xl  rounded-bl-xl  shadow-lg">
                        <p className="font-semibold">Book your Dream Ride in Advance</p>
                    </div>
                    <div className="absolute top-[19vh] md:left-[14vw] left-[27vw] transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg shadow-lg">
                        <div className="grid grid-cols-7 gap-1 text-center">
                            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                                <div key={day} className="text-xs text-gray-600">{day}</div>
                            ))}
                            {[22, 23, 24, 25, 26, 27, 28].map((num) => (
                                <div
                                    key={num}
                                    className={`text-xs ${num === 26 ? 'bg-green-400 rounded-full' : ''}`}
                                >
                                    {num}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User_Signup;

