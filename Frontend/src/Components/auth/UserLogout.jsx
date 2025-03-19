import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function UserLogout() {
    const navigate = useNavigate();

    const token = localStorage.getItem('token');
    useEffect(() => {
        if (!token) {
            navigate('/');
        }
    }, [navigate]); // ✅ Depend on `navigate` to avoid unnecessary re-renders

    const userLogout = () => {
        localStorage.removeItem('token'); // ✅ Remove token on logout
        navigate('/user-login'); // ✅ Redirect to home after logout
    };

    return (
        <>
            <button
                onClick={userLogout}
                className="mt-6 border border-red-600 p-2 rounded bg-red-600 text-white font-semibold 
               hover:scale-105 transition-transform duration-300 active:scale-95"
            >
                Logout
            </button>

        </>
    );
}

export default UserLogout;
