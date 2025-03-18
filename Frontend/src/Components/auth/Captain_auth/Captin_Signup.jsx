import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Twitter } from 'lucide-react';

const Captin_Signup = () => {

    const navigater = useNavigate()
    const [formData, setFormData] = useState({
        FristName: '',
        LastName: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
        // Add validation logic here
        if (!formData.email || !formData.password) {
            alert('Please fill in all fields');
            return;
        }
        // Proceed with form submission or further processing
        console.log('Form submitted', formData);
        navigater('/')
    }


    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-200 to-gray-300 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-4xl flex flex-col md:flex-row">
                {/* Left Column - Form Section */}
                <div className="w-full md:w-1/2 p-8 bg-gradient-to-b from-yellow-50 to-white">
                    <div className="flex items-center mb-6">
                        <div className="w-8 text-center font-bold  h-8 bg-gray-300 rounded-full mr-2">U</div> {/* Placeholder for logo */}
                        <h1 className="text-xl font-semibold text-gray-800">Uber</h1>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Create an account</h2>
                    <p className="text-gray-600 mb-6">Sign-up To get  50% off on your first ride!</p>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className=" flex gap-2">
                            <input
                                name="FristName"
                                type="text"
                                value={formData.FristName}
                                onChange={handleChange}
                                placeholder="Frist Name"
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
                            type={"text"}
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
                            <span className="">{<Twitter />}</span> {/* Placeholder for Apple icon */}

                        </button>
                        <button className="w-1/2 bag-2 bg-white border border-gray-300 py-2 rounded-md flex items-center justify-center hover:bg-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24">
                                <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"></path>
                            </svg>

                        </button>
                    </div>
                    <p className="text-center text-gray-600 mt-4 text-sm">
                        Already Have any account?  <button onClick={() => navigater('/login')} className="text-blue-500 hover:underline ml-1">Go to Login</button>
                    </p>
                    <p className="text-center text-gray-600 text-sm mt-2">Terms & Conditions</p>
                </div>

                {/* Right Column - Image Section */}
                <div className="w-full md:w-1/2 relative">
                    <img
                        src='https://cdn.dribbble.com/userupload/19662943/file/original-174b6cfb10e5e22011601990871009c9.png?resize=1600x1200&vertical=center'
                        alt="Team working"
                        className="w-full h-full object-cover object-right"
                    />
                    <div className="absolute top-4 right-4 bg-yellow-400 text-black p-2 rounded-md shadow-lg">
                        <p className="font-semibold">Book your Dream Ride</p>
                    </div>
                    <div className="absolute top-[20vh] left-[14vw] transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg shadow-lg">
                        <div className="grid grid-cols-7 gap-1 text-center">
                            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                                <div key={day} className="text-xs text-gray-600">{day}</div>
                            ))}
                            {[22, 23, 24, 25, 26, 27, 28].map((num) => (
                                <div
                                    key={num}
                                    className={`text-xs ${num === 26 ? 'bg-gray-200 rounded-full' : ''}`}
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

export default Captin_Signup;