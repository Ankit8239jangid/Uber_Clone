import React, { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
// Create AuthContext
const AuthContext = createContext();

// AuthProvider Component
export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();

    const [isLogin, setIsLogin] = useState(() => !!localStorage.getItem('token') || !!localStorage.getItem('captaintoken'));
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false); // Fixed typo: isloding → isLoading
    const [loginFormData, setLoginFormData] = useState({ email: '', password: '' });
    const [signupFormData, setSignupFormData] = useState({ FirstName: '', LastName: '', email: '', password: '' });
    const [captainLoginFormData, setCaptainLoginFormData] = useState({ email: '', password: '' });
    const [captainSignupFormData, setCaptainSignupFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        vehicle: { color: '', plate: '', capacity: '', vehicleType: '' },
        location: ''
    });

    // Generic Input Handler
    const handleInputChange = (setFormData) => (e) => {
        const { name, value } = e.target;
        setFormData((prev) => {
            if (name.startsWith('vehicle.')) {
                const vehicleField = name.split('.')[1];
                return {
                    ...prev,
                    vehicle: { ...prev.vehicle, [vehicleField]: value }
                };
            }
            return { ...prev, [name]: value };
        });
    };

    // Specific handlers
    const handleLoginChange = handleInputChange(setLoginFormData);
    const handleSignupChange = handleInputChange(setSignupFormData);
    const handleCaptainLoginChange = handleInputChange(setCaptainLoginFormData);
    const handleCaptainSignupChange = handleInputChange(setCaptainSignupFormData);

    // Handle User Login
    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_API_URL}/user/user-login`, loginFormData, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token') || ''}` }
            });
            const { token, _id, FirstName } = response.data.user || {};
            if (!token) throw new Error('No token received');
            localStorage.setItem('token', token);
            setIsLogin(true);
            toast.success('Login successful!');
            setLoginFormData({ email: '', password: '' });
            navigate(`/dashboard?login=true&id=${_id}&name=${FirstName}`);
        } catch (error) {
            const errorMessage = error?.response?.data?.message || 'Login failed. Please try again.';
            toast.error(errorMessage);
        } finally {
            setIsLoading(false);
        }
    };

    // Handle User Signup
    const handleSignup = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_API_URL}/user/sign-up`, signupFormData);
            const { token, _id, FirstName } = response.data.user || {};
            if (!token) throw new Error('No token received');
            localStorage.setItem('token', token);
            setIsLogin(true);
            setSignupFormData({ FirstName: '', LastName: '', email: '', password: '' });
            toast.success('Signup successful!');
            navigate(`/dashboard?signup=true&id=${_id}&name=${FirstName}`);
        } catch (error) {
            const errorMessage = error?.response?.data?.message || error?.response?.data?.errors[0]?.message;
            toast.error(errorMessage);
        } finally {
            setIsLoading(false);
        }
    };

    // Handle Captain Login
    const handleCaptainLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_API_URL}/captain/login`, captainLoginFormData, {
                headers: { Authorization: `Bearer ${localStorage.getItem('captaintoken') || ''}` }
            });
            const { token, _id, firstname } = response.data.captain || {};
            if (!token) throw new Error('No token received');
            localStorage.setItem('captaintoken', token);
            setIsLogin(true);
            setCaptainLoginFormData({ email: '', password: '' });
            toast.success('Captain login successful!');
            navigate(`/captain-dashboard?login=true&id=${_id}&name=${firstname}`);
        } catch (error) {
            const errorMessage = error?.response?.data?.message || 'Invalid email or password';
            toast.error(errorMessage);
        } finally {
            setIsLoading(false);
        }
    };

    // Handle Captain Signup
    const handleCaptainSignup = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_API_URL}/captain/register`, captainSignupFormData);
            const { _id, firstname } = response.data.captain || {};
            if (!response.data.token) throw new Error('No token received');
            localStorage.setItem('captaintoken', response.data.token);
            setIsLogin(true);
            setCaptainSignupFormData({
                firstname: '', lastname: '', email: '', password: '', vehicle: { color: '', plate: '', capacity: '', vehicleType: '' }, location: ''
            });
            toast.success('Captain signup successful!');
            navigate(`/captain-dashboard?captain_register=true&id=${_id}&name=${firstname}`);
        } catch (error) {
            const errorMessage = error?.response?.data?.message || error?.response?.data?.errors[0].message;
            toast.error(errorMessage);
            // console.log(errorMessage)
        } finally {
            setIsLoading(false);
        }
    };


    // Handle Logout
    const handleLogout = async () => {
        setIsLoading(true);
        try {
            const token = localStorage.getItem('token');
            const captainToken = localStorage.getItem('captaintoken');
            const url = token
                ? `${import.meta.env.VITE_BASE_API_URL}/user/logout`
                : `${import.meta.env.VITE_BASE_API_URL}/captain/logout`;
            const authToken = token || captainToken;

            await axios.post(url, {}, {
                headers: { Authorization: `Bearer ${authToken}` },
                withCredentials: true
            });

            localStorage.removeItem('token');
            localStorage.removeItem('captaintoken');
            setIsLogin(false);
            toast.success('Logout successfully')
            navigate('/');
        } catch (error) {
            const errorMessage = error.response?.data?.message || 'Logout failed. Please try again.';

        } finally {
            setIsLoading(false);
        }
    };

    // Handle Dashboard Navigation
    const handleDashboard = () => {
        const token = localStorage.getItem('token');
        const captainToken = localStorage.getItem('captaintoken');

        if (captainToken) {
            setIsLogin(true);
            navigate('/captain-dashboard');
        } else if (token) {
            setIsLogin(true);
            navigate('/dashboard');
        } else {
            setIsLogin(false);
            navigate('/', { replace: true });
        }
    };

    return (
        <AuthContext.Provider
            value={{
                showPassword,
                setShowPassword,
                loginFormData,
                signupFormData,
                captainLoginFormData,
                captainSignupFormData,
                handleLoginChange,
                handleSignupChange,
                handleCaptainLoginChange,
                handleCaptainSignupChange,
                handleLogin,
                handleSignup,
                handleCaptainLogin,
                handleCaptainSignup,
                handleLogout,
                isLogin,
                setIsLogin,
                isLoading, // Updated to match fixed typo
                handleDashboard,
                toast,


            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

// Custom Hook
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth must be used within an AuthProvider');
    return context;
};