import React, { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// Create AuthContext
const AuthContext = createContext();

// AuthProvider Component
export const AuthProvider = ({ children }) => {
    const navigate = useNavigate(); // ✅ Defined once at the top
    const [isLogin, setIsLogin] = useState(() => !!localStorage.getItem('token')); // ✅ Initialize from localStorage
    const [showPassword, setShowPassword] = useState(false);
    const [loginFormData, setLoginFormData] = useState({ email: '', password: '' });
    const [signupFormData, setSignupFormData] = useState({ FirstName: '', LastName: '', email: '', password: '' });
    const [captainLoginFormData, setCaptainLoginFormData] = useState({ email: '', password: '' });
    const [captainSignupFormData, setCaptainSignupFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        vehicle: {
            color: '',
            plate: '',
            capacity: '',
            vehicleType: ''
        },
        location: ''
    });


    // For User Login Form
    const handleLoginChange = (e) => {
        const { name, value } = e.target;
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // For User Signup Form
    const handleSignupChange = (e) => {
        const { name, value } = e.target;
        setSignupFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // For Captain Login Form
    const handleCaptainLoginChange = (e) => {
        const { name, value } = e.target;
        setCaptainLoginFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };


    // For Captain Signup Form
    const handleCaptainSignupChange = (e) => {
        const { name, value } = e.target;
    
        setCaptainSignupFormData((prev) => {
            if (name.startsWith("vehicle")) {
                return {
                    ...prev,
                    vehicle: {
                        ...prev.vehicle,
                        [name]: value
                    }
                };
            } else {
                return {
                    ...prev,
                    [name]: value
                };
            }
        });
    };
    


    // Handle user login
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            const response = await axios.post(
                `${import.meta.env.VITE_BASE_API_URL}/user/user-login`,
                loginFormData,
                { headers: { Authorization: `Bearer ${token}` } }
            );
            localStorage.setItem('token', response.data.user.token);
            navigate(`/dashboard?login=true&id=${response.data.user._id}&name=${response.data.user.FirstName}`);
        } catch (error) {
            console.error('Login error:', error);
            alert('Login failed. Please check your credentials.');
        }
    };

    // Handle user signup
    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                `${import.meta.env.VITE_BASE_API_URL}/user/sign-up`,
                signupFormData
            );
            const user = response.data?.user;
            if (!user || !user.token) {
                return navigate('/');
            }
            localStorage.setItem('token', user.token);
            setSignupFormData({ _id: user._id, FirstName: user.FirstName, LastName: user.LastName, email: user.email });
            navigate(`/dashboard?signup=true&id=${user._id}&name=${user.FirstName}`);
        } catch (error) {
            console.error('Signup error:', error);
            alert(error.response?.data?.message || 'Signup failed. Please try again.');
        }
    };

    // Handle captain login
    const handleCaptainLogin = async (e) => {
        const token = localStorage.getItem('captaintoken')
        e.preventDefault();
        try {
            const response = await axios.post(
                `${import.meta.env.VITE_BASE_API_URL}/captain/login`,
                captainLoginFormData, { headers: { Authorization: `Bearer ${token}` } }
            );

            const captain = response.data?.captain; // Ensure correct response structure
            if (!captain || !captain.token) {
                alert('Invalid credentials');
                return;
            }

            localStorage.setItem('captaintoken', captain.token);

            // Redirect to dashboard with captain details
            navigate(`/dashboard?login=true&id=${captain._id}&name=${captain.firstname}`);

        } catch (error) {
            console.error("Login failed:", error);
            alert(error.response?.data?.errors?.[0]?.message || 'Something went wrong');
        }
    };


    // Handle captain registration
    const handleCaptainSignup = async (e) => {
        e.preventDefault();
        try {
            const formattedData = {
                firstname: captainSignupFormData.firstname,
                lastname: captainSignupFormData.lastname,
                email: captainSignupFormData.email,
                password: captainSignupFormData.password,
                vehicle: {
                    color: captainSignupFormData.vehicle.color,
                    plate: captainSignupFormData.vehicle.plate,
                    capacity: captainSignupFormData.vehicle.capacity,
                    vehicleType: captainSignupFormData.vehicle.vehicleType
                },
                location: captainSignupFormData.location
            };

            const response = await axios.post(
                `${import.meta.env.VITE_BASE_API_URL}/captain/register`,
                formattedData
            );

            // Store captain's token
            localStorage.setItem('captaintoken', response.data.captain.token);

            // Navigate to dashboard
            navigate(`/dashboard?captain_register=true&id=`);

        } catch (error) {
            console.error("Signup failed:", error.response?.data || error);
            alert(error.response?.data?.errors?.[0]?.message || 'Something went wrong');
        }
    };

    const handleLogout = async () => {
        try {
            // Call backend logout API
            await axios.post(`${import.meta.env.VITE_BASE_API_URL}/user/logout`, {}, {
                withCredentials: true, // Ensures cookies are sent with the request
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}` // If using token-based auth
                }
            });

            // Remove token from local storage
            localStorage.removeItem('token');

            // Redirect to login page
            navigate('/');

        } catch (error) {
            console.error("Logout failed:", error.response?.data?.message || error.message);
        }
    };

    return (
        <AuthContext.Provider value={{
            showPassword, setShowPassword,
            loginFormData, signupFormData, captainLoginFormData, captainSignupFormData,
            handleSignupChange, handleLoginChange, handleCaptainSignupChange, handleCaptainLoginChange, handleLogin, handleSignup, handleCaptainLogin, handleCaptainSignup, handleLogout, isLogin, setIsLogin
        }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom Hook to use AuthContext
export const useAuth = () => useContext(AuthContext);
