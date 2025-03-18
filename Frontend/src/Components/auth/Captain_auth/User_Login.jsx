import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Github, Twitter, FacebookIcon } from 'lucide-react';
import video from '/video.mp4'

const CaptanLoginPage = () => {

  const navigater = useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
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
    <div className="flex h-screen w-screen md:p-4 p-2 bg-green-100">
      <div className="flex flex-col w-full h-full  max-w-5xl mx-auto bg-white rounded-lg shadow-lg">
        {/* Main content */}
        <div className="flex md:flex-row h-full flex-col">


          {/* Right side - Sign up form */}
          <div className="md:w-1/2 h-full p-8 flex flex-col">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-black p-2 rounded-lg">
                <span className="text-white font-bold text-xl">U</span>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-center mb-2">welcome back</h2>
            <p className="text-center text-gray-600 mb-6">
              Join Uber today and take a ride to your destination.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div className="relative">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2.5 text-gray-400"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={showPassword ?
                      "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" :
                      "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    } />
                  </svg>
                </button>
              </div>

              <button
                type="submit"
                className="w-full bg-green-500 text-white py-3 rounded-lg font-medium hover:bg-green-600 transition-colors"
              >
                Login with Email
              </button>

              <div className="text-xs text-gray-500 text-center">
                <p>By continuing with Google, Apple, or Email, you agree to Trendhunt's <a href="#" className="underline">Terms of Service</a> and <a href="#" className="underline">Privacy Policy</a>.</p>
              </div>

              <div className="flex items-center justify-center my-4">
                <div className="border-t border-gray-300 flex-grow"></div>
                <span className="px-3 text-gray-500 text-sm">OR</span>
                <div className="border-t border-gray-300 flex-grow"></div>
              </div>

              <div className="grid grid-cols-4 gap-2">
                <button type="button" className="flex items-center justify-center p-2 border rounded-lg hover:bg-gray-50">
                  <Github />
                </button>
                <button type="button" className="flex items-center justify-center p-2 border rounded-lg hover:bg-gray-50">
                  <Twitter />
                </button>
                <button type="button" className="flex items-center justify-center p-2 border rounded-lg hover:bg-gray-50">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24">
                    <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"></path>
                  </svg>
                </button>
                <button type="button" className="flex items-center justify-center p-2 border rounded-lg hover:bg-gray-50">
                  <FacebookIcon />
                </button>
              </div>

              <div className="text-center text-sm">
                <span className="text-gray-600">Don't have account</span>
                <button onClick={() => navigater('/signup')} className="text-blue-500 hover:underline ml-1">Go to Sign-up</button>
              </div>
            </form>


          </div>
          {/* Left side - Illustration */}
          <div className="md:w-1/2 w-full ">
            <div className="h-full w-full rounded-xl overflow-hidden">
              <video
                src={video}
                muted
                autoPlay
                loop
                className="w-full h-full object-cover"
              ></video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaptanLoginPage;