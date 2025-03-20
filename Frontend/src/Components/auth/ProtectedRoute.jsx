import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';


function ProtectedRoute({ children }) {
    const navigate = useNavigate();
    const { isLogin, setIsLogin } = useAuth()

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (!token) {
            setIsLogin(false);
            navigate('/user-login', { replace: true }); // ✅ Redirect immediately
        } else {
            setIsLogin(true);
        }
    }, []);


    return isLogin ? children : <div className="bg-black h-screen text-white w-full pt-36 px-10 text-center">
        <h1 className=' text-3xl font-semibold h-48 border  border-red-500  '>you are logend out </h1>
        <ProtectedRoute />
    </div>; // ✅ Render content only if logged in
}

export default ProtectedRoute;
